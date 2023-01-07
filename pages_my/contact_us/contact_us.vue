<template>
  <view>
    <view class="imagebox">
      <image src="https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/logo.png" mode="widthFix"></image>
      <text>伟烽恒科技 V 2.3.9</text>
    </view>
    <view class="list">
      <view class="list-item">
        <text>公司电话</text>
        <text>0755-23311175</text>
      </view>
      <view class="list-item">
        <text>发送邮件</text>
        <text>sales@weifengheng.com</text>
      </view>
      <view class="list-item">
        <text>打开官网</text>
        <text>http://www.weifengheng.com</text>
      </view>
      <view class="list-item">
        <text>工作时间</text>
        <text>周一到周五 9:00-18:00</text>
      </view>
      <view class="list-item">
        <text>用户协议</text>
        <text class="iconfont icon-next"></text>
      </view>
      <view class="list-item">
        <text>隐私政策</text>
        <text class="iconfont icon-next"></text>
      </view>
      <view class="list-item">
        <text>注销账号</text>
        <text class="iconfont icon-next"></text>
      </view>
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
  page {
    background-color: #fafafa;
  }

  .imagebox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 350rpx;

    image {
      width: 30%;
    }

    text {
      margin-top: 30rpx;
      font-weight: 800;
    }
  }

  .list {
    .list-item {
      display: flex;
      justify-content: space-between;
      padding: 30rpx;
      background-color: #fff;
      margin-bottom: 3px;

      & text:nth-child(2) {
        font-size: 28rpx;
        color: #999999;
      }

      .iconfont {
        font-size: 42rpx !important;
      }
    }
  }
</style>
