import React, {useState} from 'react';
import styled from "styled-components";
import ProductImage from "../../../assets/images/watch.jpeg";
import Tag from "../../Tag/index";
import Countdown from "../../Countdown/index";
import StarIcon from "../../../assets/icons/star.svg";
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

const Heart = (
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
        fill={colors.mediumGray}
      />
    </g>
  </svg>
);

const OfferItemContainer = styled.div`
  align-items: flex-start;
  background: ${colors.white};
  border-radius: var(--radius-sm, 4px);
  border: 2px solid ${colors.aqua};
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
  background-image: url(${ProductImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 0 4px 0 0;
  height: 271px;
  margin: auto;
  padding: 0;
  width: 196px;
  
  div:after {
    position: absolute;
    right: 200px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4.5px 0 4.5px 12px;
    border-color: transparent transparent transparent ${colors.coral};
  }
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
  line-height: 25px;
  margin: 0;
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

const OfferItemStarIcon = styled.div`
  align-items: center;
  align-self: stretch;
  background-image: url(${StarIcon});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #d6d6d6;
  display: flex;
  height: 13px;
  padding: 0.299px 0px 0.3px 0px;
  justify-content: center;
  margin: 0;
  width: 13px;
`;

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

const ButtonFavourite = styled.button`
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
    line-height: 24px; /* 150% */
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
    const [heartIconColor, setHeartIconColor] = useState("${colors.mediumGray}");
    const ClickedFavorite = () => {
        setHeartIconColor("${colors.white}");
    }
  return (
    <OfferItemContainer>
      <OfferItemDetails>
        <OfferItemTextInfo>
          <OfferItemTitle>Novo relógio inteligente da série 8</OfferItemTitle>
          <OfferItemDescription>
            Black Sport Band - Regular.
          </OfferItemDescription>
          <OfferItemRating>
            <OfferItemRatingText>(4.5)</OfferItemRatingText>
            <OfferItemRatingStars>
              <OfferItemStarIcon />
              <OfferItemStarIcon />
              <OfferItemStarIcon />
              <OfferItemStarIcon />
              <OfferItemStarIcon />
            </OfferItemRatingStars>
          </OfferItemRating>
          <OfferItemPrices>
            <OfferItemFullPrice>de R$ 900,00</OfferItemFullPrice>
            <OfferItemDiscountedPrice>por R$ 780,00</OfferItemDiscountedPrice>
          </OfferItemPrices>
        </OfferItemTextInfo>
        <Countdown />
        <ButtonContainer>
          <ButtonFavourite onClick={ClickedFavorite} >
              {Heart}
          </ButtonFavourite>
          <ButtonAddToCart>
            <p>Carrinho</p>
            <div></div>
          </ButtonAddToCart>
        </ButtonContainer>
      </OfferItemDetails>
      <OfferItemImage>
          <Tag style={{ top: 16 }}></Tag>
      </OfferItemImage>
    </OfferItemContainer>
  );
};

export default OfferItem;
