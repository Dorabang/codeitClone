'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SearchFormProps {
  initialValue: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ initialValue = '' }) => {
  const router = useRouter();
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) {
      router.push('/');
      return;
    }

    router.push(`/search?q=${value}`);

    setValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='q'
          value={value}
          onChange={handleChange}
          className='text-black px-4 py-1 p rounded-full outline-1 outline-neutral-900 border-solid border-neutral-500 border-2'
        />
        <button
          type='submit'
          className='py-1 px-4 rounded-full bg-neutral-500 text-white ml-2 border-solid border-neutral-500 border-2 hover:border-neutral-900 hover:bg-neutral-900 transition duration-150'
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
