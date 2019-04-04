<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showIcons">
      <swiper-slide v-for="(page,index) of Pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-image-content" v-bind:src="item.imgUrl" alt>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    props: {
      list: {
        type: Array
      }
    },
    computed: {
      Pages() {
        const pages = [];
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      },
      showIcons() {
        return this.list.length;
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: ".swiper-pagination"
          },
          loop: true,
          autoplay: true
        }
      };
    }
  };
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';

  .icons >>> .swiper-container {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
  }

  .icons {
    margin-top: 0.1rem;

    .icon {
      float: left;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      overflow: hidden;
      position: relative;

      .icon-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: border-box;
        padding: 0.1rem;

        .icon-image-content {
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
        line-height: 0.44rem;
        height: 0.44rem;
        color: $darckTextColor;
        text-align: center;
        ellipsis();
      }
    }
  }
</style>
