import { Star } from './Star';
import './index.css';

type StarRatingListProps = {
  numOfStars: number;
  activeUntil: number; // index (inclusive) to highlight; -1 if none
  activeColor: string;
  inactiveColor: string;
  starSize: string;
  onHover: (index: number) => void;
  onLeave: () => void;
  onClick: (index: number) => void;
};

export const StarRatingList: React.FC<StarRatingListProps> = ({
  numOfStars,
  activeUntil,
  activeColor,
  inactiveColor,
  starSize,
  onHover,
  onLeave,
  onClick,
}) => {
  return (
    <div className="star-list-container">
      {/* Generate an array of stars based on numOfStars */}
      {Array.from({ length: numOfStars }).map((_, i) => (
        <Star
          key={i}
          index={i} // Star position in the list
          fill={i <= activeUntil ? 1 : 0} // 1 = full, 0 = empty
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          starSize={starSize}
          onHover={onHover}
          onLeave={onLeave}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
