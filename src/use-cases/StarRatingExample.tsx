import StarRating from '../components/star-rating/StarRating';

const StarRatingExample= () => {
  return (
    <div style={{ padding: 20 }}>
      <StarRating defaultRating={1} activeColor="black" />
      <StarRating
        defaultRating={0.5}
        numOfStars={5}
        activeColor="blue"
        inactiveColor="darkgray"
        starSize="50px"
        text="Rate this product"
      />
      <StarRating
        defaultRating={7}
        numOfStars={10}
        activeColor="purple"
        inactiveColor="lightgray"
        starSize="60px"
        showLabel={false}
      />
    </div>
  );
};

export default StarRatingExample;
