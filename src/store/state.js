import { getToken, getSession } from '@/util/util'

const state = {
    token: getToken(),
    user: getSession('user'),
    id: '', // 不存入缓存的id，刷新之后消失
}

export default state;