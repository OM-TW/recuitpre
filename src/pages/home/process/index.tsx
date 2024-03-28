import Article from '@/components/article';
import Block from '@/components/block';
import { memo, useState } from 'react';
import { ProcessContext, ProcessState } from './config';
import Grid from './grid';
import './index.less';

const Process = memo(() => {
  const value = useState(ProcessState);
  return (
    <div id='process' className='Process'>
      <ProcessContext.Provider value={value}>
        <Article>
          <Block>
            <h3>Process</h3>
            <h1>申請流程</h1>
          </Block>
          <Grid />
        </Article>
      </ProcessContext.Provider>
    </div>
  );
});
export default Process;
