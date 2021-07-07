import React from "react";
import "./Product.css";
import GradeIcon from "@material-ui/icons/Grade";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating, description }) {
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
        description: description,
      },
    });
  };

  return (
    <div className="product">
      {/* Image */}
      <img src={image} alt="" />

      {/* Title/Price/Star Rating */}
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__description">
          {description.substring(0, 80) + " ..."}
        </p>
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

      {/* Add to Basket */}
      <button onClick={addToBasket} className="btn btn-sm col-12 btn-warning">
        <ShoppingCartIcon className="product__shoppintCartIcon" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}

export default Product;
