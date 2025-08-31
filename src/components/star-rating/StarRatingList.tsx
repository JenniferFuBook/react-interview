import { Star } from './Star';
import './index.css';

type StarRatingListProps = {
  numOfStars: number;
  activeUntil: number; // index (inclusive) to highlight; -1 if none
  activeColor: string;
  inactiveColor: string;
  starSize: string;
  onHover: (index: number, e: React.MouseEvent<HTMLSpanElement>) => void;
  onLeave: () => void;
  onClick: (index: number, e: React.MouseEvent<HTMLSpanElement>) => void;
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
    <div className="star-list-container" >
      {/* Generate an array of stars based on numOfStars */}
      {Array.from({ length: numOfStars }).map((_, i) => {
        const startIndex = i + 1; // 1-based index for stars
        return (
        <Star
          key={i}
          index={startIndex} // Star position in the list
          fill={
            startIndex <= Math.floor(activeUntil) ? 1 : startIndex - 0.5 === activeUntil ? 0.5 : 0
          }
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          starSize={starSize}
          onHover={onHover}
          onLeave={onLeave}
          onClick={onClick}
        />
      )})}
    </div>
  );
};
