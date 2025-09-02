type StarRatingLabelProps = {
  text: string;
};

export const StarRatingLabel: React.FC<StarRatingLabelProps> = ({ text }) => {
  return (
    <div role="status" tabIndex={0}>
      {text}
    </div>
  );
};
