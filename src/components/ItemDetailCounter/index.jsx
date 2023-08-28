import styled from "styled-components";
import MinusIcon from "../../assets/icons/minus.svg";
import PlusIcon from "../../assets/icons/plus.svg";
import { useState } from "react";
import { useCart } from "../../store/CartContext";

const Counter = styled.div`
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--antiFlashWhite);
  background: var(--white);
  display: flex;
  height: 50px;
  height: 50px;
  width: 174px;
`;

const DecreaseButton = styled.button`
  background-color: var(--white);
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
    border: 1px solid var(--antiFlashWhite);
    border-top: 0;
    border-bottom: 0;
    color: var(--dimGray);
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    height: 16px;
    margin: 0;
    padding: 0;
    line-height: 18px;
    text-align: center;
    width: 100%;
  }
`;

const IncreaseButton = styled.button`
  background-color: var(--white);
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
  const [myCount, setmyCount] = useState(1);


  const handleIncrease = ({ myCount }) => {
    myCount = myCount + 1;
    setQuantity(quantity + myCount);
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: item.id, quantity: quantity + myCount },
    });
  };

  const handleItemMinus = () => {
    if (myCount > 0) {
    setmyCount(myCount-1)
    }
    else {
    setmyCount(myCount)
    }
  };

  const handleItemPlus = () => {
    setmyCount(myCount+1)
  };

  return (
    <Counter count={myCount}>
      <DecreaseButton disabled={!myCount} count={myCount} onClick={handleItemMinus}></DecreaseButton>
      <ItemQuantity count={myCount}>
        <p count={myCount}>{myCount}</p>
      </ItemQuantity>
      <IncreaseButton onClick={handleItemPlus}></IncreaseButton>
    </Counter>
  );
};

export default ItemCounter;