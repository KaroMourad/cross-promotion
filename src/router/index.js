import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import SignUp from '../views/SignUp';

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
    component: SignUp,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
