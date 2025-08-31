import { useState } from 'react';
import { StarRatingList } from './StarRatingList';
import { StarRatingLabel } from './StarRatingLabel';
import './index.css';

const getNewRating = (index: number, currentRating: number, e: React.MouseEvent<HTMLSpanElement>) => {
    const { left, width } = (e.target as HTMLElement).getBoundingClientRect();
    const clickX = e.clientX - left;
    const isHalf = clickX < width / 2;
    const newRating = isHalf ? index - 0.5 : index; //

    // Toggle if clicking the same rating again
    return currentRating === newRating ? newRating - 0.5 : newRating;
}

type StarRatingProps = {
  // Initial rating (0-based; -1 means "not rated")
  defaultRating?: number;
  // Number of stars to render (defaults to 5)
  numOfStars?: number;
  // Color of selected/active stars
  activeColor?: string;
  // Color of unselected/inactive stars
  inactiveColor?: string;
  // CSS size (e.g., '24px', '1.5rem')
  starSize?: string;
  // Optional custom label text. If omitted, a default label is generated
  text?: string;
  // Whether to show the text label beneath stars
  showLabel?: boolean;
};

// Main container component (logic layer)
const StarRating: React.FC<StarRatingProps> = ({
  defaultRating = -1,
  numOfStars = 5,
  activeColor = 'orange',
  inactiveColor = 'gray',
  starSize = '40px',
  text = 'Not rated',
  showLabel = true,
}) => {
  // Track the current rating (persistent after click)
  const [rating, setRating] = useState<number>(defaultRating);

  // Track the hover index (temporary, resets on mouse leave)
  const [hoverIndex, setHoverIndex] = useState<number>(-1);

  // Determine which stars should be highlighted by either rating or hover
  const activeUntil = Math.max(rating, hoverIndex);

  // Event handler for clicking a star
  // Toggle rating with half-star precision
  const handleClick = (index: number, e: React.MouseEvent<HTMLSpanElement>) => {
    setRating(getNewRating(index, rating, e));
    setHoverIndex(-1); // Reset hover state on click
  };

  // Event handler for hovering over a star
  const handleHover = (index: number, e: React.MouseEvent<HTMLSpanElement>) => {
    const newHoverIndex = getNewRating(index, hoverIndex, e);
    if (newHoverIndex !== hoverIndex) {
    setHoverIndex(getNewRating(index, rating, e));
    }
  }

  // Reset hover state on leave
  const handleLeave = () => setHoverIndex(-1);

  // Determine label text (either default text or "Rated X")
  const label = rating === -1 ? text : `Rated ${rating}`;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Star list (UI layer) */}
      <StarRatingList
        numOfStars={numOfStars}
        activeUntil={activeUntil}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        starSize={starSize}
        onHover={handleHover}
        onLeave={handleLeave}
        onClick={handleClick}
      />
      {/* Optional label (UI layer) */}
      {showLabel && <StarRatingLabel text={label} />}
    </div>
  );
};
export default StarRating;
