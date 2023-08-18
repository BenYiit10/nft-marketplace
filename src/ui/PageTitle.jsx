import React from "react";
import { twMerge } from "tailwind-merge";

export default function PageTitle({ title, content, className }) {
    return (
        <div className={twMerge(`text-center flex flex-col gap-6`,className)}>
            <h1 className="text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-rubik">
                <strong className="font-bold">{title}</strong>
            </h1>
            <p className="text-xs 2xl:text-sm 4xl:text-base 5xl:text-lg">
                {content}
            </p>
        </div>
    );
}
