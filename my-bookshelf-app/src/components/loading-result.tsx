import React from 'react';

export function LoadingResults() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="relative mb-8">
        {/* Animated scanning effect */}
        <div className="w-32 h-32 border-4 border-gray-200 rounded-lg relative overflow-hidden">
          {/* Scanning line animation */}
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 animate-pulse"></div>
          <div className="absolute top-4 left-0 w-full h-1 bg-blue-400 animate-pulse delay-200"></div>
          <div className="absolute top-8 left-0 w-full h-1 bg-blue-300 animate-pulse delay-500"></div>
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700 mb-2">
          Analyzing your image...
        </p>
        <p className="text-sm text-gray-500">
          Identifying objects and their details
        </p>
      </div>
      
      {/* Progress dots */}
      <div className="flex mt-4 space-x-2">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-100"></div>
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-200"></div>
      </div>
    </div>
  );
}
