import { MENU_ITEMS, SOCIAL } from '@/settings/config';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { CommaStringToList } from 'lesca-comma-string';
import { memo, useContext, useMemo } from 'react';
import Div100vh from 'react-div-100vh';
import { twMerge } from 'tailwind-merge';
import Button from '../button';
import './drawer.less';

type T = {
  enabled?: boolean;
};

const Item = memo(({ data }: { data: (typeof MENU_ITEMS)[number] }) => {
  const [context, setContext] = useContext(Context);
  const api = context[ActionType.Api];
  const index = MENU_ITEMS.findIndex((item) => item.hash === data.hash);

  return (
    <Button
      className='menuRegular'
      onClick={() => {
        if (data.hash === 'popup') {
          setContext({ type: ActionType.News, state: { enabled: true } });
        } else {
          window.location.hash = data.hash;
          api?.moveTo(index + 2);
        }
        setContext({ type: ActionType.Menu, state: { enabled: false } });
      }}
    >
      <Button.MenuRegular>
        <span>{data.name}</span>
        <span>{data.subName}</span>
      </Button.MenuRegular>
    </Button>
  );
});

const Contact = memo(() => {
  const [context] = useContext(Context);
  const info = context[ActionType.Info];

  const data = useMemo(() => {
    if (info) {
      return CommaStringToList(info.contacts, ['email', 'name']);
    }
  }, [info]);

  return (
    <div>
      <h2>台灣奧美新人才來計劃聯絡資訊</h2>
      <span>Contact us</span>
      <div>
        <div className='contacts'>
          {data &&
            data.map((item) => {
              return (
                <a key={JSON.stringify(item)} className='underline' href={`mailto:${item.email}`}>
                  {item.name}
                </a>
              );
            })}
        </div>
        <div className='socials'>
          <Button onClick={() => window.open(SOCIAL.Facebook)}>
            <Button.Facebook />
          </Button>
          <Button onClick={() => window.open(SOCIAL.Instagram)}>
            <Button.Instagram />
          </Button>
        </div>
      </div>
    </div>
  );
});

const Drawer = memo(({ enabled }: T) => {
  const currentItems = useMemo(() => {
    const front = MENU_ITEMS.filter((_, index) => index < 2);
    front.unshift({ name: '最新消息', subName: 'news', hash: 'popup' });
    const back = MENU_ITEMS.filter((_, index) => index >= 2);
    return [front, back];
  }, [MENU_ITEMS]);

  return (
    <Div100vh className='Drawer'>
      <div className={twMerge(enabled ? 'open' : 'close')}>
        <div className='context'>
          <div>
            <div className='flex w-full flex-col space-y-5 lg:flex-row lg:space-y-0'>
              {currentItems.map((items, index) => (
                <div
                  className='flex w-full flex-col items-start justify-start space-y-5 lg:w-1/2'
                  key={index}
                >
                  {items.map((item, i) => (
                    <Item key={i} data={item} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Contact />
        </div>
      </div>
    </Div100vh>
  );
});
export default Drawer;
