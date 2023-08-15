import React, { useState } from 'react'
import { HiChevronDown } from "react-icons/hi2";

export default function CheckboxForm({title,content}) {
    
    const [open,setOpen] = useState(true)

    return (
        <div className='chooseForm flex flex-col gap-4 pb-4 border-b'>
            <h2 className='title flex justify-between items-center cursor-pointer gap-2 max-sm:text-sm' onClick={() => setOpen(!open)}>
                <strong className='font-semibold'>
                    {title}
                </strong>
                <HiChevronDown strokeWidth={0.5} />
            </h2>
            
                {
                    open &&
                    <ul className='flex flex-col gap-2'>
                        
                        {
                            content?.map((item,index) => {
                                return (
                                    <li key={index} >
                                        <label htmlFor={item+index} className={`relative custom-checkbox  text-sm max-sm:text-xs font-medium text-gray-300 flex items-center gap-4  max-xs:gap-2`} >
                                            <input id={item+index} type="checkbox"/>
                                            {item}
                                        </label>
                                    </li>
                                )
                            } )
                        }
                    </ul>
                }
            
        </div>
    )
}
