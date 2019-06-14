const getters = {
    getToken(_state) {
        return _state.token;
    },
    getUser(_state) {
        return _state.user;
    },
    getId(_state) {
        return _state.id;
    }
}

export default getters;