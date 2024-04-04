// Section7.jsx
import React from 'react';

const Section7 = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <div className="mb-8">
        <div className="mb-4">
          <hr className="border-b-2 border-gray-400 inline-block w-1/4 mb-2" />
          <span className="text-3xl font-bold mx-4">Things To Do</span>
          <hr className="border-b-2 border-gray-400 inline-block w-1/4 mb-2" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 justify-center">
        {/* Card 1 */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Card Title 1</h3>
          <p className="text-gray-700 mb-4">Card Description 1</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Card Title 2</h3>
          <p className="text-gray-700 mb-4">Card Description 2</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Card Title 3</h3>
          <p className="text-gray-700 mb-4">Card Description 3</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Card Title 4</h3>
          <p className="text-gray-700 mb-4">Card Description 4</p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Flamingistics</h2>
        <p className="text-lg mb-4">Tempting information that will make Dubai your next destination</p>
        <div className="flex items-center justify-center">
          {/* Icon 1 */}
          <div className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm1.031 0A6.969 6.969 0 008 16.969 6.969 0 0015.969 10 6.969 6.969 0 008 3.031 6.969 6.969 0 002.031 10zM10 4.906a.906.906 0 100 1.812.906.906 0 000-1.812zm0 8.844a.906.906 0 100 1.813.906.906 0 000-1.813z" clipRule="evenodd" />
            </svg>
          </div>
          {/* Icon 2 */}
          <div className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.938 10.593c.538.863 1.29 1.616 2.153 2.154l1.415-2.015a3 3 0 00-1.94-4.929l-.79-1.706A.5.5 0 005 4.5v9c0 .28.22.5.5.5h9a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-1a1 1 0 110-2h1c.827 0 1.5.673 1.5 1.5v4c0 1.654-1.346 3-3 3h-9c-1.654 0-3-1.346-3-3v-9c0-.146.066-.343.146-.441l1.443-2.47a1 1 0 00-1.625-1.115l-1.886 2.783a2.997 2.997 0 00-1.96 4.927l2.25 3.204zm-1.406-.19a1 1 0 00-1.625-1.114l-3.376 4.815a3.997 3.997 0 002.614 6.572h9a4 4 0 003.994-3.8L16.375 10H5.875zM2 8.5v-4a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5zM7.5 14a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4zM13 8.5v-4a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5zM18.5 14a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4z" clipRule="evenodd" />
            </svg>
          </div>
          {/* Icon 3 */}
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm1.031 0A6.969 6.969 0 008 16.969 6.969 0 0015.969 10 6.969 6.969 0 008 3.031 6.969 6.969 0 002.031 10zM10 4.906a.906.906 0 100 1.812.906.906 0 000-1.812zm0 8.844a.906.906 0 100 1.813.906.906 0 000-1.813z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
