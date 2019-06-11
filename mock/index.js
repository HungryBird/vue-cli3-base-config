const Mock = require('mockjs');
const Random = Mock.Random;
const domain = 'http://localhost:8080';
const code = 1;

const login = () => { 
    const token = Random.natural();
    const expires = Random.integer(1, 9);
    const data = {
        token,
        expires,
        message: '登陆成功',
    }
    return {
        code, 
        data,
    }
}

Mock.mock(`${domain}/login`, 'post', login)
