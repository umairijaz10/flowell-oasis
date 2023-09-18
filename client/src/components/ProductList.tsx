import React from 'react';
import { Product } from '../data';
import Link from 'next/link';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className='product-list'>
      {products.map((product) => (
        <div className='product-item' key={product.id}>
            <Link href={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
