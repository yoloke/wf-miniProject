<template>
  <view>
    <view style="text-indent: 2em;" class="first-paragraph">越来越多的用户希望伟烽恒能够提供各个产品和购买渠道。请各位有合作意向的厂家或代理商联系我们，谢谢。</view>
    <view class="image-box">
      <image src="https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/qrcode_for_gh_1b751963cc9a_258.jpg"
        mode="widthFix" :show-menu-by-longpress="true"></image>
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
  view {
    padding: 20rpx 50rpx;
    color: #323232;
  }

  .image-box {
    display: flex;
    justify-content: center;

    image {
      width: 80%;
    }
  }

  .first-paragraph {
    margin-top: 60rpx;
  }
</style>
