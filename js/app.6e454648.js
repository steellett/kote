(function(t){function e(e){for(var o,c,a=e[0],i=e[1],u=e[2],d=0,l=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&l.push(s[c][0]),s[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);p&&p(e);while(l.length)l.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],o=!0,a=1;a<r.length;a++){var i=r[a];0!==s[i]&&(o=!1)}o&&(n.splice(e--,1),t=c(c.s=r[0]))}return t}var o={},s={app:0},n=[];function c(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=o,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(r,o,function(e){return t[e]}.bind(null,o));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/kote/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var p=i;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("cats")],1)},n=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"first-page container-fluid"},[t._m(0),r("div",{staticClass:"products"},t._l(t.products,(function(e,o){return r("div",{key:o,staticClass:"product-container",attrs:{"data-index":o},on:{click:t.buyProduct}},[r("div",{staticClass:"product-wrapper",class:e.class},[r("div",{staticClass:"left-corner"}),r("div",{staticClass:"product"},[r("h5",{staticClass:"product__slogan"},[t._v("Сказочное заморское яство")]),r("h2",{staticClass:"product__name"},[r("span",{staticClass:"product__mainname"},[t._v("Нямушка")]),r("span",{staticClass:"product__adding"},[t._v(t._s(e.name))])]),r("div",{staticClass:"product__promo"},[r("p",[t._v(t._s(e.promo.portions))]),r("p",[t._v(t._s(e.promo.mouses))]),r("p",[t._v(t._s(e.promo.isGood))])]),r("div",{staticClass:"product__weight"},[r("span",{staticClass:"product__kg"},[t._v(t._s(e.weight))]),t._v(" кг ")])])]),r("div",{staticClass:"product__description"},[t._v(" "+t._s(e.description)+" "),e.productBuy.exist?r("a",[t._v(t._s(e.productBuy.text))]):t._e()])])})),0)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title-page"},[r("h2",[t._v("Ты сегодня покормил кота?")])])}],i=(r("caad"),r("c975"),r("a434"),r("b0c0"),r("2532"),{data:function(){return{products:[{name:"с фуа-гра",count:5,promo:{portions:"10 порций",mouses:"мышь в подарок",isGood:""},weight:"0,5",description:"Чего сидишь? Порадуй котэ,",productBuy:{exist:!0,text:"купи"},class:"product-wrapper_blue",chosen:!1},{name:"с рыбой",count:3,promo:{portions:"40 порций",mouses:"2 мыши в подарок",isGood:""},weight:"2",description:"Головы щучьи с чесноком да свежайшая сёмгушка.",productBuy:{exist:!1,text:"купи"},class:"product-wrapper_pink",chosen:!1},{name:"с курой",count:0,promo:{portions:"100 порций",mouses:"5 мышей в подарок",isGood:"заказчик доволен"},weight:"5",description:"Извините, товар закончился",productBuy:{exist:!1,text:"купи"},class:"product-wrapper_disabled",chosen:!1}],shopBasket:[]}},methods:{buyProduct:function(){if(event.target.closest(".product-container")&&!event.target.closest(".product-wrapper_disabled")){var t=this.products[event.target.closest(".product-container").dataset.index];this.shopBasket.includes(t.name)?this.returnProduct(t):(this.shopBasket.push(t.name),t.count--,t.chosen=!t.chosen,event.target.closest(".product-container").querySelector(".product").classList.add("product_chosen"))}},returnProduct:function(t){this.shopBasket.splice(this.shopBasket.indexOf(t.name),1),t.count++,t.chosen=!t.chosen,event.target.closest(".product-container").querySelector(".product").classList.remove("product_chosen")}}}),u=i,p=(r("f9c2"),r("2877")),d=Object(p["a"])(u,c,a,!1,null,null,null),l=d.exports,f={name:"App",components:{cats:l},data:function(){return{}}},_=f,v=r("6544"),h=r.n(v),m=r("7496"),y=Object(p["a"])(_,s,n,!1,null,null,null),b=y.exports;h()(y,{VApp:m["a"]});var g=r("f309");o["a"].use(g["a"]);var w=new g["a"]({});o["a"].config.productionTip=!1,new o["a"]({vuetify:w,render:function(t){return t(b)}}).$mount("#app")},f3aa:function(t,e,r){},f9c2:function(t,e,r){"use strict";var o=r("f3aa"),s=r.n(o);s.a}});
//# sourceMappingURL=app.6e454648.js.map