import styled from "styled-components";
import Banner from "../../assets/images/Banner.png";
import LArrowIcon from "../../assets/icons/arrow-left.png";
import RArrowIcon from "../../assets/icons/arrow-right.png";

const colors = {
  white: "#ffffff",
  lightGray: "#eeeeee",
};

const fonts = {
  robotoMono: "Roboto Mono",
};

const BannerContainer = styled.section`
  background-image: url(${Banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 496px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: -144px;

  h1 {
    color: ${colors.white};
    font-family: ${fonts.robotoMono};
    font-size: 48px;
    font-weight: 400;

    margin-bottom: 16px;
  }
  p {
    color: var(--footer-background);
    font-family: ${fonts.robotoMono};
    font-size: 16px;
    font-weight: 400;
    text-align: center;

    margin-bottom: 16px;
    margin-top: 0;
  }
`;

const IconCircle = styled.div`
  border-radius: 50%;
  border: 1px solid var(--footer-background);
  color: var(--footer-background);
  padding: 4px;

  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  ${(props) => (props.left ? "left: 200px;" : "right: 200px;")}
  top: 50%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  background: var(--primary-color);
  border-radius: 4px;
  border: 1px solid var(--primary-color);
  color: ${colors.white};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  padding: 16px;
  text-align: center;
  width: 200px;
`;

const TopBanner = () => {
  return (
    <BannerContainer>
      <ContainerTexts>
        <h1>Macbook PRO M2</h1>
        <p>Velocidade e performance</p>
        <Button>Confira</Button>
      </ContainerTexts>

      <IconCircle left>
        <img
          src={LArrowIcon}
          className="left-arrow-icon"
          alt="simple arrow pointing left"
        />
      </IconCircle>

      <IconCircle>
        <img
          src={RArrowIcon}
          className="right-arrow-icon"
          alt="simple arrow pointing right"
        />
      </IconCircle>
    </BannerContainer>
  );
};

export default TopBanner;
