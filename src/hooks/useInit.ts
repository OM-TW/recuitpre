import { ActionType, TRespond } from '@/settings/type';
import Fetcher from 'lesca-fetcher';
import { useContext, useEffect, useState } from 'react';
import { REST_PATH } from '../settings/config';
import { Context } from '../settings/constant';

const useInit = () => {
  const [, setContext] = useContext(Context);
  const [state, setState] = useState<TRespond>();

  useEffect(() => {
    (async function () {
      setContext({ type: ActionType.LoadingProcess, state: { enabled: true } });
      const respond = (await Fetcher.post(REST_PATH.init, {
        collection: 'recruitNews',
      })) as TRespond;

      setState(respond);
      setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
    })();
  }, []);

  return [state] as const;
};
export default useInit;
