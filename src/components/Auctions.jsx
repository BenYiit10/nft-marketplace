import React/* , { useRef } */ from 'react'
import SectionTitle from '../ui/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AuctionCard from './AuctionCard'
import SwiperNavigate from '../ui/SwiperNavigate';
//import useSwiperRef from '../ui/useSwiperRef';
//import { SwiperProvider } from './SwiperContext';

export default function Auctions() {
    
    /* const swiperRef = useSwiperRef(); */

    const swiperSetinngs = {
        breakpoints: {
            420: {
              slidesPerView: 1,
            },
            769: {
              slidesPerView: 2,
            },

            1025: {
              slidesPerView: 3,
            },

            2200: {
              slidesPerView: 4,
            },
        }
    }

    return (
        
            <section className="mt-[92px] mb-[69px]">
                <div className='page-container'>
                    <SectionTitle title="Live Auctions" more/>
                    <div>
                    <div className='relative'>

                        <Swiper
                            className='max-mdd:w-3/4'
                            /* ref={swiperRef} */
                            slidesPerView={1}
                            spaceBetween={71}

                            {...swiperSetinngs}
                        >
                            <SwiperSlide>
                                <AuctionCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <AuctionCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <AuctionCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <AuctionCard />
                            </SwiperSlide>

                        </Swiper> 

                        <SwiperNavigate left />
                        <SwiperNavigate right />
                        
                        

                    </div>
                    </div>
                </div>
            </section>
        
    )
}
