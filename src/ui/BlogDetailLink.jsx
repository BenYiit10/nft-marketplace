import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function BlogDetailLink({ className, content="Link",link}) {
    return (
            <Link to={link} >
        <button className={twMerge(`px-5 py-2 rounded-full w-fit text-xs font-semibold bg-slate-400 border border-slate-600 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl`,className)}>
                {content}
        </button>
            </Link>
    );
}
