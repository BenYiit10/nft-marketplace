import React from "react";
import blogCat from "../../assets/blogCat.png";
import profile from "../../assets/profile.png";
import ImgContainer from "../../ui/ImgContainer";
import { Link } from "react-router-dom";
export default function BlogCard() {
    return (
        <div className="blogCard overflow-hidden rounded-xl max-[520px]:w-3/4 max-[520px]:m-auto">
            <ImgContainer src={blogCat} className="w-full" />
            <div className="flex flex-col gap-4 py-6 px-4">
                <div className="card-detail grid gap-4 text-xs 2xl:text-sm 4xl:text-base 5xl:text-lg items-center">
                    <div className="card-profile w-max">
                        <ImgContainer
                            src={profile}
                            className="w-11 h-11 4xl:w-14 4xl:h-14"
                        />
                    </div>
                    <div className="grid grid-cols-2 justify-between w-full items-center">
                        <div className="card-name grid gap-2">
                            <p className="self-start">Creator</p>
                            <p className="font-semibold">Lolla Smith</p>
                        </div>
                        <div className="card-name grid gap-2 justify-end text-base">
                            <p className="text-end">Jan 1, 2022</p>
                        </div>
                    </div>
                </div>
                <div className="blogTitle grid gap-3 h-full">
                    <p className="font-rubik text-lg">
                        <strong className="font-bold">The Next Bid Trend in Crypto</strong>
                    </p>
                    <p className="line-clamp-3 text-xs">
                    Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat reprehenderit cupidatat labore ad laborum consectetur consequat
                    </p>
                </div>
                <div className="text-end text-xs text-purple-600 mt-2">
                    <Link to="#">
                        View Detail
                    </Link>
                </div>
            </div>
        </div>
    );
}
