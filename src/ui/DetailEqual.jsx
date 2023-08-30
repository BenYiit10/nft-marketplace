import React from 'react'

export default function DetailEqual({title,content}) {
  return (
    
        <li className='flex capitalize text-xs'>
            <p>{title} <span className='pl-0.5'>:</span></p>
            <p className='pl-4 font-semibold'>
                {content}
            </p>
        </li>
    
  )
}
