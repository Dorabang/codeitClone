'use client';
import { useEffect, useState } from 'react';
import axios from '../../libs/axios';
import SizeReviewList from '@/app/components/SizeReviewList';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import styles from './Products.module.css';
import StarRating from '@/app/components/StarRating';

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
  }, [id]);

  if (!product) return null;

  return (
    <>
      <div className='container mx-auto flex justify-between mt-20'>
        <div className='w-1/2'>
          <img src={product.imgUrl} alt={product.name} className='w-full' />
        </div>
        <div className='pl-8 w-1/2'>
          <ul>
            <li className='text-2xl font-bold text-neutral-900 mb-8'>
              {product.name}
              <span className='text-sm text-neutral-500 pl-2'>
                {product.englishName}
              </span>
            </li>
          </ul>
          <ul className='border border-solid border-neutral-900 rounded-lg py-5 px-7 bg-white'>
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
                <span className='text-neutral-500 line-through pl-2'>
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
                  <span className='text-amber-400 pr-1'>
                    <StarRating value={product.starRating} />
                  </span>
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
                  <AiFillHeart className='inline-block' size={16} />{' '}
                  {product.likeCount}
                </span>
              </div>
            </li>
          </ul>
          <div className='mt-8 border border-solid border-neutral-900 rounded-lg py-5 px-7 bg-white'>
            <SizeReviewList sizeReviews={sizeReviews} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
