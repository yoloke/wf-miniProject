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
      <view class="item">
        <image src="../../static/hot-goods/test1.png" mode="widthFix"></image>
      </view>
      <view class="item">
        <image src="../../static/hot-goods/test1.png" mode="widthFix"></image>
      </view>
      <view class="item">
        <image src="../../static/hot-goods/test1.png" mode="widthFix"></image>
      </view>
      <view class="item">
        <image src="../../static/hot-goods/test1.png" mode="widthFix"></image>
      </view>
      <view class="item">
        <image src="../../static/hot-goods/test1.png" mode="widthFix"></image>
      </view>
      <view class="item">
        <image src="../../static/hot-goods/test1.png" mode="widthFix"></image>
      </view>
      <view class="item">
        <image src="../../static/hot-goods/test1.png" mode="widthFix"></image>
      </view>
      <view class="item">
        <image src="../../static/hot-goods/test1.png" mode="widthFix"></image>
      </view>

    </view>
    <view class="common-features">
      <view class="common-features-title">
        常用功能
      </view>
      <view class="common-features-list">
        <view class="item" @click="gotoCate()">
          <view class="iconfont icon-RectangleCopy18"></view>
          <view class="title">
            参数选型
          </view>
        </view>
        <view class="item">
          <view class="iconfont icon-RectangleCopy2"></view>
          <view class="title">
            全部产品
          </view>
        </view>
        <view class="item">
          <view class="iconfont icon-history-copy"></view>
          <view class="title">
            最近浏览
          </view>
        </view>
        <view class="item" @click="gotoApply()">
          <view class=" iconfont icon-gongnengdingyi"></view>
          <view class="title">
            应用方案
          </view>
        </view>
        <view class="item" @click="gotoMyService">
          <view class=" iconfont icon-RectangleCopy14"></view>
          <view class="title">
            伟烽服务
          </view>
        </view>
        <view class="item" @click="gotoCooperation">
          <view class="iconfont icon-RectangleCopy1"></view>
          <view class="title">
            供应商合作
          </view>
        </view>
        <view class="item" @click="gotoSearch">
          <view class="iconfont icon-chaxun"></view>
          <view class="title">
            丝印查询
          </view>
        </view>
        <view class="item">
          <view class="iconfont icon-share"></view>
          <view class="title">
            分享好友
          </view>
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
        hotImgList: ['']
      };
    },
    onLoad() {
      this.getHotList()
    },
    methods: {
      async getHotList() {
        //const res = await api.getHotList()
        // console.log(res);
      },
      // 跳转到分包中的搜索页面
      gotoSearch() {
        uni.navigateTo({
          url: '/subpkg/search/search'
        })
      },
      gotoCate() {
        uni.switchTab({
          url: '/pages/cate/cate'
        })
      },
      gotoApply() {
        uni.switchTab({
          url: '/pages/apply/apply'
        })
      },
      gotoMyService() {
        uni.navigateTo({
          url: '/subpkg/my_service/my_service'
        })
      },
      gotoCooperation() {
        uni.navigateTo({
          url: '/subpkg/cooperation/cooperation'
        })
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
