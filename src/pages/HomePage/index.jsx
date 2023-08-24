
import Header from "../../components/common/Header";
import MainBanner from '../../components/MainBanner/index';
import SectionWithDivs from '../../components/FeatureContainer/index';
import Offers from "../../components/OfferContainer/index";

function HomePage() {
  return <>
    <Header></Header>
    <MainBanner />
    <SectionWithDivs />
    <Offers />
  </>;
}

export default HomePage;
