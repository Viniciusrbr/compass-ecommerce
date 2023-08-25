import React from "react";
import Header from "../../components/common/Header";
import Checkout from "../../components/Checkout/index";
import ItemList from "../../components/Checkout/CartSummary/ItemList/index";

function CartPage() {
  return (
    <>
      <Header />
      <Checkout />
      <ItemList />
    </>
  );
}

export default CartPage;
