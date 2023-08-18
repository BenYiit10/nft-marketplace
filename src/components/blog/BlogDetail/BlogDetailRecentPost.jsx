import React from "react";
import recentPostPP from "../../../assets/recentPostPP.png";
import ImgContainer from "../../../ui/ImgContainer";
import { Link } from "react-router-dom";

export default function BlogDetailRecentPost() {
    return( 
        <Link to="#">
            <div className="blogDetailRecentPost grid gap-4 items-center bg-[#131313] rounded-md p-3 text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl">
                <ImgContainer src={recentPostPP} className="w-fit 2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9 4xl:w-10 4xl:h-10 5xl:h-12 5xl:w-12" />
                <div className="flex flex-col gap-2 justify-between">
                    <p>
                        <strong className="font-semibold line-clamp-2">
                        6 Make Mobile Website Faster
                        </strong>
                    </p>
                    <div className="postContent grid gap-2 justify-end">
                        <p className="line-clamp-1">
                            Lorem ipsum dolor sit ametdolor sit ametdolor sit amet.
                        </p>
                        <div className="text-end">
                            <p className="self-end">
                            August 10, 2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
