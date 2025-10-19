import { MouseEventHandler, useEffect } from 'react';

type IconButtonProps = {
  icon: string;
  altText?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({
  icon,
  altText,
  handleClick,
  ...props
}: IconButtonProps) => {
  useEffect(() => {
    import('./index.css'); // Dynamically import the CSS file to prevent interference with global styles
  }, []);
  return (
    <button {...props} onClick={handleClick}>
      <img src={icon} className="icon" alt={altText ?? 'icon button'} />
    </button>
  );
};

export default IconButton;
