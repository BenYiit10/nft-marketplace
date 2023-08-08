import React from 'react'
import WalletItem from './WalletItem'
import { Squares,Gallery,WalletSVG,Bookmark } from '../ui/Icon'

export default function Wallet() {
  return (
    <section className='pt-10 pb-12'>
        <div className='page-container relative grid grid-cols-4 gap-12 max-lg:gap-8 max-mdd:grid-cols-2 max-xxs:grid-cols-1 '>
            <WalletItem icon={<WalletSVG />} bg="bg-[#E1C7ED]"
                title="Set Up Your Wallet"
                content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing"
            />
            <WalletItem icon={<Squares />} bg="bg-[#2B6C25]"
                title="Create Your Collection"
                content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing"
            />
            <WalletItem icon={<Gallery/>} bg="bg-[#312FA8]"
                title="Add Your NFTs"
                content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing"
            />
            <WalletItem icon={<Bookmark/>} bg="bg-[#B94C34]"
                title="List Them For Sale"
                content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing"
            />
        </div>
    </section>
  )
}
