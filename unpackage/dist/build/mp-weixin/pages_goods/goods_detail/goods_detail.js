(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_goods/goods_detail/goods_detail"],{"1a52":function(o,t,i){"use strict";(function(o){var t=i("4ea4");i("06f6");t(i("66fd"));var e=t(i("d7d2"));wx.__webpack_require_UNI_MP_PLUGIN__=i,o(e.default)}).call(this,i("543d")["createPage"])},"4e8a":function(o,t,i){"use strict";i.r(t);var e=i("e5ea"),s=i.n(e);for(var n in e)["default"].indexOf(n)<0&&function(o){i.d(t,o,(function(){return e[o]}))}(n);t["default"]=s.a},6121:function(o,t,i){},d7d2:function(o,t,i){"use strict";i.r(t);var e=i("fef2"),s=i("4e8a");for(var n in s)["default"].indexOf(n)<0&&function(o){i.d(t,o,(function(){return s[o]}))}(n);i("fd75");var d=i("f0c5"),a=Object(d["a"])(s["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);t["default"]=a.exports},e5ea:function(o,t,i){"use strict";(function(o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{goods_info:{},title:"",goodsHistoryList:[],goodInfo:{}}},onLoad:function(t){var i=t.goods_id;this.title=t.goods_id,this.getGoodsDetail(i),o.setNavigationBarTitle({title:t.goods_id}),this.goodsHistoryList=JSON.parse(o.getStorageSync("goodsHistoryList")||"[]")},methods:{gotoGoodsChip:function(){o.navigateTo({url:"/pages_goods/goods_chip/goods_chip?goods_id="+this.goods_info.goods_id})},baocun:function(){o.showLoading({title:"保存中"}),o.downloadFile({url:"https://www.te.com.cn/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FMS5837_Grove_Board%7FA%7Fpdf%7FEnglish%7FENG_DS_MS5837_Grove_Board_A.pdf%7FCAT-DCS0043",success:function(t){200==t.statusCode&&(o.hideLoading(),o.saveFile({tempFilePath:t.tempFilePath,success:function(t){o.showToast({icon:"none",title:"文件已保存",duration:2e3}),console.log(t)}}))},fail:function(t){console.log(t),o.showToast({icon:"none",mask:!0,title:"文件下载失败"})}})},getGoodsDetail:async function(t){var i=await o.$http.get("/api/public/v1/goods/detail",{goods_id:t}),e=i.data;if(200!==e.meta.status)return o.$showMsg();this.goods_info=e.message,this.saveGoodsHistory()},saveGoodsHistory:function(){var t=this;this.goodInfo={goods_id:this.goods_info.goods_id,goods_name:this.goods_info.goods_name,date:this.getNowDate()};var i=new Set(this.goodsHistoryList);i.forEach((function(o){o.goods_id==t.goodInfo.goods_id&&i.delete(o)})),i.add(this.goodInfo),this.goodsHistoryList=Array.from(i),o.setStorageSync("goodsHistoryList",JSON.stringify(this.goodsHistoryList))},getNowDate:function(){var o=new Date,t=o.getFullYear(),i=o.getMonth()+1,e=o.getDate();return i>=1&&i<=9&&(i="0"+i),e>=0&&e<=9&&(e="0"+e),t+"-"+i+"-"+e},openPdf:function(){o.navigateTo({url:"/pages_goods/goods_pdf/goods_pdf?src="})},gotoGoodsAnalysis:function(){var t=JSON.stringify(this.goodInfo);o.navigateTo({url:"/pages_goods/goods_analysis/goods_analysis?goods_info="+t})}},onShareAppMessage:function(o){return{title:this.title,path:"/subpkg/goods_detail/goods_detail?goods_id="+this.title,mpId:"wx801fb6d90c631dcc"}},onShareTimeline:function(o){return{title:this.title,type:0,summary:""}},computed:{}};t.default=i}).call(this,i("543d")["default"])},fd75:function(o,t,i){"use strict";var e=i("6121"),s=i.n(e);s.a},fef2:function(o,t,i){"use strict";i.d(t,"b",(function(){return e})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){}));var e=function(){var o=this.$createElement;this._self._c},s=[]}},[["1a52","common/runtime","common/vendor"]]]);