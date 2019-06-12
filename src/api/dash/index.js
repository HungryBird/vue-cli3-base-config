import { axiosHttp } from '@/util/ajax'

export default {
    getTasks(option, headers = {}) {
        return axiosHttp('/getTask', 'get', option, headers);
    }
}