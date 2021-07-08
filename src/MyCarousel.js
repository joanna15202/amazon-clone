import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "./MyCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyCarousel() {
  return (
    <div className="carousel">
      <div
        className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent 
      bottom-0 z-20"
      />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <img
          loading="lazy"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NzUwMTVjZTAt/NzUwMTVjZTAt-NmI3MWUwNmYt-w1500._CB666233452_.jpg"
          alt="ad_1"
        />
        <img
          loading="lazy"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Njk4MjQxYjct/Njk4MjQxYjct-OTg2NzBkNmEt-w3000._CB666253599_.jpg"
          alt="ad_1"
        />
        <img
          loading="lazy"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/TomorrowWar/GW-Trailer-1/TWAR_2021_GWBleedingHero_1500x600_TeaserChrisSoloNoGun_TH_Pre_en-US_ARSDE._CB668924267_.jpg"
          alt="ad"
        />
        <img
          loading="lazy"
          src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/OGMwNDNkOTkt/OGMwNDNkOTkt-MjAwOTJmNWEt-w1500._CB665975592_.jpg"
          alt="ad_3"
        />
        <img
          loading="lazy"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ODgzNjQ2M2Et/ODgzNjQ2M2Et-ZjQ2ZjAzMDgt-w1500._CB665077786_.jpg"
          alt="ad_4"
        />
        <img
          loading="lazy"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MzBiNjIyYjgt/MzBiNjIyYjgt-N2M4ZmRmZjgt-w3000._CB665928848_.jpg"
          alt="ad_5"
        />
        <img
          loading="lazy"
          src="https://images-na.ssl-images-amazon.com/images/G/01/BISS/Avalon/GW_DesktopHeroTall_Dx_1500x600_EN._CB665443657_.jpg"
          alt="ad_6"
        />
      </Carousel>
    </div>
  );
}

export default MyCarousel;
