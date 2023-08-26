import { useContext } from 'react';
import styled from "styled-components";
import Theme from "../../../../Theme";
import iPhone from "../../../../assets/images/iPhone.png";
import Counter from "./IncrementDecrementItem/index";

const ItemContainer = styled.div`
  border-radius: var(--radius-sm, 4px);
  border: ${props => `1px solid ${props.theme.colors.antiFlashWhite}`};
  background: ${props => `${props.theme.colors.white}`};
  display: flex;
  padding: var(--spacing-xl, 16px);
  align-items: center;
  gap: var(--spacing-3-xl, 32px);
  align-self: stretch;
  height: 80px;
  width: 862px;
`;

const IconContainer = styled.div`
  background: ${props => `${props.theme.colors.seaSalt}`};
  border-radius: 50px;
  display: flex;
  padding: var(--spacing-lg, 8px);
  align-items: center;
  gap: 10px;
`;

const DeleteItem = () => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Icons/Cancel">
      <path
        id="Vector"
        d="M2.19526 3.96278C1.93491 3.70243 1.93491 3.28032 2.19526 3.01997C2.45562 2.75962 2.87772 2.75962 3.13807 3.01997L5.99999 5.88189L8.86189 3.01997C9.12225 2.75962 9.54438 2.75962 9.80473 3.01997C10.0651 3.28032 10.0651 3.70243 9.80473 3.96278L6.94279 6.8247L9.80473 9.6866C10.0651 9.94695 10.0651 10.3691 9.80473 10.6294C9.54438 10.8898 9.12225 10.8898 8.86189 10.6294L5.99999 7.76749L3.13807 10.6294C2.87772 10.8898 2.45562 10.8898 2.19526 10.6294C1.93491 10.3691 1.93491 9.94695 2.19526 9.6866L5.05718 6.8247L2.19526 3.96278Z"
        fill="#444444"
      />
    </g>
  </svg>
);

const ItemTotalPrice = styled.p`
  color: ${props => `${props.theme.colors.jet}`};
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
  color: ${props => `${props.theme.colors.jet}`};
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
  color: ${props => `${props.theme.colors.dimGray}`};
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

const ItemImage = styled.div`
  border-radius: var(--radius-sm, 4px);
  border: ${props => `1px solid ${props.theme.colors.antiFlashWhite}`};
  background-image: url(${iPhone});
  background-origin: content-box;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 95px;
`;

const CartItem = () => {
  return (
    <ItemContainer>
      <DeleteItem></DeleteItem>
      <ItemTotalPrice>R$ 5.000,00</ItemTotalPrice>
      <Counter />
      <ItemDetails>
        <ItemText>
          <ItemTitle>
            Celular Apple iPhone com dois sims e 64 GB, além de duas câmeras e
            tela retina OLED incluso muitos aplicativos massa
          </ItemTitle>
          <ItemPrice>R$ 5.000,00</ItemPrice>
        </ItemText>
        <ItemImage />
      </ItemDetails>
    </ItemContainer>
  );
};

export default CartItem;
