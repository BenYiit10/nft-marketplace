import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { setIsThere } from "../redux/reducer";
import Header from "./home/Header";
import Footer from "./home/Footer";

export default function Layout({ children }) {
    const dispatch = useDispatch()

    dispatch(setIsThere(true))

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
