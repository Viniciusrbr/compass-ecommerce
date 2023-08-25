import styled from "styled-components";
import DeleteIcon from "../../../../../assets/icons/delete.svg";

const colors = {
  aqua: "#62D0B6",
  lightGray: "#EEEEEE",
  mediumGray: "#A5A5A5",
  darkGray: "#333333",
  white: "#FFFFFF",
};

const ItemContainer = styled.div`
  border-radius: var(--radius-sm, 4px);
  border: 1px solid ${colors.white};
  background: ${colors.white};
  display: flex;
  padding: var(--spacing-xl, 16px);
  align-items: center;
  gap: var(--spacing-3-xl, 32px);
  align-self: stretch;
`;

const Delete = styled.div`
  background-image: url (${DeleteIcon});
  border-radius: 50px;
  background: #f8f8f8;
  display: flex;
  padding: var(--spacing-lg, 8px);
  align-items: center;
  gap: 10px;
`;

const CartItem = () => {
  return (
    <ItemContainer>
      <Delete></Delete>
    </ItemContainer>
  );
};

export default CartItem;
