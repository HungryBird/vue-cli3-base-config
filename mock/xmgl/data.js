import Mock from 'mockjs'
const Random = Mock.Random;

export const pdSbList = Mock.mock({
    total: 5,
    "sblb|5": [
        {
            "xmid": "554",
            "pdfj|1-5": [
                {
                    "fjid": Random.guid(),
                    "fjmc": "键盘",
                    "fjzt": "1",
                    "fjsl|1-100": 100
                },
            ],
            "pdid": Random.guid(),
            "fzr": Random.cname(),
            "csbh": /\d{5,10}/,
            "ysbbh": /\d{5,10}/,
            "sbmc": Random.string(),
            "sbbh": /\d{5,10}/,
            "sblx": Random.string(),
            "qxfl": Random.string(),
            "sbxh": /\d{5,10}/,
            "loraid": null,
            "sccj": Random.string(),
            "ssks": Random.string(),
            "ccrq": Random.datetime(),
            "grrq": Random.datetime(),
            "qyrq": Random.datetime(),
            "sbyz|1-100": 100,
            "img": null,
            "sbzt": "在用",
            "sjzt": 0
        }
    ]
})

export const GetXmxq = {
    "xmid": "554",
    "xmmc": "隆安盘点任务",
    "yymc": "第一人民医院",
    "xmzt": 1,
    "gzdd": "隆安",
    "gzkssj": "2019-06-13 16:30:04",
    "gzjssj": "2019-06-28 16:29:26",
    "gzsj": "2019-06-13 至 2019-06-28",
    "jflxr": "波",
    "jflxrdh": "13557301445",
    "cjsj": "2019-06-13 16:29:42",
    "pdryid": "123",
    "pdryxm": "陈天波",
    "xmsm": "盘点"
}

export const GetXmList = {
    "xmlb": [
        {
            "xmid": "554",
            "xmmc": "隆安盘点任务",
            "yymc": "第一人民医院",
            "xmzt": 1,
            "gzdd": "隆安",
            "gzkssj": "2019-06-13 16:30:04",
            "gzjssj": "2019-06-28 16:29:26",
            "gzsj": "2019-06-13 至 2019-06-28",
            "jflxr": "波",
            "jflxrdh": "13557301445",
            "cjsj": "2019-06-13 16:29:42",
            "pdryid": "123",
            "pdryxm": "陈天波",
            "xmsm": "盘点"
        },
        {
            "xmid": "554",
            "xmmc": "隆安盘点任务",
            "yymc": "第一人民医院",
            "xmzt": 0,
            "gzdd": "隆安",
            "gzkssj": "2019-06-13 16:30:04",
            "gzjssj": "2019-06-28 16:29:26",
            "gzsj": "2019-06-13 至 2019-06-28",
            "jflxr": "波",
            "jflxrdh": "13557301445",
            "cjsj": "2019-06-13 16:29:42",
            "pdryid": "123",
            "pdryxm": "陈天波",
            "xmsm": "盘点"
        },
    ],
    "total": 2,
}