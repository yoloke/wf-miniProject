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
    <view class="parms">
      <text class="title">—— 主要参数 ——</text>
      <view class="xx">
        <view class="left">
          <view class="gg">最大电阻压力</view>
          <view class="gg">开关管阻抗</view>
          <view class="gg">最大支持功率</view>
          <view class="gg">最大工作温度</view>

        </view>
        <view class="right1" v-if="show">
          <view class="gg">57V</view>
          <view class="gg">57V</view>
          <view class="gg">57V</view>
          <view class="gg">57V</view>
          <view class="gg">57V</view>
          <view class="gg">57V</view>
          <view class="gg">57V</view>
          <view class="gg">57V</view>
        </view>
        <view class="right2" v-if="!show">
          <view class="charts-box">
            <!-- <qiun-data-charts type="column" :chartData="chartData" /> -->
          </view>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
  // 将npm方式下载的echarts插件引入进来
  import * as echarts from 'echarts';
  export default {
    data() {
      return {
        show: false,
        // 这里初始化一个null，待会儿用来充当echarts实例
        myChart: null,
        chartData: {},
      }
    },
    onReady() {
      this.getServerData();
    },
    methods: {
      dd() {
        this.show = !this.show
      },
      getServerData() {
        //模拟从服务器获取数据时的延时
        let res = {
          categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
          series: [{
              name: "目标值",
              data: [35, 36, 31, 33, 13, 34]
            },
            {
              name: "完成量",
              data: [18, 27, 21, 24, 6, 28]
            }
          ]
        };
        this.chartData = JSON.parse(JSON.stringify(res));

      },
    },
    onLoad(options) {
      //let goods_info = JSON.parse(options.goods_info)
      //console.log(goods_info);
    }
  }
</script>

<style lang="scss">
  .nav {
    display: flex;
    justify-content: space-around;
    font-size: 40rpx;
    padding-bottom: 30rpx;

    view {
      padding: 30rpx 20rpx;
      color: #3463c6;

      &.active {
        border-bottom: 2px solid #3463c6;
        color: #010101;
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

    .xx {
      display: flex;

      .left {
        flex: 1;
        background-color: #d8f2d9;

        .gg {
          padding: 20rpx;
          border-right: 1rpx solid #c6d1c8;
          border-top: 1rpx solid #c6d1c8;
        }
      }

      .right1 {
        flex: 2;
        display: grid;
        grid-template-columns: auto auto;

        .gg {
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1rpx solid #c6d1c8;
          border-top: 1rpx solid #c6d1c8;
        }
      }

      .right2 {
        flex: 2;
        border-right: 1rpx solid #c6d1c8;
        border-top: 1rpx solid #c6d1c8;

        .charts-box {
          width: 100%;
          height: 100%;


        }
      }
    }
  }
</style>
