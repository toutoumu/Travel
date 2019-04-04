<template>
  <div class="container" @click="handlerGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" alt>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Gallary",
    props: {
      imgs: {
        type: Array,
        default: []
      }
    },
    methods: {
      handlerGallaryClick() {
        this.$emit("close");
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: ".swiper-pagination",
            type: "fraction"
          },
          observeParents: true,
          /* 启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
             默认false，不开启，可以使用update()方法更新。 */
          observer: true
        }
      };
    }
  };
</script>

<style lang="stylus" scoped>
  /* Vue中的scoped和scoped穿透 >>> https://segmentfault.com/a/1190000015932467 */
  .container >>>.swiper-container {
    overflow: inherit;
  }

  .container {
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;

    .wrapper {
      width: 100%;

      // height: 0;
      // padding-bottom: 100%;
      .gallary-img {
        width: 100%;
      }

      .swiper-pagination {
        color: #fff;
        bottom: -1rem;
      }
    }
  }
</style>
