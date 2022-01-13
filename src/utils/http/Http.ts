import Taro from '@tarojs/taro';

import type {
  RequestConfig,
  HttpResponse,
  HttpError,
  CreateRequestOptions,
  RequestOptions,
  ResultModel,
} from './typing';
import * as requestCanceler from './requestCanceler';
import { matchHttpStatusCode } from './handleStatus';

export enum ContentTypeEnum {
  // json
  JSON = 'application/json',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded',
  // form-data  upload
  FORM_DATA = 'multipart/form-data',
}

export default class Http {
  private instance: any;
  private readonly options: CreateRequestOptions;

  constructor(options: CreateRequestOptions) {
    this.options = options;
    this.instance = Taro.request;
    // this.setupInterceptors();
  }

  // 基础请求
  request<T = any>(config: RequestConfig, options?: RequestOptions): Promise<T> {
    config = {
      ...config,
      url: `${this.options?.baseURL}${config.url}`,
    };

    // 设置 opt 到 config 对象中，这样可以在拦截器中拿到
    const conf: CreateRequestOptions = {
      ...config,
      requestOptions: { ...this.options?.requestOptions, ...options }, // 覆盖实例中的设置
    };

    // request 拦截器
    //// showLoading
    const { ignoreCancelToken, withToken } = conf.requestOptions || {};
    // 携带 token
    if (withToken) {
      const token = 'xxx';
      config.header = {
        ...config.header,
        Authorization: `Bearer ${token}`,
      };
    }

    const errorMessageMode = conf?.requestOptions?.errorMessageMode;

    return new Promise((resolve, reject) => {
      const task = this.instance({
        ...config,
        // https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html#%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0
        success: (response: HttpResponse<ResultModel>) => {
          //// hideLoading
          requestCanceler.removePending(config);

          if (response.statusCode === 200) {
            const res = response.data;
            resolve(res as unknown as Promise<T>);
            return;
          }

          // 请求已发出，但是不在 2xx 的范围
          const errMessage = matchHttpStatusCode(response.statusCode);
          if (errMessage) {
            if (errorMessageMode === 'modal') {
              console.warn('modal tips', errMessage);
            } else if (errorMessageMode === 'message') {
              console.warn('message tips', errMessage);
            }
          }
        },
        fail: (error: HttpError) => {
          //// hideLoading

          let errMessage = error.errMsg;
          if (error.errMsg.indexOf('abort') !== -1) {
            errMessage = '请求取消';
          }
          if (errMessage) {
            if (errorMessageMode === 'modal') {
              console.warn('modal tips', errMessage);
            } else if (errorMessageMode === 'message') {
              console.warn('message tips', errMessage);
            }
          }

          reject(error);
        },
      });

      !ignoreCancelToken && requestCanceler.addPending(config, task);
    });
  }

  get<T = any>(config: RequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'GET' }, options);
  }

  post<T = any>(config: RequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'POST' }, options);
  }
}
