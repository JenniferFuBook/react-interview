type StarRatingLabelProps = {
  text: string;
};

export const StarRatingLabel = ({ text }: StarRatingLabelProps) => {
  return (
    <div role="status" tabIndex={0}>
      {text}
    </div>
  );
};
