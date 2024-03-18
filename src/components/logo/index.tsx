import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import './index.less';

const Logo = memo(() => {
  const [context] = useContext(Context);

  return (
    <div className={twMerge('Logo', context[ActionType.Menu]?.enabled ? 'bg-white' : 'bg-black')} />
  );
});
export default Logo;
