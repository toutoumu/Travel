<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header.vue'
    import HomeSwiper from './components/Swiper.vue'
    import HomeIcons from './components/Icons.vue'
    import HomeRecommend from './components/Recommend.vue'
    import HomeWeekend from './components/Weekend.vue'
    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: 'Home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend,
        },
        data() {
            return {
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: [],
                lastCity: '',
            }
        },
        computed: {
            // 将state(state.js)中定义的 city 展开到 这里的计算属性 city
            ...mapState(['city']),
        },
        methods: {
            getHomeInfo() {
                axios.get('/api/index.json?city=' + this.city).then(this.handlerHomeData)
            },
            handlerHomeData(ret) {
                ret = ret.data
                if (ret.ret && ret.data) {
                    const data = ret.data
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
                }
            },
        },
        mounted() {
            this.getHomeInfo()
        },
        activated() {
            // 使用了keep-alive 之后会多两个生命周期函数
            if (this.lastCity !== this.city) {
                this.getHomeInfo()
                this.lastCity = this.city
            }
        },
    }
</script>

<style lang="stylus" scoped>

</style>
