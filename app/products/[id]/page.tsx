'use client';
import { useEffect, useState } from 'react';
import axios from '../../libs/axios';
import SizeReviewList from '@/app/components/SizeReviewList';

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

interface sizeReviewsTypes {
  id: number;
  sex: string;
  height: number;
  size: 'S' | 'M' | 'L' | 'XL';
  fit: 'small' | 'good' | 'big';
  productId: number;
  createdAt: number;
  updatedAt: number;
}

const productDetailPage = ({ params: { id } }: propTypes) => {
  const [product, setProduct] = useState<ProductTypes | null>(null);
  const [sizeReviews, setSizeReviews] = useState<sizeReviewsTypes>([]);

  async function getProduct(targetId: number) {
    const res = await axios.get(`/products/${targetId}`);
    const nextProduct = res.data;
    setProduct(nextProduct);
  }

  async function getSizeReviews(targetId: number) {
    const res = await axios.get('/size_reviews');
    const nextSizeReview = res.data;
    setSizeReviews(nextSizeReview.results);
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
      <div className='container mx-auto flex justify-between'>
        <div className='w-1/2'>
          <img src={product.imgUrl} alt={product.name} className='w-full' />
        </div>
        <ul className='pl-4 w-1/2'>
          <li>{product.name}</li>
          <li className='text-neutral-500'>{product.englishName}</li>
          <li>Brand : {product.brand}</li>
          <li>
            <span className='text-neutral-500 line-through'>
              {product.price.toLocaleString()}원
            </span>
            <span className='text-lg font-bold pl-1'>
              {product.salePrice.toLocaleString()}원
            </span>
          </li>
          <li>{product.likeCount}</li>
        </ul>
      </div>
      <div className='container mx-auto mt-12 border-t-1 border-neutral-500 border-solid'>
        <h3 className='text-xl font-bold'>Size Review</h3>
        <SizeReviewList sizeReviews={sizeReviews} />
      </div>
    </>
  );
};

export default productDetailPage;
