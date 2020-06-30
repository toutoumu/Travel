<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">您的位置</div>
				<div class="button-list">
					<!--注意这里不用使用 this.currentCity-->
					<div class="button-wrapper" @click="handlerCityClick(currentCity)">
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>
			<!--热门城市-->
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item in hotcities" :key="item.id">
						<div class="button" @click="handlerCityClick(item.name)"> {{item.name}}</div>
					</div>
				
				</div>
			</div>
			<!--循环object-->
			<div class="area" v-for="(item,key) in cities" :key="key">
				<div class="title border-topbottom" :ref="key">{{key}}</div>
				<div class="item-list" v-for="city in item" :key="city.id">
					<div class="item border-bottom" @click="handlerCityClick(city.name)">{{city.name}}</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import Bscrool from "better-scroll";
import { mapState, mapMutations } from "vuex";

export default {
	name: "List",
	props: {
		hotcities: Array,
		cities: Object,
		letter: String
	},
	computed: {
		// 将state(state.js)中定义的 city 展开到 这里的计算属性 currentCity
		...mapState({
			currentCity: "city"
		})
	},
	mounted() {
		// 解决better-scroll使click事件失效问题
		// https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#swipebouncetime
		const options = {
			scrollY: true,
			scrollX: false,
			mouseWheel: true,
			click: true,
			taps: true
		};
		this.scroll = new Bscrool(this.$refs.wrapper, options);
	},
	methods: {
		// 将 mutations.js 中的方法展开放在这里
		...mapMutations(["changeCity"]),
		handlerCityClick(city) {
			this.$store.dispatch("changeCity", city);
			this.changeCity(city); // 更新全局状态city
			this.$router.back();
		}
	},
	watch: {
		letter(newValue, oldValue) {
			if (this.letter) {
				const element = this.$refs[this.letter][0];
				this.scroll.scrollToElement(element);
			}
		}
	}
};
</script>

<style lang="stylus" scoped>

.border-topbottom
	&:before {
		background-color: #ccc;
	}
	
	&:after {
		background-color: #ccc;
	}

.border-bottom
	&:before {
		background-color: #ccc;
	}

.list {
	overflow: hidden;
	position: absolute;
	left: 0;
	top: 1.58rem;
	bottom: 0;
	right: 0;
	
	.title {
		line-height: .54rem;
		background: #eee;
		padding-left: .2rem;
		color: #666;
		font-size: .26rem;
	}
	
	.button-list {
		padding: .1rem .6rem .1rem .1rem;
		overflow: hidden;
		
		.button-wrapper {
			float: left;
			width: 33.33%;
			
			.button {
				margin: .1rem;
				padding: .1rem;
				text-align: center;
				border: .02rem solid #ccc;
				border-radius: .06rem;
				
			}
		}
	}
	
	.item-list {
		.item {
			line-height: .76rem;
			color: #666;
			padding-left: .2rem;
			
		}
	}
}

</style>
