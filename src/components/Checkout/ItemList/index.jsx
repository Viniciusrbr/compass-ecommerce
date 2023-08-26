import styled from "styled-components";
import CartItem from "./CartItem/index";

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-xl, 16px);
  flex: 1 0 0;
  height: 368px;
  width: 894px;
`;

const ItemList = () => {
  return (
    <ItemsContainer>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CartItem></CartItem>
    </ItemsContainer>
  );
};

export default ItemList;