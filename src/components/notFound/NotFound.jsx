import React from "react";
import notFound from "../../assets/notFound.png";
import ImgContainer from "../../ui/ImgContainer";
import BlogDetailLink from "../../ui/BlogDetailLink"
export default function NotFound() {
    return (
        <div className="flex flex-col items-center text-center ">
            <ImgContainer className=" w-2/5 max-sm:w-3/5 max-xs:w-4/5" src={notFound} />
            <div className="flex flex-col gap-6 items-center -mt-[5%]">
                <h1 className="text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-rubik">
                    <strong className="font-bold ">Opps! you’r on the wrong place.</strong>
                </h1>
                <p className="2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl">
                Can not find what you need? Take a moment and do a search below or start from our Homepage.
                </p>
                <BlogDetailLink className="border-0 bg-purple-200 text-purple-600 px-12 py-4" content="Back To Home" />
            </div>
        </div>
    );
}
