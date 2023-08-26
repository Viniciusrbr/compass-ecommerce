import React from "react";
import MainBanner from "../../components/MainBanner/index";
import FeatureSection from "../../components/FeatureContainer/index";
import Offers from "../../components/OfferContainer/index";
import ProductsContainer from "../../components/ProductsContainer";
import styled from "styled-components";

const MainContent = styled.div`
  margin: 58px 200px 40px 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function HomePage() {
  return (
    <>
      <MainBanner />

      <MainContent>
        <FeatureSection />
        <Offers />
        <ProductsContainer />
      </MainContent>

    </>
  );
}

export default HomePage;
