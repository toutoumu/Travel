/*jshint esversion: 6 */

import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/pages/home/Home.vue';
// import City from '@/pages/city/City.vue';
// import Detail from '@/pages/detail/Detail.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        // component: Home
        component: () => import('@/pages/home/Home.vue')
    }, {
        path: '/city',
        name: 'City',
        // component: City
        component: () => import('@/pages/city/City.vue')
    }, {
        path: '/detail/:id',
        name: 'Detail',
        // component: Detail
        component: () => import('@/pages/detail/Detail.vue')
    }],
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
});
