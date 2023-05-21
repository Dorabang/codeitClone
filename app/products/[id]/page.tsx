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
        <ul className='pl-4 w-1/2'>
          <li className='text-2xl font-bold text-neutral-900'>
            {product.name}
            <span className='text-sm text-neutral-500 pl-2'>
              {product.englishName}
            </span>
          </li>

          <li>Brand : {product.brand}</li>
          <li>
            <span className='text-lg font-bold'>
              {product.salePrice.toLocaleString()}원
            </span>
            <span className='text-neutral-500 line-through pl-2'>
              {product.price.toLocaleString()}원
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

export default ProductDetailPage;
