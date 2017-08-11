import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
import './config/rem'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
// 滚动行为只有在history模式下
// 了解hash 模式和history模式各自的优缺点
Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode: routerMode, // history
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
		// 利用路由元信息，做更精细的控制
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				// 这里是从xx跳转，保存滚动位置。
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition ||0}
		}
	}
})


new Vue({
	router,
	store,
}).$mount('#app')

