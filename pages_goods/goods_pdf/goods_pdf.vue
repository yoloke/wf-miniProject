<template>
  <view class="page">
    <web-view :src="src" v-if="iOS"></web-view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        src: '', // PDF地址
        iOS: true
      }
    },
    onLoad(options) {
      uni.setNavigationBarTitle({
        title: 'PDF'
      });
      // 上一个页面传过来的src参数，与前缀拼接
      let src =
        "https://www.te.com.cn/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FMS5837_Grove_Board%7FA%7Fpdf%7FEnglish%7FENG_DS_MS5837_Grove_Board_A.pdf%7FCAT-DCS0043";
      // 判断操作系统
      uni.getSystemInfo({
        success: (res) => {
          if (res.system.includes('iOS')) {
            this.iOS = true;
            // iOS 可直接查看
            this.src = src;
          } else {
            this.iOS = false;
            // Android 需要下载后再打开
            uni.downloadFile({
              url: "https://www.te.com.cn/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FMS5837_Grove_Board%7FA%7Fpdf%7FEnglish%7FENG_DS_MS5837_Grove_Board_A.pdf%7FCAT-DCS0043",
              filePath: wx.env.USER_DATA_PATH + '/' + 'PDF文件名.pdf', //指定文件下载后存储的路径 (本地路径)
              success: (res) => {
                console.log(res);
                var filePath = res.filePath;
                uni.openDocument({
                  filePath: filePath,
                  fileType: 'pdf',
                  success: (res) => {
                    //关闭当前页面，返回上一页面。
                    uni.navigateBack({
                      delta: 1
                    });
                  },
                  fail: (err) => {
                    uni.showToast({
                      title: '打开文件失败',
                      icon: 'none',
                      duration: 2000
                    });
                  }
                });
              },
              fail: (err) => {
                uni.showToast({
                  title: '下载文件失败',
                  icon: 'none',
                  duration: 2000,
                });
                console.log(src);
              }
            });

          }
        }
      });
    }
  }
</script>
