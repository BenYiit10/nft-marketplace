import React from 'react'

export default function CategoryItem({src,title}) {
  return (
      <div className='bg-[#343444] hover:bg-[#2a2a38] p-6  rounded-[20px]'>
          <p className='1-5xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl' >{title}</p>
          <img src={src} alt={src.split("/").pop().split(".")[0]} className='rounded-[10px] mt-4 max-xs:mt-2 max-xs:text-sm w-full' />
      </div>
  )
}
