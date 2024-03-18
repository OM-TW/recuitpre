import { Context } from '@/settings/constant';
import { memo, useContext, useEffect } from 'react';
import Button from '../button';
import './index.less';
import { ActionType } from '@/settings/type';

const Menu = memo(() => {
  const [context] = useContext(Context);

  useEffect(() => {}, []);
  return (
    <div className='Menu'>
      <Button>
        <Button.MenuRegister revert={context[ActionType.Menu]?.enabled} />
      </Button>
      <div className='burger'>
        {[...new Array(3).keys()].map((index) => {
          return <div key={`b${index}`} />;
        })}
      </div>
    </div>
  );
});
export default Menu;
