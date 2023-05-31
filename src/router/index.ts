/*
 * @Descripttion: 
 * @version: 
 * @Author: coding
 * @Date: 2023-05-30 17:29:33
 * @LastEditors: 
 * @LastEditTime: 2023-05-30 17:29:49
 */
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
        component: () => import('@/pages/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;