import React from 'react'

export default function HeroImgContainer({children}) {
    return (
        <div className='flex flex-col gap-3 -rotate-[32deg]'>
            {children}
        </div>
    )
}
