(window.webpackJsonp=window.webpackJsonp||[]).push([[33,2,23,24,25,26],{289:function(t,e,n){t.exports=n.p+"img/sally.5768181.png"},290:function(t,e,n){"use strict";n.r(e);n(32);var o={name:"AsideNav",data:function(){return{navigations:[{name:"Index",href:"/guide/guide"},{name:"Color",href:"/guide/color"},{name:"Form",href:"/guide/form"},{name:"Component",href:"/guide/component"},{name:"Swiper",href:"/guide/swiper"},{name:"Popup",href:"/guide/popup"},{name:"Video",href:"/guide/video"}]}}},l=n(46),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"aside-nav"},[e("div",{staticClass:"nav-title"},[e("img",{staticClass:"logo",attrs:{src:n(289)}}),t._v(" "),e("p",[t._v("NuxtJS Guide")])]),t._v(" "),e("ul",{staticClass:"nav-list"},t._l(t.navigations,(function(nav){return e("li",{key:nav.name},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:nav.href,"active-class":"active"}},[t._v("\n        "+t._s(nav.name)+"\n      ")])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);var o={props:{type:{type:String,default:""}},data:function(){return{isOpen:!1}},watch:{isOpen:function(t){document.body.style.overflow=t?"hidden":""}},methods:{open:function(){this.isOpen=!0},close:function(){this.isOpen=!1}}},l=n(46),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.isOpen?e("div",{class:["pop-layer",t.type]},[e("div",{staticClass:"dim",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}}),t._v(" "),e("div",{staticClass:"pop-wrap"},[t.$slots.header?e("div",{staticClass:"pop-header"},[t._t("header")],2):t._e(),t._v(" "),e("div",{staticClass:"pop-content"},[t._t("content",(function(){return[t._v("content")]}))],2),t._v(" "),t.$slots.buttons?e("div",{staticClass:"pop-footer btn-wrap"},[t._t("buttons")],2):t._e()])]):t._e()}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var o={props:{type:{type:String,default:""}},data:function(){return{isOpen:!1}},watch:{isOpen:function(t){document.body.style.overflow=t?"hidden":""}},methods:{open:function(){this.isOpen=!0},close:function(){this.isOpen=!1}}},l=n(46),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.isOpen?e("div",{class:["pop-full",t.type]},[e("div",{staticClass:"dim",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}}),t._v(" "),e("div",{staticClass:"pop-wrap"},[t.$slots.header?e("div",{staticClass:"pop-header"},[t._t("header")],2):t._e(),t._v(" "),e("div",{staticClass:"pop-content"},[t._t("content",(function(){return[t._v("content")]}))],2),t._v(" "),t.$slots.buttons?e("div",{staticClass:"pop-footer btn-wrap"},[t._t("buttons")],2):t._e(),t._v(" "),e("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}},[t._v("닫기")])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},312:function(t,e,n){"use strict";n.r(e);n(200),n(64);var o={props:{type:{type:String,default:""},timeout:{type:Number,default:5},animationType:{type:String,default:"slide-up"}},data:function(){return{isOpen:!1}},methods:{open:function(){var t=this;this.isOpen=!0,window.setTimeout((function(){t.isOpen=!1}),1e3*this.timeout)},close:function(){this.isOpen=!1}}},l=n(46),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:t.animationType}},[t.isOpen?e("div",{class:["pop-toast",t.type]},[t._t("content",(function(){return[t._v("content")]}))],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},313:function(t,e,n){"use strict";n.r(e);var o={props:{type:{type:String,default:""}},data:function(){return{isOpen:!1}},watch:{isOpen:function(t){document.body.style.overflow=t?"hidden":""}},methods:{open:function(){this.isOpen=!0},close:function(){this.isOpen=!1}}},l=n(46),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.isOpen?e("div",{class:["pop-bottom",t.type,{active2:t.isOpen}]},[e("div",{staticClass:"dim",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}}),t._v(" "),e("transition",{attrs:{name:"slide-up",appear:""}},[e("div",{staticClass:"pop-wrap"},[t.$slots.header?e("div",{staticClass:"pop-header"},[t._t("header")],2):t._e(),t._v(" "),e("div",{staticClass:"pop-content"},[t._t("content",(function(){return[t._v("content")]}))],2),t._v(" "),t.$slots.buttons?e("div",{staticClass:"pop-footer btn-wrap"},[t._t("buttons")],2):t._e(),t._v(" "),e("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}},[t._v("닫기")])])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,n){"use strict";n.r(e);var o=n(310),l=n(311),r=n(312),c=n(313),v={components:{AlertPopup:o.default,FullPopup:l.default,ToastPopup:r.default,BottomPopup:c.default},data:function(){return{alert1:!1,alert2:!1,alert3:!1,alert4:!1,full1:!1,full2:!1,bottom1:!1,bottom2:!1,toast1:!1,toast2:!1,toast3:!1}},methods:{openPopup:function(t){this.$refs[t]&&this.$refs[t].open()},closePopup:function(t){this.$refs[t]&&this.$refs[t].close()}}},_=n(46),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"guide-wrap"},[e("AsideNav"),t._v(" "),e("div",{staticClass:"guide-content"},[e("h2",{staticClass:"guide-title"},[t._v("Popup")]),t._v(" "),e("div",{staticClass:"guide-box popup"},[e("h3",{staticClass:"guide-title2"},[t._v("Alert Popup")]),t._v(" "),e("button",{staticClass:"guide-btn",attrs:{type:"button"},on:{click:function(e){return t.openPopup("alert1")}}},[t._v("basic")]),t._v(" "),e("button",{staticClass:"guide-btn",attrs:{type:"button"},on:{click:function(e){return t.openPopup("alert2")}}},[t._v("title")]),t._v(" "),e("button",{staticClass:"guide-btn",attrs:{type:"button"},on:{click:function(e){return t.openPopup("alert3")}}},[t._v("button")]),t._v(" "),e("button",{staticClass:"guide-btn",attrs:{type:"button"},on:{click:function(e){return t.openPopup("alert4")}}},[t._v("different class")]),t._v(" "),e("AlertPopup",{ref:"alert1",on:{close:function(e){return t.closePopup("alert1")}}},[e("template",{slot:"content"},[e("p",[e("strong",[t._v("주의!")])]),e("br"),t._v(" "),e("p",[t._v("기본 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용")])])],2),t._v(" "),e("AlertPopup",{ref:"alert2",on:{close:function(e){return t.closePopup("alert2")}}},[e("template",{slot:"header"},[t._v("알럿 팝업 타이틀")]),t._v(" "),e("template",{slot:"content"},[e("p",[e("strong",[t._v("주의!22")])]),e("br"),t._v(" "),e("p",[t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용")])])],2),t._v(" "),e("AlertPopup",{ref:"alert3",on:{close:function(e){return t.closePopup("alert3")}}},[e("template",{slot:"content"},[e("p",[t._v("버튼 있을 때 ~")]),t._v(" "),e("p",[t._v("본문 내용 본문 내용 본문 내용 본문 내용")])]),t._v(" "),e("template",{slot:"buttons"},[e("button",{attrs:{type:"button"},on:{click:function(e){return t.closePopup("alert3")}}},[t._v("취소")]),t._v(" "),e("button",{attrs:{type:"button"}},[t._v("확인")])])],2),t._v(" "),e("AlertPopup",{ref:"alert4",attrs:{type:"pop-alert4"},on:{close:function(e){return t.closePopup("alert4")}}},[e("template",{slot:"content"},[e("p",[t._v("Class 추가 버전")]),t._v(" "),e("p",[t._v("pop-full 뒤에 type 붙은 거 확인 할 수 있음 !!!")])]),t._v(" "),e("template",{slot:"buttons"},[e("button",{attrs:{type:"button"},on:{click:function(e){return t.closePopup("alert4")}}},[t._v("확인")])])],2)],1),t._v(" "),e("div",{staticClass:"guide-box popup"},[e("h3",{staticClass:"guide-title2"},[t._v("Full Popup")]),t._v(" "),e("button",{staticClass:"guide-btn",attrs:{type:"button"},on:{click:function(e){return t.openPopup("full1")}}},[t._v("basic")]),t._v(" "),e("button",{staticClass:"guide-btn",attrs:{type:"button"},on:{click:function(e){return t.openPopup("full2")}}},[t._v("button")]),t._v(" "),e("button",{staticClass:"guide-btn",attrs:{type:"button"},on:{click:function(e){return t.openPopup("full3")}}},[t._v("different class")]),t._v(" "),e("FullPopup",{ref:"full1",on:{close:function(e){return t.closePopup("full1")}}},[e("template",{slot:"header"},[t._v("풀 팝업 타이틀")]),t._v(" "),e("template",{slot:"content"},[e("p",[t._v("기본 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용")])])],2),t._v(" "),e("FullPopup",{ref:"full2",on:{close:function(e){return t.closePopup("full2")}}},[e("template",{slot:"header"},[t._v("풀 팝업 타이틀")]),t._v(" "),e("template",{slot:"content"},[e("p",[t._v("버튼 있을 때 ~")]),t._v(" "),e("p",[t._v("본문 내용 본문 내용 본문 내용 본문 내용")])]),t._v(" "),e("template",{slot:"buttons"},[e("button",{attrs:{type:"button"},on:{click:function(e){return t.closePopup("full2")}}},[t._v("취소")]),t._v(" "),e("button",{attrs:{type:"button"}},[t._v("확인")])])],2),t._v(" "),e("FullPopup",{ref:"full3",attrs:{type:"pop-full2"},on:{close:function(e){return t.closePopup("full3")}}},[e("template",{slot:"header"},[t._v("풀 팝업 타이틀")]),t._v(" "),e("template",{slot:"content"},[e("p",[t._v("Class 추가 버전")]),t._v(" "),e("p",[t._v("pop-full 뒤에 type 붙은 거 확인 할 수 있음 !!!")])]),t._v(" "),e("template",{slot:"buttons"},[e("button",{attrs:{type:"button"},on:{click:function(e){return t.closePopup("full3")}}},[t._v("확인")])])],2)],1),t._v(" "),e("div",{staticClass:"guide-box popup"},[e("h3",{staticClass:"guide-title2"},[t._v("Bottom Popup")]),t._v(" "),e("button",{staticClass:"guide-btn",attrs:{type:"button"},on:{click:function(e){return t.openPopup("bottom1")}}},[t._v("basic")]),t._v(" "),e("button",{staticClass:"guide-btn",attrs:{type:"button"},on:{click:function(e){return t.openPopup("bottom2")}}},[t._v("button")]),t._v(" "),e("BottomPopup",{ref:"bottom1",on:{close:function(e){return t.closePopup("bottom1")}}},[e("template",{slot:"header"},[t._v("슬라이드 타이틀 팝업")]),t._v(" "),e("template",{slot:"content"},[e("p",[t._v("기본 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용")])])],2),t._v(" "),e("BottomPopup",{ref:"bottom2",on:{close:function(e){return t.closePopup("bottom2")}}},[e("template",{slot:"header"},[t._v("슬라이드 타이틀 팝업")]),t._v(" "),e("template",{slot:"content"},[e("p",[t._v("내용은 길고 아래는 버튼")]),t._v(" "),e("p",[t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용"),e("br"),t._v("본문 내용 본문 내용 본문 내용 본문 내용")])]),t._v(" "),e("template",{slot:"buttons"},[e("button",{attrs:{type:"button"},on:{click:function(e){return t.closePopup("bottom2")}}},[t._v("확인")])])],2)],1),t._v(" "),e("div",{staticClass:"guide-box popup"},[e("h3",{staticClass:"guide-title2"},[t._v("Toast Popup")]),t._v(" "),e("button",{staticClass:"guide-btn",attrs:{type:"button"},on:{click:function(e){return t.openPopup("toast1")}}},[t._v("basic")]),t._v(" "),e("button",{staticClass:"guide-btn",attrs:{type:"button"},on:{click:function(e){return t.openPopup("toast2")}}},[t._v("motion")]),t._v(" "),e("button",{staticClass:"guide-btn",attrs:{type:"button"},on:{click:function(e){return t.openPopup("toast3")}}},[t._v("different timeout")]),t._v(" "),e("ToastPopup",{ref:"toast1"},[e("template",{slot:"content"},[e("p",[t._v("TOAST POPUP")])])],2),t._v(" "),e("ToastPopup",{ref:"toast2",attrs:{animationType:"fade"}},[e("template",{slot:"content"},[e("p",[t._v("FADE TOAST POPUP")])])],2),t._v(" "),e("ToastPopup",{ref:"toast3",attrs:{timeout:15}},[e("template",{slot:"content"},[e("p",[t._v("15's TOAST POPUP")])])],2)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AsideNav:n(290).default})}}]);