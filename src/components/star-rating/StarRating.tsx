import { useState } from 'react';
import { StarRatingList } from './StarRatingList';
import { StarRatingLabel } from './StarRatingLabel';
import { calculateNewRating } from './utils';
import './index.css';

type StarRatingProps = {
  // Initial rating (1-based; -1 means "not rated")
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
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Use a utility function to obtain the index of the clicked star
    const index = calculateNewRating(e);
    if (index !== undefined) {
      // Determine new rating (toggle if same star clicked)
      const newRating = index === rating ? index - 0.5 : index;
      setRating(newRating);
      setHoverIndex(-1); // Reset hover state on click
    }
  };

  // Event handler for hovering over a star
  const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    // Use a utility function to obtain the index of the hover star
    const index = calculateNewRating(e);
    if (index !== undefined && index !== hoverIndex) {
      setHoverIndex(index);
    }
  };

  // Reset hover state on leave
  const handleLeave = () => setHoverIndex(-1);

  // Determine label text (either default text or "Rated X")
  const label = rating > 0 ? `Rated ${rating}` : text;

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
        hoverIndex={hoverIndex}
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
