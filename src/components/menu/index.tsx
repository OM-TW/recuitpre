import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext } from 'react';
import Button from '../button';
import Burger from './burger';
import Drawer from './drawer';
import './index.less';
import { REGISTRATION } from '@/settings/config';

const Menu = memo(() => {
  const [context] = useContext(Context);

  return (
    <div className='Menu'>
      <Drawer enabled={context[ActionType.Menu]?.enabled} />
      <div className='absolute top-8 right-8 flex flex-row space-x-5'>
        <Button onClick={() => window.open(REGISTRATION)}>
          <Button.MenuRegister revert={context[ActionType.Menu]?.enabled} />
        </Button>
        <Burger />
      </div>
    </div>
  );
});
export default Menu;
