const actions = {
    setToken({commit}, data) {
        return new Promise((resolve) => {
            commit('setToken', data);
            resolve();
        })
    },
    setUser({commit}, data) {
        return new Promise((resolve) => {
            commit('setUser', data);
            commit('setPermissionList', data)
            resolve();
        })
    }
}

export default actions;