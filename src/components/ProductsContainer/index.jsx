import React from "react";
import styled from "styled-components";
import producImage from "../../assets/images/ProductImage.png";

const Container = styled.div`
  margin: 80px auto;
  max-width: 1200px;
`;

const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h1 {
    margin: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
  }

  p {
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: var(--title);
  }

  margin-bottom: 32px;
`;

const ProductsSection = styled.div`
  display: flex;
  align-items: flex-start; 
  justify-content: flex-start; 
  flex-wrap: wrap;
  gap: 24px;
  margin: 0 -12px; 
`;

const ProductCard = styled.div`
  width: calc(25% - 24px); /* Card card ocupa 25% do container */
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;

  border: 1px solid #a5a5a5;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 16px;
  margin-right: 16px;
  h2 {
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
  }

  p {
    margin: 0;
    color: #f55157;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    margin-top: 4px;
  }
`;

function ProductsContainer() {
  const name = "Relogio Top";
  const price = "250";

  return (
    <Container>
      <ContainerTitles>
        <h1>Produtos em destaque</h1>
        <p>Produtos em destaque mais recentes adicionados</p>
      </ContainerTitles>

      <ProductsSection>
        {Array.from({ length: 8 }, (_, index) => (
          <ProductCard key={index}>
            <ProductImage src={producImage} alt={name} />
            <ProductInformation>
              <h2>{name}</h2>
              <p>por R$ {price}</p>
            </ProductInformation>
          </ProductCard>
        ))}
      </ProductsSection>
    </Container>
  );
}

export default ProductsContainer;
