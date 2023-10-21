import React from "react";

const GroupMemberCircle = ({ name }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return <div className="group-member-circle">{initials}</div>;
};

const BillList = () => {
  const bills = [
    {
      id: 1,
      name: "John",
      amount: 100,
      picture: "/bill1.jpeg",
      dateOfBill: "123",
      dueOfBill: "456",
    },
    {
      id: 2,
      name: "John",
      amount: 50,
      picture: "/bill1.jpeg",
      dateOfBill: "123",
      dueOfBill: "456",
    },
    {
      id: 3,
      name: "John",
      amount: 75,
      picture: "/bill1.jpeg",
      dateOfBill: "123",
      dueOfBill: "456",
    },
  ];

  const negotiationSteps = [
    "Upload your bill",
    "Check your bill to find saving opportunities",
    "Improve basic information",
    "Leave the negotiation work to Truffle",
  ];

  const groupInfo = {
    name: "Anthem Group",
    members: ["Anubha Vishwakarma", "John Doe", "Jane Doe", "Harry Potter"],
  };

  return (
    <div className="billListContainer">
      <div className="column1">
        <div className="w-full h-28 ml-4 py-2 px-2 mt-3 custom-banner rounded-xl">
          <div className="billListContainer">
            <div className="column1">
              <div className="text-xs text-white font-thin ml-3 mt-2">
                Do you know that 80% of medical bills have errors?
              </div>
              <div className="text-lg text-white font-normal ml-3 mt-1">
                Picture, Upload, and check a bill.
              </div>
              <div>
                <button className="bg-white text-purple-500 text-md font-medium py-1 px-4 rounded mt-1 ml-3">
                  Checking Now
                </button>
              </div>
            </div>
            <div className="column2 flex flex-row justify-end mr-5">
              <img
                src="/money-svgrepo-com.svg"
                alt="cash"
                className="w-16"
              ></img>
              <img
                src="/piggy-bank-save-svgrepo-com.svg"
                alt="cash"
                className="w-20"
              ></img>
              <img
                src="/bill-ecommerce-invoice-2-svgrepo-com.svg"
                alt="cash"
                className="w-16"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="column2 ml-7 mr-3">
        <div className="w-full h-48 bg-blue-100 rounded-xl mt-3 py-4 px-4">
          <div className="text-gray-400 text-sm font-semibold uppercase antialiased">
            Let's start with the savings.
          </div>
          <div className="text-custom-gray text-base font-semibold antialiased">
            4 steps for Bill Negotiation :)
          </div>
          <div className="horizontalLine"></div>
          <div className="text-purple-500 mt-3">
            {negotiationSteps.map((item, index) => (
              <div key={index} className="text-sm font-semibold antialiased">
                <span className="text-sm font-semibold antialiased flex flex-row line-through">
                  <img
                    src="/check-circle-svgrepo-com.svg"
                    alt="check"
                    className="w-4 mr-2"
                  ></img>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-24 bg-white rounded-xl mt-3 py-4 px-4">
          <div className="flex flex row text-gray-400 text-sm">
            <div className="font-semibold uppercase antialiased justify-start">
              Insurance Account
            </div>
            <div className="font-normal antialiased justify-end ml-auto">
              Edit
            </div>
          </div>
          <div className="flex flex row text-custom-gray text-sm mt-3">
            <div className="font-semibold antialiased justify-start">
              {groupInfo.name}
            </div>
            <div className="font-normal antialiased justify-end ml-auto flex flex-row">
              {groupInfo.members.map((member, index) => (
                <GroupMemberCircle key={index} name={member} />
              ))}
              <button className="down-arrow-button">
                <img src="/down-arrow.svg" alt="Down arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillList;
