<template>
  <view class="home">
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommends"/>
    <home-popular/>
    <home-tabcontrol :titles="['流行', '新款', '精选']"/>
<!--    <goods-list/>-->
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
  </view>
</template>

<script>
  import { getHomeMultidata } from 'network/home'

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomePopular from "./childComps/HomePopular";
  import HomeTabcontrol from "./childComps/HomeTabcontrol";

  // import GoodsList from "components/content/goods/GoodsList"
  export default {
    name: "Home",
    components: {
      HomeSwiper,
      HomeRecommend,
      HomePopular,
      HomeTabcontrol,
      // GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    onLoad() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    }
  }
</script>

<style scoped>

</style>