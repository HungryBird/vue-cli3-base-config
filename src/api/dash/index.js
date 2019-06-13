import { axiosHttp } from '@/util/ajax'

export default {
    getTasks(option, headers = {}) {
        return axiosHttp('/getTasks', 'get', option, headers);
    }
}