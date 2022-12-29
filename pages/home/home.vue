<template>
  <view>
    <view class="header">
      <view class="logo">
        <image src="../../static/logo.png" mode="widthFix"></image>
        <view class="logo_title">
          <text class="big_title">伟烽恒科技</text>
          <text class="small_title">www.weifengheng.com</text>
        </view>
      </view>
      <view class="search">
        <!-- 使用自定义的搜索组件 -->
        <my-search @click="gotoSearch">
        </my-search>
      </view>
      <view class="hotContain">
        <text class="hot">热搜型号 ：</text>
        <text v-for="(item, i) in hotList" :key="i">{{item +' '}}</text>
      </view>
    </view>
    <view class="hot-goods-header">
      <view class="title-box">
        <view class="title">
          热门产品
        </view>
      </view>
      <view class="more">
        <text>更多</text>
        <uni-icons type="arrowright" color="#999999" size="20"></uni-icons>
      </view>
    </view>
    <view class="hot-goods-list">
      <navigator class="item" v-for="(item,i) in 8" :key="i" url="/subpkg/goods_detail/goods_detail?goods_id=569">
        <image :src="testImg" mode="widthFix"></image>
      </navigator>

    </view>
    <view class="common-features">
      <view class="common-features-title">
        常用功能
      </view>
      <view class="common-features-list">
        <navigator url="../cate/cate" class="item" open-type="switchTab">
          <view class="iconfont icon-RectangleCopy18"></view>
          <view class="title">
            参数选型
          </view>
        </navigator>
        <navigator url="../../subpkg/goods_all/goods_all" class="item">
          <view class="iconfont icon-RectangleCopy2"></view>
          <view class="title">
            全部产品
          </view>
        </navigator>
        <navigator url="/subpkg/goods_history/goods_history" class="item">
          <view class="iconfont icon-history-copy"></view>
          <view class="title">
            最近浏览
          </view>
        </navigator>
        <navigator url="/pages/apply/apply" class="item" open-type="switchTab">
          <view class=" iconfont icon-gongnengdingyi"></view>
          <view class="title">
            应用方案
          </view>
        </navigator>
        <navigator url="/subpkg/my_service/my_service" class="item">
          <view class=" iconfont icon-RectangleCopy14"></view>
          <view class="title">
            伟烽服务
          </view>
        </navigator>
        <navigator url="/subpkg/cooperation/cooperation" class="item">
          <view class="iconfont icon-RectangleCopy1"></view>
          <view class="title">
            供应商合作
          </view>
        </navigator>
        <navigator url="../../subpkg/search/search" class="item">
          <view class="iconfont icon-chaxun"></view>
          <view class="title">
            丝印查询
          </view>
        </navigator>
        <view class="item">
          <button open-type="share"></button>
          <view class="iconfont icon-share"></view>
          <view class="title">分享好友</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        hotList: ['DETRTR', 'FDFDFD', 'GFDGD', 'FDFD78'],
        hotImgList: [''],
        testImg: '../../static/hot-goods/test1.png'
      };
    },
    onLoad() {
      this.getHotList()
    },
    methods: {
      async getHotList() {},
    },
    onShareAppMessage(res) {
      return {
        title: '伟烽恒科技有限公司',
        path: '/pages/home/home'
      }
    },
    //分享到朋友圈
    onShareTimeline(res) {
      return {
        title: '伟烽恒科技有限公司',
        type: 0,
        summary: "",
      }
    },
  }
</script>

<style lang="scss">
  page {
    background-color: #fafafa;
  }

  .header {
    padding-top: 140rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 370rpx;
    background: linear-gradient(to top right, #376bce, #83b6f5);

    .logo {
      display: flex;
      align-items: center;
      height: 120rpx;

      image {
        width: 200rpx;
      }

      .logo_title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        color: #fff;

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

    .search {
      margin-top: 60rpx;
      width: 100%;
    }

    .hotContain {
      color: #fff;
      font-size: 28rpx;
      margin: auto;
    }
  }

  .hot-goods-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10rpx 30rpx 20rpx 30rpx;
    padding-top: 10rpx;
    height: 80rpx;
    color: #333333;
    background-color: #ffffff;

    .title-box {
      display: flex;
      align-items: center;
      height: 100%;
      box-sizing: border-box;
      border-bottom: 8rpx solid #3266cc;
      font-weight: 600;

      .title {
        font-size: 28rpx;
      }
    }

    .more {
      display: flex;
      font-size: 24rpx;

      text {
        display: block;
        margin: auto;
      }

      .uni-icons {
        margin-left: 8rpx;
      }

    }
  }

  .hot-goods-list {
    display: grid;
    padding: 20rpx 10rpx;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16rpx;
    background-color: #fff;


    .item {
      image {
        width: 100%;
      }
    }
  }

  .common-features {
    margin-top: 16rpx;
    padding: 32rpx 20rpx;
    background-color: #fff;
    ;

    .common-features-title {
      padding: 20rpx 0;
    }

    .common-features-list {
      display: grid;
      justify-content: center;
      height: 300rpx;
      // 定义每一列的列宽
      // grid-template-rows属性定义每一行的行高。
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 16rpx;

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #757575;
        background-color: #fff;

        button {
          margin: unset;
          position: absolute;
          height: 100rpx;
          width: 100rpx;
          opacity: 0;
        }

        button:after {
          border: unset;
        }

        .iconfont {
          font-size: 60rpx;
          margin-bottom: 20rpx;
        }

        .title {
          font-size: 30rpx;
        }
      }
    }
  }
</style>
