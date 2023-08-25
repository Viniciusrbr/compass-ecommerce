import styled from "styled-components";

const colors = {
  aqua: "#62D0B6",
  lightGray: "#EEEEEE",
  mediumGray: "#A5A5A5",
  darkGray: "#333333",
  white: "#FFFFFF",
};

const CouponContainer = styled.div`
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-lg, 8px);
  height: 61px;
  margin: 0;
  padding: 16px 0 0 0;
  width: 250px;
`;

const CouponLabel = styled.p`
  align-self: stretch;
  color: ${colors.darkGray};
  text-align: right;
  font-family: Roboto Flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  height: 16px;
  line-height: normal;
  margin: 0;
  width: 100%;
`;

const CouponInput = styled.div`
  align-items: center;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid ${colors.lightGray};
  background: #fff;
  display: flex;
  gap: 10px;
  height: 37px;
  padding: 0px !important;
  width: 100%;

  p.couponinput {
    color: ${colors.mediumGray};
    flex: 1 0 0;
    font-family: Roboto Flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    height: 16px;
    line-height: normal;
    margin-right: 12px;
    text-align: right;
    width: 146px;
  }
`;

const CouponButton = styled.button`
  background-color: ${colors.white};
  border-radius: var(--radius-sm, 4px) 4px var(--radius-sm, 4px)
    var(--radius-sm, 4px);
  border: 1px solid ${colors.aqua};
  color: ${colors.mediumGray};
  text-align: right;
  font-family: Roboto Flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  padding: 10px var(--spacing-xl, 16px) 11px var(--spacing-xl, 16px);
  justify-content: center;
  align-items: flex-end;
  gap: var(--spacing-lg, 8px);
  height: 100%;
  width: 82px;
`;

const Coupon = () => {
  return (
    <CouponContainer>
      <CouponLabel>Possui um código de desconto?</CouponLabel>
      <CouponInput>
        <CouponButton>CUPOM</CouponButton>
        <p className="couponinput">Código de desconto</p>
      </CouponInput>
    </CouponContainer>
  );
};

export default Coupon;
