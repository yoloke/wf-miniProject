<template>
  <view>
    <view class="header">
      <image class="target" src="https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/target.jpg" mode="widthFix">
      </image>
      <block v-if="token">尊敬的会员</block>
      <view class="username" @click="getUserInfo" v-if="!token">{{username}}</view>
    </view>
    <view class="list1">
      <view class="icon">
        <view class="iconfont icon-shoucang"></view>
      </view>
      <navigator url="../../pages_my/my_collection/my_collection" class="text">
        我的收藏
      </navigator>
      <view class="icon">
        <view class="iconfont icon-kefu">
        </view>
      </view>
      <navigator url="../../pages_my/contact_us/contact_us" class="text">
        联系我们
      </navigator>
    </view>
    <view class="list2">
      <view class="icon">
        <view class="iconfont icon-tuichu">
        </view>
      </view>
      <view class="text">
        退出登录
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        username: "登录",
      }
    },
    methods: {
      // 2. 调用 mapMutations 辅助方法，把 m_user 模块中的 updateUserInfo 映射到当前组件中使用
      ...mapMutations('m_user', ['updateUserInfo']),
      getUserInfo() {
        // uni.getUserInfo({
        //   provider: 'weixin',
        //   success: (res) => {
        //     console.log('getUserInfo', res);
        //   },
        // });
        uni.navigateTo({
          url: '/pages_my/my_login/my_login'
        })
      },
    },
    computed: {
      // token 是用户登录成功之后的 token 字符串
      ...mapState('m_user', ['token']),
    }

  }
</script>

<style lang="scss">
  page {
    background-color: #fafafa;
  }

  .header {
    padding-top: 120rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 370rpx;
    background: linear-gradient(to top right, #376bce, #83b6f5);
    color: #fff;

    .target {
      width: 180rpx;
      border-radius: 50%;
      border: 4rpx solid #fff;
      margin-bottom: 20rpx;
    }

    .username {
      margin-top: 10rpx;
      ;
    }
  }

  .list1 {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 10fr;
    grid-column-gap: 10rpx;
    grid-template-rows: repeat(2, 100rpx);
    border-bottom: 2rpx solid #c8c8c8;
    background-color: #fff;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #456ebf;

      .iconfont {
        font-size: 50rpx;
      }
    }

    .text {
      position: relative;
      line-height: 100rpx;
      font-size: 26rpx;
      border-bottom: 2rpx solid #efefef;

      &::after {
        display: block;
        content: "\e6a2";
        font-family: 'iconfont';
        position: absolute;
        top: 0;
        right: 30rpx;
        font-size: 50rpx;
        color: #cccccc;
      }
    }
  }

  .list2 {
    margin-top: 30rpx;
    display: grid;
    background-color: #fff;
    justify-content: center;
    border-bottom: 2rpx solid #c8c8c8;
    grid-template-columns: 1fr 10fr;
    grid-column-gap: 10rpx;
    grid-template-rows: repeat(1, 100rpx);

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #456ebf;

      .iconfont {
        font-size: 50rpx;
      }
    }

    .text {
      position: relative;
      line-height: 100rpx;
      font-size: 26rpx;
      border-bottom: 2rpx solid #efefef;

      &::after {
        display: block;
        content: "\e6a2";
        font-family: 'iconfont';
        position: absolute;
        top: 0;
        right: 30rpx;
        font-size: 50rpx;
        color: #cccccc;
      }
    }
  }
</style>
