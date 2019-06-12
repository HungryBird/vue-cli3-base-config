import Cookies from 'js-cookie';

/*
 * 获取token
 * */
export const getToken = (name = '') => {
    return Cookies.get(name || 'token');
};

/*
 * 设置token
 * */
export const setToken = (token, expires = 1, name = '') => {
    return Cookies.set(name || 'token', token, {expires});
}

/*
 * 删除token
 * */
export const removeToken = (name = '') => {
    Cookies.remove(name || 'token');
}

/*
 * 转成小写
 * */
export const toLowerCase = (str) => {
    if (str !== '') return str.toLocaleLowerCase()
}

/*
 * 转成大写
 * */
export const toUpperCase = (str) => {
    if (str !== '') return str.toLocaleUpperCase()
}

/*
 * 判断空值
 * */
export const isEmpty = (keys) => {
    if (typeof keys === 'string') {
        // eslint-disable-next-line no-useless-escape
        keys = keys.replace(/\"|&nbsp;|\\/g, '').replace(/(^\s*)|(\s*$)/g, '')
        if (keys === '' || keys === null || keys === 'null' || keys === 'undefined') {
            return true
        } else {
            return false
        }
    } else if (typeof keys === 'undefined') {  // 未定义
        return true
    } else if (typeof keys === 'number') {
        return false
    } else if (typeof keys === 'boolean') {
        return false
    } else if (typeof keys === 'object' && !Array.isArray(keys)) {
        if (JSON.stringify(keys) === '{}') {
            return true
        } else if (keys === null) { // null
            return true
        } else {
            return false
        }
    } else if (keys instanceof Array && keys.length === 0) {
        return true
    } else {
        return false
    }
}

/*
 * 存储localStorage
 * */
export const setStore = ( name, content ) => {
    if (!name || !content || !window.localStorage) return
    if (typeof content !== 'string') content = JSON.stringify(content)
    
    window.localStorage.setItem(name, content)
    
}
/*
 * 获取localStorage
 * */
 export const getStore = ( name ) => {
    
    if (!name || !window.localStorage) return
    
    let value = window.localStorage.getItem(name)
    
    if (value !== null) {
        
        try {
            value = JSON.parse(value)
        } catch (e) {
            // value = value;
        }
    }
    
    return value
}
/*
 * 删除localStorage
 * */
 export const removeStore = ( name ) => {
    if (!name || !window.localStorage) return
    window.localStorage.removeItem(name)
}
/*
 * 清空localStorage
 * */
 export const clearStore = () => {
    if (!window.localStorage) return
    window.localStorage.clear()
}
/*
 * 存储sessionStorage
 * */
 export const setSession = ( name, content ) => {
    if (!name || !content || !window.sessionStorage) return
    if (typeof content !== 'string') content = JSON.stringify(content)
    window.sessionStorage.setItem(name, content)
}
/*
 * 获取sessionStorage
 * */
 export const getSession = ( name ) => {
    if (!name || !window.sessionStorage) return
    let value = window.sessionStorage.getItem(name)
    if (value !== null) {
        try {
            value = JSON.parse(value)
        } catch (e) {
            // value = value;
        }
    }
    return value
}
/*
 * 删除sessionStorage
 * */
 export const removeSession = ( name ) => {
    if (!name || !window.sessionStorage) return
    window.sessionStorage.removeItem(name)
}
/*
 * 清空sessionStorage
 * */
 export const clearSession = () => {
    if (!window.sessionStorage) return
    window.sessionStorage.clear()
}