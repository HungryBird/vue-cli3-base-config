const routes = [
    {
        path: '/',
        component: () => import('@/views/home'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home'),
    },
    {
        path: '*',
        name: '404',
        component: () => import('@/pages/errPages/404'),
    }
]

export default routes;