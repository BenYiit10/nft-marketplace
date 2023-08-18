import React from 'react'
import ImgContainer from "../../ui/ImgContainer"
import nftToken from "../../assets/nftToken.png"
import frontNft from "../../assets/frontNft.png"
import smallNft from "../../assets/smallNft.png"
import underNFTCoin from "../../assets/underNFTCoin.png"
import frontNFTCoin from "../../assets/frontNFTCoin.png"
import leftNFTCoin from "../../assets/leftNFTCoin.png"
import biggestCoin from "../../assets/biggestCoin.png"
import smallestCoin from "../../assets/smallestCoin.png"
// import mid from "../../assets/"
// import smallest from "../../assets/"
import bannerExplore from "../../assets/bannerExplore.png"
import PageBannerTitle from '../../ui/PageBannerTitle'

export default function Banner() {
    return (
        <section className='relative z-0 overflow-hidden mb-14'>
            <div className='h-[346px] max-mdd:h-[400px]'>
                <ImgContainer src={bannerExplore} className="w-full h-full object-cover" />
                <div className='page-container absolute z-20 -translate-x-1/2 -translate-y-1/2 left-1/2 top-[58%] flex flex-col gap-4'>
                    <div className=''>
                        <PageBannerTitle className="text-5xl 1-5xl:text-5xl font-rubik relative z-20 4xl:text-7xl 2xl:text-6xl lg:text-4xl max-md:hyphens-auto" title="Auction" />
                    </div>
                    <p className="relative z-20 4xl:text-lg 2xl:text-[17px] lg:text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className='absolute bottom-0 right-0 translate-y-[10%] -translate-x-1/2 max-lg:right-[-8%] max-md:translate-x-0 max-md:right-0 max-sm:hidden '>
                    <ImgContainer src={nftToken} className="relative z-10" />
                    <ImgContainer src={biggestCoin} className="absolute translate-x-1/2 -translate-y-1/2 top-[25%] -right-[17%]" />
                    <ImgContainer src={smallNft} className="absolute translate-x-1/2 -translate-y-1/2 top-[60%] right-[12%]" />
                    <ImgContainer src={frontNft} className="absolute translate-x-1/2 -translate-y-1/2 top-[72%] right-[6%]" />
                    <ImgContainer src={frontNFTCoin} className="absolute translate-x-1/2 -translate-y-1/2 top-[72%] left-[11%] z-10" />
                    <ImgContainer src={smallestCoin} className="absolute -translate-x-1/2 -translate-y-1/2 top-[90%] left-[18%] z-10" />
                    <ImgContainer src={underNFTCoin} className="absolute -translate-x-1/2 -translate-y-1/2 top-[60%] -left-[75%] z-10" />
                    <ImgContainer src={leftNFTCoin} className="absolute translate-x-1/2 -translate-y-1/2 top-[42%] -left-1/4 z-10" />
                </div>
            </div>
        </section>
    )
}
