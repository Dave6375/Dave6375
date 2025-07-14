import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface UploadAreaProps {
  onFileSelected: (file: File) => void;
}

export function UploadArea({ onFileSelected }: UploadAreaProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelected(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div 
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors"
      onClick={handleClick}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      
      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      
      <p className="text-lg font-medium text-gray-700 mb-2">
        Upload an image to analyze
      </p>
      
      <p className="text-sm text-gray-500">
        Click here or drag and drop an image file
      </p>
    </div>
  );
}