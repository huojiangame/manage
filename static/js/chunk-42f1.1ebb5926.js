(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-42f1"],{"3NXv":function(e,t,a){},"5PAK":function(e,t,a){"use strict";var r=a("wldV");a.n(r).a},Ampy:function(e,t,a){},Gsba:function(e,t,a){"use strict";var r={name:"Mysearch",props:{hidden:{type:Boolean,default:!1},placeholder:{type:String,default:"请输入关键字(模糊搜索)"},buttonName:{type:String,default:"搜索"},value:{type:String,default:""}},data:function(){return{new_search:this.value}},methods:{to_search:function(){this.$emit("searchData",this.new_search)},to_input:function(){this.$emit("input",this.new_search)}}},l=(a("qq43"),a("KHd+")),n=Object(l.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{hidden:e.hidden}},[a("el-input",{attrs:{placeholder:e.placeholder,size:"small",clearable:""},on:{input:e.to_input,clear:e.to_search},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.to_search(t):null}},model:{value:e.new_search,callback:function(t){e.new_search=t},expression:"new_search"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.to_search},slot:"append"},[e._v(e._s(e.buttonName))])],1)],1)},[],!1,null,"d300708c",null);n.options.__file="index2.vue";t.a=n.exports},JOen:function(e,t,a){"use strict";var r=a("Q2AE"),l={name:"SingleFileUpload",props:{value:{required:!0},limit:{type:Number,default:1}},data:function(){return{action_url:"http://42.192.46.55:18671/huojian/uploadfile/",headers:{Authorization:"bearer "+r.a.getters.token}}},computed:{fileList:{get:function(){return console.log(this.value),null==this.value||""===this.value?(console.log([]),[]):(console.log([{name:this.value.split("/")[this.value.split("/").length-1],url:this.value}]),[{name:this.value.split("/")[this.value.split("/").length-1],url:this.value}])},set:function(e){console.log("set",e),this.$emit("input",e.url)}}},methods:{handlePreview:function(e){console.log(e)},handleRemove:function(e,t){console.log(e,t),t=[],this.$emit("input","")},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")},handleExceed:function(e,t){this.$message.warning("当前限制选择 "+this.limit+" 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},handleAvatarSuccess:function(e,t){console.log(t.response.data[0]),this.fileList={name:t.response.data[0].split("/")[t.response.data[0].split("/").length-1],url:t.response.data[0]}},beforeAvatarUpload:function(e){var t=e.size/1024/1024<50;return t||this.$message.error("允许的最大图片大小为 50MB！"),t}}},n=(a("5PAK"),a("KHd+")),i=Object(n.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-upload",{attrs:{"on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,limit:e.limit,"on-exceed":e.handleExceed,"file-list":e.fileList,action:e.action_url,headers:e.headers,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("最大不超过10MB")])],1)],1)},[],!1,null,"e10f14be",null);i.options.__file="singleFile.vue";t.a=i.exports},MaMb:function(e,t,a){"use strict";var r=a("rjyz");a.n(r).a},MbGq:function(e,t,a){"use strict";var r=a("FyfS"),l=a.n(r),n=a("eivq"),i={name:"SelectDepart",components:{},model:{prop:"value",event:"change"},props:{placeholder:{type:String,default:"请点击选择部门"},title:{type:String,default:"选择部门"},value:{type:[String,Number],required:!1,default:void 0},modalWidth:{type:String,default:"40%",required:!1},multi:{type:Boolean,default:!1,required:!1},store:{type:[String,Number],default:"id",required:!1},text:{type:String,default:"depart_name",required:!1}},data:function(){return{treeData:[],defaultProps:{children:"children",label:"depart_name"},checkedKeys:[],visible:!1,storeVals:"",textVals:""}},computed:{},watch:{value:function(e){this.initComp()}},created:function(){this.querytreeData()},mounted:function(){this.initComp()},methods:{querytreeData:function(){var e=this;Object(n.b)("/departTree/").then(function(t){0===t.errorCode&&(e.treeData=t.data)})},initComp:function(e){this.queryById(this.value)},queryById:function(e){var t=this;e?Object(n.b)("/depart/"+e+"/").then(function(e){t.textVals=e.data.depart_name}).catch(function(e){t.textVals="",console.log(e)}):this.textVals=""},handleNodeClick:function(e){},changeCheck:function(e){this.multi||this.$refs.tree.setCheckedKeys([e.id])},getCheckedNodes:function(){console.log(this.$refs.tree.getCheckedNodes())},getCheckedKeys:function(){this.checkedKeys=this.$refs.tree.getCheckedKeys()},setCheckedKeys:function(){this.$refs.tree.setCheckedKeys([3])},getCheckedRows:function(e){var t=function e(t,a){var r=!0,n=!1,i=void 0;try{for(var s,o=l()(t);!(r=(s=o.next()).done);r=!0){var u=s.value;if(u.id===a)return u;if(u.children instanceof Array){var c=e(u.children,a);if(null!=c)return c}}}catch(e){n=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw i}}return null},a=[],r=!0,n=!1,i=void 0;try{for(var s,o=l()(e);!(r=(s=o.next()).done);r=!0){var u=s.value,c=t(this.treeData,u);null!=c&&a.push(c)}}catch(e){n=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw i}}return a},getCheckName:function(e){var t=[];return e.forEach(function(e){t.push(e.depart_name)}),t.join(",")},openModal:function(){var e=this;this.visible=!0,this.$nextTick(function(){e.value&&e.$refs.tree.setCheckedKeys([e.value])})},handleSubmit:function(){if(this.getCheckedKeys(),this.checkedKeys&&0!==this.checkedKeys.length){var e=this.getCheckedRows(this.checkedKeys);this.textVals=this.getCheckName(e),this.$emit("change",this.checkedKeys.join(this.checkedKeys))}else this.$emit("change","");this.handleClear()},handleCancel:function(){this.handleClear()},handleClear:function(){this.visible=!1,this.checkedKeys=[]},handleEmpty:function(){this.$emit("change","")}}},s=(a("cHlN"),a("KHd+")),o=Object(s.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-input",{attrs:{placeholder:e.placeholder,size:"small",readonly:""},on:{focus:e.openModal},model:{value:e.textVals,callback:function(t){e.textVals=t},expression:"textVals"}},[e.value?a("i",{staticClass:"el-icon-circle-close",attrs:{slot:"suffix"},on:{click:e.handleEmpty},slot:"suffix"}):e._e()]),e._v(" "),a("el-dialog",{attrs:{visible:e.visible,title:e.title,width:"300px","append-to-body":"",center:""},on:{"update:visible":function(t){e.visible=t}}},[a("el-tree",{ref:"tree",attrs:{data:e.treeData,props:e.defaultProps,"check-strictly":!0,"expand-on-click-node":!1,"show-checkbox":"","node-key":"id","default-expand-all":""},on:{check:e.changeCheck,"node-click":e.handleNodeClick}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.handleSubmit}},[e._v("确 定")])],1)],1)],1)},[],!1,null,"781c08e4",null);o.options.__file="SelectDepart.vue";t.a=o.exports},Mz3J:function(e,t,a){"use strict";var r={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},page_size:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.page_size},set:function(e){this.$emit("update:page_size",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,page_size:e})},handleCurrentChange:function(e){this.$emit("pagination",{page:e,page_size:this.pageSize})}}},l=(a("e+pk"),a("KHd+")),n=Object(l.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},[],!1,null,"88e53666",null);n.options.__file="index.vue";t.a=n.exports},OBWt:function(e,t,a){var r={"./ar":"pEiz","./ar.js":"pEiz","./az":"0zlr","./az.js":"0zlr","./bn":"nMs+","./bn.js":"nMs+","./cs":"307M","./cs.js":"307M","./de":"EXdN","./de.js":"EXdN","./el":"2Yl3","./el.js":"2Yl3","./es":"g40F","./es.js":"g40F","./fa":"B5Zb","./fa.js":"B5Zb","./fr":"tpjN","./fr.js":"tpjN","./hi":"Puzg","./hi.js":"Puzg","./hu":"XAci","./hu.js":"XAci","./id":"I/UY","./id.js":"I/UY","./it":"Hp5p","./it.js":"Hp5p","./ja":"iyGk","./ja.js":"iyGk","./jv":"qGiO","./jv.js":"qGiO","./ko":"15Mf","./ko.js":"15Mf","./my":"v0FM","./my.js":"v0FM","./nl":"JWNc","./nl.js":"JWNc","./pa-in":"Vlmt","./pa-in.js":"Vlmt","./pl":"SbCh","./pl.js":"SbCh","./pt":"JRQ5","./pt.js":"JRQ5","./ro":"g4xo","./ro.js":"g4xo","./ru":"K8D1","./ru.js":"K8D1","./sr":"8Dvn","./sr.js":"8Dvn","./th":"lcVx","./th.js":"lcVx","./tr":"Xivz","./tr.js":"Xivz","./uk":"hXkJ","./uk.js":"hXkJ","./uz":"k/Sy","./uz.js":"k/Sy","./vi":"mM2C","./vi.js":"mM2C","./zh-cn":"Fo3v","./zh-cn.js":"Fo3v","./zh-tw":"/6Ce","./zh-tw.js":"/6Ce"};function l(e){var t=n(e);return a(t)}function n(e){var t=r[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}l.keys=function(){return Object.keys(r)},l.resolve=n,e.exports=l,l.id="OBWt"},OY2D:function(e,t,a){},OiJS:function(e,t,a){},QlfN:function(e,t,a){"use strict";var r=a("OY2D");a.n(r).a},XPri:function(e,t,a){"use strict";var r=a("3NXv");a.n(r).a},cHlN:function(e,t,a){"use strict";var r=a("hSgb");a.n(r).a},"e+pk":function(e,t,a){"use strict";var r=a("OiJS");a.n(r).a},eivq:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"d",function(){return n}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return s});var r=a("t3Un");function l(e,t){return Object(r.a)({url:e,method:"get",params:t})}function n(e,t){return Object(r.a)({url:e,method:"post",data:t})}function i(e,t){return Object(r.a)({url:e,method:"patch",data:t})}function s(e,t){return Object(r.a)({url:e,method:"delete",data:t})}},"gDS+":function(e,t,a){e.exports={default:a("oh+g"),__esModule:!0}},hSgb:function(e,t,a){},"oh+g":function(e,t,a){var r=a("WEpk"),l=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return l.stringify.apply(l,arguments)}},qq43:function(e,t,a){"use strict";var r=a("Ampy");a.n(r).a},rjyz:function(e,t,a){},uXlJ:function(e,t,a){"use strict";a.r(t);var r=a("gDS+"),l=a.n(r),n=(a("Q2AE"),a("Kw5r"),a("eivq")),i=(a("y3xr"),a("Gsba")),s=a("Mz3J"),o=a("y0oO"),u=a("JOen"),c=a("MbGq"),p=a("7Qib"),d={name:"userManage",components:{Mysearch:i.a,Pagination:s.a,UploadImage:o.a,UploadFile:u.a,SelectDepart:c.a},filters:{statusFilter:function(e){return e?"正常":"冻结"},customRightFilter:function(e){return e?"开启":"关闭"}},data:function(){return{centerDialog:!1,centerDialog_delete:!1,centerDialog_patch:!1,page_datas:[],userList:[],groupTypeList:[{label:"管理员",id:2},{label:"一级用户",id:3},{label:"二级代理",id:4},{label:"激活码",id:5}],ruleForm:{username:"",password:"",phone:"",email:"",content:"",auth:"",status:!1,group:"",parent_id:null,real_name:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],real_name:[{required:!0,message:"请输入姓名",trigger:"blur"}],phone:[{required:!1,message:"请输入手机号",trigger:"blur"}],group:[{required:!0,message:"请选择角色",trigger:"change"}],auth:[{required:!1,message:"请选择权限",trigger:"change"}],parent_id:[{required:!0,message:"请选择上级",trigger:"change"}]},ruleForm_patch:{},rules_patch:{},delete_data:{},my_pagination:{page:1,page_size:10,count:0,search:"",search_type:""},auth_datas:[]}},computed:{canEditUser:function(){return"SuperAdmin"===this.$store.getters.user_obj.group.group_type||this.$store.getters.auth_json.user.auth_update&&this.$store.getters.auth_json.user.auth_list}},created:function(){this.get_need_data(this.my_pagination),this.get_auth_data(),this.getUserList()},methods:{get_need_data:function(e){var t=this;Object(n.b)("/user/",e).then(function(e){var a=e.data;t.page_datas=a,t.my_pagination.count=e.count})},get_auth_data:function(e){var t=this;this.canEditUser&&Object(n.b)("/auth/",e).then(function(e){var a=e.data;t.auth_datas=a})},getUserList:function(){var e=this;Object(n.b)("/user/").then(function(t){var a=t.data,r=["NormalUser"];e.userList=a.filter(function(e){return r.includes(e.group.group_type)})})},post_need_data:function(e){var t=this;e.parent_id||(e.parent_id=null),Object(n.d)("/user/",Object(p.a)(e)).then(function(e){e.data;t.centerDialog=!1,t.$refs.ruleForm.resetFields(),t.$message({showClose:!0,message:"新增成功！",type:"success"}),t.get_need_data(t.my_pagination)})},patch_need_data:function(e){var t=this;e.parent_id||(e.parent_id=null),Object(n.c)("/user/"+e.id+"/",Object(p.a)(e)).then(function(e){e.data;t.centerDialog_patch=!1,t.$refs.ruleForm_patch.resetFields(),t.$message({showClose:!0,message:"修改成功！",type:"success"}),t.get_need_data(t.my_pagination)})},delete_need_data:function(e){var t=this;Object(n.a)("/user/"+e.id+"/",e).then(function(e){e.data;t.centerDialog_delete=!1,t.$message({showClose:!0,message:"删除成功！",type:"success"}),t.get_need_data(t.my_pagination)})},submitForm:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return console.log("error submit!!"),!1;"ruleForm"==e?t.post_need_data(t.ruleForm):t.patch_need_data(t.ruleForm_patch)})},resetForm:function(e){this.centerDialog=!1,this.centerDialog_patch=!1,this.$refs[e].resetFields()},delete_data_fuc:function(e){this.delete_data=e,this.centerDialog_delete=!0},new_data:function(){this.centerDialog=!0},true_delete:function(){this.delete_need_data(this.delete_data)},edit_data:function(e){this.ruleForm_patch=JSON.parse(l()(e)),this.ruleForm_patch.group=e.group.id,e.auth&&(this.ruleForm_patch.auth=e.auth.id),this.centerDialog_patch=!0},to_search:function(){this.my_pagination.page=1,this.get_need_data(this.my_pagination)},pag_change:function(){this.get_need_data(this.my_pagination)},search_change:function(){this.get_need_data(this.my_pagination)},my_change:function(e){this.my_pagination.page=1,this.my_pagination.search_type=e,this.get_need_data(this.my_pagination)}}},m=(a("XPri"),a("MaMb"),a("KHd+")),h=Object(m.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-col",{attrs:{span:10}},["SuperAdmin"===e.$store.getters.user_obj.group.group_type||e.$store.getters.auth_json.user.auth_create?a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.new_data}},[e._v("新增")]):e._e(),e._v(" "),a("p")],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("p")]),e._v(" "),a("el-col",{attrs:{span:6}},[a("mysearch",{on:{searchData:e.to_search},model:{value:e.my_pagination.search,callback:function(t){e.$set(e.my_pagination,"search",t)},expression:"my_pagination.search"}})],1)],1),e._v(" "),a("br"),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page_datas,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"real_name",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"depart_name",label:"所属部门"}}),e._v(" "),a("el-table-column",{attrs:{prop:"manage_depart_name",label:"管理部门"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:t.row.status?"success":"danger","disable-transitions":""}},[e._v(e._s(e._f("statusFilter")(t.row.status)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"custom_right",label:"自定义充值"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:t.row.custom_right?"success":"danger","disable-transitions":""}},[e._v(e._s(e._f("customRightFilter")(t.row.custom_right)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"group.group_type_cn",label:"角色"}}),e._v(" "),a("el-table-column",{attrs:{prop:"auth.auth_type",label:"权限"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bf_logo_time",label:"上次登录时间",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.canEditUser?a("el-button",{attrs:{size:"small"},on:{click:function(a){e.edit_data(t.row)}}},[e._v("编辑")]):e._e(),e._v(" "),"SuperAdmin"===e.$store.getters.user_obj.group.group_type||e.$store.getters.auth_json.user.auth_destroy?a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.delete_data_fuc(t.row)}}},[e._v("删除")]):e._e()]}}])})],1),e._v(" "),a("br"),e._v(" "),a("pagination",{attrs:{total:e.my_pagination.count,page:e.my_pagination.page,page_size:e.my_pagination.page_size},on:{"update:page":function(t){e.$set(e.my_pagination,"page",t)},"update:page_size":function(t){e.$set(e.my_pagination,"page_size",t)},pagination:e.pag_change}}),e._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:e.centerDialog,title:"新增",width:"50%",center:""},on:{"update:visible":function(t){e.centerDialog=t}}},[a("div",[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{attrs:{size:"small"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{size:"small",type:"password"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色",prop:"group"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"请选择角色",filterable:"",clearable:""},model:{value:e.ruleForm.group,callback:function(t){e.$set(e.ruleForm,"group",t)},expression:"ruleForm.group"}},e._l(e.groupTypeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.id}})}))],1),e._v(" "),4==e.ruleForm.group?a("el-form-item",{attrs:{label:"上级",prop:"parent_id"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"请选择上级",filterable:"",clearable:""},model:{value:e.ruleForm.parent_id,callback:function(t){e.$set(e.ruleForm,"parent_id",t)},expression:"ruleForm.parent_id"}},e._l(e.userList,function(e){return a("el-option",{key:e.id,attrs:{label:e.username,value:e.id}})}))],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"权限",prop:"auth"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"请选择权限",filterable:"",clearable:""},model:{value:e.ruleForm.auth,callback:function(t){e.$set(e.ruleForm,"auth",t)},expression:"ruleForm.auth"}},e._l(e.auth_datas,function(e){return a("el-option",{key:e.id,attrs:{label:e.auth_type,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"所属部门",prop:"depart"}},[a("SelectDepart",{model:{value:e.ruleForm.depart,callback:function(t){e.$set(e.ruleForm,"depart",t)},expression:"ruleForm.depart"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"管理部门",prop:"manage_depart"}},[a("SelectDepart",{model:{value:e.ruleForm.manage_depart,callback:function(t){e.$set(e.ruleForm,"manage_depart",t)},expression:"ruleForm.manage_depart"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[a("el-input",{attrs:{size:"small"},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{size:"small"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名",prop:"real_name"}},[a("el-input",{attrs:{size:"small"},model:{value:e.ruleForm.real_name,callback:function(t){e.$set(e.ruleForm,"real_name",t)},expression:"ruleForm.real_name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",required:""}},[a("el-switch",{attrs:{size:"small","active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"自定义充值",required:""}},[a("el-switch",{attrs:{size:"small","active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.custom_right,callback:function(t){e.$set(e.ruleForm,"custom_right",t)},expression:"ruleForm.custom_right"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{size:"small",type:"textarea"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:e.centerDialog_delete,title:"确认删除",width:"30%",center:""},on:{"update:visible":function(t){e.centerDialog_delete=t}}},[a("span",[e._v("是否确认删除，删除后不可恢复？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.centerDialog_delete=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.true_delete}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{visible:e.centerDialog_patch,title:"编辑",width:"50%",center:""},on:{"update:visible":function(t){e.centerDialog_patch=t}}},[a("div",[a("el-form",{ref:"ruleForm_patch",attrs:{model:e.ruleForm_patch,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{attrs:{size:"small"},model:{value:e.ruleForm_patch.username,callback:function(t){e.$set(e.ruleForm_patch,"username",t)},expression:"ruleForm_patch.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{size:"small",type:"password"},model:{value:e.ruleForm_patch.password,callback:function(t){e.$set(e.ruleForm_patch,"password",t)},expression:"ruleForm_patch.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色",prop:"group"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"请选择角色",filterable:"",clearable:""},model:{value:e.ruleForm_patch.group,callback:function(t){e.$set(e.ruleForm_patch,"group",t)},expression:"ruleForm_patch.group"}},e._l(e.groupTypeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.id}})}))],1),e._v(" "),4==e.ruleForm_patch.group?a("el-form-item",{attrs:{label:"上级",prop:"parent_id"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"请选择上级",filterable:"",clearable:""},model:{value:e.ruleForm_patch.parent_id,callback:function(t){e.$set(e.ruleForm_patch,"parent_id",t)},expression:"ruleForm_patch.parent_id"}},e._l(e.userList,function(e){return a("el-option",{key:e.id,attrs:{label:e.username,value:e.id}})}))],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"权限",prop:"auth"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"请选择权限",filterable:"",clearable:""},model:{value:e.ruleForm_patch.auth,callback:function(t){e.$set(e.ruleForm_patch,"auth",t)},expression:"ruleForm_patch.auth"}},e._l(e.auth_datas,function(e){return a("el-option",{key:e.id,attrs:{label:e.auth_type,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"所属部门",prop:"depart"}},[a("SelectDepart",{model:{value:e.ruleForm_patch.depart,callback:function(t){e.$set(e.ruleForm_patch,"depart",t)},expression:"ruleForm_patch.depart"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"管理部门",prop:"manage_depart"}},[a("SelectDepart",{model:{value:e.ruleForm_patch.manage_depart,callback:function(t){e.$set(e.ruleForm_patch,"manage_depart",t)},expression:"ruleForm_patch.manage_depart"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[a("el-input",{attrs:{size:"small"},model:{value:e.ruleForm_patch.phone,callback:function(t){e.$set(e.ruleForm_patch,"phone",t)},expression:"ruleForm_patch.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{size:"small"},model:{value:e.ruleForm_patch.email,callback:function(t){e.$set(e.ruleForm_patch,"email",t)},expression:"ruleForm_patch.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名",prop:"real_name"}},[a("el-input",{attrs:{size:"small"},model:{value:e.ruleForm_patch.real_name,callback:function(t){e.$set(e.ruleForm_patch,"real_name",t)},expression:"ruleForm_patch.real_name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",required:""}},[a("el-switch",{attrs:{size:"small","active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm_patch.status,callback:function(t){e.$set(e.ruleForm_patch,"status",t)},expression:"ruleForm_patch.status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"自定义充值",required:""}},[a("el-switch",{attrs:{size:"small","active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm_patch.custom_right,callback:function(t){e.$set(e.ruleForm_patch,"custom_right",t)},expression:"ruleForm_patch.custom_right"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{size:"small",type:"textarea"},model:{value:e.ruleForm_patch.content,callback:function(t){e.$set(e.ruleForm_patch,"content",t)},expression:"ruleForm_patch.content"}})],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.resetForm("ruleForm_patch")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.submitForm("ruleForm_patch")}}},[e._v("确 定")])],1)])],1)},[],!1,null,"1253b17a",null);h.options.__file="user.vue";t.default=h.exports},wldV:function(e,t,a){},y0oO:function(e,t,a){"use strict";var r=a("Q2AE"),l={name:"SingleImageUpload",props:{value:{required:!0,type:String}},data:function(){return{action_url:"http://42.192.46.55:18671/huojian/uploadfile/",headers:{Authorization:"bearer "+r.a.getters.token}}},computed:{imageUrl:function(){return this.value}},methods:{handleAvatarSuccess:function(e,t){console.log(t.response.data[0]),this.$emit("input",t.response.data[0])},beforeAvatarUpload:function(e){var t=!1;-1!==["image/jpeg","image/jpg","image/png"].indexOf(e.type)&&(t=!0),console.log(t);var a=e.size/1024/1024<10;return t||this.$message.error("允许的图片类型为 JPG / JPEG / PNG ！"),a||this.$message.error("允许的最大图片大小为 10MB！"),t&&a}}},n=(a("QlfN"),a("KHd+")),i=Object(n.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:this.action_url,headers:this.headers,"show-file-list":!1,"on-success":this.handleAvatarSuccess,"before-upload":this.beforeAvatarUpload}},[this.imageUrl.length>1?t("img",{staticClass:"avatar",attrs:{src:this.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)},[],!1,null,"6bdac550",null);i.options.__file="singleImage.vue";t.a=i.exports}}]);