<template>
  <view class="home">
    <scroll-view class="scroll" scroll-y :scroll-top="scrollTop"
                 @scroll="scroll" lower-threshold="150"
                 @scrolltolower="pullUpLoad"
                 :scroll-into-view="intoView" scroll-with-animation>
      <home-swiper :banners="banners" class="home-swiper" id="home-swiper"/>
      <home-recommend :recommends="recommends" @imageLoad="imageLoad"/>
      <home-popular/>
      <home-tabcontrol :titles="['流行', '新款', '精选']" @tabClick="tabClick"
                       ref="tabcontrol2" id="home-tabcontrol2" :class="{fixtab: tabShow}"/>
      <home-tabcontrol v-if="tabShow"/>
      <goods-list :goods="goods[currentType].list"/>
    </scroll-view>
    <back-top v-if="isShow" @click.native="backClick"/>
  </view>
</template>

<script>
  import { getHomeMultidata, getHomeGoods } from 'network/home'

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomePopular from "./childComps/HomePopular";
  import HomeTabcontrol from "./childComps/HomeTabcontrol";

  import GoodsList from "components/content/goods/GoodsList"
  import BackTop from "components/common/backTop/BackTop"
  export default {
    name: "Home",
    components: {
      HomeSwiper,
      HomeRecommend,
      HomePopular,
      HomeTabcontrol,
      GoodsList,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []}
        },
        currentType: 'pop',
        isShow: false,
        scrollTop: 1,
        intoView: '',
        tabShow: false,
        tabHeight: 0
      }
    },
    onLoad() {
      this._getHomeMultidata()
      this._getHomeGoods('pop')
      this._getHomeGoods('new')
      this._getHomeGoods('sell')
    },
    onShow() {

    },
    methods: {
      _getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      _getHomeGoods(type) {
        getHomeGoods(type, ++this.goods[type].page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
        })
      },
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
           case 1:
            this.currentType = 'new'
            break
           case 2:
            this.currentType = 'sell'
            break
        }
      },
      backClick() {
        //两种方法都行滚动到顶部
        this.scrollTop = 0
        this.$nextTick(() => {
          this.scrollTop = 1
        })
        // this.intoView = 'home-swiper'
        // this.$nextTick(() => {
        //   this.intoView = ''
        // })
      },
      scroll(e) {
        //这段很重要 不管属性有没有在界模板上显示,都不要在这里频繁调用.
        let tem = e.detail.scrollTop >= 1000
        if(tem !== this.isShow) {
          this.isShow = tem
        }
        let flag = e.detail.scrollTop >= this.tabHeight
        if(flag !== this.tabShow) {
          this.tabShow = flag
        }
      },
      pullUpLoad() {
        this._getHomeGoods(this.currentType)
      },
      imageLoad() {
        wx.createSelectorQuery().select('#home-tabcontrol2').boundingClientRect(rect => {
          this.tabHeight = rect.top
        }).exec()
      }
    }
  }
</script>

<style scoped lang="scss">
  .home {
    .fixtab {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 9;
      background-color: #fff;
    }
    .scroll {
      height: 100vh;
    }
  }
</style>