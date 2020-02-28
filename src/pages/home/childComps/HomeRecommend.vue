<template>
  <view class="recommend">
    <view v-for="item in recommends" :key="item" class="recommend-item">
      <img :src="item.image" alt="" mode="widthFix">
      <view class="title">{{item.title}}</view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .recommend {
    display: flex;
    text-align: center;
    font-size: 13px;
    color: #333;
    padding-top: 6px;
    padding-bottom: 3px;
    border-bottom: 5px solid #eee;
    .recommend-item {
      flex: 1;
      .title {
        margin-top: 3px;
      }
      img {
        width: 65px;
      }
    }
  }
</style>