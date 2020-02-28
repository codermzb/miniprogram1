<template>
  <div class="tabcontrol">
    <div class="item" v-for="(item, index) in titles" :key="item"
         :class="{active: currentIndex === index}" @click="tabClick(index)">
      <span>
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeTabcontrol",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabcontrol {
    display: flex;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    .item {
      flex: 1;
    }
    .active {
      color: #ff5777;
      span {
        padding: 3px 5px;
        border-bottom: 2px solid #ff5777;
      }
    }
  }
</style>