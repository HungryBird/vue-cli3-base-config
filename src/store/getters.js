const getters = {
    getToken(_state) {
        return _state.token;
    },
    getUser(_state) {
        return _state.user;
    },
    getId(_state) {
        return _state.yhid;
    },
    getRouter(_state) {
        return _state.router;
    }
}

export default getters;