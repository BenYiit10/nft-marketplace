import React, { useState } from "react";
import AuctionCard from "../home/AuctionCard";
import SectionTitle from "../../ui/SectionTitle";
import AuctionCardContainer from "./AuctionCardContainer";
import AuctionTabIndexTabContainer from "./AuctionTabIndexTabContainer";
import { Squares, SortMenuIcon, Dollars, Lightning, Cube } from "../../ui/Icon";
import TodaysPickTab from "../home/TodaysPickTab";
import { useSelector } from "react-redux";
export default function AuctionSection() {
    const [showCount, setShowCount] = useState(6);

    const clickHandle = () => {
        setShowCount((showCount) => showCount + 6);
    };

    const selectBorder = useSelector(state => state.reducer.selectBorder)

    return (
        <section className="relative pt-14 pb-16">
            <div className="page-container">
                <SectionTitle title="Live Auctions" more />

                <div className="todaysPickTab mb-8 flex justify-between gap-7 pb-2 overflow-x-auto">
                    <div className="tab flex gap-4">
                        <TodaysPickTab
                            content={[
                                {
                                    title: "Category",
                                    index: 0,
                                },
                            ]}
                            icon={<Squares />}
                        />
                        <TodaysPickTab
                            content={[
                                {
                                    title: "Price range",
                                    index: 1,
                                },
                            ]}
                            icon={<Dollars />}
                        />
                        <TodaysPickTab
                            content={[
                                {
                                    title: "Sale type",
                                    index: 2,
                                },
                            ]}
                            icon={<Lightning />}
                        />
                        <TodaysPickTab
                            content={[
                                {
                                    title: "Blockchain",
                                    index: 3,
                                },
                            ]}
                            icon={<Cube />}
                        />
                    </div>
                    <div className={`sort relative flex items-center gap-4 border border-1 ${selectBorder ? "border-purple-500" : "border-white" } rounded-full px-4 py-[5px] font-semibold cursor-pointer`}>
                        <SortMenuIcon />
                        <select className="cursor-pointer select-none bg-transparent appearance-none outline-none w-max  ">
                            <option className="bg-[#1d1d37]" value="0">
                                Sort By: Recently Added
                            </option>
                            <option className="bg-[#1d1d37] " value="1">
                                Sort By: Recently Added
                            </option>
                        </select>
                    </div>
                </div>

                <AuctionTabIndexTabContainer className="tab-panel grid grid-cols-4 gap-x-8 gap-y-6">
                    <AuctionCardContainer>
                        {
                            [...Array(showCount)].map((data,index) => {
                                return (
                                    <AuctionCard key={index}/>
                                    )
                            })
                        }
                    </AuctionCardContainer>
                    <AuctionCardContainer>
                        {
                            [...Array(showCount)].map((data,index) => {
                                return (
                                    <AuctionCard key={index}/>
                                    )
                            })
                        }
                    </AuctionCardContainer>
                    <AuctionCardContainer>
                        {
                            [...Array(showCount)].map((data,index) => {
                                return (
                                    <AuctionCard key={index}/>
                                    )
                            })
                        }
                    </AuctionCardContainer>
                    <AuctionCardContainer>
                        {
                            [...Array(showCount)].map((data,index) => {
                                return (
                                    <AuctionCard key={index}/>
                                    )
                            })
                        }
                    </AuctionCardContainer>
                    
                </AuctionTabIndexTabContainer>

                <div className="flex justify-center mt-8">
                    {showCount < 18 && (
                        <button
                            onClick={clickHandle}
                            className="w-max border rounded-full px-11 py-2 text-xs hover:text-slate-300 hover:border-slate-300"
                        >
                            Load More
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
