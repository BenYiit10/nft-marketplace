import React from "react";
import PageTitle from "../../ui/PageTitle";
import { BsSearch } from "react-icons/bs";
import HelpItem from "./HelpItem";
import {
    HelpSend,
    HelpChart,
    HelpDev,
    HelpFolder,
    HelpMarket,
    HelpPartner,
} from "../../ui/Icon";

export default function HelpSection() {
    return (
        <section>
            <div className="page-container ">
                <div className="flex flex-col gap-12 w-2/5 max-lg:w-3/5 max-md:w-4/5 max-xs:w-full m-auto">
                    <PageTitle
                        title="How Can We Help You?"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
                    />
                    <form className="flex justify-between rounded-md overflow-hidden bg-[#EAEAEA] gap-1 h-fit">
                        <input
                            type="text"
                            className="bg-transparent text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg w-full text-slate-500 outline-0 pl-5"
                            placeholder="Type your question here..."
                        />
                        <button className="bg-purple-600 hover:bg-purple-900 py-3 px-6 4xl:py-4 4xl:px-7">
                            <BsSearch className="text-white 4xl:w-5 4xl:h-5" strokeWidth="1" />
                        </button>
                    </form>
                </div>
                <div className="flex flex-wrap justify-center gap-y-2 ">
                    <HelpItem
                        icon={<HelpSend size="40" className="4xl:w-12 4xl:h-12" />}
                        title="Get Started"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                    <HelpItem
                        icon={<HelpFolder size="40" className="4xl:w-12 4xl:h-12" />}
                        title="Creating"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                    <HelpItem
                        icon={<HelpMarket size="40" className="4xl:w-12 4xl:h-12" />}
                        title="Buying"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                    <HelpItem
                        icon={<HelpChart size="40" className="4xl:w-12 4xl:h-12" />}
                        title="Selling"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                    <HelpItem
                        icon={<HelpPartner size="40" className="4xl:w-12 4xl:h-12" />}
                        title="Partners"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                    <HelpItem
                        icon={<HelpDev size="40" className="4xl:w-12 4xl:h-12" />}
                        title="Developers"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                </div>
            </div>
        </section>
    );
}
