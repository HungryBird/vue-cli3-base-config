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
    if (to.name !== from.name) {    // 当进入的页面不一样时保存路由信息
        const { query, params } = to;
        store.commit('setRouter', {query, params});
    }

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
                store.dispatch('afterRefresh', user).then(() => {
                    const { query, params } = store.getters.getRouter;
                    // 重新加入query和params
                    next({path: `${to.path}`, query, params}, )  // 重新进入beforeEach
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
    store.commit('setActiveIndex', to.name);
    NProgress.done()
})

export default router;