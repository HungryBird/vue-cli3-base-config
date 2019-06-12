const path = require('path');
const defaultSetting = require('./src/setting');

function resolve(dir) {
    return path.join(__dirname, dir);
}
const name = defaultSetting.title || '扫码盘点相关';

module.export = {
    configureWebpack: {
        name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    productionSourceMap: false,
    // publicPath: '/',
}