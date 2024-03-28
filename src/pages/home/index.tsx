import Logo from '@/components/logo';
import Menu from '@/components/menu';
import useFullPage from '@/hooks/useFullPage';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import OnloadProvider from 'lesca-react-onload';
import { Suspense, lazy, memo, useContext, useEffect, useMemo, useState } from 'react';
import { HomeContext, HomePages, HomeState, HomeStepType, THomeState } from './config';
import './index.less';
import Landing from './landing';

const hash = window.location.hash;

const Home = memo(() => {
  const [, setContext] = useContext(Context);
  useFullPage();

  const [state, setState] = useState<THomeState>(HomeState);
  const { step } = state;

  const pages = useMemo(() => {
    if (step !== HomeStepType.unset) {
      return HomePages.filter((_, index) => index !== 0).map((data) => {
        const Element = lazy(() => import(`./${data.page}/index.tsx`));
        return (
          <Suspense fallback='' key={JSON.stringify(data)}>
            <Element />
          </Suspense>
        );
      });
    } else return null;
  }, [step]);

  useEffect(() => {
    if (step === HomeStepType.fontLoaded) {
      window.location.hash = '';
      setTimeout(() => {
        window.location.hash = hash;
      }, 400);
      // getData();
    } else window.location.hash = '';
  }, [step]);

  return (
    <OnloadProvider
      onload={() => {
        setState((S) => ({ ...S, step: HomeStepType.loaded }));
        setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
        document.fonts.ready.then(() => {
          setState((S) => ({ ...S, step: HomeStepType.fontLoaded }));
        });
      }}
    >
      <div className='Home'>
        <HomeContext.Provider value={[state, setState]}>
          <Landing />
          {(step !== HomeStepType.unset && pages) || null}
          <Logo />
          <Menu />
        </HomeContext.Provider>
      </div>
    </OnloadProvider>
  );
});

export default Home;
