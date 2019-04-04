<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe60d;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe609;</span>输入城市/景点/游玩
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <!-- {{this.doubleCity}} -->
        <span class="iconfont arror-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import { mapState /* , mapGetters */ } from "vuex";

  export default {
    name: "Header",
    computed: {
      ...mapState(["city"])
      /* ...mapGetters(["doubleCity"]) */
    }
  };
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl';

  .header {
    background: $bgColor;
    display: flex;
    line-height: $headerHeight;
    color: #fff;

    .header-left {
      width: 0.64rem;
      float: left;

      .back-icon {
        text-align: center;
        font-size: 0.4rem;
      }
    }

    .header-input {
      flex: 1;
      height: 0.64rem;
      line-height: 0.64rem;
      margin-top: 0.12rem;
      margin-left: 0.12rem;
      padding-left: 0.2rem;
      background: #fff;
      color: #ccc;
      border-radius: 0.1rem;
    }

    .header-right {
      min-width: 1.24rem;
      float: right;
      text-align: center;
      color: white;

      .arror-icon {
        margin-left: -0.1rem;
      }
    }
  }
</style>
