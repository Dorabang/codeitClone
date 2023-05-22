/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/items/:id',
        destination: '/products/:id',
        permanent: true, // response status code, 웹 브라우저에 주소가 바뀌었다는 사실 저장 여부
      },
    ];
  },
};

module.exports = nextConfig;
