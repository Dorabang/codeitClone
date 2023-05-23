import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const StarRating = ({ value = 1 }) => {
  const star = [1, 2, 3, 4, 5];
  return (
    <>
      <span className='text-amber-400 pr-1'>
        {star.map((rating) =>
          value >= rating ? (
            <AiFillStar size={18} className='inline' key={rating} />
          ) : (
            <AiOutlineStar size={18} className='inline' key={rating} />
          )
        )}
      </span>
    </>
  );
};

export default StarRating;
