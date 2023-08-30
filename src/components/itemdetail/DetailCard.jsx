import React from "react";
import profile from "../../assets/profile.png";
import ImgContainer from "../../ui/ImgContainer";
import { Link } from "react-router-dom";

export default function DetailCard() {
    return (
        <div className="detail-card pt-4 pb-1 border-b border-slate-500">
            <div className="card-detail grid gap-4 text-xs 2xl:text-sm 4xl:text-base 5xl:text-lg items-center">
                <div className="card-profile w-max">
                    <ImgContainer
                        src={profile}
                        className="w-11 h-11 4xl:w-14 4xl:h-14"
                    />
                </div>
                <div className="grid grid-cols-2 h-full justify-between w-full items-center text-xs">
                    <div className="card-name flex gap-2">
                        <div className="grid">
                            <p className="font-semibold self-start">Lolla Smith</p>
                            <p className="">8 hours ago</p>
                        </div>
                        <Link to="#">
                            place a bid
                        </Link>
                    </div>
                    <div className="card-name grid justify-end">
                        <p className="font-semibold">4.89ETH</p>
                        <p className="">
                            =$12.246
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
