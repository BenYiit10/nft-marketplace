import React from 'react'

export default function HeaderImgContainer({children}) {
    return (
        <div className='flex flex-col gap-3 -rotate-[32deg]'>
            {children}
        </div>
    )
}
