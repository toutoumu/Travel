<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hots="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handerLatterChange"></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from "./components/Header.vue";
  import CitySearch from "./components/Search.vue";
  import CityList from "./components/List.vue";
  import CityAlphabet from "./components/Alphabet.vue";
  import axios from "axios";

  export default {
    name: "City",
    data() {
      return {
        cities: {},
        hotCities: [],
        letter: ""
      };
    },
    mounted() {
      this.getCityINfo();
    },
    methods: {
      getCityINfo() {
        axios.get("/api/city.json").then(this.HandlerData);
      },
      HandlerData(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities;
        }
      },
      handerLatterChange(letter) {
        this.letter = letter;
      }
    },
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    }
  };
</script>
<style lang="stylus" scoped>
</style>
