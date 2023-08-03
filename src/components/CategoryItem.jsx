import React from 'react'

export default function CategoryItem({src,title}) {
  return (
    <div className='bg-[#343444] p-6 rounded-[20px]'>
        <p>{title}</p>
        <img src={src} alt={src.split("/").pop().split(".")[0]} className='rounded-[10px] mt-4 max-xs:mt-2 max-xs:text-sm w-full' />
    </div>
  )
}
