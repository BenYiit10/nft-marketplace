import React, { Fragment } from "react";
import Header from "./home/Header";
import Footer from "./home/Footer";

export default function Layout({ children }) {

    return (
        <Fragment>
            <Header/>
                <main>
                    {children}
                </main>
            <Footer/>
        </Fragment>
    );
}
