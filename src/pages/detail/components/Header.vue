<template>
	<div>
		<router-link to="/" tag="div" class="header-abs" v-show="showAbs">
			<div class="header-abs-back iconfont">&#xe60d;</div>
		</router-link>
		<div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
			<router-link to="/">
				<div class="header-fixed-back iconfont">&#xe60d;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
export default {
	name: "DetailHeader",
	data() {
		return {
			showAbs: true,
			opacityStyle: {
				opacity: 0
			}
		};
	},
	methods: {
		handlerScroll() {
			// const top = document.documentElement.scrollTop
			// 电脑浏览器使用上面这段代码没问题,但是在手机浏览器中使用会有问题
			const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
			if (top > 60) {
				let opacity = top / 140;
				opacity = opacity > 1 ? 1 : opacity;
				this.opacityStyle = { opacity };
				this.showAbs = false;
			} else {
				this.showAbs = true;
			}
		}
	},
	mounted() {
		// 监听窗口滚动事件
		window.addEventListener("scroll", this.handlerScroll);
		// 通过hook监听组件销毁钩子函数，并取消监听事件
		this.$once("hook:beforeDestroy", () => {
			console.log("通过hook监听组件销毁钩子函数，并取消监听事件");
			window.removeEventListener("resize", this.handlerScroll);
		});
	},
	destroyed() {
		// window.removeEventListener('scroll', this.handlerScroll)
	}
};
</script>

<style lang="stylus" scoped>
    /*关于为什么要加 ~ 请查看README文件*/
    @import '~styles/varibles.styl';

    .header-abs {
        position: absolute;
        left: .2rem;
        top: .2rem;
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        border-radius .4rem;
        text-align: center;
        background: rgba(0, 0, 0, 0.8);

        .header-abs-back {
            color: #eee;
            font-size: .4rem;

        }
    }

    .header-fixed {
        z-index: 2;
        position: fixed;
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
            width: .64rem;
            font-size .4rem;
            text-align: center;
            color: #fff;
            top: 0;
            left: 0;
        }
    }
</style>
