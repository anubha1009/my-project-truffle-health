import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import { useNavigate } from 'react-router-dom';

const GroupMemberCircle = ({ name }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return <div className="group-member-circle">{initials}</div>;
};

const BillList = () => {
  const [date, setDate] = useState(new Date());
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const navigate = useNavigate();
  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };
  const dateArray = [
    {
      date: "2023-10-25T09:47:17.456000Z",
      colorName: "red-dot",
      providerName: "XYZ Hospital",
      billType: "Prescription",
    },
    {
      date: "2023-10-26T09:47:17.456000Z",
      colorName: "red-dot",
      providerName: "XYZ Hospital",
      billType: "Consultation",
    }
  ];
  function setClass(date) {
    const dateobj = dateArray.find((x) => {
      return (
        date.getDay() === new Date(x.date).getDay() &&
        date.getMonth() === new Date(x.date).getMonth() &&
        date.getDate() === new Date(x.date).getDate()
      );
    });
    return dateobj ? dateobj.colorName : "";
  }

  const handleCheckBill = (bill) => {
    navigate('/bill-summary', { state: { data: bill } });
  };

  const bills = [
    {
      id: 1,
      name: "John",
      amount: 100,
      picture: "/bill1.jpeg",
      dateOfBill: new Date("2021-10-15T09:47:17.456000Z"),
      dueOfBill: new Date("2021-10-25T09:47:17.456000Z"),
      isNew: true,
      isPaid: false,
      provider: "XYZ Hospital",
    },
    {
      id: 2,
      name: "John",
      amount: 50,
      picture: "/bill2.jpeg",
      dateOfBill: new Date("2021-10-15T09:47:17.456000Z"),
      dueOfBill: new Date("2021-10-26T09:47:17.456000Z"),
      isNew: false,
      isPaid: false,
      provider: "XYZ Hospital",
    },
    {
      id: 3,
      name: "John",
      amount: 75,
      picture: "/bill3.jpeg",
      dateOfBill: new Date("2021-10-15T09:47:17.456000Z"),
      dueOfBill: new Date("2021-10-27T09:47:17.456000Z"),
      isNew: false,
      isPaid: true,
      provider: "XYZ Hospital",
    },
  ];

  const filters = ["All", "Unchecked", "In Negotiation", "Paid"];
  let [currentFilter, setCurrentFilter] = useState("All");
  let [currentBills, setCurrentBills] = useState(bills);

  useEffect(() => {
    switch (currentFilter) {
      case "All":
        setCurrentBills(bills);
        break;
      case "Unchecked":
        setCurrentBills(bills.filter((bill) => bill.isNew));
        break;
      case "In Negotiation":
        setCurrentBills(bills.filter((bill) => !bill.isNew && !bill.isPaid));
        break;
      case "Paid":
        setCurrentBills(bills.filter((bill) => bill.isPaid));
        break;
      default:
        setCurrentBills([]);
    }
  }, [currentFilter]);

  const getBillCount = (filter) => {
    switch (filter) {
      case "All":
        return bills.length;
      case "Unchecked":
        return bills.filter((bill) => bill.isNew).length;
      case "In Negotiation":
        return bills.filter((bill) => !bill.isNew && !bill.isPaid).length;
      case "Paid":
        return bills.filter((bill) => bill.isPaid).length;
      default:
        return 0;
    }
  };

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
        <div className="h-28 ml-4 py-2 px-2 mt-3 custom-banner rounded-xl mr-3">
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
            <div className="column2 flex flex-row justify-end mr-5 mob-hidden">
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

        <div className="mt-3 py-4 px-4">
          <div className="font-bold text-custom-gray">My Bills</div>

          <div className="filterContainer">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setCurrentFilter(filter)}
                className={
                  currentFilter === filter ? "activeFilter" : "inactiveFilter"
                }
              >
                {filter} ({getBillCount(filter)})
              </button>
            ))}
          </div>

          
        </div>

        <div className="bill-card-container ml-4 mr-4">
            {currentBills.map((bill) => (
              <div
                key={bill.id}
                className="bg-white rounded-xl mb-3 px-4 py-4"
              >
                <div className="flex flex-row">
                  <div className="flex column2-card">
                    <img
                      src={bill.picture}
                      alt="bill"
                      className="w-32 h-fit lg:h-full rounded-lg shadow-xl"
                    ></img>
                  </div>

                  <div className="flex-1 flex-col ml-8">
                    <div className="flex flex-row items-center">
                      <div className="text-sm text-custom-gray font-semibold flex flex-row justify-start">
                        Visited to {bill.provider}
                        {bill?.isNew ? (
                          <span className="text-xs bg-green-100 ml-2 px-2 py-1 rounded-sm h-fit">
                            New
                          </span>
                        ) : null}
                      </div>

                      <div className="text-lg text-custom-gray font-semibold flex justify-end ml-auto">
                        ${bill.amount} billing amount
                      </div>

                      
                      </div>
                      <div className="w-80 text-sm text-custom-gray font-semibold flex flex-row justify-between items-center mt-3">
                        <div className="flex flex-col mr-10">
                          <div className="text-xs text-gray-500">
                            Bill Owner
                          </div>
                          <div className="text-xs text-custom-gray flex flex-row">
                            <span className="mr-4">
                            <GroupMemberCircle name={bill.name}/>
                            </span>
                            <span className="text-custom-gray flex flex-row items-center">
                              {bill.name}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col mr-10">
                          <div className="text-xs text-gray-500">
                            Date of Bill
                          </div>
                          <div className="text-xs text-custom-gray">
                            {bill.dateOfBill.toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                        </div>

                        <div className="flex flex-col mr-10">
                          <div className="text-xs text-gray-500">
                            Bill Due Date
                          </div>
                          <div className="text-xs text-custom-gray">
                            {bill.dueOfBill.toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="w-full bg-blue-50 flex flex-row mt-3 py-2 px-4 rounded-lg">
                        <div className="text-sm font-semibold flex flex-row justify-start items-center">
                          ? saving opportunities
                        </div>

                        <div className="flex flex-row justify-end ml-auto">
                          <button 
                          className="text-sm font-semibold flex flex-row justify-end bg-purple-500 text-white py-2 px-4 rounded-lg"
                          onClick={() => handleCheckBill(bill)}>
                            Check it
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
      <div className="column2 ml-7 mr-3" >
        <div className="w-full h-48 bg-blue-100 rounded-xl mt-3 py-4 px-4">
          <div className="text-gray-400 text-sm font-semibold uppercase antialiased">
            Let's start with the savings.
          </div>
          <div className="text-custom-gray text-base font-semibold antialiased">
            4 steps for Bill Negotiation :)
          </div>
          <div className="horizontalLine"></div>
          <div className="text-purple-500 mt-3 mob-checklist">
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
          <div className="flex flex row text-custom-gray text-sm mt-3 items-center">
            <div className="font-semibold antialiased justify-start">
              {groupInfo.name}
            </div>
            <div className="font-normal antialiased justify-end ml-auto flex flex-row">
              {groupInfo.members.map((member, index) => (
                <GroupMemberCircle key={index} name={member} />
              ))}
              <button className="down-arrow-button">
                <img
                  src="/down-arrow-backup-2-svgrepo-com.svg"
                  alt="Down arrow"
                  className="w-4 h-4 ml-6"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-h-fit bg-white rounded-xl mt-3 py-4 px-4">
          <Calendar
            activeStartDate={date}
            onActiveStartDateChange={({ activeStartDate }) =>
              setDate(activeStartDate)
            }
            calendarType="US"
            view="month"
            nextLabel={
              <img
                src="/right-arrow-backup-2-svgrepo-com.svg"
                alt="Right arrow"
                className="w-4 h-4"
              />
            }
            next2Label={null}
            prevLabel={
              <img
                src="/left-arrow-backup-2-svgrepo-com.svg"
                alt="Left arrow"
                className="w-4 h-4"
              />
            }
            prev2Label={null}
            showNeighboringMonth={false}
            tileClassName={({ activeStartDate, date, view }) => setClass(date)}
            formatShortWeekday={(locale, date) =>
              ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
            }
          />
          <div className="text-sm text-custom-gray font-bold ml-5 mt-1">
            No Bills Due Today
          </div>
          <div className="flex flex-row justify-start mt-3 ml-5">
            {dateArray.map((item, index) => (
              <div key={index} className="custom-event bg-blue-50 mr-2">
                {/* Date */}
                <div className="text-xs text-custom-gray">
                  Due on{" "}
                  {new Date(item.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                {/* Bill */}
                <div className="flex flex-row items-center">
                  <div className="text-xs text-custom-gray font-bold">
                    {item.billType} Bill from {item.providerName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillList;
