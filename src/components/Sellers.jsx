import React from 'react'
import SectionTitle from "../ui/SectionTitle"
import SellerItem from './SellerItem'
import TabContainer from './TabContainer'
import SellerContainer from './SellerContainer'
import monalisa from "../assets/monalisa.png"
import ImgContainer from '../ui/ImgContainer'
export default function Sellers() {

    return (
        <section className='py-14'>
            <div className='page-container relative'>
                <ImgContainer src={monalisa} className="absolute top-0 left-0 -translate-x-[45%] -translate-y-[60%] z-0" />
                <div className='absolute seller-shadow -translate-x-1/2 -translate-y-1/2 bg-transparent'>

                </div>
                <SectionTitle title="Top Sellers" tab tabText={["1 Day","1 Week","1 Month"]} />
                
                <TabContainer>
                    <SellerContainer>
                        <SellerItem key={1} />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                    </SellerContainer>
                    <SellerContainer>
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                    </SellerContainer>
                    <SellerContainer>
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                        <SellerItem />
                    </SellerContainer>
                </TabContainer>
                
            </div>  
        </section>
    )
}
