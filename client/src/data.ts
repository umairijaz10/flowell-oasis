// data.ts
import product1 from '../public/assets/images/img1.jpg'
import product2 from '../public/assets/images/img2.jpg'
import product3 from '../public/assets/images/img3.jpg'
import product4 from '../public/assets/images/img4.webp'
import product5 from '../public/assets/images/img5.webp'

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  export const products: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        image: product1.src,
    },
    {
        id: 2,
        name: 'Product 2',
        price: 11.99,
        image: product2.src,
    },
    {
        id: 3,
        name: 'Product 3',
        price: 12.99,
        image: product3.src,
    },
    {
        id: 4,
        name: 'Product 4',
        price: 13.99,
        image: product4.src,
    },
    {
        id: 5,
        name: 'Product 5',
        price: 14.99,
        image: product5.src,
    },
    {
        id: 6,
        name: 'Product 6',
        price: 15.99,
        image: product2.src,
    },
  ];
  