import React from 'react';
import './Style.css';

const products = [
  {
    title: "Face Wash/Training/Food",
    description: "LIFETIME ACCESS (SPECIAL OFFER) 3 IN 1 - FACE / BODY / NUTRITION",
    price: "17.69$",
    buttonText: "JOIN NOW",
    image: "/Capture33.png"
  },
  {
    title: "Face Training Course",
    description: "BIG PROMOTION Absolutely new exercises & method",
    price: "17.49$",
    buttonText: "BUY NOW",
    image: "/Capture33.png"
  },
  {
    title: "Anti-Aging Tape",
    description: "Best seller 2020-2023",
    price: "17.89$",
    buttonText: "BUY NOW",
    image: "/Capture33.png"
  }
];

const Products = () => {
  return (
    <div className="products-section">
      <h2>ALL MY PRODUCT</h2>
      <div className="product-cards">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button>{product.buttonText}</button>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
