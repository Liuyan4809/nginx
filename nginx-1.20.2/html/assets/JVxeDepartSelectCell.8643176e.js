var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{k as l}from"./BasicForm.vue_vue_type_style_index_0_lang.daafa440.js";import"./vendor.ece5be17.js";import{aW as i,aX as p,a0 as c,l as d,m as u,aZ as m,_ as f}from"./index.8e60a3c0.js";import{d as v,e as j,Y as h,a2 as b,a3 as _,f as g,ac as x,a4 as C}from"./vue-vendor.1938e417.js";import"./index.614f054b.js";import"./useCountdown.293f285b.js";import"./index.a6220f15.js";import"./BasicModal.cadf9873.js";import"./useWindowSizeFn.6b4ca4c0.js";import"./JUpload.vue_vue_type_style_index_0_lang.9ab12372.js";import"./index.ea04f0eb.js";import"./areaDataUtil.d2791cdd.js";import"./index.c01929c9.js";import"./__commonjsHelpers__.488ed5c2.js";const y=f(v({name:"JVxeDepartSelectCell",components:{JSelectDept:l},props:i(),setup(e){const{innerValue:l,cellProps:i,handleChangeCommon:m,useCellDesign:f}=p(e),{prefixCls:v}=f("depart-select"),h=j((()=>{let e=l.value;return null==e?e:c(e)?[]:d(e)?e:u(e)?e.split(","):[e]})),b=j((()=>0!=i.value.multi)),_=j((()=>{return e=((e,a)=>{for(var t in a||(a={}))r.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))n.call(a,t)&&o(e,t,a[t]);return e})({},i.value),l={value:h.value,showButton:!1,showSearch:!1,maxTagCount:1,maxTagPlaceholder:({length:e})=>"+"+e},a(e,t(l));var e,l}));return{prefixCls:v,selectedValue:h,multiple:b,cellProps:i,getProps:_,handleChange:function(e){m(e.join(","))}}},data:()=>({}),computed:{},watch:{},methods:{},enhanced:{switches:{visible:!0},translate:{enabled:!1},aopEvents:{editActived({$event:e}){m({$event:e,props:this.props,className:".ant-select .ant-select-selection-search-input",isClick:!0})}}}}),[["render",function(e,a,t,s,r,n){const o=h("JSelectDept");return b(),_("div",{class:C([e.prefixCls])},[g(o,x(e.getProps,{onChange:e.handleChange}),null,16,["onChange"])],2)}]]);export{y as default};
