import React from 'react';

const TopNavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 text-purple-500 mr-6">
        <span className="font-semibold text-xl tracking-tight">Hello</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
        </div>
        <div>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mr-2">
            My Savings
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mr-2">
            Notification
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mr-2">
            Help
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
            Check Bill
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;