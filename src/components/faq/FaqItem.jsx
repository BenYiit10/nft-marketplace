import React from 'react'
import { HiPlus } from "react-icons/hi2";

export default function FaqItem({content}) {
  return (
    <div className='w-1/2 border p-5 m-auto rounded-full flex justify-between items-center'>
        What is NFT?
        <HiPlus className='text-white' />
    </div>
  )
}
