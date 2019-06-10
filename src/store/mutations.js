import { setToken } from '@/util/util'

const mutations = {
    setToken(_state, data) {
        _state.token = data.token;
        setToken(data.token);
    }
}

export default mutations;