'use client';
import { useSearchParams } from 'next/navigation';

const searchPage = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  return (
    <div>
      <p>searchPage</p>
      <p>{q} 검색 결과</p>
    </div>
  );
};

export default searchPage;
