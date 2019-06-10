import Cookies from 'js-cookie';

export const getToken = (name = '') => {
    return Cookies.get(name || 'token');
};

export const setToken = (token, expires = 1, name = '') => {
    return Cookies.set(name || 'token', token, {expires});
}

export const removeToken = (name = '') => {
    Cookies.remove(name || 'token');
}

export const validUsername = (str) => {
    const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0
}