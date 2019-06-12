import { setToken, setSession } from '@/util/util'

const mutations = {
    setToken(_state, data) {
        _state.token = data.token;
        setToken(data.token, data.expires);
    },
    setUser(_state, data) {
        _state.user = data;
        setSession('user', data);
    }
}

export default mutations;