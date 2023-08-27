import { useEffect, useState } from "react";
import styled from "styled-components";
import { useCart } from "../../store/CartContext";
import axios from "axios";
import CartIcon from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: inline-flex;
  padding: var(--spacing-6-xl, 56px) 200px;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-3-xl, 32px);
`;

const ProductsHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: var(--spacing-md, 4px);
  height: 60px;
  width: 1200px;
`;

const SeeAllButton = styled.button`
  background-color: var(--white);
  border-radius: var(--radius-sm, 4px);
  border: 1px solid var(--mintGreen);
  display: flex;
  padding: 10px var(--spacing-xl, 16px) 11px var(--spacing-xl, 16px);
  justify-content: flex-end;
  align-items: flex-end;
  gap: var(--spacing-lg, 8px);

  p {
    color: var(--mintGreen);
    text-align: right;
    font-family: Roboto Flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1 0 0;

  h1 {
    align-self: stretch;
    color: var(--jet);
    text-align: right;
    font-family: Roboto Flex;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 35px; /* 145.833% */
    margin: 0;
    padding: 0;
  }

  p.caption {
    color: var(--dimGray);
    text-align: right;
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    height: 25px;
    line-height: 25px; /* 156.25% */
    margin: 0;
    padding: 0;
    width: 1085px;
  }
`;

const ProductsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;
  height: 784px;
  width: 1200px;
`;

const ProductCard = styled.div`
  border-radius: var(--radius-sm, 4px);
  border: 1px solid #eee;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  height: 380px;
  width: 282px;
`;

const ProductImage = styled.div`
  align-self: stretch;
  border-radius: 4px 4px 0px 0px;
  background-image: ${(props) => `url(${props.image})`};
  background-origin: content-box;

  background-repeat: no-repeat;
  background-size: contain;
  height: 282px;

  padding: 16px;
  width: 282px;
`;

const ProductContent = styled.div`
  display: flex;
  padding: var(--spacing-xl, 16px);
  flex-direction: column;
  align-items: flex-end;
  gap: var(--spacing-xl, 16px);
  align-self: stretch;
  height: 120px;
  width: 250px;
`;

const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-md, 4px);
  align-self: stretch;
  height: 48px;
  width: 250px;

  h2 {
    align-self: stretch;
    color: var(--jet);
    text-align: right;
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    height: 19px;
    line-height: normal;
    width: 250px;
  }
`;

const ProductPrices = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  height: 25px;
  width: 250px;

  p.fullPrice {
    color: #a5a5a5;
    font-family: Roboto Flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    text-decoration-line: strikethrough;
  }

  p.discountedPrice {
    color: #f55157;
    text-align: right;
    font-family: Roboto Flex;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 138.889% */
  }
`;

const CardButtons = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg, 8px);
  align-self: stretch;
  height: 56px;
  width: 250px;
`;

const ButtonFavorite = styled.button`
  background: (val--white);
  border-radius: var(--radius-sm, 4px);
  border: 1px solid #EEEEEE;
  display: flex;
  padding: var(--spacing-xl, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg, 8px);
  align-self: stretch;
  height: 56px;
  width: 50px;
`;

const HeartIcon = ({ myColor }) => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="icon">
      <path
        id="Vector"
        d="M13.1484 0.0975342C11.6511 0.0975342 10.3385 0.765186 9.35258 2.02835C9.2211 2.19682 9.10389 2.36536 9 2.52859C8.89611 2.36532 8.7789 2.19682 8.64742 2.02835C7.66146 0.765186 6.34887 0.0975342 4.85156 0.0975342C2.02303 0.0975342 0 2.46591 0 5.30783C0 8.55743 2.66333 11.62 8.63568 15.2381C8.74765 15.3059 8.87382 15.3398 9 15.3398C9.12618 15.3398 9.25235 15.3059 9.36432 15.2381C15.3367 11.6201 18 8.55746 18 5.30787C18 2.46742 15.9786 0.0975342 13.1484 0.0975342ZM14.736 9.35414C13.4926 10.7415 11.6137 12.2023 9 13.8128C6.38631 12.2023 4.50738 10.7415 3.26401 9.35417C2.01393 7.95931 1.40625 6.63575 1.40625 5.30787C1.40625 3.26163 2.78909 1.50378 4.85156 1.50378C5.90189 1.50378 6.79746 1.96046 7.51342 2.86117C8.0859 3.58148 8.32711 4.32528 8.3288 4.33059C8.42038 4.62432 8.69235 4.8244 9.00004 4.8244C9.30772 4.8244 9.57969 4.62436 9.67127 4.33059C9.67349 4.32349 9.90745 3.60289 10.4611 2.89358C11.181 1.97136 12.0851 1.50375 13.1484 1.50375C15.2131 1.50375 16.5938 3.26328 16.5938 5.30783C16.5938 6.63572 15.9861 7.95928 14.736 9.35414Z"
        fill={myColor}
      />
    </g>
  </svg>
);

const ButtonAddToCart = styled.button`
  background: var(--white);
  border-radius: var(--radius-sm, 4px);
  border: 1px solid #62d0b6;
  display: flex;
  padding: var(--spacing-xl, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg, 8px);

  height: 58px;
  width: 192px;

  &:hover {
    background: #62d0b6;
    color: white;
  }

  p {
    color: #333333;
    text-align: center;
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    height: 24px;
    line-height: 24px;
    margin: 0;
    padding: 0;
    width: 62px;
  }

  div {
    background-image: url(${CartIcon});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 13.578px 13.445px;
    display: flex;
    width: 16px;
    height: 16px;
    padding: 1.222px 1.229px 1.333px 1.193px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    height: 16px;
    width: 16px;
  }
`;

function ProductsContainer() {
  const { cart, dispatch } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data.slice(0, 8)); // salva os 8 primeiros produtos
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const [isFavorited, setFavorited] = useState(false);
  const handleFavorite = () => {
    setFavorited(!isFavorited);
  };
  if (isFavorited) {
    HeartIcon.myColor = "#42f785";
  }

  return (
    <Container>
      <ProductsHeader>
        <SeeAllButton>Ver Tudo</SeeAllButton>
        <ContainerTitles>
          <h1>Produtos em destaque</h1>
          <p className="caption">
            Produtos em destaque mais recentes adicionados
          </p>
        </ContainerTitles>
      </ProductsHeader>

      <ProductsSection>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <Link to={`/productDetails/${product.id}`}>
              <ProductImage image={product?.image} alt={product.title} />
            </Link>
            <ProductContent>
              <ProductInformation>
                <Link to={`/productDetails/${product.id}`}>
                  <h2>{product.title}</h2>
                </Link>

                <ProductPrices>
                  <p className="fullPrice">de R$ {product.price.toFixed(2)}</p>
                  <p className="discountedPrice">
                    por R$ {product.price.toFixed(2)}
                  </p>
                </ProductPrices>
              </ProductInformation>

              <CardButtons>
                <ButtonFavorite
                  onClick={handleFavorite}
                  style={{ background: isFavorited ? "#62D0B6" : "#FFFFFF" }}
                >
                  <HeartIcon myColor="#A5A5A5"></HeartIcon>
                </ButtonFavorite>
                <ButtonAddToCart onClick={() => addToCart(product)}>
                  <p>Carrinho</p>
                  <div></div>
                </ButtonAddToCart>
              </CardButtons>
            </ProductContent>
          </ProductCard>
        ))}
      </ProductsSection>
    </Container>
  );
}

export default ProductsContainer;
