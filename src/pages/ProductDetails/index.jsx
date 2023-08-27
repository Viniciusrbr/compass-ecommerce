import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../../store/CartContext";

function ProductDetailsPage() {
  const { productId } = useParams();
  const { dispatch } = useCart(); // Obtenha o dispatch do carrinho
  const [product, setProduct] = useState(null); // Estado que armazena as informações do produto

  // Busque as informações do produto na API com base no ID
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product }); // Add o produto ao carrinho
  };

  if (!product) {
    return <p>Tá carregando, te acalma...</p>;
  }

  return (
    <>
      <h1>Detalhes do Produto - {product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>Descrição: {product.description}</p>
      <p>Preço: R$ {product.price.toFixed(2)}</p>
      <p>Estrelinha: {product.rating.rate}</p>
      <p>Avaliações: {product.rating.count}</p>
      <button onClick={addToCart}>Adicionar ao Carrinho</button>
    </>
  );
}

export default ProductDetailsPage;
