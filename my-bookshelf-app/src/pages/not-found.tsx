import React from 'react';
import { Link } from 'wouter';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
          
          <Search className="mx-auto h-16 w-16 text-gray-400 mb-6" />
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          
          <Link href="/">
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </button>
          </Link>
        </div>
        
        <p className="text-gray-500 text-sm mt-6">
          Need help? Try uploading an image to identify objects.
        </p>
      </div>
    </div>
  );
}