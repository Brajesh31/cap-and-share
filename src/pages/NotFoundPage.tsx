import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <Coffee className="h-16 w-16 text-green-500 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-md">
        Oops! The page you're looking for seems to have been eaten.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition"
      >
        <Home className="h-5 w-5 mr-2" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;