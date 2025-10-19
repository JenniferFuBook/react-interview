import { MouseEventHandler } from 'react';
import './index.css';

type IconButtonProps = {
  icon: string;
  altText?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({
  icon,
  altText,
  handleClick,
  className,
  ...props
}: IconButtonProps) => {
  return (
    // The button's className combines Tailwind CSS classes with 
    // any additional class names passed through props, allowing 
    // for further customization. The used Tailwind classes include:
    // - bg-transparent: Sets the background color to transparent
    // - border-0: Sets the border width to 0
    // - cursor-pointer: Sets the cursor shape to a pointing hand on hover
    // - text-lg: Sets the font size to 16px (large)
    // - p-1.5: Sets the padding to 0.375rem (1.5 times the default padding)
    // - hover:scale-110: Scales the button up by 10% on hover, creating a visual effect
    // - transition-transform: Enables a smooth transition for the 
    //   transform property, making the scaling effect more visually appealing
    <button
      className={`bg-transparent border-0 cursor-pointer text-lg p-1.5 hover:scale-110 transition-transform ${className}`}
      {...props}
      onClick={handleClick}
    >
      {/* The img className is defined by Tailwind CSS classes:
          - w-5: Sets the width of the image to 20px (5 times the default width)
          - h-auto: Sets the height of the image to automatic, maintaining aspect ratio
      */}
      <img src={icon} className="w-5 h-auto" alt={altText ?? 'icon button'} />
    </button>
  );
};

export default IconButton;
