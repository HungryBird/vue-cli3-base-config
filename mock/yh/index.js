import { code, Random } from '../config'
import { Yh } from '../URL'

export default [
    // 获取项目列表
    {
        method() {
            return {
                data: {
                    "yhlb": [
                        {
                            "id": "554",
                            "yhdh": Random.natural(),
                            "yhxm": Random.cname(),
                            "wwxm": Random.cparagraph(),
                        },
                        {
                            "id": "123",
                            "yhdh": Random.natural(),
                            "yhxm": Random.cname(),
                            "wwxm": Random.cparagraph(),
                        },
                    ],
                    "total": 2,
                },
                code,
                message: '',
            }
        },
        url: `${Yh}GetDropSelectList`,
        type: 'get',
    },
    // 项目管理-查看：获取盘点人
    {
        method(data) {
            console.log('获取盘点人： ', data)
            return {
                "yhlb": [
                    {
                        "id": "554",
                        "yhdh": Random.natural(),
                        "yhxm": Random.cname(),
                        "wwxm": Random.cparagraph(),
                    },
                    {
                        "id": "123",
                        "yhdh": Random.natural(),
                        "yhxm": Random.cname(),
                        "wwxm": Random.cparagraph(),
                    },
                ],
                "total": 2,
            }
        },
        url: `${Yh}GetPdSbList `,
        type: 'get',
    }
]