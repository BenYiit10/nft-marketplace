import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({children,link}) {
    return (
        <Link to={link} className='border border-1 border-white px-11 py-4 rounded-full w-fit relative cursor-pointer select-none hover:text-slate-300 hover:border-slate-300'>
            {children}
        </Link>
    )
}
