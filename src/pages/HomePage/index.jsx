import React from "react";
import MainBanner from '../../components/MainBanner/index';
import Offers from "../../components/OfferContainer/index";
import ProductsContainer from "../../components/ProductsContainer";
import SectionWithDivs from "../../components/FeatureContainer";

function HomePage() {
  return <>
    <MainBanner />

    <SectionWithDivs />
    <Offers />
    <ProductsContainer />
    
  </>;
}

export default HomePage;
