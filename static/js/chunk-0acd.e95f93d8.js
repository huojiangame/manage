(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0acd"],{"5PAK":function(e,t,a){"use strict";var n=a("wldV");a.n(n).a},"6Pha":function(e,t,a){},Ampy:function(e,t,a){},EGW9:function(e,t,a){"use strict";var n=a("hrvR");a.n(n).a},Gsba:function(e,t,a){"use strict";var n={name:"Mysearch",props:{hidden:{type:Boolean,default:!1},placeholder:{type:String,default:"请输入关键字(模糊搜索)"},buttonName:{type:String,default:"搜索"},value:{type:String,default:""}},data:function(){return{new_search:this.value}},methods:{to_search:function(){this.$emit("searchData",this.new_search)},to_input:function(){this.$emit("input",this.new_search)}}},s=(a("qq43"),a("KHd+")),i=Object(s.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{hidden:e.hidden}},[a("el-input",{attrs:{placeholder:e.placeholder,size:"small",clearable:""},on:{input:e.to_input,clear:e.to_search},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.to_search(t):null}},model:{value:e.new_search,callback:function(t){e.new_search=t},expression:"new_search"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.to_search},slot:"append"},[e._v(e._s(e.buttonName))])],1)],1)},[],!1,null,"d300708c",null);i.options.__file="index2.vue";t.a=i.exports},JOen:function(e,t,a){"use strict";var n=a("Q2AE"),s={name:"SingleFileUpload",props:{value:{required:!0},limit:{type:Number,default:1}},data:function(){return{action_url:"http://42.192.46.55:18671/huojian/uploadfile/",headers:{Authorization:"bearer "+n.a.getters.token}}},computed:{fileList:{get:function(){return console.log(this.value),null==this.value||""===this.value?(console.log([]),[]):(console.log([{name:this.value.split("/")[this.value.split("/").length-1],url:this.value}]),[{name:this.value.split("/")[this.value.split("/").length-1],url:this.value}])},set:function(e){console.log("set",e),this.$emit("input",e.url)}}},methods:{handlePreview:function(e){console.log(e)},handleRemove:function(e,t){console.log(e,t),t=[],this.$emit("input","")},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")},handleExceed:function(e,t){this.$message.warning("当前限制选择 "+this.limit+" 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},handleAvatarSuccess:function(e,t){console.log(t.response.data[0]),this.fileList={name:t.response.data[0].split("/")[t.response.data[0].split("/").length-1],url:t.response.data[0]}},beforeAvatarUpload:function(e){var t=e.size/1024/1024<50;return t||this.$message.error("允许的最大图片大小为 50MB！"),t}}},i=(a("5PAK"),a("KHd+")),r=Object(i.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-upload",{attrs:{"on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,limit:e.limit,"on-exceed":e.handleExceed,"file-list":e.fileList,action:e.action_url,headers:e.headers,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("最大不超过10MB")])],1)],1)},[],!1,null,"e10f14be",null);r.options.__file="singleFile.vue";t.a=r.exports},Mz3J:function(e,t,a){"use strict";var n={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},page_size:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.page_size},set:function(e){this.$emit("update:page_size",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,page_size:e})},handleCurrentChange:function(e){this.$emit("pagination",{page:e,page_size:this.pageSize})}}},s=(a("e+pk"),a("KHd+")),i=Object(s.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},[],!1,null,"88e53666",null);i.options.__file="index.vue";t.a=i.exports},OBWt:function(e,t,a){var n={"./ar":"pEiz","./ar.js":"pEiz","./az":"0zlr","./az.js":"0zlr","./bn":"nMs+","./bn.js":"nMs+","./cs":"307M","./cs.js":"307M","./de":"EXdN","./de.js":"EXdN","./el":"2Yl3","./el.js":"2Yl3","./es":"g40F","./es.js":"g40F","./fa":"B5Zb","./fa.js":"B5Zb","./fr":"tpjN","./fr.js":"tpjN","./hi":"Puzg","./hi.js":"Puzg","./hu":"XAci","./hu.js":"XAci","./id":"I/UY","./id.js":"I/UY","./it":"Hp5p","./it.js":"Hp5p","./ja":"iyGk","./ja.js":"iyGk","./jv":"qGiO","./jv.js":"qGiO","./ko":"15Mf","./ko.js":"15Mf","./my":"v0FM","./my.js":"v0FM","./nl":"JWNc","./nl.js":"JWNc","./pa-in":"Vlmt","./pa-in.js":"Vlmt","./pl":"SbCh","./pl.js":"SbCh","./pt":"JRQ5","./pt.js":"JRQ5","./ro":"g4xo","./ro.js":"g4xo","./ru":"K8D1","./ru.js":"K8D1","./sr":"8Dvn","./sr.js":"8Dvn","./th":"lcVx","./th.js":"lcVx","./tr":"Xivz","./tr.js":"Xivz","./uk":"hXkJ","./uk.js":"hXkJ","./uz":"k/Sy","./uz.js":"k/Sy","./vi":"mM2C","./vi.js":"mM2C","./zh-cn":"Fo3v","./zh-cn.js":"Fo3v","./zh-tw":"/6Ce","./zh-tw.js":"/6Ce"};function s(e){var t=i(e);return a(t)}function i(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(n)},s.resolve=i,e.exports=s,s.id="OBWt"},OY2D:function(e,t,a){},OiJS:function(e,t,a){},QlfN:function(e,t,a){"use strict";var n=a("OY2D");a.n(n).a},"e+pk":function(e,t,a){"use strict";var n=a("OiJS");a.n(n).a},eivq:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"d",function(){return i}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return o});var n=a("t3Un");function s(e,t){return Object(n.a)({url:e,method:"get",params:t})}function i(e,t){return Object(n.a)({url:e,method:"post",data:t})}function r(e,t){return Object(n.a)({url:e,method:"patch",data:t})}function o(e,t){return Object(n.a)({url:e,method:"delete",data:t})}},"gDS+":function(e,t,a){e.exports={default:a("oh+g"),__esModule:!0}},hrvR:function(e,t,a){},ioeK:function(e,t,a){"use strict";var n=a("6Pha");a.n(n).a},"oh+g":function(e,t,a){var n=a("WEpk"),s=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}},qq43:function(e,t,a){"use strict";var n=a("Ampy");a.n(n).a},raJj:function(e,t,a){"use strict";a.r(t);var n=a("gDS+"),s=a.n(n),i=(a("Q2AE"),a("Kw5r"),a("eivq")),r=(a("y3xr"),a("Gsba")),o=a("Mz3J"),l=a("y0oO"),u=a("JOen"),c={name:"authManage",components:{Mysearch:r.a,Pagination:o.a,UploadImage:l.a,UploadFile:u.a},data:function(){return{centerDialog:!1,centerDialog_delete:!1,centerDialog_patch:!1,page_datas:[],gameData:[],checkedGames:[],ruleForm:{auth_type:"",auth_permissions:[{object_name:"user",object_name_cn:"用户管理",auth_list:!1,auth_create:!1,auth_update:!1,auth_destroy:!1},{object_name:"auth",object_name_cn:"权限管理",auth_list:!1,auth_create:!1,auth_update:!1,auth_destroy:!1},{object_name:"depart",object_name_cn:"部门管理",auth_list:!1,auth_create:!1,auth_update:!1,auth_destroy:!1},{object_name:"game",object_name_cn:"游戏管理",auth_list:!1,auth_create:!1,auth_update:!1,auth_destroy:!1},{object_name:"charge",object_name_cn:"充值管理",auth_list:!1,auth_create:!1,auth_update:!1,auth_destroy:!1},{object_name:"price",object_name_cn:"游戏价格",auth_list:!1,auth_create:!1,auth_update:!1,auth_destroy:!1},{object_name:"chargetype",object_name_cn:"充值类型",auth_list:!1,auth_create:!1,auth_update:!1,auth_destroy:!1},{object_name:"cdkey",object_name_cn:"激活码管理",auth_list:!1,auth_create:!1,auth_update:!1,auth_destroy:!1},{object_name:"cdkbulk",object_name_cn:"激活码批量添加",auth_list:!1,auth_create:!1,auth_update:!1,auth_destroy:!1},{object_name:"cdksale",object_name_cn:"激活码销售",auth_list:!1,auth_create:!1,auth_update:!1,auth_destroy:!1},{object_name:"resetCharge",object_name_cn:"撤销充值",auth_list:!1,auth_create:!1,auth_update:!1,auth_destroy:!1}]},is_all:!1,rules:{auth_type:[{required:!0,message:"请输入权限名称",trigger:"blur"}]},ruleForm_patch:{},rules_patch:{},delete_data:{},my_pagination:{page:1,page_size:10,count:0,search:"",search_type:""}}},created:function(){this.get_need_data(this.my_pagination),this.get_game_data()},methods:{get_need_data:function(e){var t=this;Object(i.b)("/auth/",e).then(function(e){var a=e.data;t.page_datas=a,t.my_pagination.count=e.count})},get_game_data:function(e){var t=this;Object(i.b)("/game/",e).then(function(e){var a=e.data;t.gameData=a})},post_need_data:function(e){var t=this;Object(i.d)("/auth/",e).then(function(e){e.data;t.centerDialog=!1,t.$refs.ruleForm.resetFields(),t.$message({showClose:!0,message:"新增成功！",type:"success"}),t.get_need_data(t.my_pagination)})},patch_need_data:function(e){var t=this;Object(i.c)("/auth/"+e.id+"/",e).then(function(e){e.data;t.centerDialog_patch=!1,t.$message({showClose:!0,message:"修改成功！",type:"success"}),t.get_need_data(t.my_pagination)})},delete_need_data:function(e){var t=this;Object(i.a)("/auth/"+e.id+"/",e).then(function(e){e.data;t.centerDialog_delete=!1,t.$message({showClose:!0,message:"删除成功！",type:"success"}),t.get_need_data(t.my_pagination)})},submitForm:function(e){var t=this,a=[];this.checkedGames.forEach(function(e){a.push({game:e})}),this.$refs[e].validate(function(n){if(!n)return console.log("error submit!!"),!1;"ruleForm"==e?(t.ruleForm.auth_game=a,t.post_need_data(t.ruleForm)):(t.ruleForm_patch.auth_game=a,t.patch_need_data(t.ruleForm_patch))})},resetForm:function(e){this.centerDialog=!1,this.centerDialog_patch=!1,this.$refs[e].resetFields()},delete_data_fuc:function(e){this.delete_data=e,this.centerDialog_delete=!0},new_data:function(){this.checkedGames=[],this.centerDialog=!0},true_delete:function(){this.delete_need_data(this.delete_data)},edit_data:function(e){var t=this;for(var a in this.ruleForm_patch=JSON.parse(s()(e)),this.checkedGames=[],this.ruleForm.auth_permissions){var n=!1;for(var i in this.ruleForm_patch.auth_permissions)if(this.ruleForm.auth_permissions[a].object_name===this.ruleForm_patch.auth_permissions[i].object_name){n=!0;break}n||this.ruleForm_patch.auth_permissions.push(this.ruleForm.auth_permissions[a])}this.ruleForm_patch.auth_game.forEach(function(e){t.checkedGames.push(e.game)}),this.centerDialog_patch=!0},to_search:function(){this.my_pagination.page=1,this.get_need_data(this.my_pagination)},pag_change:function(){this.get_need_data(this.my_pagination)},search_change:function(){this.get_need_data(this.my_pagination)},my_change:function(e){this.my_pagination.page=1,this.my_pagination.search_type=e,this.get_need_data(this.my_pagination)},all_change:function(e){if(e)for(var t in this.ruleForm.auth_permissions)null!=this.ruleForm.auth_permissions[t].auth_list&&(this.ruleForm.auth_permissions[t].auth_list=!0),null!=this.ruleForm.auth_permissions[t].auth_create&&(this.ruleForm.auth_permissions[t].auth_create=!0),null!=this.ruleForm.auth_permissions[t].auth_update&&(this.ruleForm.auth_permissions[t].auth_update=!0),null!=this.ruleForm.auth_permissions[t].auth_destroy&&(this.ruleForm.auth_permissions[t].auth_destroy=!0);else for(var t in this.ruleForm.auth_permissions)null!=this.ruleForm.auth_permissions[t].auth_list&&(this.ruleForm.auth_permissions[t].auth_list=!1),null!=this.ruleForm.auth_permissions[t].auth_create&&(this.ruleForm.auth_permissions[t].auth_create=!1),null!=this.ruleForm.auth_permissions[t].auth_update&&(this.ruleForm.auth_permissions[t].auth_update=!1),null!=this.ruleForm.auth_permissions[t].auth_destroy&&(this.ruleForm.auth_permissions[t].auth_destroy=!1)},get_auth:function(e){var t="";for(var a in e)t+=e[a].object_name_cn,e[a].auth_list||e[a].auth_create||e[a].auth_update||e[a].auth_destroy?(e[a].auth_list&&(t+="：查看"),e[a].auth_create&&(t+="，新增"),e[a].auth_update&&(t+="，修改"),e[a].auth_destroy&&(t+="，删除"),t+="；\n"):t+="：无；\n";return t}}},_=(a("EGW9"),a("ioeK"),a("KHd+")),h=Object(_.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-col",{attrs:{span:10}},["SuperAdmin"===e.$store.getters.user_obj.group.group_type||e.$store.getters.auth_json.auth.auth_create?a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.new_data}},[e._v("新增")]):e._e(),e._v(" "),a("p")],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("p")]),e._v(" "),a("el-col",{attrs:{span:6}},[a("mysearch",{on:{searchData:e.to_search},model:{value:e.my_pagination.search,callback:function(t){e.$set(e.my_pagination,"search",t)},expression:"my_pagination.search"}})],1)],1),e._v(" "),a("br"),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page_datas,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"auth_type",label:"权限名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"slot",label:"权限"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.get_auth(t.row.auth_permissions)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"slot",label:"游戏"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.auth_game,function(t){return a("div",{key:t.id},[e._v(e._s(t.game_name_cn))])})}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["SuperAdmin"===e.$store.getters.user_obj.group.group_type||e.$store.getters.auth_json.auth.auth_update?a("el-row",[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.edit_data(t.row)}}},[e._v("编辑")])],1):e._e(),e._v(" "),"SuperAdmin"===e.$store.getters.user_obj.group.group_type||e.$store.getters.auth_json.auth.auth_destroy?a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.delete_data_fuc(t.row)}}},[e._v("删除")])],1):e._e()]}}])})],1),e._v(" "),a("br"),e._v(" "),a("pagination",{attrs:{total:e.my_pagination.count,page:e.my_pagination.page,page_size:e.my_pagination.page_size},on:{"update:page":function(t){e.$set(e.my_pagination,"page",t)},"update:page_size":function(t){e.$set(e.my_pagination,"page_size",t)},pagination:e.pag_change}}),e._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:e.centerDialog,title:"新增",width:"50%",center:""},on:{"update:visible":function(t){e.centerDialog=t}}},[a("div",[a("el-form",{ref:"ruleForm",attrs:{size:"small",model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"权限名称",prop:"auth_type"}},[a("el-input",{attrs:{size:"small"},model:{value:e.ruleForm.auth_type,callback:function(t){e.$set(e.ruleForm,"auth_type",t)},expression:"ruleForm.auth_type"}})],1),e._v(" "),a("h3",[e._v("权限配置：")]),e._v(" "),a("el-form-item",{attrs:{label:"全选"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:e.all_change},model:{value:e.is_all,callback:function(t){e.is_all=t},expression:"is_all"}})],1),e._v(" "),e._l(e.ruleForm.auth_permissions,function(t,n){return a("el-form-item",{key:n,attrs:{label:t.object_name_cn+":"}},[a("el-row",[null!=t.auth_list?a("el-col",{attrs:{span:6}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.auth_list,callback:function(a){e.$set(t,"auth_list",a)},expression:"data.auth_list"}}),e._v("\n                查看\n              ")],1):e._e(),e._v(" "),null!=t.auth_create?a("el-col",{attrs:{span:6}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.auth_create,callback:function(a){e.$set(t,"auth_create",a)},expression:"data.auth_create"}}),e._v("\n                新增\n              ")],1):e._e(),e._v(" "),null!=t.auth_update?a("el-col",{attrs:{span:6}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.auth_update,callback:function(a){e.$set(t,"auth_update",a)},expression:"data.auth_update"}}),e._v("\n                修改\n              ")],1):e._e(),e._v(" "),null!=t.auth_destroy?a("el-col",{attrs:{span:6}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.auth_destroy,callback:function(a){e.$set(t,"auth_destroy",a)},expression:"data.auth_destroy"}}),e._v("\n                删除\n              ")],1):e._e()],1)],1)}),e._v(" "),a("h3",[e._v("游戏配置：")]),e._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-checkbox-group",{model:{value:e.checkedGames,callback:function(t){e.checkedGames=t},expression:"checkedGames"}},e._l(e.gameData,function(t){return a("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.game_name_cn))])}))],1)],2)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:e.centerDialog_delete,title:"确认删除",width:"30%",center:""},on:{"update:visible":function(t){e.centerDialog_delete=t}}},[a("span",[e._v("是否确认删除，删除后不可恢复？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.centerDialog_delete=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.true_delete}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{visible:e.centerDialog_patch,title:"编辑",width:"50%",center:""},on:{"update:visible":function(t){e.centerDialog_patch=t}}},[a("div",[a("el-form",{ref:"ruleForm_patch",attrs:{model:e.ruleForm_patch,rules:e.rules_patch,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"权限名称",prop:"auth_type"}},[a("el-input",{attrs:{size:"small"},model:{value:e.ruleForm_patch.auth_type,callback:function(t){e.$set(e.ruleForm_patch,"auth_type",t)},expression:"ruleForm_patch.auth_type"}})],1),e._v(" "),a("h3",[e._v("权限配置：")]),e._v(" "),e._l(e.ruleForm_patch.auth_permissions,function(t,n){return a("el-form-item",{key:n,attrs:{label:t.object_name_cn+":"}},[a("el-row",[null!=t.auth_list?a("el-col",{attrs:{span:6}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.auth_list,callback:function(a){e.$set(t,"auth_list",a)},expression:"data.auth_list"}}),e._v("\n                查看\n              ")],1):e._e(),e._v(" "),null!=t.auth_create?a("el-col",{attrs:{span:6}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.auth_create,callback:function(a){e.$set(t,"auth_create",a)},expression:"data.auth_create"}}),e._v("\n                新增\n              ")],1):e._e(),e._v(" "),null!=t.auth_update?a("el-col",{attrs:{span:6}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.auth_update,callback:function(a){e.$set(t,"auth_update",a)},expression:"data.auth_update"}}),e._v("\n                修改\n              ")],1):e._e(),e._v(" "),null!=t.auth_destroy?a("el-col",{attrs:{span:6}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.auth_destroy,callback:function(a){e.$set(t,"auth_destroy",a)},expression:"data.auth_destroy"}}),e._v("\n                删除\n              ")],1):e._e()],1)],1)}),e._v(" "),a("h3",[e._v("游戏配置：")]),e._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-checkbox-group",{model:{value:e.checkedGames,callback:function(t){e.checkedGames=t},expression:"checkedGames"}},e._l(e.gameData,function(t){return a("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.game_name_cn))])}))],1)],2)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.resetForm("ruleForm_patch")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.submitForm("ruleForm_patch")}}},[e._v("确 定")])],1)])],1)},[],!1,null,"413d96c8",null);h.options.__file="auth.vue";t.default=h.exports},wldV:function(e,t,a){},y0oO:function(e,t,a){"use strict";var n=a("Q2AE"),s={name:"SingleImageUpload",props:{value:{required:!0,type:String}},data:function(){return{action_url:"http://42.192.46.55:18671/huojian/uploadfile/",headers:{Authorization:"bearer "+n.a.getters.token}}},computed:{imageUrl:function(){return this.value}},methods:{handleAvatarSuccess:function(e,t){console.log(t.response.data[0]),this.$emit("input",t.response.data[0])},beforeAvatarUpload:function(e){var t=!1;-1!==["image/jpeg","image/jpg","image/png"].indexOf(e.type)&&(t=!0),console.log(t);var a=e.size/1024/1024<10;return t||this.$message.error("允许的图片类型为 JPG / JPEG / PNG ！"),a||this.$message.error("允许的最大图片大小为 10MB！"),t&&a}}},i=(a("QlfN"),a("KHd+")),r=Object(i.a)(s,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:this.action_url,headers:this.headers,"show-file-list":!1,"on-success":this.handleAvatarSuccess,"before-upload":this.beforeAvatarUpload}},[this.imageUrl.length>1?t("img",{staticClass:"avatar",attrs:{src:this.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)},[],!1,null,"6bdac550",null);r.options.__file="singleImage.vue";t.a=r.exports}}]);