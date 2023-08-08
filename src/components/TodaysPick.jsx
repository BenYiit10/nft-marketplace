import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import TodaysPickTab from './TodaysPickTab'
import {Squares, SortMenuIcon} from "../ui/Icon"
import token from "../assets/token.png"
import ImgContainer from "../ui/ImgContainer"

export default function TodaysPick() {
    return (
        <section className='relative pt-14 pb-16'>
            <ImgContainer src={token} className="absolute right-0 top-0 translate-x-[10%] -translate-y-1/4" />
            <div className='page-container'>
                <SectionTitle title="Today’s Pick" more />
                
                <div className='mb-8 flex justify-between'>
                    <div className='tab flex gap-4'>
                        <TodaysPickTab content={[{
                            title:"Category",index:0
                        }]} icon={<Squares/>} />
                        <TodaysPickTab content={[{
                            title:"Category",index:1
                        }]} icon={<Squares/>} />
                        <TodaysPickTab content={[{
                            title:"Category",index:2
                        }]} icon={<Squares/>} />
                        <TodaysPickTab content={[{
                            title:"Category",index:3
                        }]} icon={<Squares/>} />
                    </div>
                    <div className='sort relative flex items-center gap-4 border border-1 border-purple-600 rounded-full px-4 py-[5px] font-semibold '>
                        <SortMenuIcon/>
                        <p>
                            Sort By: Recently Added
                        </p>
                    </div>
                </div>

                <div className='tab-panel'>

                </div>
            </div>
        </section>
    )
}
