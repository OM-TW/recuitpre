import { IReactProps } from '@/settings/type';
import MenuRegister from './menuRegister';

type T = IReactProps & {
  onClick?: () => void;
};

const Button = ({ children, onClick }: T) => {
  return <button onClick={onClick}>{children}</button>;
};

Button.MenuRegister = MenuRegister;

export default Button;
