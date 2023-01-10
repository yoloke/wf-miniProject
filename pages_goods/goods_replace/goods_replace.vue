<template>
  <view>
    <detail-title title="—— 替代型号 ——"></detail-title>
    <view class="contrast">
      <button @click="gotoGoodsAnalysis">一键对比</button>
    </view>
    <view class="sugg-list">
      <view class="sugg-item" @click="gotoGoodsDetail">
        <view class="goods-name">WF5803C防水气压传感器</view>
        <view class="goods-sketch">
          WF5803C防水气压传感器WF水气压传感器
        </view>
      </view>
      <view class="sugg-item" @click="gotoGoodsDetail">
        <view class="goods-name">WF5803F防水气压传感器</view>
        <view class="goods-sketch">WF5803C防水气压传感器WF水气压传感器</view>
      </view>
    </view>
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
    },
    methods: {
      gotoGoodsAnalysis() {
        uni.navigateTo({
          url: '/pages_goods/goods_analysis/goods_analysis'
        })
      },
      gotoGoodsDetail() {
        uni.navigateTo({
          url: '/pages_goods/goods_detail/goods_detail?goods_id=' + 456
        })
      },
    }
  }
</script>

<style lang="scss">
  page {
    background-color: #fafafa;
  }

  .title {
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    background-color: #fff;
    color: #4765b4;
    border-bottom: 1px solid #efefef;
  }

  .contrast {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 90rpx;

    button {
      width: 22%;
      color: #fff;
      background-color: #4765b4;
      font-size: 12px;
      margin: 0;
      margin-right: 20rpx;
    }
  }

  .sugg-list {

    padding: 0 5px;

    .sugg-item {
      display: flex;
      flex-direction: column;
      padding: 13px 10rpx;
      background-color: #fff;
      border-bottom: 1px solid #efefef;

      .goods-name {
        color: #4765b4;
        font-size: 32rpx;
        margin-bottom: 20rpx;
        // 文字不允许换行（单行文本）
        //white-space: nowrap;
        // 溢出部分隐藏
        //overflow: hidden;
        // 文本溢出后，使用 ... 代替
        //text-overflow: ellipsis;
        //margin-right: 3px;
      }

      .goods-sketch {
        font-size: 26rpx;
        color: #b7b7b7;
      }
    }
  }
</style>
