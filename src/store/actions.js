const actions = {
    setToken({commit}, data) {
        return new Promise((resolve) => {
            commit('setToken', data);
            resolve();
        })
    },
}

export default actions;