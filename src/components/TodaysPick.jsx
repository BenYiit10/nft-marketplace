import React from "react";
import SectionTitle from "../ui/SectionTitle";
import TodaysPickTab from "./TodaysPickTab";
import { Squares, SortMenuIcon } from "../ui/Icon";
import TodaysPickCard from "./TodaysPickCard";
import TodaysPickTabIndexTabContainer from "./TodaysPickTabIndexTabContainer";
import TodaysPickContainer from "./TodaysPickContainer";
import { Link } from "react-router-dom";
export default function TodaysPick() {

    

    return (
        <section className="relative pt-14 pb-16">
        <div className="page-container">
            <SectionTitle title="Today’s Pick" more />

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
                        title: "Category",
                        index: 1,
                        },
                    ]}
                    icon={<Squares />}
                    />
                    <TodaysPickTab
                    content={[
                        {
                        title: "Category",
                        index: 2,
                        },
                    ]}
                    icon={<Squares />}
                    />
                    <TodaysPickTab
                    content={[
                        {
                        title: "Category",
                        index: 3,
                        },
                    ]}
                    icon={<Squares />}
                    />
                </div>
                <div className="sort relative flex items-center gap-4 border border-1 border-purple-600 rounded-full px-4 py-[5px] font-semibold cursor-pointer">
                    <SortMenuIcon />
                    <select className="cursor-pointer select-none bg-transparent appearance-none outline-none w-max  ">
                        <option className="bg-[#1d1d37]"  selected>Sort By: Recently Added</option>
                        <option className="bg-[#1d1d37]">Sort By: Recently Added</option>
                    </select>
                </div>
            </div>

            <TodaysPickTabIndexTabContainer className="tab-panel grid grid-cols-4 gap-x-8 gap-y-6">

                {/* 
                    [...Array(8)].map((item,index) => (
                        <TodaysPickContainer key={index}>
                            {
                                [...Array(8)].map((item,index) => {
                                    return (
                                        <TodaysPickCard detail key={index} /> 
                                        )
                                })
                            }
                            
                        
                            </TodaysPickContainer>
                    )) */
                }

                
            <TodaysPickContainer>
                <TodaysPickCard detail />
                <TodaysPickCard detail />
                <TodaysPickCard />
                <TodaysPickCard detail />
                <TodaysPickCard detail />
                <TodaysPickCard />
                <TodaysPickCard />
                <TodaysPickCard detail />
            </TodaysPickContainer>
            <TodaysPickContainer>
                <TodaysPickCard detail />
                <TodaysPickCard />
                <TodaysPickCard />
                <TodaysPickCard detail />
                <TodaysPickCard detail />
                <TodaysPickCard />
                <TodaysPickCard />
                <TodaysPickCard detail />
            </TodaysPickContainer>
            <TodaysPickContainer>
                <TodaysPickCard detail />
                <TodaysPickCard detail />
                <TodaysPickCard detail />
                <TodaysPickCard />
                <TodaysPickCard />
                <TodaysPickCard detail />
                <TodaysPickCard detail />
                <TodaysPickCard />
                <TodaysPickCard />
            </TodaysPickContainer>
            <TodaysPickContainer>
                <TodaysPickCard detail />
                <TodaysPickCard detail />
                <TodaysPickCard detail />
                <TodaysPickCard />
                <TodaysPickCard />
            </TodaysPickContainer>
            </TodaysPickTabIndexTabContainer>

            <div className="flex justify-center mt-8">
            <Link to="#" className="w-max border rounded-full px-11 py-2 text-xs hover:text-slate-300 hover:border-slate-300">
                Load More
            </Link>
            </div>
        </div>
        </section>
    );
}
