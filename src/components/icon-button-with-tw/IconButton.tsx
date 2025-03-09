import { MouseEventHandler } from 'react';
import './index.css';

type IconButtonProps = {
  icon: string;
  altText?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  altText,
  handleClick,
  className,
  ...props
}) => {
  return (
    // The button's className combines the tailwind CSS classes
    // with the additional class name passed through props
    <button
      className={`bg-transparent border-0 cursor-pointer text-lg p-1.5 hover:scale-110 transition-transform ${className}`}
      {...props}
      onClick={handleClick}
    >
      {/* The img className is defined by tailwind CSS classes */}
      <img src={icon} className="w-5 h-auto" alt={altText ?? 'icon button'} />
    </button>
  );
};

export default IconButton;
