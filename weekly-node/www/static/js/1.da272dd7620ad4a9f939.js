webpackJsonp([1],{"/sh8":function(e,t,s){e.exports=s.p+"static/img/suningcloud.d147e2d.jpg"},"T+/8":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Dd8w"),r=s.n(n),a=s("NYxO"),o={name:"login",data:function(){return{usernum:"",password:""}},computed:r()({},Object(a.c)(["systemName"])),methods:r()({},Object(a.b)(["login","getUserInfo"]),{submit:function(){var e=this,t=this.usernum,s=this.password,n={usernum:t,password:s};t&&s&&this.login(n).then(function(t){0==t.errno?(e.$message.success(t.errmsg||"登陆成功"),"3"==t.data.role?e.$router.push({path:"/weeklyView"}):"4"==t.data.role&&e.$router.push({path:"/writeWeekly"})):e.$message.error(t.errmsg||"服务开小差")})}})},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("div",{staticClass:"login-header"},[n("div",{staticClass:"box-wrapper"},[n("h1",[e._v(e._s(e.systemName))])])]),e._v(" "),n("div",{staticClass:"login_contenter"},[n("img",{staticClass:"login_contenter_bg",attrs:{src:s("/sh8")}}),e._v(" "),n("div",{staticClass:"content_box"},[n("div",{staticClass:"content_box_form"},[n("h1",[e._v("登  录")]),e._v(" "),n("p",{staticClass:"form_content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.usernum,expression:"usernum"}],attrs:{minlength:"6",maxlength:"30",type:"text",name:"userNumber",placeholder:"工号"},domProps:{value:e.usernum},on:{input:function(t){t.target.composing||(e.usernum=t.target.value)}}})]),e._v(" "),n("p",{staticClass:"form_content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{minlength:"6",maxlength:"16",type:"password",placeholder:"密码"},domProps:{value:e.password},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.submit(t):null},input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),n("button",{staticClass:"loginBtn",on:{click:e.submit}},[e._v("登录")])])])])])},staticRenderFns:[]};var u=s("VU/8")(o,i,!1,function(e){s("nWp0")},"data-v-3376a314",null);t.default=u.exports},nWp0:function(e,t){}});
//# sourceMappingURL=1.da272dd7620ad4a9f939.js.map