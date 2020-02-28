<template>
  <div class="goods-list-item">
    <img src="" alt="" mode="widthFix">
    <div class="info">
      <div class="title"></div>
      <span class="price"></span>
      <span class="collect"></span>
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
  .goods-list-item {
    width: 47%;
    .info {
      img {
        width: 100%;
      }
      .title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>