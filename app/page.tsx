'use client';
import { useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
import ProductList from './components/ProductList';
import axios from './libs/axios';

import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

export default function Home() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const [products, setProducts] = useState<any[]>([]);

  async function getProducts() {
    const res = await axios.get('/products');
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='container mx-auto flex justify-between relative'>
      <div className='absolute right-0'>
        {isActive ? (
          <div className='flex items-center'>
            <SearchForm />
            <AiOutlineClose
              size={24}
              className='ml-2 text-neutral-900 cursor-pointer'
              onClick={() => setIsActive(false)}
            />
          </div>
        ) : (
          <AiOutlineSearch
            onClick={() => setIsActive(true)}
            size={24}
            className='cursor-pointer'
          />
        )}
      </div>
      <div className='mt-14'>
        <ProductList products={products} />
      </div>
    </div>
  );
}
