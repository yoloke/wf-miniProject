<template>
  <view class="goods-list">
    <view class="goods-item" v-for="(item,i) in histories" :key="i" @click="gotoDetail(item)">
      <view class="goods-info">
        <view class="goods-title">
          <view class="name">{{item.goods_name.slice(4,10)}}</view>
          <view class="date">{{item.date}}</view>
        </view>
        <view class="goods-sketch">
          {{item.goods_name}}
        </view>
      </view>
      <view class="iconfont icon-next"></view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        goodsHistoryList: []
      }
    },
    methods: {
      gotoDetail(item) {
        uni.navigateTo({
          url: '/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id
        })
      },

    },
    onLoad() {
      this.goodsHistoryList = JSON.parse(uni.getStorageSync('goodsHistoryList') || '[]')
    },
    computed: {
      //关键词前后顺序的问题
      histories() {
        // 数组是引用类型，所以不要直接基于原数组调用 reverse 方法，以免修改原数组中元素的顺序
        // 而是应该新建一个内存无关的数组，再进行 reverse 反转
        return [...this.goodsHistoryList].reverse()
      }
    }
  }
</script>

<style lang="scss">
  .goods-item {
    display: flex;
    border-bottom: 1rpx solid #cecece;
    padding: 20rpx;

    .goods-info {
      width: calc(94%);
    }

    .goods-title {
      display: flex;
      justify-content: space-between;
      padding-bottom: 20rpx;
    }

    .date {
      color: #b7b7b7;
      font-size: 14px;
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
    }

    .iconfont {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-size: 40rpx;
      color: #b7b7b7;
    }
  }
</style>
