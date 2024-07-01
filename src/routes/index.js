import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from "@/layouts/Default";

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import(/*  */ '@/pages/Index.vue'),
        meta: { layout: DefaultLayout },
    },
    {
        path: '/weather',
        name: 'weather',
        component: () => import(/*  */ '@/pages/Weather.vue'),
        meta: { layout: DefaultLayout },
    },
    {
        path: '/solar',
        name: 'solar',
        component: () => import(/*  */ '@/pages/Solar.vue'),
        meta: { layout: DefaultLayout },
    },
    {
        path: '/:pathMatch(.*)',
        name: 'catchAll',
        component: () => import(/*  */ '@/pages/Index.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
});
export default router;
export { routes };