import{k as l}from"./vendor.ece5be17.js";const e=[];let n=[];for(let r=0,f=e.length;r<f;r++){e[r].value,e[r].label;const l=[];l.length&&(e[r].children=l)}n=l(e);for(let r=0,f=e.length;r<f;r++){const l=e[r].children;if(e[r].label,l)for(let e=0,n=l.length;e<n;e++){l[e].value,l[e].label;const n=[];n.length&&(l[e].children=n)}}const t=l(n);t.unshift({value:"",label:"全部"});for(let r=0,f=t.length;r<f;r++){const l=t[r].children;if(l&&l.length){l.unshift({value:"",label:"全部"});for(let e=0,n=l.length;e<n;e++){const n=l[e].children;n&&n.length&&n.unshift({value:"",label:"全部"})}}}const o=l(e);o.unshift({value:"",label:"全部"});for(let r=0,f=o.length;r<f;r++){const l=o[r].children;if(l&&l.length){l.unshift({value:"",label:"全部"});for(let e=0,n=l.length;e<n;e++){const n=l[e].children;n&&n.length&&n.unshift({value:"",label:"全部"})}}}const s=[];function h(l){return[]}const a=[];function i(l,e){let n=[];return c(l,n,e),n}function c(l,e,n){for(let t of a)t.id===l&&t.index==n&&(e.unshift(l),"86"!=t.pid&&c(t.pid,e,--n))}export{e as a,t as b,i as c,s as d,h as g,n as p,o as r};