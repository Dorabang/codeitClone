'use client';
import { useState } from 'react';
import Link from 'next/link';
import SearchForm from './components/SearchForm';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Home() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className='container mx-auto flex justify-between relative'>
      <div className='absolute right-0'>
        {isActive ? (
          <SearchForm />
        ) : (
          <AiOutlineSearch onClick={() => setIsActive(true)} size={24} />
        )}
      </div>
      <ul className='pt-5'>
        <li>
          <Link href='/products/1'>첫 번째 상품</Link>
        </li>
        <li>
          <Link href='/products/2'>두 번째 상품</Link>
        </li>
        <li>
          <Link href='/products/3'>세 번째 상품</Link>
        </li>
      </ul>
    </div>
  );
}
