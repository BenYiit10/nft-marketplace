import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AuctionCard from './AuctionCard'
import SwiperNavigate from '../ui/SwiperNavigate';
import { Navigation } from 'swiper/modules';

export default function Auctions() {
    
    const swiperSettings = {
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
                    <div className='relative'>

                        <Swiper
                            className='zort max-mdd:w-3/4'
                            
                            slidesPerView={1}
                            spaceBetween={71}
                            navigation={{
                                nextEl:".auctionsRight",
                                prevEl:".auctionsLeft",
                            }}
                            modules={[Navigation]}

                            {...swiperSettings}
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

                        <SwiperNavigate className="auctionsLeft" left />
                        <SwiperNavigate className="auctionsRight" right />
                    </div>
                </div>
            </section>
        
    )
}
