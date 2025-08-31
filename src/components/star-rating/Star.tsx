type StarProps = {
  index: number;
  fill: 0 | 0.5 | 1; // 0 = empty, 0.5 = half, 1 = full
  activeColor: string;
  inactiveColor: string;
  starSize: string;
  onHover: (index: number, e: React.MouseEvent<HTMLSpanElement>) => void;
  onLeave: () => void;
  onClick: (index: number, e: React.MouseEvent<HTMLSpanElement>) => void;
};

export const Star: React.FC<StarProps> = ({
  index,
  fill,
  activeColor,
  inactiveColor,
  starSize,
  onHover,
  onLeave,
  onClick,
}) => {
  return (
    <span
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
      onMouseMove={(e) => onHover(index, e)} // Trigger hover event
      onMouseLeave={onLeave} // Reset on leave
      onClick={(e) => onClick(index, e)} // Update rating on click
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
          transition: `width 200ms ease-in-out`
        }}
      >
        ★ {/* Unicode star character */}
      </span>
    </span>
  );
};
