const routes = [
    {
        path: '/',
        meta: {
            requireAuto: true,
        },
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
        meta: {
            requireAuto: true,
        },
        component: () => import('@/views/home'),
    },
]

export default routes;