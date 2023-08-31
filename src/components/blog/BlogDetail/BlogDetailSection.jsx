import React from "react";
import ImgContainer from "../../../ui/ImgContainer";
import blogMain from "../../../assets/blogMain.png";
import blogBig from "../../../assets/blogBig.png";
import blogSmall from "../../../assets/blogSmall.png";
import BlogDetailLink from "../../../ui/BlogDetailLink";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import BlogDetailRecentPost from "./BlogDetailRecentPost";
export default function BlogDetailSection() {
    return (
        <section className="mt-20">
            <div className="page-container flex gap-16 max-lg:flex-col">
                <div className="sectionMain w-2/3 flex flex-col gap-6 max-lg:w-full ">
                    <h1 className="font-rubik text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl 5xl:text-7xl text-center border-b pb-6">
                        <strong className="font-bold">
                            The Next Big Trend in Crypto
                        </strong>
                    </h1>

                    <div className="flex justify-between gap-4 max-sm:flex-col max-sm:items-center">
                        <div className="flex flex-col gap-2 max-sm:text-center">
                            <p className="font-semibold 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl">Designer Preview</p>
                            <p className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl">AUGUST CHAPTER</p>
                        </div>
                        <div className="flex max-sm:grid max-sm:grid-cols-2 ">
                            <div className="flex flex-col gap-2 border-r border-slate-400 pr-6 max-md:pr-3 max-sm:justify-self-end">
                                <p className="font-semibold 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl">WRITER</p>
                                <p className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl">DWINAWAN</p>
                            </div>
                            <div className="flex flex-col gap-2 pl-6 max-md:pl-3">
                                <p className="font-semibold 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl">DATE</p>
                                <p className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl">AUGUST 11, 2022</p>
                            </div>
                        </div>
                    </div>
                    <ImgContainer src={blogMain} className="w-full" />
                    <div className="blogMain flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h2 className="font-semibold 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl">
                                What Is The Most Fun Thing To Become A Designer?
                            </h2>
                            <p className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-9 max-sm:gap-6 max-xs:grid-cols-1">
                            <ImgContainer src={blogSmall} />
                            <ImgContainer src={blogSmall} />
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="font-semibold 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl">
                                How Is Your Daily Routine?
                            </h2>
                            <p className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Cupidatat non Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                        <div className="flex gap-9">
                            <ImgContainer src={blogBig} />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="font-semibold 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl">
                                Middle Post Heading
                            </h2>
                            <p className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl">
                                Middle Post Heading Sed ut perspiciatis unde
                                omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem
                                aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta
                                sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit, sed
                                quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 flex-wrap border-b border-slate-600 pb-2">
                        <div className="flex gap-2 flex-wrap">
                            <BlogDetailLink
                                content="Bitcoin"
                                className="text-purple-600 bg-purple-200 border-purple-600"
                            />
                            <BlogDetailLink
                                content="NFT"
                                className="text-green-600 bg-green-200 border-green-600"
                            />
                            <BlogDetailLink
                                content="Bids"
                                className="text-pink-600 bg-pink-200 border-pink-600"
                            />
                        </div>
                        <div className="flex gap-4 text-[#CEC7C7]">
                            
                            {
                                [
                                    {
                                        link:"facebook",
                                        comp:SiFacebook
                                    },
                                    {
                                        link:"instagram",
                                        comp:SiInstagram
                                    },
                                    {
                                        link:"twitter",
                                        comp:SiTwitter
                                    },
                                ].map((item,index) => {
                                    return (
                                        <a target="_blank" rel="noreferrer" key={index} href={item.link}>
                                            <item.comp className="w-6 h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9 hover:text-[#b5b0b0]" />
                                        </a>
                                        )
                                })
                            }

                            
                        </div>
                    </div>
                    <form className="flex flex-col gap-4 mt-4">
                        <p>
                            Leave a comment
                        </p>
                        <div className="grid grid-cols-2 gap-10">
                            <input type="text" className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl bg-transparent border-b border-slate-600 py-3 outline-0 focus:border-blue-400/80" placeholder="Name" />
                            <input type="email" className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl bg-transparent border-b border-slate-600 py-3 outline-0 focus:border-blue-400/80" placeholder="Email" />
                        </div>
                        <textarea className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl bg-transparent border-b border-slate-600 outline-0 focus:border-blue-400/80 resize-none"  placeholder="Message"  cols="30" rows="10"></textarea>
                        <div className="flex justify-end">
                            <button type="submit" className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl bg-purple-600 py-[10px] px-4 rounded-full">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>

                <div className="sectionAside w-1/3 max-lg:w-full flex flex-col gap-8">
                    <div className="posts">
                        <h2 className="font-rubik text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl mb-6">
                            <strong className="font-bold">
                            Recent Post
                            </strong>
                        </h2>
                        <div className="flex flex-col gap-2 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
                            <BlogDetailRecentPost />
                            <BlogDetailRecentPost />
                            <BlogDetailRecentPost />
                            <BlogDetailRecentPost />
                        </div>
                    </div>
                    <div className="tags">
                        <h2 className="font-rubik text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl mb-6">
                            <strong className="font-bold">
                            Popular Tags
                            </strong>
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {
                                ["Bitcoin","NFT","Bids","Digital","Arts","Marketplace"].map((item,index)=> {
                                    return (
                                        <BlogDetailLink className="text-white bg-transparent border-white" content={item} key={index} />
                                        )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
