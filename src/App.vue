<template>
    <div id="app">
        <!--页面切换时不重新加载,而是使用缓存, 这里 exclude 排除某些名称的 组件-->
        <keep-alive exclude="Detail">
            <router-view/>
            <transition
                mode="out-in"
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter=""

                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave=""
                :css="false">

            </transition>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
</style>
