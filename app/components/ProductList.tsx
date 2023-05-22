import Link from 'next/link';

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
    <ul className='container mx-auto flex justify-between flex-wrap'>
      {products.map((product: ProductTypes) => (
        <li
          key={product.id}
          className='sm:w-1/2 md:px-3 md:w-1/3 w-full px-2 pb-8 text-center'
        >
          <Link href={`/products/${product.id}`}>
            <div className='border border-solid border-neutral-900 rounded-lg overflow-hidden bg-white dark:border-neutral-400'>
              <img src={product.imgUrl} alt={product.name} />
              <div className='py-4'>
                <p className='font-bold text-neutral-900'>{product.name}</p>
                <span>{product.price.toLocaleString()}원</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
