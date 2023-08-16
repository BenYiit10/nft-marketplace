import React, { useState } from 'react'
import CheckboxForm from '../../ui/CheckboxForm'
import ExploreCard from "./ExploreCard"
import { BsFilter } from "react-icons/bs";
import { twMerge } from 'tailwind-merge';

export default function ExploreSection() {

    const [showCount,setShowCount] = useState(6)
    const [filter,setFilter] = useState(false)

    const clickHandle = () => {
        setShowCount(showCount => showCount+6)
    }

    const isMobile = window.matchMedia("(max-width:520px)")

    const className="max-[520px]:right-0"
    const filterOpen = (e) => {
        setFilter(!filter)
    }

    const mobileListener = (e) => {
        if (isMobile.matches) {
            return(
                <div className='flex justify-end w-3/4 m-auto'>
                    <button className='ml-4 mb-4 text-2xl cursor-pointer' onClick={filterOpen}>
                        <BsFilter />
                    </button>
                </div>
            )
        }
    }
    return (
        <section className='exploreSection relative'>
            <div className='page-container flex gap-16 max-[1170px]:gap-12 max-[1110px]:gap-8 max-lg:gap-12 max-[820px]:gap-8 max-sm:gap-16 max-[520px]:gap-8 max-xs:gap-4 max-xxs:gap-2 '>
                <aside className={twMerge('w-[170px] z-50 max-sm:min-w-[170px] max-[520px]:min-w-[auto] max-[520px]:fixed max-[520px]:top-0 max-[520px]:h-full max-[520px]:overflow-y-auto max-[520px]:shadow-xl max-[520px]:-right-52 max-[520px]:duration-500 max-[520px]:bg-[#14141f] max-[520px]:p-3 max-[520px]:flex max-[520px]:flex-col max-[520px]:justify-between',filter && className)}>
                    <div>
                        <CheckboxForm title="Status" content={["Buy Now","On Auctions","Has Offers"]} />
                        <CheckboxForm title="Categories" content={["Art","Music","Domain Names","Virtual Cards","Trading Cards","Collectibles","Sports","Utility"]} />
                        <CheckboxForm title="Chains" content={["Etherium","Polygon","Klaytn"]} />
                        <CheckboxForm title="Collections" content={["Abstraction","Patternlicious","Sketchify","Cartoonism","Virtuland","Papercut"]} />
                        {
                            filter &&
                            <CheckboxForm title="Collections" content={["Abstraction","Patternlicious","Sketchify","Cartoonism","Virtuland","Papercut"]} />
                            
                        }
                    </div>

                    {
                        filter &&
                        <button className='w-full py-2 px-3 bg-orange-600 cursor-pointer' onClick={filterOpen}>
                            Apply
                        </button>
                    }
                </aside>

                <div className='w-full'>
                    {
                        mobileListener()
                    }
                    <div className='grid grid-cols-3 gap-12 max-[1170px]:gap-8 max-[1110px]:gap-4 max-lg:grid-cols-2 max-lg:gap-8 max-[820px]:gap-4 max-sm:grid-cols-1 '>
                        {
                            [...Array(showCount)].map((data,index) => {
                                return (
                                    <ExploreCard detail key={index} className="m-auto" />
                                    )
                            })
                        }
                    </div>

                    <div className="flex justify-center mt-8 mb-11">
                        {
                        showCount < 18 &&
                        <button onClick={clickHandle} className="w-max border rounded-full px-11 py-2 text-xs hover:text-slate-300 hover:border-slate-300">
                            Load More
                        </button>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
