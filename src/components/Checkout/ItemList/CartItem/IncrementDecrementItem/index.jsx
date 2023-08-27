import styled from "styled-components";
import MinusIcon from "../../../../../assets/icons/minus.svg";
import PlusIcon from "../../../../../assets/icons/plus.svg";
import { useState } from "react";
import { useCart } from "../../../../../store/CartContext";

const colors = {
  lightGray: "#EEEEEE",
  lightMediumGray: "#666666",
  white: "#FFFFFF",
};

const Counter = styled.div`
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${colors.lightGray};
  background: ${colors.white};
  display: flex;
  height: 50px;
  height: 50px;
  width: 174px;
`;

const DecreaseButton = styled.button`
  background-color: ${colors.white};
  background-image: url(${MinusIcon});
  background-origin: content-box;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  border: 0;
  border-radius: 4px 0 0 4px;
  height: 50px;
  margin: 0;
  width: 48px;
  cursor: pointer;
`;

const ItemQuantity = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  overflow: hidden;
  padding: 0;
  text-align: center;
  width: 78px;

  p {
    border: 1px solid ${colors.lightGray};
    border-top: 0;
    border-bottom: 0;
    color: ${colors.lightMediumGray};
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    height: 16px;
    margin: 0;
    padding: 0;
    line-height: 18px;
    width: 100%;
  }
`;

const IncreaseButton = styled.button`
  background-color: ${colors.white};
  background-image: url(${PlusIcon});
  background-origin: content-box;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  border: 0;
  border-radius: 0 4px 4px 0;
  height: 50px;
  margin: 0;
  width: 48px !important;
  cursor: pointer;
`;

const ItemCounter = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const { dispatch } = useCart();

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: item.id, quantity: quantity + 1 },
    });
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: quantity - 1 },
      });
    }
  };

  return (
    <Counter>
      <DecreaseButton onClick={handleDecrease}></DecreaseButton>
      <ItemQuantity>
        <p>{item.quantity}</p>
      </ItemQuantity>
      <IncreaseButton onClick={handleIncrease}></IncreaseButton>
    </Counter>
  );
};

export default ItemCounter;
