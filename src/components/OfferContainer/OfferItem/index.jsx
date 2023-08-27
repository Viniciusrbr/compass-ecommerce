import React, { useContext, useState, useEffect } from "react";
import api from "../../../services/api";
import styled from "styled-components";
import Theme from "../../../Theme";
import TagDiscount from "../../TagDiscount/index";
import Countdown from "../../Countdown/index";
import CartIcon from "../../../assets/icons/cart.svg";

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

const HeartIcon = ({ myColor }) => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="icon">
      <path
        id="Vector"
        d="M13.1484 0.0975342C11.6511 0.0975342 10.3385 0.765186 9.35258 2.02835C9.2211 2.19682 9.10389 2.36536 9 2.52859C8.89611 2.36532 8.7789 2.19682 8.64742 2.02835C7.66146 0.765186 6.34887 0.0975342 4.85156 0.0975342C2.02303 0.0975342 0 2.46591 0 5.30783C0 8.55743 2.66333 11.62 8.63568 15.2381C8.74765 15.3059 8.87382 15.3398 9 15.3398C9.12618 15.3398 9.25235 15.3059 9.36432 15.2381C15.3367 11.6201 18 8.55746 18 5.30787C18 2.46742 15.9786 0.0975342 13.1484 0.0975342ZM14.736 9.35414C13.4926 10.7415 11.6137 12.2023 9 13.8128C6.38631 12.2023 4.50738 10.7415 3.26401 9.35417C2.01393 7.95931 1.40625 6.63575 1.40625 5.30787C1.40625 3.26163 2.78909 1.50378 4.85156 1.50378C5.90189 1.50378 6.79746 1.96046 7.51342 2.86117C8.0859 3.58148 8.32711 4.32528 8.3288 4.33059C8.42038 4.62432 8.69235 4.8244 9.00004 4.8244C9.30772 4.8244 9.57969 4.62436 9.67127 4.33059C9.67349 4.32349 9.90745 3.60289 10.4611 2.89358C11.181 1.97136 12.0851 1.50375 13.1484 1.50375C15.2131 1.50375 16.5938 3.26328 16.5938 5.30783C16.5938 6.63572 15.9861 7.95928 14.736 9.35414Z"
        fill={myColor}
      />
    </g>
  </svg>
);

const OfferItemContainer = styled.div`
  align-items: flex-start;
  background-color: white;
  border-radius: var(--radius-sm, 4px);
  border: 2px solid #62D0B6;
  display: flex;
  flex: 1 0 0;
  height: 271px;
  width: 588px;
`;

const OfferItemDetails = styled.div`
  display: flex;
  padding: var(--spacing-xl, 16px);
  flex-direction: column;
  align-items: flex-end;
  gap: var(--spacing-xl, 16px);
  flex: 1 0 0;
  height: 239px;
  width: 360px;
`;

const OfferItemImage = styled.section`
  align-self: stretch;
  background-image: ${(props) => `url(${props.image})`};
  background-origin: content-box;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 0 4px 0 0;
  height: 271px;
  margin: auto;
  padding: 16px;
  position: relative;
  width: 196px;
`;

const OfferItemTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-md, 4px);
  align-self: stretch;
`;

const OfferItemTitle = styled.p`
  align-self: stretch;
  color: ${colors.darkGray};
  text-align: right;
  font-family: Roboto Flex;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  height: 25px;
  line-height: 25px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 360px;
`;

const OfferItemDescription = styled.p`
  align-self: stretch;
  color: ${colors.mediumDarkGray};
  text-align: right;
  font-family: Roboto Flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin: 0;
  height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 360px;
`;

const OfferItemRating = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-lg, 8px);
  align-self: stretch;
  margin: 0;
`;

const OfferItemRatingText = styled.p`
  color: ${colors.mediumGray};
  text-align: right;
  font-family: Roboto Flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const OfferItemRatingStars = styled.div`
  display: flex;
  height: 16px;
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-sm, 2px);
  align-self: stretch;
  margin: 0;
  width: 73px;
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

const StarIconHalfFilled = () => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="14"
    viewBox="0 0 13 14"
    fill="none"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" style="stop-color:rgb(255,198,42);stop-opacity:1" />
        <stop offset="50%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
      </linearGradient>
    </defs>
    <path
      d="M12.9814 5.50829C12.9366 5.3704 12.8174 5.2699 12.674 5.24908L8.6439 4.66345L6.84156 1.01161C6.77742 0.881607 6.64501 0.799316 6.50005 0.799316C6.35507 0.799316 6.22269 0.881607 6.15852 1.01161L4.3561 4.66345L0.326118 5.24908C0.182687 5.2699 0.0634781 5.3704 0.0186892 5.50827C-0.0261251 5.64616 0.0112498 5.79752 0.115072 5.8987L3.03112 8.74127L2.34284 12.7551C2.31831 12.898 2.37706 13.0423 2.49434 13.1276C2.56069 13.1758 2.63927 13.2003 2.71824 13.2003C2.77887 13.2003 2.8397 13.1859 2.89541 13.1566L6.50003 11.2615L10.1045 13.1565C10.2328 13.224 10.3883 13.2128 10.5056 13.1276C10.6229 13.0423 10.6816 12.8979 10.6571 12.755L9.96863 8.74127L12.885 5.89867C12.9888 5.79752 13.0262 5.64616 12.9814 5.50829Z"
      fill="url(#grad1)"
    />
  </svg>;
};

const OfferItemPrices = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-lg, 8px);
  align-self: stretch;
  height: 25px;
  vertical-align: baseline;
  width: 360px;
`;

const OfferItemFullPrice = styled.p`
  color: ${colors.mediumGray};
  text-align: right;
  flex: 1 0 0;
  font-family: Roboto Flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  height: 24px;
  line-height: 24px;
  margin: 0;
  text-decoration: line-through;
  vertical-align: baseline;
  width: 240px;
`;

const OfferItemDiscountedPrice = styled.div`
  color: ${colors.coral};
  text-align: right;
  font-family: Roboto Flex;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  height: 25px;
  line-height: 25px;
  margin: 0;
  vertical-align: baseline;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg, 8px);
  align-self: stretch;
  height: 56px;
  width: 360px;
`;

export const ButtonFavorite = styled.button`
  background: ${colors.white};
  border-radius: var(--radius-sm, 4px);
  border: 1px solid ${colors.buttonGray};
  display: flex;
  padding: var(--spacing-xl, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg, 8px);
  align-self: stretch;
  height: 56px;
  width: 50px;
`;

const ButtonAddToCart = styled.button`
  background: ${colors.aqua};
  border-radius: var(--radius-sm, 4px);
  border: 1px solid #62d0b6;
  display: flex;
  padding: var(--spacing-xl, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg, 8px);
  flex: 1 0 0;
  height: 56px;
  width: 302px;

  &:hover {
    background: ${colors.aquaHover};
  }

  p {
    color: ${colors.white};
    text-align: right;
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

  div {
    background-image: url(${CartIcon});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 13.578px 13.445px;
    display: flex;
    width: 16px;
    height: 16px;
    padding: 1.222px 1.229px 1.333px 1.193px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    height: 16px;
    width: 16px;
  }
`;

const OfferItem = () => {
  const [isFavorited, setFavorited] = useState(false);
  const handleFavorite = () => {
    setFavorited(!isFavorited);
  };
  if (isFavorited) {
    HeartIcon.myColor = "#42f785";
  }

  const [product, setProduct] = useState();
  useEffect(() => {
    api
      .get("/products/9")
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  });

  let localizedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  const [discount, setDiscount] = useState(0);

  function getRandomDiscount(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <OfferItemContainer>
      <OfferItemDetails>
        <OfferItemTextInfo>
          <OfferItemTitle>{product?.title}</OfferItemTitle>
          <OfferItemDescription line={1}>
            {product?.description}
          </OfferItemDescription>
          <OfferItemRating>
            <OfferItemRatingText>(5.0)</OfferItemRatingText>
            <OfferItemRatingStars>
              <StarIcon myFill="#FFC62A"></StarIcon>
              <StarIcon myFill="#FFC62A"></StarIcon>
              <StarIcon myFill="#FFC62A"></StarIcon>
              <StarIcon myFill="#FFC62A"></StarIcon>
              <StarIcon myFill="#FFC62A"></StarIcon>
            </OfferItemRatingStars>
          </OfferItemRating>
          <OfferItemPrices>
            <OfferItemFullPrice>de R$ {product?.price.toFixed(2)}</OfferItemFullPrice>
            <OfferItemDiscountedPrice>por R$ {product?.price.toFixed(2)}</OfferItemDiscountedPrice>
          </OfferItemPrices>
        </OfferItemTextInfo>
        <Countdown />
        <ButtonContainer>
          <ButtonFavorite
            onClick={handleFavorite}
            style={{ background: isFavorited ? "#62D0B6" : "#FFFFFF" }}
          >
            <HeartIcon myColor="#A5A5A5"></HeartIcon>
          </ButtonFavorite>
          <ButtonAddToCart>
            <p>Carrinho</p>
            <div></div>
          </ButtonAddToCart>
        </ButtonContainer>
      </OfferItemDetails>
      <OfferItemImage image={product?.image}>
        <TagDiscount />
      </OfferItemImage>
    </OfferItemContainer>
  );
};

export default OfferItem;
