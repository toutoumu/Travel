<template>
  <ul class="list">
    <!-- @touchstart.prevent="handlerTouchStart" 加上.prevent 解决页面跟随滚动问题 -->
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handlerLetterClick"
      @touchstart.prevent="handlerTouchStart"
      @touchmove="handlerTouchMove"
      @touchend="handlerTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
  export default {
    name: "Alphabet",
    props: {
      cities: {
        type: Object
      }
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      };
    },
    updated() {
      this.startY = this.$refs["A"][0].offsetTop; // 右侧字母第一个字母的位置
    },
    computed: {
      letters() {
        const letters = [];
        for (let i in this.cities) {
          letters.push(i);
        }
        return letters; // ['A','B'];
      }
    },
    methods: {
      handlerLetterClick(e) {
        this.$emit("change", e.target.innerHTML);
      },
      handlerTouchStart() {
        this.touchStatus = true;
      },
      handlerTouchMove(e) {
        // 手指在字母列表滑动,左侧列表同步滚动
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer);
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79;
            const index = Math.floor((touchY - this.startY) / 20);
            console.log(this.startY);
            console.log(touchY);
            console.log(index);
            if (index >= 0 && index < this.letters.length) {
              this.$emit("change", this.letters[index]);
            }
          }, 10);
        }
      },
      handlerTouchEnd() {
        this.touchStatus = false;
      }
    }
  };
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: 0.4rem;

    .item {
      text-align: center;
      line-height: 0.4rem;
      color: $bgColor;
    }
  }
</style>
