import React from 'react'
import ImgContainer from '../ui/ImgContainer'

import nftCollection from "../assets/nftCollection.png"
import bitcoinCollection from "../assets/bitcoinCollection.png"
import handsCollection from "../assets/handsCollection.png"
import circleProfile from "../assets/circle-profile.png"
import {Tick} from "../ui/Icon"
import { Link } from 'react-router-dom'
export default function CollectionItem() {
    return (
      <Link to="#">
        <div className='overflow-hidden bg-[#343444] rounded-2xl pb-5'>
            <div className='card-image flex gap-1 w-full'>
                <ImgContainer  src={handsCollection} className="w-1/2 object-cover flex-1" />
                <div className='flex flex-col gap-[inherit] w-1/2 flex-1'>
                    <ImgContainer src={nftCollection} className="w-full flex-1 object-cover" />
                    <ImgContainer src={bitcoinCollection} className="w-full flex-1 object-cover" />
                </div>
            </div>
            <div className='card-content grid justify-items-center'>
                <div className='relative -translate-y-1/2'>
                  <ImgContainer src={circleProfile} className=" 3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20 5xl:w-24 5xl:h-24" />
                  <Tick className="absolute right-0 bottom-0 4xl:w-5 4xl:h-5 5xl:w-6 5xl:h-6" />
                </div>
                <div className='collection-card-detail gap-4 grid justify-items-center'>
                  <p className='font-bold 3xl:text-lg 4xl:text-xl 5xl:text-2xl'>
                    <strong>
                      Creative Art Collection
                    </strong>
                  </p>
                  
                  <p className='text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg'>
                    Created By <strong className='text-base font-semibold'>Lolla Smith</strong>
                  </p>
                </div>
            </div>
        </div>
      </Link>
    )
}
