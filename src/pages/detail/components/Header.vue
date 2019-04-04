<template>
  <div>
    <router-link tag="div" class="heander-abs" to="/" v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe60d;</span>
    </router-link>
    <div ref="abc" class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/">
        <span class="iconfont header-fixed-back">&#xe60d;</span>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      };
    },
    methods: {
      handleScroll(el) {
        const top =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop ||
          document.querySelector(this.el).scrollTop;

        console.log(this.$refs.abc.offsetHeight);
        if (top && top > 60) {
          let opacity = top / 140;
          opacity > 1 ? 1 : opacity;
          this.opacityStyle = {
            opacity
          };
          this.showAbs = false;
        } else {
          this.showAbs = true;
        }
      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    }
    /* activated() {
          // 关于滚动监听不到的原因
          // 有一种情况，activated()需要在keep-alive包裹之后才会执行，所以查看app.vue中keep-alivevia标签是否有exclude，
          // 排除了这个组件对应的路由，去掉这个就可以执行 activated(),从而会执行scroll事件
          window.addEventListener("scroll", this.handleScroll);
        },
        deactivated() {
          window.removeEventListener("scroll", this.handleScroll);
        } */
  };
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';

  .heander-abs {
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 0.4rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.8);

    .header-abs-back {
      color: #eee;
      font-size: 0.4rem;
    }
  }

  .header-fixed {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;

    .header-fixed-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 0.64rem;
      text-align: center;
      font-size: 0.4rem;
      color: #fff;
    }
  }
</style>
