import { memo, useEffect } from 'react';
import './index.less';
import Div100vh from 'react-div-100vh';

const Landing = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='section'>
      <Div100vh id='home' className='Landing'>
        <div className='symbols'>
          <div className='headline' />
        </div>
        <div className='cfa'>
          <div className='text'>SCROLL</div>
          <div className='arrow' />
        </div>
      </Div100vh>
    </div>
  );
});
export default Landing;
