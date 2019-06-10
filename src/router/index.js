import Vue from 'vue';
import vueRouter from 'vue-router';
import routes from '@/router/routes';
import element from 'element-ui';

Vue.use(element);
Vue.use(vueRouter);

const router = new vueRouter({
    routes,
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        return savedPosition || {x: 0, y: 0};
    }
})

router.beforeEach((to, from, next) => { // 初次登陆自动跳转到login
    if (to.path === '/login') {
        next();
    }
    else {
        const token = '';
        if (!token) {
            next('/login');
        }
        else {
            next();
        }
    }
})

export default router;