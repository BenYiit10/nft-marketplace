import React from 'react'
export default function SectionTitle({title, more}) {

  
  return (
    <div className='flex justify-between items-end'>
        <h2 className='font-rubik font-bold text-[30px]'>
            {title}
        </h2>
        {
          more && 
          <p className='text-purple-600'>Explore More</p>        
        } 
        
    </div>
  )
}
