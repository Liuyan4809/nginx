var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(a,r,n)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[r]=n,u=(e,a)=>{for(var r in a||(a={}))t.call(a,r)&&l(e,r,a[r]);if(n)for(var r of n(a))o.call(a,r)&&l(e,r,a[r]);return e},s=(e,n)=>a(e,r(n));import{p as i,L as p,a_ as d,N as v,I as m,a$ as f,b0 as c}from"./index.8e60a3c0.js";import{U as g,_ as h,u as y}from"./JUpload.vue_vue_type_style_index_0_lang.9ab12372.js";import{B as b}from"./index.a6220f15.js";import{d as O,k as w,r as _,e as j,u as x,q as C,a2 as M,ab as P,ad as J,f as T,ac as U}from"./vue-vendor.1938e417.js";import{H as k,aB as E}from"./vendor.ece5be17.js";function I(e,a,r){const n=d(e,u({action:y},r)),{innerFile:t,handleChangeCommon:o,originColumn:l}=n,[i,{openModal:p}]=v(),m=j((()=>{let e=t.value;return e&&e.name?e.name.length>5?e.name.substr(0,5)+"…":e.name:""})),f=j((()=>{if(t.value){if(t.value.url)return t.value.url;if(t.value.path)return t.value.path}return""})),c=j((()=>{let e=l.value.maxCount;if(l.value&&l.value.fieldExtendJson){let a=JSON.parse(l.value.fieldExtendJson);e=a.uploadnum?a.uploadnum:0}return null!=e?e:0}));return s(u({},n),{modalValue:f,maxCount:c,ellipsisFileName:m,registerModel:i,onModalChange:function(e){e?(t.value.path=e,o(t.value)):o(null)},handleMoreOperation:function(){p(!0,s(u({removeConfirm:!0,mover:!0,download:!0},l.value.props),{maxCount:c.value,fileType:a}))}})}const L={Icon:m,Dropdown:k,LoadingOutlined:E,JUploadModal:O({__name:"JUploadModal",props:{value:i.oneOfType([i.string,i.array]),width:i.number.def(520)},emits:["change","update:value","register"],setup(e,{emit:a}){const r=w(),n=_({props:{}}),t=j((()=>{var e;return(null==(e=n.props)?void 0:e.fileType)===g.image?"图片上传":"文件上传"})),[o,{closeModal:l}]=p((e=>{return a=this,t=null,o=function*(){var a;n.props=x(e)||{},[g.image,"img","picture"].includes(null==(a=n.props)?void 0:a.fileType)?n.props.fileType=g.image:n.props.fileType=g.file,C((()=>r.value.addActionsListener()))},new Promise(((e,r)=>{var n=e=>{try{u(o.next(e))}catch(a){r(a)}},l=e=>{try{u(o.throw(e))}catch(a){r(a)}},u=a=>a.done?e(a.value):Promise.resolve(a.value).then(n,l);u((o=o.apply(a,t)).next())}));var a,t,o}));function u(){l()}function s(e){a("change",e),a("update:value",e)}return(a,l)=>(M(),P(x(b),U({onRegister:x(o),title:t.value,width:e.width,onOk:u},a.$attrs),{default:J((()=>[T(h,U({ref_key:"uploadRef",ref:r,value:e.value},n.props,{onChange:s}),null,16,["value"])])),_:1},16,["onRegister","title","width"]))}})},N={switches:{visible:!0},getValue:e=>f(e),setValue:e=>c(e)};export{L as c,N as e,I as u};
