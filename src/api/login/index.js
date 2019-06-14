import { axiosHttp } from '@/util/ajax'

export default {
    Login(option, headers = {}) {
        return axiosHttp('/api/CheckApi/Login', 'post', option, headers);
    },
    test(option, headers = {}) {
        return axiosHttp('/test', 'get', option, headers);
    }
}