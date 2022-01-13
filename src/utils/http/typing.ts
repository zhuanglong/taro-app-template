import Taro from '@tarojs/taro';

export interface RequestOptions {
  errorMessageMode?: 'none' | 'modal' | 'message' | undefined; // 消息提示类型
  ignoreCancelToken?: boolean; // 忽略重复请求
  withToken?: boolean; // 是否携带 token
}

export interface RequestConfig extends Taro.request.Option {
  baseURL?: string;
}

export type HttpResponse<T> = Taro.request.SuccessCallbackResult<T>;

// node_modules\@tarojs\taro\types\global.d.ts
export interface HttpError {
  errMsg: string;
}

// 扩展请求配置
export interface CreateRequestOptions extends RequestConfig {
  requestOptions?: RequestOptions;
}

// 后台统一的字段
export interface ResultModel<T = any> {
  code: number;
  message: string;
  data: T;
}
