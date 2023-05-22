'use client';
import { useSearchParams } from 'next/navigation';
import SearchForm from '../components/SearchForm';
import ProductList from '../components/ProductList';
import { useEffect, useState } from 'react';
import axios from '../libs/axios';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  const [products, setProducts] = useState<any[]>([]);

  const getProducts = async (query: string | null) => {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  };

  useEffect(() => {
    getProducts(q);
  }, [q]);

  return (
    <div>
      <p>search</p>
      <SearchForm initialValue={`${q}`} />
      {q && <p>{q} 검색 결과</p>}
      <ProductList products={products} />
    </div>
  );
};

export default SearchPage;
