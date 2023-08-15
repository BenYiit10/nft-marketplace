import React, { useState } from 'react'
import CheckboxForm from '../../ui/CheckboxForm'
import ExploreCard from "./ExploreCard"

export default function ExploreSection() {

    const [showCount,setShowCount] = useState(6)

    const clickHandle = () => {
        setShowCount(showCount => showCount+6)
    }

    return (
        <section className='exploreSection relative'>
            <div className='page-container flex gap-16 max-[1170px]:gap-12 max-[1110px]:gap-8 max-lg:gap-12 max-[820px]:gap-8 max-sm:gap-16 max-[520px]:gap-8 max-xs:gap-4 max-xxs:gap-2 '>
                <aside className='w-[170px] max-sm:min-w-[170px] max-[520px]:min-w-[auto] '>
                    <CheckboxForm title="Status" content={["Buy Now","On Auctions","Has Offers"]} />
                    <CheckboxForm title="Categories" content={["Art","Music","Domain Names","Virtual Cards","Trading Cards","Collectibles","Sports","Utility"]} />
                    <CheckboxForm title="Chains" content={["Etherium","Polygon","Klaytn"]} />
                    <CheckboxForm title="Collections" content={["Abstaction","Patternlicious","Sketchify","Cartoonism","Virtuland","Papercut"]} />
                </aside>

                <div>
                    <div className='grid grid-cols-3 gap-12 max-[1170px]:gap-8 max-[1110px]:gap-4 max-lg:grid-cols-2 max-lg:gap-8 max-[820px]:gap-4 max-sm:grid-cols-1'>
                        {
                            [...Array(showCount)].map((data,index) => {
                                return (
                                    <ExploreCard detail key={index} className="max-sm:w-11/12 max-[520px]:w-full" />
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
