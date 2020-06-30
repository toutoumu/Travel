<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :letter="letter" :cities="cities" :hotcities="hotCities"></city-list>
		<city-alphabet @change="handleLetterChange" :cities="cities"></city-alphabet>
	</div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
import CityAlphabet from "./components/Alphabet.vue";

import axios from "axios";

export default {
	name: "City",
	components: {
		CityHeader, CitySearch, CityList, CityAlphabet
	},
	data() {
		return {
			cities: null,
			hotCities: [],
			letter: null
		};
	},
	methods: {
		ddd() {
			this.$router.push({ path: "abc" });
		},
		getCityInfo() {
			axios.get("/api/city.json").then(this.handlerData);
		},
		handlerData(res) {
			res = res.data;
			if (res && res.data) {
				const data = res.data;
				this.cities = data.cities;
				this.hotCities = data.hotCities;
			}
		},
		handleLetterChange(letter) {
			this.letter = letter;
		}
	},
	mounted() {
		this.getCityInfo();
	}
};
</script>

<style lang="stylus" scoped>

</style>
