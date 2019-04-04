<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" class="search-input" placeholder="输入城市或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="handlerCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from "better-scroll";
  import { mapMutations } from "vuex";
  
  export default {
    name: "Search",
    props: {
      cities: {
        type: Object
      }
    },
    data() {
      return {
        keyword: "",
        list: [],
        timer: null
      };
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
    mounted() {
      this.scroll = new Bscroll(this.$refs.search);
    },
    computed: {
      hasNoData() {
        return !this.list.length;
      }
    },
    watch: {
      keyword(newValue, oldValue) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if (!this.keyword || "" == this.keyword) {
          this.list = [];
          console.log("ddd");
          return;
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach(value => {
              if (
                value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1
              ) {
                result.push(value);
              }
            });
          }
          this.list = result;
        }, 100);
      }
    }
  };
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';

  .border-bottom {
    &:before {
      border-color: #ccc;
    }

    &:after {
      border-color: #ccc;
    }
  }

  .search {
    height: 0.72rem;
    background: $bgColor;
    padding: 0 0.1rem; /* 上右下左 */

    .search-input {
      box-sizing: border-box;
      width: 100%;
      padding: 0 0.1rem;
      height: 0.62rem;
      line-height: 0.62rem;
      text-align: center;
      border-radius: 0.06rem;
      color: #666;
    }
  }

  .search-content {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    z-index: 1;

    .search-item {
      line-height: 0.62rem;
      padding-left: 0.2rem;
      background: #fff;
      color: #666;
    }
  }
</style>
