import { memo, useEffect } from 'react';
import './index.less';
import Div100vh from 'react-div-100vh';

const Landing = memo(() => {
  useEffect(() => {}, []);
  return <Div100vh id='home' className='Landing'></Div100vh>;
});
export default Landing;
