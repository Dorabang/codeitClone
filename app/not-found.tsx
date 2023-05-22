import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='container mx-auto text-center py-48 flex items-center'>
      <div className='w-full'>
        <h2 className='text-6xl text-neutral-900 font-black'>404 Error</h2>
        <p className='py-10'>
          찾을 수 없는 페이지입니다.
          <br />
          요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨습니다.
        </p>
        <button className='border border-solid border-neutral-900 hover:bg-neutral-900 hover:text-white px-8 py-3 rounded-lg transition duration-150'>
          <Link href='/'>홈으로 이동하기</Link>
        </button>
      </div>
    </div>
  );
}
