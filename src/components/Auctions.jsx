import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AuctionCard from './AuctionCard'

export default function Auctions() {
    return (
        <section>
            <div className='page-container'>
                <SectionTitle title="Live Auctions" more/>
                <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={71}
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
                </div>
            </div>
        </section>
    )
}
