<template>
  <view>
    <scroll-view class="scroll-view" :scroll-x="true">
      <view :class="['scroll-item' ,  i === active ? 'active' : '']" v-for="(item, i) in cateList" :key="i"
        @click="activeChanged(i)">
        {{item.cat_name}}
      </view>
    </scroll-view>
    <view class="list">
      <view class="list-item" v-for="(item, i) in cateLevel2" :key="i">
        <view class="icon1 iconfont icon-Delete"></view>
        {{item.cat_name}}
        <view class="icon2 iconfont icon-next"></view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
        cateList: [],
        cateLevel2: []
      }
    },
    onLoad() {
      // 调用获取分类列表数据的方法
      this.getCateList()
    },
    methods: {
      // 获取分类列表的数据
      async getCateList() {
        const {
          data: res
        } = await uni.$http.get('/api/public/v1/categories')
        if (res.meta.status !== 200) return uni.$showMsg()
        this.cateList = res.message
        console.log(this.cateList);
        // 为二级分类赋值
        this.cateLevel2 = res.message[0].children
      },
      // 选中项改变的事件处理函数
      activeChanged(i) {
        this.active = i
        this.cateLevel2 = this.cateList[i].children;
        console.log(this.cateLevel2);
      },
      // 跳转到商品列表页面
    }
  }
</script>

<style lang="scss">
  .scroll-view {
    width: 100%;
    white-space: nowrap;
    border-bottom: 2rpx solid #c8c8c8;

    .scroll-item {
      display: inline-block;
      height: 100rpx;
      line-height: 100rpx;
      padding: 0 20rpx;

      &.active {
        color: #3266cc;
        border-bottom: 4rpx solid #3266cc;
      }
    }
  }

  .list {
    .list-item {
      position: relative;
      display: flex;
      height: 100rpx;
      line-height: 100rpx;
      padding: 0 20rpx;
      border-bottom: 2rpx solid #c8c8c8;

      .icon1 {
        padding-right: 20rpx;
      }

      .icon2 {
        position: absolute;
        font-size: 50rpx;
        right: 30rpx;
        color: #cccccc;
      }
    }

    // display: grid;
    // justify-content: center;
    // //grid-template-columns: 1fr 10fr;
    // grid-column-gap: 10rpx;
    // //grid-template-rows: repeat(5, 100rpx);
    // border-bottom: 2rpx solid #c8c8c8;
    // background-color: #fff;
  }
</style>
