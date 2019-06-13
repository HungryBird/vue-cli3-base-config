import { setToken, setSession } from '@/util/util'
import permissionList from '@/router/permissionList'
import parent from '@/router/parent'
import router from '@/router'

const mutations = {
    setToken(_state, data) {
        _state.token = data.token;
        setToken(data.token, data.expires);
    },
    setUser(_state, data) { // 保存user
        _state.user = data;
        setSession('user', data);
    },
    setPermissionList(_state, data) {
        const cd = data.cd;
        const asyncRouter = permissionList.filter((route) => {
            return cd.indexOf(route.name) !== -1;
        })
        parent.children = [...asyncRouter, ...parent.children];
        router.addRoutes([parent])
    }
}

export default mutations;