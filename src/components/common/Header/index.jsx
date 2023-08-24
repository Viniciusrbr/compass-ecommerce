import styled from "styled-components";

import cartIcon from "../../../../src/assets/icons/cart-icon.png";
import profileIcon from "../../../../src/assets/icons/user-profile.png";
import searchIcon from "../../../../src/assets/icons/search-icon.png";
import siteLogo from "../../../../src/assets/icons/cart-logo-icon.png";

import { Link } from "react-router-dom";

const RoundedIcon = styled.img`
  border-radius: 50px;
  padding: 8px;
  background: #f8f8f8;

  width: 24px;
  height: 24px;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px 200px;
  gap: 40px;
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
    color: #333;
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
        <Link to="/cart"><RoundedIcon src={cartIcon} alt="Cart" /> </Link>
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

      <Link to="/"><RoundedIcon src={siteLogo} alt="Logo" /></Link>
      
    </HeaderContainer>
  );
};

export default Header;
