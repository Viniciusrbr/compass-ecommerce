import React from "react";
import Header from "../../components/common/Header";
import MainBanner from '../../components/MainBanner/index';
import Tag from '../../components/Tag/index';

function HomePage() {
  return <>
    <Header></Header>
    <MainBanner />
    <Tag />
  </>;
}

export default HomePage;
