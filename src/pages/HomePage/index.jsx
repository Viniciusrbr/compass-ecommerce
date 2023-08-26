import React from "react";
import MainBanner from "../../components/MainBanner/index";
import FeatureSection from "../../components/FeatureContainer/index";
import Offers from "../../components/OfferContainer/index";
import ProductsContainer from "../../components/ProductsContainer";
import FooterBanner from "../../components/common/FooterBanner/index";

function HomePage() {
  return (
    <>
      <MainBanner />
      <FeatureSection />
      <Offers />
      <ProductsContainer />
      <FooterBanner></FooterBanner>
    </>
  );
}

export default HomePage;
