<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="header-back iconfont">&#xe60d;</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style lang="stylus" scoped>
    /*关于为什么要加 ~ 请查看README文件*/
    @import "~styles/varibles.styl"
    .header {
        position: relative;
        overflow: hidden;
        height: $headerHeight;
        line-height: $headerHeight;
        text-align: center;
        color: #fff;
        background: $bgColor;

        .header-back {
            position: absolute;
            width: .64rem;
            font-size .4rem;
            text-align: center;
            color: #fff;
            top: 0;
            left: 0;
        }
    }
</style>
