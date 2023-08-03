import React from 'react'
import CategoryItem from './CategoryItem'

import handsVert from "../assets/handsHorizontal.png"
import bitcoinVert from "../assets/bitcoinHorizontal.png"
import nftVert from "../assets/nftHorizontal.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SectionTitle from './SectionTitle'


export default function Category() {
    
    const swiperSetinngs = {
        breakpoints: {
            420: {
              slidesPerView: 1.9,
            },
            769: {
              slidesPerView: 2.9,
            },

            1024: {
              slidesPerView: 3.9,
            },
        }
    }
  return (
    <section className=' pt-24 pb-[88px]'>
        <div className='page-container'>
            <SectionTitle title="Brow By Category"/>        
        </div>
        <div className='mt-8 ml-auto w-[90%] max-1xl:w-[92%] max-mdd:w-[97%]'>
            <Swiper className='' /* !ml-[10%] max-1xl:!ml-[8%] max-mdd:!ml-[2.5%] */
                slidesPerView={1.4}
                spaceBetween={32}
                {...swiperSetinngs}
            >
                <SwiperSlide>
                    <CategoryItem src={nftVert} title="Music" />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem src={nftVert} title="Music" />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem src={nftVert} title="Music" />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem src={nftVert} title="Music" />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem src={handsVert} title="Domain Name" />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem src={bitcoinVert} title="Arts" />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem src={nftVert} title="Utility" />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem src={handsVert} title="zort" />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}
