<template>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(page,index) in pages" :key="index">
            <div class="icons">
                <div class="icon" v-for="(image) in page" :key="image.id">
                    <div class="icon-img-container">
                        <img class="icon-img" :src="image.imgUrl" alt>
                    </div>
                    <p class="icon-desc">{{image.desc}}</p>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        name: 'Icons',
        props: {
            iconList: {
                type: Array,
            },
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop: true,
                    autoplay: false,
                },
            }
        },
        computed: {
            pages() {
                const pages = []
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            },
        },
    }
</script>


<style lang="stylus" scoped>
    /*关于为什么要加 ~ 请查看README文件*/
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';

    /*撑开一个宽高比为 2:1 的区域*/
    .swiper >>> .swiper-slide { // 宽高比 2:1
        width: 100%; // div 可以省略
        height: 0;
        overflow: hidden;
        padding-bottom: 50%;
        position: relative;
    }

    .swiper {
        margin-top: .1rem;
    }

    /*填充撑开的区域,并且使用grid布局*/
    .icons {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;

        display: grid !important;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        .icon {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            overflow: hidden;

            .icon-img-container {
                flex: 1;
                display: flex;
                padding: 0.1rem;
                box-sizing: border-box;
            }

            .icon-img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                object-position: center;
            }

            .icon-desc {
                height: 0.44rem;
                line-height: 0.44rem;
                text-align: center;
                color: $darckTextColor;
                ellipsis();
            }
        }
    }


    /*第二种方式使用绝对定位*/
    /*.icons {
        // 每一项宽度为整个容器宽度的25%,高度 = 宽度
        .icon {
            position: relative;
            overflow: hidden;
            float: left;
            width: 25%;
            height: 0;
            padding-bottom: 25%;
            // 图片区域在父容器上部分,下面空出文本区域
            .icon-img-container {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0.44rem;
                box-sizing: border-box;
                padding: 0.1rem;

                // 图片水平居中,上下顶边
                .icon-img {
                    display: block;
                    margin: 0 auto;
                    height: 100%;
                }
            }
            // 内容区域绝对定位在底部
            .icon-desc {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 0.44rem;
                line-height: 0.44rem;
                text-align: center;
                color: $darckTextColor;
                ellipsis();
            }
        }
    }*/
</style>
