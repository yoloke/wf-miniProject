<template>
  <view>
    <view class="scroll-view-container">
      <!-- 左侧的滚动视图区域 -->
      <scroll-view class="left-scroll-view" scroll-y :style="{height: wh + 'px'}" enhanced :show-scrollbar="false">
        <block v-for="(item, i) in cateList" :key="i">
          <view :class="['left-scroll-view-item', i === active ? 'active' : '']" @click="activeChanged(i)">
            {{item.cat_name}}
          </view>
        </block>
      </scroll-view>
      <!-- 右侧的滚动视图区域 -->
      <scroll-view class="middle-scroll-view" scroll-y :style="{height: wh + 'px'}">
        <block v-for="(item, i) in cateLevel2" :key="i">
          <view :class="['middle-scroll-view-item']" @click="gotoGoodsList(item.cat_name)">
            {{item.cat_name}}
          </view>
        </block>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 当前设备可用的高度
        wh: 0,
        cateList: [],
        active: 0,
        // 二级分类的列表
        cateLevel2: [],
        scrollTop: 0
      };
    },
    onLoad() {
      // 获取当前系统的信息
      const sysInfo = uni.getSystemInfoSync()
      // 为 wh 窗口可用高度动态赋值
      this.wh = sysInfo.windowHeight
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
        // 为二级分类赋值
        this.cateLevel2 = res.message[0].children
      },
      // 选中项改变的事件处理函数
      activeChanged(i) {
        this.active = i
        // 重新为二级分类赋值
        this.cateLevel2 = this.cateList[i].children
        this.scrollTop = this.scrollTop === 0 ? 1 : 0
      },
      // 跳转到商品列表页面
      gotoGoodsList(name) {
        uni.navigateTo({
          url: '/subpkg/search/search?kw=' + name
        })
      },
    }
  }
</script>

<style lang="scss">
  .scroll-view-container {
    display: flex;

    .left-scroll-view {
      flex: 1;

      .left-scroll-view-item {
        line-height: 100rpx;
        background-color: #c9e4f9;
        text-align: center;
        font-size: 28rpx;

        // 激活项的样式
        &.active {
          background-color: #ffffff;
          ;
          position: relative;
          color: #3266cc;
        }
      }
    }

    .middle-scroll-view {
      flex: 1;

      .middle-scroll-view-item {
        line-height: 100rpx;
        text-align: center;
        font-size: 28rpx;
      }
    }
  }
</style>
