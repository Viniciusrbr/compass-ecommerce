import styled from "styled-components";
import MinusIcon from "../../assets/icons/minus.svg";
import PlusIcon from "../../assets/icons/plus.svg";
import { useState } from "react";


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

  p.quantity {
    text-align: center;
    color: var(--dimGray);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
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

const CounterButtons = ({ item }) => {
  const [localQuantity, setLocalQuantity] = useState(1);

  const handleIncrease = () => {
    setLocalQuantity(localQuantity + 1);
  };

  const handleDecrease = () => {
    if (localQuantity > 1) {
      setLocalQuantity(localQuantity - 1);
    }
  };

  return (
    <Counter>
      <DecreaseButton onClick={handleDecrease}></DecreaseButton>
      <ItemQuantity>
        <p className="quantity">{localQuantity}</p>
      </ItemQuantity>
      <IncreaseButton onClick={handleIncrease}></IncreaseButton>
    </Counter>
  );
};

export default CounterButtons;
