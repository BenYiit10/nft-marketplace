import React from "react";
import HeroSection from "../components/HeroSection";
import Category from "../components/Category";
import Auctions from "../components/Auctions";

export default function Home() {

  return (
    <>
      <HeroSection className="bg-[#14141F] "/>
      <Category/>
      <Auctions/>
    </>
  );
}
