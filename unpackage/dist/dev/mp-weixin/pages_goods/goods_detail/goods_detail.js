(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_goods/goods_detail/goods_detail"],{145:function(o,t,e){"use strict";(function(o){var t=e(3);e(25);t(e(24));var s=t(e(146));wx.__webpack_require_UNI_MP_PLUGIN__=e,o(s.default)}).call(this,e(1)["createPage"])},146:function(o,t,e){"use strict";e.r(t);var s=e(147),i=e(149);for(var n in i)["default"].indexOf(n)<0&&function(o){e.d(t,o,(function(){return i[o]}))}(n);e(151);var d,a=e(31),r=Object(a["default"])(i["default"],s["render"],s["staticRenderFns"],!1,null,null,null,!1,s["components"],d);r.options.__file="pages_goods/goods_detail/goods_detail.vue",t["default"]=r.exports},147:function(o,t,e){"use strict";e.r(t);var s=e(148);e.d(t,"render",(function(){return s["render"]})),e.d(t,"staticRenderFns",(function(){return s["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return s["recyclableRender"]})),e.d(t,"components",(function(){return s["components"]}))},148:function(o,t,e){"use strict";var s;e.r(t),e.d(t,"render",(function(){return i})),e.d(t,"staticRenderFns",(function(){return d})),e.d(t,"recyclableRender",(function(){return n})),e.d(t,"components",(function(){return s}));var i=function(){var o=this,t=o.$createElement;o._self._c},n=!1,d=[];i._withStripped=!0},149:function(o,t,e){"use strict";e.r(t);var s=e(150),i=e.n(s);for(var n in s)["default"].indexOf(n)<0&&function(o){e.d(t,o,(function(){return s[o]}))}(n);t["default"]=i.a},150:function(o,t,e){"use strict";(function(o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{goods_info:{},title:"",goodsHistoryList:[],goodInfo:{}}},onLoad:function(t){var e=t.goods_id;this.title=t.goods_id,this.getGoodsDetail(e),o.setNavigationBarTitle({title:t.goods_id}),this.goodsHistoryList=JSON.parse(o.getStorageSync("goodsHistoryList")||"[]")},methods:{gotoGoodsParms:function(){o.navigateTo({url:"/pages_goods/goods_parms/goods_parms?goods_id="+this.goods_info.goods_id})},gotoGoodsReplace:function(){o.navigateTo({url:"/pages_goods/goods_replace/goods_replace?goods_id="+this.goods_info.goods_id})},gotoGoodsChip:function(){o.navigateTo({url:"/pages_goods/goods_chip/goods_chip?goods_id="+this.goods_info.goods_id})},gotoGoodsBuy:function(){o.navigateTo({url:"/pages_goods/goods_buy/goods_buy?goods_id="+this.goods_info.goods_id})},baocun:function(){o.showLoading({title:"保存中"}),o.downloadFile({url:"https://www.te.com.cn/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FMS5837_Grove_Board%7FA%7Fpdf%7FEnglish%7FENG_DS_MS5837_Grove_Board_A.pdf%7FCAT-DCS0043",success:function(t){200==t.statusCode&&(o.hideLoading(),o.saveFile({tempFilePath:t.tempFilePath,success:function(t){o.showToast({icon:"none",title:"文件已保存",duration:2e3}),console.log(t)}}))},fail:function(t){console.log(t),o.showToast({icon:"none",mask:!0,title:"文件下载失败"})}})},getGoodsDetail:async function(t){var e=await o.$http.get("/api/public/v1/goods/detail",{goods_id:t}),s=e.data;if(200!==s.meta.status)return o.$showMsg();this.goods_info=s.message,this.saveGoodsHistory()},saveGoodsHistory:function(){var t=this;this.goodInfo={goods_id:this.goods_info.goods_id,goods_name:this.goods_info.goods_name,date:this.getNowDate()};var e=new Set(this.goodsHistoryList);e.forEach((function(o){o.goods_id==t.goodInfo.goods_id&&e.delete(o)})),e.add(this.goodInfo),this.goodsHistoryList=Array.from(e),o.setStorageSync("goodsHistoryList",JSON.stringify(this.goodsHistoryList))},getNowDate:function(){var o=new Date,t=o.getFullYear(),e=o.getMonth()+1,s=o.getDate();return e>=1&&e<=9&&(e="0"+e),s>=0&&s<=9&&(s="0"+s),t+"-"+e+"-"+s},openPdf:function(){o.navigateTo({url:"/pages_goods/goods_pdf/goods_pdf?src="})},gotoGoodsAnalysis:function(){var t=JSON.stringify(this.goodInfo);o.navigateTo({url:"/pages_goods/goods_analysis/goods_analysis?goods_info="+t})},gotoOfficialWebsite:function(){o.navigateTo({url:"/pages_goods/official_website/official_website"})}},onShareAppMessage:function(o){return{title:this.title,path:"/subpkg/goods_detail/goods_detail?goods_id="+this.title,mpId:"wx801fb6d90c631dcc"}},onShareTimeline:function(o){return{title:this.title,type:0,summary:""}},computed:{}};t.default=e}).call(this,e(1)["default"])},151:function(o,t,e){"use strict";e.r(t);var s=e(152),i=e.n(s);for(var n in s)["default"].indexOf(n)<0&&function(o){e.d(t,o,(function(){return s[o]}))}(n);t["default"]=i.a},152:function(o,t,e){}},[[145,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_goods/goods_detail/goods_detail.js.map