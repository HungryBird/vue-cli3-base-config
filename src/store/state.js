import { getToken, getSession } from '@/util/util'

const state = {
    token: getToken(),
    user: getSession('user'),
}

export default state;