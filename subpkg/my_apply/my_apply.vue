<template>
  <view>
    <view class="img">
      <image src="https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/image-20230106174422493.png" mode="widthFix">
      </image>
    </view>
    <view class="nav">
      <view :class="show == 'xinpian' ?'active':''" @click="gg('xinpian')">芯片</view>
      <view :class="show == 'guige' ?'active':''" @click="gg('guige')">规格</view>
      <view :class="show == 'kuangtu' ?'active':''" @click="gg('kuangtu')">框图</view>
    </view>
    <view class="kuangtu" v-if="show=='kuangtu'">
      <image src="https://wf-cloud-img.oss-cn-hangzhou.aliyuncs.com/image/32fcc92f287fa882b836ad19fa3fc94.png"></image>
    </view>
    <view class="guige" v-if="show=='guige'">
      <p>型号：A16-045N1A </p>
      <p>输入：100-240V~50/60HZ 1.2A</p>
      <p>输出：5V3A、9V3A、15V3A、20V2.25A</p>
    </view>
    <!-- 搜索建议列表 -->
    <view class="sugg-list" v-if="show=='xinpian'">
      <view class="sugg-item">
        <view class="goods-name">WF5803C防水气压传感器</view>
        <view class="goods-sketch">
          WF5803C防水气压传感器WF水气压传感器
        </view>
      </view>
      <view class="sugg-item">
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
        show: "xinpian",
        title: "智能燃气表"
      };
    },
    onLoad() {
      uni.setNavigationBarTitle({
        title: this.title
      })
    },
    methods: {
      gg(value) {
        this.show = value
      }
    }
  }
</script>

<style lang="scss">
  .img {
    image {
      width: 100%;
    }

  }

  .nav {
    display: flex;
    justify-content: space-around;
    border-top: 2rpx solid #d8d8d8;
    border-bottom: 2rpx solid #c8c8c8;

    view {
      font-size: 30rpx;
      padding: 28rpx 10rpx;

      &.active {
        border-bottom: 4rpx solid #3564c9;
      }
    }
  }

  .kuangtu {
    display: flex;
    justify-content: center;
    margin-top: 20rpx;
  }

  .guige {
    margin: 20rpx;
  }

  .sugg-list {
    padding: 0 5px;

    .sugg-item {
      display: flex;
      flex-direction: column;
      padding: 13px 10rpx;
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
