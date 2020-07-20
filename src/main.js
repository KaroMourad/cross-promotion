import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Loader from './components/Loader';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.component('Loader', Loader);



/********* firebase *********/

firebase.initializeApp({
    apiKey: 'AIzaSyA45cY7moBLo95xW_-sUATAN_cM8Ujpcns',
    authDomain: 'cross-prom.firebaseapp.com',
    databaseURL: 'https://cross-prom.firebaseio.com',
    projectId: 'cross-prom',
    storageBucket: 'cross-prom.appspot.com',
    messagingSenderId: '895648713932',
    appId: '1:895648713932:web:fd972f4dbb9e57f2480669',
    measurementId: 'G-ENNRCHFL0Y'
});

let app;

firebase.auth().onAuthStateChanged(() =>
{
    if (!app)
    {
        app = new Vue({
            router,
            store,
            render: (h) => h(App),
        }).$mount('#app');
    }
});


