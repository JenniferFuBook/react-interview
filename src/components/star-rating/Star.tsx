type StarProps = {
  index: number;
  fill: 0 | 0.5 | 1; // 0 = empty, 0.5 = half, 1 = full
  activeColor: string;
  inactiveColor: string;
  starSize: string;
};

export const Star: React.FC<StarProps> = ({
  index,
  fill,
  activeColor,
  inactiveColor,
  starSize,
}) => {
  return (
    <span // Container for stars
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
        }}
      >
        ★ {/* Unicode star character */}
      </span>
    </span>
  );
};
