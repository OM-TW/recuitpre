import { IReactProps } from '@/settings/type';
import Facebook from './facebook';
import Instagram from './instagram';
import MenuRegister from './menuRegister';
import MenuRegular from './menuRegular';
import Position from './position';
import OutlineWithArrow from './outlineWifthArrow';

type T = IReactProps & {
  onClick?: () => void;
  className?: string;
  onMouseOver?: () => void;
};

const Button = ({ children, onClick, className, onMouseOver }: T) => {
  return (
    <button className={className} onClick={onClick} onMouseOver={onMouseOver}>
      {children}
    </button>
  );
};

Button.MenuRegister = MenuRegister;
Button.Facebook = Facebook;
Button.Instagram = Instagram;
Button.MenuRegular = MenuRegular;
Button.Position = Position;
Button.OutlineWithArrow = OutlineWithArrow;

export default Button;
