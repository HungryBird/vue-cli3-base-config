import { Random } from '../config'
const errcode = 200;

export default [
    // 登录
    {
        method() { 
            const yhid = Random.natural();
            const yhsj = Random.natural(11);
            const yhxm = Random.cname();
        
            // const expires = Random.integer(1, 9);
            const user = {
                yhid,
                yhsj,
                yhxm,
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
    }
]