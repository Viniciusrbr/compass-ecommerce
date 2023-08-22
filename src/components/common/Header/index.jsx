import styled from "styled-components";

import cartIcon from "../../../../src/assets/icons/cart-icon.png";
import profileIcon from "../../../../src/assets/icons/user-profile.png";
import searchIcon from "../../../../src/assets/icons/search-icon.png";
import siteLogo from "../../../../src/assets/icons/cart-logo-icon.png";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px 200px;
  gap: 40px;

  img {
    width: 24px;
    height: 24px;
  }

  .site-logo {
    width: 44px;
    height: 44px;
  }
`;

const CartButton = styled.button`
  border-radius: 50px;
  padding: 8px;
  border: none;
  background: #f8f8f8;
`;

const WelcomeContainer = styled.div`

  display: flex;
  align-items: center;
  gap: 10px;
  width: 127px;

  h1 {
    color: #a5a5a5;
    font-size: 14px;
    font-weight: 400;
  }
  p {
    color: #333;
    font-size: 16px;
    font-weight: 400;
  }

  img {
    background: #f8f8f8;
    border-radius: 50px;
    padding: 8px;
  }
`;

const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h1,
  p {
    margin: 0;
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

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
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
        <img src={cartIcon} alt="Cart" />
      </CartButton>

      <WelcomeContainer>
        <WelcomeText>
          <h1>Bem-vindo</h1>
          <p>Welliton</p>
        </WelcomeText>
        <img src={profileIcon} alt="Cart" />
      </WelcomeContainer>

      <SearchContainer>
        <SearchIcon src={searchIcon} alt="Search" />
        <SearchInput type="text" placeholder="Buscar" />
      </SearchContainer>

      <img src={siteLogo} className="site-logo" alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
