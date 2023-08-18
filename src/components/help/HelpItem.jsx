import React from 'react'

export default function HelpItem({icon, title, content}) {
  return (
    <div className='w-1/4 max-xl:w-1/3 max-mdd:w-1/2 max-[520px]:w-[85%] max-xs:w-full px-8 max-xs:px-4 py-8 flex flex-col gap-4 items-center'>
        <div className='px-4 py-2 bg-indigo-600 rounded-xl w-fit '>
            {icon}
        </div>
        <div className='flex flex-col gap-4 text-center'>
            <h2 className='font-rubik text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl'>
                <strong className='font-bold'>
                    {title}
                </strong>
            </h2>
            <p className='text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg'>
                {content}
            </p>
        </div>
    </div>
  )
}
