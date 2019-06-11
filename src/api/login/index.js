import { axiosHttp } from '@/util/ajax'

export default {
    login(option, headers = {}) {
        return axiosHttp('/login', 'post', option, headers);
    },
    test(option, headers = {}) {
        return axiosHttp('/test', 'get', option, headers);
    }
}