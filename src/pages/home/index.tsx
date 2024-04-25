import { hash } from '@/common';
import Logo from '@/components/logo';
import Menu from '@/components/menu';
import useInfo from '@/hooks/useInfo';
import { MENU_ITEMS } from '@/settings/config';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import ReactFullpage from '@fullpage/react-fullpage';
import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect, useState } from 'react';
import { HomeContext, HomeState, HomeStepType, THomeState } from './config';
import Exclusive from './exclusive';
import Footer from './footer';
import './index.less';
import Introduction from './introduction';
import Landing from './landing';
import Position from './position';
import Process from './process';
import Values from './values';

declare global {
  interface Window {
    fullpage_api: any;
  }
}

const Home = memo(() => {
  const [, setContext] = useContext(Context);

  const [state, setState] = useState<THomeState>(HomeState);
  const { step } = state;

  useEffect(() => {
    if (step === HomeStepType.fontLoaded) {
      setContext({ type: ActionType.News, state: { enabled: true } });
    }
  }, [step]);

  const [info] = useInfo();

  useEffect(() => {
    if (info) {
      const [state] = info.data;
      setContext({ type: ActionType.Info, state });
    }
  }, [info]);

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
            afterRender={() => {
              setContext({ type: ActionType.Api, state: window.fullpage_api });
              const index = MENU_ITEMS.findIndex(
                (item) => item.hash === window.location.hash.slice(1),
              );
              window.fullpage_api.moveTo(index + 2);
            }}
            licenseKey={'YOUR_KEY_HERE'}
            navigation={true}
            scrollingSpeed={1000}
            onLeave={(_, destination) => {
              const currentHash = hash[destination.index];
              window.location.hash = currentHash;
            }}
            credits={{ enabled: false, label: '', position: 'right' }}
            render={() => (
              <ReactFullpage.Wrapper>
                <Landing />
                <Introduction />
                <Values />
                <Position />
                <Process />
                <Exclusive />
                <Footer />
              </ReactFullpage.Wrapper>
            )}
          />
          <Logo />
          <Menu />
        </HomeContext.Provider>
      </div>
    </OnloadProvider>
  );
});

export default Home;
