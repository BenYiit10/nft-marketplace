import React from "react";
import bannerExplore from "../assets/bannerExplore.png";
import ImgContainer from "../ui/ImgContainer";
import { twMerge } from "tailwind-merge";
export default function PageBanner({ title, content, className }) {
    return (
        <section
            className={twMerge(`relative z-0 overflow-hidden mb-14`, className)}
        >
            <div className="h-[346px] max-mdd:h-[400px]">
                <ImgContainer
                    src={bannerExplore}
                    className="w-full h-full object-cover"
                />
                <div className={`page-container absolute -translate-x-1/2 translate-y-1/2 left-1/2 
                    ${content ? "top-[43%]" : "top-1/2" }
                `}>
                    <div className="flex flex-col gap-2 justify-center items-center text-center">
                        <h1 className="font-rubik text-[32px] 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
                            <strong className="font-bold">{title}</strong>
                        </h1>
                        {content && (
                            <p className="text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg">
                                {content}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
