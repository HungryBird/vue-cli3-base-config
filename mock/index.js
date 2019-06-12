const Mock = require('mockjs');
const Random = Mock.Random;
const domain = 'http://localhost:8080';
const errcode = 200;

const login = () => { 
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
}

Mock.mock(`${domain}/login`, 'post', login)
