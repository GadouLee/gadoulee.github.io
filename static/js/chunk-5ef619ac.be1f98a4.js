(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ef619ac","chunk-2510c024"],{"0993":function(e,t,a){e.exports=a.p+"static/img/checked.f8521b5f.png"},3081:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"payRegister"},[e.showSubmitBtn?e._e():n("div",{staticStyle:{position:"absolute",top:"50px",right:"300px","z-index":"10"}},["已审批"==e.state_name?n("img",{staticStyle:{display:"block",width:"150px"},attrs:{src:a("0993"),alt:""}}):e._e(),"审批中"==e.state_name?n("img",{staticStyle:{display:"block",width:"150px"},attrs:{src:a("9a04"),alt:""}}):e._e(),"已驳回"==e.state_name?n("img",{staticStyle:{display:"block",width:"150px"},attrs:{src:a("ac6f"),alt:""}}):e._e()]),e.permit_type_name?n("div",{staticStyle:{"margin-top":"50px"}},[n("span",{staticStyle:{"padding-left":"20px",color:"#666666"}},[e._v("审批事项："+e._s(e.permit_type_name))]),e.showIsTop?n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{size:"small",type:"primary"},on:{click:e.handleTop}},[e._v(e._s(e.istop?"取消置顶":"置顶主页"))]):e._e()],1):e._e(),n("div",{staticStyle:{"margin-top":"80px"}}),n("ProgressBar",{attrs:{active:e.active,arr:e.arr}}),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"650px",margin:"0 auto"}},["1"==e.steps?n("el-form",{ref:"ruleForm",staticClass:"newApprovalForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px",size:"medium","label-position":"left"}},[n("el-form-item",{attrs:{label:"项目名称",prop:"project_id"}},[n("el-select",{attrs:{disabled:e.formDisabled,placeholder:"请选择",filterable:"",clearable:""},on:{change:e.handleProjectChange},model:{value:e.ruleForm.project_id,callback:function(t){e.$set(e.ruleForm,"project_id",t)},expression:"ruleForm.project_id"}},e._l(e.projectList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.project_name,value:e.id}})})),1)],1),n("el-form-item",{attrs:{label:"项目负责人",prop:"contacts_name"}},[n("el-select",{attrs:{disabled:!0,placeholder:"请选择项目负责人",filterable:"",clearable:""},model:{value:e.ruleForm.contacts_name,callback:function(t){e.$set(e.ruleForm,"contacts_name",t)},expression:"ruleForm.contacts_name"}},e._l(e.projectList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.contacts_name,value:e.id}})})),1)],1),n("el-form-item",{attrs:{label:"动作类型",prop:"type"}},[n("el-select",{attrs:{disabled:e.formDisabled,placeholder:"请选择"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[n("el-option",{attrs:{label:"商务费收入",value:1}}),n("el-option",{attrs:{label:"商务费支出",value:2}})],1)],1),n("el-form-item",{attrs:{label:"付款方式",prop:"pay_mode"}},[n("div",{staticClass:"radioGroup"},[n("el-radio-group",{attrs:{disabled:e.detailToCreate||e.formDisabled},model:{value:e.ruleForm.pay_mode,callback:function(t){e.$set(e.ruleForm,"pay_mode",t)},expression:"ruleForm.pay_mode"}},[n("el-radio-button",{attrs:{label:"1"}},[e._v("网银转账")]),n("el-radio-button",{attrs:{label:"2"}},[e._v("现金")])],1)],1)]),n("el-form-item",{attrs:{label:"付款账户类型",prop:"payment_type"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{disabled:e.detailToCreate||e.formDisabled,placeholder:"请选择付款账户类型"},model:{value:e.ruleForm.payment_type,callback:function(t){e.$set(e.ruleForm,"payment_type",t)},expression:"ruleForm.payment_type"}},[n("el-option",{attrs:{label:"公司",value:1}}),n("el-option",{attrs:{label:"个人",value:2}})],1)],1),1==e.ruleForm.payment_type?[n("el-form-item",{attrs:{label:"付款主体",prop:"payment_company_id"}},[n("el-select",{attrs:{disabled:e.formDisabled,placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.payment_company_id,callback:function(t){e.$set(e.ruleForm,"payment_company_id",t)},expression:"ruleForm.payment_company_id"}},e._l(e.companyList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),1==e.ruleForm.pay_mode?n("el-form-item",{attrs:{label:"付款账户",prop:"payment_company_bank_id"}},[n("el-select",{attrs:{disabled:e.formDisabled,placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.payment_company_bank_id,callback:function(t){e.$set(e.ruleForm,"payment_company_bank_id",t)},expression:"ruleForm.payment_company_bank_id"}},e._l(e.companyListAccount,(function(e){return n("el-option",{key:e.id,attrs:{label:e.open_bank+":"+e.bank_number,value:e.id}})})),1)],1):e._e()]:e._e(),2==e.ruleForm.payment_type&&1==e.ruleForm.pay_mode?[n("el-form-item",{attrs:{label:"个人付款id",prop:"payment_staff_id"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:"",filterable:"",disabled:e.formDisabled},model:{value:e.ruleForm.payment_staff_id,callback:function(t){e.$set(e.ruleForm,"payment_staff_id",t)},expression:"ruleForm.payment_staff_id"}},e._l(e.staffList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),n("el-form-item",{attrs:{label:"个人付款账户",prop:"payment_staff_bank_id"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{disabled:e.formDisabled,placeholder:"请选择",clearable:"",filterable:""},model:{value:e.ruleForm.payment_staff_bank_id,callback:function(t){e.$set(e.ruleForm,"payment_staff_bank_id",t)},expression:"ruleForm.payment_staff_bank_id"}},e._l(e.payment_staff_bank_idArr,(function(e){return n("el-option",{key:e.id,attrs:{label:e.open_bank+":"+e.bank_number,value:e.id}})})),1)],1)]:e._e(),n("el-form-item",{attrs:{label:"付款金额",prop:"payment_money"}},[n("el-input",{attrs:{title:e.ruleForm.payment_money,placeholder:"请输入",disabled:e.formDisabled},model:{value:e.ruleForm.payment_money,callback:function(t){e.$set(e.ruleForm,"payment_money",t)},expression:"ruleForm.payment_money"}})],1),n("el-form-item",{attrs:{label:"收款账户类型",prop:"revenue_type"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择收款账户类型",disabled:e.detailToCreate||e.formDisabled},model:{value:e.ruleForm.revenue_type,callback:function(t){e.$set(e.ruleForm,"revenue_type",t)},expression:"ruleForm.revenue_type"}},[n("el-option",{attrs:{label:"公司",value:1}}),n("el-option",{attrs:{label:"个人",value:2}})],1)],1),1==e.ruleForm.revenue_type?[n("el-form-item",{attrs:{label:"收款主体",prop:"revenue_company_id"}},[n("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:"",disabled:e.formDisabled},model:{value:e.ruleForm.revenue_company_id,callback:function(t){e.$set(e.ruleForm,"revenue_company_id",t)},expression:"ruleForm.revenue_company_id"}},e._l(e.companyList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),1==e.ruleForm.pay_mode?n("el-form-item",{attrs:{label:"收款账户",prop:"revenue_company_bank_id"}},[n("el-select",{attrs:{placeholder:"请选择",disabled:e.formDisabled,filterable:"",clearable:""},model:{value:e.ruleForm.revenue_company_bank_id,callback:function(t){e.$set(e.ruleForm,"revenue_company_bank_id",t)},expression:"ruleForm.revenue_company_bank_id"}},e._l(e.revenue_companyListAccount,(function(e){return n("el-option",{key:e.id,attrs:{label:e.open_bank+":"+e.bank_number,value:e.id}})})),1)],1):e._e()]:e._e(),2==e.ruleForm.revenue_type&&1==e.ruleForm.pay_mode?[n("el-form-item",{attrs:{label:"个人收款id",prop:"revenue_staff_id"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:"",filterable:"",disabled:e.formDisabled},model:{value:e.ruleForm.revenue_staff_id,callback:function(t){e.$set(e.ruleForm,"revenue_staff_id",t)},expression:"ruleForm.revenue_staff_id"}},e._l(e.staffList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),n("el-form-item",{attrs:{label:"个人收款账户",prop:"revenue_staff_bank_id"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",filterable:"",clearable:"",disabled:e.formDisabled},model:{value:e.ruleForm.revenue_staff_bank_id,callback:function(t){e.$set(e.ruleForm,"revenue_staff_bank_id",t)},expression:"ruleForm.revenue_staff_bank_id"}},e._l(e.revenue_staff_idArr,(function(e){return n("el-option",{key:e.id,attrs:{label:e.open_bank+":"+e.bank_number,value:e.id}})})),1)],1)]:e._e(),n("el-form-item",{attrs:{label:"备注信息",prop:"desc"}},[n("el-input",{attrs:{title:e.ruleForm.remarks,type:"textarea",disabled:e.formDisabled},model:{value:e.ruleForm.remarks,callback:function(t){e.$set(e.ruleForm,"remarks",t)},expression:"ruleForm.remarks"}})],1),n("el-form-item",[e.showSubmitBtn?n("el-button",{staticStyle:{display:"flex"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")]):e._e()],1),e.canyuShow?n("div",[e.showSubmitBtn||0!=e.state?e._e():n("div",{staticClass:"action",staticStyle:{"text-align":"center"}},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.handlePass(e.state)}}},[e._v("通过")]),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.handleReject(e.state)}}},[e._v("驳回")]),e.permit_response&&void 0!==e.permit_response.project_id?n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.toProjectDetail}},[e._v("Go项目脑图审批")]):e._e()],1)]):e._e()],2):e._e(),"2"==e.steps?n("div",[n("createComplete",{attrs:{"back-word":"返回列表","go-to-word":"再次创建",tips:"项目创建成功","handle-back":e.handleBack,recreate:e.Recreate}})],1):e._e()],1)],1)},r=[],s=a("5530"),i=a("c7eb"),o=a("1da1"),c=(a("7db0"),a("caad"),a("d81d"),a("e9c4"),a("a9e3"),a("b64b"),a("d3b7"),a("2532"),a("0643"),a("fffc"),a("a573"),a("fef7")),l=a("ba84"),u=a("ed5d"),d=a("277f"),m=a("429f"),p=a("ed08"),f={components:{ProgressBar:c["a"],createComplete:l["a"]},props:{withModal:{type:Object,default:void 0}},data:function(){return{detailToCreate:void 0,loading:!1,state_name:"",active:0,arr:[{stepTitle:"填写信息",stepDesc:"创建项目"},{stepTitle:"完成创建",stepDesc:"创建成功"}],permit_type_name:"",steps:"1",showIsTop:!1,istop:!1,formDisabled:!1,canyuShow:!0,showSubmitBtn:!0,state:"",payStaffBankList:[],revenueStaffBankList:[],ruleForm:{business_personnel_id:"",project_id:"",type:"",payment_company_id:"",payment_company_bank_id:"",payment_money:"",revenue_company_id:"",revenue_company_bank_id:"",remarks:"",pay_mode:1,payment_type:1,payment_staff_id:"",payment_staff_bank_id:"",revenue_type:1,revenue_staff_id:"",revenue_staff_bank_id:"",contacts_name:""},companyListAccount:[],revenue_companyListAccount:[],rules:{business_personnel_id:[{required:!0,message:"请选择业务人",trigger:"change"}],project_id:[{required:!0,message:"请选择项目名称",trigger:"change"}],type:[{required:!0,message:"请选择动作类型",trigger:"change"}],payment_company_id:[{required:!0,message:"请选择付款主体",trigger:"blur"}],payment_company_bank_id:[{required:!0,message:"请选择付款账户",trigger:"blur"}],payment_money:[{required:!0,message:"请输入付款金额",trigger:"change"}],revenue_company_id:[{required:!0,message:"请输入收款主体",trigger:"blur"}],revenue_company_bank_id:[{required:!0,message:"请输入收款账户",trigger:"blur"}],payment_staff_id:[{required:!0,message:"请选择付款方",trigger:"blur"}],payment_staff_bank_id:[{required:!0,message:"请选择付款方账号",trigger:"blur"}],revenue_staff_id:[{required:!0,message:"请选择收款方",trigger:"blur"}],revenue_staff_bank_id:[{required:!0,message:"请选择收款账号",trigger:"blur"}]},payment_staff_bank_idArr:[],revenue_staff_idArr:[],permit_response:void 0}},computed:{companyList:function(){return this.$store.state.company.companyList},projectList:function(){return this.$store.state.company.projectList},contractList:function(){return this.$store.state.company.contractList},staffList:function(){return this.$store.state.company.staffList}},watch:{"ruleForm.payment_company_id":{handler:function(e,t){var a=this;e!==t&&t&&(this.ruleForm.payment_company_bank_id=""),e&&this.$store.state.company.companyList.map((function(t){t.id===e&&(a.companyListAccount=t.companyBankList)}))},deep:!0},"ruleForm.revenue_company_id":{handler:function(e,t){var a=this;e!==t&&t&&(this.ruleForm.revenue_company_bank_id=""),e&&this.$store.state.company.companyList.map((function(t){t.id===e&&(a.revenue_companyListAccount=t.companyBankList)}))},deep:!0},"ruleForm.payment_staff_id":{handler:function(e,t){var a=this;e!==t&&t&&(this.ruleForm.payment_staff_bank_id=""),e&&this.$store.state.company.staffList.map((function(t){t.id===e&&(a.payment_staff_bank_idArr=t.staffBankList)}))},deep:!0},"ruleForm.revenue_staff_id":{handler:function(e,t){var a=this;e!==t&&t&&(this.ruleForm.revenue_staff_bank_id=""),e&&this.$store.state.company.staffList.map((function(t){t.id===e&&(a.revenue_staff_idArr=t.staffBankList)}))},deep:!0}},mounted:function(){this.initHandler()},methods:{toProjectDetail:function(){var e=this,t=e.permit_response.info;"未签约"===t.main_contract_id?Object(p["c"])(this,"NewProject",{data:JSON.stringify(t),type:"edit",isTop:t.istop}):Object(p["c"])(this,"projectDetail",{id:t.id,isTop:t.istop})},initHandler:function(){var e,t,a,n,r,s;if(this.withModal){if(this.state_name=null===(t=this.withModal.permit_row)||void 0===t?void 0:t.state_name,this.permit_type_name=null===(a=this.withModal.permit_row)||void 0===a?void 0:a.permit_type_name,this.istop=null===(n=this.withModal.permit_row)||void 0===n?void 0:n.istop,this.showIsTop=0===(null===(r=this.withModal.permit_row)||void 0===r?void 0:r.state),this.$store.dispatch("company/getAll"),this.withModal.hide_permit_btn&&(this.canyuShow=!1),this.withModal.type){var i=this.withModal.data;switch(this.withModal.type){case"edit":this.ruleForm=i,this.ruleForm.contacts_name=null===(e=this.projectList.find((function(e){return e.id===i.project_id})))||void 0===e?void 0:e.contacts_name,this.ruleForm.business_personnel_id=Number(i.business_personnel_id);break;case"audit":this.formDisabled=!0,this.permitsGetInfoFun({id:this.withModal.permit_id}),this.showSubmitBtn=!1;break;case"create":break;default:break}}}else if(this.state_name=this.$route.query.state_name,this.permit_type_name=this.$route.query.permit_type_name,this.istop="1"===this.$route.query.isTop,this.showIsTop="0"===this.$route.query.state,this.$store.dispatch("company/getAll"),this.$route.query.canyuShow||void 0===this.$route.query.canyuShow||(this.canyuShow=this.$route.query.canyuShow),this.$route.query.type)"5"===this.$route.query.type&&(this.formDisabled=!0),this.permitsGetInfoFun({id:this.$route.query.id}),this.showSubmitBtn=!this.$route.query.type;else if(this.$route.query.data||null!==(s=this.withModal)&&void 0!==s&&s.data){var o,c=null!==(o=this.withModal)&&void 0!==o&&o.data?JSON.parse(this.withModal.data):JSON.parse(this.$route.query.data);this.ruleForm=c,this.ruleForm.contacts_name=this.projectList.find((function(e){return e.id===c.project_id})).contacts_name,this.ruleForm.business_personnel_id=Number(c.business_personnel_id)}},handleBack:function(){this.$emit("close")},Recreate:function(){this.$emit("refresh")},handleTop:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function e(){var a,n;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["a"])({id:null!==(a=t.withModal)&&void 0!==a&&a.permit_id?t.withModal.permit_id:t.$route.query.id});case 2:n=e.sent,200===n.code&&(t.$message.success(n.msg),t.istop=!t.istop);case 4:case"end":return e.stop()}}),e)})))()},handlePass:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function e(){var a;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(m["j"])({id:t.shenpi.id,type:"1"});case 2:a=e.sent,200===a.code&&(t.$message.success(a.msg),t.$router.push({name:"pendApprovalList"}));case 4:case"end":return e.stop()}}),e)})))()},handleReject:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function e(){var a;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(m["j"])({id:t.shenpi.id,type:"2"});case 2:a=e.sent,200===a.code&&(t.$message.success(a.msg),t.$router.push({name:"pendApprovalList"}));case 4:case"end":return e.stop()}}),e)})))()},permitsGetInfoFun:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){var a,n,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(d["z"])({id:e.withModal?e.withModal.permit_id:e.$route.query.id});case 3:if(a=t.sent,e.state=a.data.state,e.shenpi=a.data,a.data.info.business_personnel_id=Number(a.data.info.business_personnel_id),e.ruleForm=a.data.info,n=a.data.project_id,!n){t.next=14;break}return t.next=12,Object(m["e"])(n);case 12:r=t.sent,e.permit_response=Object(s["a"])(Object(s["a"])({},a.data),{},{info:r.data[0]||{}});case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),e.$message.error(t.t0.message||"系统异常");case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()},submitForm:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function e(){var a,n,r;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.ruleForm.payment_money.includes("¥")&&(t.ruleForm.payment_money=t.ruleForm.payment_money.split("¥")[1]),!(t.$route.query.data||null!==(a=t.withModal)&&void 0!==a&&a.data)){e.next=8;break}return e.next=4,Object(u["d"])(t.ruleForm);case 4:return n=e.sent,200===n.code&&(t.active+=2,t.steps="2"),t.$emit("refreshList"),e.abrupt("return");case 8:return e.next=10,Object(u["a"])(t.ruleForm);case 10:r=e.sent,200===r.code&&(t.active+=2,t.steps="2",t.$emit("refreshList"));case 12:case"end":return e.stop()}}),e)})))()},handleProjectChange:function(e){this.ruleForm.contacts_name=e;var t=this.projectList.find((function(t){return t.id===e}));console.log(t),this.ruleForm.payment_company_id=t.company_id,this.ruleForm.revenue_company_id=t.bid_company_id}}},b=f,h=(a("b4b7"),a("2877")),_=Object(h["a"])(b,n,r,!1,null,"122bc8a0",null);t["default"]=_.exports},3841:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"g",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"f",(function(){return c})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return u}));var n=a("b775");function r(e){return Object(n["a"])({url:"/Staffs/add",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/Staffs/update",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/Staffs/getInfo",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/Staffs/delete",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/Staffs/getList",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/Publics/getArea",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/Payments/deleteStaffBank",method:"post",data:e})}},"38d4":function(e,t,a){"use strict";a.d(t,"h",(function(){return r})),a.d(t,"i",(function(){return s})),a.d(t,"g",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"f",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return m}));var n=a("b775");function r(e){return Object(n["a"])({url:"/Invoices/getList",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/Invoices/offsetRed",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/Invoices/cancel",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/BusinessExpensess/getStatistics",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/Invoices/getDraftList",method:"post",data:e})}function l(e){return Object(n["a"])({url:e.id?"/Invoices/editDraft":"/Invoices/draftAdd",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/Invoices/draftInfo?id=".concat(e.id),method:"post",data:e})}function d(e){return Object(n["a"])({url:"/Invoices/draftDel",method:"post",data:e})}var m=function(e){var t=new FormData;return t.append("files",e),Object(n["a"])({url:"/Publics/recognizeInvoice",method:"post",data:t})}},"3da1":function(e,t,a){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-ps":"4c98","./ar-ps.js":"4c98","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku-kmr":"7558","./ku-kmr.js":"7558","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e9","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e9","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},6582:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABAFJREFUaEPdWs9PE0EU/qYUo4IhGqDYgxBjBDXBRCV6MSb8AXrzZk0MxIM/DuoBDmgU6Qk9iB4sJ/Hm0cSjJqgHUPFHlLT4G6NNWwoIFKyF7jMz7eK23XZ3u93WuqemO/Pm+958896bmWUowOOnmS0VWD5EYG0A7QJYE4B6AFVJ84sAQgB9Bdg4Az2Po3LYyTZ9Mzs8y9eAn/y1Fah0EaSjANufnx0aZbDdi2N5yMmc4XxsGCbAvW3DygUApwEY7p8FJAG4KcHeb3RWDAEI0lQPgS4XEHg6H2JglxysrlfvbOgi4KepvTZIt/KXil44cjsalWA75WR1Y1o9NQkEKXiMwO5Y6PVsGImBjjuY424uEjkJBGnqHIGuaXnByvcM7LyD1V3PNkZWAv8CeBl0LhKqBJKyGbLSs0ZtM5BLTU4ZBBILlp6XQPNanEgCa0tf2BkEAhQcKV600cKcEWVHG5jjgPLfFALJOH/FqNlitmdgF5V5YpVAMsN+/QelkzENEuxNcsZeJRCg0A0AZ4rpTeVYQ9/u48jmdtRUVuuBMNDA6s/yhoIAL8xssIdK4X2JJFz1efAkPIbGKid6Wk6icb1TiwRJWKnnBaAgUKqYvyytwD3hwdPwq1XAeknIuUEQKEXk+R2PCc+PzLzJ8Pbummb0t/KCN9dDIiKx5OKd1JqzQr5fikfR5/Pg2cxbVbP6CAAS7I2s2Fk3El9Cn9eDF7PjquD1SiixgMnFihl95pYjQvMvZ72mwScNDLAABR8CrF2vRKZjc3gQGIZry2G9XUS72dg83BODeP3TVyjwAOgRn4FPALbqQTO55Eev7zYmF/04WLsH3c2dqLTZNbtOx37iqteDd/MfCghemPrMCSwA0MweSvAyigObWtHV0oGqinVZSYSi08Lz4/PcT5mPEc2rdI9wApKeBNbrvY3H4RcZNvZt3Imu5k7VDBqIhkW08S18sQI8t0mmCXArrTXb0d3Sgdo1G1eB/oiG4PYO4n2El1cF97xsUBDIW0JKWDs2bBVycq6tw/dfAfT5BvExon5uZVI2ymGFhPJaxGpe3VbdiK7mE3D7BvF58buVnpdt80VsLIyqLWYlUu5dHqUslI3CdCKMGi6jtUgUB7wYZSDvUsIIiQJqPsU3opQwU8zpIWEVeM5EFHP8h5lyOhcJK8EDyXKaEzC7oVEjYS14XokmTuwKtqVUkrAaPM/AKVvKhIyMR6P0aCNXqgY256rhVsefqZt63qHsj1WSa4FfYJTnwZY8bWYiko6pN9kkEXmURv6/w92ElMStTHker8vTYzY3mNRKWsmQ/Zbm/71i+jsTZXzJJ5Mo62tWpRjL9qJbSaKsPzVIJVKmH3uohcdSfm7zBx1kT++F89WDAAAAAElFTkSuQmCC"},"9a04":function(e,t,a){e.exports=a.p+"static/img/checking.73c367ae.png"},a4ab:function(e,t,a){"use strict";a("cfe7")},ac5c:function(e,t,a){"use strict";a("c072")},ac6f:function(e,t,a){e.exports=a.p+"static/img/refuted.d21e0353.png"},b4b7:function(e,t,a){"use strict";a("3da1")},c072:function(e,t,a){},cfe7:function(e,t,a){},ed08:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return o}));a("53ca"),a("d81d"),a("a434"),a("d3b7"),a("4d63"),a("ac1f"),a("2c3e"),a("00b4"),a("25f0"),a("4d90"),a("5319"),a("0643"),a("4e3e"),a("a573"),a("159b");var n=a("21a6"),r=a("25ca");a("bc3a"),a("aeb1");function s(e,t,a,s){var i=[],o=[],c=function(e){var t=0;for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t++;return t};for(var l in e)if(console.log("------------------------"),Object.prototype.hasOwnProperty.call(e,l)){var u=e[l],d=[];for(var m in u)if(Object.prototype.hasOwnProperty.call(u,m)){var p=u[m];d.push(p),o.length<c(u)&&o.push(m)}i.push(d)}var f=[];a.map((function(e,t){"快速操作"!=e&&"详情"!=e&&f.push(e)})),i.splice(0,0,o,f),console.log("excel_data",r);var b=r["utils"].aoa_to_sheet(i),h=r["utils"].book_new(),_=[{hidden:!0}];b["!rows"]=_,r["utils"].book_append_sheet(h,b,s);var y=r["write"](h,{bookType:"xlsx",type:"array"}),j=new Blob([y],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});Object(n["saveAs"])(j,t+".xlsx")}function i(e){var t=-1!==e.lastIndexOf("?")?decodeURIComponent(e.substring(e.lastIndexOf("/")+1,e.lastIndexOf("?"))):decodeURIComponent(e.substring(e.lastIndexOf("/")+1)),a=t.substring(t.lastIndexOf(".")+1);if("png"==a||"jpg"==a||"pdf"==a){var r=document.createElement("a");r.href=e,r.download=t,r.target="_blank",r.click()}else fetch(e,{mode:"no-cors"}).then((function(e){return e.blob()})).then((function(e){console.log("blob",e),Object(n["saveAs"])(e,t)}))}function o(e,t,a){console.log("self",e);var n=e.$router.resolve({name:t,query:a}),r=window.open(n.href,t);r&&r.location.reload()}},ed5d:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return o}));var n=a("b775");function r(e){return Object(n["a"])({url:"/BusinessExpensess/add",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/BusinessExpensess/getList",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/BusinessExpensess/delete",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/BusinessExpensess/update",method:"post",data:e})}},ef22:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("BusinessExpensessGetStatistics"),a("searchComponent",{attrs:{"search-config":e.searchConfig},on:{search:e.handleSearch}}),a("div",{staticClass:"extend-action"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"small"},on:{click:e.add}},[e._v("新增")]),a("el-button",{attrs:{size:"small"},on:{click:e.batchExport}},[e._v("批量导出")])],1),a("customTable",{attrs:{columns:e.columns,"data-source":e.dataSource,total:e.total,height:"calc(100vh - 490px)",loading:e.loading},on:{selectChange:e.handleSelectChange,pageChange:e.handlePageChange},scopedSlots:e._u([{key:"action",fn:function(t){return[a("div",{staticClass:"action"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return e.handleEdit(t.data)}}},[e._v("编辑")]),a("el-popconfirm",{attrs:{title:"确定删除该条内容吗"},on:{onConfirm:function(a){return e.handleDelete(t.data)}}},[a("el-button",{attrs:{slot:"reference",size:"small"},slot:"reference"},[e._v("删除")])],1)],1)]}},{key:"permitting_state",fn:function(t){return[a("el-tag",[e._v(e._s(t.data.permitting_state))])]}}])}),a("el-drawer",{attrs:{size:"70%",visible:e.showDetailModal,"destroy-on-close":!0},on:{"update:visible":function(t){e.showDetailModal=t},close:e.closeDrawer}},[a("detail-modal",[e.modalFreshControl?a("business-create",{attrs:{"with-modal":e.withModal},on:{refresh:e.modalRefresh,refreshList:e.refreshList,close:e.closeDrawer}}):e._e()],1)],1)],1)},r=[],s=a("c7eb"),i=a("5530"),o=a("1da1"),c=(a("d81d"),a("a573"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{display:"flex"}},[a("p",{staticStyle:{margin:"0 50px 50px 0px",color:"green"}},[e._v("商务费收入："),a("span",{staticStyle:{"font-weight":"900"}},[e._v(e._s(e.revenue))])]),a("p",{staticStyle:{margin:"0 50px 50px 27px",color:"red"}},[e._v("商务费支出："),a("span",{staticStyle:{"font-weight":"900"}},[e._v(e._s(e.payment))])]),a("p",{staticStyle:{margin:"0 50px 50px 27px",color:"blue"}},[e._v("商务费结余："),a("span",{staticStyle:{"font-weight":"900"}},[e._v(e._s(e.balance))])])])])}),l=[],u=a("38d4"),d={data:function(){return{revenue:"",payment:"",balance:"",project_id:"",dataVal:[]}},watch:{project_id:{handler:function(e,t){e!==t&&this.businessGetStatisticsFun()},deep:!0},dataVal:{immediate:!0,handler:function(e,t){e!==t&&this.businessGetStatisticsFun()}}},methods:{businessGetStatisticsFun:function(){var e=this;return Object(o["a"])(Object(s["a"])().mark((function t(){var a,n,r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["b"])({project_id:e.project_id,start_time:null!==(a=e.dataVal)&&void 0!==a&&a.length?e.dataVal[0]:"",end_time:null!==(n=e.dataVal)&&void 0!==n&&n.length?e.dataVal[1]:""});case 2:r=t.sent,console.log("resresres",r),e.revenue=r.data.revenue,e.payment=r.data.payment,e.balance=r.data.balance;case 7:case"end":return t.stop()}}),t)})))()}},computed:{projectList:function(){return this.$store.state.company.projectList}}},m=d,p=(a("ac5c"),a("2877")),f=Object(p["a"])(m,c,l,!1,null,"19d60276",null),b=f.exports,h=a("878f"),_=a("6cff"),y=a("ed5d"),j=a("277f"),v=a("c1df"),g=a.n(v),k=a("1aac"),w=a("3081"),x=a("ed08"),F={components:{customTable:h["a"],searchComponent:_["a"],BusinessExpensessGetStatistics:b,detailModal:k["a"],businessCreate:w["default"]},data:function(){return{showDetailModal:!1,modalFreshControl:!0,withModal:{id:null},columns:[{title:"编号",key:"id",minWidth:"120"},{title:"创建人",key:"create_name",minWidth:"120"},{title:"项目负责人",key:"business_personnel_name",minWidth:"120"},{title:"项目名称",key:"project_name",minWidth:"120"},{title:"招标单位",key:"company_name",minWidth:"120"},{title:"投标单位",key:"bid_company_name",minWidth:"120"},{title:"付款人",key:"payment_staff_name",minWidth:"120"},{title:"付款人账号",key:"payment_staff_bank_number",minWidth:"120"},{title:"付款金额",key:"payment_money",minWidth:"120"},{title:"收款人",key:"revenue_staff_name",minWidth:"120"},{title:"收款人账号",key:"revenue_staff_bank_number",minWidth:"120"},{title:"业务类型",key:"type_name",minWidth:"120"},{title:"审批状态",key:"permitting_state",minWidth:"120",render:"permitting_state"},{title:"快速操作",key:"action",fixed:"right",width:"160px",render:"action"}],dataSource:[],searchParams:{limit:10,page:1},total:0,loading:!1,companyList:[],searchConfig:{formItemLength:7,span:6,labelWidth:"80px",formItem:[{label:"项目名称",value:"project_name",type:"input",placeholder:"请输入项目名称"},{label:"项目负责人",value:"business_personnel_id",type:"staff"},{label:"招标单位",value:"company_id",type:"company"},{label:"投标单位",value:"bid_company_id",type:"company"},{label:"付款人",value:["payment_staff_id","payment_staff_bank_id"],type:"personal_bank",extend:{type:"payment",label:"付款人账号",colSpan:12}},{label:"收款人",value:["revenue_staff_id","revenue_staff_bank_id"],type:"personal_bank",extend:{type:"revenue",label:"收款人账号",colSpan:12}},{label:"业务类型",value:"type",type:"select",options:[{value:"1",label:"商务费收入"},{value:"2",label:"商务费支出"}]},{label:"审批状态",value:"permitting_state",type:"select",options:[{value:"1",label:"已审批"},{value:"2",label:"已驳回"},{value:"3",label:"待审批"}]},{label:"付款金额",value:["payment_money_min","payment_money_max"],type:"amount",placeholder:"请输入付款金额"},{label:"创建日期",value:"date",type:"dateRange"}]}}},mounted:function(){this.getDataSource(),this.getCompanyListByDataAuthority(),this.getStaffListByDataAuthority(),this.getAllContractList(),this.getAllProjectList()},methods:{closeDrawer:function(){this.showDetailModal=!1,this.withModal=void 0,this.refreshList()},refreshList:function(){this.getDataSource()},modalRefresh:function(){var e=this;this.modalFreshControl=!1,this.$nextTick((function(){e.modalFreshControl=!0}))},batchExport:function(){var e=this;return Object(o["a"])(Object(s["a"])().mark((function t(){var a,n,r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(y["c"])(Object(i["a"])({page:1,limit:1e6},e.searchParams));case 2:a=t.sent,n=e.columns.map((function(e){return e.key})),r=[],a.data.map((function(e){var t={};n.map((function(a){t[a]=e[a]})),r.push(t)})),Object(x["b"])(r,e.$route.meta.title,e.columns.map((function(e){return e.title})),e.$route.meta.title);case 7:case"end":return t.stop()}}),t)})))()},getCompanyListByDataAuthority:function(){var e=this;return Object(o["a"])(Object(s["a"])().mark((function t(){var a;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(j["n"])();case 2:a=t.sent,e.CompanyList=a.data,e.$store.commit("company/setCompanyList",a.data);case 5:case"end":return t.stop()}}),t)})))()},getStaffListByDataAuthority:function(){var e=this;return Object(o["a"])(Object(s["a"])().mark((function t(){var a;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(j["p"])();case 2:a=t.sent,e.StaffList=a.data,e.$store.commit("company/setStaffList",a.data);case 5:case"end":return t.stop()}}),t)})))()},getAllContractList:function(){var e=this;return Object(o["a"])(Object(s["a"])().mark((function t(){var a;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(j["l"])();case 2:a=t.sent,e.ContractList=a.data,e.$store.commit("company/setContractList",a.data);case 5:case"end":return t.stop()}}),t)})))()},getAllProjectList:function(){var e=this;return Object(o["a"])(Object(s["a"])().mark((function t(){var a;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(j["m"])();case 2:a=t.sent,e.ProjectList=a.data,e.$store.commit("company/setProjectList",a.data);case 5:case"end":return t.stop()}}),t)})))()},handleEdit:function(e){this.withModal={data:e,id:e.id,type:"edit",is_permit:!1},this.showDetailModal=!0},handleDelete:function(e){var t=this;Object(y["b"])({id:e.id}).then((function(e){200===e.code&&(t.$message({type:"success",message:e.msg}),t.getDataSource())}))},handleSelectChange:function(e){this.selectArr=e},handlePageChange:function(e){this.searchParams=Object(i["a"])(Object(i["a"])({},this.searchParams),e),this.getDataSource()},handleSearch:function(e){this.searchParams=Object(i["a"])(Object(i["a"])({},this.searchParams),e),e.date?(this.searchParams.start_time=g()(e.date[0]).format("YYYY-MM-DD HH:mm:ss"),this.searchParams.end_time=g()(e.date[1]).format("YYYY-MM-DD HH:mm:ss")):(this.searchParams.start_time="",this.searchParams.end_time=""),this.getDataSource()},add:function(){this.withModal={type:"create",is_permit:!1},this.showDetailModal=!0},getDataSource:function(){var e=this;return Object(o["a"])(Object(s["a"])().mark((function t(){var a;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(y["c"])(e.searchParams);case 3:a=t.sent,e.loading=!1,e.total=a.count,e.dataSource=a.data;case 7:case"end":return t.stop()}}),t)})))()},moment:function(e){return g()(e).format("YYYY-MM-DD HH:mm:ss")}}},O=F,S=(a("a4ab"),Object(p["a"])(O,n,r,!1,null,"775b4df4",null));t["default"]=S.exports}}]);