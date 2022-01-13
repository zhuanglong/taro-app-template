import Taro from '@tarojs/taro';
import type { RequestConfig } from './typing';

interface Canceler {
  (): void;
}

// 队列
const pendingMap = new Map<string, Canceler>();

function getPendingUrl(config: RequestConfig): string {
  return [
    config.method,
    config.url,
    // JSON.stringify(config.params),
    JSON.stringify(config.data),
  ].join('&');
}

// 添加请求到队列
export function addPending(config: RequestConfig, task: Taro.RequestTask<any>) {
  removePending(config);
  const url = getPendingUrl(config);
  if (!pendingMap.has(url)) {
    pendingMap.set(url, task.abort);
  }
}

// 取消请求
export function removePending(config: RequestConfig) {
  const url = getPendingUrl(config);
  if (pendingMap.has(url)) {
    const cancel = pendingMap.get(url);
    cancel?.();
    pendingMap.delete(url);
  }
}

// 取消所有请求
export function removeAllPending() {
  pendingMap.forEach((cancel) => cancel?.());
  pendingMap.clear();
}
