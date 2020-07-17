import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/signUp',
        name: 'SignUp',
        meta: {layout: 'empty'},
        component: () => import('../views/SignUp'),
    },
    {
        path: '/login',
        name: 'Login',
        meta: {layout: 'empty'},
        component: () => import('../views/Login'),
    },
    {
        path: '/campaigns',
        name: 'Campaigns',
        meta: {layout: 'main'},
        component: () => import('../views/Campaigns'),
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
