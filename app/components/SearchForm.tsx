'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SearchFormProps {
  initialValue?: string;
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
          size={35}
          className='text-black px-4 py-1 p rounded-full outline-1 outline-neutral-900 border-solid border-neutral-500 border-2 dark:outline-neutral-50 dark:border-neutral-700 dark:hover:outline-neutral-50 dark:bg-neutral-900 dark:text-white'
        />
        <button
          type='submit'
          className='py-1 px-4 rounded-full ml-2 border-solid border-neutral-900 border-2 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition duration-150 dark:text-white dark:outline-neutral-700 dark:border-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-black dark:bg-neutral-900'
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
