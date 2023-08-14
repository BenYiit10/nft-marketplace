import React from 'react'
import ImgContainer from "../../ui/ImgContainer"
import bannerExplore from "../../assets/bannerExplore.png"
import big from "../../assets/big.png"
import biggest from "../../assets/biggest.png"
import chess from "../../assets/chess.png"
import ellipse from "../../assets/ellipse.png"
import mid from "../../assets/midOne.png"
import smallest from "../../assets/smallest.png"
import PageTitle from '../../ui/PageTitle'

export default function Banner() {
    return (
        <section className='relative z-0 overflow-hidden mb-14'>
            <div className='h-[346px] max-mdd:h-[400px]'>
                <ImgContainer src={bannerExplore} className="w-full h-full object-cover" />
                <div className='page-container absolute z-20 -translate-x-1/2 -translate-y-1/2 left-1/2 top-[58%] flex flex-col gap-4'>
                    <div className=''>
                        <PageTitle className="text-5xl 1-5xl:text-5xl font-rubik relative z-20 4xl:text-7xl 2xl:text-6xl lg:text-4xl max-md:hyphens-auto" title="Explore the best NFTs" />
                        <ImgContainer src={big} className="absolute translate-y-1/2 top-full -left-5 z-[-1] max-sm:right-1/4 max-sm:left-auto" />
                        <ImgContainer src={mid} className="absolute -translate-y-1/2 top-0 translate-x-1/2 left-[13%] z-[-1]" />
                    </div>
                    <p className="relative z-20 4xl:text-lg 2xl:text-[17px] lg:text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className='absolute bottom-0 right-0 translate-y-[10%] -translate-x-1/2 max-lg:right-[-8%] max-md:translate-x-0 max-md:right-0 max-sm:hidden'>
                    <ImgContainer src={chess} className="relative z-10" />
                    <ImgContainer src={ellipse} className="absolute -translate-x-1/2 -translate-y-1/2 scale-150 z-0 bottom-[5%] left-1/2" />
                    <ImgContainer src={smallest} className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 -left-1/2 z-[-1]" />
                    <ImgContainer src={mid} className="absolute -translate-x-1/2 -translate-y-1/2 top-7 -right-1/3 z-[-1]" />
                    <ImgContainer src={biggest} className="absolute -translate-x-1/2 -translate-y-1/2 top-1/4 z-[-1]"/>
                </div>
            </div>
        </section>
    )
}
