/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

import {interceptRequest} from './interceptors';

const timeout = 30000;

const baseURL = __DEV__ ? '' : '';

const request = axios.create({
  baseURL,
  timeout,
});

request.interceptors.request.use((config: any) => interceptRequest(config));

export default request;
