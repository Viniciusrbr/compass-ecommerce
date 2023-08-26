import React from "react";
import MainBanner from "../../components/MainBanner/index";
import FeatureSection from "../../components/FeatureContainer/index";
import Offers from "../../components/OfferContainer/index";
import ProductsContainer from "../../components/ProductsContainer";

function HomePage() {
  return (
    <>
      <MainBanner />
      <FeatureSection />
      <Offers />
      <ProductsContainer />
    </>
  );
}

export default HomePage;
