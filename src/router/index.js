import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from "firebase/app";

Vue.use(VueRouter);

const routes = [
    {
        exact: true,
        path: '/',
        redirect: '/login'
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
        meta: {layout: 'main', requiresAuth: true},
        component: () => import('../views/Campaigns'),
    },
    {
        path: '/create-campaign',
        name: 'create-campaign',
        meta: {layout: 'empty', requiresAuth: true},
        component: () => import('../views/CreateCampaign'),
    },
    {
        path: '*',
        redirect: '/login'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) =>
{
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('campaigns');
    else next();
})

export default router;
