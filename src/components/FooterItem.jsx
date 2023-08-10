import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterItem({title,content}) {
    return (
        <div className='flex flex-col gap-6'>
            <p className='font-semibold 3xl:text-lg 4xl:text-xl 5xl:text-2xl'>
                {title}
            </p>
            <ul className='flex flex-col gap-4'>
                {
                    content.map((item,index) => {
                        return(
                        <Link to={item.link}  key={index}>
                            <li className='font-normal text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg hover:text-slate-300' >{item.title}</li>
                        </Link>
                            )
                    } )
                }
            </ul>
        </div>
    )
}
