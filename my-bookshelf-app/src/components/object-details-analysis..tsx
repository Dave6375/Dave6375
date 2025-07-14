import React from 'react';
import { Card, CardContent } from './ui/card';

export type ObjectResult = {
  name: string;
  type: string;
  confidence: number;
  description?: string;
};

interface ObjectResultsProps {
  results: ObjectResult[];
}

export function ObjectResults({ results }: ObjectResultsProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((object, index) => (
          <Card key={index} className="overflow-hidden h-full border hover:shadow-md transition-shadow duration-300">
            {/* Confidence indicator bar */}
            <div 
              className="h-2" 
              style={{ 
                background: `linear-gradient(to right, #3b82f6 ${Math.round(object.confidence * 100)}%, #e5e7eb 0%)` 
              }}
            />
            
            <CardContent className="p-5">
              <div className="space-y-3">
                <h3 className="font-medium text-lg text-gray-900">
                  {object.name}
                </h3>
                
                <p className="text-sm text-gray-600">
                  Type: {object.type}
                </p>
                
                {object.description && (
                  <p className="text-sm text-gray-500">
                    {object.description}
                  </p>
                )}
                
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-gray-500">Confidence</span>
                  <span className={`text-sm font-medium ${
                    object.confidence >= 0.8 ? 'text-green-600' : 
                    object.confidence >= 0.5 ? 'text-yellow-600' : 
                    'text-red-600'
                  }`}>
                    {Math.round(object.confidence * 100)}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {results.length > 0 && (
        <div className="text-center text-sm text-gray-500 mt-6 pt-4 border-t">
          <p>Found {results.length} object{results.length !== 1 ? 's' : ''} in your image</p>
        </div>
      )}
    </div>
  );
}