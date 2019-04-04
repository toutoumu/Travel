<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button" @click="handlerCityClick(currentCity)">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hots"
            :key="item.id"
            @click="handlerCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list" v-for="i in item" :key="i.id">
          <div class="item border-bottom" @click="handlerCityClick(i.name)">{{i.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";
  import { mapState, mapMutations } from "vuex";

  export default {
    name: "List",
    computed: {
      ...mapState({
        currentCity: "city"
      })
    },
    props: {
      letter: String,
      cities: Object,
      hots: Array
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper);
    },
    methods: {
      ...mapMutations(["changeCity"]),
      handlerCityClick(city) {
        // 派发city改变事件, 通知store更新city (index.js)
        // this.$store.dispatch("changeCity", city);
        // 直接提交 事件, 这里会调用 mutations 中的 changeCity
        // this.$store.commit("changeCity", city);
        this.changeCity(city);
        this.$router.push("/");
      }
    },
    watch: {
      letter() {
        if (this.letter) {
          // 这里通过循环生成的ref得到的是一个数组
          const element = this.$refs[this.letter][0];
          console.log(element);
          this.scroll.scrollToElement(element);
        }
      }
    }
  };
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';

  .border-topbottom {
    &:before {
      border-color: #ccc;
    }

    &:after {
      border-color: #ccc;
    }
  }

  .list {
    position: absolute;
    overflow: hidden;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;

    .border-bottom {
      &:before {
        border-color: #ccc;
      }

      &:after {
        border-color: #ccc;
      }
    }

    .title {
      line-height: 0.54rem;
      background: #eee;
      padding-left: 0.2rem;
      font-size: 0.26rem;
      color: #666;
    }

    .button-list {
      overflow: hidden;
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;

      .button-wrapper {
        float: left;
        width: 33.33%;

        .button {
          margin: 0.1rem;
          padding: 0.1rem 0;
          text-align: center;
          border: 0.02rem solid #ccc;
          border-radius: 0.06rem;
        }
      }
    }

    .item-list {
      .item {
        line-height: 0.76rem;
        padding-left: 0.2rem;
        color: #666;
      }
    }
  }
</style>
