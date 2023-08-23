import styled from "styled-components";
import Banner from "../../assets/images/Banner.png"
import LArrowIcon from "../../assets/icons/arrow-left.png"
import RArrowIcon from "../../assets/icons/arrow-right.png"

const BannerContainer = styled.section`
  background-image: url(${Banner});
  flex-shrink: 0;
  height: 496px;
  width: 1600px;

  h1 {
    color: #FFFFFF;
    font-family: Roboto Mono;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    height: 70px;
    line-height: 70px;
    margin: 0 356px 16px 356px;
    padding: 144px 0 0 0;
    text-align: center;
    width: 888px;
  }
   p {
    color: #F8F8F8;
    font-family: Roboto Mono;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    height: 50px;
    line-height: 25px;
    margin: 0 356px;
    text-align: center;
    vertical-align: top;
    width: 888px;
   }
`

const LeftArrowIcon = styled.img`
  color: #EEEEEE;
  height: 12px;
  width: 6.667px;
`

const RightArrowIcon = styled.img`
  color: #EEEEEE;
  height: 12px;
  width: 6.667px;
`

const IconContainer = styled.span`
  align-items: center;
  display: flex;
  height: 12px;
  justify-content: center;
  margin: 14px;
  padding: 2px 4.67px;
  width: 6.67px;
`

const IconCircleLeft = styled.div`
  border-radius: 30px;
  border: 1px solid #EEEEEE;
  color: #EEEEEE;
  display: inline-block;
  width: 44px;
  height: 44px;
  padding: var(--spacing-lg, 8px);
  position: absolute;
  top: 321px !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  margin: 0 0 0 200px;
`

const IconCircleRight = styled.div`
  align-items: center;
  border-radius: 30px;
  border: 1px solid #EEEEEE;
  color: #EEEEEE;
  display: inline-block;
  flex-direction: column;
  gap: 10px;
  height: 44px;
  justify-content: center;
  left: 1340px;
  padding: var(--spacing-lg, 8px);
  position: absolute;
  top: 321px !important;
  width: 44px;
`

const Button = styled.button`
  align-items: center;
  background: #62D0B6;
  border-radius: var(--radius-sm, 4px);
  border: 1px solid #62D0B6;
  color: #FFFFFF;
  color: #FFF;
  display: flex;
  font-family: Roboto Mono;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  gap: var(--spacing-lg, 8px);
  line-height: 24px;
  margin: 16px 700px 0 700px;
  justify-content: center;
  padding: var(--spacing-xl, 16px);
  text-align: right;
  width: 200px;
`

const TopBanner = () => {
  return (
    <BannerContainer src={Banner} className="top-banner-image" alt="Macbook partially open with an abstract screensaver">
      <h1>Macbook PRO M2</h1>
      <p>Velocidade e performance</p>
      <IconCircleLeft>
        <IconContainer>
          <LeftArrowIcon src={LArrowIcon} className="left-arrow-icon" alt="simple arrow pointing left"></LeftArrowIcon>
        </IconContainer>
      </IconCircleLeft>
      <IconCircleRight>
        <IconContainer>
          <RightArrowIcon src={RArrowIcon} className="right-arrow-icon" alt="simple arrow pointing right"></RightArrowIcon>
        </IconContainer>
      </IconCircleRight>
      <Button>Confira</Button>
    </BannerContainer>
  );
};

export default TopBanner;