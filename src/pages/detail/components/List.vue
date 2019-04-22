<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{ item.title }}
            </div>
            <div class="item-children" v-if="item.children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailList',
        props: {
            list: {
                type: Array,
            },
        },
    }
</script>

<style lang="stylus" scoped>
    .item-title {
        .item-title-icon {
            display: inline-block;
            left: .06rem;
            top: .06rem;
            position: relative;
            width: .36rem;
            height: .36rem;
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right: .1rem;
            background-size: .4rem 3rem;
        }
        line-height: .8rem;
        font-size: .32rem;
        padding: 0 .2rem;
    }
    .item-children {
        padding: 0 .4rem;
    }

</style>
