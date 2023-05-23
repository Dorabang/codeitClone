'use client';
import { useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
import ProductList from './components/ProductList';
import axios from './libs/axios';

import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import LoadingPage from './loading';

export default function Home() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const [products, setProducts] = useState<any[]>([]);

  async function getProducts() {
    const res = await axios.get('/products');
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className='container mx-auto flex justify-between relative px-4 sm:px-0'>
      <div className='absolute right-4 sm:right-0'>
        {isActive ? (
          <div className='flex items-center'>
            <SearchForm />
            <AiOutlineClose
              size={24}
              className='ml-2 text-neutral-900 cursor-pointer dark:text-neutral-50'
              onClick={() => setIsActive(false)}
            />
          </div>
        ) : (
          <AiOutlineSearch
            onClick={() => setIsActive(true)}
            size={24}
            className='cursor-pointer dark:text-neutral-50'
          />
        )}
      </div>
      <div className='mt-14'>
        <ProductList products={products} />
      </div>
    </div>
  );
}
