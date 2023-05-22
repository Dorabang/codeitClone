import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const StarRating = ({ value = 1 }) => {
  const star = [1, 2, 3, 4, 5];
  return (
    <>
      <span>
        {star.map((rating) =>
          value >= rating ? (
            <AiFillStar size={18} className='inline' />
          ) : (
            <AiOutlineStar size={18} className='inline' />
          )
        )}
      </span>
    </>
  );
};

export default StarRating;
