<template>
  <view>
    <view class="sugg-list">
      <view class="sugg-item" @click="gotoGoodsDetail">
        <view class="goods-name">WF5803C防水气压传感器</view>
        <view class="goods-sketch">
          WF5803C防水气压传感器WF水气压传感器
        </view>
      </view>
      <view class="sugg-item" v-for="(item,index) in 100" :key="index" @click="gotoGoodsDetail">
        <view class="goods-name">WF5803F防水气压传感器</view>
        <view class="goods-sketch">
          WF5803C防水气压传感器WF水气压传感器WF5803C防水气压传感器WF水气压传感器WF5803C防水气压传感器WF水气压传感器WF5803C防水气压传感器WF水气压传感器</view>
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
        white-space: nowrap;
        // 溢出部分隐藏
        overflow: hidden;
        // 文本溢出后，使用 ... 代替
        text-overflow: ellipsis;
        margin-right: 3px;
      }

      .goods-sketch {
        font-size: 26rpx;
        color: #b7b7b7;
        // 文字不允许换行（单行文本）
        white-space: nowrap;
        // 溢出部分隐藏
        overflow: hidden;
        // 文本溢出后，使用 ... 代替
        text-overflow: ellipsis;
        margin-right: 3px;
      }
    }
  }
</style>
