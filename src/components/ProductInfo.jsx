import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductInfo.css';

const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-info-container">
      <div className="product-info">
        <img src={product.image} alt={product.title} />
        <div className="product-info-title">{product.title}</div>
        <div className="product-info-description">{product.description}</div>
        <div className="product-info-price">${product.price}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
