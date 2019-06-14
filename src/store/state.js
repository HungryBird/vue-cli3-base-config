import { getToken, getSession } from '@/util/util'

const state = {
    token: getToken(),
    user: getSession('user'),
    yhid: '', // 不存入缓存的yhid，刷新之后消失
    router: getSession('router'),   // 路由的参数
}

export default state;