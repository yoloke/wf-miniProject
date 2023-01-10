<template>
  <view>
    <detail-title title="—— 技术参数 ——"></detail-title>
    <view class="uni-container">
      <uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
        <uni-tr v-for="(item, index) in tableData" :key="index">
          <uni-td align="center">{{ item.text }}</uni-td>
          <uni-td align="center">
            <view class="table-value">{{ item.value }}</view>
          </uni-td>
        </uni-tr>
      </uni-table>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          text: "Status", //显示
          value: "Full Production" // 值
        }, {
          text: "Status", //显示
          value: "Full Production" // 值
        }, {
          text: "Status", //显示
          value: "Full Production" // 值
        }, {
          text: "Status", //显示
          value: "Full Production" // 值
        }, {
          text: "Status", //显示
          value: "Full Production" // 值
        }, {
          text: "Status", //显示
          value: "Full Production" // 值
        }, {
          text: "Status", //显示
          value: "Full Production" // 值
        }, {
          text: "Status", //显示
          value: "Full Production" // 值
        }, {
          text: "Status", //显示
          value: "Full Production" // 值
        }, {
          text: "Status", //显示
          value: "Full Production" // 值
        }, {
          text: "Status", //显示
          value: "Full Production" // 值
        }, {
          text: "Status", //显示
          value: "Full Production" // 值
        }, {
          text: "Status", //显示
          value: "Full Production" // 值
        }, {
          text: "Status", //显示
          value: "Full Production" // 值
        }]
      }
    },
    onLoad(options) {
      uni.setNavigationBarTitle({
        title: options.goods_id
      });
    },
    methods: {

    }
  }
</script>

<style>
  .title {
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    background-color: #fff;
    color: #4765b4;
    border-bottom: 1px solid #efefef;
  }

  .uni-container {
    padding: 20rpx;
  }

  .table-value {
    color: #4765b4;
  }
</style>
