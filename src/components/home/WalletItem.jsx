import React from 'react'

export default function WalletItem({className,bg, icon, title, content}) {
  return (
    <div className='walletItem grid justify-items-center gap-4'>
        <div className={` ${bg} rounded-[10px] p-[5px] w-8 h-8 3xl:p-[6px] 3xl:w-10 3xl:h-10 4xl:p-[7px] 4xl:w-12 4xl:h-12 5xl:p-[8px] 5xl:w-14 5xl:h-14 ${className}`}>
            {icon}
        </div>
        <div className='item-content text-center 3xl:text-lg 4xl:text-xl 5xl:text-2xl grid gap-[inherit]'>
            <p className='font-bold'>
                <strong>
                    {title}
                </strong>
            </p>
            <p className='text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg'>
                {content}
            </p>
        </div>
    </div>
  )
}
