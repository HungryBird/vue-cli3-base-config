import { axiosHttp } from '@/util/ajax'

export default {
    GetDbsx(option, headers = {}) {
        return axiosHttp('/api/CheckApi/GetDbsx', 'get', option, headers);
    }
}