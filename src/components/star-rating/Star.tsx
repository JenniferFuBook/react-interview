type StarProps = {
  index: number;
  fill: 0 | 1; // 0 = empty, 1 = full
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
    <span
      data-star-index={index} // Assign a data attribute for star identification
      style={{
        color: fill ? activeColor : inactiveColor, // Conditional coloring (active vs inactive)
        fontSize: starSize, // Control size of the star
        cursor: 'pointer', // Indicate interactivity
      }}
    >
      ★ {/* Unicode star character */}
    </span>
  );
};
