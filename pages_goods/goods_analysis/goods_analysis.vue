<template>
  <view>
    <view class="nav">
      <view class="chart-contrast" @click="dd" :class="{'active':show==false}">
        图标对比
      </view>
      <view class="table-contrast" :class="{'active':show==true}" @click="dd">
        表格对比
      </view>
    </view>
    <view class="goods-compare">
      <view class="goods-compare-title">
        恒压恒流DC-DC
      </view>
      <view class="current-goods">
        <view>WF5803C</view>
      </view>
      <scroll-view class="goods-compare-item" scroll-x="true">
        <view>WF5803C</view>
        <view>WF5803C</view>
        <view>WF5803C</view>
        <view>WF5803C</view>
        <view>WF5803C</view>
      </scroll-view>
    </view>
    <view class="parms">
      <text class="title">—— 主要参数 ——</text>
      <view class="parms-table">
        <view class="left">
          <view class="parms-name">最大电阻压力</view>
          <view class="parms-name">开关管阻抗</view>
          <view class="parms-name">最大支持功率</view>
          <view class="parms-name">最大工作温度</view>
        </view>
        <view class="right1" v-if="show">
          <view class="parms-name">57V</view>
          <view class="parms-name">57V</view>
          <view class="parms-name">57V</view>
          <view class="parms-name">57V</view>
          <view class="parms-name">57V</view>
          <view class="parms-name">57V</view>
          <view class="parms-name">57V</view>
          <view class="parms-name">57V</view>
        </view>
        <view class="right2" v-if="!show">
          <qiun-data-charts type="radar" :opts="opts" :chartData="chartData" />
        </view>
      </view>
    </view>


  </view>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        // 这里初始化一个null，待会儿用来充当echarts实例
        myChart: null,
        chartData: {},
        opts: {
          color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
          // padding: [1, 1, 1, 1],
          dataLabel: false,
          enableScroll: false,
          legend: {
            show: true,
            position: "bottom",
            lineHeight: 6,
            fontSize: 8
          },
          extra: {
            radar: {
              gridType: "radar",
              gridColor: "#CCCCCC",
              gridCount: 5,
              opacity: 0.2,
              max: 200,
              labelShow: true,
              border: true,
              // radius: 40
              labelPointRadius: 1
            }
          }
        }
      }
    },
    onLoad() {
      this.getServerData();
    },
    methods: {
      dd() {
        this.show = !this.show
      },
      getServerData() {
        let res = {
          categories: ["1", "2", "3", "4", "5", "6"],
          series: [{
              name: "成交量1",
              data: [90, 110, 165, 195, 187, 172]
            },
            {
              name: "成交量2",
              data: [190, 210, 105, 35, 27, 102]
            }
          ]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
      },
    },

  }
</script>

<style lang="scss">
  .nav {
    display: flex;
    justify-content: space-around;
    font-size: 40rpx;
    padding-bottom: 10rpx;

    view {
      padding: 30rpx 20rpx;
      color: #3463c6;

      &.active {
        border-bottom: 2px solid #3463c6;
        color: #010101;
      }
    }

  }

  .goods-compare {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20rpx;

    .goods-compare-title {
      width: 33%;
      height: 120rpx;
      line-height: 120rpx;
      text-align: center;
      border: 1rpx solid #c6d1c8;
      padding: 0 10rpx;
      font-size: 28rpx;
    }

    .current-goods {
      width: 33%;
      height: 120rpx;
      line-height: 120rpx;
      text-align: center;
      border: 1rpx solid #c6d1c8;
      border-left: none;
      padding: 0 10rpx;
      font-size: 28rpx;
    }

    .goods-compare-item {
      width: 34%;
      height: 120rpx;
      white-space: nowrap;
      // line-height: 120rpx;
      // text-align: center;
      border: 1rpx solid #c6d1c8;

      border-left: none;

      view {
        display: inline-block;
      }
    }
  }

  .parms {
    border: 1rpx solid #c6d1c8;
    color: #505e4f;
    font-size: 15px;

    .title {
      background-color: #d8f2d9;
      display: block;
      text-align: center;
      height: 80rpx;
      line-height: 80rpx;
      font-weight: 600;
    }

    .parms-table {
      display: flex;
      min-height: 0;
      overflow: hidden;

      .left {
        flex: 1;
        min-width: 0;
        min-height: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: #d8f2d9;

        .parms-name {
          height: 100%;
          padding: 22rpx;
          display: flex;
          align-items: center;
          border-right: 1rpx solid #c6d1c8;
          border-top: 1rpx solid #c6d1c8;
        }
      }

      .right1 {
        flex: 2;
        display: grid;
        grid-template-columns: auto auto;

        .parms-name {
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1rpx solid #c6d1c8;
          border-top: 1rpx solid #c6d1c8;
        }
      }

      .right2 {
        flex: 2;
        min-width: 0;
        border-right: 1rpx solid #c6d1c8;
        border-top: 1rpx solid #c6d1c8;
      }
    }
  }
</style>
