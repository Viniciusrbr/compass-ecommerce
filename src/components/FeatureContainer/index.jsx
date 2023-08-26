import styled from "styled-components";
import cardIcon from "../../assets/icons/card-icon.png";
import loadingIcon from "../../assets/icons/loading-icon.png";
import carIcon from "../../assets/icons/car-icon.png";

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px
`;

const DivContainer = styled.div`
  width: 300px;
  height: fit-content;
  padding: 15px;
  border-radius: 1px;
  border: 0.1px solid #ccc;
  display: flex;
  align-items: center; 
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.p`
  margin-top: 0;
  text-align: right; 
  margin-bottom: 1px;
  font-family: Roboto Mono;
`;

const Text = styled.p`
  margin-top: 5px;
  text-align: right;
  
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 15px;
`;

const SectionWithDivs = () => {
  const divData = [
    {
      imgSrc: cardIcon,
      title: 'Comprou',
      text: 'Aceitamos todos os cartões',
    },
    {
      imgSrc: loadingIcon,
      title: 'Atualizou',
      text: 'Aprovação de compra',
    },
    {
      imgSrc: carIcon,
      title: 'Entrega',
      text: 'Entregamos para todo Brasil',
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

export default SectionWithDivs;
