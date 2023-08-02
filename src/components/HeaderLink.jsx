import React from 'react'
import { HiChevronDown } from "react-icons/hi2";

export default function HeaderLink({children,dropdown}) {
    return (
        <div className='flex gap-3 max-[1440px]:gap-2 items-center cursor-pointer text-[20px] max-[1530px]:text-[18px] max-[1440px]:text-[16px] max-[1200px]:text-[14px]'>
            {children}
            {
                dropdown && <HiChevronDown stroke-width="1" className='text-[16px]'/>
            }
        </div>
    )
}
