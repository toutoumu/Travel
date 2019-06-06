/*jshint esversion: 6 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill' // 解决部分手机不支持Promise问题
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css' // 重置html标签默认样式
import 'styles/border.css' // 一像素边框
import 'styles/iconfont.css'

Vue.config.productionTip = false
// 解决移动端点击300毫秒延迟问题  npm install fastclick --save
fastClick.attach(document.body)
// 安装 npm install stylus --save
// 安装 npm install stylus-loader --save
Vue.use(VueAwesomeSwiper /* { default global options } */)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>',
})
