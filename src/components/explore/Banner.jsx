import React from 'react'
import ImgContainer from "../../ui/ImgContainer"
import bannerExplore from "../../assets/bannerExplore.png"
import big from "../../assets/big.png"
import biggest from "../../assets/biggest.png"
import chess from "../../assets/chess.png"
import ellipse from "../../assets/ellipse.png"
import midOne from "../../assets/midOne.png"
import midTwo from "../../assets/midTwo.png"
import smallest from "../../assets/smallest.png"
import PageTitle from '../../ui/PageTitle'

export default function Banner() {
    return (
        <section className='relative z-0 overflow-hidden'>
            <ImgContainer src={bannerExplore} className="w-full object-fill" />
            <div className='page-container absolute z-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-[58%] flex flex-col gap-4'>
                <div>
                    <PageTitle title="Explore the best NFTs" />
                    <ImgContainer src={big} className="absolute translate-y-1/2 top-full -left-5" />
                    <ImgContainer src={midOne} className="absolute -translate-y-1/2 top-0 translate-x-1/2  left-[13%]" />
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className='absolute bottom-0 right-0 translate-y-[10%] -translate-x-1/2'>
                <ImgContainer src={chess} />
                <ImgContainer src={smallest} className="absolute" />

            </div>
        </section>
    )
}
