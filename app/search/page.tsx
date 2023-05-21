'use client';
import { useSearchParams } from 'next/navigation';
import SearchForm from '../components/SearchForm';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  return (
    <div>
      <p>search</p>
      <SearchForm initialValue={`${q}`} />
      {q && <p>{q} 검색 결과</p>}
    </div>
  );
};

export default SearchPage;
