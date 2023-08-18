import React from "react";

export default function AuctionCardContainer({ children }) {
    return (
        <div className="section-content grid grid-cols-3 gap-x-20 4xl:grid-cols-4 4xl:gap-x-12 max-xl:gap-x-16 gap-y-6 max-lg:gap-x-20 max-lg:grid-cols-2 max-md:gap-x-12 max-[520px]:grid-cols-1 max-[520px]:justify-items-center">
            {children}
        </div>
    );
}
