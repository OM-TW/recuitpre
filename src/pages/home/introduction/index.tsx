import { memo, useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import './index.less';

const Introduction = memo(() => {
  useEffect(() => {}, []);
  return <Div100vh id='introduction' className='Introduction'></Div100vh>;
});
export default Introduction;
