<template>
  <view class="box">
    <detail-title title="—— 芯片百科 ——"></detail-title>
    <p>WF480RA是一款高集成度、低功耗的单片ASK/OOK射频接收芯片。</p>
    <p>高频信号接收功能全部集成于片内以达到用最少的外围器件和最低的成本获得最可靠的接收果。</p>
    <p>因此它是真正意义上的“无线高频调制信号输入，数字解调信号输出”的单片接收器件。</p>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    onLoad(options) {
      uni.setNavigationBarTitle({
        title: options.goods_id
      });
    }
  }
</script>

<style lang="scss">
  .box {
    margin-top: 10rpx;
  }

  p {
    padding: 10rpx 40rpx;
  }
</style>
