/*jshint esversion: 6 */

import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '@/pages/home/Home.vue';
// import City from '@/pages/city/City.vue';
// import Detail from '@/pages/detail/Detail.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [{
		path: "/",
		name: "Home",
		// component: Home
		// 动态加载模块, 把原来的 import Home from '@/pages/home/Home.vue'; 去掉修改为下面这个
		component: () => import("@/pages/home/Home.vue")
	}, {
		path: "/city",
		name: "City",
		// component: City
		component: () => import("@/pages/city/City.vue"),
		children: [
			{
				path: "abc",
				name: "abc",
				// component: Home
				// 动态加载模块, 把原来的 import Home from '@/pages/home/Home.vue'; 去掉修改为下面这个
				component: () => import("@/pages/home/Home.vue")
			}
		]
	}, {
		path: "/detail/:id",
		name: "Detail",
		// component: Detail
		component: () => import("@/pages/detail/Detail.vue")
	}],
	// 解决进入新页面时页面不停留在顶部问题
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	}
});

// 全局前置守卫 路由拦截, 可以在这里判断是否已经登录等等
// https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB
router.beforeEach((to, from, next) => {
	console.log("from : ", from.path, " to : ", to.path);
	next();
});

export default router;
