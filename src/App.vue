<template>
	<div id="app">
		<!--页面切换时不重新加载,而是使用缓存, 这里 exclude 排除某些名称的 组件-->
		<keep-alive exclude="Detail">
			<router-view/>
		</keep-alive>
	</div>
</template>

<script>
export default {
	name: "App"
};
</script>

<style>
</style>
