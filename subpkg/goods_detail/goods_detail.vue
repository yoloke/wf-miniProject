<template>
  <view class="parm-list">
    <view class="goods-sketch">
      {{goods_info.goods_name}}
    </view>
    <view class="goods-specification">
      <view class="title">规格书</view>
      <view class="box">
        <view class="iconfont icon-pdf"></view>
        <text>pdf</text>
      </view>
      <view class="box">
        <view class="iconfont icon-shujufenxi-liuliangfenxi"></view>
        <text>分析</text>
      </view>
      <view class="box">
        <view class="iconfont icon-baocun"></view>
        <text>保存</text>
      </view>
      <view class="box">
        <view class="iconfont icon-email"></view>
        <text>邮件</text>
      </view>
      <view class="box">
        <view class="iconfont icon-dakai"></view>
        <text>打开</text>
      </view>
    </view>
    <view class="jishucanshu">
      <view class="title">技术参数</view>
      <view class="iconfont icon-next"></view>
    </view>
    <view>
      <view class="title">芯片百科</view>
      <view class="iconfont icon-next"></view>
    </view>
    <view>
      <view class="title">技术文章</view>
      <view class="iconfont icon-next"></view>
    </view>
    <view>
      <view class="title">替代型号</view>
      <view class="iconfont icon-next"></view>
    </view>
    <view>
      <view class="title">免费样品</view>
      <view class="iconfont icon-next"></view>
    </view>
    <view>
      <view class="title">参考价格</view>
      <view class="iconfont icon-next"></view>
    </view>
    <view>
      <view class="title">购买渠道</view>
      <view class="iconfont icon-next"></view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 商品详情对象
        goods_info: {}

      };
    },
    onLoad(options) {
      // 获取商品 Id
      const goods_id = options.goods_id
      // 调用请求商品详情数据的方法
      this.getGoodsDetail(goods_id)
      uni.setNavigationBarTitle({
        title: options.goods_id
      });
    },
    methods: {
      // 定义请求商品详情数据的方法
      async getGoodsDetail(goods_id) {
        const {
          data: res
        } = await uni.$http.get('/api/public/v1/goods/detail', {
          goods_id
        })
        if (res.meta.status !== 200) return uni.$showMsg()
        // 为 data 中的数据赋值
        this.goods_info = res.message
        console.log(this.goods_info);
      }
    }
  }
</script>

<style lang="scss">
  .parm-list {
    display: flex;
    flex-direction: column;


    & view:nth-child(n+2) {
      height: 120rpx;
      border-bottom: 2rpx solid #cfcfcf;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30rpx;

      .iconfont {
        color: #3167c9;
        font-size: 50rpx;
      }
    }

    .goods-sketch {
      font-size: 30rpx;
      padding: 40rpx 20rpx;
      color: #696969;
      letter-spacing: 4rpx;
      border-bottom: 2rpx solid #cfcfcf;
    }

    .goods-specification {
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .iconfont {
          font-size: 50rpx;
          color: #3167c9;
        }

        text {
          font-size: 20rpx;
          color: #b8b8b8;
        }
      }
    }
  }
</style>
