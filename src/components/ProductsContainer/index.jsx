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
  `

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
