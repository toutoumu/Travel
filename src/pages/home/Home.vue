<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from "./components/Header.vue";
  import HomeSwiper from "./components/Swiper.vue";
  import HomeIcons from "./components/Icons.vue";
  import HomeRecommend from "./components/Recommend.vue";
  import HomeWeekend from "./components/Weekend.vue";
  import axios from "axios";
  import { mapState } from "vuex";

  export default {
    name: "Home",
    created() {},
    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
        lastCity: ""
      };
    },
    computed: {
      ...mapState(["city"])
    },
    mounted() {
      this.getHomeInfo();
      this.lastCity = this.city;
      console.log("mounted");
    },
    activated() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city;
        this.getHomeInfo();
      }
      console.log("activated");
    },
    methods: {
      getHomeInfo() {
        axios
          .get("/api/index.json?city=" + this.city)
          .then(this.getHomeInfosuccess);
      },
      getHomeInfosuccess(res) {
        console.log(res);
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    }
  };
</script>

<style scoped>
</style>
