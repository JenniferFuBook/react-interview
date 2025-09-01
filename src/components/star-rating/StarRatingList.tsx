import { Star } from './Star';
import './index.css';

type StarRatingListProps = {
  numOfStars: number;
  activeUntil: number; // index (inclusive) to highlight; -1 if none
  activeColor: string;
  inactiveColor: string;
  starSize: string;
  onHover: (e: React.MouseEvent<HTMLDivElement>) => void;
  onLeave: () => void;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
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
    <div
      className="star-list-container"
      onMouseMove={onHover} // Use onMouseMove to track hover over stars
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* Generate an array of stars based on numOfStars */}
      {Array.from({ length: numOfStars }).map((_, i) => {
        const startIndex = i + 1; // Create 1-based index for stars
        return (
          <Star
            key={i}
            index={startIndex} // Star position in the list
            fill={startIndex <= activeUntil ? 1 : 0} // 1 = full, 0 = empty
            activeColor={activeColor}
            inactiveColor={inactiveColor}
            starSize={starSize}
          />
        );
      })}
    </div>
  );
};
