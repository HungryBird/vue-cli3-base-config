import Vue from 'vue';
import vueRouter from 'vue-router';
import routes from '@/router/routes';
import store from '@/store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { setSession } from '@/util/util'

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
    if (to.path === '/login') {
        next();
    }
    else {
        const token = store.getters.getToken;
        if (!token) {
            next('/login');
        }
        else {
            next();
        }
    }
})

router.afterEach((to) => {
    setSession('activeIndex', to.name);
    NProgress.done()
})

export default router;