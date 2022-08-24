/* eslint-disable no-empty */
/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useEffect} from 'react';
import {LogBox} from 'react-native';

import {Storage} from './services';

type Props = {
  setToken(token: boolean): void;
};

const Started: FC<Props> = ({setToken}) => {
  const bootstrap = async (): Promise<void> => {
    try {
      LogBox.ignoreAllLogs();

      const token = await Storage.getToken();

      if (token) {
        setToken(!!token);
      }
    } catch (error) {}
  };

  useEffect(() => {
    bootstrap();
  }, []);
  return null;
};

export default Started;
