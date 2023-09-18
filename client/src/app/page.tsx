import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;