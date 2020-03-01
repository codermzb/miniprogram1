<template>
  <div class="back-top">
    <img src="~static/img/home/top.png" alt="" mode="widthFix">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    data() {
      return {
        isShow: true
      }
    },
    // methods: {
    //   backClick() {
    //     wx.pageScrollTo({
    //       scrollTop: 0
    //     })
    //   }
    // }
  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 4px;
    bottom: 4px;
  }
  img {
    width: 40px;
  }
</style>