<template>
	<div>
		<transition name="router-fade" mode="out-in">
			<!-- keep-alive是Vue组件缓存技术，配合路由元信息keepAlive -->
			<!-- msite 只有这个做了keepAlive -->
			<!-- 并且在路由的钩子函数针对keepAlive==true的路径还配置了记录滚动位置 -->
			<!-- 注： 这里可能是作者对缓存技术的小小尝试 -->
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    	</transition>
    	<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
    </div>
</template>

<script>

  	export default {
    	
  	}

</script>

<style lang="scss">
  	@import './style/common';
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
