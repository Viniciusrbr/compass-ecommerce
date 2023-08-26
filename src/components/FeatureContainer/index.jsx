import styled from "styled-components";
import cardIcon from "../../assets/icons/card-icon.png";
import loadingIcon from "../../assets/icons/loading-icon.png";
import carIcon from "../../assets/icons/car-icon.png";

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivContainer = styled.div`
  padding: 32px;

  border-radius: 2px;
  border: 1px solid #eee;
  display: flex;
  align-items: center; 
  gap: 16px;
  width: 335px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  width: 100%;
  p{
    margin: 0;
  }
`;

const Title = styled.p`
  color: #333;
  text-align: right;
  margin-top: 0;
  margin-bottom: 1px;
  font-family: Roboto Mono;
  font-size: 20px;
  font-weight: 400;
`;

const Text = styled.p`
  color: #666;
  text-align: right;
  font-family: Roboto Flex;
  font-size: 16px;
  font-weight: 400;
`;

const Image = styled.img`
  margin-left: 16px;
  width: 40px;
  height: 34.375px;
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
      imgSrc: carIcon,
      title: "Entrega",
      text: "Entregamos para todo Brasil",
    },
  ];

  return (
    <SectionContainer>
      {divData.map((item, index) => (
        <DivContainer key={index}>
          <Content>
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
          </Content>

          <Image src={item.imgSrc} alt={`Imagem ${index + 1}`} />
        </DivContainer>
      ))}
    </SectionContainer>
  );
};

export default FeatureSection;
