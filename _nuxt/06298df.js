(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{303:function(e,r,t){"use strict";t.r(r);var n={props:{placeholder:{type:String,default:"",required:!1},id:{type:String,default:"",required:!1},value:{type:String,default:"",required:!1},disabled:{type:Boolean,default:!1,required:!1},readonly:{type:Boolean,default:!1,required:!1},errorMsg:{type:String,default:"",required:!1},rows:{type:String,default:"5",required:!1},maxlength:{type:String,default:"100",required:!1}},data:function(){return{message:""}},computed:{error:function(){return this.errorMsg&&this.errorMsg.length>0}},watch:{value:{immediate:!0,handler:function(e){this.message=e}}}},l=t(46),component=Object(l.a)(n,(function(){var e=this,r=e._self._c;return r("div",{class:["input-field",{error:e.error}]},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{id:e.id,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength,rows:e.rows},domProps:{value:e.message},on:{input:function(r){r.target.composing||(e.message=r.target.value)}}}),e._v(" "),r("div",{staticClass:"counter-box"},[r("span",[e._v(e._s(e.message.length)+" / "+e._s(e.maxlength))])]),e._v(" "),e.error?r("p",{staticClass:"error-msg"},[e._v("\n    "+e._s(e.errorMsg)+"\n  ")]):e._e()])}),[],!1,null,null,null);r.default=component.exports}}]);