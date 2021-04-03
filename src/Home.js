import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return <div className="home">
    <div className="home_container">
      <img className="home__image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.csnews.com%2Ffiles%2Fstyles%2Fhero%2Fs3%2F2018-07%2FAmazon%2520Prime%2520Day%25202018_hero_072318.jpg%3Fitok%3DIw0QqmJQ&f=1&nofb=1"/>
    </div>

    <div className="home__row">
          <Product
            id="12321341"
            title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
            price={1899.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="LED monitor Samsung CF390 Series 27 inch FHD 1920x1080 Curved Desktop"
            price={225.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/91mL-OSb40L._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Redragon K580 VATA RGB LED Backlit Mechanical Gaming Keyboard with Macro Keys "
            price={80.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/71jPClBDPDL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="Logitech G502 Hero High Performance Gaming Mouse"
            price={21.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="RESPAWN 110 Gaming Chair, Gray"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71d6LnYtdfL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
  </div>;
}
