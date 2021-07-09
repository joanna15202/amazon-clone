import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import MyCarousel from "./MyCarousel";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  let productsToRender = [];
  const renderProducts = (products, start, end) => {
    productsToRender = [];
    for (let i = start; i < end; i++) {
      productsToRender.push(
        <div className="home__col col-lg-3 col-md-4 col-sm-6 col-12">
          {products.slice(i, i + 1).map((product) => (
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              rating={5}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      );
    }
    return productsToRender;
  };

  return (
    <div className="home">
      <div className="home__container">
        <MyCarousel />

        <div className="home__row row">
          {renderProducts(products, 0, 8).map((product) => product)}
        </div>

        <img
          src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
          alt=""
          className="home__ad"
        />

        <div className="home__row row">
          {renderProducts(products, 8, 21).map((product) => product)}
        </div>

        <img
          src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
          alt=""
          className="home__ad"
        />
      </div>
    </div>
  );
}

export default Home;
