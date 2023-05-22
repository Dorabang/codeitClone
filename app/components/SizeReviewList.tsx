const formatData = (data: Date) => {
  const MM = String(data.getUTCMonth() + 1).padStart(2, '0');
  const DD = String(data.getUTCDate()).padStart(2, '0');
  const YYYY = String(data.getUTCFullYear());

  return `${YYYY}. ${MM}. ${DD}`;
};

interface labelsTypes {
  sex: { male: string; female: string };
  fit: { small: string; good: string; big: string };
}

const labels: labelsTypes = {
  sex: { male: '남자', female: '여자' },
  fit: { small: '작음', good: '적당함', big: '큼' },
};

interface sizeReviewTypes {
  id: number;
  sex: string;
  height: number;
  size: 'S' | 'M' | 'L' | 'XL';
  fit: 'small' | 'good' | 'big';
  productId: number;
  createdAt: number;
  updatedAt: number;
}

const SizeReviewList = ({ sizeReviews }: { sizeReviews: any[] }) => {
  return (
    <>
      <ul>
        <li>
          <h3 className='text-xl font-bold pb-4'>사이즈 리뷰</h3>
        </li>
        {sizeReviews ? (
          sizeReviews.map((sizeReview: sizeReviewTypes) => (
            <li key={sizeReview.id} className='py-2 flex justify-between'>
              <div>
                ({labels.sex[sizeReview.sex]} {sizeReview.height}cm 기준{' '}
                {sizeReview.size}) {labels.fit[sizeReview.fit]}
              </div>
              <div>
                <div>{formatData(new Date(sizeReview.createdAt))}</div>
              </div>
            </li>
          ))
        ) : (
          <li className='text-neutral-500'>아직 등록된 리뷰가 없습니다.</li>
        )}
      </ul>
    </>
  );
};

export default SizeReviewList;
