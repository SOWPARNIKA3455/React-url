import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import infoIcon from "/src/assets/information-button.png"; 
import tagIcon from "/src/assets/tag.png"; 
import cartIcon from "/src/assets/cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import '../App.css';  

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="loading-text">Loading...</p>;

  return (
    <div className="container">
       <Link to="/" className="back-link flex items-center text-blue-600 hover:underline">
       <FontAwesomeIcon icon={faArrowLeft} className="mr-2 " /> Back to Products</Link>

      <div className="product-detail-container">
        <div className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />

          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-category">
              <img src={tagIcon} alt="Category" className="info-icon" /> {product.category}
            </p>
            <p className="product-description">
              <img src={infoIcon} alt="Info" className="info-icon" /> {product.description}
            </p>
            <p className="product-price"> $ {product.price}</p>

            <button className="cart-button">
              <i className="bi bi-cart-fill"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
