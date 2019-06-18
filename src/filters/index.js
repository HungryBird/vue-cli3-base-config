import { XM } from '@/enumeration'

export const f_cd = (value) => {
    const obj = {
        'home': '主页',
        'yygl': '医院管理',
        'xmgl': '项目管理',
        'yggl': '员工管理',
        'wdrw': '我的任务',
    }
    return obj[value]
}

export const f_fjzt = (value) => {
    return XM.FJZT_A.map((item) => {
        if (item.value == value) {
            return item.label
        }
    })[0];
}

export default {
    f_cd,
    f_fjzt,
}