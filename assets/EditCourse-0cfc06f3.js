import{s as X,e as K}from"./loading-bb5f32dc.js";import{_ as Me,C as He,r as ue,l as $,m as je,n as qe,p as ze,S as We,q as $e,F as Xe,u as Ke,k as Ge,g as B,Y as ce,Z as G,z as Ye,X as Y,a as Ze}from"./firebase-51484e84.js";import{I as Je,B as Qe}from"./index-b9962f05.js";import{u as et}from"./course-472c529b.js";import{r as Z,C as J}from"./index-fcdd6f12.js";import{_ as tt}from"./plugin-vue_export-helper-c27b6911.js";import{a as de}from"./index-7c49e7b5.js";import{r as he,w as nt,l as Q,m as ee,x as st,y as T,B as ot,a3 as F,k as j,E as m,F as rt,Y as it,D as fe,C as q}from"./runtime-core.esm-bundler-08e2c704.js";import"./index-1d84a674.js";import"./runtime-dom.esm-bundler-a91390dd.js";import"./quill-0ca21a08.js";import"./index-51ec6782.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="firebasestorage.googleapis.com",Te="storageBucket",at=2*60*1e3,lt=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f extends Xe{constructor(t,s,n=0){super(te(t),`Firebase Storage: ${s} (${te(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,f.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return te(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var h;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(h||(h={}));function te(e){return"storage/"+e}function oe(){const e="An unknown error occurred, please check the error payload for server response.";return new f(h.UNKNOWN,e)}function ut(e){return new f(h.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function ct(e){return new f(h.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new f(h.UNAUTHENTICATED,e)}function ht(){return new f(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ft(e){return new f(h.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function pt(){return new f(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mt(){return new f(h.CANCELED,"User canceled the upload/download.")}function _t(e){return new f(h.INVALID_URL,"Invalid URL '"+e+"'.")}function gt(e){return new f(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function bt(){return new f(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Te+"' property when initializing the app?")}function wt(){return new f(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Rt(){return new f(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function kt(e){return new f(h.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function se(e){return new f(h.INVALID_ARGUMENT,e)}function Ue(){return new f(h.APP_DELETED,"The Firebase app was deleted.")}function yt(e){return new f(h.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function M(e,t){return new f(h.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function V(e){throw new f(h.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t,s){this.bucket=t,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,s){let n;try{n=E.makeFromUrl(t,s)}catch{return new E(t,"")}if(n.path==="")return n;throw gt(t)}static makeFromUrl(t,s){let n=null;const o="([A-Za-z0-9.\\-_]+)";function r(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+o+i,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const w="v[A-Za-z0-9_]+",c=s.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",b=new RegExp(`^https?://${c}/${w}/b/${o}/o${d}`,"i"),A={bucket:1,path:3},N=s===ye?"(?:storage.googleapis.com|storage.cloud.google.com)":s,k="([^?#]*)",y=new RegExp(`^https?://${N}/${o}/${k}`,"i"),R=[{regex:a,indices:l,postModify:r},{regex:b,indices:A,postModify:u},{regex:y,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<R.length;_++){const v=R[_],g=v.regex.exec(t);if(g){const P=g[v.indices.bucket];let O=g[v.indices.path];O||(O=""),n=new E(P,O),v.postModify(n);break}}if(n==null)throw _t(t);return n}}class Tt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t,s){let n=1,o=null,r=null,i=!1,a=0;function l(){return a===2}let u=!1;function w(...k){u||(u=!0,t.apply(null,k))}function c(k){o=setTimeout(()=>{o=null,e(b,l())},k)}function d(){r&&clearTimeout(r)}function b(k,...y){if(u){d();return}if(k){d(),w.call(null,k,...y);return}if(l()||i){d(),w.call(null,k,...y);return}n<64&&(n*=2);let R;a===1?(a=2,R=0):R=(n+Math.random())*1e3,c(R)}let A=!1;function N(k){A||(A=!0,d(),!u&&(o!==null?(k||(a=2),clearTimeout(o),c(0)):k||(a=1)))}return c(0),r=setTimeout(()=>{i=!0,N(!0)},s),N}function Et(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e){return e!==void 0}function vt(e){return typeof e=="object"&&!Array.isArray(e)}function re(e){return typeof e=="string"||e instanceof String}function pe(e){return ie()&&e instanceof Blob}function ie(){return typeof Blob<"u"&&!Ke()}function me(e,t,s,n){if(n<t)throw se(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>s)throw se(`Invalid value for '${e}'. Expected ${s} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,s){let n=t;return s==null&&(n=`https://${t}`),`${s}://${n}/v0${e}`}function Ee(e){const t=encodeURIComponent;let s="?";for(const n in e)if(e.hasOwnProperty(n)){const o=t(n)+"="+t(e[n]);s=s+o+"&"}return s=s.slice(0,-1),s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(L||(L={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e,t){const s=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return s||o||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,s,n,o,r,i,a,l,u,w,c,d=!0){this.url_=t,this.method_=s,this.headers_=n,this.body_=o,this.successCodes_=r,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=w,this.connectionFactory_=c,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,A)=>{this.resolve_=b,this.reject_=A,this.start_()})}start_(){const t=(n,o)=>{if(o){n(!1,new z(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const i=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&r.addUploadProgressListener(i),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(i),this.pendingConnection_=null;const a=r.getErrorCode()===L.NO_ERROR,l=r.getStatus();if(!a||It(l,this.additionalRetryCodes_)&&this.retry){const w=r.getErrorCode()===L.ABORT;n(!1,new z(!1,null,w));return}const u=this.successCodes_.indexOf(l)!==-1;n(!0,new z(u,r))})},s=(n,o)=>{const r=this.resolve_,i=this.reject_,a=o.connection;if(o.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());At(l)?r(l):r()}catch(l){i(l)}else if(a!==null){const l=oe();l.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,l)):i(l)}else if(o.canceled){const l=this.appDelete_?Ue():mt();i(l)}else{const l=pt();i(l)}};this.canceled_?s(!1,new z(!1,null,!0)):this.backoffId_=Ut(t,s,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Et(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class z{constructor(t,s,n){this.wasSuccessCode=t,this.connection=s,this.canceled=!!n}}function Ct(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Nt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Lt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Dt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Pt(e,t,s,n,o,r,i=!0){const a=Ee(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return Lt(u,t),Ct(u,s),Nt(u,r),Dt(u,n),new Ot(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function St(...e){const t=xt();if(t!==void 0){const s=new t;for(let n=0;n<e.length;n++)s.append(e[n]);return s.getBlob()}else{if(ie())return new Blob(e);throw new f(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Bt(e,t,s){return e.webkitSlice?e.webkitSlice(t,s):e.mozSlice?e.mozSlice(t,s):e.slice?e.slice(t,s):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e){if(typeof atob>"u")throw kt("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ne{constructor(t,s){this.data=t,this.contentType=s||null}}function Vt(e,t){switch(e){case I.RAW:return new ne(Ae(t));case I.BASE64:case I.BASE64URL:return new ne(ve(e,t));case I.DATA_URL:return new ne(Ht(t),jt(t))}throw oe()}function Ae(e){const t=[];for(let s=0;s<e.length;s++){let n=e.charCodeAt(s);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<e.length-1&&(e.charCodeAt(s+1)&64512)===56320))t.push(239,191,189);else{const r=n,i=e.charCodeAt(++s);n=65536|(r&1023)<<10|i&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function Mt(e){let t;try{t=decodeURIComponent(e)}catch{throw M(I.DATA_URL,"Malformed data URL.")}return Ae(t)}function ve(e,t){switch(e){case I.BASE64:{const o=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(o||r)throw M(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case I.BASE64URL:{const o=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(o||r)throw M(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=Ft(t)}catch(o){throw o.message.includes("polyfill")?o:M(e,"Invalid character found")}const n=new Uint8Array(s.length);for(let o=0;o<s.length;o++)n[o]=s.charCodeAt(o);return n}class Ie{constructor(t){this.base64=!1,this.contentType=null;const s=t.match(/^data:([^,]+)?,/);if(s===null)throw M(I.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=qt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function Ht(e){const t=new Ie(e);return t.base64?ve(I.BASE64,t.rest):Mt(t.rest)}function jt(e){return new Ie(e).contentType}function qt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,s){let n=0,o="";pe(t)?(this.data_=t,n=t.size,o=t.type):t instanceof ArrayBuffer?(s?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(s?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,s){if(pe(this.data_)){const n=this.data_,o=Bt(n,t,s);return o===null?null:new C(o)}else{const n=new Uint8Array(this.data_.buffer,t,s-t);return new C(n,!0)}}static getBlob(...t){if(ie()){const s=t.map(n=>n instanceof C?n.data_:n);return new C(St.apply(null,s))}else{const s=t.map(i=>re(i)?Vt(I.RAW,i).data:i.data_);let n=0;s.forEach(i=>{n+=i.byteLength});const o=new Uint8Array(n);let r=0;return s.forEach(i=>{for(let a=0;a<i.length;a++)o[r++]=i[a]}),new C(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e){let t;try{t=JSON.parse(e)}catch{return null}return vt(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Wt(e,t){const s=t.split("/").filter(n=>n.length>0).join("/");return e.length===0?s:e+"/"+s}function Ce(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e,t){return t}class U{constructor(t,s,n,o){this.server=t,this.local=s||t,this.writable=!!n,this.xform=o||$t}}let W=null;function Xt(e){return!re(e)||e.length<2?e:Ce(e)}function Ne(){if(W)return W;const e=[];e.push(new U("bucket")),e.push(new U("generation")),e.push(new U("metageneration")),e.push(new U("name","fullPath",!0));function t(r,i){return Xt(i)}const s=new U("name");s.xform=t,e.push(s);function n(r,i){return i!==void 0?Number(i):i}const o=new U("size");return o.xform=n,e.push(o),e.push(new U("timeCreated")),e.push(new U("updated")),e.push(new U("md5Hash",null,!0)),e.push(new U("cacheControl",null,!0)),e.push(new U("contentDisposition",null,!0)),e.push(new U("contentEncoding",null,!0)),e.push(new U("contentLanguage",null,!0)),e.push(new U("contentType",null,!0)),e.push(new U("metadata","customMetadata",!0)),W=e,W}function Kt(e,t){function s(){const n=e.bucket,o=e.fullPath,r=new E(n,o);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:s})}function Gt(e,t,s){const n={};n.type="file";const o=s.length;for(let r=0;r<o;r++){const i=s[r];n[i.local]=i.xform(n,t[i.server])}return Kt(n,e),n}function Le(e,t,s){const n=Oe(t);return n===null?null:Gt(e,n,s)}function Yt(e,t,s,n){const o=Oe(t);if(o===null||!re(o.downloadTokens))return null;const r=o.downloadTokens;if(r.length===0)return null;const i=encodeURIComponent;return r.split(",").map(u=>{const w=e.bucket,c=e.fullPath,d="/b/"+i(w)+"/o/"+i(c),b=ae(d,s,n),A=Ee({alt:"media",token:u});return b+A})[0]}function Zt(e,t){const s={},n=t.length;for(let o=0;o<n;o++){const r=t[o];r.writable&&(s[r.server]=e[r.local])}return JSON.stringify(s)}class De{constructor(t,s,n,o){this.url=t,this.method=s,this.handler=n,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){if(!e)throw oe()}function Jt(e,t){function s(n,o){const r=Le(e,o,t);return Pe(r!==null),r}return s}function Qt(e,t){function s(n,o){const r=Le(e,o,t);return Pe(r!==null),Yt(r,o,e.host,e._protocol)}return s}function xe(e){function t(s,n){let o;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?o=ht():o=dt():s.getStatus()===402?o=ct(e.bucket):s.getStatus()===403?o=ft(e.path):o=n,o.status=s.getStatus(),o.serverResponse=n.serverResponse,o}return t}function en(e){const t=xe(e);function s(n,o){let r=t(n,o);return n.getStatus()===404&&(r=ut(e.path)),r.serverResponse=o.serverResponse,r}return s}function tn(e,t,s){const n=t.fullServerUrl(),o=ae(n,e.host,e._protocol),r="GET",i=e.maxOperationRetryTime,a=new De(o,r,Qt(e,s),i);return a.errorHandler=en(t),a}function nn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function sn(e,t,s){const n=Object.assign({},s);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=nn(null,t)),n}function on(e,t,s,n,o){const r=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let R="";for(let _=0;_<2;_++)R=R+Math.random().toString().slice(2);return R}const l=a();i["Content-Type"]="multipart/related; boundary="+l;const u=sn(t,n,o),w=Zt(u,s),c="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+w+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",b=C.getBlob(c,n,d);if(b===null)throw wt();const A={name:u.fullPath},N=ae(r,e.host,e._protocol),k="POST",y=e.maxUploadRetryTime,p=new De(N,k,Jt(e,s),y);return p.urlParams=A,p.headers=i,p.body=b.uploadData(),p.errorHandler=xe(t),p}class rn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=L.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=L.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=L.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,s,n,o){if(this.sent_)throw V("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,t,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw V("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw V("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw V("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw V("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class an extends rn{initXhr(){this.xhr_.responseType="text"}}function Se(){return new an}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t,s){this._service=t,s instanceof E?this._location=s:this._location=E.makeFromUrl(s,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,s){return new D(t,s)}get root(){const t=new E(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ce(this._location.path)}get storage(){return this._service}get parent(){const t=zt(this._location.path);if(t===null)return null;const s=new E(this._location.bucket,t);return new D(this._service,s)}_throwIfRoot(t){if(this._location.path==="")throw yt(t)}}function ln(e,t,s){e._throwIfRoot("uploadBytes");const n=on(e.storage,e._location,Ne(),new C(t,!0),s);return e.storage.makeRequestWithTokens(n,Se).then(o=>({metadata:o,ref:e}))}function un(e){e._throwIfRoot("getDownloadURL");const t=tn(e.storage,e._location,Ne());return e.storage.makeRequestWithTokens(t,Se).then(s=>{if(s===null)throw Rt();return s})}function cn(e,t){const s=Wt(e._location.path,t),n=new E(e._location.bucket,s);return new D(e.storage,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(e){return/^[A-Za-z]+:\/\//.test(e)}function hn(e,t){return new D(e,t)}function Be(e,t){if(e instanceof le){const s=e;if(s._bucket==null)throw bt();const n=new D(s,s._bucket);return t!=null?Be(n,t):n}else return t!==void 0?cn(e,t):e}function fn(e,t){if(t&&dn(t)){if(e instanceof le)return hn(e,t);throw se("To use ref(service, url), the first argument must be a Storage instance.")}else return Be(e,t)}function _e(e,t){const s=t==null?void 0:t[Te];return s==null?null:E.makeFromBucketSpec(s,e)}function pn(e,t,s,n={}){e.host=`${t}:${s}`,e._protocol="http";const{mockUserToken:o}=n;o&&(e._overrideAuthToken=typeof o=="string"?o:$e(o,e.app.options.projectId))}class le{constructor(t,s,n,o,r){this.app=t,this._authProvider=s,this._appCheckProvider=n,this._url=o,this._firebaseVersion=r,this._bucket=null,this._host=ye,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=at,this._maxUploadRetryTime=lt,this._requests=new Set,o!=null?this._bucket=E.makeFromBucketSpec(o,this._host):this._bucket=_e(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=E.makeFromBucketSpec(this._url,t):this._bucket=_e(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){me("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){me("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const s=await t.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new D(this,t)}_makeRequest(t,s,n,o,r=!0){if(this._deleted)return new Tt(Ue());{const i=Pt(t,this._appId,n,o,s,this._firebaseVersion,r);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,s){const[n,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,s,n,o).getPromise()}}const ge="@firebase/storage",be="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="storage";function we(e,t,s){return e=$(e),ln(e,t,s)}function Re(e){return e=$(e),un(e)}function ke(e,t){return e=$(e),fn(e,t)}function mn(e=ze(),t){e=$(e);const n=je(e,Fe).getImmediate({identifier:t}),o=qe("storage");return o&&_n(n,...o),n}function _n(e,t,s,n={}){pn(e,t,s,n)}function gn(e,{instanceIdentifier:t}){const s=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new le(s,n,o,t,We)}function bn(){Me(new He(Fe,gn,"PUBLIC").setMultipleInstances(!0)),ue(ge,be,""),ue(ge,be,"esm2017")}bn();const wn={props:["id"],setup(e){X();const{id:t}=e,s=et(),n=he(null),o={title:"",instructor:"",imageUrl:"",sessions:[]},r=he({...o}),i=()=>{r.value={...o}},a=()=>{r.value.sessions.push({title:"",content:"",materials:[],youtubeLink:"",order:r.value.sessions.length})},l=y=>(p,R)=>{r.value.sessions[y].materials.push({name:p.name,raw:p.raw,url:URL.createObjectURL(p.raw),status:"ready"})},u=y=>(p,R)=>{const _=r.value.sessions[y].materials,v=_.findIndex(g=>g.name===p.name);v!==-1&&_.splice(v,1)},w=[{name:"ImageDrop",module:Je},{name:"BlotFormatter",module:Qe}],c=async()=>{X();const y=mn(),p=B(Ze,"courses");let R=new Date().getTime(),_=R.toString();if(t){await ce(G(p,t),{content:{title:r.value.title,instructor:r.value.instructor,startdAt:r.value.startdAt,imageUrl:r.value.imageUrl}}),await Ye(B(G(p,t),"sessions"));for(let[v,g]of r.value.sessions.entries()){for(let[P,O]of g.materials.entries()){if(O.status==="success")continue;const x=O.raw,S=ke(y,`materials/${x.name}`);await we(S,x);const H=await Re(S);r.value.sessions[v].materials[P]={name:O.name,url:H}}g._id?await ce(G(B(p,t,"sessions"),g._id),{title:g.title,content:g.content,materials:g.materials,youtubeLink:g.youtubeLink}):await Y(B(p,t,"sessions"),{title:g.title,content:g.content,materials:g.materials,youtubeLink:g.youtubeLink})}}else{const v=await Y(p,{content:{title:r.value.title,instructor:r.value.instructor,startdAt:r.value.startdAt,imageUrl:r.value.imageUrl},date:_});for(let[g,P]of r.value.sessions.entries()){for(let[O,x]of P.materials.entries()){const S=x.raw,H=ke(y,`materials/${S.name}`);await we(H,S);const Ve=await Re(H);r.value.sessions[g].materials[O]={name:x.name,url:Ve}}await Y(B(v,"sessions"),P)}}Z.replace({name:J}),K()},d={modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]}},{coursesLoaded:b}=Ge(s);return nt(b,y=>{if(y){if(K(),t){const{content:p,sessions:R}=s.getCourseContent(t);r.value={...p,sessions:R},console.log(r.value)}}},{immediate:!0,deep:!0}),{id:t,form:r,rules:{title:[{required:!0,message:"請輸入課程標題",trigger:"blur"}]},formRef:n,onSubmit:()=>{X(),console.log(r.value),r.value.title&&r.value.content?(t?s.updateCourse(t,r.value):s.addCourse(r.value),i(),de.success(t?"更新課程成功":"新增課程成功"),Z.replace({name:J})):de.error("課程標題、內容不得為空"),K()},cancel:()=>{i(),Z.replace({name:J})},store:s,editorOption:d,editorModules:w,addSession:a,handleFileChange:l,handleFileRemove:u,submitForm:c}}},Rn={class:"inner"},kn={class:"content-box"},yn={class:"session_wrapper"};function Tn(e,t,s,n,o,r){const i=F("el-input"),a=F("el-form-item"),l=F("el-button"),u=F("el-upload"),w=F("el-form");return j(),Q("div",Rn,[ee("div",kn,[n.store.loading?(j(),st(w,{key:0,ref:"formRef",model:n.form,rules:n.rules},{default:T(()=>[m(a,{label:"課程標題",prop:"title"},{default:T(()=>[m(i,{modelValue:n.form.title,"onUpdate:modelValue":t[0]||(t[0]=c=>n.form.title=c)},null,8,["modelValue"])]),_:1}),m(a,{label:"授課老師",prop:"title"},{default:T(()=>[m(i,{modelValue:n.form.instructor,"onUpdate:modelValue":t[1]||(t[1]=c=>n.form.instructor=c)},null,8,["modelValue"])]),_:1}),m(a,{label:"課程縮圖連結",prop:"title"},{default:T(()=>[m(i,{modelValue:n.form.imageUrl,"onUpdate:modelValue":t[2]||(t[2]=c=>n.form.imageUrl=c)},null,8,["modelValue"])]),_:1}),ee("div",yn,[(j(!0),Q(rt,null,it(n.form.sessions,(c,d)=>(j(),Q("div",{class:"session",key:d},[ee("h3",null,"Week: "+fe(d+1),1),m(a,{label:"標題",prop:"sessions."+d+".title"},{default:T(()=>[m(i,{modelValue:c.title,"onUpdate:modelValue":b=>c.title=b},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"]),m(a,{label:"內容",prop:"sessions."+d+".content"},{default:T(()=>[m(i,{modelValue:c.content,"onUpdate:modelValue":b=>c.content=b},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"]),m(a,{label:"教材檔案",prop:"sessions."+d+".materials"},{default:T(()=>[m(u,{action:"","on-change":n.handleFileChange(d),"on-remove":n.handleFileRemove(d),"auto-upload":!1,"file-list":c.materials},{default:T(()=>[m(l,{slot:"trigger",size:"small",type:"primary"},{default:T(()=>[q("點擊上傳")]),_:1})]),_:2},1032,["on-change","on-remove","file-list"])]),_:2},1032,["prop"]),m(a,{label:" Youtube 連結",prop:"sessions."+d+".youtubeLink"},{default:T(()=>[m(i,{modelValue:c.youtubeLink,"onUpdate:modelValue":b=>c.youtubeLink=b},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]))),128))]),m(a,null,{default:T(()=>[m(l,{type:"primary",onClick:n.addSession},{default:T(()=>[q("添加 Week")]),_:1},8,["onClick"])]),_:1}),m(a,null,{default:T(()=>[m(l,{type:"primary",onClick:n.submitForm},{default:T(()=>[q(fe(n.id?"更新":"建立"),1)]),_:1},8,["onClick"]),m(l,{onClick:n.cancel},{default:T(()=>[q("取消")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])):ot("",!0)])])}const Sn=tt(wn,[["render",Tn],["__scopeId","data-v-026d7221"]]);export{Sn as default};
