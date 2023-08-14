import React from 'react'
import CheckboxForm from '../../ui/CheckboxForm'
import ExploreCard from "./ExploreCard"
import { Link } from 'react-router-dom'

export default function ExploreSection() {
    return (
        <section className='relative'>
            <div className='page-container flex gap-16'>
                <aside className='w-[170px]'>
                    <CheckboxForm title="Status" content={["Buy Now","On Auctions","Has Offers"]} />
                    <CheckboxForm title="Categories" content={["Art","Music","Domain Names","Virtual Cards","Trading Cards","Collectibles","Sports","Utility"]} />
                    <CheckboxForm title="Chains" content={["Etherium","Polygon","Klaytn"]} />
                    <CheckboxForm title="Collections" content={["Abstaction","Patternlicious","Sketchify","Cartoonism","Virtuland","Papercut"]} />
                </aside>

                <div>
                    <div className='grid grid-cols-3 gap-12'>
                        <ExploreCard detail/>
                        <ExploreCard detail/>
                        <ExploreCard detail/>
                        <ExploreCard detail/>
                        <ExploreCard detail/>
                        <ExploreCard detail/>
                        <ExploreCard detail/>
                    </div>
                    <div className="flex justify-center mt-8 mb-11">
                        <Link to="#" className="w-max border rounded-full px-11 py-2 text-xs hover:text-slate-300 hover:border-slate-300">
                            Load More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
