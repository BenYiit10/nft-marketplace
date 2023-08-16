import React from "react";
import ActivitySection from "../components/activity/ActivitySection";
import PageBanner from "../components/PageBanner";

export default function Activity() {
    return (
        <>
            <PageBanner
                title="Activity"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <ActivitySection />
        </>
    );
}
