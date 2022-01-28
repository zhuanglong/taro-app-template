export interface AppEnvConfig {
  // 从 /config/dev|prod.js 中读取
  API_BASE_URL: string;
  API_PREFIX: string;
}

export function getAppEnvConfig() {
  return {
    baseURL: process.env.API_BASE_URL,
    apiPrefix: process.env.API_PREFIX,
  };
}

export function isDevMode(): boolean {
  return process.env.NODE_ENV === 'development';
}

export function isProdMode(): boolean {
  return process.env.NODE_ENV === 'production';
}
