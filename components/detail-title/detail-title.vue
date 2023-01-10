<template>
  <view class="title" title="sss">
    {{title}}
  </view>
</template>

<script>
  export default {
    name: "detail-title",
    props: {
      title: ""
    },
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .title {
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    background-color: #fff;
    color: #4765b4;
    border-bottom: 1px solid #efefef;
  }
</style>
