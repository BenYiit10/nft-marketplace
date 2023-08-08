import React from "react";
import HeroSection from "../components/HeroSection";
import Category from "../components/Category";
import Auctions from "../components/Auctions";
import Sellers from "../components/Sellers";
import Collection from "../components/Collection";
import Wallet from "../components/Wallet";
import TodaysPick from "../components/TodaysPick";

export default function Home() {

  return (
    <>
      <HeroSection className="bg-[#14141F] "/>
      <Category/>
      <Auctions/>
      <Sellers/>
      <TodaysPick/>
      <Collection/>
      <Wallet/>
    </>
  );
}
