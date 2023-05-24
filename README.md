# Undefined
해당 프로젝트는 Codeit Next.js 강의 결과물이며, 기존 강의에서 버전 업된 ```Next.js```와 ```typeScript```, ```Tailwind```를 추가하여 클론 코딩하였습니다.
<br/>


배포
---
🚀 https://web-mall.vercel.app/


기능
---
### 1. Home
  ![Frame 3](https://github.com/Dorabang/webMall/assets/39180932/eddec5c5-3a2c-4274-8461-ca367a6d62b8)
  - 서버에서 받아온 제품 리스트를 받아와 메인 화면에서 확인할 수 있습니다.

### 2. /products/:id
  ![Frame 3 (3)](https://github.com/Dorabang/webMall/assets/39180932/f27cfbcc-69dc-4f49-9851-3755b58fea93)
  - 홈 화면의 제품 리스트 중 하나를 클릭하면 해당 제품의 상세페이지로 이동합니다. 상세페이지에는 제품 정보와 사이즈 리뷰를 확인할 수 있습니다. ```/items/:id```로 이동 시 ```/products/:id```로 리다이렉트 됩니다.

### 3. /search
  ![Frame 3 (2)](https://github.com/Dorabang/webMall/assets/39180932/ec535e6e-929e-42aa-9d67-3ac259466cf8)
  - 검색기능을 통해 입력한 키워드가 포함된 제품 리스트를 받아볼 수 있습니다.

### 4. Dark Mode
  ![Frame 3 (1)](https://github.com/Dorabang/webMall/assets/39180932/52706b58-e4a5-4930-be4a-e5d6a12aeaed)
  - header 우측의 라이트 아이콘을 클릭하면 ```dark Mode```를 활성화할 수 있습니다.
  - 활성 시 페이지가 이동하여도 다크모드가 유지됩니다.

<br/>

## 프로젝트 실행
git clone 후,
```{
npm install
npm run start | npm start
