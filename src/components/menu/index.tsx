import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext } from 'react';
import Button from '../button';
import Burger from './burger';
import Drawer from './drawer';
import './index.less';

const Menu = memo(() => {
  const [context, setContext] = useContext(Context);

  return (
    <div className='Menu'>
      <Drawer enabled={context[ActionType.Menu]?.enabled} />
      <div className='absolute right-8 top-8 flex flex-row space-x-5'>
        <Button onClick={() => setContext({ type: ActionType.News, state: { enabled: true } })}>
          <Button.News />
        </Button>
        <Button onClick={() => setContext({ type: ActionType.Alert, state: { enabled: true } })}>
          <Button.MenuRegister revert={context[ActionType.Menu]?.enabled} />
        </Button>
        <Burger />
      </div>
    </div>
  );
});
export default Menu;
