import React, { useEffect, useState } from "react";
import { Copyright, Send } from "../../ui/Icon";
import { SiFacebook, SiYoutube, SiInstagram, SiTwitter } from "react-icons/si";
import FooterItem from "./FooterItem";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
    const [isBlack, setIsBlack] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname !== "/") {
            setIsBlack(false);
        } else {
            setIsBlack(true);
        }
    }, [location]);

    return (
        <footer
            className={`pt-14 pb-12 ${
                isBlack ? "bg-[#030303]" : "bg-transparent"
            }`}
        >
            <div className="page-container flex justify-between flex-wrap gap-4 max-sm:grid max-sm:gap-y-16 max-sm:justify-around max-xxs:!grid-cols-2 max-xxs:justify-items-center  ">
                <div className="flex flex-col gap-6 max-w-[215px] 3xl:max-w-[265px] 4xl:max-w-[300px]">
                    <p className="text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-rubik">
                        <strong className="font-bold ">Logo</strong>
                    </p>
                    <p className="text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg">
                        Lorem ipsum dolor sit amet,consectetur adipisicing elit.
                        Quis non, fugit totam vel laboriosam vitae.
                    </p>
                    <p className="flex gap-1 items-center text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg max-xxs:break-all max-xxs:ml-auto">
                        <Copyright />
                        2023 Company@example.com
                    </p>
                </div>

                <FooterItem
                    title="My Account"
                    content={[
                        {
                            title: "Collection",
                            link: "/collection",
                        },
                        {
                            title: "Author Profile",
                            link: "/author",
                        },
                        {
                            title: "Create Item",
                            link: "/create",
                        },
                    ]}
                />
                <FooterItem
                    title="Resources"
                    content={[
                        {
                            title: "Help & Support",
                            link: "/help",
                        },
                        {
                            title: "Live Auctions",
                            link: "/auction",
                        },
                        {
                            title: "Item Details",
                            link: "/itemdetail",
                        },
                        {
                            title: "Activity",
                            link: "/activity",
                        },
                    ]}
                />
                <FooterItem
                    title="Company"
                    content={[
                        {
                            title: "Explore",
                            link: "/explore",
                        },
                        {
                            title: "Contact Us",
                            link: "/contact",
                        },
                        {
                            title: "Our Blog",
                            link: "/blog",
                        },
                        {
                            title: "FAQ",
                            link: "/faq",
                        },
                    ]}
                />

                <div className="subscribe grid gap-4 max-xxs:w-[200%] max-xxs:ml-auto">
                    <p>
                        <strong className="font-semibold 3xl:text-lg 4xl:text-xl 5xl:text-2xl">
                            Subscribe Us
                        </strong>
                    </p>
                    <div className="grid gap-8">
                        <form className="flex justify-between rounded-md overflow-hidden bg-[#F3F3F3] gap-1 h-fit">
                            <input
                                type="text"
                                className="bg-transparent text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg w-full text-slate-500 outline-0 pl-2"
                            />
                            <button className="bg-purple-600 hover:bg-purple-900 py-2 px-3">
                                <Send strokeWidth="0.2" />
                            </button>
                        </form>
                        <div className="flex gap-4 text-[#CEC7C7]">
                            <Link to="#">
                                <SiFacebook className="3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6 5xl:w-7 5xl:h-7 hover:text-[#b5b0b0]" />
                            </Link>
                            <Link to="#">
                                <SiYoutube className="3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6 5xl:w-7 5xl:h-7 hover:text-[#b5b0b0]" />
                            </Link>
                            <Link to="#">
                                <SiInstagram className="3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6 5xl:w-7 5xl:h-7 hover:text-[#b5b0b0]" />
                            </Link>
                            <Link to="#">
                                <SiTwitter className="3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6 5xl:w-7 5xl:h-7 hover:text-[#b5b0b0]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
