<template>
  <div class="goods-list-item-info">
    <a :href="itemInfo.link">
      <img :src="itemInfo.show.img" alt="" mode="fixFix">
    </a>
    <div class="info">
      <div class="title">{{itemInfo.title}}</div>
      <span class="price">{{itemInfo.price}}</span>
      <img src="~static/img/home/collect.png" alt="" >
      <span class="collect">{{itemInfo.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      itemInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .goods-list-item-info {
    a {
      img {
        width: 100%;
        height: 231px;
        border-radius: 5px 5px 0 0;
      }
    }
    .info {
      font-size: 12px;
      text-align: center;
      margin-bottom: 3px;
      .title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price {
        margin-right: 20px;
        color: #ff5777;
      }
      img {
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
      }
    }
  }
</style>