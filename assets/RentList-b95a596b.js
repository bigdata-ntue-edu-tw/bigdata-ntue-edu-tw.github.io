import{v as N,b as I}from"./runtime-dom.esm-bundler-a91390dd.js";/* empty css              */import{k as g}from"./firebase-51484e84.js";import{u as O}from"./equipment-535975bd.js";import{u as R}from"./auth-58638625.js";import{r as V,H as j}from"./index-fcdd6f12.js";import{s as F,e as H}from"./loading-bb5f32dc.js";import{N as B}from"./index-88ce323e.js";import{a as P}from"./index-7c49e7b5.js";import{a as k,l as m,m as e,z,u as y,E as r,y as a,a3 as _,k as u,F as w,Y as b,x as A,D as t,C as x}from"./runtime-core.esm-bundler-08e2c704.js";import"./index-1d84a674.js";import"./index-51ec6782.js";const Y={class:"inner"},$={class:"content-box"},G={class:"card-header borrow__header"},J={class:"borrow__start"},K={class:"borrow__end"},Q={class:"borrow__list"},U={class:"borrow__item__name"},W={class:"yellow"},de={__name:"RentList",setup(X){const f=R(),E=k(()=>!!f.user.id),{loadPromise:L}=g(f);L.value.then(()=>{E.value||B.alert("請先登入","提示",{confirmButtonText:"確定",callback:()=>{V.replace({name:j})}})});const p=O();p.init();const{equipments:v,equipmentsLoaded:Z}=g(p),q=i=>{const s={};for(const o of i)o.borrowerId&&(s[o.borrowerId]||(s[o.borrowerId]=[]),s[o.borrowerId].push(o));return s},h=k(()=>(console.log(v.value),q(v.value.map(s=>s.content)))),D=async i=>{B.confirm("確定歸還內容都正確","確認歸還",{confirmButtonText:"確定歸還",cancelButtonText:"取消",callback:async s=>{if(s==="confirm"){F();const o=i.map(c=>c._id);await Promise.all(o.map(c=>p.giveBackEquipment(c))),H(),P({type:"success",message:"歸還成功"})}}})};return(i,s)=>{const o=_("el-empty"),d=_("el-col"),c=_("el-row"),S=_("el-button"),T=_("el-card");return u(),m("div",Y,[e("div",$,[z(e("div",null,[r(o,{description:"目前沒有租借紀錄"})],512),[[N,!Object.keys(y(h)).length]]),r(c,{gutter:12},{default:a(()=>[(u(!0),m(w,null,b(Object.entries(y(h)),(n,C)=>(u(),A(d,{span:24,key:C},{default:a(()=>[r(T,{class:"box-card borrow"},{header:a(()=>[e("div",G,[r(c,{gutter:20},{default:a(()=>[r(d,{span:24},{default:a(()=>[e("span",null,"借物 ID："+t(n[0]),1)]),_:2},1024),r(d,{span:24},{default:a(()=>[e("span",null,"租借人 Email： "+t(n[1][0].borrower),1)]),_:2},1024)]),_:2},1024),r(S,{class:"button",onClick:I(l=>D(n[1]),["prevent"])},{default:a(()=>[x("完成歸還")]),_:2},1032,["onClick"])])]),default:a(()=>[e("div",J," 租借期間："+t(n[1][0].startDate)+" - "+t(n[1][0].endDate),1),e("div",K," 歸還時間："+t(n[1][0].returnTime),1),e("div",Q," 租借項目：共 "+t(n[1].length)+" 項 ",1),(u(!0),m(w,null,b(n[1],(l,M)=>(u(),m("div",{class:"borrow__item",key:M},[e("div",U,[x(t(l.name)+" "+t(l._id.split("-")[0])+"-"+t(l._id.split("-")[1])+"-",1),e("span",W,t(l._id.split("-")[2]),1)])]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})])])}}};export{de as default};
