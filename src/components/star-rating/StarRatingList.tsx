import { Star } from './Star';
import './index.css';

type StarRatingListProps = {
  numOfStars: number;
  activeUntil: number; // index (inclusive) to highlight; -1 if none
  activeColor: string;
  inactiveColor: string;
  starSize: string;
  hoverIndex: number
  onHover: (e: React.MouseEvent<HTMLDivElement>) => void;
  onLeave: () => void;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
};

export const StarRatingList: React.FC<StarRatingListProps> = ({
  numOfStars,
  activeUntil,
  activeColor,
  inactiveColor,
  starSize,
  hoverIndex,
  onHover,
  onLeave,
  onClick,
  onKeyDown,
}) => {
  return (
    <div
      className="star-list-container"
      role="radiogroup" // Treat the star list as a group of radio buttons
      onMouseMove={onHover} // Use onMouseMove to track hover over stars
      onMouseLeave={onLeave}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {/* Generate an array of stars based on numOfStars */}
      {Array.from({ length: numOfStars }).map((_, i) => {
        const startIndex = i + 1; // 1-based index for stars
        return (
          <Star
            key={i}
            index={startIndex} // Star position in the list
            fill={
              startIndex <= Math.floor(activeUntil)
                ? 1
                : startIndex - 0.5 === activeUntil
                ? 0.5
                : 0
            }
            activeColor={activeColor}
            inactiveColor={inactiveColor}
            starSize={starSize}
            hoverIndex={hoverIndex}
          />
        );
      })}
    </div>
  );
};
