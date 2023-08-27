import styled from "styled-components";
import { useCart } from "../../store/CartContext"
import CartSummary from "./CartSummary/index";
import ItemList from "./ItemList/index";

const ContentContainer = styled.div`
  display: flex;
  width: 1200px;
  height: 465.184px;
  align-items: flex-start;
  gap: var(--spacing-2-xl, 24px);
  flex-shrink: 0;
  padding: 0 200px;
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
