import styled from "styled-components";
import cartIcon from "../../../assets/icons/cart-header-icon.svg";
import profileIcon from "../../../../src/assets/icons/user-profile.png";
import searchIcon from "../../../../src/assets/icons/search-icon.png";
import siteLogo from "../../../../src/assets/icons/cart-logo-icon.png";

import { Link } from "react-router-dom";
import { useCart } from "../../../store/CartContext";

const CartIconContainer = styled.div`
  align-self: stretch;
  color: var(--dimGray)
  display: flex;
  width: 24px;
  height: 24px;
  padding: 1.833px 1.843px 2px 1.789px;
  position: relative;
  justify-content: center;
  align-items: center;

   img {
    background-image: ${cartIcon};
    background-origin: content-box;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    fill: gray;
    width: 20.367px;
    height: 20.167px;
    flex-shrink: 0;
   }
`;

const RoundedIcon = styled.img`
  border-radius: 50px;
  padding: 8px;
  background: var(--seaSalt);

  width: 24px;
  height: 24px;
`;

const LogoIcon = styled.img`
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
  height: 109px;
  width: 1600px;
`;

const CartButton = styled.button`
  border-radius: 50px;
  border: none;
  background: var(--seaSalt);
  display: flex;
  padding: var(--spacing-lg, 8px);
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 40px;
  width: 40px;
`;

const CartItemCounter = styled.div`
  background-color: var(--folly);
  border: 1px solid var(--white);
  border-radius: 30px;
  bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 18px;
  left: 14px;
  position: absolute;
  text-decoration: none;
  width: 18px;

  p {
    color: var(--white);
    flex-shrink: 0;
    font-family: Roboto Flex;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }
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
    color: var(--silver);
    font-size: 14px;
    font-weight: 400;
  }
  h1 {
    margin: 0;
    color: var(--jet);
    font-size: 16px;
    font-weight: 400;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid var(--antiFlashWhite);
  border-radius: 4px;
  padding: 14px 16px;
  width: 833px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
  const { cart } = useCart();

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  return (
    <HeaderContainer>
      <CartButton>
        <Link to="/cart">
          <CartIconContainer>
            <img src={cartIcon}></img>
            <CartItemCounter>
              <p>{calculateTotalQuantity()}</p>
            </CartItemCounter>
          </CartIconContainer>
        </Link>
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

      <Link to="/">
        <LogoIcon src={siteLogo} alt="Logo" />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
