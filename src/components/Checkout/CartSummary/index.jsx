import { useContext } from 'react';
import styled from "styled-components";
import Coupon from "./Coupon/index";
import BuyButton from "./BuyButton";

const colors = {
  aqua: "#62D0B6",
  snow: "#EEEEEE",
  lightGray: "#666666",
  mediumGray: "#333333",
};

const CartSummaryContainer = styled.div`
  align-items: flex-end;
  border-radius: 4px;
  border: 1px solid #eee;
  background: #fff;
  display: flex;
  height: 336px;
  padding: var(--spacing-xl, 16px);
  flex-direction: column;
  gap: var(--spacing-xl, 16px);
  flex-shrink: 0;
  width: 250px;

  h1 {
    align-self: stretch;
    color: ${colors.mediumGray};
    text-align: right;
    font-family: Roboto Flex;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    height: 25px;
    line-height: 25px;
    margin: 0;
    width: 250px;
  }
`;

const SummaryPrice = styled.div`
  align-self: stretch;
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-2-xl, 24px);
  height: 25px;
  margin: 0;
  width: 250px;

  p.pricetotal {
    color: ${colors.lightGray};
    font-family: Roboto Flex;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 25px;
    margin: 0;
    width: 113px;
  }

  p.summarylabel {
    color: ${colors.lightGray};
    text-align: right;
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    margin: 0;
    width: 113px;
  }
`;

const Spacer = styled.div`
  border-bottom: 1px solid ${colors.snow};
  width: 250px;
`;

const CartSummary = () => {
  return (
    <CartSummaryContainer>
      <h1>Resumo do pedido</h1>
      <SummaryPrice>
        <p className="pricetotal">R$ 6.000,00</p>
        <p className="summarylabel">Total</p>
      </SummaryPrice>
      <Coupon />
      <Spacer />
      <BuyButton />
    </CartSummaryContainer>
  );
};

export default CartSummary;
