const routes = [
    {
        path: '/',
        component: () => import('@/views/home'),
        children: [
            {
                path: '/',
                redirect: 'dash'
            },
            {
                path: '/dash',
                name: 'dash',
                component: () => import('@/pages/dash/index')
            },
            {
                path: '/xmgl',
                name: 'xmgl',
                component: () => import('@/pages/xmgl/index')
            },
            {
                path: '/yygl',
                name: 'yygl',
                component: () => import('@/pages/yygl/index')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
    },
    {
        path: '*',
        name: '404',
        component: () => import('@/pages/errPages/404'),
    },
    {
        path: '/401',
        name: '401',
        component: () => import('@/pages/errPages/401'),
    }
]

export default routes;