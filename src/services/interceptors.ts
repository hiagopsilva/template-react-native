import {AxiosRequestConfig} from 'axios';

import {Storage} from '.';

type CustomRequest = {
  authorization?: string;
};

export const interceptRequest = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig & CustomRequest> => {
  const token = await Storage.getToken();

  if (!token) {
    return {
      ...config,
      headers: {
        ...config.headers,
      },
    };
  }

  return {
    ...config,
    headers: {
      ...config.headers,
      token,
    },
  };
};
