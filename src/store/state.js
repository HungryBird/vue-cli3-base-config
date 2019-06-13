import { getToken, getSession } from '@/util/util'

const state = {
    token: getToken(),
    user: getSession('user'),
    uid: '',
}

export default state;