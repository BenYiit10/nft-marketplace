import React from 'react'

export default function DetailEqual({title,content}) {
  return (
    
        <li className='flex capitalize text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg'>
            <p>{title} <span className='pl-0.5'>:</span></p>
            <p className='pl-4 font-semibold'>
                {content}
            </p>
        </li>
    
  )
}
