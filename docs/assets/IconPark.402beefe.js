import{T as F,j as L,c as d,g as y,q as j,U as v}from"./vendor.9760fa8a.js";var W={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function z(){return"icon-"+((1+Math.random())*4294967296|0).toString(16).substring(1)}function g(t,i,r){var e=typeof i.fill=="string"?[i.fill]:i.fill||[],o=[],n=i.theme||r.theme;switch(n){case"outline":o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push("none"),o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push("none");break;case"filled":o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push("#FFF"),o.push("#FFF");break;case"two-tone":o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push(typeof e[1]=="string"?e[1]:r.colors.twoTone.twoTone),o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push(typeof e[1]=="string"?e[1]:r.colors.twoTone.twoTone);break;case"multi-color":o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push(typeof e[1]=="string"?e[1]:r.colors.multiColor.outFillColor),o.push(typeof e[2]=="string"?e[2]:r.colors.multiColor.innerStrokeColor),o.push(typeof e[3]=="string"?e[3]:r.colors.multiColor.innerFillColor);break}return{size:i.size||r.size,strokeWidth:i.strokeWidth||r.strokeWidth,strokeLinecap:i.strokeLinecap||r.strokeLinecap,strokeLinejoin:i.strokeLinejoin||r.strokeLinejoin,colors:o,id:t}}var x=Symbol("icon-context");function w(t,i,r){var e={name:"icon-"+t,props:["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","spin"],setup:function(n){var u=z(),s=F(x,W);return function(){var a=n.size,c=n.strokeWidth,p=n.strokeLinecap,k=n.strokeLinejoin,h=n.theme,f=n.fill,C=n.spin,m=g(u,{size:a,strokeWidth:c,strokeLinecap:p,strokeLinejoin:k,theme:h,fill:f},s),l=[s.prefix+"-icon"];return l.push(s.prefix+"-icon-"+t),i&&s.rtl&&l.push(s.prefix+"-icon-rtl"),C&&l.push(s.prefix+"-icon-spin"),L("span",{class:l.join(" ")},[r(m)])}}};return e}const I=d({props:{icon:null,theme:null,size:null,spin:{type:Boolean},fill:null,strokeLinecap:null,strokeLinejoin:null,strokeWidth:null},setup(t){return(i,r)=>(y(),j(v(t.icon),{theme:t.theme,size:t.size,spin:t.spin,fill:t.fill,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin,strokeWidth:t.strokeWidth},null,8,["theme","size","spin","fill","strokeLinecap","strokeLinejoin","strokeWidth"]))}});export{w as I,I as _};