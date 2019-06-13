import Mock from 'mockjs'
import { domain } from './config'

import login from './login'
import dash from './dash'

const mocks = [
    ...login,
    ...dash,
]

mocks.forEach((item) => {
    Mock.mock(`${domain}${item.url}`, item.type, item.method);
})
