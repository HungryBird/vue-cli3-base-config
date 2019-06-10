const actions = {
    setToken(_vuex, data) {
        return new Promise((resolve) => {
            _vuex.commit('setToken', data);
            resolve();
        })
    }
}

export default actions;