import React from 'react'
import ImgContainer from '../ui/ImgContainer'
import circleProfile from "../assets/circle-profile.png"

import { Link } from 'react-router-dom'
import { Tick } from "../ui/Icon"
export default function SellerItem() {
    return (
      <Link to="#">
        <div className='seller bg-[#343444] hover:bg-[#2a2a38] py-[10px] px-4 rounded-[10px] grid gap-4 font-bold items-center max-sm:py-2 max-sm:px-3 max-sm:gap-3'>
            <div className='relative seller-profile'>
              <ImgContainer src={circleProfile} className="3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20 5xl:w-24 5xl:h-24" />
              <Tick className="absolute right-0 bottom-0 4xl:w-5 4xl:h-5 5xl:w-6 5xl:h-6" />
            </div>
            <div className='seller-content grid gap-2'>
                <p className='seller-name line-clamp-1 3xl:text-lg 4xl:text-xl 5xl:text-2xl'>
                  Lolla Smith
                </p>
                <p className='seller-cost text-xs 3xl:text-sm 4xl:text-lg 5xl:text-xl font-normal'>
                  230.2 ETH
                </p>
            </div>
        </div>
      </Link>
    )
}
