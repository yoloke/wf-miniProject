(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_goods/goods_pdf/goods_pdf"],{1222:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{src:"",iOS:!0}},onLoad:function(t){var n=this;e.setNavigationBarTitle({title:"PDF"});var o="https://www.te.com.cn/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FMS5837_Grove_Board%7FA%7Fpdf%7FEnglish%7FENG_DS_MS5837_Grove_Board_A.pdf%7FCAT-DCS0043";e.getSystemInfo({success:function(t){t.system.includes("iOS")?(n.iOS=!0,n.src=o):(n.iOS=!1,e.downloadFile({url:"https://www.te.com.cn/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FMS5837_Grove_Board%7FA%7Fpdf%7FEnglish%7FENG_DS_MS5837_Grove_Board_A.pdf%7FCAT-DCS0043",filePath:wx.env.USER_DATA_PATH+"/PDF文件名.pdf",success:function(t){console.log(t);var n=t.filePath;e.openDocument({filePath:n,fileType:"pdf",success:function(t){e.navigateBack({delta:1})},fail:function(t){e.showToast({title:"打开文件失败",icon:"none",duration:2e3})}})},fail:function(t){e.showToast({title:"下载文件失败",icon:"none",duration:2e3}),console.log(o)}}))}})}};t.default=n}).call(this,n("543d")["default"])},"824b":function(e,t,n){"use strict";n.r(t);var o=n("1222"),c=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=c.a},"88fc":function(e,t,n){"use strict";(function(e){var t=n("4ea4");n("06f6");t(n("66fd"));var o=t(n("f78a"));wx.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("543d")["createPage"])},e417:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){}));var o=function(){var e=this.$createElement;this._self._c},c=[]},f78a:function(e,t,n){"use strict";n.r(t);var o=n("e417"),c=n("824b");for(var i in c)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(i);var a=n("f0c5"),r=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=r.exports}},[["88fc","common/runtime","common/vendor"]]]);