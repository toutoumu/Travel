<template>
    <!-- 淡入淡出动画 -->
    <transition>
        <!--使用这个组件包裹的内容会出现在这里的slot里面-->
        <slot></slot>
    </transition>
</template>

<script>
    export default {
        // name 属性的作用参考README文件
        name: 'Fade',
    }
</script>

<style lang="stylus" scoped>
    // 过渡动画对应的class名称如下
    .v-enter, .v-leave-to {
        opacity: 0;
        @include block;
    }

    // 过渡动画对应的class名称如下
    .v-enter-active, .v-leave-active {
        // 过渡动画
        transition: opacity 0.8s;
    }
</style>
