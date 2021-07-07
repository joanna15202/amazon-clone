import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/TomorrowWar/GW-Trailer-1/TWAR_2021_GWBleedingHero_1500x600_TeaserChrisSoloNoGun_TH_Pre_en-US_ARSDE._CB668924267_.jpg"
          alt=""
        />

        <div className="home__row row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {products.slice(0, 1).map((product) => (
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
          <div className="col-lg-6 col-md-6 col-sm-12">
            {products.slice(1, 2).map((product) => (
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
        </div>

        <div className="home__row row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            {products.slice(2, 3).map((product) => (
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
          <div className="col-lg-4 col-md-6 col-sm-12">
            {products.slice(3, 4).map((product) => (
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
          <div className="col-lg-4 col-md-6 col-sm-12">
            {products.slice(4, 5).map((product) => (
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
        </div>

        <img
          src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
          alt=""
          className="home__ad"
        />

        <div className="home__row row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            {products.slice(5, 6).map((product) => (
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
          <div className="col-lg-4 col-md-6 col-sm-12">
            {products.slice(6, 7).map((product) => (
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
          <div className="col-lg-4 col-md-6 col-sm-12">
            {products.slice(7, 8).map((product) => (
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
        </div>

        <div className="home__row row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {products.slice(8, 9).map((product) => (
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
          <div className="col-lg-6 col-md-6 col-sm-12">
            {products.slice(9, 10).map((product) => (
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
        </div>

        <div className="home__row row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            {products.slice(13, 14).map((product) => (
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
          <div className="col-lg-4 col-md-4 col-sm-12">
            {products.slice(14, 15).map((product) => (
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
