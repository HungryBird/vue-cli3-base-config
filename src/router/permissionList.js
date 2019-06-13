export default [
    {
        path: '/xmgl',
        name: 'xmgl',
        component: () => import('@/pages/xmgl/index'),
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/yygl',
        name: 'yygl',
        component: () => import('@/pages/yygl/index'),
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/yggl',
        name: 'yggl',
        component: () => import('@/pages/yggl/index'),
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/wdrw',
        name: 'wdrw',
        component: () => import('@/pages/wdrw/index')
    },
]