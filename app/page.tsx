import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <h1 className='text-9xl'>Hello, Next.js</h1>
      <ul>
        <li>
          <Link href='/products/1'>첫 번째 상품</Link>
        </li>
        <li>
          <Link href='/products/2'>두 번째 상품</Link>
        </li>
        <li>
          <Link href='/products/3'>세 번째 상품</Link>
        </li>
      </ul>
    </div>
  );
}
