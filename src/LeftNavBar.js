import React from 'react';

const LeftNavBar = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-white">
      <div className="flex items-center justify-center h-16 ">
        <span className="text-purple-500 text-2xl font-bold">Logo</span>
      </div>
      <div className="flex-grow">
        <nav>
          <ul className="flex flex-col py-4">
            <li className="px-4 py-2 text-purple-500 hover:bg-purple-500 hover:text-white">
              <a href="#">Home</a>
            </li>
            <li className="px-4 py-2 text-purple-500 hover:bg-purple-500 hover:text-white">
              <a href="#">Insurance</a>
            </li>
            <li className="px-4 py-2 text-purple-500 hover:bg-purple-500 hover:text-white">
              <a href="#">Negotiation</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-auto">
        <nav>
          <ul className="flex flex-col py-4">
            <li className="px-4 py-2 text-purple-500 hover:bg-purple-500 hover:text-white">
              <a href="#">Profile</a>
            </li>
            <li className="px-4 py-2 text-purple-500 hover:bg-purple-500 hover:text-white">
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeftNavBar;