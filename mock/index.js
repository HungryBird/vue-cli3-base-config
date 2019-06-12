const Mock = require('mockjs');
const Random = Mock.Random;
const domain = 'http://localhost:8080';
const errcode = 200;

const login = () => { 
    const yhid = Random.natural();
    const yhsj = Random.integer(9);
    const yhxm = Random.cname();

    // const expires = Random.integer(1, 9);
    const data = {
        yhid,
        yhsj,
        yhxm,
        // expires,
        message: '登陆成功',
    }
    return {
        errcode, 
        data,
    }
}

Mock.mock(`${domain}/login`, 'post', login)
