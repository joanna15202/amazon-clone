import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const basketItems = [];
  basket.forEach(function (item) {
    var existing = basketItems.filter(function (v, i) {
      return v.id == item.id;
    });
    if (existing.length == 0) {
      basketItems.push(item);
    }
  });

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"
          alt=""
        />
        <div className="checkout__products">
          <h2 className="checkout__hello">Hello, {user?.email}</h2>
          <div className="checkout__titlePart">
            <h2 className="checkout__title">Shopping Cart</h2>
            <h2 className="checkout__titlePrice">Unit Price</h2>
          </div>

          <FlipMove
            enterAnimation="accordionVertical"
            leaveAnimation="accordionVertical"
          >
            {basketItems?.map((item) => (
              <FlipMove>
                <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              </FlipMove>
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
