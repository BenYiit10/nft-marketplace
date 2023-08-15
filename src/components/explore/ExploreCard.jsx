import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImgContainer from '../../ui/ImgContainer'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi2'
import handsVert from "../../assets/handsHorizontal.png"
import { Icon } from '../../ui/Icon'
import profile from "../../assets/profile.png"
import { twMerge } from 'tailwind-merge'

export default function ExploreCard({detail, className}) {

    const [like,setLike] = useState(0)
    const [isTouch,setIsTouch] = useState(false)



    return (
        <div className={twMerge('todaysPickCard flex flex-col max-[520px]:w-3/4',className)} >
            
                <div className='card-image relative'>
                    <ImgContainer src={handsVert} className="w-full" />
                    <button onClick={() =>  {
                        
                        !isTouch ? setLike(like => like+1) : setLike(like => like-1)
                        setIsTouch(isTouch => !isTouch)}} 
                        className='likes absolute right-5 top-4 flex gap-0.5 bg-black rounded-full px-2 items-center 4xl:text-lg 4xl:px-3 cursor-pointer hover:bg-gray-800'
                        
                        >

                        {like}
                        {
                            !isTouch ? <HiOutlineHeart /> : <HiHeart/>
                        }
                    </button>
                    
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

                    <div className='card-detail grid gap-4 text-xs 2xl:text-sm 4xl:text-base 5xl:text-lg items-center '>
                        <div className='grid gap-4 items-center max-xxs:justify-items-center'>
                            <div className='card-profile w-max'>
                                <ImgContainer src={profile} className="w-11 h-11 4xl:w-14 4xl:h-14" />
                            </div>
                            <div className='grid grid-cols-2 gap-1 justify-between w-full items-center'>
                                <div className='card-name grid gap-2'>
                                    <p className='self-start'>Creator</p>
                                    <p className='font-semibold'>Lolla Smith</p>
                                </div>
                                <div className='card-name grid gap-2 justify-end'>
                                    <p className='w-max'>Current Bid</p>
                                    <p className='text-base 2xl:text-lg 4xl:text-xl 5xl:text-2xl font-semibold'>4.89ETH</p>
                                </div>
                            </div>
                        </div>
                        {
                            detail &&
                            <div className=' flex justify-between flex-wrap gap-y-4 max-xxs:justify-center'>
                                <Link to="#" className='flex gap-2 items-center border px-[10px] py-2 rounded-full w-max hover:text-slate-300 hover:border-slate-300 '>
                                    <Icon name="Lock" />
                                    Place Bid
                                </Link>
                                <Link to="#" className='flex gap-2 items-center px-[10px] py-2 rounded-full w-max hover:text-slate-300'>
                                    <Icon fill="#fff"  name="Recycle" />
                                    View History
                                </Link>
                            </div>
                        }
                    </div>

                </div>
        </div>
    )
}
