<template>
  <view>
    <view style="text-indent: 2em;" class="first-paragraph">伟烽恒科技是业界知名的半导体公司，可以为用户提供芯片选型和查找代替芯片的免费服务。</view>
    <view style="text-indent: 2em;">您可以长按识别下面二维码，在公众号中留言您的选型需求或替代需求，我们将即使推荐给您合适的芯片型号。</view>
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
        popupURL1: 'https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/qrcode_for_gh_1b751963cc9a_258.jpg'
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
