(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-563d"],{"9Iaq":function(e,t,a){},A2cC:function(e,t,a){"use strict";var r=a("9Iaq");a.n(r).a},Mz3J:function(e,t,a){"use strict";var r={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},page_size:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.page_size},set:function(e){this.$emit("update:page_size",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,page_size:e})},handleCurrentChange:function(e){this.$emit("pagination",{page:e,page_size:this.pageSize})}}},l=(a("e+pk"),a("KHd+")),o=Object(l.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},[],!1,null,"88e53666",null);o.options.__file="index.vue";t.a=o.exports},NOsq:function(e,t,a){"use strict";a.r(t);var r=a("Q2AE"),l=(a("Kw5r"),a("eivq")),o=a("Pyri"),i=a("y3xr"),n=a.n(i),s=a("Mz3J"),c={name:"Mysearch",props:{hidden:{type:Boolean,default:!1},placeholder:{type:String,default:"请输入关键字(模糊搜索)"},buttonName:{type:String,default:"搜索"}},data:function(){return{new_search:""}},methods:{to_search:function(){this.$emit("searchData",this.new_search)}}},u=(a("vpq2"),a("KHd+")),p=Object(u.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{hidden:e.hidden}},[a("el-input",{attrs:{placeholder:e.placeholder,size:"small",clearable:""},on:{clear:e.to_search},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.to_search(t):null}},model:{value:e.new_search,callback:function(t){e.new_search=t},expression:"new_search"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.to_search},slot:"append"},[e._v(e._s(e.buttonName))])],1)],1)},[],!1,null,"36fdd2fc",null);p.options.__file="index.vue";var d=p.exports,m=(a("vDqi"),{name:"DemoManage",components:{Pagination:s.a,Mysearch:d},data:function(){return{centerDialogVisible:!1,centerDialogVisible_two:!1,centerDialogVisible_patch:!1,page_datas:[],ruleForm:{title:"",img_url:"",region:"",type:[],is_status:!1,sort:"",date:"",time:"",desc:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],img_url:[{required:!0,message:"请上传图片",trigger:"change"}],sort:[{required:!0,type:"number",message:"请输入排序序号",trigger:"blur"},{type:"number",message:"必须为数字值"}],date:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],time:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},ruleForm_patch:{title:"",img_url:"",banner_type:0,sort:"",h5_url:"null"},rules_patch:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],sort:[{required:!0,type:"number",message:"请输入排序序号",trigger:"blur"},{type:"number",message:"必须为数字值"}],h5_url:[{required:!0,message:"请输入H5链接",trigger:"blur"}]},headers:{Authorization:"bearer "+r.a.getters.token},action_url:"http://42.192.46.55:18671/huojian/uploadfile/",tt_html:"",delete_data:{},page_tatol:100,my_pagination:{page:1,page_size:10,search:"",search_type:""}}},created:function(){},methods:{get_need_data:function(e){var t=this;Object(l.b)("/company/",e).then(function(e){var a=e.data;console.log(a),t.page_datas=a,t.page_tatol=e.count}).catch(function(e){alert(e)})},post_need_data:function(e){var t=this;Object(l.d)("/company/",e).then(function(e){var a=e.data;console.log(a),t.centerDialogVisible=!1,t.$refs.ruleForm.resetFields(),t.ruleForm.img_url="",t.$message({showClose:!0,message:"success",type:"success"}),t.get_need_data(t.my_pagination)}).catch(function(e){alert(e)})},patch_need_data:function(e){var t=this;Object(l.c)("/company/"+e.id+"/",e).then(function(e){var a=e.data;console.log(a),t.centerDialogVisible_patch=!1,t.$message({showClose:!0,message:"success",type:"success"}),t.get_need_data(t.my_pagination)}).catch(function(e){alert(e)})},delete_need_data:function(e){var t=this;Object(l.a)("/company/"+e.id+"/",e).then(function(e){var a=e.data;console.log(a),t.centerDialogVisible_two=!1,t.$message({showClose:!0,message:"success",type:"success"}),t.get_need_data(t.my_pagination)}).catch(function(e){alert(e)})},submitForm:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return console.log("error submit!!"),!1;"ruleForm"==e?(n.a.format(t.ruleForm.date,"YYYY-MM-DD"),console.log(n.a.format(t.ruleForm.time,"HH:mm:ss")),console.log(t.ruleForm)):console.log(t.ruleForm_patch)})},resetForm:function(e){console.log(e),this.centerDialogVisible=!1,this.$refs[e].resetFields(),this.ruleForm.img_url="",this.centerDialogVisible_patch=!1,this.ruleForm_patch.img_url=""},handleAvatarSuccess:function(e,t){this.ruleForm.img_url=t.response.data[0],console.log(t.response.data[0])},handleAvatarSuccess_two:function(e,t){this.ruleForm_patch.img_url=t.response.data[0],console.log(t.response.data[0])},beforeAvatarUpload:function(e){var t=!1;-1!=["image/jpeg","image/jpg","image/png"].indexOf(e.type)&&(t=!0),console.log(t);var a=e.size/1024/1024<2;return t||this.$message.error("允许的图片类型为 JPG / JPEG / PNG ！"),a||this.$message.error("允许的最大图片大小为 2MB！"),t&&a},delete_data_fuc:function(e){console.log(e),this.delete_data=e,this.centerDialogVisible_two=!0},new_data:function(){this.centerDialogVisible=!0},true_delete:function(){this.delete_need_data(this.delete_data)},edit_data:function(e){console.log(e),this.ruleForm_patch.title=e.title,this.ruleForm_patch.h5_url=e.h5_url,this.ruleForm_patch.sort=e.sort,this.ruleForm_patch.img_url=e.img_url,this.ruleForm_patch.id=e.id,this.centerDialogVisible_patch=!0},pag_change:function(){console.log(this.my_pagination),this.get_need_data(this.my_pagination)},to_search:function(e){this.my_pagination.page=1,this.my_pagination.search=e,this.get_need_data(this.my_pagination)},change_one:function(e){this.get_need_data(this.my_pagination)},look_tinymce:function(){console.log("查看富文本：",this.tt_html)},export_xls:function(){Object(o.a)({},"http://42.192.46.55:18671/huojian/exportUser/","test.xlsx")}}}),_=(a("A2cC"),Object(u.a)(m,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.new_data}},[e._v("新增")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(t){e.centerDialogVisible_patch=!0}}},[e._v("编辑")])],1),e._v(" "),a("el-col",{attrs:{span:10}},[a("p")]),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"请选择"},on:{change:e.change_one},model:{value:e.my_pagination.search_type,callback:function(t){e.$set(e.my_pagination,"search_type",t)},expression:"my_pagination.search_type"}},[a("el-option",{attrs:{label:"全部分类",value:""}}),e._v(" "),a("el-option",{attrs:{label:"测试分类",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"测试分类",value:"1"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("mysearch",{on:{searchData:e.to_search}})],1)],1),e._v(" "),a("br"),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page_datas,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"slot",label:"图片",width:"200"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.img_url,height:"80",width:"180"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"h5_url",label:"链接"}}),e._v(" "),a("el-table-column",{attrs:{prop:"updated",label:"更新时间",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"排序",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":0,"inactive-value":1,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.row.sort,callback:function(a){e.$set(t.row,"sort",a)},expression:"scope.row.sort"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-row",[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.edit_data(t.row)}}},[e._v("编辑")])],1),e._v(" "),a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.delete_data_fuc(t.row)}}},[e._v("删除")])],1)]}}])})],1),e._v(" "),a("br"),e._v(" "),a("pagination",{attrs:{total:e.page_tatol,page:e.my_pagination.page,page_size:e.my_pagination.page_size},on:{"update:page":function(t){e.$set(e.my_pagination,"page",t)},"update:page_size":function(t){e.$set(e.my_pagination,"page_size",t)},pagination:e.pag_change}}),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:e.look_tinymce}},[e._v("查看")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:e.export_xls}},[e._v("导出")]),e._v(" "),a("el-dialog",{attrs:{visible:e.centerDialogVisible,title:"新增",width:"50%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("div",[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input",{model:{value:e.ruleForm.sort,callback:function(t){e.$set(e.ruleForm,"sort",e._n(t))},expression:"ruleForm.sort"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"区域",prop:"region"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(t){e.$set(e.ruleForm,"region",t)},expression:"ruleForm.region"}},[a("el-option",{attrs:{label:"区域一",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"2"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",required:""}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.is_status,callback:function(t){e.$set(e.ruleForm,"is_status",t)},expression:"ruleForm.is_status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"日期",prop:"date"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date,callback:function(t){e.$set(e.ruleForm,"date",t)},expression:"ruleForm.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"时间",prop:"time"}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.ruleForm.time,callback:function(t){e.$set(e.ruleForm,"time",t)},expression:"ruleForm.time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-checkbox-group",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[a("el-checkbox",{attrs:{label:"0",name:"type"}},[e._v("类型01")]),e._v(" "),a("el-checkbox",{attrs:{label:"1",name:"type"}},[e._v("类型02")]),e._v(" "),a("el-checkbox",{attrs:{label:"2",name:"type"}},[e._v("类型03")]),e._v(" "),a("el-checkbox",{attrs:{label:"3",name:"type"}},[e._v("类型04")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"图片",prop:"img_url"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.action_url,headers:e.headers,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.ruleForm.img_url?a("img",{staticClass:"avatar",attrs:{src:e.ruleForm.img_url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"内容",prop:"desc"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{visible:e.centerDialogVisible_two,title:"确认删除",width:"30%",center:""},on:{"update:visible":function(t){e.centerDialogVisible_two=t}}},[a("div",{staticStyle:{"text-align":"center"}},[e._v("是否确认删除，删除后不可恢复？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.centerDialogVisible_two=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.true_delete}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{visible:e.centerDialogVisible_patch,title:"编辑",width:"50%",center:""},on:{"update:visible":function(t){e.centerDialogVisible_patch=t}}},[a("div",[a("el-form",{ref:"ruleForm_patch",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm_patch,rules:e.rules_patch,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:e.ruleForm_patch.title,callback:function(t){e.$set(e.ruleForm_patch,"title",t)},expression:"ruleForm_patch.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"H5链接",prop:"h5_url"}},[a("el-input",{model:{value:e.ruleForm_patch.h5_url,callback:function(t){e.$set(e.ruleForm_patch,"h5_url",t)},expression:"ruleForm_patch.h5_url"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input",{model:{value:e.ruleForm_patch.sort,callback:function(t){e.$set(e.ruleForm_patch,"sort",e._n(t))},expression:"ruleForm_patch.sort"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"图片",required:""}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.action_url,headers:e.headers,"show-file-list":!1,"on-success":e.handleAvatarSuccess_two,"before-upload":e.beforeAvatarUpload}},[e.ruleForm_patch.img_url?a("img",{staticClass:"avatar",attrs:{src:e.ruleForm_patch.img_url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.resetForm("ruleForm_patch")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm_patch")}}},[e._v("确 定")])],1)])],1)},[],!1,null,"7d8276f0",null));_.options.__file="demoadmin01.vue";t.default=_.exports},OBWt:function(e,t,a){var r={"./ar":"pEiz","./ar.js":"pEiz","./az":"0zlr","./az.js":"0zlr","./bn":"nMs+","./bn.js":"nMs+","./cs":"307M","./cs.js":"307M","./de":"EXdN","./de.js":"EXdN","./el":"2Yl3","./el.js":"2Yl3","./es":"g40F","./es.js":"g40F","./fa":"B5Zb","./fa.js":"B5Zb","./fr":"tpjN","./fr.js":"tpjN","./hi":"Puzg","./hi.js":"Puzg","./hu":"XAci","./hu.js":"XAci","./id":"I/UY","./id.js":"I/UY","./it":"Hp5p","./it.js":"Hp5p","./ja":"iyGk","./ja.js":"iyGk","./jv":"qGiO","./jv.js":"qGiO","./ko":"15Mf","./ko.js":"15Mf","./my":"v0FM","./my.js":"v0FM","./nl":"JWNc","./nl.js":"JWNc","./pa-in":"Vlmt","./pa-in.js":"Vlmt","./pl":"SbCh","./pl.js":"SbCh","./pt":"JRQ5","./pt.js":"JRQ5","./ro":"g4xo","./ro.js":"g4xo","./ru":"K8D1","./ru.js":"K8D1","./sr":"8Dvn","./sr.js":"8Dvn","./th":"lcVx","./th.js":"lcVx","./tr":"Xivz","./tr.js":"Xivz","./uk":"hXkJ","./uk.js":"hXkJ","./uz":"k/Sy","./uz.js":"k/Sy","./vi":"mM2C","./vi.js":"mM2C","./zh-cn":"Fo3v","./zh-cn.js":"Fo3v","./zh-tw":"/6Ce","./zh-tw.js":"/6Ce"};function l(e){var t=o(e);return a(t)}function o(e){var t=r[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}l.keys=function(){return Object.keys(r)},l.resolve=o,e.exports=l,l.id="OBWt"},OiJS:function(e,t,a){},Pyri:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a("vDqi"),l=a.n(r),o=a("Q2AE");function i(e,t,a){var r={Authorization:"bearer "+o.a.getters.token};l()({url:t,method:"get",headers:r,params:e,responseType:"blob"}).then(function(e){console.log(e);var t=window.URL.createObjectURL(new Blob([e.data])),r=document.createElement("a");r.href=t,r.setAttribute("download",a),document.body.appendChild(r),r.click()}).catch(function(e){alert(e)})}},"e+pk":function(e,t,a){"use strict";var r=a("OiJS");a.n(r).a},eivq:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"d",function(){return o}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return n});var r=a("t3Un");function l(e,t){return Object(r.a)({url:e,method:"get",params:t})}function o(e,t){return Object(r.a)({url:e,method:"post",data:t})}function i(e,t){return Object(r.a)({url:e,method:"patch",data:t})}function n(e,t){return Object(r.a)({url:e,method:"delete",data:t})}},nydF:function(e,t,a){},vpq2:function(e,t,a){"use strict";var r=a("nydF");a.n(r).a}}]);