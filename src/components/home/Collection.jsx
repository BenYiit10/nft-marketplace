import React from 'react'
import SectionTitle from "../../ui/SectionTitle"
import ImgContainer from "../../ui/ImgContainer"

import anvil from "../../assets/anvil.png"
import {Swiper,SwiperSlide} from 'swiper/react'
import CollectionItem from './CollectionImage'

import SwiperNavigate from "../../ui/SwiperNavigate"
import { Navigation } from 'swiper/modules'

export default function Collection() {

    const swiperSettings = {
        breakpoints: {
            
            640: {
              slidesPerView: 2,
            },
            769: {
              slidesPerView: 3,
            },

            1025: {
              slidesPerView: 4,
            },

            2200: {
              slidesPerView: 5,
            },
        }
    }

    return (
        <section className='relative bg-[#19191D] pt-14 pb-[74px]'>
            <div className='page-container'>
                <ImgContainer src={anvil} className="absolute left-0 bottom-0 translate-y-1/4" />
                <SectionTitle title="Popular Collection" more />
                <div className='relative'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={42}
                        navigation={{
                            prevEl:".collectionLeft",
                            nextEl:".collectionRight",
                        }}
                        modules={[Navigation]}

                        {...swiperSettings}

                        className='max-mdd:w-3/4'
                    >
                        <SwiperSlide>
                            <CollectionItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CollectionItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CollectionItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CollectionItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CollectionItem />
                        </SwiperSlide>
                    </Swiper>
                    <SwiperNavigate className="collectionLeft" left />
                    <SwiperNavigate className="collectionRight" right />
                </div>
            </div>
        </section>
    )
}
