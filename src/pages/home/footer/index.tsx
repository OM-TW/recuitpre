import Article from '@/components/article';
import Button from '@/components/button';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { CommaStringToList } from 'lesca-comma-string';
import { memo, useContext, useMemo } from 'react';
import Div100vh from 'react-div-100vh';
import './index.less';

const Info = memo(() => {
  const [context] = useContext(Context);
  const api = context[ActionType.Api];

  const info = context[ActionType.Info];

  const contact = useMemo(() => {
    if (info) {
      return CommaStringToList(info.contacts, ['email', 'name']);
    }
  }, [info]);

  return (
    <div className='relative flex h-52 w-full justify-center bg-black'>
      <div className='flex h-full w-full max-w-[500px] flex-col items-center justify-center space-y-3 lg:max-w-[768px]'>
        <p className='w-full text-left text-xl text-white'>台灣奧美新人才來計劃聯絡資訊</p>
        <p className='w-full space-x-7 text-left text-white'>
          {contact &&
            contact.map((data) => {
              return (
                <a
                  key={JSON.stringify(data)}
                  href={`mailto:${data.email}`}
                  className='font-noto-regular text-base font-light underline underline-offset-4 hover:bg-white hover:text-black'
                >
                  {data.name}
                </a>
              );
            })}
        </p>
      </div>
      <Button
        className='scrollTopButton'
        onClick={() => {
          api?.moveTo(1);
        }}
      >
        <div />
      </Button>
    </div>
  );
});

const Footer = memo(() => {
  const [, setContext] = useContext(Context);
  return (
    <div className='section'>
      <Div100vh className='Footer'>
        <Article>
          <div className='flex h-full w-full flex-col items-center justify-start'>
            <div className='flex w-full flex-1 flex-col items-center justify-center'>
              <h1>來吧，這場遊戲，你一定贏！</h1>
              <Button
                className='register'
                onClick={() => {
                  setContext({ type: ActionType.Alert, state: { enabled: true } });
                }}
              >
                <div className='texts'>
                  <span>立即報名</span>
                  <span>REGISTER</span>
                </div>
                <div className='arrow'></div>
                <div className='symbols'></div>
              </Button>
            </div>
            <Info />
          </div>
        </Article>
      </Div100vh>
    </div>
  );
});
export default Footer;
