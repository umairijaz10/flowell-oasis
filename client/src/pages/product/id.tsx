// src/components/ProductDetail.tsx
import { Product } from '@/data';
import React from 'react';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart }) => {
  return (
    <div>
      <h1>Product Detail</h1>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
