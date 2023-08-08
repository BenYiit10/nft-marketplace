import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { setIsThere } from "../redux/reducer";
import Header from "./Header";
import Footer from "./Footer";

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
