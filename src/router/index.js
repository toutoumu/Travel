/*jshint esversion: 6 */

import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home.vue';
// import City from '@/pages/city/City.vue';
// import Detail from '@/pages/detail/Detail.vue';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        // component: Home
        // 动态加载模块
        component: () => import('@/pages/home/Home.vue'),
    }, {
        path: '/city',
        name: 'City',
        // component: City
        component: () => import('@/pages/city/City.vue'),
    }, {
        path: '/detail/:id',
        name: 'Detail',
        // component: Detail
        component: () => import('@/pages/detail/Detail.vue'),
    }],
    // 解决进入新页面时页面不停留在顶部问题
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    },
})
