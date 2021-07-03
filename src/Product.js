import React from "react";
import "./Product.css";
import GradeIcon from "@material-ui/icons/Grade";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      {/* Title/Price/Star Rating */}
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <GradeIcon />
              </p>
            ))}
        </div>
      </div>
      {/* Image */}
      <img src={image} alt="" />
      {/* Add to Basket */}
      <button onClick={addToBasket} className="btn btn-warning btn-sm">
        <ShoppingCartIcon className="product__shoppintCartIcon" /> Add to Cart
      </button>
    </div>
  );
}

export default Product;
