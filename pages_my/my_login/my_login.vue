<template>
  <view>
    <view class="logo">
      <image src="https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/logo.png" mode="widthFix"></image>
      <view class="logo_title">
        <text class="big_title">伟烽恒科技</text>
        <text class="small_title">www.weifengheng.com</text>
      </view>
    </view>
    <view class="login-form">
      <uni-forms :modelValue="formData" label-position="left">
        <uni-forms-item label="shouji">
          <uni-easyinput type="text" v-model="formData.phone" placeholder="请输入手机号" />
        </uni-forms-item>
        <uni-forms-item label="mima">
          <uni-easyinput type="password" v-model="formData.pass" placeholder="请输入密码" />
        </uni-forms-item>
        <button @click="submitForm">登录</button>
      </uni-forms>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          phone: "15362304491",
          pass: ""
        }
      };
    }
  }
</script>

<style lang="scss">
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400rpx;

    image {
      width: 200rpx;
    }

    .logo_title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      color: #3266cc;

      .big_title {
        display: block;
        font-size: 60rpx;
        font-weight: 700;
        letter-spacing: 8rpx
      }

      .small_title {
        display: block;
        font-size: 30rpx;
      }
    }
  }

  .login-form {
    padding: 60rpx;

    .uni-easyinput__content-input {
      line-height: 1;
      font-size: 18px;
      height: 35px;
    }

    .iconfont {
      border-radius: 50%;
      padding: 6rpx;
      border: 1px solid #3266cc;
      color: #3266cc;
      font-size: 18px;
    }

    button {
      margin: 40rpx 40rpx !important;
      background-color: #cccccc;
      color: #fff;
      font-size: 16px;

    }

    .is-input-border {
      border: none;
      border-radius: 0;
      border-bottom: 1px solid #3266cc !important;
    }
  }
</style>
