import { code, errcode, errmsg, message } from '../config'
import { Xm } from '../URL'
import { pdSbList, GetXmxq, GetXmList } from './data'

export default [
    // 获取项目列表
    {
        method() {
            return {
                data: GetXmList,
                code,
                message,
            }
        },
        url: `${Xm}GetXmList`,
        type: 'get',
    },
    // 新增、编辑、指派
    {
        url: `${Xm}EditXm`,
        type: 'post',
        method(data) {
            console.log('EditXm: ', data);
            return {
                code,
                data: {
                    errcode,
                    errmsg,
                },
                message,
            }
        }
    },
    // 获取编辑数据
    {
        url: `${Xm}GetXmxq`,
        type: 'get',
        method() {
            return {
                code,
                message,
                data: GetXmxq,
            }
        }
    },
    // 获取查看数据
    {
        url: `${Xm}GetPdSbList`,
        type: 'get',
        method(data) {
            console.log('GetPdSbList: ', data);
            return {
                code,
                message,
                data: pdSbList,
            }
        }
    }
]