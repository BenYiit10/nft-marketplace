import React from "react";
import HeroSection from "../components/home/HeroSection";
import Category from "../components/home/Category";
import Auctions from "../components/home/Auctions";
import Sellers from "../components/home/Sellers";
import Collection from "../components/home/Collection";
import Wallet from "../components/home/Wallet";
import TodaysPick from "../components/home/TodaysPick";

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
