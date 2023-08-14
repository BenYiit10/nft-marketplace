import React from "react";
import { twMerge } from "tailwind-merge";

export default function PageTitle({ title, className }) {
    return (
        <div className={twMerge(`text-5xl font-rubik `, className)}>
            <h1>
                <strong className="font-700">{title}</strong>
            </h1>
        </div>
    );
}
