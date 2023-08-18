import React from "react";
import mail from "../../assets/mail.png";
import ImgContainer from "../../ui/ImgContainer";
import PageTitle from "../../ui/PageTitle";
export default function ContactSection() {
    return (
        <section>
            <div className="page-container grid grid-cols-2 max-md:grid-cols-1 items-center">
                <ImgContainer src={mail} className="3xl:w-4/5 max-lg:w-full max-md:m-auto" />
                <div className="flex flex-col gap-8">
                    <PageTitle
                        title="Drop Up A Message"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
                        className="text-start gap-4"
                    />
                    <form className="flex flex-col gap-4 mt-4">
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl bg-transparent border-b border-slate-600 py-3 outline-0 focus:border-blue-400/80"
                                placeholder="Your Full Name"
                            />
                            <input
                                type="email"
                                className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl bg-transparent border-b border-slate-600 py-3 outline-0 focus:border-blue-400/80"
                                placeholder="Your Email Address"
                            />
                            <input
                                type="email"
                                className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl bg-transparent border-b border-slate-600 py-3 outline-0 focus:border-blue-400/80"
                                placeholder="Select Subject"
                            />
                        </div>
                        <textarea
                            className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl bg-transparent border-b border-slate-600 outline-0 focus:border-blue-400/80 resize-none"
                            placeholder="Message"
                            cols="30"
                            rows="7"
                        ></textarea>

                        <button
                            type="submit"
                            className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl text-purple-600 bg-purple-200 py-4 px-4 rounded-full mt-2 font-medium"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
