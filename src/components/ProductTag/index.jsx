import TagDiscount from "../TagDiscount/index";
import TagNew from "../TagNew/index";

const ProductTag = ({ situation }) => {
if (situation === "men's clothing") {
            return <TagDiscount />;
        } else if (situation === "jewelery") {
            return <TagNew />;
        } else {
return null;
        }}

export default ProductTag