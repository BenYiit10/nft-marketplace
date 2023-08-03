import React from "react";
import { useDispatch } from "react-redux";
import { setIsThere } from "../redux/reducer";
import Header from "./Header";

export default function Layout({ children }) {
  const dispatch = useDispatch()

  dispatch(setIsThere(true))

  return (
    <div className="text-white">
      <Header/>
      {children}
    </div>
  );
}
