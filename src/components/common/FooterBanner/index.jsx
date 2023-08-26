import styled from "styled-components";
import BannerFooter from "../../../assets/icons/bannerContainer.png";
import Lap from "../../../assets/icons/lap 1.png";


const colors = {
  white: "#ffffff",
  lightGray: "#eeeeee",
};

const fonts = {
  robotoMono: "Roboto Mono",
};

const Laptop = styled.img`
width: 696px;
height: 320px;
margin-bottom: 60px;
`;

const BannerContainer = styled.section`
  background-image: url(${BannerFooter});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: "auto";
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  padding-top: 80px;
  flex-wrap: wrap;
`;

const ContainerTexts = styled.div`
  width: 40%;

  h1 {
    color: ${colors.white};
    font-family: ${fonts.RobotoFlex};
    font-size: 48px;
    font-weight: 400;
    text-align: right;
    margin-bottom: 16px;
  }
  p {
    color: var(--footer-background);
    font-family: ${fonts.RobotoFlex};
    font-size: 16px;
    font-weight: 400;
    text-align: right;

    margin-bottom: 16px;
    margin-top: 0;
  }
`;

const Button = styled.button`
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
  float: right;
`;

const FooterBanner = () => {
  return (
    <BannerContainer>
   
    <Laptop src={Lap} alt="Image lap"/>

        <ContainerTexts>
        <h1>Home Office</h1>
        <p>A loja de cestos oferece-lhe todos os artigos de eletrónica ou artigos de
             decoração de que necessita, para além dos melhores descontos em produtos.
            Compre agora e aproveite todos os descontos nos produtos.</p>
        <Button> {"<"} Confira</Button>
      </ContainerTexts>

    </BannerContainer>
  );
};

export default FooterBanner;
