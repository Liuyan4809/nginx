import{i as e,s}from"./useLogin.5ee5275e.js";import{d as a,k as t,_ as r,a2 as i,a3 as o}from"./vue-vendor.1938e417.js";import{z as n,aw as u,aa as d,u as p,A as l}from"./index.8e60a3c0.js";import"./vendor.ece5be17.js";import"./__commonjsHelpers__.488ed5c2.js";const c=a({__name:"OAuth2Login",setup(a){const c=t(e()),g=t({thirdApp:!1,wxWork:!1,dingtalk:!1}),{currentRoute:m}=r(),v=m.value;return e()||n.replace({path:u.BASE_LOGIN,query:v.query}),c.value&&function(){/wxwork/i.test(navigator.userAgent)&&(g.value.thirdApp=!0,g.value.wxWork=!0);/dingtalk/i.test(navigator.userAgent)&&(g.value.thirdApp=!0,g.value.dingtalk=!0);g.value.thirdApp&&(v.query.oauth2LoginToken?function(e){const s=d(),{notification:a}=l(),{t:t}=p();s.ThirdLogin(e).then((e=>{e&&e.userInfo?a.success({message:t("sys.login.loginSuccessTitle"),description:`${t("sys.login.loginSuccessDesc")}: ${e.userInfo.realName}`,duration:3}):a.error({message:"登录失败",description:((e.response||{}).data||{}).message||e.message||"请求出现错误，请稍后再试",duration:4})}))}({thirdType:v.query.thirdType}):g.value.wxWork?s("wechat_enterprise"):g.value.dingtalk&&s("dingtalk"))}(),(e,s)=>(i(),o("div"))}});export{c as default};