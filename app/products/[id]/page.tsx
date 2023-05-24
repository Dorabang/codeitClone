'use client';
import { useState, useEffect } from 'react';
import axios from '../../libs/axios';
import SizeReviewList from '@/app/components/SizeReviewList';
import { AiFillHeart } from 'react-icons/ai';
import styles from './products.module.css';
import StarRating from '@/app/components/StarRating';
import LoadingPage from '@/app/loading';
import Image from 'next/image';

interface propTypes {
  params: { id: number };
}

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

const ProductDetailPage = ({ params: { id } }: propTypes) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [product, setProduct] = useState<ProductTypes | null>(null);
  const [sizeReviews, setSizeReviews] = useState<string[]>([]);

  async function getProduct(targetId: number) {
    const res = await axios.get(`/products/${targetId}`);
    const nextProduct = res.data;
    setProduct(nextProduct);
  }

  async function getSizeReviews(targetId: number) {
    const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
    const nextSizeReview = res.data.results;
    setSizeReviews(nextSizeReview);
    // console.log(nextSizeReview.results);
  }

  useEffect(() => {
    if (!id) return;

    getProduct(id);
    getSizeReviews(id);
    setLoading(false);
  }, [id]);

  if (!product) return null;

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className='container mx-auto flex flex-wrap justify-between mt-20 lg:px-4 px-0'>
        <div
          className={`lg:w-1/2 w-full sm:mx-0 mx-3 rounded-lg overflow-hidden relative ${styles.product_img}`}
        >
          <Image
            src={product.imgUrl}
            alt={product.name}
            className='w-full'
            fill
          />
        </div>
        <div className='lg:pl-8 sm:px-0 px-4 lg:w-1/2 w-full lg:mt-0 mt-5'>
          <ul>
            <li className='md:text-2xl text-xl font-bold text-neutral-900 mb-8 dark:text-neutral-50'>
              {product.name}
              <span className='text-sm text-neutral-500 sm:pl-2 sm:inline-block block '>
                {product.englishName}
              </span>
            </li>
          </ul>
          <ul className='border border-solid border-neutral-900 rounded-lg py-5 px-7 bg-white dark:bg-white/50 dark:border-neutral-300'>
            <li>
              <h3 className='text-xl font-bold pb-4'>제품 정보</h3>
            </li>
            <li className={`${styles.product_info} py-1`}>
              <div className={styles.product_info_name}>
                <p>브랜드 / 품번</p>
              </div>
              <div className={styles.product_info_desc}>
                <span>{product.brand}</span> /
                <span> {product.productCode}</span>
              </div>
            </li>
            <li className={`${styles.product_info} py-1`}>
              <div className={styles.product_info_name}>
                <p>가격</p>
              </div>
              <div className={styles.product_info_desc}>
                <span className='text-lg font-bold'>
                  {product.salePrice.toLocaleString()}원
                </span>
                <span className='text-neutral-500 line-through pl-2 dark:text-neutral-700'>
                  {product.price.toLocaleString()}원
                </span>
              </div>
            </li>
            <li className={`${styles.product_info} py-1`}>
              <div className={styles.product_info_name}>
                <p>포인트 적립</p>
              </div>
              <div className={styles.product_info_desc}>
                <span>{product.point.toLocaleString()} P</span>
              </div>
            </li>
            <li className={`${styles.product_info} py-1`}>
              <div className={styles.product_info_name}>
                <p>구매 후기</p>
              </div>
              <div className={styles.product_info_desc}>
                <span>
                  <StarRating value={product.starRating} />
                  {product.starRatingCount.toLocaleString()}개
                </span>
              </div>
            </li>
            <li className={`${styles.product_info} py-1`}>
              <div className={styles.product_info_name}>
                <p>좋아요</p>
              </div>
              <div className={styles.product_info_desc}>
                <span className='text-rose-500'>
                  <span className='inline-block'>
                    <AiFillHeart size={16} />
                  </span>{' '}
                  {product.likeCount}
                </span>
              </div>
            </li>
          </ul>
          <div className='mt-8 border border-solid border-neutral-900 rounded-lg py-5 px-7 bg-white dark:bg-white/50 dark:border-neutral-300'>
            <SizeReviewList sizeReviews={sizeReviews} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
