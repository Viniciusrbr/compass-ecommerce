import styled from "styled-components";
import cardIcon from "../../assets/icons/card-icon.png";
import loadingIcon from "../../assets/icons/loading-icon.png";
import carIcon from "../../assets/icons/car-icon.png";

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DivContainer = styled.div`
  flex: 0 0 calc(30% - 20px);
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Title = styled.h2`
  margin-top: 10px;
`;

const Text = styled.p`
  margin-top: 5px;
`;

// const cardIcon = style
// color: #EEEEEE;
//   height: 12px;
//   width: 6.667px;

const SectionWithDivs = () => {
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
          <Image src={item.imgSrc} alt={`Imagem ${index + 1}`} />
          <Title>{item.title}</Title>
          <Text>{item.text}</Text>
        </DivContainer>
      ))}
    </SectionContainer>
  );
};

export default SectionWithDivs;
