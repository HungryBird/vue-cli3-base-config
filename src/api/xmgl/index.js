import { axiosHttp } from '@/util/ajax'

export default {
    GetXmList(option, headers = {}) {
        return axiosHttp('/api/Xm/GetXmList', 'get', option, headers);
    },
    EditXm(option, headers = {}) {
        return axiosHttp('/api/Xm/EditXm', 'post', option, headers);
    },
    GetXmxq(option, headers = {}) {
        return axiosHttp('/api/Xm/GetXmxq', 'get', option, headers);
    },
}