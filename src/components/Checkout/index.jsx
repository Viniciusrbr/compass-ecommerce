import styled from "styled-components";
import { useCart } from "../../store/CartContext";
import CartSummary from "./CartSummary/index";
import ItemList from "./ItemList/index";

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  gap: var(--spacing-2-xl, 24px);
  flex-shrink: 0;
  padding: var(--spacing-4-xl, 40px) 200px;
  position: relative;
  overflow: scroll;

  //width: 1600px;
`;

const Checkout = () => {
  const { cart } = useCart(); // Pega a lista de produtos do carrinho

  return (
    <ContentContainer>
      <CartSummary />
      <ItemList items={cart} />
    </ContentContainer>
  );
};

export default Checkout;
