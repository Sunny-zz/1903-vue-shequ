(function(t){function e(e){for(var s,c,i=e[0],r=e[1],l=e[2],d=0,f=[];d<i.length;d++)c=i[d],a[c]&&f.push(a[c][0]),a[c]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,i=1;i<n.length;i++){var r=n[i];0!==a[r]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},a={app:0},o=[];function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/1903-vue-shequ/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1b9d":function(t,e,n){"use strict";var s=n("e4a2"),a=n.n(s);a.a},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=o(t);return n(e)}function o(t){var e=s[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(s)},a.resolve=o,t.exports=a,a.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("router-view")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-inner"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{attrs:{src:"https://www.vue-js.com/public/images/vue.png",alt:""}}),n("h1",[t._v("Vue.js")])]),t.userInfo?n("router-link",{attrs:{to:"/topic/create"}},[t._v("发布话题")]):t._e(),t.userInfo?n("div",{staticClass:"logout"},[n("img",{attrs:{src:t.userInfo.avatar_url,alt:""}}),n("button",{on:{click:t.logout}},[t._v("退出")])]):n("div",{staticClass:"login"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{on:{click:t.login}},[t._v("登录")])])],1)])},i=[],r=n("bc3a"),l=n.n(r),u={name:"tou",data:function(){return{text:"79b3b12e-9631-467b-9210-c68449c98a35",userInfo:null}},created:function(){var t=this;sessionStorage.getItem("token")&&l.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:sessionStorage.getItem("token")}).then(function(e){t.userInfo=e.data})},methods:{login:function(){var t=this;l.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:this.text}).then(function(e){console.log(e.data),t.userInfo=e.data,sessionStorage.setItem("token",t.text),sessionStorage.setItem("user_id",e.data.id)})},logout:function(){this.userInfo=null,sessionStorage.clear()}}},d=u,f=(n("8baf"),n("2877")),p=Object(f["a"])(d,c,i,!1,null,null,null),b=p.exports,v={name:"app",components:{Header:b}},j=v,h=Object(f["a"])(j,a,o,!1,null,null,null),m=h.exports,g=(n("8a7b"),n("8c4f")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("ul",{staticClass:"nav"},[n("li",[n("router-link",{class:"/"===t.$route.fullPath||"/?tab=all"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=all"},nativeOn:{click:function(e){t.total=856}}},[t._v("全部")])],1),n("li",[n("router-link",{class:"/?tab=good"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=good"},nativeOn:{click:function(e){t.total=15}}},[t._v("精华")])],1),n("li",[n("router-link",{class:"/?tab=weex"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=weex"},nativeOn:{click:function(e){t.total=3}}},[t._v("weex")])],1),n("li",[n("router-link",{class:"/?tab=share"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=share"},nativeOn:{click:function(e){t.total=247}}},[t._v("分享")])],1),n("li",[n("router-link",{class:"/?tab=ask"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=ask"},nativeOn:{click:function(e){t.total=577}}},[t._v("问答")])],1),n("li",[n("router-link",{class:"/?tab=job"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=job"},nativeOn:{click:function(e){t.total=30}}},[t._v("招聘")])],1)]),n("div",{staticClass:"content"},[t.topics.length?n("ul",t._l(t.topics,function(e){return n("li",{key:e.id},[n("img",{style:{width:"30px",height:"30px"},attrs:{src:e.author.avatar_url,alt:""}}),n("div",{staticClass:"count"},[n("span",{staticClass:"reply_count"},[t._v(t._s(e.reply_count))]),n("span",[t._v("/")]),n("span",{staticClass:"visit_count"},[t._v(t._s(e.visit_count))])]),"/"===t.$route.fullPath||"/?tab=all"===t.$route.fullPath||e.top||e.good?n("span",{class:{tab:!0,active:e.top||e.good}},[t._v(t._s(e.top?"置顶":e.good?"精华":"share"===e.tab?"分享":"ask"===e.tab?"问答":"job"===e.tab?"招聘":"weex"))]):t._e(),n("span",{staticClass:"title"},[n("router-link",{attrs:{to:"/topic/"+e.id}},[t._v(t._s(e.title))])],1),n("span",{staticClass:"time"},[t._v(t._s(t.myMoment(e.last_reply_at)))])])}),0):n("img",{attrs:{src:"https://hbimg.huabanimg.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658",alt:""}}),n("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":20,total:t.total},on:{"current-change":t.changePage}})],1)])},k=[],w=n("c1df"),y=n.n(w),x={name:"home",data:function(){return{topics:[],total:856}},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this,e=this.$route.query.tab||"all",n=this.$route.query.page||1;this.topics=[],l.a.get("https://www.vue-js.com/api/v1/topics/?tab=".concat(e,"&page=").concat(n)).then(function(e){t.topics=e.data.data,console.log(e.data.data[0])})}}},methods:{myMoment:function(t){return y.a.locale("zh-cn"),y()(t).fromNow()},changePage:function(t){var e=this.$route.query.tab||"all";this.$router.push("/?tab=".concat(e,"&page=").concat(t))}}},C=x,O=(n("8b71"),Object(f["a"])(C,_,k,!1,null,null,null)),z=O.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.topic?n("div",{staticClass:"topic"},[n("article",[n("div",{staticClass:"article-head"},[n("div",[t.topic.top||t.topic.good?n("span",{staticClass:"tab active"},[t._v(t._s(t.topic.top?"置顶":"精华"))]):t._e(),n("h2",[t._v(t._s(t.topic.title))]),t.isLogin?n("span",{staticClass:"collect",on:{click:t.changeCollect}},[t._v(t._s(t.is_collect?"取消收藏":"加入收藏"))]):t._e()]),n("p",{staticStyle:{"font-size":"12px"}},[n("span",[n("b",[t._v("·")]),t._v("\n          发布于"+t._s(t.myMoment(t.topic.create_at))+"\n        ")]),n("span",[n("b",[t._v("·")]),t._v("\n          作者 "+t._s(t.topic.author.loginname)+"\n        ")]),n("span",[n("b",[t._v("·")]),t._v("\n          "+t._s(t.topic.visit_count)+" 次浏览\n        ")]),n("span",[n("b",[t._v("·")]),t._v("\n          来自 "+t._s("share"===t.topic.tab?"分享":"ask"===t.topic.tab?"问答":"job"===t.topic.tab?"招聘":"weex")+"\n        ")])])]),n("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.topic.content)}})]),n("div",{staticClass:"comment"},[n("p",[t._v(t._s(t.topic.replies.length)+"回复")]),n("ul",t._l(t.topic.replies,function(e){return n("li",{key:e.id},[n("span",{domProps:{innerHTML:t._s(e.content)}}),n("span",{staticStyle:{"margin-right":"20px"}},[n("span",{on:{click:function(n){return t.up(e.id)}}},[t._v(t._s(t.isUped(e.id)?"👍":"赞"))]),t._v("\n          "+t._s(e.ups.length?e.ups.length:"")+"\n        ")]),n("span",{on:{click:function(n){return t.addReply(e.author.loginname)}}},[t._v("回复")])])}),0),n("div",{staticClass:"comment-form"},[n("span",[t._v("添加回复")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"textarea",attrs:{cols:"30",rows:"10"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{on:{click:t.addComment}},[t._v("回复")])])])]):t._e()},P=[],$=(n("7514"),{name:"topic",data:function(){return{topic:null,is_collect:!1,text:""}},computed:{isLogin:function(){return Boolean(sessionStorage.getItem("token"))}},created:function(){var t=this,e=this.$route.params.id;l.a.get("https://www.vue-js.com/api/v1/topic/".concat(e)).then(function(e){console.log(e.data.data),t.topic=e.data.data})},methods:{myMoment:function(t){return y.a.locale("zh-cn"),y()(t).fromNow()},changeCollect:function(){var t=this,e={topic_id:this.$route.params.id,accesstoken:sessionStorage.getItem("token")};this.is_collect?l.a.post("https://www.vue-js.com/api/v1/topic/de_collect",e).then(function(e){e.data.success&&(t.is_collect=!1)}):l.a.post("https://www.vue-js.com/api/v1/topic/collect",e).then(function(e){e.data.success&&(t.is_collect=!0)})},addComment:function(t){var e=this;l.a.post("https://www.vue-js.com/api/v1/topic/".concat(this.topic.id,"/replies"),{accesstoken:sessionStorage.getItem("token"),content:this.text}).then(function(t){l.a.get("https://www.vue-js.com/api/v1/topic/".concat(e.topic.id)).then(function(t){e.topic=t.data.data})})},up:function(t){var e=this;sessionStorage.getItem("token")?l.a.post("https://www.vue-js.com/api/v1/reply/".concat(t,"/ups"),{accesstoken:sessionStorage.getItem("token")}).then(function(n){console.log(n.data),"up"===n.data.action?e.topic.replies.find(function(e){return e.id===t}).ups.push(sessionStorage.getItem("user_id")):e.topic.replies.find(function(e){return e.id===t}).ups=e.topic.replies.find(function(e){return e.id===t}).ups.filter(function(t){return t!=sessionStorage.getItem("user_id")})}):alert("请登录")},isUped:function(t){return-1!==this.topic.replies.find(function(e){return e.id===t}).ups.indexOf(sessionStorage.getItem("user_id"))},addReply:function(t){this.text="@".concat(t," "),document.querySelector(".textarea").focus()}}}),I=$,E=(n("1b9d"),Object(f["a"])(I,S,P,!1,null,null,null)),q=E.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.tab,expression:"tab"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.tab=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[t._v("请选择")]),n("option",{attrs:{value:"share"}},[t._v("分享")]),n("option",{attrs:{value:"ask"}},[t._v("问答")]),n("option",{attrs:{value:"job"}},[t._v("招聘")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("quill-editor",{ref:"myQuillEditor",staticStyle:{width:"500px"},attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},ready:function(e){return t.onEditorReady(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("button",{on:{click:t.submit}},[t._v("提交")])],1)},N=[],T=(n("a753"),n("8096"),n("14e1"),n("953d")),L={name:"app",data:function(){return{tab:"",title:"",content:"",editorOption:{}}},components:{quillEditor:T["quillEditor"]},methods:{submit:function(){var t=this;l.a.post("https://www.vue-js.com/api/v1/topics",{tab:this.tab,content:this.content,title:this.title,accesstoken:sessionStorage.getItem("token")}).then(function(e){console.log(e.data),t.tab="",t.title="",t.content="",t.$router.push("/topic/".concat(e.data.topic_id))})},onEditorBlur:function(t){console.log("editor blur!",t)},onEditorFocus:function(t){console.log("editor focus!",t)},onEditorReady:function(t){console.log("editor ready!",t)},onEditorChange:function(t){var e=t.quill,n=t.html,s=t.text;console.log("editor change!",e,n,s),this.content=n}}},H=L,R=Object(f["a"])(H,M,N,!1,null,null,null),U=R.exports;s["default"].use(g["a"]);var B=new g["a"]({routes:[{path:"/",component:z},{path:"/topic/create",component:U},{path:"/topic/:id",component:q}],mode:"history"}),F=(n("672e"),n("450d"),n("101e")),D=n.n(F);s["default"].use(D.a),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(m)},router:B}).$mount("#app")},"782e":function(t,e,n){},"8a7b":function(t,e,n){},"8b71":function(t,e,n){"use strict";var s=n("e3a2"),a=n.n(s);a.a},"8baf":function(t,e,n){"use strict";var s=n("782e"),a=n.n(s);a.a},e3a2:function(t,e,n){},e4a2:function(t,e,n){}});
//# sourceMappingURL=app.69021df5.js.map