import { IReactProps } from '@/settings/type';
import Facebook from './facebook';
import Instagram from './instagram';
import MenuRegister from './menuRegister';
import MenuRegular from './menuRegular';
import Position from './position';

type T = IReactProps & {
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: T) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.MenuRegister = MenuRegister;
Button.Facebook = Facebook;
Button.Instagram = Instagram;
Button.MenuRegular = MenuRegular;
Button.Position = Position;

export default Button;
