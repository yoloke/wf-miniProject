<template>
  <view>
    <view class="search-box">
      <uni-search-bar @input="input" :radius="100" cancelButton="none" v-model="kw"></uni-search-bar>
      <view class="search-title" v-if="searchResults.length !== 0">
        找到<text>{{searchResults.length}} </text> 条结果
      </view>
    </view>

    <!-- 搜索建议列表 -->
    <view class="sugg-list" v-if="searchResults.length !== 0">
      <view class="sugg-item" v-for="(item, i) in searchResults" :key="i" @click="gotoDetail(item)">
        <view class="goods-name">{{item.goods_name.slice(4,10)}}</view>
        <view class="goods-sketch">{{item.goods_name}}</view>
      </view>
    </view>

    <view v-else>
      <!-- 搜索历史 -->
      <view class="history-box">
        <!-- 标题区域 -->
        <view class="history-title">
          <text>历史记录</text>
          <uni-icons type="trash" size="18" @click="clean" color='#989898'></uni-icons>
        </view>
        <!-- 列表区域 -->
        <view class="history-list">
          <uni-tag :text="item" v-for="(item, i) in histories" :key="i" @click="getSearchList(item)"></uni-tag>
        </view>
      </view>

      <!-- 热门搜索 -->
      <view class="hot-box">
        <!-- 标题区域 -->
        <view class="hot-title">
          <text>热门搜索</text>
        </view>
        <!-- 列表区域 -->
        <view class="hot-list">
          <uni-tag :text="item" v-for="(item, i) in hotList" :key="i" @click="getSearchList(item)"></uni-tag>
        </view>
      </view>

    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        timer: null,
        kw: '',
        // 搜索的结果列表
        searchResults: [],
        // 搜索历史的数组
        historyList: [],
        hotList: ['DSHFSKUJ', '6REWRUIEW', 'HDIUOESAYFIURY', 'SANDUGA', 'SJFIUSAHF', 'DHASUHFDSAJK', 'FDJIUAHFD']
      };
    },
    onLoad(options) {
      this.kw = options.kw
      //加载本地存储的搜索历史记录：
      this.historyList = JSON.parse(uni.getStorageSync('kw') || '[]')
    },
    methods: {
      // input 输入事件的处理函数
      input(e) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.getSearchList()
        }, 500)
      },
      async getSearchList(item) {
        if (item) {
          this.kw = item
        }
        // 判断搜索关键词是否为空
        if (this.kw.length === 0) {
          this.searchResults = []
          return
        }

        const {
          data: res
        } = await uni.$http.get('/api/public/v1/goods/qsearch', {
          query: this.kw
        })
        if (res.meta.status !== 200) return uni.$showMsg()
        this.searchResults = res.message
        this.saveSearchHistory()
      },
      gotoDetail(item) {
        uni.navigateTo({
          url: '/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id
        })
      },
      // 保存搜索关键词的方法
      saveSearchHistory() {
        //直接把搜索关键词 push 到 historyList 数组中
        // this.historyList.push(this.kw)

        // 1. 将 Array 数组转化为 Set 对象
        const set = new Set(this.historyList)
        if (this.kw.trim().length != 0) {
          // 2. 调用 Set 对象的 delete 方法，移除对应的元素
          set.delete(this.kw)
          // 3. 调用 Set 对象的 add 方法，向 Set 中添加元素
          set.add(this.kw)
        }
        // 4. 将 Set 对象转化为 Array 数组
        this.historyList = Array.from(set)

        // 调用 uni.setStorageSync(key, value) 将搜索历史记录持久化存储到本地
        uni.setStorageSync('kw', JSON.stringify(this.historyList))
      },
      clean() {
        // 清空 data 中保存的搜索历史
        this.historyList = []
        // 清空本地存储中记录的搜索历史
        uni.setStorageSync('kw', '[]')
      },
    },
    computed: {
      //关键词前后顺序的问题
      histories() {
        // 数组是引用类型，所以不要直接基于原数组调用 reverse 方法，以免修改原数组中元素的顺序
        // 而是应该新建一个内存无关的数组，再进行 reverse 反转
        return [...this.historyList].reverse()
      }
    }
  }
</script>

<style lang="scss">
  .search-box {
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: #fff;

    .search-title {
      display: flex;
      align-items: center;
      height: 80rpx;
      padding: 0 20rpx;
      border-bottom: 1px solid #efefef;

      text {
        color: #4765b4;
        padding: 0 12rpx;
      }
    }
  }

  .sugg-list {
    padding: 0 5px;

    .sugg-item {
      display: flex;
      flex-direction: column;
      padding: 13px 0;
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

  .history-box {
    padding: 0 15rpx;

    .history-title {
      display: flex;
      justify-content: space-between;
      height: 40px;
      align-items: center;
      font-size: 13px;
    }

    .history-list {
      display: flex;
      flex-wrap: wrap;

      .uni-tag {
        margin-top: 10rpx;
        margin-right: 10rpx;
      }
    }
  }

  .hot-box {
    padding: 0 15rpx;

    .hot-title {
      display: flex;
      justify-content: space-between;
      height: 80rpx;
      align-items: center;
      font-size: 26rpx;
    }

    .hot-list {
      display: flex;
      flex-wrap: wrap;

      .uni-tag {
        margin-top: 10rpx;
        margin-right: 10rpx;
      }
    }
  }
</style>
