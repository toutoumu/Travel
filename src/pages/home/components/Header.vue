<template>
    <div class="header">
        <div class="header-left">
            <div class="back-icon iconfont">&#xe60d;</div>
        </div>
        <div class="header-input iconfont">&#xe609;输入城市/景点/游玩/主题</div>
        <router-link to="/city">
            <div class="header-right iconfont">
                {{this.city}}
                <span class="arrow-icon iconfont">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'Header',
        computed: {
            // 将state(state.js)中定义的 city 展开到 这里的计算属性 city
            ...mapState(['city']),
        },
    }
</script>


<style lang="stylus" scoped>
    // 需要在 webpack.base.conf.js 文件中创建别名 'styles': resolve('src/assets/styles'),
    /* scoped 这个样式只对当前组件有效 */
    /*关于为什么要加 ~ 请查看README文件*/
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';

    .header {
        background: $bgColor;
        display: flex;
        line-height: $headerHeight;
        color: #fff;

        .header-left {
            width: 0.64rem;

            .back-icon {
                text-align: center;
                font-size: 0.4rem;
            }
        }

        .header-input {
            flex: 1;
            height: 0.64rem;
            line-height: 0.64rem;
            margin-top: 0.12rem;
            margin-left: 0.12rem;
            padding-left: 0.2rem;
            background: #fff;
            color: #ccc;
            border-radius: 0.1rem;
        }

        .header-right {
            min-width: 1.04rem;
            padding: 0 .1rem
            text-align: center;
            color: white;

            .arrow-icon {
                margin-left: -0.1rem;
            }
        }
    }
</style>
