const actions = {
    setToken({commit}, data) {
        return new Promise((resolve) => {
            commit('setToken', data);
            resolve();
        })
    },
    loginInit({commit}, data) { // 登录初始化
        return new Promise((resolve) => {
            commit('setUser', data);
            commit('setPermissionList', data);
            commit('initId', data.id);  // 保存id方便判断是否刷新页面
            resolve();
        })
    },
    afterRefresh({commit}, data) {  // 刷新之后执行的方法
        return new Promise((resolve) => {
            commit('setPermissionList', data);
            commit('initId', data.id);
            resolve();
        })
    }
}

export default actions;