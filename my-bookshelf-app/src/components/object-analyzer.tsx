import React from 'react';

export interface ObjectResult {
  name: string;
  category: string;
  history: string;
  chemicalCompound: string;
  confidence: number;
}

interface ObjectDetailsAnalyzerProps {
  results: ObjectResult[];
}

export function ObjectDetailsAnalyzer({ results }: ObjectDetailsAnalyzerProps) {
  return (
    <div className="space-y-4">
      {results.map((result, index) => (
        <div key={index} className="border rounded-lg p-4 bg-white shadow">
          <h3 className="text-lg font-semibold text-gray-900">{result.name}</h3>
          <p className="text-sm text-gray-600 mb-2">Category: {result.category}</p>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-gray-800">Historical Background:</h4>
              <p className="text-sm text-gray-700">{result.history}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800">Chemical Composition:</h4>
              <p className="text-sm text-gray-700">{result.chemicalCompound}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Confidence: {result.confidence}%
              </span>
              <div className={`px-2 py-1 rounded text-xs ${
                result.confidence >= 80 ? 'bg-green-100 text-green-800' :
                result.confidence >= 60 ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {result.confidence >= 80 ? 'High' :
                 result.confidence >= 60 ? 'Medium' : 'Low'}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}