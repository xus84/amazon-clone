import React from "react";
import "./Home.css";
import Product from "./Product";

const products = [
  {
    id: "12321341",
    title:
      "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    price: 11.96,
    rating: 5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  },
  {
    id: "49538094",
    title:
      "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
    price: 11.96,
    rating: 5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  },
  {
    id: "4903850",
    title:
      "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    price: 11.96,
    rating: 3,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  },
  {
    id: "23445930",
    title:
      "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    price: 11.96,
    rating: 5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  },
  {
    id: "3254354345",
    title:
      "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    price: 11.96,
    rating: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  },
  {
    id: "90829332",
    title:
      "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    price: 11.96,
    rating: 5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  },
];

function HomeRow({ products }) {
  return (
    <div className="home__row">
      {products.map((p) => (
        <Product {...p} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <HomeRow {...{ products: products.slice(0, 1) }} />
        <HomeRow {...{ products: products.slice(1, 4) }} />
        <HomeRow {...{ products: products.slice(4, 6) }} />
      </div>
    </div>
  );
}
