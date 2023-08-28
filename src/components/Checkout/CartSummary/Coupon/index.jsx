import styled from "styled-components";

const CouponContainer = styled.div`
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-lg, 8px);
  height: 61px;
  margin: 0;
  padding: 0;
  width: 250px;
`;

const CouponLabel = styled.p`
  align-self: stretch;
  color: var(--jet);
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
  border: 1px solid var(--antiFlashWhite);
  background: var(--white);
  display: flex;
  gap: 10px;
  height: 37px;
  padding: 0px !important;
  width: 100%;

  input.couponinput {
    color: var(--silver);
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

    border: none;
    outline: none;
  }
`;

const CouponButton = styled.button`
  background-color: var(--white);
  border-radius: var(--radius-sm, 4px) 4px var(--radius-sm, 4px)
    var(--radius-sm, 4px);
  border: 1px solid var(--turquoise);
  color: var(--silver);
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
        <input
          type="text"
          placeholder="Código de desconto"
          className="couponinput"
        ></input>
      </CouponInput>
    </CouponContainer>
  );
};

export default Coupon;
