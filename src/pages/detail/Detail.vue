<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :images="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="categoryList"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner.vue'
    import DetailHeader from './components/Header.vue'
    import DetailList from './components/List.vue'
    import axios from 'axios'

    export default {
        name: 'Detail',
        data() {
            return {
                categoryList: [],
                sightName: '',
                bannerImg: '',
                gallaryImgs: [],
            }
        },
        components: {
            DetailBanner, DetailHeader, DetailList,
        },
        methods: {
            getDetailInfo() {
                axios.get('/api/detail.json', {params: {id: this.$route.params.id}})
                    .then(this.handlerDetailInfo)
            },
            handlerDetailInfo(ret) {
                ret = ret.data
                if (ret && ret.data) {
                    const data = ret.data
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImgs = data.gallaryImgs
                    this.categoryList = data.categoryList
                }
            },
        },
        mounted() {
            this.getDetailInfo()
        },
        activated() {}
    }
</script>

<style lang="stylus" scoped>
    .content {
        height: 50rem;
    }
</style>
