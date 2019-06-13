export default {
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
    ]
}