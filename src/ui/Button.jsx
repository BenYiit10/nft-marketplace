import React from 'react'

export default function Button({children}) {
    return (
        <div className='border border-1 border-white px-11 py-4 rounded-full w-fit relative cursor-pointer select-none hover:text-slate-300 hover:border-slate-300'>
            {children}
        </div>
    )
}
