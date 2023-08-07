import React, { useState } from 'react'

import handsVert from "../assets/handsHorizontal.png"
import ImgContainer from '../ui/ImgContainer'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi2'
import { Icon } from '../ui/Icon'
import profile from "../assets/profile.png"
import { Link } from 'react-router-dom'
export default function AuctionCard() {

    const [like,setLike] = useState(0)
    const [isTouch,setIsTouch] = useState(false)

  return (
    <div className='flex flex-col'>
        <Link to="#">
            <div className='card-image relative'>
                <ImgContainer src={handsVert} className="w-full" />
                <button onClick={() =>  {
                    
                    !isTouch ? setLike(like => like+1) : setLike(like => like-1)
                    setIsTouch(isTouch => !isTouch)}} 
                    className='likes absolute right-5 top-4 flex gap-0.5 bg-black rounded-full px-2 items-center 4xl:text-lg 4xl:px-3 cursor-pointer'
                    
                    >

                    {like}
                    {
                        !isTouch ? <HiOutlineHeart /> : <HiHeart/>
                    }
                </button>
                <div className='date absolute bottom-6 max-xs:bottom-2 flex items-center justify-center gap-2 rounded-xl -translate-x-1/2 left-1/2 px-8 py-2 text-xs 2xl:text-sm 4xl:text-base 5xl:text-lg bg-[#343444] w-max'>
                    <Icon name="Fire" size={20}/>
                    02 : 08 : 22 : 34
                </div>
            </div>
            <div className='card-content p-4 max-xs:p-2 bg-[#343444] rounded-b-[20px] grid gap-4'>
                
                <div className='card-title flex items-center justify-between gap-1 2xl:text-lg 4xl:text-xl 5xl:text-2xl'>
                    <p className='line-clamp-1'>
                        Lorem ipsum dolor sit, consectetur adipisicing elit.
                    </p>
                    <p className='bsc text-xs py-[3px] px-[9px] bg-purple-600 rounded-md'>
                        BSC
                    </p>
                </div>

                <div className='card-detail grid gap-4 text-xs 2xl:text-sm 4xl:text-base 5xl:text-lg items-center'>
                    <div className='card-profile w-max'>
                        <ImgContainer src={profile} className="w-11 h-11 4xl:w-14 4xl:h-14" />
                    </div>
                    <div className='grid grid-cols-2 justify-between w-full items-center'>
                        <div className='card-name grid gap-2'>
                            <p className='self-start'>Creator</p>
                            <p className='font-semibold'>Lolla Smith</p>
                        </div>
                        <div className='card-name grid gap-2 justify-end'>
                            <p>Current Bid</p>
                            <p className='text-base 2xl:text-lg 4xl:text-xl 5xl:text-2xl font-semibold'>4.89ETH</p>
                        </div>
                    </div>
                </div>

            </div>
        </Link>
    </div>
  )
}
