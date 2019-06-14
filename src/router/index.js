import Vue from 'vue'
import vueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { setSession, isEmpty } from '@/util/util'

Vue.use(vueRouter);

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const router = new vueRouter({
    routes,
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        return savedPosition || {x: 0, y: 0};
    }
})

router.beforeEach((to, from, next) => { // 初次登陆自动跳转到login
    NProgress.start()
    const user = store.getters.getUser;
    if (isEmpty(user) || isEmpty(user.yhid)) {
        if (to.name === 'login') {
            next()
        }
        else {
            next('/login');
        }
        document.title = '登录';
    }
    else {
        if (to.name === 'login') {
            next({path: '/'})
            document.title = '登录';
        }
        else {
            // 当刷新时重新添加动态路由
            if (isEmpty(store.getters.getId)) {
                store.dispatch('afterRefresh', store.getters.getUser).then(() => {
                    next(`${to.path}`)  // 重新进入beforeEach
                })
            }
            else {
                next(); // 跳过beforeEach
            }
        }
    }
    document.title = '现场盘点相关';
})

router.afterEach((to) => {
    setSession('activeIndex', to.name);
    NProgress.done()
})

export default router;