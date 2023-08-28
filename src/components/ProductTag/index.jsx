import { useEffect, useState } from "react";
import TagDiscount from "../TagDiscount/index";
import TagNew from "../TagNew/index";
import { useCart } from "../../store/CartContext";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductTag = ({ situation, discount }) => {

    if (situation === "men's clothing") {
        return <TagDiscount discount={discount}/>;
    } else if (situation === "jewelery") {
      return <TagNew />;
    } else {
      return null;
    }
  };

export default ProductTag;
