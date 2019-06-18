import axios from 'axios'
import { baseConfig } from '@/util/config'
import { toLowerCase, getSession } from '@/util/util'
import store from '@/store/index'

export const axiosHttp = (url, type, option, headers = {}) => {
    const baseURL = baseConfig.baseURL;
    const token = store.getters.getToken;
    baseConfig.url = baseURL + url;
    baseConfig.method = type ? type : baseConfig.method;
    baseConfig.headers['X-Token'] = token ? token : 'null';
    if (JSON.stringify(headers) !== '{}') { // 头部是否存在参数
        for (const key in headers) {
            if (headers.hasOwnProperty(key)) {
                baseConfig.headers[key] = headers[key];
            }
        }
    }
    if (toLowerCase(baseConfig.method) === 'get') {
        baseConfig.params = option;
    }
    else if (toLowerCase(baseConfig.method) === 'post') {
        // data是对象但是赋值为字符串？还得清空params, 不懂为什么
        const user = getSession('user');
        if (user) {
            if (user.yhid) {
                const yhid = user.yhid;
                option.yhid = yhid;
            }
        }
        baseConfig.data = JSON.stringify(option)
        // baseConfig.data为json对象
        baseConfig.params = {};
    }
    return new Promise((resolve, reject) => {
        axios(baseConfig).then((response) => {
            resolve(response.data)
        })
        .catch((err) => {
            reject(err);
        })
    })
}