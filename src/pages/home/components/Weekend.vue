<template>
  <div v-if="showWeek">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrap">
          <img class="item-img" v-bind:src="item.imgUrl" alt>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Weekend",
    props: {
      weekendList: {
        type: Array
      }
    },
    computed: {
      showWeek() {
        return this.weekendList.length;
      }
    }
  };
</script>

<style lang="stylus" scoped>
    /*关于为什么要加 ~ 请查看README文件*/
  @import '~styles/mixins.styl';

  .title {
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
  }

  .item {
    .item-img-wrap {
      overflow: hidden;
      height: 0;
      padding-bottom: 37.09%;

      .item-img {
        width: 100%;
      }
    }

    .item-info {
      padding: 0.1rem;

      .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        ellipsis();
      }

      .item-desc {
        line-height: 0.4rem;
        color: #ccc;
        ellipsis();
      }
    }
  }
</style>
