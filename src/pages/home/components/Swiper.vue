<template>
  <div class="wrapper" v-if="showSwiper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    /* 注意这里的name 不能是swiper 不然会导致引用到的不是第三方控件 swiper */
    name: "HomeSwiper",
    props: {
      swiperList: {
        type: Array
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: ".swiper-pagination"
          },
          loop: true
        }
      };
    },
    computed: {
      showSwiper() {
        return this.swiperList.length;
      }
    }
  };
</script>

<style lang="stylus" scoped>
  /* vue 样式穿透 */
  .swiper >>>.swiper-pagination-bullet-active {
    background: #fff !important;
  }

  /* 固定宽高比的样式, 宽度100% 高度为宽度的 百分比(xx) 样式如下 注意需要包裹一层 */
  .wrapper { /* 固定图片宽高比 宽度100% 高度 0 padding-bottom xxx% */
    width: 100%;
    height: 0; // 如果这里使用百分比,那么它是相对于父容器高度
    padding-bottom: 31.25%; // 使用padding-bottom 是相对于自身的高度
    overflow: hidden;

    .swiper-img {
      width: 100%;
    }
  }
</style>