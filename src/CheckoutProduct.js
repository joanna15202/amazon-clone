import React from "react";
import "./CheckoutProduct.css";
import GradeIcon from "@material-ui/icons/Grade";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, hideButton }) {
  const [{ basket, state }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // Remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const removeThisItemFromBasket = () => {
    // Remove the item from the basket
    dispatch({
      type: "REMOVE_THIS_ITEM_FROM_BASKET",
      id: id,
    });
  };

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__inStock">In Stock</p>
        <p className="checkoutProduct__shipping">
          Eligible for FREE Shipping & FREE Returns
        </p>

        <p className="checkoutProduct__quantityChange">
          <button
            onClick={removeFromBasket}
            className="checkoutProduct__plusminus"
          >
            -
          </button>
          <span className="checkoutProduct__quantity">
            Qty: {basket.filter((item) => item.id === id).length}
          </span>
          <button onClick={addToBasket} className="checkoutProduct__plusminus">
            +
          </button>
        </p>

        {!hideButton && (
          <button onClick={removeThisItemFromBasket} className="btn checkoutProduct__delete">
            Delete
          </button>
        )}
      </div>
      <div className="checkoutProduct__price">
        <small>$</small>
        <strong>{price}</strong>
      </div>
    </div>
  );
}

export default CheckoutProduct;
