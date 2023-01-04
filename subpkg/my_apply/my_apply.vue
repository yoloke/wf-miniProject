<template>
  <view>
    <view class="img">
      <image src="../../static/7.jpg" mode="widthFix"></image>
    </view>
    <view class="nav">
      <view class="active">芯片</view>
      <view>规格</view>
      <view>框图</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .img {
    background-color: pink;

    image {
      width: 100%;
    }

  }

  .nav {
    display: flex;
    justify-content: space-around;
    border-bottom: 2rpx solid #d8d8d8;

    view {
      font-size: 30rpx;
      padding: 20rpx 10rpx;

      &.active {
        border-bottom: 4rpx solid #3564c9;
      }
    }
  }
</style>
