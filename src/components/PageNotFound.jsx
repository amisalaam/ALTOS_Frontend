import React from 'react';

function PageNotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-black dark:text-white">404</h1>
        <p className="text-2xl md:text-3xl font-light text-black dark:text-gray-400 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-lg md:text-xl font-light text-black dark:text-gray-400 mt-2">
          It might have been moved or deleted.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
