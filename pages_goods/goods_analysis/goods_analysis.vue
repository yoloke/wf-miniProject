<template>
  <view>
    <view class="nav">
      <view class="chart-contrast">
        图标对比
      </view>
      <view class="table-contrast active">
        表格对比
      </view>
    </view>
    <view class="parms">
      <text class="title">—— 主要参数 ——</text>
      <view class="xx">
        <view class="left">
          <view class="gg">最大电阻压力</view>
          <view class="gg">开关管阻抗</view>
          <view class="gg">最大支持功率</view>
          <view class="gg">最大工作温度</view>

        </view>
        <view class="right">
          <view class="gg">57V</view>
          <view class="gg">57V</view>
          <view class="gg">57V</view>
          <view class="gg">57V</view>
          <view class="gg">57V</view>
          <view class="gg">57V</view>
          <view class="gg">57V</view>
          <view class="gg">57V</view>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    onLoad(options) {
      //let goods_info = JSON.parse(options.goods_info)
      //console.log(goods_info);
    }
  }
</script>

<style lang="scss">
  .nav {
    display: flex;
    justify-content: space-around;
    font-size: 40rpx;
    padding-bottom: 30rpx;

    view {
      padding: 30rpx 20rpx;
      color: #3463c6;

      &.active {
        border-bottom: 2px solid #3463c6;
        color: #010101;
      }
    }

  }

  .parms {
    border: 1rpx solid #c6d1c8;
    color: #505e4f;
    font-size: 15px;

    .title {
      background-color: #d8f2d9;
      display: block;
      text-align: center;
      height: 80rpx;
      line-height: 80rpx;
      font-weight: 600;

    }

    .xx {
      display: flex;


      .left {
        flex: 1;
        background-color: #d8f2d9;

        .gg {
          padding: 20rpx;
          border-right: 1rpx solid #c6d1c8;
          border-top: 1rpx solid #c6d1c8;
        }
      }

      .right {
        flex: 2;
        display: grid;
        grid-template-columns: auto auto;

        .gg {
          border-right: 1rpx solid #c6d1c8;
          border-top: 1rpx solid #c6d1c8;
        }

      }
    }
  }
</style>
