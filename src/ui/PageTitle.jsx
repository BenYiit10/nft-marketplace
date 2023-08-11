import React from 'react'

export default function PageTitle({title}) {
    return (
        <div className='text-5xl font-rubik'>
            <h1>
                <strong className='font-700'>
                    {title}
                </strong>
            </h1>
        </div>
    )
}
