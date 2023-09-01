import React, { useState } from 'react'
import { HiPlus } from "react-icons/hi2";

export default function FaqItem({content}) {
  
    const [dropdown,setDropdown] = useState(false)
  
    return (
        <div className='w-full flex flex-col gap-3'>
            <div className='border p-5 rounded-full flex justify-between items-center 2xl:text-lg 4xl:text-xl 5xl:text-2xl' onClick={() => setDropdown(!dropdown)}>
                <p>What is NFT?</p>
                <HiPlus className='text-white' />
            </div>

            {
                dropdown &&
                <p className='border p-5 rounded-2xl flex justify-between 2xl:text-lg 4xl:text-xl 5xl:text-2xl'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam provident in aliquid explicabo ea iusto facilis similique eos architecto.
                </p>
            }
        </div>
  )
}
