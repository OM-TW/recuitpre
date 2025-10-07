import { IReactProps } from '@/settings/type';
import { memo } from 'react';

const Block = memo(({ children }: IReactProps) => (
  <div className='Block relative h-full w-full px-5 py-10 md:px-12 lg:px-24'>{children}</div>
));
export default Block;
