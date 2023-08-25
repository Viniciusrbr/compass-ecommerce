import styled from "styled-components";
import ProductImage from "../../../assets/images/watch.jpeg";
import Tag from "../../Tag/index";
import StarIcon from "../../../assets/icons/star.svg";
import HeartIcon from "../../../assets/icons/heart.svg";
import CartIcon from "../../../assets/icons/cart.svg";
import { useEffect, useState } from "react";

const colors = {
  aqua: "#62D0B6",
  coral: "#F55157",
  buttonGray: "#EEEEEE",
  lightGray: "#F8F8F8",
  mediumGray: "#A5A5A5",
  mediumDarkGray: "#666666",
  darkGray: "#333333",
  white: "#FFFFFF",
};

const OfferItemContainer = styled.div`
  align-items: flex-start;
  background: ${colors.white};
  border-radius: 4px;
  border: 2px solid ${colors.aqua};
  display: flex;
  flex: 1 0 0;
  height: 271px;
  width: 588px;
`;

const OfferItemDetails = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  flex: 1 0 0;
  height: 239px;
  width: 360px;
`;

const OfferItemImage = styled.section`
  background-image: url(${ProductImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 0 4px 0 0;
  height: 271px;
  margin: auto;
  padding: 0;
  width: 196px;

  div {
    position: relative;
  }
`;

const OfferItemTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const OfferItemTitle = styled.p`
  align-self: stretch;
  color: ${colors.darkGray};
  text-align: right;
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
  gap: 8px;
  align-self: stretch;
  margin: 0;
`;

const OfferItemRatingText = styled.p`
  color: ${colors.mediumGray};
  text-align: right;
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
  gap: 2px;
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
  gap: 8px;
  align-self: stretch;
  height: 25px;
  vertical-align: baseline;
  width: 360px;
`;

const OfferItemFullPrice = styled.p`
  color: ${colors.mediumGray};
  text-align: right;
  flex: 1 0 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  text-decoration: line-through;
  vertical-align: baseline;
`;

const OfferItemDiscountedPrice = styled.div`
  color: ${colors.coral};
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  vertical-align: baseline;
`;

const Countdown = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  height: 48px;
  width: 360px;
`;

const CountdownItem = styled.div`
  background: ${colors.lightGray};
  border-radius: 4px;
  display: flex;
  padding: 4px 16px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: -5px;
  flex: 1 0 0;
  height: 36px;
  width: 52px;

  p.num {
    color: ${colors.darkGray};
    text-align: right;
    font-family: Roboto Flex;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    margin: 0;
  }

  p.label {
    color: ${colors.mediumGray};
    text-align: right;
    font-family: Roboto Flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
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
  border-radius: var 4px;
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

const HeartContainer = styled.div`
  background-image: url(${HeartIcon});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  width: 18px;
  height: 18px;
  object-fit: cover;
  padding: 1.098px 0px 1.66px 0px;
  justify-content: center;
  align-items: center;
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
  const endTime = new Date("2023-08-31T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const currentTime = new Date().getTime();
    const timeLeft = endTime - currentTime;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
              {[1, 2, 3, 4, 5].map((_, index) => (
                <OfferItemStarIcon key={index} />
              ))}
            </OfferItemRatingStars>
          </OfferItemRating>
          <OfferItemPrices>
            <OfferItemFullPrice>de R$ 900,00</OfferItemFullPrice>
            <OfferItemDiscountedPrice>por R$ 780,00</OfferItemDiscountedPrice>
          </OfferItemPrices>
        </OfferItemTextInfo>

        <Countdown>
          <CountdownItem>
            <p className="num">{timeLeft.days}</p>
            <p className="label">Dias</p>
          </CountdownItem>
          <CountdownItem>
            <p className="num">{timeLeft.hours}</p>
            <p className="label">Horas</p>
          </CountdownItem>
          <CountdownItem>
            <p className="num">{timeLeft.minutes}</p>
            <p className="label">Minutos</p>
          </CountdownItem>
          <CountdownItem>
            <p className="num">{timeLeft.seconds}</p>
            <p className="label">Segundos</p>
          </CountdownItem>
        </Countdown>

        <ButtonContainer>
          <ButtonFavourite>
            <HeartContainer />
          </ButtonFavourite>
          <ButtonAddToCart>
            <p>Carrinho</p>
          </ButtonAddToCart>
        </ButtonContainer>
      </OfferItemDetails>

      <OfferItemImage>
        <div>
          <Tag></Tag>
        </div>
      </OfferItemImage>
    </OfferItemContainer>
  );
};

export default OfferItem;
