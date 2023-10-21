import React from 'react';

const name = 'Anubha Vishwakarma';

const menuItems = [
  {
    name: 'My Savings',
    link: '#',
    icon: '/coin-circle-svgrepo-com.svg'
  },
  {
    name: 'Notifications',
    link: '#',
    icon: '/notification-svgrepo-com.svg'
  },
  {
    name: 'Help',
    link: '#',
    icon: '/help-circle-svgrepo-com.svg'
  }
]

const TopNavBar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-blue-50 p-5">
    <div className="flex items-center flex-shrink-0 text-purple-500 mr-6">
      <span className="font-bold text-4xl tracking-tight text-custom-gray">Hello, </span>
      <span className="font-bold text-4xl tracking-tight text-purple-500">&nbsp;{name.split(' ')[0]}</span>
      <span>
        <img src="/hand-shake-svgrepo-com.svg" alt="Wave" className="w-8 h-8 ml-2"></img>
      </span>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
      </div>
      <div className='flex flex-row'>
        {menuItems.map((item, index) => (
          <div key={index} className="text-sm flex items-center lg:flex-grow">
            <a href={item.link} className="flex mt-4 lg:flex lg:mt-0 text-custom-gray hover:text-purple-500 mr-4">
              <span className='flex flex-row'><img src={item.icon} alt={item.name} className="mr-1 h-6 w-6" />
              {item.name}</span>
            </a>
          </div>
        ))}
        <button className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-4 rounded">
          + Check Bill
        </button>
      </div>
    </div>
  </nav>
);

export default TopNavBar;