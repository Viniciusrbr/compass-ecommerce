import styled from "styled-components";
import cardIcon from "../../assets/icons/card-icon.png";
import loadingIcon from "../../assets/icons/loading-icon.png";
import truckIcon from "../../assets/icons/car-icon.png";

const SectionContainer = styled.div`
  border-radius: 2px;
  border: 1px solid var(--antiFlashWhite);
  background: var(--white);
  display: flex;
  height: 123px;
  justify-content: center;
  align-items: center;
  margin: 58px 200px 0 200px;
  width: 1200px;
`;

const DivContainer = styled.div`
  border-radius: 4px;
  background: var(--white);
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-xl, 16px);
  margin: 0;
  padding: 32px 0 32px 0;
  flex: 1 0 0;
  height: 123px;
  width: 398.67px;
`;

const Separator = styled.div`
  align-items: center;
  border: 1px solid var(--antiFlashWhite);
  border-top: 0;
  border-bottom: 0;
  display: flex;
  justify-content: center;
  height: 59px;
  width: 100%;
`;

const Feature = styled.div`
  align-items: center;
  gap: var(--spacing-xl, 16px);
  margin: 0;
  padding: var(--spacing-3-xl, 32px);
  display: flex;
  flex: 1 0 0;
  height: 59px;
  justify-content: flex-end;
  margin: 0;
  width: 279px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 59px;
  margin: 0;
  width: 279px;
  p {
    margin: 0;
  }
`;

const Title = styled.p`
  color: var(--jet);
  text-align: right;
  font-family: Roboto Mono;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  text-align: right;
  width: 100%;
`;

const Text = styled.p`
  color: var(--dimGray);
  text-align: right;
  font-family: Roboto Flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  width: 100%;
`;

const IconContainer = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-origin: content-box;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 2.813px 0px;
  justify-content: center;
  align-items: center;
`;

const FeatureSection = () => {
  const divData = [
    {
      imgSrc: cardIcon,
      title: "Comprou",
      text: "Aceitamos todos os cartões",
    },
    {
      imgSrc: loadingIcon,
      title: "Atualizou",
      text: "Aprovação de compra",
    },
    {
      imgSrc: truckIcon,
      title: "Entrega",
      text: "Entregamos para todo Brasil",
    },
  ];

  return (
    <SectionContainer>
      {divData.map((item, index) => (
        <DivContainer key={index}>
          <Separator>
            <Feature>
              <Content>
                <Title>{item.title}</Title>
                <Text>{item.text}</Text>
              </Content>
              <IconContainer image={item.imgSrc} alt={`Imagem ${index + 1}`} />
            </Feature>
          </Separator>
        </DivContainer>
      ))}
    </SectionContainer>
  );
};

export default FeatureSection;
