type StarProps = {
  index: number;
  fill: 0 | 0.5 | 1; // 0 = empty, 0.5 = half, 1 = full
  activeColor: string;
  inactiveColor: string;
  starSize: string;
  hoverIndex: number;
};

export const Star: React.FC<StarProps> = ({
  index,
  fill,
  activeColor,
  inactiveColor,
  starSize,
  hoverIndex,
}) => {
  return (
    <span // Container for stars
      // Dynamically apply the bounce animation to whichever star is hovered
      className={
        hoverIndex === index || hoverIndex === index - 0.5 ? 'bounce' : '' 
      }
      data-star-index={index} // Assign a data attribute for star identification
      style={{
        position: 'relative',
        display: 'inline-block',
        // Control size of the star
        width: starSize,
        height: starSize,
        fontSize: starSize,
        lineHeight: 1,
        cursor: 'pointer', // Indicate interactivity
      }}
    >
      {/* Base (inactive) star */}
      <span
        style={{
          color: inactiveColor,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        ★ {/* Unicode star character */}
      </span>

      {/* Foreground (active) star with clip */}
      <span
        style={{
          color: activeColor,
          position: 'absolute',
          top: 0,
          left: 0,
          width: fill === 1 ? '100%' : fill === 0.5 ? '50%' : '0%',
          height: '100%',
          overflow: 'hidden',
          // Smoothly interpolate width changes when a star fills or empties
          transition: 'width 0.2s ease-in-out', 
        }}
      >
        ★ {/* Unicode star character */}
      </span>
    </span>
  );
};
