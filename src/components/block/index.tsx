import { memo, useEffect } from 'react';
import { IReactProps } from '@/settings/type';
import './index.less';

const Block = memo(({ children }: IReactProps) => {
  useEffect(() => {}, []);
  return (
    <div className='Block w-full px-5 md:px-12 lg:px-24 h-full py-10 relative'>{children}</div>
  );
});
export default Block;
