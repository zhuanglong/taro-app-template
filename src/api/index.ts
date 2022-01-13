import { defHttp, testHttp } from '@/utils/http';
import { getAppEnvConfig } from '@/utils/appEnv';

const { apiPrefix } = getAppEnvConfig();

interface Login {
  username: string;
  password: string | number;
}

// 获取 ip 信息
export function getCity() {
  return testHttp.get({
    url: 'https://pv.sohu.com/cityjson',
  });
}

// 登录
export function login(params: Login) {
  return defHttp.get({
    url: `${apiPrefix}/login`,
    data: params,
  });
}
