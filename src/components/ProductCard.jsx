import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
