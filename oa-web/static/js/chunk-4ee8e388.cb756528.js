(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ee8e388"],{7345:function(e,r,t){"use strict";t.r(r);var l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"newApproval"},[t("div",{staticClass:"newTitle"},[e._v("新建审批")]),t("ProgressBar",{attrs:{active:e.active,arr:e.arr}}),t("div",{staticStyle:{width:"650px",margin:"0 auto"}},[0==e.active?t("el-form",{ref:"ruleForm",staticClass:"newApprovalForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"150px",size:"medium"}},[t("el-form-item",{attrs:{label:"是否归属项目",prop:"resource"}},[t("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(r){e.$set(e.ruleForm,"resource",r)},expression:"ruleForm.resource"}},[t("el-radio",{attrs:{label:"是"}}),t("el-radio",{attrs:{label:"否"}})],1)],1),t("el-form-item",{attrs:{label:"项目名称",prop:"projectName"}},[t("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.projectName,callback:function(r){e.$set(e.ruleForm,"projectName",r)},expression:"ruleForm.projectName"}},e._l(3,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"业务发起公司",prop:"businessCompany"}},[t("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.businessCompany,callback:function(r){e.$set(e.ruleForm,"businessCompany",r)},expression:"ruleForm.businessCompany"}},e._l(3,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"审批事项",prop:"approvalItems"}},[t("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.approvalItems,callback:function(r){e.$set(e.ruleForm,"approvalItems",r)},expression:"ruleForm.approvalItems"}},e._l(3,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"付款主体",prop:"paySubject"}},[t("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.paySubject,callback:function(r){e.$set(e.ruleForm,"paySubject",r)},expression:"ruleForm.paySubject"}},e._l(3,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"付款方式",prop:"payMethod"}},[t("el-radio-group",{model:{value:e.ruleForm.payMethod,callback:function(r){e.$set(e.ruleForm,"payMethod",r)},expression:"ruleForm.payMethod"}},[t("el-radio-button",{attrs:{label:"网银转账"}}),t("el-radio-button",{attrs:{label:"现金"}})],1)],1),t("el-form-item",{attrs:{label:"付款账户",prop:"payAcct"}},[t("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.payAcct,callback:function(r){e.$set(e.ruleForm,"payAcct",r)},expression:"ruleForm.payAcct"}},e._l(3,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"收款主体",prop:"payeeSubject"}},[t("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.payeeSubject,callback:function(r){e.$set(e.ruleForm,"payeeSubject",r)},expression:"ruleForm.payeeSubject"}},e._l(3,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"收款账户",prop:"payeeAcct"}},[t("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.payeeAcct,callback:function(r){e.$set(e.ruleForm,"payeeAcct",r)},expression:"ruleForm.payeeAcct"}},e._l(3,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"付款金额",prop:"payMoney"}},[t("el-input",{attrs:{title:e.ruleForm.payMoney,placeholder:"请输入"},model:{value:e.ruleForm.payMoney,callback:function(r){e.$set(e.ruleForm,"payMoney",r)},expression:"ruleForm.payMoney"}})],1),t("el-form-item",{attrs:{label:"付款类型",prop:"payType"}},[t("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.payType,callback:function(r){e.$set(e.ruleForm,"payType",r)},expression:"ruleForm.payType"}},e._l(3,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"付款属性",prop:"payAttr"}},[t("el-radio-group",{model:{value:e.ruleForm.payAttr,callback:function(r){e.$set(e.ruleForm,"payAttr",r)},expression:"ruleForm.payAttr"}},[t("el-radio-button",{attrs:{label:"项目付款"}}),t("el-radio-button",{attrs:{label:"非项目付款"}})],1)],1),t("el-form-item",{attrs:{label:"选择项目",prop:"selectProject"}},[t("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.selectProject,callback:function(r){e.$set(e.ruleForm,"selectProject",r)},expression:"ruleForm.selectProject"}},e._l(3,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"选择合同",prop:"selectContract"}},[t("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.selectContract,callback:function(r){e.$set(e.ruleForm,"selectContract",r)},expression:"ruleForm.selectContract"}},e._l(3,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"备注信息",prop:"desc"}},[t("el-input",{attrs:{title:e.ruleForm.desc,type:"textarea"},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),t("el-form-item",[t("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即创建")])],1)],1):e._e()],1),1==e.active?t("div",{staticClass:"successApproval"},[e._m(0),t("div",[t("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"primary"},on:{click:function(e){}}},[e._v("查看项目")]),t("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"primary"},on:{click:function(e){}}},[e._v("再次创建")])],1)]):e._e()],1)},a=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",[e._v("创建成功")]),t("div",{staticClass:"approvalNewSuccess"},[e._v("审批创建成功")])])}],o=t("fef7"),s={components:{ProgressBar:o["a"]},data:function(){return{active:0,radio:"1",arr:[{stepTitle:"填写信息",stepDesc:"创建审批"},{stepTitle:"完成创建",stepDesc:"创建成功"}],ruleForm:{resource:"",projectName:"",businessCompany:"",approvalItems:"",paySubject:"",payAcct:"",payeeSubject:"",payeeAcct:"",payMoney:"",payType:"",selectProject:"",selectContract:"",desc:"",payMethod:"网银转账",payAttr:"项目付款"},rules:{resource:[{required:!0,message:"请选择是否归属项目",trigger:"change"}],projectName:[{required:!0,message:"请选择项目名称",trigger:"change"}],businessCompany:[{required:!0,message:"请选择业务发起公司",trigger:"change"}],paySubject:[{required:!0,message:"请选择付款主体",trigger:"change"}],payAcct:[{required:!0,message:"请选择付款账户",trigger:"change"}],payeeSubject:[{required:!0,message:"请选择收款主体",trigger:"change"}],payeeAcct:[{required:!0,message:"请选择收款账户",trigger:"change"}],payMoney:[{required:!0,message:"请输入付款金额",trigger:"blur"}],payType:[{required:!0,message:"请选择付款类型",trigger:"change"}],selectProject:[{required:!0,message:"请选择项目",trigger:"change"}],selectContract:[{required:!0,message:"请选择合同",trigger:"change"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;r.next()}))},next:function(){this.active++>1&&(this.active=0)}}},c=s,u=(t("8f5a"),t("2877")),i=Object(u["a"])(c,l,a,!1,null,"265d354b",null);r["default"]=i.exports},"8f5a":function(e,r,t){"use strict";t("92d5")},"92d5":function(e,r,t){}}]);