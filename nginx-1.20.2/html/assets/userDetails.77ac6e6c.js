var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&l(e,a,t[a]);if(s)for(var a of s(t))r.call(t,a)&&l(e,a,t[a]);return e},i=(e,s)=>t(e,a(s));import{a as c,b as u,F as p,aV as d,e as f,f as m,w as b,_ as x}from"./index.8e60a3c0.js";import{aa as y,a$ as v}from"./vendor.ece5be17.js";import{d as g,k as j,e as O,u as h,f as D,ac as P,i as w,g as $,Y as k,a2 as E,ab as S}from"./vue-vendor.1938e417.js";import"./__commonjsHelpers__.488ed5c2.js";const _=b(g({name:"Description",props:{useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:e=>["small","default","middle",void 0].includes(e),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}},emits:["register"],setup(e,{slots:t,emit:a}){const s=j(null),{prefixCls:n}=c("description"),r=u(),l=O((()=>o(o({},e),h(s)))),m=O((()=>i(o({},h(l)),{title:void 0}))),b=O((()=>!!h(l).title)),x=O((()=>o({canExpand:!1},h(m).collapseOptions))),g=O((()=>o(o({},h(r)),h(m))));function $({label:e,labelMinWidth:t,labelStyle:a}){if(!a&&!t)return e;const s=i(o({},a),{minWidth:`${t}px `});return D("div",{style:s},[e])}const k=()=>{let e;return D(y,P({class:`${n}`},h(g)),"function"==typeof(t=e=function(){const{schema:e,data:t}=h(m);return h(e).map((e=>{const{render:a,field:s,span:n,show:r,contentMinWidth:l}=e;if(r&&f(r)&&!r(t))return null;const o=()=>{var e;const t=null==(e=h(m))?void 0:e.data;if(!t)return null;const n=v(t,s);return f(a)?a(n,t):null!=n?n:""},i=l;return D(y.Item,{label:$(e),key:s,span:n},{default:()=>l?D("div",{style:{minWidth:`${i}px`}},[o()]):o()})})).filter((e=>!!e))}())||"[object Object]"===Object.prototype.toString.call(t)&&!w(t)?e:{default:()=>[e]});var t};return a("register",{setDescProps:function(e){s.value=o(o({},h(s)),e)}}),()=>h(b)?(()=>{const a=e.useCollapse?k():D("div",null,[k()]);if(!e.useCollapse)return a;const{canExpand:s,helpMessage:n}=h(x),{title:r}=h(l);return D(d,{title:r,canExpan:s,helpMessage:n},{default:()=>a,action:()=>p(t,"action")})})():k()}})),C={username:"test",nickName:"VB",age:"123",phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},M=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,t)=>`${t.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];const W=x(g({components:{Description:_},setup(){const[e]=function(e){if(!$())throw new Error("useDescription() can only be used inside setup() or functional components!");const t=j(null),a=j(!1);return[function(s){h(a)&&m()||(t.value=s,e&&s.setDescProps(e),a.value=!0)},{setDescProps:e=>{var a;null==(a=h(t))||a.setDescProps(e)}}]}({title:"useDescription",data:C,schema:M});return{mockData:C,schema:M,register:e}}}),[["render",function(e,t,a,s,n,r){const l=k("Description");return E(),S(l,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"])}]]);export{W as default};
