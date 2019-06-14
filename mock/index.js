import Mock from 'mockjs'
import { domain } from './config'
import { toLowerCase } from '@/util/util'

import login from './login'
import dash from './dash'

const mocks = [
    ...login,
    ...dash,
]

mocks.forEach((item) => {
    const { type, url, method } = item;
    if (toLowerCase(type) === 'get') {
        Mock.mock(RegExp(`${domain}${url}` + '.*'), type, method);
    }
    else {
        Mock.mock(`${domain}${url}`, type, method);
    }
})
