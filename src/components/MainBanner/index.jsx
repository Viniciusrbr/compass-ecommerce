import styled from "styled-components";
import Banner from "../../assets/images/Banner.png";
import LArrowIcon from "../../assets/icons/arrow-left.png";
import RArrowIcon from "../../assets/icons/arrow-right.png";

const fonts = {
  robotoMono: "Roboto Mono",
};

const BannerContainer = styled.section`
  background-image: url(${Banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 496px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 0px;

  h1 {
    color: var(--white);
    font-family: ${fonts.robotoMono};
    font-size: 48px;
    font-weight: 400;
    height: 70px;
    line-height: 70px;
    margin: 0;
    margin-bottom: 16px;
    text-align: center;
    width: 888px;
  }
  p {
    color: var(--seaSalt);
    font-family: ${fonts.robotoMono};
    font-size: 16px;
    font-weight: 400;
    height: 50px;
    text-align: center;
    margin-bottom: 16px;
    margin-top: 0;
    width: 888px;
  }
`;

const IconCircle = styled.div`
  border-radius: 50%;
  border: 1px solid var(--antiFlashWhite);
  color: var(--antiFlashWhite);
  padding: 4px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  ${(props) => (props.left ? "left: 200px;" : "right: 200px;")}
  top: 321px;
`;

const Button = styled.button`
cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--turquoise);
  border-radius: 4px;
  border: 1px solid var(--turquoise);
  color: var(--white);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  height: 56px;
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
