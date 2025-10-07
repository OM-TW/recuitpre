import { memo } from 'react';
import Div100vh from 'react-div-100vh';
import './index.less';

const Landing = memo(() => (
  <div className='section'>
    <Div100vh className='Landing'>
      <div className='symbols'>
        <div className='headline' />
      </div>
      <div className='cfa'>
        <div className='text'>SCROLL</div>
        <div className='arrow' />
      </div>
    </Div100vh>
  </div>
));
export default Landing;
