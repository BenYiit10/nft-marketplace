import React from "react";
import FaqItem from "./FaqItem";
export default function FaqSection() {
    return (
        <section>
            <div className="page-container flex flex-col gap-12">
                <div className="text-center flex flex-col gap-6">
                    <h1 className="text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-rubik">
                        <strong className="font-bold">
                        Frequently Ask Questions
                        </strong>
                    </h1>
                    <p className="text-xs w-2/5 m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <FaqItem />
                    <FaqItem />
                    <FaqItem />
                    <FaqItem />

                </div>

            </div>
        </section>
    );
}
