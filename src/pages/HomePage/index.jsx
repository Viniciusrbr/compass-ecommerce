import React from "react";
import Header from "../../components/common/Header";
import MainBanner from '../../components/MainBanner/index';
import Offers from "../../components/OfferContainer/index";

function HomePage() {
  return <>
    <Header></Header>
    <MainBanner />
    <Offers />
  </>;
}

export default HomePage;
