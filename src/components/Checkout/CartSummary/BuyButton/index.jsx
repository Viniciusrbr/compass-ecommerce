import styled from "styled-components";

const colors = {
  aqua: "#62D0B6",
  white: "#FFFFFF",
};

const ButtonContainer = styled.button`
  border-radius: var(--radius-sm, 4px);
  border: 1px solid #62d0b6;
  background: #62d0b6;
  display: flex;
  padding: var(--spacing-xl, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg, 8px);
  align-self: stretch;
  margin: 16px 0;
  width: 250px;

  p {
    color: ${colors.white};
    text-align: right;
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    margin: 0;
    padding: 0;
  }
`;

const BuyButton = () => {
  return <ButtonContainer><p>Comprar</p></ButtonContainer>;
};

export default BuyButton;
