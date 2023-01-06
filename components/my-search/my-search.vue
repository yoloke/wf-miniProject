<template>
  <view class="my-search-container">
    <!-- 使用 view 组件模拟 input 输入框的样式 -->
    <view class="my-search-box" @click="searchBoxHandler">
      <view class="iconfont icon-sousuo"></view>
      <!-- <uni-icons type="search" size="20" color="#999999"></uni-icons> -->
      <text class="placeholder">请输入您要的芯片型号</text>
    </view>
  </view>
</template>
<script>
  export default {
    name: "my-search",
    data() {
      return {

      };
    },
    methods: {
      // 点击了模拟的 input 输入框
      searchBoxHandler() {
        // 触发外界通过 @click 绑定的 click 事件处理函数
        this.$emit('click')
      }
    },

    onLoad() {
      // const sysInfo = uni.getSystemInfoSync()
      // // 可用高度 = 屏幕高度 - navigationBar高度 - tabBar高度 - 自定义的search组件高度
      // this.wh = sysInfo.windowHeight - 50
    }
  }
</script>

<style lang="scss">
  .my-search-container {
    margin: 0 40rpx;
  }

  .my-search-box {
    height: 36px;
    background-color: #ffffff;
    border-radius: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .iconfont {
      color: #999999
    }

    .placeholder {
      color: #999999;
      font-size: 28rpx;
      margin-left: 10rpx;
    }
  }
</style>
