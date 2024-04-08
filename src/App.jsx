import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductInfo from './components/ProductInfo';
import WelcomeMessage from './components/WelcomeMessage';

const App = () => {
  return (
    <Router>
      <WelcomeMessage/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
