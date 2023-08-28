import styled from "styled-components";
import BannerFooter from "../../../assets/icons/bannerContainer.png";
import Lap from "../../../assets/icons/lap 1.png";
import myArrow from "../../../assets/icons/go-back-icon.svg";

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
  box-sizing: border-box;
  display: flex;
  width: 1600px;
  padding: 90px 200px;
  align-items: center;
  gap: var(--spacing-5-xl, 48px);
`;

const BannerDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: var(--spacing-3-xl, 32px);
  flex: 1 0 0;
  height: 274px;
  width: 456px;
`;

const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-xl, 16px);
  align-self: stretch;

  h1 {
    align-self: stretch;
    color: var(--white);
    text-align: right;
    font-family: Roboto Flex;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 70px; /* 145.833% */
  }
  p {
    align-self: stretch;
    color: var(--white);
    text-align: right;
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 156.25% */
  }
`;

const Button = styled.button`
  background: var(--turquoise);
  border-radius: var(--radius-sm, 4px);
  border: 1px solid var(--turquoise);
  color: var(--white);
  display: flex;
  padding: var(--spacing-xl, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg, 8px);
  height: 56px;
  width: 200px;

  p {
    color: var(--white);
    text-align: right;
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

const ArrowIcon = styled.img`
  background-image: ${myArrow};
  background-origin: content-box;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  width: 16px;
  height: 16px;
  padding: 2px 4.667px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const FooterBanner = () => {
  return (
    <BannerContainer>
      <Laptop src={Lap} alt="Image lap" />
      <BannerDetails>
        <ContainerTexts>
          <h1>Home Office</h1>
          <p>
            A loja de cestos oferece-lhe todos os artigos de eletrónica ou
            artigos de decoração de que necessita, para além dos melhores
            descontos em produtos. Compre agora e aproveite todos os descontos
            nos produtos.
          </p>
        </ContainerTexts>
        <Button>
          <ArrowIcon src={myArrow}></ArrowIcon><p>Confira</p>
        </Button>
      </BannerDetails>
    </BannerContainer>
  );
};

export default FooterBanner;
