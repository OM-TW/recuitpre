import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import './menuRegular.less';

const MenuRegular = memo(({ children }: IReactProps) => <div>{children}</div>);
export default MenuRegular;
