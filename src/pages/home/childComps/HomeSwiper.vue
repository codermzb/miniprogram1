<template>
  <view class="swiper">
    <swiper indicator-dots indicator-active-color="#ff5777" autoplay interval="3000" duration="200" circular>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <img :src="item.image" alt="" mode="widthFix">
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    img {
      width: 100%;
    }
</style>