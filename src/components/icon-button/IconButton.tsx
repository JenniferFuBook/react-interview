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
  ...props
}) => {
  return (
    <button {...props} onClick={handleClick}>
      <img src={icon} className="icon" alt={altText || 'icon button'} />
    </button>
  );
};

export default IconButton;
