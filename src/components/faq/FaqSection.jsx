import React from "react";
import FaqItem from "./FaqItem";
import PageTitle from "../../ui/PageTitle";
export default function FaqSection() {
    return (
        <section>
            <div className="page-container ">
                <div className="flex flex-col gap-12 w-2/5 max-lg:w-3/5 max-md:w-4/5 max-xs:w-full m-auto">
                    <PageTitle
                        title="Frequently Ask Questions"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laborum obcaecati dignissimos quae quo ad iste
                            ipsum officiis deleniti asperiores sit."
                    />

                    <div className="flex flex-col gap-6 ">
                        <FaqItem />
                        <FaqItem />
                        <FaqItem />
                        <FaqItem />
                    </div>
                </div>
            </div>
        </section>
    );
}
