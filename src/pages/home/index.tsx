import Logo from '@/components/logo';
import Menu from '@/components/menu';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import ReactFullpage from '@fullpage/react-fullpage';
import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect, useState } from 'react';
import { HomeContext, HomeState, HomeStepType, THomeState } from './config';
import './index.less';
import Introduction from './introduction';
import Landing from './landing';
import Values from './values';
import Position from './position';
import Process from './process';
import Exclusive from './exclusive';
import Footer from './footer';

const hash = window.location.hash;

const Home = memo(() => {
  const [, setContext] = useContext(Context);

  const [state, setState] = useState<THomeState>(HomeState);
  const { step } = state;

  useEffect(() => {
    if (step === HomeStepType.fontLoaded) {
      window.location.hash = '';
      setTimeout(() => {
        window.location.hash = hash;
        setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
      }, 400);
      // getData();
    } else window.location.hash = '';
  }, [step]);

  return (
    <OnloadProvider
      onload={() => {
        setState((S) => ({ ...S, step: HomeStepType.loaded }));
        document.fonts.ready.then(() => {
          setState((S) => ({ ...S, step: HomeStepType.fontLoaded }));
        });
      }}
    >
      <div className='Home'>
        <HomeContext.Provider value={[state, setState]}>
          <ReactFullpage
            //fullpage options
            licenseKey={'YOUR_KEY_HERE'}
            scrollingSpeed={1000}
            credits={{ enabled: false, label: '', position: 'right' }}
            render={() => {
              return (
                <ReactFullpage.Wrapper>
                  <Landing />
                  <Introduction />
                  <Values />
                  <Position />
                  <Process />
                  <Exclusive />
                  <Footer />
                </ReactFullpage.Wrapper>
              );
            }}
          />
          <Logo />
          <Menu />
        </HomeContext.Provider>
      </div>
    </OnloadProvider>
  );
});

export default Home;
