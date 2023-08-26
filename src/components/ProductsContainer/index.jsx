import { useEffect, useState } from "react";
import styled from "styled-components";
import { useCart } from "../../store/CartContext";
import axios from "axios";
import cartIconBlack from "../../assets/icons/cart-icon-black.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-top: 82px;
`;

const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h1 {
    margin: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
  }

  p {
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: var(--title);
  }

  margin-bottom: 32px;
`;

const ProductsSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 24px;
  margin: 0 -12px;
`;

const ProductCard = styled.div`
  width: 282px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;

  border: 1px solid #a5a5a5;
`;

const ProductImage = styled.img`
  width: 100%;
  min-height: 228px;
  max-height: 228px;
`;

const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: 16px;
  margin-right: 16px;

  h2 {
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: right;
  }

  p {
    margin: 0;
    color: #f55157;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    margin-top: 4px;
  }
`;

const CardButtons = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 192px;
    height: 56px;
    padding: 16px;

    color: #333;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    background-color: transparent;
    border: 1px solid #eee;
    cursor: pointer;
    &:hover {
      background-color: #62d0b6;
      color: white;
    }
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
      <ContainerTitles>
        <h1>Produtos em destaque</h1>
        <p>Produtos em destaque mais recentes adicionados</p>
      </ContainerTitles>

      <ProductsSection>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <Link to={`/productDetails/${product.id}`}>
              <ProductImage src={product.image} alt={product.title} />
            </Link>

            <ProductInformation>
              <Link to={`/productDetails/${product.id}`}>
                <h2>{product.title}</h2>
              </Link>
              
              <p>por R$ {product.price.toFixed(2)}</p>
            </ProductInformation>

            <CardButtons>
              <button onClick={() => addToCart(product)}>
                Carrinho <img src={cartIconBlack} alt="" />
              </button>
            </CardButtons>
          </ProductCard>
        ))}
      </ProductsSection>
    </Container>
  );
}

export default ProductsContainer;
