import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        // @ts-ignore
        component: () => import('@/pages/login.vue')
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        // @ts-ignore
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/webgl/pointsWaves',
        name: 'threeJs',
        meta: {
            title: 'threeJs',
            keepAlive: true,
            requireAuth: true
        },
        // @ts-ignore
        component: () => import('@/pages/webgl/pointsWaves.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;