import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import './index.less';
import { MENU_ITEMS } from '@/settings/config';

const Logo = memo(() => {
  const [context] = useContext(Context);
  const enabled = context[ActionType.Menu]?.enabled;
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    window.addEventListener('hashchange', () => setHash(window.location.hash));
  }, []);

  const state = useMemo(() => {
    if (enabled) return true;
    else if (MENU_ITEMS[1].hash === hash.slice(1)) return true;
    return false;
  }, [hash, enabled]);

  return <div className={twMerge('Logo', state ? 'bg-white' : 'bg-black')} />;
});
export default Logo;
