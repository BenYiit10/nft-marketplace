import React, { useState } from 'react'

import handsVert from "../assets/handsHorizontal.png"
import bitcoinVert from "../assets/bitcoinHorizontal.png"
import nftVert from "../assets/nftHorizontal.png"
import ImgContainer from './ImgContainer'
import { HiOutlineHeart } from 'react-icons/hi2'
import { Icon } from '../ui/Icon'

export default function AuctionCard() {

    const [like,setLike] = useState(0)

  return (
    <div className='flex flex-col'>
        <div className='card-image relative'>
            <ImgContainer src={handsVert} className="w-full" />
            <div className='likes absolute right-5 top-4 flex gap-0.5 bg-black rounded-full px-2 items-center'>
                {like}
                <HiOutlineHeart />
            </div>
            <div className='date flex items-center justify-center gap-2 rounded-xl px-8 py-2 text-xs absolute bottom-6 bg-[#343444]'> {/* translate eklenecek */}
                <Icon name="Fire" size={20}/>
                02 : 08 : 22 : 34
            </div>
        </div>
        <div className='card-content'></div>
    </div>
  )
}
