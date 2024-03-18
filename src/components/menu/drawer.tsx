import { memo, useEffect } from 'react';
import './drawer.less';
import Div100vh from 'react-div-100vh';
import { twMerge } from 'tailwind-merge';

type T = {
  enabled?: boolean;
};

const Drawer = memo(({ enabled }: T) => {
  useEffect(() => {}, [enabled]);
  return (
    <Div100vh className='Drawer'>
      <div className={twMerge(enabled ? 'open' : 'close')}></div>
    </Div100vh>
  );
});
export default Drawer;
