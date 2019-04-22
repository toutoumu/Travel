<template>
    <div class="icons">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="(image) in page" :key="image.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="image.imgUrl" alt>
                    </div>
                    <p class="icon-desc">{{image.desc}}</p>
                </div>
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
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
                    autoplay: true,
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

    .icons >>> .swiper-container { // 宽高比 2:1
        width: 100%; // div 可以省略
        height: 0;
        overflow: hidden;
        padding-bottom: 50%;
    }

    .icons {
        margin-top: 0.1rem;

        .icon {
            position: relative;
            overflow: hidden;
            float: left;
            width: 25%;
            height: 0;
            padding-bottom: 25%;

            .icon-img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0.44rem;
                box-sizing: border-box;
                padding: 0.1rem;

                .icon-img-content {
                    display: block;
                    margin: 0 auto;
                    height: 100%;
                }
            }

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
    }
</style>
