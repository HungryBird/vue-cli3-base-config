import { Random, errcode } from '../config'
import { } from '@/util/util'

const permissionList = ['xmgl', 'yygl', 'yggl', 'wdrw'];

export default [
    // 登录
    {
        method() { 
            const yhid = Random.natural();
            const yhsj = Random.natural(11);
            const yhxm = Random.cname();
            const cd = permissionList;
        
            // const expires = Random.integer(1, 9);
            const user = {
                yhid,
                yhsj,
                yhxm,
                cd,
                // expires,
            }
            return {
                errcode, 
                user,
                message: '登陆成功',
            }
        },
        url: '/login',
        type: 'post',
    },
]