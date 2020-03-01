<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.iid" :item-info="item" class="goods-list-item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem"
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .goods-list-item {
    width: 48%;
  }
</style>