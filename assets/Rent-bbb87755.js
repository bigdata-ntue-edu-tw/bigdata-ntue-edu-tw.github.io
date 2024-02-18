import{_ as re,a as ie,c as S,t as G,G as O,y as J,ab as Q,r as w,B as W,i as f,h as i,l as t,d as a,N as K,e as v,f as p,a7 as X,ac as Z,F as L,x as k,A as c,H as b,k as z,j as de}from"./index-0f5c6cec.js";import{u as ce,T as E,S as x,a as ue,b as me}from"./equipment-45949932.js";import{s as _e,e as C}from"./loading-b0f2f0f5.js";const fe={setup(){const I=ie(),r=S(()=>!!I.user.id),{loadPromise:q}=G(I);q.value.then(()=>{r.value||O.alert("請先登入","提示",{confirmButtonText:"確定",callback:()=>{J.replace({name:Q})}})});const e=ce();e.init();const{equipments:V,equipmentsLoaded:F}=G(e),u=w([]),y=w([]),d=w([]),g=w(""),R=w(""),h=w({email:"",phone:"",name:[],department:""}),T=n=>{const o=n.split("-")[0],m=n.split("-")[1],s=n.split("-")[2];return{_id0:o,_id1:m,_id2:s}},B=S(()=>V.value.filter(o=>o.content.type===E.AI).map(o=>{const{_id0:m,_id1:s,_id2:_}=T(o.content._id);return{"id-prefix":`${m}-${s}`,id:_,status:o.content.status,statusStr:o.content.status===x.AVAILABLE?"可租借":"不可租借"}})),D=S(()=>V.value.filter(o=>o.content.type===E.VIA).map(o=>{const{_id0:m,_id1:s,_id2:_}=T(o.content._id);return{"id-prefix":`${m}-${s}`,id:_,status:o.content.status,statusStr:o.content.status===x.AVAILABLE?"可租借":"不可租借"}})),N=S(()=>V.value.filter(o=>o.content.type===E.ALK).map(o=>{const{_id0:m,_id1:s,_id2:_}=T(o.content._id);return{"id-prefix":`${m}-${s}`,id:_,status:o.content.status,statusStr:o.content.status===x.AVAILABLE?"可租借":"不可租借"}})),Y=w({start:new Date,end:new Date}),P=S(()=>{const n=new Date(Y.value.start);return n.setDate(n.getDate()+14),n}),l=S(()=>new Date),A=S(()=>["09:00","09:15","09:30","09:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","14:00","14:15","14:30","14:45","15:00","15:15","15:30","15:45","16:00","16:15","16:30","16:45","17:00"]),$=(n,o)=>{console.log(o),o===E.AI?u.value=n:o===E.VIA?y.value=n:d.value=n},ee=(n,o)=>u.value.map(s=>`${s["id-prefix"]}${s.id}`).includes(`${n.row["id-prefix"]}${n.row.id}`)?"selected":n.row.status===x.AVAILABLE?"available":"unavailable",te=(n,o)=>y.value.map(s=>`${s["id-prefix"]}${s.id}`).includes(`${n.row["id-prefix"]}${n.row.id}`)?"selected":n.row.status===x.AVAILABLE?"available":"unavailable",le=(n,o)=>d.value.map(s=>`${s["id-prefix"]}${s.id}`).includes(`${n.row["id-prefix"]}${n.row.id}`)?"selected":n.row.status===x.AVAILABLE?"available":"unavailable",ae=(n,o)=>n.status===x.AVAILABLE,U=n=>W(Number(n)).format("YYYY-MM-DD"),ne=async()=>{await j.value.validate(),_e();const n=u.value.map(_=>`${_["id-prefix"]}-${_.id}`),o=y.value.map(_=>`${_["id-prefix"]}-${_.id}`),m=d.value.map(_=>`${_["id-prefix"]}-${_.id}`),s={aiIds:n,viaIds:o,alkIds:m,allIds:[...n,...o,...m],start:U(Y.value.start),end:U(Y.value.end),selectedTime:g.value,returnTime:R.value};if(!s.selectedTime){K({message:"請選擇取件時間",type:"error"}),C();return}if(!s.returnTime){K({message:"請選擇歸還時間",type:"error"}),C();return}for(const _ of s.allIds){V.value.map(M=>{if(M.content._id===_&&M.content.status===x.UNAVAILABLE){K({message:`設備 ${_} 已被租借`,type:"error"}),C();return}});const se=await e.generateAutoId();for(const M of s.allIds)await e.rentEquipment(M,{borrowerId:se,borrower:I.user.email,endDate:s.end,startDate:s.start,selectedTime:s.selectedTime,returnTime:s.returnTime,borrowerData:{...h.value,identity:H.value}});C()}O({title:"租借成功",message:"租借成功",type:"success",confirmButtonText:"確定",callback:()=>{J.replace({name:Q})}}),console.log(s)},H=w("1"),oe={name:[{required:!0,message:"請輸入借用人姓名",trigger:"blur"}],department:[{required:!0,message:"請輸入系級(課名)",trigger:"blur"}],phone:[{required:!0,message:"請輸入手機",trigger:"blur"},{validator:(n,o,m)=>{const s=/^(09\d{8})$|^(\d{2,3}-\d{7,8})$/;if(o)s.test(o)?m():m(new Error("請輸入有效的手機"));else return m(new Error("請輸入手機"))},trigger:"blur"}],email:[{required:!0,message:"請輸入Email",trigger:"blur"},{type:"email",message:"請輸入有效的Email",trigger:["blur","change"]}]},j=w(null);return{formRef:j,form:h,rules:oe,identity:H,submitRent:ne,moment:W,toYYYYMMDD:U,tableRowClassName:ee,viaTableRowClassName:te,alkTableRowClassName:le,canSelectRow:ae,TYPE_NAME:ue,TYPE:E,STATUS:x,STATUS_NAME:me,handleSelectionChange:$,aiTableData:B,viaTableData:D,alkTableData:N,equipments:V,equipmentsLoaded:F,maxDate:P,minDate:l,range:Y,availableTimes:A,selectedTime:g,returnTime:R,aiSelection:u,viaSelection:y,alkSelection:d}}},pe={class:"inner"},ge={class:"content-box"},be=i("h2",null,"小栗方 Ai 學習機",-1),ve=i("h2",null,"VIA Pixetto 視覺感測器",-1),he=i("h2",null,"ALK950 邊緣運算推論器",-1),we=i("option",{value:"",disabled:""},"選擇取件時間",-1),xe=["value"],ye=i("option",{value:"",disabled:""},"選擇歸還時間",-1),Te=["value"],Ae={class:"mb-2 flex items-center text-sm"},Se=i("div",{class:"card-header"},[i("h3",null,"借用數量及編號")],-1),Ve={key:0,class:"title"},De={class:"yellow"},Ye={key:1,class:"title"},Ee={class:"yellow"},Le={key:2,class:"title"},ke={class:"yellow"},Ie={class:"title"},Re={class:"wrapper"},Me={class:"title"},Ce={class:"wrapper"},Be={class:"yellow"},Ne={class:"title"},Pe={class:"wrapper"},Ue={class:"yellow"},Ke={class:"title"},ze={class:"wrapper"};function qe(I,r,q,e,V,F){const u=v("el-table-column"),y=v("el-table"),d=v("el-col"),g=v("el-row"),R=v("VDatePicker"),h=v("el-form-item"),T=v("el-radio"),B=v("el-radio-group"),D=v("el-input"),N=v("el-form"),Y=v("el-button"),P=v("el-card");return p(),f("div",pe,[i("div",ge,[t(g,{gutter:12},{default:a(()=>[t(d,{span:8,lg:8,sm:24,xs:24},{default:a(()=>[be,t(y,{ref:"multipleTableRef",data:e.aiTableData,style:{width:"100%"},onSelectionChange:r[0]||(r[0]=l=>e.handleSelectionChange(l,e.TYPE.AI)),"row-class-name":e.tableRowClassName},{default:a(()=>[t(u,{type:"selection",width:"55",selectable:(l,A)=>e.canSelectRow(l,A,e.TYPE.AI)},null,8,["selectable"]),t(u,{property:"id-prefix",label:"編號",width:"114"}),t(u,{property:"id",label:"",width:"45"}),t(u,{property:"statusStr",label:"狀態"})]),_:1},8,["data","row-class-name"])]),_:1}),t(d,{span:8,lg:8,sm:24,xs:24},{default:a(()=>[ve,t(y,{ref:"multipleTableRef",data:e.viaTableData,style:{width:"100%"},onSelectionChange:r[1]||(r[1]=l=>e.handleSelectionChange(l,e.TYPE.VIA)),"row-class-name":e.viaTableRowClassName},{default:a(()=>[t(u,{type:"selection",width:"55",selectable:(l,A)=>e.canSelectRow(l,A,e.TYPE.VIA)},null,8,["selectable"]),t(u,{property:"id-prefix",label:"編號",width:"114"}),t(u,{property:"id",label:"",width:"45"}),t(u,{property:"statusStr",label:"狀態"})]),_:1},8,["data","row-class-name"])]),_:1}),t(d,{span:8,lg:8,sm:24,xs:24},{default:a(()=>[he,t(y,{ref:"multipleTableRef",data:e.alkTableData,style:{width:"100%"},onSelectionChange:r[2]||(r[2]=l=>e.handleSelectionChange(l,e.TYPE.ALK)),"row-class-name":e.alkTableRowClassName},{default:a(()=>[t(u,{type:"selection",width:"55",selectable:(l,A)=>e.canSelectRow(l,A,e.TYPE.ALK)},null,8,["selectable"]),t(u,{property:"id-prefix",label:"編號",width:"114"}),t(u,{property:"id",label:"",width:"45"}),t(u,{property:"statusStr",label:"狀態"})]),_:1},8,["data","row-class-name"])]),_:1})]),_:1}),t(N,{ref:"formRef",model:e.form,rules:e.rules},{default:a(()=>[t(g,null,{default:a(()=>[t(d,null,{default:a(()=>[t(h,{label:"租借期間",prop:""},{default:a(()=>[t(R,{modelValue:e.range,"onUpdate:modelValue":r[3]||(r[3]=l=>e.range=l),modelModifiers:{range:!0},mode:"date"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(g,null,{default:a(()=>[t(d,null,{default:a(()=>[t(h,{label:"取件時間",prop:""},{default:a(()=>[X(i("select",{"onUpdate:modelValue":r[4]||(r[4]=l=>e.selectedTime=l)},[we,(p(!0),f(L,null,k(e.availableTimes,l=>(p(),f("option",{key:l,value:l},c(l),9,xe))),128))],512),[[Z,e.selectedTime]])]),_:1})]),_:1})]),_:1}),t(g,null,{default:a(()=>[t(d,null,{default:a(()=>[t(h,{label:"歸還時間",prop:""},{default:a(()=>[X(i("select",{"onUpdate:modelValue":r[5]||(r[5]=l=>e.returnTime=l)},[ye,(p(!0),f(L,null,k(e.availableTimes,l=>(p(),f("option",{key:l,value:l},c(l),9,Te))),128))],512),[[Z,e.returnTime]])]),_:1})]),_:1})]),_:1}),t(g,null,{default:a(()=>[t(d,null,{default:a(()=>[t(h,{label:"借用人身份",prop:""},{default:a(()=>[i("div",Ae,[t(B,{modelValue:e.identity,"onUpdate:modelValue":r[6]||(r[6]=l=>e.identity=l),class:"ml-4"},{default:a(()=>[t(T,{label:"1",size:"large"},{default:a(()=>[b("個人(學生)")]),_:1}),t(T,{label:"2",size:"large"},{default:a(()=>[b("個人(教師)")]),_:1}),t(T,{label:"3",size:"large"},{default:a(()=>[b("團體(師或生)")]),_:1})]),_:1},8,["modelValue"])])]),_:1})]),_:1})]),_:1}),t(g,null,{default:a(()=>[t(d,null,{default:a(()=>[t(h,{label:"借用人姓名",prop:"name"},{default:a(()=>[t(D,{modelValue:e.form.name,"onUpdate:modelValue":r[7]||(r[7]=l=>e.form.name=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(g,null,{default:a(()=>[t(d,null,{default:a(()=>[t(h,{label:"系級(課名)",prop:"department"},{default:a(()=>[t(D,{modelValue:e.form.department,"onUpdate:modelValue":r[8]||(r[8]=l=>e.form.department=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(g,null,{default:a(()=>[t(d,null,{default:a(()=>[t(h,{label:"手機",prop:"phone"},{default:a(()=>[t(D,{modelValue:e.form.phone,"onUpdate:modelValue":r[9]||(r[9]=l=>e.form.phone=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(g,null,{default:a(()=>[t(d,null,{default:a(()=>[t(h,{label:"Email",prop:"email"},{default:a(()=>[t(D,{modelValue:e.form.email,"onUpdate:modelValue":r[10]||(r[10]=l=>e.form.email=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"]),t(g,{gutter:12},{default:a(()=>[t(d,{span:24},{default:a(()=>[t(P,{class:"box-card","body-style":{paddingTop:"36px",paddingBottom:"36px",paddingLeft:"20px",paddingRight:"20px",height:"auto"}},{header:a(()=>[Se]),default:a(()=>[e.aiSelection&&e.aiSelection.length>0?(p(),f("div",Ve," 小栗方 Ai 學習機 數量："+c(e.aiSelection.length),1)):z("",!0),(p(!0),f(L,null,k(e.aiSelection,l=>(p(),f("div",{key:l,class:"text item"},[b(c(l["id-prefix"]+"-")+" ",1),i("span",De,c(l.id),1)]))),128)),e.viaSelection&&e.viaSelection.length>0?(p(),f("div",Ye," VIA Pixetto 視覺感測器 數量："+c(e.viaSelection.length),1)):z("",!0),(p(!0),f(L,null,k(e.viaSelection,l=>(p(),f("div",{key:l,class:"text item"},[b(c(l["id-prefix"]+"-"),1),i("span",Ee,c(l.id),1)]))),128)),e.alkSelection&&e.alkSelection.length>0?(p(),f("div",Le," ALK950 邊緣運算推論器 數量："+c(e.alkSelection.length),1)):z("",!0),(p(!0),f(L,null,k(e.alkSelection,l=>(p(),f("div",{key:l,class:"text item"},[b(c(l["id-prefix"]+"-"),1),i("span",ke,c(l.id),1)]))),128)),i("div",Ie,[b(" 租借期間 "),i("div",Re,c(e.toYYYYMMDD(e.range.start))+" ~"+c(e.toYYYYMMDD(e.range.end)),1)]),i("div",Me,[b(" 取件時間： "),i("div",Ce,[b(c(e.toYYYYMMDD(e.range.start))+" ",1),i("span",Be,c(e.selectedTime),1)])]),i("div",Ne,[b(" 歸還時間： "),i("div",Pe,[b(c(e.toYYYYMMDD(e.range.end))+" ",1),i("span",Ue,c(e.returnTime),1)])]),i("div",Ke,[b(" 租借天數： "),i("div",ze,c(e.moment(e.range.end).diff(e.moment(e.range.start),"days")?e.moment(e.range.end).diff(e.moment(e.range.start),"days"):"當")+"天 ",1)]),t(d,{span:24,style:{display:"flex"}},{default:a(()=>[t(Y,{size:"large",type:"primary",onClick:de(e.submitRent,["prevent"])},{default:a(()=>[b(" 租借送出 ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})])])}const Ge=re(fe,[["render",qe]]);export{Ge as default};
