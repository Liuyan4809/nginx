var t=Object.defineProperty,e=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,a,i)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i,o=(t,o)=>{for(var r in o||(o={}))a.call(o,r)&&s(t,r,o[r]);if(e)for(var r of e(o))i.call(o,r)&&s(t,r,o[r]);return t};import{an as r,a9 as l,bI as n,ag as p,P as c,bJ as d,ao as m,ah as u}from"./vendor.ece5be17.js";import{d as y,a as g,i as v,_ as f,aa as b,a4 as h,N as j}from"./index.8e60a3c0.js";import{T as k}from"./index.c01929c9.js";import{d as w,k as C,e as P,w as T,u as S,Y as O,a2 as x,ab as z,ad as G,a3 as B,ai as D,F as M,a4 as _,a9 as N,f as R,a7 as I,E as F,ag as A,Z as H,o as K,g as q}from"./vue-vendor.1938e417.js";import"./index.a6220f15.js";import"./__commonjsHelpers__.488ed5c2.js";import"./BasicModal.cadf9873.js";import"./useWindowSizeFn.6b4ca4c0.js";var E=(t=>(t.L="L",t.M="M",t.H="H",t))(E||{});const L=[{key:"1",name:"通知",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"你收到了 14 份新周报",description:"",datetime:"2017-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"你推荐的 曲妮妮 已通过第三轮面试",description:"",datetime:"2017-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"这种模板可以区分多种通知类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"标题可以设置自动显示省略号，本例中标题行数已设为1行，如果内容超过1行将自动截断并支持tooltip显示完整标题。",description:"",datetime:"2017-08-07",type:"1"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000009",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000010",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"}],count:0},{key:"2",name:"系统消息",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"曲丽丽 评论了你",description:"描述信息描述信息描述信息",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"朱偏右 回复了你",description:"这种模板用于提醒谁与你发生了互动",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"标题",description:"请将鼠标移动到此处，以便测试超长的消息在此处将如何处理。本例中设置的描述最大行数为2，超过2行的描述内容将被省略并且可以通过tooltip查看完整内容",datetime:"2017-08-07",type:"2",clickClose:!0}],count:0}],$=(t,e)=>y.put({url:"/sys/sysAnnouncementSend/editByAnntIdAndUserId",params:o({anntId:t},e)}),U=w({components:{[r.name]:r,[l.name]:l,[l.Item.name]:l.Item,AListItemMeta:l.Item.Meta,ATypographyParagraph:n.Paragraph,[p.name]:p,Time:k},props:{list:{type:Array,default:()=>[]},pageSize:{type:[Boolean,Number],default:5},currentPage:{type:Number,default:1},titleRows:{type:Number,default:1},descRows:{type:Number,default:1},onTitleClick:{type:Function}},emits:["update:currentPage"],setup(t,{emit:e}){const{prefixCls:a}=g("header-notify-list"),i=C(t.currentPage||1),s=P((()=>{const{pageSize:e,list:a}=t;if(!1===e)return[];let s=v(e)?e:5;return a.slice(s*(S(i)-1),s*S(i))}));T((()=>t.currentPage),(t=>{i.value=t}));const o=P((()=>!!t.onTitleClick));return{prefixCls:a,getPagination:P((()=>{const{list:a,pageSize:s}=t;return!!(s>0&&a&&a.length>s)&&{total:a.length,pageSize:s,current:S(i),onChange(t){i.value=t,e("update:currentPage",t)}}})),getData:s,handleTitleClick:function(e){t.onTitleClick&&t.onTitleClick(e)},isTitleClickable:o,PriorityTypes:E}}}),V={class:"title"},X={key:0,class:"extra"},J={key:2},W={key:0,class:"description"},Y={class:"datetime"};const Z=f(U,[["render",function(t,e,a,i,s,o){const r=O("a-typography-paragraph"),l=O("a-tag"),n=O("a-avatar"),p=O("Icon"),c=O("Time"),d=O("a-list-item-meta"),m=O("a-list-item"),u=O("a-list");return x(),z(u,{class:_(t.prefixCls),pagination:t.getPagination},{default:G((()=>[(x(!0),B(M,null,D(t.getData,(e=>(x(),z(m,{key:e.id,class:"list-item",onClick:a=>t.handleTitleClick(e),style:N({cursor:t.isTitleClickable?"pointer":""})},{default:G((()=>[R(d,null,{title:G((()=>[I("div",V,[R(r,{style:{width:"100%","margin-bottom":"0 !important"},delete:!!e.titleDelete,ellipsis:!!(t.$props.titleRows&&t.$props.titleRows>0)&&{rows:t.$props.titleRows,tooltip:!!e.title},content:e.title},null,8,["delete","ellipsis","content"]),e.extra?(x(),B("div",X,[R(l,{class:"tag",color:e.color},{default:G((()=>[F(A(e.extra),1)])),_:2},1032,["color"])])):H("",!0)])])),avatar:G((()=>[e.avatar?(x(),z(n,{key:0,class:"avatar",src:e.avatar},null,8,["src"])):e.priority?(x(),B(M,{key:1},[e.priority===t.PriorityTypes.L?(x(),z(n,{key:0,class:"avatar priority-L",title:"一般消息"},{icon:G((()=>[R(p,{icon:"entypo:info"})])),_:1})):H("",!0),e.priority===t.PriorityTypes.M?(x(),z(n,{key:1,class:"avatar priority-M",title:"重要消息"},{icon:G((()=>[R(p,{icon:"bi:exclamation-lg"})])),_:1})):H("",!0),e.priority===t.PriorityTypes.H?(x(),z(n,{key:2,class:"avatar priority-H",title:"紧急消息"},{icon:G((()=>[R(p,{icon:"ant-design:warning-filled"})])),_:1})):H("",!0)],64)):(x(),B("span",J,A(e.avatar),1))])),description:G((()=>[I("div",null,[e.description?(x(),B("div",W,[R(r,{style:{width:"100%","margin-bottom":"0 !important"},ellipsis:!!(t.$props.descRows&&t.$props.descRows>0)&&{rows:t.$props.descRows,tooltip:!!e.description},content:e.description},null,8,["ellipsis","content"])])):H("",!0),I("div",Y,[R(c,{value:e.datetime,title:e.datetime},null,8,["value","title"])])])])),_:2},1024)])),_:2},1032,["onClick","style"])))),128))])),_:1},8,["class","pagination"])}],["__scopeId","data-v-f011ee3f"]]);const Q=f(w({components:{Popover:c,BellOutlined:d,Tabs:m,TabPane:m.TabPane,Badge:u,NoticeList:Z},setup(){const{prefixCls:t}=g("header-notify"),e=q();b(),h();const a=C(L),i=P((()=>{let t=0;for(let e=0;e<a.value.length;e++)t+=a.value[e].count;return t})),[s,{openModal:o}]=j();const r=C(!1);return K((()=>{})),{prefixCls:t,listData:a,count:i,clickBadge:function(){for(let t=0;t<a.value.length;t++)a.value[t].count=0;o(!0,{})},registerMessageModal:s,reloadCount:function(t){return e=this,a=null,i=function*(){try{yield $(t),yield loadData()}catch(e){}},new Promise(((t,s)=>{var o=t=>{try{l(i.next(t))}catch(e){s(e)}},r=t=>{try{l(i.throw(t))}catch(e){s(e)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,r);l((i=i.apply(e,a)).next())}));var e,a,i},onNoticeClick:function(t){var a;try{$(t.id),loadData()}catch(i){}"component"===t.openType&&(null==(a=e.refs.dynamicNoticeRef)||a.detail(t.openPage)),r.value=!1},onEmptyNotify:function(){r.value=!1},numberStyle:{},popoverVisible:r,registerDetail:registerDetail}}}),[["render",function(t,e,a,i,s,o){const r=O("BellOutlined"),l=O("Badge"),n=O("sys-message-modal");return x(),B("div",{class:_(t.prefixCls)},[R(l,{count:t.count,overflowCount:9,offset:[-4,10],numberStyle:t.numberStyle,onClick:t.clickBadge},{default:G((()=>[R(r)])),_:1},8,["count","numberStyle","onClick"]),R(n,{onRegister:t.registerMessageModal,onRefresh:t.reloadCount},null,8,["onRegister","onRefresh"])],2)}]]);export{Q as default};