import { CONTACT, MENU_ITEMS, SOCIAL } from '@/settings/config';
import { memo, useContext, useMemo } from 'react';
import Div100vh from 'react-div-100vh';
import { twMerge } from 'tailwind-merge';
import Button from '../button';
import './drawer.less';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';

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
        window.location.hash = data.hash;
        api?.moveTo(index + 2);
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

const Drawer = memo(({ enabled }: T) => {
  const currentItems = useMemo(() => {
    const front = MENU_ITEMS.filter((_, index) => index < 3);
    const back = MENU_ITEMS.filter((_, index) => index >= 3);
    return [front, back];
  }, [MENU_ITEMS]);

  return (
    <Div100vh className='Drawer'>
      <div className={twMerge(enabled ? 'open' : 'close')}>
        <div className='context'>
          <div>
            <div className='flex flex-col lg:flex-row w-full space-y-5 lg:space-y-0'>
              {currentItems.map((items, index) => (
                <div
                  className='w-full lg:w-1/2 space-y-5 flex flex-col justify-start items-start'
                  key={index}
                >
                  {items.map((item, index2) => (
                    <Item key={index2} data={item} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2>台灣奧美新人才來計劃聯絡資訊</h2>
            <span>Contact us</span>
            <div>
              <div className='contacts'>
                {CONTACT.map((data) => {
                  return (
                    <a
                      key={JSON.stringify(data)}
                      className='underline'
                      href={`mailto:${data.email}`}
                    >
                      {data.name}
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
        </div>
      </div>
    </Div100vh>
  );
});
export default Drawer;
