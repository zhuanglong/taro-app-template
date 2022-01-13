import Http, { ContentTypeEnum } from './Http';
import { getAppEnvConfig } from '@/utils/appEnv';

const { baseURL } = getAppEnvConfig();

export const defHttp = new Http({
  baseURL,
  url: '',
  timeout: 30 * 1000,
  header: { 'content-type': ContentTypeEnum.JSON },
  requestOptions: {
    errorMessageMode: 'message', // 消息提示类型
    ignoreCancelToken: false, // 忽略重复请求
    withToken: false, // 是否携带 token
  },
});

// other
export const testHttp = new Http({
  baseURL: '',
  url: '',
  requestOptions: {
    errorMessageMode: 'message', // 消息提示类型
    ignoreCancelToken: true, // 保留重复请求
    withToken: false, // 是否携带 token
  },
});
