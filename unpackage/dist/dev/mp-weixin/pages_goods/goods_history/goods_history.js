(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_goods/goods_history/goods_history"],{128:function(t,n,e){"use strict";(function(t){var n=e(3);e(25);n(e(24));var o=n(e(129));wx.__webpack_require_UNI_MP_PLUGIN__=e,t(o.default)}).call(this,e(1)["createPage"])},129:function(t,n,e){"use strict";e.r(n);var o=e(130),r=e(132);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e(134);var s,u=e(31),d=Object(u["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],s);d.options.__file="pages_goods/goods_history/goods_history.vue",n["default"]=d.exports},130:function(t,n,e){"use strict";e.r(n);var o=e(131);e.d(n,"render",(function(){return o["render"]})),e.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),e.d(n,"components",(function(){return o["components"]}))},131:function(t,n,e){"use strict";var o;e.r(n),e.d(n,"render",(function(){return r})),e.d(n,"staticRenderFns",(function(){return s})),e.d(n,"recyclableRender",(function(){return i})),e.d(n,"components",(function(){return o}));var r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.histories,(function(n,e){var o=t.__get_orig(n),r=n.goods_name.slice(4,10);return{$orig:o,g0:r}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},i=!1,s=[];r._withStripped=!0},132:function(t,n,e){"use strict";e.r(n);var o=e(133),r=e.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=r.a},133:function(t,n,e){"use strict";(function(t){var o=e(3);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(e(17)),i={data:function(){return{goodsHistoryList:[]}},methods:{gotoDetail:function(n){t.navigateTo({url:"/pages_goods/goods_detail/goods_detail?goods_id="+n.goods_id})}},onLoad:function(){this.goodsHistoryList=JSON.parse(t.getStorageSync("goodsHistoryList")||"[]")},computed:{histories:function(){return(0,r.default)(this.goodsHistoryList).reverse()}}};n.default=i}).call(this,e(1)["default"])},134:function(t,n,e){"use strict";e.r(n);var o=e(135),r=e.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=r.a},135:function(t,n,e){}},[[128,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_goods/goods_history/goods_history.js.map