import { useEffect, useState } from "react";
import styled from "styled-components";
import { useCart } from "../../store/CartContext";
import axios from "axios";
import { Link } from "react-router-dom";
import ArrowIcon from "../../assets/icons/go-back-icon.svg";
import ProductTag from "../ProductTag/index";

const Container = styled.div`
  display: inline-flex;
  padding: var(--spacing-6-xl, 56px) 200px;
  padding-top: 26px;
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
    height: 16px;
    line-height: normal;
    margin: 0;
    padding: 0;
    width: 55px;
  }
`;

const SeeAllIcon = styled.div`
  background-image: ${ArrowIcon};
  background-origin: content-box;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  box-sizing: border-box;
  display: flex;
  width: 16px;
  height: 16px;
  padding: 2px 4.667px;
  justify-content: center;
  align-items: center;
`;

const Arrow = ({arrowColor}) => (
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Icon">
      <path
        id="Vector"
        d="M6.64089 12.0002C6.46438 12.0002 6.28787 11.9322 6.15209 11.7961L0.870353 6.50352C0.748153 6.38107 0.666687 6.20419 0.666687 6.01371C0.666687 5.83684 0.734576 5.61915 0.870353 5.4967L6.15209 0.204085C6.42365 -0.0680284 6.85813 -0.0680284 7.12969 0.204085C7.40124 0.476199 7.40124 0.911581 7.12969 1.18369L2.30959 6.00011L7.12969 10.8301C7.40124 11.1022 7.40124 11.5376 7.12969 11.8097C6.99391 11.9322 6.8174 12.0002 6.64089 12.0002Z"
        fill={arrowColor}
      />
    </g>
  </svg>
);

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
  border: 1px solid var(--antiFlashWhite);
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  height: 380px;
  position: relative;
  width: 282px;
`;

const ProductImage = styled.div`
  align-self: stretch;
  border-radius: 4px 4px 0px 0px;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center center;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-size: contain;
  box-sizing: border-box;
  height: 228px;
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

  a {
    text-decoration: none;
  }

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
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    white-space: nowrap;
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
    color: var(--silver);
    font-family: Roboto Flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    height: 25px;
    line-height: 24px; /* 171.429% */
    margin: 0;
    max-width: 125px;
    padding: 0;
    text-decoration: line-through;
  }

  p.discountedPrice {
    color: var(--folly);
    text-align: right;
    font-family: Roboto Flex;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    height: 25px;
    line-height: 25px; /* 138.889% */
    margin: 0;
    max-width: 125px;
    padding: 0;
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
  border: 1px solid var(--antiFlashWhite);
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
  border: 1px solid var(--antiFlashWhite);
  display: flex;
  padding: var(--spacing-xl, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg, 8px);
  height: 58px;
  width: 192px;

  &:hover {
    background: var(--turquoise);

    p {
      color: var(--white);
    }

    path {
      fill: var(--white);
    }
  }

  p {
    color: var(--jet);
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

  div {
    display: flex;
    width: 16px;
    height: 16px;
    padding: 1.222px 1.229px 1.333px 1.193px;
    justify-content: center;
    align-items: center;
  }
`;

const CartIcon = ({ cartColor }) => (
  <svg
    width="13.578"
    height="13.445"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Icon">
      <path
        id="Vector"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.54229 3.5637C2.53235 3.45368 2.54543 3.3428 2.58071 3.23812C2.61599 3.13344 2.67269 3.03726 2.74719 2.9557C2.82169 2.87414 2.91237 2.809 3.01344 2.76442C3.11451 2.71984 3.22376 2.6968 3.33422 2.69678H12.976C13.0951 2.69683 13.2127 2.72362 13.32 2.77518C13.4274 2.82673 13.5218 2.90173 13.5962 2.99465C13.6707 3.08757 13.7234 3.19602 13.7504 3.31202C13.7773 3.42801 13.7779 3.54858 13.7521 3.66482L12.9374 7.33702C12.7972 7.96809 12.446 8.53247 11.9418 8.93696C11.4375 9.34144 10.8104 9.56182 10.1639 9.5617H5.67934C4.97022 9.56174 4.28673 9.29655 3.76321 8.81823C3.2397 8.33992 2.91402 7.68309 2.8502 6.97685L2.54229 3.5637ZM3.7069 3.83298L3.98186 6.87459C4.02017 7.29853 4.21573 7.69279 4.53008 7.9798C4.84443 8.26682 5.25481 8.42581 5.68048 8.4255H10.1651C10.5528 8.42541 10.929 8.29307 11.2314 8.05035C11.5338 7.80763 11.7444 7.46903 11.8285 7.09047L12.5522 3.83298H3.7069Z"
        fill={cartColor}
      />
      <path
        id="Vector_2"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.192719 0.790024C0.192719 0.639355 0.252572 0.494856 0.359111 0.388317C0.465651 0.281777 0.610149 0.221924 0.760819 0.221924H2.75372C2.89268 0.222065 3.02677 0.273134 3.13062 0.365468C3.23447 0.457802 3.30087 0.584997 3.31727 0.722988L3.77402 4.58721C3.79165 4.73697 3.74906 4.88761 3.65563 5.00597C3.56219 5.12434 3.42557 5.20074 3.2758 5.21837C3.12603 5.236 2.9754 5.19341 2.85703 5.09997C2.73867 5.00654 2.66227 4.86991 2.64464 4.72014L2.24811 1.35699H0.760819C0.610149 1.35699 0.465651 1.29714 0.359111 1.1906C0.252572 1.08406 0.192719 0.940694 0.192719 0.790024ZM5.30562 12.5304C5.45629 12.5304 5.60079 12.4705 5.70733 12.364C5.81387 12.2575 5.87372 12.113 5.87372 11.9623C5.87372 11.8116 5.81387 11.6671 5.70733 11.5606C5.60079 11.454 5.45629 11.3942 5.30562 11.3942C5.15495 11.3942 5.01046 11.454 4.90392 11.5606C4.79738 11.6671 4.73752 11.8116 4.73752 11.9623C4.73752 12.113 4.79738 12.2575 4.90392 12.364C5.01046 12.4705 5.15495 12.5304 5.30562 12.5304ZM5.30562 13.6666C5.52944 13.6666 5.75106 13.6225 5.95783 13.5369C6.16461 13.4512 6.35249 13.3257 6.51075 13.1674C6.66901 13.0092 6.79454 12.8213 6.88019 12.6145C6.96584 12.4077 7.00992 12.1861 7.00992 11.9623C7.00992 11.7385 6.96584 11.5169 6.88019 11.3101C6.79454 11.1033 6.66901 10.9154 6.51075 10.7572C6.35249 10.5989 6.16461 10.4734 5.95783 10.3877C5.75106 10.3021 5.52944 10.258 5.30562 10.258C4.85361 10.258 4.42012 10.4375 4.1005 10.7572C3.78088 11.0768 3.60132 11.5103 3.60132 11.9623C3.60132 12.4143 3.78088 12.8478 4.1005 13.1674C4.42012 13.487 4.85361 13.6666 5.30562 13.6666ZM10.489 12.5304C10.6396 12.5304 10.7841 12.4705 10.8907 12.364C10.9972 12.2575 11.0571 12.113 11.0571 11.9623C11.0571 11.8116 10.9972 11.6671 10.8907 11.5606C10.7841 11.454 10.6396 11.3942 10.489 11.3942C10.3383 11.3942 10.1938 11.454 10.0873 11.5606C9.98073 11.6671 9.92087 11.8116 9.92087 11.9623C9.92087 12.113 9.98073 12.2575 10.0873 12.364C10.1938 12.4705 10.3383 12.5304 10.489 12.5304ZM10.489 13.6666C10.7128 13.6666 10.9344 13.6225 11.1412 13.5369C11.348 13.4512 11.5358 13.3257 11.6941 13.1674C11.8524 13.0092 11.9779 12.8213 12.0635 12.6145C12.1492 12.4077 12.1933 12.1861 12.1933 11.9623C12.1933 11.7385 12.1492 11.5169 12.0635 11.3101C11.9779 11.1033 11.8524 10.9154 11.6941 10.7572C11.5358 10.5989 11.348 10.4734 11.1412 10.3877C10.9344 10.3021 10.7128 10.258 10.489 10.258C10.037 10.258 9.60347 10.4375 9.28385 10.7572C8.96423 11.0768 8.78467 11.5103 8.78467 11.9623C8.78467 12.4143 8.96423 12.8478 9.28385 13.1674C9.60347 13.487 10.037 13.6666 10.489 13.6666Z"
        fill={cartColor}
      />
    </g>
  </svg>
);

const ArrowsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-md, 4px);
  align-self: stretch;
  height: 46px;
  width: 100%;
`;

const PageNavIcon = styled.button`
border-radius: 30px;
border: 1px solid var(--antiFlashWhite);
background: var(--white);
box-sizing: border-box;
display: flex;
width: 46px;
height: 46px;
padding: var(--spacing-lg, 8px);
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
height: 46px;
transform: ${props => props.forward ? "rotate(180deg)" : "rotate(0deg)"};
width: 46px;
`

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
    HeartIcon.myColor = "#9af785";
  }

  return (
    <Container>
      <ProductsHeader>
        <SeeAllButton>
          <SeeAllIcon>
            <Arrow arrowColor="var(--mintGreen)" />
          </SeeAllIcon>
          <p>Ver Tudo</p>
        </SeeAllButton>
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
              <ProductImage
                image={product?.image}
                alt={product.title}
              ></ProductImage>
            </Link>
            <ProductTag
              situation={product.category}
              discount={product?.id}
            ></ProductTag>
            <ProductContent>
              <ProductInformation>
                <Link to={`/productDetails/${product.id}`}>
                  <h2>{product.title}</h2>
                </Link>

                <ProductPrices>
                  <p className="fullPrice">
                    de R$ {product.price.toLocaleString("pt-BR")}
                  </p>
                  <p className="discountedPrice">
                    por R$ {product.price.toLocaleString("pt-BR")}
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
                  <div>
                    <CartIcon cartColor="#333333" />
                  </div>
                </ButtonAddToCart>
              </CardButtons>
            </ProductContent>
          </ProductCard>
        ))}
      </ProductsSection>
      <ArrowsSection>
        <PageNavIcon>
        <Arrow arrowColor="var(--dimGray)" />
        </PageNavIcon>
        <PageNavIcon forward>
        <Arrow arrowColor="var(--dimGray)" />
        </PageNavIcon>
      </ArrowsSection>
    </Container>
  );
}

export default ProductsContainer;
