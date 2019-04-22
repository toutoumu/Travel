<template>
    <div class="container" @click="handlerGalleryClick">
        <div class="wrapper">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(image, index) in images" :key="index">
                    <img class="gallery-img" :src="image" alt>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Gallery',
        props: {
            images: Array,
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction',
                    },
                    // 以下两个属性指定在数据更新时刷新组件
                    observer: true,
                    observeParents: true,
                    loop: true, // 循环播放
                },
            }
        },
        methods: {
            handlerGalleryClick() {
                this.$emit('close')
            },
        },
    }
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container {
        overflow: inherit;
    }

    .container {
        display: flex;
        flex-direction column
        justify-content center
        z-index: 99;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;

        .wrapper {
            // overflow: hidden;
            width: 100;
            // height: 0;
            // padding-bottom: 100%;

            .gallery-img {
                width: 100%;
            }

            .swiper-pagination {
                color: #fff;
                bottom: -1rem
            }
        }
    }
</style>
