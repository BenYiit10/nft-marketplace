import React from 'react'

export default function Button({children}) {
    return (
        <div className='border border-1 border-white px-11 py-4 rounded-full w-fit relative'>
            {children}
        </div>
    )
}
