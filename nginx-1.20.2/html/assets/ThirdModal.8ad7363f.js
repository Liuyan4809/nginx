var e=Object.defineProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,s,o)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[s]=o;import{ap as i,bB as r,z as t}from"./vendor.ece5be17.js";import{C as l}from"./index.614f054b.js";import{u as d,a4 as u,aa as c,d as p,ay as h,A as m,_ as f}from"./index.8e60a3c0.js";import{k as g,u as v,d as b,Y as w,a2 as C,a3 as y,f as P,ad as L,a7 as _,E as k,a4 as U,a9 as x,F as j}from"./vue-vendor.1938e417.js";import"./__commonjsHelpers__.488ed5c2.js";import"./useCountdown.293f285b.js";function I(){const{createMessage:e,notification:a}=m(),{t:s}=d(),o=u(),n=c(),i=g(""),r=g({}),t=g(!1),l=g(!1),f=g(""),b=g(!1),w=g(!1),C=g(""),y=g(""),P=g(!1),L=g(""),_=g("");function k(){!1===v(t)&&(t.value=!0,n.ThirdLogin({thirdType:v(i)}).then((e=>{var o;e&&e.userInfo?a.success({message:s("sys.login.loginSuccessTitle"),description:`${s("sys.login.loginSuccessDesc")}: ${e.userInfo.realName}`,duration:3}):(o=e,a.error({message:"登录失败",description:((o.response||{}).data||{}).message||o.message||"请求出现错误，请稍后再试",duration:4}))})))}function U(){w.value=!1,C.value="",y.value=""}function x(e){a.error({message:"登录失败",description:e,duration:4})}return{thirdPasswordShow:w,thirdLoginCheckPassword:function(){let a=Object.assign({},v(r),{password:v(C)});p.post({url:"/sys/third/user/checkPassword",params:a},{isTransformResponse:!1}).then((a=>{a.success?(U(),k(a.result)):e.warning(a.message)}))},thirdLoginNoPassword:U,thirdLoginPassword:C,thirdConfirmShow:b,thirdCreateUserLoding:P,thirdLoginUserCreate:function(){P.value=!0,r.value.suffix=parseInt(98*Math.random()+1),p.post({url:"/sys/third/user/create",params:{thirdLoginInfo:v(r)}},{isTransformResponse:!1}).then((a=>{a.success?(k(),b.value=!1):e.warning(a.message)})).finally((()=>{P.value=!1}))},thirdLoginUserBind:function(){C.value="",y.value=r.value.uuid,b.value=!1,w.value=!0},bindingPhoneModal:l,thirdHandleOk:function(){v(L)||x("请输入手机号"),v(_)||x("请输入验证码");let a={mobile:v(L),captcha:v(_),thirdUserUuid:v(f)};p.post({url:"/sys/thirdLogin/bindingThirdPhone",params:a},{isTransformResponse:!1}).then((a=>{a.success?(l.value=!1,k(a.result)):e.warning(a.message)}))},thirdPhone:L,thirdCaptcha:_,onThirdLogin:function(e){let a=`${o.uploadUrl}/sys/thirdLogin/render/${e}`;window.open(a,`login ${e}`,"height=500, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no"),i.value=e,r.value={},t.value=!1,window.addEventListener("message",(function(e){}),!1)},sendCodeApi:function(){return h({mobile:v(L),smsmode:"0"})}}}const O=b({name:"ThirdModal",components:{FormItem:i.Item,Form:i,InputPassword:t.Password,CountdownInput:l,QuestionCircleFilled:r},setup:()=>((e,i)=>{for(var r in i||(i={}))s.call(i,r)&&n(e,r,i[r]);if(a)for(var r of a(i))o.call(i,r)&&n(e,r,i[r]);return e})({},I())}),S={class:"ant-modal-confirm-body-wrapper"},T={class:"ant-modal-confirm-body"},F=_("span",{class:"ant-modal-confirm-title"},"提示",-1),M=_("div",{class:"ant-modal-confirm-content"}," 已有同名账号存在,请确认是否绑定该账号？ ",-1),A={class:"ant-modal-confirm-btns"};const $=f(O,[["render",function(e,a,s,o,n,i){const r=w("a-input-password"),t=w("a-modal"),l=w("QuestionCircleFilled"),d=w("a-button"),u=w("Icon"),c=w("a-input"),p=w("FormItem"),h=w("CountdownInput"),m=w("Form");return C(),y(j,null,[P(t,{title:"请输入密码",visible:e.thirdPasswordShow,"onUpdate:visible":a[1]||(a[1]=a=>e.thirdPasswordShow=a),onOk:e.thirdLoginCheckPassword,onCancel:e.thirdLoginNoPassword},{default:L((()=>[P(r,{placeholder:"请输入密码",value:e.thirdLoginPassword,"onUpdate:value":a[0]||(a[0]=a=>e.thirdLoginPassword=a),style:{margin:"15px",width:"80%"}},null,8,["value"])])),_:1},8,["visible","onOk","onCancel"]),P(t,{footer:null,closable:!1,visible:e.thirdConfirmShow,"onUpdate:visible":a[2]||(a[2]=a=>e.thirdConfirmShow=a),class:U("ant-modal-confirm")},{default:L((()=>[_("div",S,[_("div",T,[P(l,{style:{color:"#faad14"}}),F,M]),_("div",A,[P(d,{onClick:e.thirdLoginUserCreate,loading:e.thirdCreateUserLoding},{default:L((()=>[k("创建新账号")])),_:1},8,["onClick","loading"]),P(d,{onClick:e.thirdLoginUserBind,type:"primary"},{default:L((()=>[k("确认绑定")])),_:1},8,["onClick"])])])])),_:1},8,["visible"]),P(t,{title:"绑定手机号",visible:e.bindingPhoneModal,"onUpdate:visible":a[5]||(a[5]=a=>e.bindingPhoneModal=a),maskClosable:!1},{footer:L((()=>[P(d,{type:"primary",onClick:e.thirdHandleOk},{default:L((()=>[k("确定")])),_:1},8,["onClick"])])),default:L((()=>[P(m,{class:"p-4 enter-x",style:{margin:"15px 10px"}},{default:L((()=>[P(p,{class:"enter-x"},{default:L((()=>[P(c,{size:"large",placeholder:"请输入手机号",value:e.thirdPhone,"onUpdate:value":a[3]||(a[3]=a=>e.thirdPhone=a),class:"fix-auto-fill"},{prefix:L((()=>[P(u,{icon:"ant-design:mobile-outlined",style:x({color:"rgba(0,0,0,.25)"})},null,8,["style"])])),_:1},8,["value"])])),_:1}),P(p,{name:"sms",class:"enter-x"},{default:L((()=>[P(h,{size:"large",class:"fix-auto-fill",value:e.thirdCaptcha,"onUpdate:value":a[4]||(a[4]=a=>e.thirdCaptcha=a),placeholder:"请输入验证码",sendCodeApi:e.sendCodeApi},{prefix:L((()=>[P(u,{icon:"ant-design:mail-outlined",style:x({color:"rgba(0,0,0,.25)"})},null,8,["style"])])),_:1},8,["value","sendCodeApi"])])),_:1})])),_:1})])),_:1},8,["visible"])],64)}]]);export{$ as default};