import React, { useState } from "react";
import Auctions from "../home/Auctions";
import ImgContainer from "../../ui/ImgContainer";
import itemDetailMainBigImage from "../../assets/itemDetailMainBigImage.png";
import { HiOutlineHeart, HiHeart } from 'react-icons/hi2'
import { Eye } from "../../ui/Icon";

export default function ItemDetailSection() {

    const [like,setLike] = useState(0)
    const [isTouch,setIsTouch] = useState(false)

    return (
        <section>
            <div className="page-container">
                <div className="grid grid-cols-2 gap-16">
                    <ImgContainer src={itemDetailMainBigImage} />

                    <div className="flex flex-col gap-5">
                        <div>
                            <h1 className="font-rubik max-xs:text-[25px] text-3xl 2xl:text-4xl 5xl:text-5xl">
                                <strong className="font-bold line-clamp-1">
                                    The Fantasy Flower Bla Bla Bla Bla
                                </strong>
                            </h1>

                            <div className="flex gap-4 text-black font-semibold">
                                <div className="flex gap-2 bg-[#EAEAEA]  rounded-full px-2 py-0.5 items-center 4xl:text-lg 4xl:px-3">
                                    <Eye className="stroke-black" />
                                    100
                                </div>
                                <button
                                    onClick={() => {
                                        !isTouch
                                            ? setLike((like) => like + 1)
                                            : setLike((like) => like - 1);
                                        setIsTouch((isTouch) => !isTouch);
                                    }}
                                    className="likes bg-[#EAEAEA]  rounded-full px-2 py-0.5 items-center 4xl:text-lg 4xl:px-3 cursor-pointer hover:bg-slate-300"
                                >
                                    <div className="flex gap-2 items-center">
                                        {!isTouch ? (
                                            <HiOutlineHeart className="stroke-2"  />
                                        ) : (
                                            <HiHeart />
                                        )}
                                        {like}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Auctions />
            </div>
        </section>
    );
}
