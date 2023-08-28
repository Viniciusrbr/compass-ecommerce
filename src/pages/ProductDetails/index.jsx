import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../../store/CartContext";
import CartIcon from "../../assets/icons/cart.svg";

function ProductDetailsPage() {
  const { productId } = useParams();
  const { dispatch } = useCart(); // Obtenha o dispatch do carrinho
  const [product, setProduct] = useState(null); // Estado que armazena as informações do produto

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
    return <p>Tá carregando, te acalma...</p>;
  }

  const DetailsContainer = styled.div`
    display: flex;
    margin: 100px;
  `;

  const DetailsTexts = styled.div`
    width: 50%;
    height: 600px;
    text-align: right;
    position: relative;
    display: flex;
    flex-direction: column;

    h1 {
      font-family: Roboto Flex;
      font-size: 24px;
      font-weight: 700;
      line-height: 35px;
      letter-spacing: 0em;
    }
  `;

  const DetailsImage = styled.img`
    height: 600px;
    width: auto;
    padding: 0px 60px 0px 60px;
  `;

  const Buttons = styled.div`
    position: absolute;
    bottom: 0px;
    text-align: left;
    width: 100%;
    justify-content: space-between;

    p {
      font-family: Roboto Flex;
      font-size: 24px;
      font-weight: 700;
      line-height: 35px;
      letter-spacing: 0em;
      text-align: left;
    }
  `;

  const colors = {
    aqua: "#62D0B6",
    aquaHover: "#81D9C5",
    coral: "#F55157",
    buttonGray: "#EEEEEE",
    lightGray: "#F8F8F8",
    mediumGray: "#A5A5A5",
    mediumDarkGray: "#666666",
    darkGray: "#333333",
    white: "#FFFFFF",
  };

  const Button = styled.button`
    background: ${colors.aqua};
    border-radius: var(--radius-sm, 4px);
    border: 1px solid #62d0b6;

    padding: var(--spacing-xl, 16px);
    justify-content: center;
    align-items: center;
    gap: var(--spacing-lg, 8px);
    margin: 8px;
    height: 56px;
    width: 47%;
    color: #ffffff;

    &:hover {
      background: ${colors.aquaHover};
    }
  `;

  const Button2 = styled.button`
    background: ${colors.white};
    border-radius: var(--radius-sm, 4px);
    border: 1px solid #62d0b6;

    padding: var(--spacing-xl, 16px);
    justify-content: center;
    align-items: center;
    gap: var(--spacing-lg, 8px);
    margin: 8px;
    height: 56px;
    width: 47%;
    color: #62d0b6;

    &:hover {
      background: ${colors.aquaHover};
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

  const OfferItemRatingStars = styled.div`
  display: flex;
  height: 16px;
  align-items: center;
  gap: var(--spacing-sm, 2px);
  margin: 0;
  width: 73px;
  padding: 10px;
  
  `;

  const Ratings = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    p{
      font-size: 14px;
    }
  `;

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
      background: ${colors.white};
      border: 1px solid #eeeeee;
    }
  `;

  const Input = styled.input`
    border: none;
    outline: none;
    height: 100%;
    width: 50px;
    text-align: center;
    border: 1px solid #eee;
    padding: 0px;
    box-sizing: border-box;
  `;

  const PriceAmount = styled.div`
  display: flex;  
  justify-content: space-between;
`;


  return (
    <DetailsContainer>
      <DetailsTexts>
        <h1>Detalhes do Produto - {product.title}</h1>

        <Ratings>
          <p>({product.rating.count}) Avaliações</p>

          <OfferItemRatingStars>
            <StarIcon myFill="#FFC62A"></StarIcon>
            <StarIcon myFill="#FFC62A"></StarIcon>
            <StarIcon myFill="#FFC62A"></StarIcon>
            <StarIcon myFill="#FFC62A"></StarIcon>
            <StarIcon myFill="#FFC62A"></StarIcon>
          </OfferItemRatingStars>
        </Ratings>

        <p>Descrição: {product.description}</p>
        <Buttons>
          <PriceAmount>
            <p>R$ {product.price.toFixed(2)}</p>

            <SectionCounter>
              <button>-</button>
              <Input type="text" placeholder="1"></Input>
              <button>+</button>
            </SectionCounter>
          </PriceAmount>

          <Button2 onClick={addToCart}>Carrinho</Button2>
          <Button>Comprar</Button>
        </Buttons>
      </DetailsTexts>
      <DetailsImage src={product.image} alt={product.title} />
    </DetailsContainer>
  );
}

export default ProductDetailsPage;
