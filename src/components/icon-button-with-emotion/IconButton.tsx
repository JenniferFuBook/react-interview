import { MouseEventHandler } from 'react';
import * as Styled from './styles';

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
  return (
    <Styled.Button {...props} onClick={handleClick}> {/* Use the styled button component */}
      <Styled.Img src={icon} alt={altText || 'icon button'} /> {/* Use the styled img component */}
    </Styled.Button>
  );
};

export default IconButton;
