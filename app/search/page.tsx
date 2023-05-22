'use client';
import { useSearchParams } from 'next/navigation';
import SearchForm from '../components/SearchForm';
import ProductList from '../components/ProductList';
import { useEffect, useState } from 'react';
import axios from '../libs/axios';
import LoadingPage from '../loading';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  const [products, setProducts] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const getProducts = async (query: string | null) => {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  };

  useEffect(() => {
    getProducts(q);
    setLoading(false);
  }, [q]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className='container mx-auto flex justify-center'>
      <div>
        <div className='text-center w-full'>
          <SearchForm initialValue={`${q}`} />
          {q && (
            <p className='my-10 pb-5 text-xl w-full border-b-2 border-solid border-neutral-900 dark:text-white dark:border-neutral-700'>
              "{q}" 검색 결과
            </p>
          )}
        </div>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default SearchPage;
