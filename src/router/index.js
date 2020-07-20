import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        exact: true,
        path: '/',
        redirect: '/signUp'
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
    },
    {
        path: '/create-campaign',
        name: 'create-campaign',
        meta: {layout: 'empty'},
        component: () => import('../views/CreateCampaign'),
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
