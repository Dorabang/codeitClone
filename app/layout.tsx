import '@/app/globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Link from 'next/link';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'webSite',
  description: 'codeit Next.js webSite clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={notoSansKR.className}>
        <header className='py-8 border-b border-solid border-neutral-700 mb-10'>
          <div className='container mx-auto flex justify-between'>
            <h1 className='text-3xl font-extrabold tracking-tight text-neutral-900'>
              <Link href='/'>Undefined</Link>
            </h1>
            <div></div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
