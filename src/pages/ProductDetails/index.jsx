import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../../store/CartContext";
import CounterButtons from "./counterButtons";

const DetailsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
 // width: 1600px;
  align-items: flex-start;
  gap: 24px;
  margin: 0;
  padding: 81px 200px 105px 200px;
`;

const Details = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 651px;
  justify-content: space-between;
  position: relative;
  width: 586px;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--spacing-xl, 16px);
  align-self: stretch;
  height: auto;
  width: 100;

  h1 {
    color: var(--jet);
    text-align: right;
    font-family: Roboto Flex;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    height: auto;
    line-height: 147%; /* 35.28px */
    margin: 0;
    padding: 0;
    width: 100%;
  }

  p {
    color: var(--dimGray);
    text-align: right;
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    height: auto;
    line-height: 25px; /* 156.25% */
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const RatingsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-xl, 16px);
  height: auto;
  align-self: stretch;
  width: 100%;

  p {
    color: var(--dimGray);
    text-align: right;
    font-family: Roboto Flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    margin: 0;
    padding: 0;
  }
`;

const OfferItemRatingStars = styled.div`
  display: flex;
  height: 13px;
  align-items: center;
  gap: var(--spacing-sm, 2px);
  justify-content: flex-end;
  margin: 0;
  width: 73px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-2-xl, 24px);
  height: auto;
  width: auto;
`;

const PriceAmount = styled.div`
  display: flex;
  width: 586px;
  align-items: center;
  gap: 8px;
  height: auto;
  width: 586px;

  p {
    color: var(--jet);
    font-family: Roboto Flex;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 147%; /* 35.28px */
    margin: 0;
    padding: 0;
    text-align: left;
    width: 100%;
  }
`;

const StarIcon = ({ myFill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="14"
    viewBox="0 0 13 14"
    fill="none"
  >
    <path
      d="M12.9814 5.50829C12.9366 5.3704 12.8174 5.2699 12.674 5.24908L8.6439 4.66345L6.84156 1.01161C6.77742 0.881607 6.64501 0.799316 6.50005 0.799316C6.35507 0.799316 6.22269 0.881607 6.15852 1.01161L4.3561 4.66345L0.326118 5.24908C0.182687 5.2699 0.0634781 5.3704 0.0186892 5.50827C-0.0261251 5.64616 0.0112498 5.79752 0.115072 5.8987L3.03112 8.74127L2.34284 12.7551C2.31831 12.898 2.37706 13.0423 2.49434 13.1276C2.56069 13.1758 2.63927 13.2003 2.71824 13.2003C2.77887 13.2003 2.8397 13.1859 2.89541 13.1566L6.50003 11.2615L10.1045 13.1565C10.2328 13.224 10.3883 13.2128 10.5056 13.1276C10.6229 13.0423 10.6816 12.8979 10.6571 12.755L9.96863 8.74127L12.885 5.89867C12.9888 5.79752 13.0262 5.64616 12.9814 5.50829Z"
      fill={myFill}
    />
  </svg>
);

const SectionCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
  border-radius: var(--radius-sm, 4px);

  top: 50%;

  button {
    height: 100%;
    width: 50px;
    background: var(--white);
    border: 1px solid var(--antiFlashWhite);
  }
`;

const ButtonOptions = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xl, 16px);
  align-self: stretch;
  height: auto;
  width: 100%;
`;

const ButtonAddToCart = styled.button`
  background: var(--white);
  border-radius: var(--radius-sm, 4px);
  border: 1px solid var(--turquoise);
  display: flex;
  padding: var(--spacing-xl, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg, 8px);
  height: auto;
  width: 100%;

  &:hover {
    background: var(--turquoise);

    p {
      color: var(--white);
    }

    path {
      fill: var(--white);
    }
  }

  p {
    color: var(--turquoise);
    text-align: center;
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    height: 24px;
    line-height: 24px;
    margin: 0;
    padding: 0;
    width: 62px;
  }

  div {
    display: flex;
    width: 16px;
    height: 16px;
    padding: 1.222px 1.229px 1.333px 1.193px;
    justify-content: center;
    align-items: center;
  }
`;

const CartIcon = ({ cartColor }) => (
  <svg
    width="13.578"
    height="13.445"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Icon">
      <path
        id="Vector"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.54229 3.5637C2.53235 3.45368 2.54543 3.3428 2.58071 3.23812C2.61599 3.13344 2.67269 3.03726 2.74719 2.9557C2.82169 2.87414 2.91237 2.809 3.01344 2.76442C3.11451 2.71984 3.22376 2.6968 3.33422 2.69678H12.976C13.0951 2.69683 13.2127 2.72362 13.32 2.77518C13.4274 2.82673 13.5218 2.90173 13.5962 2.99465C13.6707 3.08757 13.7234 3.19602 13.7504 3.31202C13.7773 3.42801 13.7779 3.54858 13.7521 3.66482L12.9374 7.33702C12.7972 7.96809 12.446 8.53247 11.9418 8.93696C11.4375 9.34144 10.8104 9.56182 10.1639 9.5617H5.67934C4.97022 9.56174 4.28673 9.29655 3.76321 8.81823C3.2397 8.33992 2.91402 7.68309 2.8502 6.97685L2.54229 3.5637ZM3.7069 3.83298L3.98186 6.87459C4.02017 7.29853 4.21573 7.69279 4.53008 7.9798C4.84443 8.26682 5.25481 8.42581 5.68048 8.4255H10.1651C10.5528 8.42541 10.929 8.29307 11.2314 8.05035C11.5338 7.80763 11.7444 7.46903 11.8285 7.09047L12.5522 3.83298H3.7069Z"
        fill={cartColor}
      />
      <path
        id="Vector_2"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.192719 0.790024C0.192719 0.639355 0.252572 0.494856 0.359111 0.388317C0.465651 0.281777 0.610149 0.221924 0.760819 0.221924H2.75372C2.89268 0.222065 3.02677 0.273134 3.13062 0.365468C3.23447 0.457802 3.30087 0.584997 3.31727 0.722988L3.77402 4.58721C3.79165 4.73697 3.74906 4.88761 3.65563 5.00597C3.56219 5.12434 3.42557 5.20074 3.2758 5.21837C3.12603 5.236 2.9754 5.19341 2.85703 5.09997C2.73867 5.00654 2.66227 4.86991 2.64464 4.72014L2.24811 1.35699H0.760819C0.610149 1.35699 0.465651 1.29714 0.359111 1.1906C0.252572 1.08406 0.192719 0.940694 0.192719 0.790024ZM5.30562 12.5304C5.45629 12.5304 5.60079 12.4705 5.70733 12.364C5.81387 12.2575 5.87372 12.113 5.87372 11.9623C5.87372 11.8116 5.81387 11.6671 5.70733 11.5606C5.60079 11.454 5.45629 11.3942 5.30562 11.3942C5.15495 11.3942 5.01046 11.454 4.90392 11.5606C4.79738 11.6671 4.73752 11.8116 4.73752 11.9623C4.73752 12.113 4.79738 12.2575 4.90392 12.364C5.01046 12.4705 5.15495 12.5304 5.30562 12.5304ZM5.30562 13.6666C5.52944 13.6666 5.75106 13.6225 5.95783 13.5369C6.16461 13.4512 6.35249 13.3257 6.51075 13.1674C6.66901 13.0092 6.79454 12.8213 6.88019 12.6145C6.96584 12.4077 7.00992 12.1861 7.00992 11.9623C7.00992 11.7385 6.96584 11.5169 6.88019 11.3101C6.79454 11.1033 6.66901 10.9154 6.51075 10.7572C6.35249 10.5989 6.16461 10.4734 5.95783 10.3877C5.75106 10.3021 5.52944 10.258 5.30562 10.258C4.85361 10.258 4.42012 10.4375 4.1005 10.7572C3.78088 11.0768 3.60132 11.5103 3.60132 11.9623C3.60132 12.4143 3.78088 12.8478 4.1005 13.1674C4.42012 13.487 4.85361 13.6666 5.30562 13.6666ZM10.489 12.5304C10.6396 12.5304 10.7841 12.4705 10.8907 12.364C10.9972 12.2575 11.0571 12.113 11.0571 11.9623C11.0571 11.8116 10.9972 11.6671 10.8907 11.5606C10.7841 11.454 10.6396 11.3942 10.489 11.3942C10.3383 11.3942 10.1938 11.454 10.0873 11.5606C9.98073 11.6671 9.92087 11.8116 9.92087 11.9623C9.92087 12.113 9.98073 12.2575 10.0873 12.364C10.1938 12.4705 10.3383 12.5304 10.489 12.5304ZM10.489 13.6666C10.7128 13.6666 10.9344 13.6225 11.1412 13.5369C11.348 13.4512 11.5358 13.3257 11.6941 13.1674C11.8524 13.0092 11.9779 12.8213 12.0635 12.6145C12.1492 12.4077 12.1933 12.1861 12.1933 11.9623C12.1933 11.7385 12.1492 11.5169 12.0635 11.3101C11.9779 11.1033 11.8524 10.9154 11.6941 10.7572C11.5358 10.5989 11.348 10.4734 11.1412 10.3877C10.9344 10.3021 10.7128 10.258 10.489 10.258C10.037 10.258 9.60347 10.4375 9.28385 10.7572C8.96423 11.0768 8.78467 11.5103 8.78467 11.9623C8.78467 12.4143 8.96423 12.8478 9.28385 13.1674C9.60347 13.487 10.037 13.6666 10.489 13.6666Z"
        fill={cartColor}
      />
    </g>
  </svg>
);

const ButtonBuyNow = styled.button`
  background: var(--turquoise);
  border-radius: var(--radius-sm, 4px);
  border: 1px solid var(--turquoise);
  display: flex;
  padding: var(--spacing-xl, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg, 8px);
  height: auto;
  width: 100%;

  p {
    color: var(--white);
    text-align: center;
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    height: 24px;
    line-height: 24px;
    margin: 0;
    padding: 0;
    width: 62px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  width: 50px;
  text-align: center;
  border: 1px solid var(--antiFlashWhite);
  padding: 0px;
  box-sizing: border-box;
`;

const DetailsImage = styled.img`
  flex: 1 0 0;
  height: 651px;
  width: 590px;
`;

function ProductDetailsPage() {
  const { productId } = useParams();
  const { dispatch } = useCart(); 
  const [product, setProduct] = useState(null); 

  // Busque as informações do produto na API com base no ID
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product }); // Add o produto ao carrinho
  };

  if (!product) {
    return <p>Carregando...</p>;
  }

  return (
    <DetailsContainer>
      <Details>
        <Texts>
          <h1>{product.title}</h1>

          <RatingsContainer>
            <p>({product.rating.count}) Avaliações</p>

            <OfferItemRatingStars>
              <StarIcon myFill="var(--mikadoYellow)"></StarIcon>
              <StarIcon myFill="var(--mikadoYellow)"></StarIcon>
              <StarIcon myFill="var(--mikadoYellow)"></StarIcon>
              <StarIcon myFill="var(--mikadoYellow)"></StarIcon>
              <StarIcon myFill="var(--mikadoYellow)"></StarIcon>
            </OfferItemRatingStars>
          </RatingsContainer>

          <p>{product.description}</p>
        </Texts>

        <ButtonsContainer>
          <PriceAmount>
            <p>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              })}
            </p>
            <CounterButtons item={product} />
          </PriceAmount>
          <ButtonOptions>
            <ButtonAddToCart onClick={() => addToCart(product)}>
              <p>Carrinho</p>
              <div>
                <CartIcon cartColor="var(--turquoise)" />
              </div>
            </ButtonAddToCart>
            <ButtonBuyNow>
              <p>Comprar</p>
            </ButtonBuyNow>
          </ButtonOptions>
        </ButtonsContainer>

      </Details>
      <DetailsImage src={product.image} alt={product.title} />
    </DetailsContainer>
  );
}

export default ProductDetailsPage;
