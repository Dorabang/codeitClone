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
          className='sm:w-1/2 sm:px-2 md:px-5 md:w-1/3 w-full pb-10'
        >
          <Link href={`/products/${product.id}`}>
            <img src={product.imgUrl} alt={product.name} />
            <span>{product.name}</span>
            <br />
            <span>{product.price.toLocaleString()}원</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
