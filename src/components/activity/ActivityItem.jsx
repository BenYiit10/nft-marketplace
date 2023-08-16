import React from "react";
import activityProfile from "../../assets/activityProfile.png";
import ImgContainer from "../../ui/ImgContainer";
export default function ActivityItem() {
    return (
        <div className="px-3 py-4 border rounded-xl border-purple-600 flex gap-6 max-xl:gap-3 "> {/* max-lg:flex-col max-lg:items-center */}
            <ImgContainer src={activityProfile} className="h-fit max-xl:w-28 max-xl:h-28" />
            <div>
                <p className="mb-4">
                    <strong className="font-bold">Pinky Ocean</strong>
                </p>

                <div className="text-xs flex flex-col gap-2">
                    <p>
                        following <span className="text-purple-600">Lolla Smith</span>
                    </p>
                    <p>19th June, 2021</p>
                </div>
            </div>
        </div>
    );
}
