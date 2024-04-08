import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
    {/* <div>
      <h1 className='naming'>Welcome to My REACTSHOP</h1>
      <p>Your comfort is our priority. We deliver everything you need. 
      Shop at the Best Prices in the world's no1 Online Destination. 
      Buy Now and Pay on Delivery.
      </p>
    </div> */}
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className="product-title">{product.title}</div>
          <div className="product-price">${product.price}</div>
          <Link to={`/products/${product.id}`} className="details-link">
            View Details
          </Link>
          <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product.id)}> Add to Cart
          </button>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductList;
