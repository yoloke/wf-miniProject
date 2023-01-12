<template>
  <view>
    <detail-title title="—— 购买渠道 ——"></detail-title>
    <view class="goods-info-box">
      <!-- 商品左侧图片区域 -->
      <view class="goods-left">
        <image src="https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/test1.png" class="goods-pic"
          mode="widthFix"></image>
      </view>
      <view class="goods-right">

        <view class="goods-name">
          WF5803C防水气压传感器
        </view>
        <view class="goods-sketch">
          WF5803C防水气压传感器WF5803C防水气压传感器WF5803C防水气压传感器WF5803C防水气压传感器
        </view>
        <!-- 商品价格 -->
        <view class="goods-price">
          <view>￥99</view>
          <view>税前￥120</view>
        </view>
        <!-- 商品数量 -->
        <view class="bottom-box">
          <uni-number-box :min="1" v-model="num"></uni-number-box>
          <view class="clear-box" @click="clear">清 空</view>
        </view>
      </view>

    </view>
    <view class="allPrice">
      <text>产品总价</text>
      <text style="color: #c00000;">￥{{allPrice}}</text>
    </view>
    <view class="discount">
      <text>使用优惠卷</text>
      <text style="font-size:20px ;" class="iconfont icon-next"></text>
    </view>
    <view class="discount">
      <text>积分抵扣</text>
      <text style="font-size:20px ;" class="iconfont icon-next"></text>
    </view>
    <view class="buy-button">
      <view>
        <view class="totle"><text>总计 : </text><text>￥{{allPrice}}</text></view>
        <view class="disnum">
          为您节省￥{{0}}
        </view>
      </view>
      <view class="tijiao">提 交</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        num: 1,
        price: 99,
      };
    },
    methods: {
      clear() {
        this.num = 0
      }
    },
    computed: {
      allPrice() {
        return this.num * this.price
      }
    },

    onLoad(options) {
      uni.setNavigationBarTitle({
        title: options.goods_id
      });
    }
  }
</script>

<style lang="scss">
  page {
    background-color: #fafafa;
  }

  .goods-info-box {
    margin-top: 4px;
    display: flex;
    padding: 0 10px;
    border-bottom: 1px solid #efefef;
    background-color: #fff;

    .goods-left {
      width: 30%;
      display: flex;
      align-items: center;

      .goods-pic {
        width: 100%;
      }
    }

    .goods-right {
      display: flex;
      margin-left: 5px;
      flex-direction: column;
      width: 70%;


      .goods-name {
        font-size: 16px;
        margin-bottom: 6px;
        color: #4765b4;
      }

      .goods-sketch {
        margin-bottom: 2px;
        font-size: 13px;
        color: #757575;
        // 文字不允许换行（单行文本）
        white-space: nowrap;
        // 溢出部分隐藏
        overflow: hidden;
        // 文本溢出后，使用 ... 代替
        text-overflow: ellipsis;
      }

      .goods-price {
        font-size: 13px;
        display: flex;

        & view:nth-child(1) {
          color: #c00000;
        }

        & view:nth-child(2) {
          margin-left: 30rpx;
          color: #999999;
          text-decoration: line-through;
        }
      }

      .bottom-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;

        .uni-numbox__value {
          height: 20px;
        }

        .clear-box {
          border-radius: 5px;
          padding: 2px 5px;
          font-size: 12px;
          height: 20px;
          border: 1px solid #f5f5f5;
        }
      }
    }

  }

  .allPrice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90rpx;
    padding: 0 10px;
    border-bottom: 1px solid #efefef;
    color: #999999;
    background-color: #fff;
  }

  .discount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    height: 90rpx;
    padding: 0 10px;
    border-bottom: 1px solid #efefef;
    color: #999999;
  }

  .buy-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 0 10px;
    margin: 50px 0;
    height: 120rpx;
    border-bottom: 1px solid #efefef;

    .totle {
      & text:nth-child(1) {
        margin-right: 6px;
        font-size: 14px;
      }

      & text:nth-child(2) {
        color: #c00000;
        font-weight: 800;
      }
    }

    .disnum {
      color: #999999;
      font-size: 12px;
      margin-top: 4px;
    }

    .tijiao {
      height: 40px;
      line-height: 40px;
      text-align: center;
      width: 80px;
      border-radius: 6px;
      color: #fff;
      background-color: #4765b4;
    }
  }
</style>
