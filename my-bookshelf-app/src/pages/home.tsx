import React, { useState } from 'react';
import { AlertCircle, Upload, Loader2, Eye, Settings } from 'lucide-react';
import { aiAnalysisService } from '../lib/aiService';


export type ObjectResult = {
  name: string;
  category: string;
  history: string;
  chemicalCompound: string;
  confidence: number;
};

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<ObjectResult[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showConfig, setShowConfig] = useState(false);
  const [config] = useState(aiAnalysisService.getConfiguration());

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setResults([]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setResults([]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const analyzeImage = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    try {
      // Convert file to base64
      const base64 = await fileToBase64(selectedFile);
      
      // Analyze the image
      const analysisResults = await aiAnalysisService.analyzeImage(base64);
      setResults(analysisResults);
      
    } catch (error) {
      console.error('Error analyzing image:', error);
      alert('Error analyzing image. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result.split(',')[1]);
        } else {
          reject(new Error('Failed to convert file to base64'));
        }
      };
      reader.onerror = reject;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Object Identifier
            </h1>
            <button
              onClick={() => setShowConfig(!showConfig)}
              className="p-2 rounded-full hover:bg-white/50 transition-colors"
              title="Configuration"
            >
              <Settings className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            Upload an image to identify objects with AI-powered analysis
          </p>
          
          {/* Configuration Status */}
          {showConfig && (
            <div className="bg-white rounded-lg shadow-lg p-4 mb-4 text-left">
              <h3 className="font-semibold text-gray-900 mb-3">Configuration Status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${config.hasApiKey ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span>API Key: {config.hasApiKey ? 'Configured' : 'Not configured'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${config.useMockData ? 'bg-yellow-500' : 'bg-green-500'}`} />
                  <span>Mode: {config.useMockData ? 'Mock Data' : 'Real AI Analysis'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span>AI Service: {config.aiService}</span>
                </div>
              </div>
              {!config.hasApiKey && (
                <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-md">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-amber-800">No API key configured</p>
                      <p className="text-amber-700 mt-1">
                        Add your OpenAI API key to <code className="bg-amber-100 px-1 rounded">.env</code> file:
                      </p>
                      <code className="block mt-2 bg-amber-100 p-2 rounded text-xs">
                        REACT_APP_OPENAI_API_KEY=your_api_key_here<br />
                        REACT_APP_USE_MOCK_DATA=false
                      </code>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </header>

        {/* Upload Area */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors"
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">
                Drop an image here or click to upload
              </p>
              <p className="text-sm text-gray-500">
                Supports JPG, PNG, GIF up to 10MB
              </p>
            </label>
          </div>

          {previewUrl && (
            <div className="mt-6">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-full max-h-64 mx-auto rounded-lg shadow-md"
              />
              <div className="text-center mt-4">
                <button
                  onClick={analyzeImage}
                  disabled={isAnalyzing}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Eye className="h-5 w-5" />
                      Analyze Image
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Analysis Results
            </h2>
            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {result.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      result.confidence >= 80 
                        ? 'bg-green-100 text-green-800'
                        : result.confidence >= 60
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {result.confidence}% confident
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">
                    <span className="font-medium">Category:</span> {result.category}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Historical Background:
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {result.history}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Chemical Composition:
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {result.chemicalCompound}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}