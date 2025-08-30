type StarProps = {
  index: number;
  fill: 0 | 1; // 0 = empty, 1 = full
  activeColor: string;
  inactiveColor: string;
  starSize: string;
  onHover: (index: number) => void;
  onLeave: () => void;
  onClick: (index: number) => void;
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
        color: fill ? activeColor : inactiveColor, // Conditional coloring
        fontSize: starSize, // Control size of the star
        cursor: 'pointer', // Indicate interactivity
      }}
      onMouseEnter={() => onHover(index)} // Trigger hover event
      onMouseLeave={onLeave} // Reset on leave
      onClick={() => onClick(index)} // Update rating on click
    >
      ★ {/* Unicode star character */}
    </span>
  );
};
