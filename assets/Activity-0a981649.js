import{_ as w,s as x,t as b,w as D,i as C,h as s,l as a,d as o,y as p,L as g,M as k,G as A,e as i,f as T,j as B,H as m,A as h,B as I}from"./index-c5edcf22.js";import{s as Y,e as E}from"./loading-ee1db5ca.js";const M={setup(){const c=x(),u=()=>{p.push({name:g})},f=(d,t)=>{p.push({name:k,params:{id:t}})},n=async(d,t)=>{try{await A.confirm("Are you sure you want to delete this post?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}),await c.deleteActivity(t)}catch(_){console.log(_)}},{activies:l}=b(c);return D(l,d=>{Y(),l.value.map(t=>t.formatDate=I(Number(t.date)).format("YYYY-MM-DD")),E()},{immediate:!0,deep:!0}),{tableData:l,addPost:u,handleEdit:f,handleDelete:n}}},V={class:"inner"},N={class:"content-box"},$={style:{}},L={style:{}},S={style:{}},z={style:{}};function P(c,u,f,n,l,d){const t=i("el-button"),_=i("el-form-item"),r=i("el-table-column"),y=i("el-table");return T(),C("div",V,[s("div",N,[a(_,null,{default:o(()=>[a(t,{type:"primary",onClick:B(n.addPost,["prevent"])},{default:o(()=>[m("+ 新增活動")]),_:1},8,["onClick"])]),_:1}),a(y,{data:n.tableData,style:{width:"80%"}},{default:o(()=>[a(r,{label:"公告日期",width:"180"},{default:o(e=>[s("div",$,[s("span",L,h(e.row.formatDate),1)])]),_:1}),a(r,{label:"標題"},{default:o(e=>[s("div",S,[s("span",z,h(e.row.content.title),1)])]),_:1}),a(r,{label:"操作"},{default:o(e=>[a(t,{size:"small",onClick:v=>n.handleEdit(e.$index,e.row._id)},{default:o(()=>[m("編輯")]),_:2},1032,["onClick"]),a(t,{size:"small",type:"danger",onClick:v=>n.handleDelete(e.$index,e.row._id)},{default:o(()=>[m("刪除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])])}const H=w(M,[["render",P],["__scopeId","data-v-598309e7"]]);export{H as default};