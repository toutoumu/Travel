<template>
    <ul class="list">
        <!-- @touchstart.prevent="handlerTouchStart" 加上.prevent 解决页面跟随滚动问题 -->
        <!--:ref 属性 this$refs.A 相当于 document.getElementByID('A)-->
        <li class="item"
            @touchstart="handlerTouchStart"
            @touchmove.prevent="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handlerClick"
            v-for="(item) in letters"
            :key="item"
            :ref='item'>{{item}}
        </li>
    </ul>
</template>

<script>

    export default {
        name: 'Alphabet',
        props: {
            cities: Object,
        },
        data() {
            return {
                touchStatus: false,
                startY: 0,
                timer: null,
            }
        },
        updated() {
            this.startY = this.$refs['A'][0].offsetTop
        },
        methods: {
            handlerClick(e) {
                // 点击单词触发自定义事件
                this.$emit('change', e.target.innerHTML.trim())
            },
            handlerTouchStart() {
                this.touchStatus = true
            },
            handleTouchEnd() {
                this.touchStatus = false
            },
            handleTouchMove(e) {
                if (this.touchStatus) {
                    // 事件节流
                    if (this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {
                        // A 字母在容器中的位置
                        // const startY = this.$refs['A'][0].offsetTop
                        // 触摸点在容器中的位置 这里的 79 是 top 属性 1.58rem * 50 = 79px 的高度
                        const touchY = e.touches[0].clientY - 79
                        // 这里的 20 是字母的高度 0.4rem * 50 = 20px
                        const index = Math.floor((touchY - this.startY) / 20)
                        if (index >= 0 && index < this.letters.length) {
                            this.$emit('change', this.letters[index])
                        }
                    }, 10)
                }
            },
        },
        computed: {
            letters() {
                const letters = []
                for (let i in this.cities) {
                    letters.push(i)
                }
                return letters
            },
        },
    }
</script>

<style lang="stylus" scoped>
    /*关于为什么要加 ~ 请查看README文件*/
    @import "~styles/varibles.styl"

    .list {
        display: flex;
        position: absolute;
        flex-direction column;
        justify-content center;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        width: .4rem;

        .item {
            text-align: center;
            line-height: .4rem;
            color: $bgColor;
        }
    }
</style>
