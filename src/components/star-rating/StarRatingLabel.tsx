type StarRatingLabelProps = {
  text: string;
};

export const StarRatingLabel: React.FC<StarRatingLabelProps> = ({ text }) => {
  return <div>{text}</div>;
};
