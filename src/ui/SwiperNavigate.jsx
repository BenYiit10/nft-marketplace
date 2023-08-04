import React from 'react'
import { useSwiper } from 'swiper/react'
import { HiChevronLeft,HiChevronRight  } from "react-icons/hi2";

export default function SwiperNavigate({left,right}) {
    const swiper= useSwiper()   

    function toLeft() {
        swiper.slidePrev()
    }
    function toRight() {
        swiper.slideNext()
    }
  
  return (
    <>
    {
    left &&
        <div className='absolute translate-x-1/2 translate-y-1/2 top-0 left-0 w-12 h-12 bg-white shadow-xl shadow-white' onClick={toLeft}>
            <HiChevronLeft/>
        </div>
    }
    {
    right &&
        <div className='w-12 h-12 bg-white' onClick={toRight}>
            <HiChevronRight/>
        </div>
    }
    </>
  )
}
