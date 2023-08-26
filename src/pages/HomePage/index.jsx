import MainBanner from '../../components/MainBanner/index';
import SectionWithDivs from '../../components/FeatureContainer/index';
import FooterBanner from '../../components/common/FooterBanner/index';
import Footer from "../../components/common/Footer";


function HomePage() {
  return <>
    <MainBanner />
    <SectionWithDivs />
    <FooterBanner></FooterBanner>
    <Footer></Footer>
    
  </>;
}

export default HomePage;
