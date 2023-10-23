import React, { useState } from "react";

const LeftNavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ index: 0, list: "top" });
  const [isLeftVisible, setLeftVisible] = useState(false);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItemsTop = [
    {
      name: "Home",
      link: "/#",
      icon: "/home-smile-angle-svgrepo-com.svg",
      selected: true,
    },
    {
      name: "Insurance",
      link: "/#",
      icon: "/receipt-2-1-svgrepo-com.svg",
      selected: false,
    },
    {
      name: "Negotiation",
      link: "/#",
      icon: "/chat-round-svgrepo-com.svg",
      selected: false,
    },
  ];

  const menuItemsBottom = [
    {
      name: "Profile",
      link: "/#",
      icon: "/profile-circle-svgrepo-com.svg",
      selected: false,
    },
    {
      name: "Logout",
      link: "/#",
      icon: "/logout-2-svgrepo-com.svg",
      selected: false,
    },
  ];
  const allMenuItems = [...menuItemsTop, ...menuItemsBottom];

  return (
    <div>
      <div className={isLeftVisible ? "mob-hidden":"button-trigger"}>
        <button
          onClick={() => setLeftVisible(!isLeftVisible)}
          className="absolute left-5 top-10 w-6 h-6 bg-white rounded-full drop-shadow mob-custom-sidebar"
        >
          <img
              src={ "/right-arrow-backup-2-svgrepo-com.svg"}
              alt="Toggle"
              className={isLeftVisible ? "mob-hidden":"w-4 h-4 mx-auto"}
            />
        </button>
      </div>
      <div
        className={`flex flex-col h-screen ${
          isCollapsed ? "w-16" : "w-48"
        } bg-blue-50 border-r border-gray-300 transition-all duration-200 mob-zindex-sidebar col-mob ${isLeftVisible ? 'visible' : 'hidden'}`}
      >
        <div className="relative flex items-center justify-start h-16 ">
          <button
            onClick={!isLeftVisible ? handleCollapse : () => setLeftVisible(!isLeftVisible)}
            className="absolute right-0 transform translate-x-1/2 -translate-y-1/2 top-3/4 w-6 h-6 bg-white rounded-full drop-shadow"
          >
            <img
              src={
                isCollapsed
                  ? "/right-arrow-backup-2-svgrepo-com.svg"
                  : "/left-arrow-backup-2-svgrepo-com.svg"
              }
              alt="Toggle"
              className="w-4 h-4 mx-auto"
            />
          </button>
          <span className="text-purple-500 text-2xl font-bold">
            <img src="/truffle_logo.svg" alt="Logo" className="logo ml-2"></img>
          </span>
        </div>
        <div className="flex-grow mt-4">
          <nav>
            <ul className="flex flex-col py-4">
              {menuItemsTop.map((item, index) => (
                <li
                  key={index}
                  className={`px-4 py-2 text-custom-gray hover:bg-purple-500 rounded-r-full mr-3 hover:text-white flex items-center text-lg font-semibold mb-2 ${
                    selectedItem.list === "top" && selectedItem.index === index
                      ? "bg-purple-500 rounded-r-full mr-3 text-white"
                      : ""
                  }`}
                  onClick={() => setSelectedItem({ index, list: "top" })}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="mr-2 h-6 w-6"
                  />
                  {!isCollapsed && <a href={item.link}>{item.name}</a>}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-auto">
          <nav>
            <ul className="flex flex-col py-4">
              {menuItemsBottom.map((item, index) => (
                <li
                  key={index}
                  className={`px-4 py-2 text-custom-gray hover:bg-purple-500 rounded-r-full mr-3 hover:text-white flex items-center text-lg font-semibold mb-2 ${
                    selectedItem.list === "bottom" &&
                    selectedItem.index === index
                      ? "bg-purple-500 rounded-r-full mr-3 text-white"
                      : ""
                  }`}
                  onClick={() => setSelectedItem({ index, list: "bottom" })}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="mr-2 h-6 w-6"
                  />
                  {!isCollapsed && <a href={item.link}>{item.name}</a>}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default LeftNavBar;
