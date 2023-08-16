import React from 'react'
import bannerExplore from "../assets/bannerExplore.png"
import ImgContainer from '../ui/ImgContainer'
export default function PageBanner({title,content}) {
  return (
    <section className='relative z-0 overflow-hidden mb-14'>
        <div className='h-[346px] max-mdd:h-[400px]'>
            <ImgContainer src={bannerExplore} className="w-full h-full object-cover" />
            <div className='page-container absolute -translate-x-1/2 translate-y-1/2 left-1/2 top-[43%]'>
                <div className='flex flex-col gap-2 justify-center items-center text-center'>
                    <h1 className='font-rubik text-[32px] 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl'>
                        <strong className='font-bold'>{title}</strong>
                    </h1>

                    <p className='text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg'>
                        {content}
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
