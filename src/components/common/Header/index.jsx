import styled from "styled-components";

import cartIcon from "../../../../src/assets/icons/cart-icon.png";
import profileIcon from "../../../../src/assets/icons/user-profile.png";
import searchIcon from "../../../../src/assets/icons/search-icon.png";
import siteLogo from "../../../../src/assets/icons/cart-logo-icon.png";

const RoundedIcon = styled.img`
  border-radius: 50px;
  padding: 8px;
  background: #f8f8f8;

  width: 24px;
  height: 24px;
`;

const RegularIcon = styled.img`
  width: 44px;
  height: 44px;
`;

const HeaderContainer = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 200px;
  gap: 40px;
  width: 1600px;
`;

const CartButton = styled.button`
  border-radius: 50px;
  border: none;
  background: #f8f8f8;
`;

const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 41px;
  width: 75px;

  p {
    margin: 0;
    color: #a5a5a5;
    font-size: 14px;
    font-weight: 400;
  }
  h1 {
    margin: 0;
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 400;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 14px 16px;
  width: 833px;
`;

const SearchIconImage = styled.img`
  width: 16px;
  height: 16px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  text-align: right;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <CartButton>
        <RoundedIcon src={cartIcon} alt="Cart" />
      </CartButton>

      <WelcomeContainer>
        <WelcomeText>
          <p>Bem-vindo</p>
          <h1>Welliton</h1>
        </WelcomeText>
        <RoundedIcon src={profileIcon} alt="Profile" />
      </WelcomeContainer>

      <SearchContainer>
        <SearchIconImage src={searchIcon} alt="Search" />
        <SearchInput type="text" placeholder="Buscar" />
      </SearchContainer>

      <RegularIcon src={siteLogo} alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
