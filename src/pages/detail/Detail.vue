<template>
	<div>
		<detail-banner :sightName="sightName" :bannerImg="bannerImg" :images="gallaryImgs"></detail-banner>
		<!--通过@hook:updated监听组件的updated生命钩子函数-->
		<!--组件的所有生命周期钩子都可以通过@hook:钩子函数名 来监听触发-->
		<detail-header @hook:updated="onUpdated"></detail-header>
		<detail-list :list="categoryList"></detail-list>
		<div class="content"></div>
	</div>
</template>

<script>
import DetailBanner from "./components/Banner.vue";
import DetailHeader from "./components/Header.vue";
import DetailList from "./components/List.vue";
import axios from "axios";

export default {
	name: "Detail",
	data() {
		return {
			categoryList: [],
			sightName: "",
			bannerImg: "",
			gallaryImgs: []
		};
	},
	components: {
		DetailBanner, DetailHeader, DetailList
	},
	methods: {
		onUpdated() {
			console.log("通过@hook:updated监听组件的updated生命钩子函数");
		},
		getDetailInfo() {
			axios.get("/api/detail.json", { params: { id: this.$route.params.id } })
				.then(this.handlerDetailInfo);
		},
		handlerDetailInfo(ret) {
			ret = ret.data;
			if (ret && ret.data) {
				const data = ret.data;
				this.sightName = data.sightName;
				this.bannerImg = data.bannerImg;
				this.gallaryImgs = data.gallaryImgs;
				this.categoryList = data.categoryList;
			}
		}
	},
	mounted() {
		this.getDetailInfo();
		this.$router.par;
	}
};
</script>

<style lang="stylus" scoped>
.content {
	height: 50rem;
}
</style>
