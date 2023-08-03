var e=(e,n,t)=>new Promise(((a,s)=>{var o=e=>{try{p(t.next(e))}catch(n){s(n)}},r=e=>{try{p(t.throw(e))}catch(n){s(n)}},p=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,r);p((t=t.apply(e,n)).next())}));import{d as n,aU as t,A as a,_ as s}from"./index.8e60a3c0.js";import{M as o,bD as r}from"./vendor.ece5be17.js";import{d as p,e as l,Y as c,a2 as i,ab as y,ad as u,f as d,E as m,ag as f,Z as g,k as T,n as h,a3 as k,ac as A,ae as v,F as w}from"./vue-vendor.1938e417.js";const b={getEnabledType:"/sys/thirdApp/getEnabledType",wechatEnterprise:{user:"/sys/thirdApp/sync/wechatEnterprise/user",depart:"/sys/thirdApp/sync/wechatEnterprise/depart"},dingtalk:{user:"/sys/thirdApp/sync/dingtalk/user",depart:"/sys/thirdApp/sync/dingtalk/depart"}};let _=null;const x=p({__name:"JThirdAppDropdown",props:{type:String,name:String,syncToApp:Boolean,syncToLocal:Boolean},emits:["to-app","to-local"],setup(e,{emit:n}){const t=e,a=l((()=>"wechatEnterprise"!==t.type&&t.syncToLocal));function s(e){n(e.key,{type:t.type})}return(n,t)=>{const o=c("a-button"),r=c("a-menu-item"),p=c("a-menu"),l=c("a-dropdown");return e.syncToApp&&e.syncToLocal?(i(),y(l,{key:0},{overlay:u((()=>[d(p,{onClick:s},{default:u((()=>[e.syncToApp?(i(),y(r,{key:"to-app"},{default:u((()=>[m("同步到"+f(e.name),1)])),_:1})):g("",!0),a.value?(i(),y(r,{key:"to-local"},{default:u((()=>[m("同步到本地")])),_:1})):g("",!0)])),_:1})])),default:u((()=>[d(o,{type:"primary",preIcon:"ant-design:sync-outlined"},{default:u((()=>[m("同步"+f(e.name),1)])),_:1})])),_:1})):e.syncToApp?(i(),y(o,{key:1,type:"primary",preIcon:"ant-design:sync-outlined",onClick:t[0]||(t[0]=e=>s({key:"to-app"}))},{default:u((()=>[m("同步"+f(e.name),1)])),_:1})):(i(),y(o,{key:2,type:"primary",preIcon:"ant-design:sync-outlined",onClick:t[1]||(t[1]=e=>s({key:"to-local"}))},{default:u((()=>[m("同步"+f(e.name)+"到本地",1)])),_:1}))}}}),E=s(p({__name:"JThirdAppButton",props:{bizType:{type:String,required:!0},syncToApp:Boolean,syncToLocal:Boolean,selectedRowKeys:Array},emits:["sync-ok","sync-error","sync-finally"],setup(s,{emit:p}){const c=s,{createMessage:u,createWarningModal:f}=a(),E=T({}),L=l((()=>({syncToApp:c.syncToApp,syncToLocal:c.syncToLocal}))),j=l((()=>({"to-app":B,"to-local":I})));function B(e){S(e.type,"/toApp")}function I(e){S(e.type,"/toLocal")}function S(e,t){let a=b[e];if(!a||!a[c.bizType])return;let s=a[c.bizType]+t,l=c.selectedRowKeys,i="确定要开始同步全部数据吗？可能花费较长时间！";return Array.isArray(l)&&l.length>0?i=`确定要开始同步这 ${l.length} 项吗？`:l=[],new Promise(((a,c)=>{const y=o.confirm({icon:d(r),title:"同步",content:i,onOk:()=>{y.update({keyboard:!1,okText:"同步中…",cancelButtonProps:{disabled:!0}});let r={ids:l.join(",")};return n.get({url:s,params:r},{isTransformResponse:!1}).then((e=>{let n={};e.result&&(n={width:600,title:e.message,content:()=>{let n,t=["成功信息如下：",$(h,e.result.successInfo.map(((e,n)=>`${n+1}. ${e}`)).join("\n"))];return n=e.success?[...t,h("br"),"无失败信息！"]:["失败信息如下：",$(h,e.result.failInfo.map(((e,n)=>`${n+1}. ${e}`)).join("\n")),h("br"),...t],n}}),e.success?(null!=n?o.success(n):u.warning(e.message),p("sync-ok")):(null!=n?o.warning(n):u.warning(e.message),p("sync-error"))})).catch((()=>y.destroy())).finally((()=>{a(),p("sync-finally",{type:e,direction:t,isToApp:"/toApp"===t,isToLocal:"/toLocal"===t})}))},onCancel(){a()}})}))}function $(e,n){return e("div",{id:"box",style:{minHeight:"100px",border:"1px solid #d9d9d9",fontSize:"14px",maxHeight:"250px",whiteSpace:"pre",overflow:"auto",padding:"10px"}},n)}return function(){e(this,null,(function*(){E.value=yield e(void 0,null,(function*(){if(null!=_)return t(_);{let{success:e,result:a}=yield n.get({url:b.getEnabledType},{isTransformResponse:!1});if(e)return _=t(a),a}return{}}))}))}(),(e,n)=>s.syncToApp||s.syncToLocal?(i(),k(w,{key:0},[E.value.wechatEnterprise?(i(),y(x,A({key:0,type:"wechatEnterprise",name:"企微"},L.value,v(j.value)),null,16)):g("",!0),E.value.dingtalk?(i(),y(x,A({key:1,type:"dingtalk",name:"钉钉"},L.value,v(j.value)),null,16)):g("",!0)],64)):(i(),k(w,{key:1},[m("未设置任何同步方向")],64))}}),[["__scopeId","data-v-d8023e59"]]);export{E as J};
