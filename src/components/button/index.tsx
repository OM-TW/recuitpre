import { IReactProps } from '@/settings/type';
import MenuRegister from './menuRegister';
import Facebook from './facebook';
import Instagram from './instagram';

type T = IReactProps & {
  onClick?: () => void;
};

const Button = ({ children, onClick }: T) => {
  return <button onClick={onClick}>{children}</button>;
};

Button.MenuRegister = MenuRegister;
Button.Facebook = Facebook;
Button.Instagram = Instagram;

export default Button;
