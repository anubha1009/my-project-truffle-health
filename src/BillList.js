import React from 'react';

const BillListItem = ({ bill }) => {
    return (
        <div className="flex flex-col border-b border-gray-300 py-4" style={{ padding: "21px",margin: "20px" , borderRadius: "40px", backgroundColor: "rgb(253 244 255)" }}  >

            <div className="flex items-center" >
                <img src={bill.picture} alt={bill.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <div><h3>Visitors to provider name</h3></div>
                    <div className="flex flex-row">
                        <div className="flex justify-between items-center mb-4 pr-4" >
                            <div className="flex flex-col">
                                <h3 className="text-lg ">Bill Owner</h3>
                                <p className="text-gray-500">${bill.name}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4 pr-4">
                            <div className="flex flex-col">
                                <h3 className="text-lg ">Date of Bill</h3>
                                <p className="text-gray-500">${bill.dateOfBill}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4 pr-4">
                            <div className="flex flex-col">
                                <h3 className="text-lg ">Due of Bill</h3>
                                <p className="text-gray-500">${bill.dueOfBill}</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-lg font-bold">{bill.name}</h2>
                    <p className="text-gray-500">${bill.amount}</p>
                </div>
            </div>
            <div className="flex justify-between" style={{ padding: "10px" , borderRadius: "10px", backgroundColor: "rgb(225 194 255)" }}>
                <div className="text-lg ">Saving opportunities</div>
                <div>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                        Check It
                    </button>
                </div>
            </div>
        </div>
    );
};

const BillList = () => {
    const bills = [
        { id: 1, name: 'John', amount: 100, picture: "./bill1.jpeg", dateOfBill: "123", dueOfBill: "456" },
        { id: 2, name: 'John', amount: 50, picture: "/bill1.jpeg", dateOfBill: "123", dueOfBill: "456" },
        { id: 3, name: 'John', amount: 75, picture: "/bill1.jpeg", dateOfBill: "123", dueOfBill: "456" },
    ];

    return (
        <div>
            {bills.map((bill) => (
                <BillListItem key={bill.id} bill={bill} />
            ))}
        </div>
    );
};

export default BillList;