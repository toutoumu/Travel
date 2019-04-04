<template>
  <div v-if="gallaryImgs.length">
    <div class="banner" @click="handlerBannerClick">
      <img class="banner-img" :src="bannerImg" alt>
      <div class="banner-info">
        <div class="banner-title">
          <span>{{sightName}}</span>
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe643;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" @close="close" v-show="showGallary"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
  import CommonGallary from "common/gallary/Gallary";
  import FadeAnimation from "common/fade/FadeAnimation";

  export default {
    name: "DetailBanner",
    props: {
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array
    },
    data() {
      return {
        showGallary: false
        /* imgs: [
                  "http://img1.qunarzz.com/sight/p0/1902/f2/f2e0213052717f7ca3.water.jpg_600x330_29ac7bfd.jpg",
                  "http://img1.qunarzz.com/sight/p0/1902/f2/f2e0213052717f7ca3.water.jpg_600x330_29ac7bfd.jpg"
                ] */
      };
    },
    components: {
      CommonGallary,
      FadeAnimation
    },
    methods: {
      handlerBannerClick() {
        this.showGallary = true;
      },
      close() {
        this.showGallary = false;
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .banner {
    position: relative;
    overflow: hidden;
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
      line-height: 0.6rem;
      color: #fff;
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

      .banner-title {
        flex: 1;
        font-size: 0.32rem;
        padding: 0 0.2rem;
      }

      .banner-number {
        height: 0.32rem;
        line-height: 0.32rem;
        margin-top: 0.14rem;
        padding: 0 0.4rem;
        border-radius: 0.2rem;
        background: rgba(0, 0, 0, 0.8);
        font-size: 0.24rem;

        .banner-icon {
          font-size: 0.24rem;
        }
      }
    }
  }
</style>