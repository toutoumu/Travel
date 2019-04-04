<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" v-bind:src="item.imgUrl" alt>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      list: {
        type: Array,
        default: []
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
        return this.list.length;
      }
    }
  };
</script>

<style lang="stylus" scoped>
  /* 样式穿透 */
  .swiper >>>.swiper-pagination-bullet-active {
    background: #fff !important;
  }

  .swiper { /* 固定图片宽高比 宽度100% 高度 xxx% */
    overflow: hidden;
    width: 100%;
    height: 0px;
    padding-bottom: 31.25%;
    background: #cccccc;

    .swiper-img {
      width: 100%;
    }
  }
</style>