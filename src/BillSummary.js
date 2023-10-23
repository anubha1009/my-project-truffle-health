import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const BillSummary = ({ bill }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };
    const location = useLocation();
    const data = location.state.data;

    const serviceDescription = [
        {
            name: '1',
            cptCode: '99603',
            stickerPrice: '200',
            description1: "A flexible proximal colonoscopy is a diagnostic procedure used to examine the inner lining of the large intestine (colon).",
            description2: "During the procedure, tissue samples (biopsies) may be taken for further analysis."
        },
        {
            name: '2',
            cptCode: '99603',
            stickerPrice: '500',
            description1: "A flexible proximal colonoscopy is a diagnostic procedure used to examine the inner lining of the large intestine (colon). ",
            description2: "During the procedure, tissue samples (biopsies) may be taken for further analysis."
        }
    ];
    const billOverview =
    {
        providerType: 'In-Network',
        category: 'Colonoscopy'
    };



    return (
        <div className='flex flex-col md:flex-row items-top'>
            <div className="bg-white rounded-lg shadow-lg p-4 md:w-2/3 h-1/2 m-4">
                <h6 className="text-lg font-medium mb-4 text-gray-500 text-sm">BILL BREAKDOWN</h6>
                <div className="flex justify-between items-center">
                    <div className="relative flex items-left justify-start h-7 " >
                        <img src="clipboard-svgrepo-com.svg" alt="service" className="mr-2 h-6 w-6" />
                        <span className=" text-purple-500 ">Service Breakdown</span>

                    </div>

                    <div className="relative flex items-right  justify-start h-10">
                        <button onClick={handleCollapse} className=" w-6 h-6  ">
                            <img src={isCollapsed ? "/right-arrow-backup-2-svgrepo-com.svg" : "/down-arrow-backup-2-svgrepo-com.svg"} alt="Toggle" className="w-4 h-4 mx-auto" />
                        </button>
                    </div>

                </div>

                <div className={`flex flex-row  ${isCollapsed ? 'h-16' : 'h-80'}  border-t border-gray-200 transition-all duration-200`}>
                    <div className="flex-grow mt-2">
                        <nav>
                            <ul className="flex flex-col ">
                                {serviceDescription.map((item, index) => (
                                    <li key={index} className={`px-4 py-2 text-custom-gray`} >

                                        <span className='flex items-center text-sm font-bold'> <img src="/circle-svgrepo-com.svg" className='w-3 h-3 mr-2' /> Service {item.name} Name</span>
                                        <div>
                                            {!isCollapsed && <span className='bg-purple-500 bg-opacity-20 text-purple-500 text-xs p-1 pr-3 pl-3 mr-2 rounded'>CPT Code: {item.cptCode}</span>}
                                            {!isCollapsed && <span className='bg-purple-500 bg-opacity-20 text-purple-500 text-xs p-1 pr-3 pl-3 mr-2 rounded'>Sticker Price${item.stickerPrice}</span>}
                                        </div>
                                        <div className='text-sm'>
                                            {!isCollapsed && <span>{item.description1}</span>}
                                            <div className='py-2'>
                                                {!isCollapsed && <span>{item.description2}</span>}
                                            </div>


                                        </div>

                                    </li>
                                ))}
                            </ul>

                        </nav>
                    </div>

                </div>
                <div className="flex items-center pt-3 justify-center">
                    <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-20 rounded mt-4">
                        Let Truffle help you Negotiate!
                    </button>
                </div>
                <div className="flex items-center justify-center p-4 text-purple-500">
                    <span><a href='#' className="text-sm underline hover:text-gray-500">How does Truffle Help my Negotiation?</a></span>
                </div >
            </div>



            <div className="bg-white rounded-lg shadow-lg p-4 md:w-1/3 p-4 m-4">
                <h6 className="text-lg font-medium mb-4 text-gray-500 text-sm">BILL OVERVIEW</h6>
                <div className="text-custom-gray text-base font-semibold antialiased">
                    <span className='bg-red bg-opacity-20 text-red text-xs p-1 pr-3 pl-3 mr-2 rounded'>Doesn't Match My Bill?</span>
                </div>
                <div  className="container" >
                    <img src={data.picture}/>
                </div>

                <div className="text-gray-500 mt-3 text-xs w-80">
                    
                    <div className='px-4 py-2 text-custom-gray'>
                        <div className=' pl-2'>Provider's Name</div>
                        <div className='font-bold pl-2'>{data.provider}</div>

                        <div className='flex flex-row'>
                            <div className='flex flex-col '>
                                <div className='p-2'>
                                    <div>Patient's Name</div>
                                    <div className='font-bold'>{data.name}</div>
                                </div>

                                <div className='p-2'>
                                    <div>Provider's Type</div>
                                    <div className='font-bold'>{billOverview.providerType}</div>
                                </div>

                                <div className='p-2'>
                                    <div>You Owe</div>
                                    <div className='font-bold'>${data.amount}</div>
                                </div>
                            </div>
                            <div className='flex flex-col ml-4'>
                                <div className='p-2'>
                                    <div>Visit Date</div>
                                    <div className='font-bold'>{data.dateOfBill.toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}</div>
                                </div>

                                <div className='p-2'>
                                    <div>Category</div>
                                    <div className='font-bold'>{billOverview.category}</div>
                                </div>

                                <div className='p-2'>
                                    <div>Due Date</div>
                                    <div className='font-bold'>{data.dueOfBill.toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>




    );
};

export default BillSummary;