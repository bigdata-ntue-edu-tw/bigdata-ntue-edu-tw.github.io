import{d,g as v,a as u,h as g,i as y,X as f,t as h,j as A,Z as o,Y as m}from"./firebase-51484e84.js";let a,r,c=null;const w=d("storeActivity",{state:()=>({activies:[],activiesLoaded:!1,loading:null}),actions:{init(){a=v(u,"activities"),r=g(a,y("date","desc")),this.loading=this.getActivies()},async addActivity(t){let i=new Date().getTime(),e=i.toString();await f(a,{content:t,date:e})},async getActivies(){this.activiesLoaded=!1;let t=()=>{},i=new Promise(e=>t=e);return c&&c(),c=h(r,e=>{let n=[];e.forEach(s=>{let l={_id:s.id,content:s.data().content,date:s.data().date,col:"activities"};n.push(l)}),this.activies=n,this.activiesLoaded=!0,t()},e=>{console.error("error.message: ",e.message)}),i},async deleteActivity(t){await A(o(a,t))},async updateActivity(t,i){await m(o(a,t),{content:i})}},getters:{getActiviesContent:t=>i=>t.activies.filter(e=>e._id===i)[0].content}});export{w as u};
