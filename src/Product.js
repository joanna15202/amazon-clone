import React from "react";
import "./Product.css";
import GradeIcon from "@material-ui/icons/Grade";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";

<<<<<<< HEAD
function Product({ id, title, price, image, rating, description }) {
=======
function Product({ id, title, price, image, rating }) {
>>>>>>> d8a1cf83e2e3893a26487cd0442755da3588f2a8
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
<<<<<<< HEAD
        description: description,
=======
>>>>>>> d8a1cf83e2e3893a26487cd0442755da3588f2a8
      },
    });
  };

  return (
    <div className="product">
<<<<<<< HEAD
      {/* Image */}
      <img src={image} alt="" />

      {/* Title/Price/Star Rating */}
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__description">
          {description.substring(0, 150) + " ..."}
        </p>
=======
      {/* Title/Price/Star Rating */}
      <div className="product__info">
        <p>{title}</p>
>>>>>>> d8a1cf83e2e3893a26487cd0442755da3588f2a8
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
<<<<<<< HEAD

      {/* Add to Basket */}
      <button onClick={addToBasket} className="btn btn-sm col-12 btn-warning">
        <ShoppingCartIcon className="product__shoppintCartIcon" />
        <span>Add to Cart</span>
=======
      {/* Image */}
      <img src={image} alt="" />
      {/* Add to Basket */}
      <button onClick={addToBasket} className="btn btn-warning btn-sm">
        <ShoppingCartIcon className="product__shoppintCartIcon" /> Add to Cart
>>>>>>> d8a1cf83e2e3893a26487cd0442755da3588f2a8
      </button>
    </div>
  );
}

export default Product;
