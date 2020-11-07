import React from "react";
import "./Product.css";

function ProductPrice({ price }) {
  return (
    <div className="product__price">
      <small>$</small>
      <strong>{price}</strong>
    </div>
  );
}

function ProductRating({ rating }) {
  return (
    <div className="product__rating">
      {Array(rating)
        .fill()
        .map(() => (
          <p>🌟</p>
        ))}
    </div>
  );
}

function ProductInfo({ title, ...otherProps }) {
  return (
    <div className="product__info">
      <p>{title}</p>
      <ProductPrice {...otherProps} />
      <ProductRating {...otherProps} />
    </div>
  );
}

export default function Product({ image, ...otherProps }) {
  return (
    <div className="product">
      <ProductInfo {...otherProps} />
      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
}
