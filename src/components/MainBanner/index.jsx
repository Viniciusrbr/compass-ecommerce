import styled from "styled-components";
import Banner from "../../assets/images/Banner.png"
import LArrowIcon from "../../assets/icons/arrow-previous.png"

const BannerContainer = styled.section`
  background-image: url(${Banner});
`

const BannerTitle = styled.h1`
  color: #FFF;
  font-family: Roboto Mono;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 4.375rem;
  text-align: center;
`;

const BannerCaption = styled.p`
  color: #F8F8F8;
  font-family: Roboto Mono;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5625rem;
  text-align: center;
`

const LeftArrowIcon = styled.img`

`

const TopBanner = () => {
  return (
    <BannerContainer src={Banner} className="top-banner-image" alt="Macbook partially open with an abstract screensaver">
      <h1>Macbook PRO M2</h1>
      <p>Velocidade e performance</p>
      <LeftArrowIcon src={LArrowIcon} alt="Arrow pointing left" />
    </BannerContainer>
  );
};

export default TopBanner;