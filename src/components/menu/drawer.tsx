import { memo, useEffect } from 'react';
import './drawer.less';
import Div100vh from 'react-div-100vh';
import { twMerge } from 'tailwind-merge';
import Button from '../button';
import { SOCIAL } from '@/settings/config';

type T = {
  enabled?: boolean;
};

const Drawer = memo(({ enabled }: T) => {
  useEffect(() => {}, [enabled]);
  return (
    <Div100vh className='Drawer'>
      <div className={twMerge(enabled ? 'open' : 'close')}>
        <div className='context'>
          <div></div>
          <div>
            <h2>台灣奧美新人才來計劃聯絡資訊</h2>
            <span>Contact us</span>
            <div>
              <div className='contacts'>
                <a className='underline' href='mailto:xxx'>
                  Nick Shih
                </a>
                <a className='underline' href='mailto:xxx'>
                  Robert Kung
                </a>
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
