
// 404.tsx

import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl text-gray-800 mb-4">Page Not Found</p>
        <p className="text-gray-600">Oops! The page you are looking for might be in another castle.</p>
        <a href="/" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go Home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
