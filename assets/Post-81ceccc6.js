import{_ as x,q as b,t as v,w as D,i as C,h as n,l as a,d as o,y as f,C as g,E as k,G as P,e as d,f as B,j as T,H as m,A as h,B as E}from"./index-360cec32.js";import{s as S,e as M}from"./loading-ca52e56c.js";const N={setup(){const _=b(),u=()=>{f.push({name:g})},p=(i,e)=>{f.push({name:k,params:{id:e}})},s=async(i,e)=>{try{await P.confirm("Are you sure you want to delete this post?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}),await _.deletePost(e)}catch(r){console.log(r)}},{posts:l}=v(_);return D(l,i=>{S(),l.value.map(e=>e.formatDate=E(Number(e.date)).format("YYYY-MM-DD")),M()},{immediate:!0,deep:!0}),{tableData:l,addPost:u,handleEdit:p,handleDelete:s}}},Y={class:"inner"},$={class:"content-box"},A={style:{}},O={style:{}},V={style:{}},z={style:{}};function I(_,u,p,s,l,i){const e=d("el-button"),r=d("el-form-item"),c=d("el-table-column"),y=d("el-table");return B(),C("div",Y,[n("div",$,[a(r,null,{default:o(()=>[a(e,{type:"primary",onClick:T(s.addPost,["prevent"])},{default:o(()=>[m("+ 新增公告")]),_:1},8,["onClick"])]),_:1}),a(y,{data:s.tableData,style:{width:"80%"}},{default:o(()=>[a(c,{label:"公告日期",width:"180"},{default:o(t=>[n("div",A,[n("span",O,h(t.row.formatDate),1)])]),_:1}),a(c,{label:"標題"},{default:o(t=>[n("div",V,[n("span",z,h(t.row.content.title),1)])]),_:1}),a(c,{label:"操作"},{default:o(t=>[a(e,{size:"small",onClick:w=>s.handleEdit(t.$index,t.row._id)},{default:o(()=>[m("編輯")]),_:2},1032,["onClick"]),a(e,{size:"small",type:"danger",onClick:w=>s.handleDelete(t.$index,t.row._id)},{default:o(()=>[m("刪除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])])}const q=x(N,[["render",I],["__scopeId","data-v-2d7f6e62"]]);export{q as default};
