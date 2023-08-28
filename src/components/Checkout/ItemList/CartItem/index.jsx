import styled from "styled-components";
import { useCart } from "../../../../store/CartContext";
import Counter from "./IncrementDecrementItem/index";
import deleteIcon from "../../../../assets/icons/delete.svg";


const ItemContainer = styled.div`
  border-radius: var(--radius-sm, 4px);
  border: 1px solid (var--antiFlashWhite);
  background: (var--white);
  display: flex;
  padding: var(--spacing-xl, 16px);
  align-items: center;
  gap: var(--spacing-3-xl, 32px);
  align-self: stretch;
  height: 80px;

  .deleteButton {
    cursor: pointer;
    border-radius: 50%;
    padding: 16px;
    background-image: url(${deleteIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--seaSalt);
    border: none;
  }
`;

const IconContainer = styled.button`
  background-color: var(--seaSalt);
  background-image: url(${deleteIcon});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  padding: var(--spacing-lg, 8px);
  align-items: center;
  gap: 10px;
`;

const ItemTotalPrice = styled.p`
  color: (var--jet);
  font-family: Roboto Flex;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  height: 25px;
  line-height: 25px;
  margin: 0;
  max-width: 106.64px;
  min-width: 106.64px;
  padding: 0;
`;

const ItemDetails = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-xl, 16px);
  flex: 1 0 0;
  height: 80px;
  width: 468px;
`;

const ItemText = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-md, 4px);

  height: 54px;
  width: 357px;
`;

const ItemTitle = styled.p`
  align-self: stretch;
  color: (var--jet);
  display: -webkit-box;
  text-align: right;
  font-family: Roboto Flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  height: 38px;
  line-height: normal;
  margin: 0;
  padding: 0;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 357px;
`;

const ItemPrice = styled.p`
  color: (var--dimGray);
  text-align: right;
  font-family: Roboto Flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding: 0;
  width: 357px;
`;

const ItemImage = styled.img`
  border-radius: var(--radius-sm, 4px);
  border: (var--antiFlashWhite);
  height: 80px;
  width: 95px;
`;

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  const handleRemoveItem = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
  };

  return (
    <ItemContainer>
      <IconContainer onClick={handleRemoveItem} className="deleteButton"></IconContainer>
      <ItemTotalPrice>
        R$ {(item.price * item.quantity).toFixed(2)}
      </ItemTotalPrice>
      <Counter item={item} />
      <ItemDetails>
        <ItemText>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemPrice>{item?.price.toLocaleString("pt-BR", {style:"currency", currency:"BRL", minimumFractionDigits: 2})}</ItemPrice>
        </ItemText>
        <ItemImage src={item.image} />
      </ItemDetails>
    </ItemContainer>
  );
};

export default CartItem;
