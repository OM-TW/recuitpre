import Article from '@/components/article';
import Button from '@/components/button';
import { CONTACT } from '@/settings/config';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext } from 'react';
import Div100vh from 'react-div-100vh';
import './index.less';

const Info = memo(() => {
  return (
    <div className='w-full h-52 bg-black flex justify-center relative'>
      <div className='max-w-[500px] lg:max-w-[768px] w-full h-full flex flex-col justify-center items-center space-y-3'>
        <p className='w-full text-left text-white text-xl'>台灣奧美新人才來計劃聯絡資訊</p>
        <p className='w-full text-left text-white space-x-7'>
          {CONTACT.map((data) => {
            return (
              <a
                key={JSON.stringify(data)}
                href={`mailto:${data.email}`}
                className='text-base underline underline-offset-4 font-light font-noto-regular hover:bg-white hover:text-black'
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
          window.scrollTo(0, 0);
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
    <Div100vh id='footer' className='Footer'>
      <Article>
        <div className='w-full h-full flex flex-col justify-start items-center'>
          <div className='w-full flex-1 flex justify-center items-center flex-col'>
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
  );
});
export default Footer;
