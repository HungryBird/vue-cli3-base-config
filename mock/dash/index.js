import { Random, code } from '../config'
import { CheckApi } from '../URL'

export default [
    // 获取任务数量
    {
        method() {
            return {
                data: [
                    {
                        state: '1',
                        key: 'wdrw',
                        label: '待处理任务',
                        value: Random.integer(0, 999)
                    },
                    {
                        state: '2',
                        key: 'wdrw',
                        label: '进行中任务',
                        value: Random.integer(0, 999)
                    },
                ],
                code,
            }
        },
        url: `${CheckApi}GetDbsx`,
        type: 'get',
    }
]