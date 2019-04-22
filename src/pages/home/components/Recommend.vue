<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <!--tag 将其渲染成什么 这里讲 router-link 渲染成 li-->
            <router-link tag="li" v-for="(item) in recommendList" :key="item.id" class="item border-bottom"
                         :to="{name: 'Detail', params:{id: item.id} }">
                <img class="item-img" :src="item.imgUrl" alt>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Recommend',
        props: {
            recommendList: {
                type: Array,
            },
        },
        data() {
            return {}
        },
    }
</script>

<style lang="stylus" scoped>
    /*关于为什么要加 ~ 请查看README文件*/
    @import '~styles/mixins.styl';

    .title {
        margin-top: 0.2rem;
        line-height: 0.8rem;
        background: #eee;
        text-indent: 0.2rem;
    }

    .item {
        display: flex;
        overflow: hidden;
        height: 1.9rem;

        .item-img {
            width: 1.7rem;
            height: 1.7rem;
            padding: 0.1rem;
        }

        .item-info {
            flex: 1;
            padding: 0.1rem;
            min-width: 0; // 解决文字过长,后面点...不显示问题

            .item-title {
                line-height: 0.54rem;
                font-size: 0.32rem;
                ellipsis();
            }

            .item-desc {
                line-height: 0.4rem;
                color: #ccc;
                min-width: 0;
                ellipsis();
            }

            .item-btn {
                line-height: 0.44rem;
                background: #ff9300;
                padding: 0 0.2rem;
                margin-top: 0.16rem;
                color: #fff;
                border-radius: 0.06rem;
            }
        }
    }
</style>
