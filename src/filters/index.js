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

export default {
    f_cd,
}