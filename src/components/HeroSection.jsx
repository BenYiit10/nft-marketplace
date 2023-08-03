import React from 'react';
import Button from './Button';

import bubbles from "../assets/bubbles.png";
import bitcoin from "../assets/bitcoin.png";
import hands from "../assets/hands.png";
import nft from "../assets/nft.png";
import HeaderImgContainer from "./HeaderImgContainer"
import HeaderImg from "./HeaderImg"

export default function HeroSection({className}) {
    return (
        <section className={`pt-32 pb-16 max-md:pt-20 max-md:pb-12 overflow-hidden ${className}`}>
            <div className="relative flex page-container ">
                <article className='w-3/5 font-semibold flex flex-col gap-4 relative max-md:w-full'>
                    <p className='relative z-20 4xl:text-lg 2xl:text-[17px] lg:text-sm'>NFT MARKETPLACE</p>
                    <h2 className='text-5xl font-bold font-rubik relative z-20 4xl:text-7xl 2xl:text-6xl lg:text-4xl hyphens-auto '>
                        Discover, find and sell extraordinary monster NFTs
                    </h2>
                    <p className='relative z-20 4xl:text-lg 2xl:text-[17px] lg:text-sm'>
                        Marketplace For Monster Character <br />
                        Collections Non Fungible Token NFTs
                    </p>

                    <div className='btn-group flex gap-4 relative z-20 4xl:text-lg 2xl:text-[17px] lg:text-sm max-md:flex-wrap'>
                        <Button>Create</Button>
                        <Button>Explore</Button>
                    </div>
                    
                    
                    <img src={bubbles} alt="bubbles_pattern" className='absolute -top-12 -left-20 max-w-fit z-0 4xl:scale-110 max-lg:rotate-180'/>

                </article>
                <figure className='absolute right-0 top-0 flex gap-[62px] translate-x-[54%] -translate-y-[35%] z-[10] max-md:w-max max-md:rotate-[80deg] max-md:translate-x-1/4 max-md:translate-y-1/4' >
                    <HeaderImgContainer>
                        <HeaderImg src={hands} />
                        <HeaderImg src={nft} />
                        <HeaderImg src={bitcoin} />
                    </HeaderImgContainer>
                    <HeaderImgContainer>
                        <HeaderImg src={bitcoin} />
                        <HeaderImg src={hands} />
                        <HeaderImg src={nft} />
                    </HeaderImgContainer>
                    <HeaderImgContainer>
                        <HeaderImg src={hands} />
                        <HeaderImg src={nft} />
                        <HeaderImg src={bitcoin} />
                    </HeaderImgContainer>
                </figure>
            </div>
        </section>
    )
}
