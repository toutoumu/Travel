<template>
  <div v-if="showRec">
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item in list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" v-bind:src="item.imgUrl" alt>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      list: {
        type: Array
      }
    },
    data() {
      return {};
    },
    computed: {
      showRec() {
        return this.list.length;
      }
    }
  };
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';

  .title {
    line-height: 0.8rem;
    background: #eee;
    margin-top: 0.2rem;
    text-indent: 0.2rem;
  }

  .item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;

    .item-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: 0.1rem;
    }

    .item-info {
      flex: 1;
      padding: 0.1rem;
      min-width: 0;

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

      .item-button {
        line-height: 0.44rem;
        background: #ff9300;
        padding: 0 0.2rem;
        border-radius: 0.06rem;
        margin-top: 0.16rem;
        color: #fff;
      }
    }
  }
</style>
