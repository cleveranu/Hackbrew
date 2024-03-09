import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data'; // Adjust the path as needed
import "./Product.css";

function ProductDetailPage() {
  const [product, setProduct] = useState('');
  const { id: productId } = useParams();
  console.log(productId);
  useEffect(() => {
    const id = 1; // Assuming the ID in the URL is a string and needs to be converted to a number
    console.log("hi",productId);
    const productData = products.find(p => p.id === id);
    setProduct(productData);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // Continue to define your JSX based on the structure of the product data
  return (
    <div className="product-detail-page">
      <div className="product-image">
        <img src={product.img} alt={product.Name} />
      </div>
      <div className="product-content">
        <h1 className="product-name">{product.Name}</h1>
        <div className="product-rating">
          {/* Render stars based on rating */}
        </div>
        <p className="product-price">{`Need Stars out of 5: ${product.Need_Rating}`}</p>
        <p className="product-description">{product.Description}</p>
        <div className="product-meta">
          <p><strong>Established:</strong> {product.Established_in}</p>
          <p><strong>State:</strong> {product.State}</p>
          <p><strong>City:</strong> {product.City}</p>
        </div>
        <button className="add-to-cart-btn">Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
