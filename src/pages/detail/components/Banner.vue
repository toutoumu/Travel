<template>
    <div>
        <div class="banner" @click="handlerBannerClick">
            <img class="banner-img" :src="bannerImg" alt/>
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number"><span class="banner-icon iconfont">&#xe643;</span>{{images.length}}</div>
            </div>
        </div>
        <fade-animation>
            <common-gallery :images="images" v-show="showGallery" @close="handlerGalleryClose"></common-gallery>
        </fade-animation>
    </div>
</template>

<script>
    import CommonGallery from 'common/gallary/Gallary.vue'
    import FadeAnimation from 'common/fade/FadeAnimation.vue'

    export default {
        name: 'Banner',
        props: {
            sightName: String,
            bannerImg: String,
            images: Array,
        },
        data() {
            return {
                showGallery: false,
            }
        },
        methods: {
            handlerBannerClick() {
                this.showGallery = true
            },
            handlerGalleryClose() {
                this.showGallery = false
            },
        },
        components: {CommonGallery, FadeAnimation},
    }
</script>

<style lang="stylus" scoped>
    .banner {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 55%;

        .banner-img {
            width: 100%;
        }

        .banner-info {
            display: flex;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            line-height: .6rem;
            color: #fff;
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

            .banner-title {
                flex: 1;
                font-size .32rem;
                padding: 0 .2rem;

            }

            .banner-number {
                height: .32rem;
                line-height: .32rem;
                margin-top: .14rem;
                padding: 0 .4rem;
                border-radius: .2rem;
                background: rgba(0, 0, 0, 0.8);
                font-size: .24rem;

                .banner-icon {
                    font-size: 0.24rem;
                }
            }
        }
    }

</style>
