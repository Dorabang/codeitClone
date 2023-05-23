import Image from 'next/image';
import Link from 'next/link';

import styles from './ProductList.module.css';
import StarRating from './StarRating';
import { AiFillHeart } from 'react-icons/ai';

interface ProductTypes {
  id: number;
  name: string;
  englishName: string;
  brand: string;
  productCode: string;
  price: number;
  salePrice: number;
  starRating: number;
  starRatingCount: number;
  likeCount: number;
  point: number;
  imgUrl: string;
  createdAt: number;
  updatedAt: number;
}

const ProductList = ({ products = [] }: { products: any[] }) => {
  return (
    <ul
      className={`container mx-auto flex justify-between flex-wrap ${styles.wrap}`}
    >
      {products.map((product: ProductTypes) => (
        <li
          key={product.id}
          className='sm:w-1/2 md:px-3 md:w-1/3 w-full px-2 pb-8'
        >
          <Link
            href={`/products/${product.id}`}
            className='w-full h-full inline-block'
          >
            <div className='border border-solid border-neutral-900 rounded-lg overflow-hidden bg-white dark:border-neutral-300 dark:bg-white/50 relative w-full'>
              <div className='relative'>
                <Image
                  src={product.imgUrl}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className='py-4 mx-3'>
                <p className='font-bold text-neutral-900'>{product.name}</p>
                <span>
                  {product.price.toLocaleString()}원
                  <span className='text-sm text-neutral-500 line-through pl-2 dark:text-neutral-700'>
                    {product.salePrice.toLocaleString()}원
                  </span>
                </span>
              </div>
              <div className='border-t border-solid border-neutral-700 mx-3 py-3'>
                <p>
                  <StarRating value={product.starRating} />{' '}
                  {product.starRatingCount.toLocaleString()}개
                </p>
                <p className='pt-1'>
                  <AiFillHeart
                    size={16}
                    className='text-rose-500 inline-block mr-1'
                  />
                  {product.likeCount}
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
