import { axiosHttp } from '@/util/ajax'

export default {
    GetDropSelectList(option, headers = {}) {
        return axiosHttp('/api/Yh/GetDropSelectList', 'get', option, headers);
    },
}