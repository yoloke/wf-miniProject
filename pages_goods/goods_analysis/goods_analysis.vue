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
    <uni-table class="table-box" stripe emptyText="暂无更多数据">
      <uni-tr class="">
        <uni-td class="">最大电阻压力</uni-td>
        <uni-td class="">57 v</uni-td>
        <uni-td class="">58 v</uni-td>
      </uni-tr>
      <uni-tr class="">
        <uni-td class="">最大电阻压力</uni-td>
        <uni-td class="">57 v</uni-td>
        <uni-td class="">58 v</uni-td>
      </uni-tr>
      <uni-tr class="">
        <uni-td class="">最大电阻压力</uni-td>
        <uni-td class="">57 v</uni-td>
        <uni-td class="">58 v</uni-td>
      </uni-tr>
      <uni-tr class="">
        <uni-td class="">最大电阻压力</uni-td>
        <uni-td class="">57 v</uni-td>
        <uni-td class="">58 v</uni-td>
      </uni-tr>

    </uni-table>
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
      //this.getServerData();
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

  .table-box {
    table-layout: fixed;
    max-width: 100%;
    overflow-x: auto;

    .uni-table-td {
      padding: 0 !important;
      border: 1px solid gray;
      width: 100px;
      height: 30px;
    }
  }
</style>
