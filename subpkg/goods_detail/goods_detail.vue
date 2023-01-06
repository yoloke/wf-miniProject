<template>
  <view class="parm-list">
    <view class="goods-sketch">
      {{goods_info.goods_name}}
    </view>
    <view class="goods-specification">
      <view class="title">规格书</view>
      <view class="box" @click="openPdf()">
        <view class="iconfont icon-pdf"></view>
        <text>pdf</text>
      </view>
      <view class="box" @click="gotoGoodsAnalysis">
        <view class="iconfont icon-fenxi"></view>
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
        goods_info: {},
        title: "",
        goodsHistoryList: [],
        goodInfo: {}
      };
    },
    onLoad(options) {
      const goods_id = options.goods_id
      this.title = options.goods_id
      // 调用请求商品详情数据的方法
      this.getGoodsDetail(goods_id)
      uni.setNavigationBarTitle({
        title: options.goods_id
      });
      this.goodsHistoryList = JSON.parse(uni.getStorageSync('goodsHistoryList') || '[]')
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
        this.saveGoodsHistory()
      },
      saveGoodsHistory() {
        this.goodInfo = {
          goods_id: this.goods_info.goods_id,
          goods_name: this.goods_info.goods_name,
          date: this.getNowDate()
        }
        // 1. 将 Array 数组转化为 Set 对象
        const set = new Set(this.goodsHistoryList)
        // 2. 调用 Set 对象的 delete 方法，移除对应的元素
        // 不能使用Set.delete()方法从集合中删除对象
        // 如果您想从集合中删除一个对象，必须使用或类似的方法遍历集合。找到要删除的元素后，只需照常删除即可：/
        set.forEach((item) => {
          if (item.goods_id == this.goodInfo.goods_id) {
            set.delete(item)
          }
        });
        //set.delete(this.goodInfo)
        // console.log(set.delete(this.goodInfo));
        // 3. 调用 Set 对象的 add 方法，向 Set 中添加元素
        set.add(this.goodInfo)
        // 4. 将 Set 对象转化为 Array 数组
        this.goodsHistoryList = Array.from(set)
        // 调用 uni.setStorageSync(key, value) 将搜索历史记录持久化存储到本地
        uni.setStorageSync('goodsHistoryList', JSON.stringify(this.goodsHistoryList))
      },
      // 格式化日对象
      getNowDate() {
        var date = new Date();
        var year = date.getFullYear() // 年
        var month = date.getMonth() + 1; // 月
        var day = date.getDate(); // 日
        // 给一位数的数据前面加 “0”
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (day >= 0 && day <= 9) {
          day = "0" + day;
        }
        return year + "-" + month + "-" + day;
      },

      //浏览pdf文件
      openPdf() {
        wx.downloadFile({ //下载对应文件
          url: "https://www.te.com.cn/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FMS5837_Grove_Board%7FA%7Fpdf%7FEnglish%7FENG_DS_MS5837_Grove_Board_A.pdf%7FCAT-DCS0043", // 下载文件网络地址
          success: function(res) {
            var filePath = res.tempFilePath; //本地文件路径    
            uni.navigateTo({
              url: '/pages_goods/goods_pdf/goods_pdf?src=' + filePath
            })
          }
        })
      },
      gotoGoodsAnalysis() {
        let goodInfo = JSON.stringify(this.goodInfo)
        uni.navigateTo({
          url: '/pages_goods/goods_analysis/goods_analysis?goods_info=' + goodInfo
        })
      }
    },
    onShareAppMessage(res) {
      return {
        title: this.title, //分享的名称
        path: '/subpkg/goods_detail/goods_detail?goods_id=' + this.title,
        mpId: 'wx801fb6d90c631dcc', //此处配置微信小程序的AppId,
      }
    },
    //分享到朋友圈
    onShareTimeline(res) {
      return {
        title: this.title,
        type: 0, //转发形式0 - 微信小程序正式版 ；
        summary: "",
      }
    },
    computed: {}

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
      padding: 0 16rpx 0 20rpx;

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
        padding: 0 10rpx;
        border: none;

        .iconfont {
          font-size: 50rpx;
          color: #3167c9;
        }

        .icon-pdf {
          color: #d5200a;
        }

        text {
          font-size: 20rpx;
          color: #b8b8b8;
        }
      }
    }
  }
</style>
