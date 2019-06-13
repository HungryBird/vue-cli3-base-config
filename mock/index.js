import Mock from 'mockjs'
import { domain } from './config'

import login from './login'

const mocks = [
    ...login,
]

mocks.forEach((item) => {
    Mock.mock(`${domain}${item.url}`, item.type, item.method);
})
