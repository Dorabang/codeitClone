export interface sizeReviewTypes {
  id: number;
  sex: string;
  height: number;
  size: 'S' | 'M' | 'L' | 'XL';
  fit: 'small' | 'good' | 'big';
  productId: number;
  createdAt: number;
  updatedAt: number;
}

export interface labelsTypes {
  [key: string]: { [key: string]: string };
  sex: { male: string; female: string };
  fit: { small: string; good: string; big: string };
}

export interface propTypes {
  params: { id: number };
}

export interface ProductTypes {
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
