import React, { useState } from "react";
import ActivityItem from "./ActivityItem";
import { BsSearch } from "react-icons/bs";

const ActivityCheckboxForm = ({content}) => {
    return(
        <div className='chooseForm flex flex-col gap-4 pb-4 '>    
            <ul className='flex flex-col gap-2 max-sm:w-full max-sm:grid max-sm:grid-cols-4 max-xs:grid-cols-3 max-xxs:grid-cols-2'>
                
                {
                    content?.map((item,index) => {
                        return (
                            <li key={index} >
                                <label htmlFor={item+index} className={`relative custom-checkbox  text-xs text-gray-300/90 flex items-center gap-4  max-xs:gap-2`} >
                                    <input id={item+index} type="checkbox"/>
                                    {item}
                                </label>
                            </li>
                        )
                    } )
                }
            </ul>
        </div>
    )
}

export default function ActivitySection() {
    const [showCount,setShowCount] = useState(6)

    const clickHandle = () => {
        setShowCount(showCount => showCount+6)
    }
    return (
        <section className="activitySection">
            <div className="page-container flex gap-10 max-sm:flex-col-reverse">
                <div className=" w-2/3 max-sm:w-full">
                    <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
                        {
                            [...Array(showCount)].map((item,index) => {
                                return (
                                    <ActivityItem key={index} />
                                )
                            })
                        }
                        
                    </div>
                    <div className="flex justify-center mt-8 mb-11">
                        {
                        showCount < 18 &&
                        <button onClick={clickHandle} className="w-max border rounded-full px-11 py-2 text-xs hover:text-slate-300 hover:border-slate-300">
                            Load More
                        </button>
                        }
                    </div>
                </div>
                <div className="w-1/3 max-sm:w-full">
                    <form className="flex justify-between rounded-md overflow-hidden bg-transparent border border-white/50 gap-1 h-fit">
                        <input
                            type="text"
                            className="bg-transparent text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg w-full text-slate-500 outline-0 pl-5"
                            placeholder="Enter your word art"
                        />
                        <button className="bg-purple-600 hover:bg-purple-900 py-4 px-6">
                            <BsSearch className="text-white" strokeWidth="1" />
                        </button>
                    </form>
                    <ActivityCheckboxForm content={["Listing","Purchases","Sales","Transfers","Bids","Likes","Following"]} />
                </div>
            </div>
        </section>
    );
}
