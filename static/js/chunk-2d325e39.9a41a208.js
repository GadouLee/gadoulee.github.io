(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d325e39"],{"00c2":function(e,t,r){},5809:function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"newApproval"},[r("div",{staticClass:"newTitle"},[e._v("审批详情")]),r("ProgressBar",{attrs:{active:e.active,arr:e.arr}}),r("div",{staticStyle:{width:"650px",margin:"0 auto"}},[0==e.active?r("el-form",{ref:"ruleForm",staticClass:"newApprovalForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"150px",size:"medium"}},[r("el-form-item",{attrs:{label:"付款主体",prop:"paySubject"}},[r("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.paySubject,callback:function(t){e.$set(e.ruleForm,"paySubject",t)},expression:"ruleForm.paySubject"}},e._l(3,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"付款方式",prop:"payMethod"}},[r("el-radio-group",{model:{value:e.ruleForm.payMethod,callback:function(t){e.$set(e.ruleForm,"payMethod",t)},expression:"ruleForm.payMethod"}},[r("el-radio-button",{attrs:{label:"网银转账"}}),r("el-radio-button",{attrs:{label:"现金"}})],1)],1),r("el-form-item",{attrs:{label:"付款账户",prop:"payAcct"}},[r("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.payAcct,callback:function(t){e.$set(e.ruleForm,"payAcct",t)},expression:"ruleForm.payAcct"}},e._l(3,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"收款主体",prop:"payeeSubject"}},[r("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.payeeSubject,callback:function(t){e.$set(e.ruleForm,"payeeSubject",t)},expression:"ruleForm.payeeSubject"}},e._l(3,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"收款账户",prop:"payeeAcct"}},[r("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.payeeAcct,callback:function(t){e.$set(e.ruleForm,"payeeAcct",t)},expression:"ruleForm.payeeAcct"}},e._l(3,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"付款金额",prop:"payMoney"}},[r("el-input",{attrs:{title:e.ruleForm.payMoney,placeholder:"请输入"},model:{value:e.ruleForm.payMoney,callback:function(t){e.$set(e.ruleForm,"payMoney",t)},expression:"ruleForm.payMoney"}})],1),r("el-form-item",{attrs:{label:"付款类型",prop:"payType"}},[r("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.payType,callback:function(t){e.$set(e.ruleForm,"payType",t)},expression:"ruleForm.payType"}},e._l(3,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"付款属性",prop:"payAttr"}},[r("el-radio-group",{model:{value:e.ruleForm.payAttr,callback:function(t){e.$set(e.ruleForm,"payAttr",t)},expression:"ruleForm.payAttr"}},[r("el-radio-button",{attrs:{label:"项目付款"}}),r("el-radio-button",{attrs:{label:"非项目付款"}})],1)],1),r("el-form-item",{attrs:{label:"选择项目",prop:"selectProject"}},[r("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.selectProject,callback:function(t){e.$set(e.ruleForm,"selectProject",t)},expression:"ruleForm.selectProject"}},e._l(3,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"选择合同",prop:"selectContract"}},[r("el-select",{attrs:{placeholder:"请选择",filterable:"",clearable:""},model:{value:e.ruleForm.selectContract,callback:function(t){e.$set(e.ruleForm,"selectContract",t)},expression:"ruleForm.selectContract"}},e._l(3,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"备注信息",prop:"desc"}},[r("el-input",{attrs:{title:e.ruleForm.desc,type:"textarea"},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),r("el-form-item",[r("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("同意")]),r("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("驳回")])],1)],1):e._e()],1)],1)},a=[],o=r("fef7"),c={components:{ProgressBar:o["a"]},data:function(){return{active:0,arr:[{stepTitle:"填写信息",stepDesc:"创建审批"},{stepTitle:"完成创建",stepDesc:"创建成功"}],ruleForm:{paySubject:"",payAcct:"",payeeSubject:"",payeeAcct:"",payMoney:"",payType:"",selectProject:"",selectContract:"",desc:"",payMethod:"网银转账",payAttr:"项目付款"},rules:{paySubject:[{required:!0,message:"请选择付款主体",trigger:"change"}],payAcct:[{required:!0,message:"请选择付款账户",trigger:"change"}],payeeSubject:[{required:!0,message:"请选择收款主体",trigger:"change"}],payeeAcct:[{required:!0,message:"请选择收款账户",trigger:"change"}],payMoney:[{required:!0,message:"请输入付款金额",trigger:"blur"}],payType:[{required:!0,message:"请选择付款类型",trigger:"change"}],selectProject:[{required:!0,message:"请选择项目",trigger:"change"}],selectContract:[{required:!0,message:"请选择合同",trigger:"change"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.next()}))},next:function(){this.active++>1&&(this.active=0)}}},s=c,u=(r("8f27"),r("2877")),i=Object(u["a"])(s,l,a,!1,null,"80401b90",null);t["default"]=i.exports},"8f27":function(e,t,r){"use strict";r("00c2")}}]);