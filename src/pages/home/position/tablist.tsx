import Button from '@/components/button';
import { memo, useContext } from 'react';
import { PositionContext } from './config';
import './index.less';

const Tablist = memo(() => {
  const [state, setState] = useContext(PositionContext);

  return (
    <div className='w-full flex flex-row mt-12 space-x-5'>
      <Button className='w-1/2' onClick={() => setState((S) => ({ ...S, index: 0 }))}>
        <Button.Position job='廣告業務' eng='Account Executive' active={state.index === 0} />
      </Button>
      <Button className='w-1/2' onClick={() => setState((S) => ({ ...S, index: 1 }))}>
        <Button.Position job='公關專員' eng='Account Executive' active={state.index === 1} />
      </Button>
    </div>
  );
});
export default Tablist;
