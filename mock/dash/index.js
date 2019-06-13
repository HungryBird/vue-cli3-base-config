import { Random, errcode } from '../config'

export default [
    // 获取任务数量
    {
        method() {
            return {
                data: {
                    jxzrw: {
                        value: Random.integer(0, 999)
                    },
                    dclrw: {
                        value: Random.integer(0, 999)
                    }
                },
                errcode,
            }
        },
        url: '/getTasks',
        type: 'get',
    }
]