(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-295a0aa0"],{"35e8":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"labelElement",staticStyle:{display:"flex","align-items":"center"}},[t("div",{staticClass:"labelLeft"},[e._v(e._s(e.data.keyStr))]),"select"==e.type?t("div",{class:{labelRight:e.useClass.isActive,flexStyle:e.useClass.isFlag}},[t("el-select",{attrs:{placeholder:"请选择",size:e.data.size,filterable:"",clearable:""},model:{value:e.data.value,callback:function(a){e.$set(e.data,"value",a)},expression:"data.value"}},e._l(e.data.options,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1):e._e(),"radio"==e.type?t("div",{class:{labelRight:e.useClass.isActive,flexStyle:e.useClass.isFlag}},[t("el-radio-group",{attrs:{size:e.data.size},model:{value:e.data.value,callback:function(a){e.$set(e.data,"value",a)},expression:"data.value"}},e._l(e.data.options,(function(a,r){return t("el-radio",{key:r,attrs:{label:a}},[e._v(e._s(a))])})),1)],1):e._e(),"radioBtn"==e.type?t("div",{class:{labelRight:e.useClass.isActive,flexStyle:e.useClass.isFlag}},[t("el-radio-group",{attrs:{size:e.data.size},model:{value:e.data.value,callback:function(a){e.$set(e.data,"value",a)},expression:"data.value"}},e._l(e.data.options,(function(a,r){return t("el-radio",{key:r,attrs:{label:a}},[e._v(e._s(a))])})),1)],1):e._e(),"checkBox"==e.type?t("div",{class:{labelRight:e.useClass.isActive,flexStyle:e.useClass.isFlag}},[t("el-checkbox-group",{attrs:{size:e.data.size},model:{value:e.data.value,callback:function(a){e.$set(e.data,"value",a)},expression:"data.value"}},e._l(e.data.options,(function(e,a){return t("el-checkbox",{key:a,attrs:{label:e}})})),1)],1):e._e(),"checkBoxBtn"==e.type?t("div",{class:{labelRight:e.useClass.isActive,flexStyle:e.useClass.isFlag}},[t("el-checkbox-group",{attrs:{size:e.data.size},model:{value:e.data.value,callback:function(a){e.$set(e.data,"value",a)},expression:"data.value"}},e._l(e.data.options,(function(a,r){return t("el-checkbox-button",{key:r,attrs:{label:a}},[e._v(e._s(a))])})),1)],1):e._e(),"input"==e.type?t("div",{class:{labelRight:e.useClass.isActive,flexStyle:e.useClass.isFlag}},[t("el-input",{attrs:{title:e.data.value,placeholder:"请输入内容",size:e.data.size},model:{value:e.data.value,callback:function(a){e.$set(e.data,"value",a)},expression:"data.value"}})],1):e._e(),"data"==e.type?t("div",{class:{labelRight:e.useClass.isActive,flexStyle:e.useClass.isFlag}},[t("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.data.value,callback:function(a){e.$set(e.data,"value",a)},expression:"data.value"}})],1):e._e()])},l=[],n={props:{data:Object,useClass:Object},data:function(e){return console.log(e),{}},computed:{type:function(){return this.data.type}},watch:{value:function(e,a){e!=a&&this.$emit("controlLibraryCallback",e)}},mounted:function(){},methods:{}},o=n,i=(t("eaad"),t("2877")),s=Object(i["a"])(o,r,l,!1,null,"14b66efa",null);a["a"]=s.exports},9437:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t("b775");function l(e){return Object(r["a"])({url:"Publics/upload",method:"post",data:e,headers:{"content-type":"multipart/form-data"}})}},"95f9":function(e,a,t){},"9df0":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"companyDetail"},[t("div",{staticClass:"newTitle"},[e._v(e._s(e.isEdit?"编辑公司":"创建公司"))]),t("el-form",{ref:"ruleForm",staticClass:"newApprovalForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"150px",size:"medium"}},[t("div",{staticClass:"msgTwo"},[t("div",{staticClass:"invoiceMsg"},[t("div",{staticClass:"invoiceMsgTitle"},[e._v("基础信息")]),t("el-form-item",{attrs:{label:"公司归属",prop:"company_ascription",filterable:"",clearable:""}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.company_ascription,callback:function(a){e.$set(e.ruleForm,"company_ascription",a)},expression:"ruleForm.company_ascription"}},e._l(e.companyBelongArr,(function(e,a){return t("el-option",{key:a,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"公司名称",prop:"name"}},[t("el-input",{attrs:{title:e.ruleForm.name,placeholder:"请输入"},on:{blur:e.nameBlur},model:{value:e.ruleForm.name,callback:function(a){e.$set(e.ruleForm,"name",a)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{label:"公司类型",prop:"company_type",filterable:"",clearable:""}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.company_type,callback:function(a){e.$set(e.ruleForm,"company_type",a)},expression:"ruleForm.company_type"}},e._l(e.companyTypeArr,(function(e,a){return t("el-option",{key:a,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"公司负责人",prop:"contacts_id"}},[t("el-select",{attrs:{filterable:"",placeholder:"请选择",clearable:""},model:{value:e.ruleForm.contacts_id,callback:function(a){e.$set(e.ruleForm,"contacts_id",a)},expression:"ruleForm.contacts_id"}},e._l(e.staffList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("AddressComponent",{ref:"address",attrs:{data:e.addressObj}}),t("el-form-item",{attrs:{label:"详细地址",prop:"address"}},[t("el-input",{attrs:{title:e.ruleForm.address,placeholder:"请输入"},model:{value:e.ruleForm.address,callback:function(a){e.$set(e.ruleForm,"address",a)},expression:"ruleForm.address"}})],1)],1),t("div",{staticClass:"invoiceMsg"},[t("div",{staticClass:"invoiceMsgTitle"},[e._v("扩展档案管理")]),t("el-form-item",{attrs:{label:"营业执照"}},[t("el-upload",{staticClass:"upload-demo",attrs:{action:"##","file-list":e.fileList,"before-upload":e.beforUpload,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,"on-preview":e.handleDown}},[t("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),t("el-form-item",{attrs:{label:"生产或代理设备品牌",prop:"brand"}},[t("el-input",{attrs:{title:e.ruleForm.brand,type:"textarea",rows:2,placeholder:"请输入"},model:{value:e.ruleForm.brand,callback:function(a){e.$set(e.ruleForm,"brand",a)},expression:"ruleForm.brand"}})],1),t("el-form-item",{attrs:{label:"实施交付能力",prop:"deliverability"}},[t("el-input",{attrs:{title:e.ruleForm.deliverability,type:"textarea",rows:2,placeholder:"请输入"},model:{value:e.ruleForm.deliverability,callback:function(a){e.$set(e.ruleForm,"deliverability",a)},expression:"ruleForm.deliverability"}})],1)],1)]),t("div",{staticClass:"invoiceMsg"},[t("div",{staticClass:"invoiceMsgTitle"},[e._v("开票信息")]),t("el-form-item",{attrs:{label:"公司名称",prop:"invoice_company_name"}},[t("el-input",{attrs:{title:e.ruleForm.invoice_company_name,placeholder:"请输入"},model:{value:e.ruleForm.invoice_company_name,callback:function(a){e.$set(e.ruleForm,"invoice_company_name",a)},expression:"ruleForm.invoice_company_name"}})],1),t("el-form-item",{attrs:{label:"社会统一信用代码",prop:"invoice_code"}},[t("el-input",{attrs:{title:e.ruleForm.invoice_code,placeholder:"请输入"},model:{value:e.ruleForm.invoice_code,callback:function(a){e.$set(e.ruleForm,"invoice_code",a)},expression:"ruleForm.invoice_code"}}),t("span",{staticStyle:{color:"red","padding-top":"10px"}},[e._v("开具专用发票需填写以下信息")])],1),t("el-form-item",{attrs:{label:"开户行"}},[t("el-input",{attrs:{title:e.ruleForm.invoice_open_bank,placeholder:"请输入"},model:{value:e.ruleForm.invoice_open_bank,callback:function(a){e.$set(e.ruleForm,"invoice_open_bank",a)},expression:"ruleForm.invoice_open_bank"}})],1),t("el-form-item",{attrs:{label:"账号"}},[t("el-input",{attrs:{title:e.ruleForm.invoice_bank_number,placeholder:"请输入"},model:{value:e.ruleForm.invoice_bank_number,callback:function(a){e.$set(e.ruleForm,"invoice_bank_number",a)},expression:"ruleForm.invoice_bank_number"}})],1),t("el-form-item",{attrs:{label:"电话"}},[t("el-input",{attrs:{title:e.ruleForm.invoice_tel,placeholder:"请输入"},model:{value:e.ruleForm.invoice_tel,callback:function(a){e.$set(e.ruleForm,"invoice_tel",a)},expression:"ruleForm.invoice_tel"}})],1),t("el-form-item",{attrs:{label:"地址"}},[t("el-input",{attrs:{title:e.ruleForm.invoice_address,placeholder:"请输入"},model:{value:e.ruleForm.invoice_address,callback:function(a){e.$set(e.ruleForm,"invoice_address",a)},expression:"ruleForm.invoice_address"}})],1)],1),t("div",{staticClass:"invoiceMsg",staticStyle:{border:"none"}},[e.handleAddBackBtn?t("el-button",{attrs:{type:"primary"},on:{click:e.handleAddBack}},[e._v("添加银行账户")]):e._e()],1),e._l(e.ruleForm.bank,(function(a,r){return e.handleAddBackBtn?e._e():t("div",{key:r,staticClass:"invoiceMsg"},[t("div",{staticStyle:{display:"flex"}},[t("div",{staticClass:"invoiceMsgTitle"},[e._v("银行账户信息")]),t("div",{staticClass:"invoiceMsgAddIcon",on:{click:e.addTable}},[e._v(" + ")]),a.id?e._e():t("div",{staticClass:"invoiceMsgDeleteIcon",staticStyle:{"margin-left":"20px"},on:{click:function(a){return e.deleteTable(r)}}},[e._v(" - ")]),e.isEdit&&a.id?t("el-button",{staticStyle:{"margin-left":"120px","margin-bottom":"10px"},attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.delMsg(a.id)}}},[e._v("删除银行账户信息")]):e._e()],1),t("el-form",{ref:"bank"+r,refInFor:!0,attrs:{model:a,"label-width":"150px"}},[t("el-form-item",{attrs:{label:"账户名称",prop:"account_name",required:""}},[t("el-input",{attrs:{title:a.account_name},model:{value:a.account_name,callback:function(t){e.$set(a,"account_name",t)},expression:"bank.account_name"}})],1),t("el-form-item",{attrs:{label:"开户行",prop:"open_bank",required:""}},[t("el-input",{attrs:{title:a.open_bank},model:{value:a.open_bank,callback:function(t){e.$set(a,"open_bank",t)},expression:"bank.open_bank"}})],1),t("el-form-item",{attrs:{label:"银行账号",prop:"bank_number",required:""}},[t("el-input",{attrs:{title:a.bank_number,oninput:"value=value.replace(/[^\\d]/g,'')"},model:{value:a.bank_number,callback:function(t){e.$set(a,"bank_number",t)},expression:"bank.bank_number"}})],1),t("el-form-item",{attrs:{label:"行号",prop:"bank_no"}},[t("el-input",{attrs:{title:a.bank_no},model:{value:a.bank_no,callback:function(t){e.$set(a,"bank_no",t)},expression:"bank.bank_no"}})],1),t("el-form-item",{attrs:{label:"备注信息"}},[t("el-input",{attrs:{title:a.remarks,type:"textarea",rows:2},model:{value:a.remarks,callback:function(t){e.$set(a,"remarks",t)},expression:"bank.remarks"}})],1)],1)],1)})),t("div",{staticClass:"invoiceMsg"},[t("div",{staticClass:"invoiceMsgTitle"},[e._v("现金账户信息")]),t("el-form-item",{attrs:{label:"账户名称"}},[t("el-input",{attrs:{title:e.ruleForm.cash_account_name,placeholder:"请输入"},model:{value:e.ruleForm.cash_account_name,callback:function(a){e.$set(e.ruleForm,"cash_account_name",a)},expression:"ruleForm.cash_account_name"}})],1),t("el-form-item",{attrs:{label:"保管人"}},[t("el-select",{attrs:{filterable:"",placeholder:"请选择",clearable:""},model:{value:e.ruleForm.cash_custodian,callback:function(a){e.$set(e.ruleForm,"cash_custodian",a)},expression:"ruleForm.cash_custodian"}},e._l(e.staffList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),t("div",{staticStyle:{margin:"0 0 40px 200px","text-align":"center"}},[t("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"primary"},on:{click:function(a){return e.nextStep("ruleForm")}}},[e._v("下一步")])],1)],2)],1)},l=[],n=t("5530"),o=t("c7eb"),i=t("1da1"),s=(t("d81d"),t("a434"),t("b0c0"),t("e9c4"),t("b64b"),t("a573"),t("35e8")),c=t("d041"),u=t("9437"),d=t("277f"),m=t("ed08"),p={components:{LabelElement:s["a"],AddressComponent:c["a"]},data:function(){return{handleAddBackBtn:!0,valueFlag:!1,id:"",isEdit:!1,fileUrl:"",fileList:[],addressObj:{labelAddress:"地区定位",province:"",city:"",area:""},companyBelongArr:[{value:"1",label:"集团公司"},{value:"2",label:"合作公司"}],companyTypeArr:[{value:"1",label:"一般纳税人"},{value:"2",label:"小规模公司"},{value:"3",label:"个体工商户"},{value:"4",label:"其它"}],ruleForm:{name:"",company_ascription:"",company_type:"",contacts_id:"",province:"",city:"",area:"",address:"",business_license:[],brand:"",deliverability:"",invoice_company_name:"",invoice_code:"",invoice_open_bank:"",invoice_bank_number:"",invoice_tel:"",invoice_address:"",cash_account_name:"",cash_custodian:"",bank:[]},rules:{contacts_id:[{required:!0,message:"请输入公司项目负责人",trigger:"blur"}],invoice_company_name:[{required:!0,message:"请输入公司名称",trigger:"blur"}],invoice_code:[{required:!0,message:"请输入社会统一信用代码",trigger:"blur"}],invoice_open_bank:[{required:!0,message:"请输入开户行",trigger:"blur"}],invoice_bank_number:[{required:!0,message:"请输入账号",trigger:"blur"}],invoice_address:[{required:!0,message:"请输入地址",trigger:"blur"}],account_name:[{required:!0,message:"请输入账户名称",trigger:"blur"}],open_bank:[{required:!0,message:"请输入开户行",trigger:"blur"}],bank_number:[{required:!0,message:"请输入银行账户",trigger:"blur"}],company_ascription:[{required:!0,message:"请选择公司归属",trigger:"change"}],name:[{required:!0,message:"请输入公司名称",trigger:"blur"}],company_type:[{required:!0,message:"请选择公司类型",trigger:"change"}]}}},mounted:function(){this.$route.params.id&&(this.id=this.$route.params.id,this.getEditFun({id:this.$route.params.id}),this.isEdit=!!this.$route.params.id)},computed:{staffList:function(){return this.$store.state.company.staffList}},methods:{handleAddBack:function(){this.handleAddBackBtn=!1,this.ruleForm.bank.push({account_name:"",open_bank:"",bank_number:"",bank_no:""})},delMsg:function(e){var a=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["s"])({id:e});case 2:r=t.sent,200==r.code&&a.getEditFun({id:a.id});case 4:case"end":return t.stop()}}),t)})))()},handleDown:function(e){Object(m["a"])(e.url)},nameBlur:function(){this.ruleForm.cash_account_name=this.ruleForm.name},getEditFun:function(e){var a=this;this.$store.dispatch("company/getDetails",Object(n["a"])({},e)).then((function(e){console.log("ResponseResponseResponse",e),a.ruleForm=null===e||void 0===e?void 0:e.data,a.ruleForm.company_ascription=a.ruleForm.company_ascription+"",a.ruleForm.company_type=a.ruleForm.company_type+"",a.ruleForm.bank.length?(a.valueFlag=!0,a.handleAddBackBtn=!1):a.handleAddBackBtn=!0,console.log("bankbankbankbankbankbank",a.ruleForm.bank),a.fileList=a.ruleForm.business_license?JSON.parse(a.ruleForm.business_license).map((function(e){return{url:e,name:a.getFileName(e)}})):[],a.addressObj={labelAddress:"地区定位",province:null===e||void 0===e?void 0:e.data.province,city:null===e||void 0===e?void 0:e.data.city,area:null===e||void 0===e?void 0:e.data.area},console.log("123",a.ruleForm)}))},addTable:function(e){this.ruleForm.bank.push({account_name:"",open_bank:"",bank_number:"",bank_no:""})},deleteTable:function(e,a){"input"==a&&this.ruleForm.arr.splice(e,1),this.ruleForm.bank.splice(e,1),0==this.ruleForm.bank&&(this.handleAddBackBtn=!0)},nextStep:function(e){var a=this;this.$refs[e].validate((function(e){var t=a.$refs.address.getFormData();if(e){var r=a;if(console.log("this.ruleForm.bank",r.ruleForm.bank),r.ruleForm.bank.length){var l=!0;if(r.ruleForm.bank.map((function(e){(e.money||0==e.money)&&delete e.money,(e.state||0==e.state)&&delete e.state,(e.status||0==e.status)&&delete e.status,(e.update_time||0==e.update_time)&&delete e.update_time,(e.create_time||0==e.create_time)&&delete e.create_time,(e.delete_time||0==e.delete_time)&&delete e.delete_time,""!=e.account_name&&""!=e.bank_number&&""!=e.open_bank||(r.$message("请完整填写银行账户信息"),l=!1)})),l){r.ruleForm.bank.map((function(e){e.company_id=a.$route.params.id}));var n=r.isEdit?"company/updateCompany":"company/addCompany";console.log("actionType",n),r.$store.dispatch(n,{id:r.isEdit?r.ruleForm.id:"",name:r.ruleForm.name,company_ascription:r.ruleForm.company_ascription,company_type:r.ruleForm.company_type,contacts_id:r.ruleForm.contacts_id+"",province:t.baseInfo&&t.baseInfo.province+"",city:t.baseInfo&&t.baseInfo.city+"",area:t.baseInfo&&t.baseInfo.area+"",business_license:JSON.stringify(r.fileList.map((function(e){return e.url}))),brand:r.ruleForm.brand,address:r.ruleForm.address,invoice_code:r.ruleForm.invoice_code,deliverability:r.ruleForm.deliverability,invoice_company_name:r.ruleForm.invoice_company_name,invoice_open_bank:r.ruleForm.invoice_open_bank,invoice_bank_number:r.ruleForm.invoice_bank_number,invoice_tel:r.ruleForm.invoice_tel,invoice_address:r.ruleForm.invoice_address,cash_account_name:r.ruleForm.cash_account_name,cash_custodian:r.ruleForm.cash_custodian,bank:JSON.stringify(r.ruleForm.bank)}).then((function(e){200==e.code?(r.$router.push({name:"CompanyList"}),r.$store.dispatch("company/updateAll","company")):r.$message(e.message)}))}}else{var o=r.isEdit?"company/updateCompany":"company/addCompany";console.log("actionType",o),a.$store.dispatch(o,{id:r.isEdit?a.ruleForm.id:"",name:a.ruleForm.name,company_ascription:a.ruleForm.company_ascription,company_type:a.ruleForm.company_type,contacts_id:a.ruleForm.contacts_id+"",province:t.baseInfo&&t.baseInfo.province+"",city:t.baseInfo&&t.baseInfo.city+"",area:t.baseInfo&&t.baseInfo.area+"",business_license:JSON.stringify(r.fileList.map((function(e){return e.url}))),brand:a.ruleForm.brand,address:a.ruleForm.address,invoice_code:a.ruleForm.invoice_code,deliverability:a.ruleForm.deliverability,invoice_company_name:a.ruleForm.invoice_company_name,invoice_open_bank:a.ruleForm.invoice_open_bank,invoice_bank_number:a.ruleForm.invoice_bank_number,invoice_tel:a.ruleForm.invoice_tel,invoice_address:a.ruleForm.invoice_address,cash_account_name:a.ruleForm.cash_account_name,cash_custodian:a.ruleForm.cash_custodian,bank:JSON.stringify(a.ruleForm.bank)}).then((function(e){200==e.code?(a.$router.push({name:"CompanyList"}),a.$store.dispatch("company/updateAll","company")):a.$message(e.message)}))}}}))},getValue:function(e){},beforUpload:function(e){var a=this,t=new FormData;return t.append("files",e),Object(u["a"])(t).then((function(t){200==t.code&&(e.url=t.data.file,a.fileList.push(e))})),!1},handleRemove:function(e,a){this.fileList=a},beforeRemove:function(){},getFileName:function(e){return-1!==e.lastIndexOf("?")?decodeURIComponent(e.substring(e.lastIndexOf("/")+1,e.lastIndexOf("?"))):decodeURIComponent(e.substring(e.lastIndexOf("/")+1))}}},b=p,v=(t("dff4"),t("2877")),_=Object(v["a"])(b,r,l,!1,null,"76d85886",null);a["default"]=_.exports},b8de:function(e,a,t){},d041:function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-form",{ref:"address",attrs:{model:e.address,"label-width":"150px",size:"medium",disabled:e.disabled}},[t("el-form-item",{attrs:{label:e.ruleForm.labelAddress}},[t("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[t("el-form-item",{attrs:{prop:"province"}},[t("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"省",filterable:"",clearable:""},on:{change:function(a){return e.qeuryAddress(e.address.province,"city")}},model:{value:e.address.province,callback:function(a){e.$set(e.address,"province",a)},expression:"address.province"}},e._l(e.provinceArr,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{prop:"city"}},[t("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"市",filterable:"",clearable:""},on:{change:function(a){return e.qeuryAddress(e.address.city,"area")}},model:{value:e.address.city,callback:function(a){e.$set(e.address,"city",a)},expression:"address.city"}},e._l(e.cityArr,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{prop:"area"}},[t("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"区",filterable:"",clearable:""},model:{value:e.address.area,callback:function(a){e.$set(e.address,"area",a)},expression:"address.area"}},e._l(e.areaArr,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)])],1)],1)},l=[],n=t("5530"),o=(t("d81d"),t("a573"),{props:["data"],data:function(e){return console.log("123123",e),{props:e,ruleForm:e.data||{},provinceArr:[],cityArr:[],areaArr:[],disabled:e.data.disabled||!1,address:{province:e.data.province,city:e.data.city,area:e.data.area}}},mounted:function(){console.log(92,this.data),this.qeuryAddress("0","province"),console.log("1231241231",this.address)},methods:{qeuryAddress:function(e,a,t){var r=this;console.log(108,a,e),this.$store.dispatch("user/requestList",{url:"/Publics/getArea",parent_id:e}).then((function(e){"province"==a&&e.data.map((function(e){r.provinceArr.push({label:e.title,value:e.id})})),"city"==a&&(t||(r.cityArr=[],r.address.city="",r.areaArr=[],r.address.area=""),console.log(121,e),e.data.map((function(e){r.cityArr.push({label:e.title,value:e.id})}))),"area"==a&&(t||(r.areaArr=[],r.address.area=""),e.data.map((function(e){r.areaArr.push({label:e.title,value:e.id})})))}))},getFormData:function(){return console.log("this.addressthis.address",this.address),console.log(148,this.address),{baseInfo:Object(n["a"])({},this.address)}}},watch:{data:{handler:function(e,a){console.log(155,e),this.address=e,e&&(this.cityArr=[],this.areaArr=[],this.qeuryAddress(e.province,"city",!0),this.qeuryAddress(e.city,"area",!0),this.address={province:e.province,city:e.city,area:e.area},console.log("2222",this.address))},deep:!0}}}),i=o,s=t("2877"),c=Object(s["a"])(i,r,l,!1,null,"ff4ff5ce",null);a["a"]=c.exports},dff4:function(e,a,t){"use strict";t("95f9")},eaad:function(e,a,t){"use strict";t("b8de")},ed08:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return o})),t.d(a,"c",(function(){return i}));t("53ca"),t("d81d"),t("a434"),t("d3b7"),t("4d63"),t("ac1f"),t("2c3e"),t("00b4"),t("25f0"),t("4d90"),t("5319"),t("0643"),t("4e3e"),t("a573"),t("159b");var r=t("21a6"),l=t("25ca");t("bc3a"),t("aeb1");function n(e,a,t,n){var o=[],i=[],s=function(e){var a=0;for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a++;return a};for(var c in e)if(console.log("------------------------"),Object.prototype.hasOwnProperty.call(e,c)){var u=e[c],d=[];for(var m in u)if(Object.prototype.hasOwnProperty.call(u,m)){var p=u[m];d.push(p),i.length<s(u)&&i.push(m)}o.push(d)}var b=[];t.map((function(e,a){"快速操作"!=e&&"详情"!=e&&b.push(e)})),o.splice(0,0,i,b),console.log("excel_data",l);var v=l["utils"].aoa_to_sheet(o),_=l["utils"].book_new(),f=[{hidden:!0}];v["!rows"]=f,l["utils"].book_append_sheet(_,v,n);var y=l["write"](_,{bookType:"xlsx",type:"array"}),h=new Blob([y],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});Object(r["saveAs"])(h,a+".xlsx")}function o(e){var a=-1!==e.lastIndexOf("?")?decodeURIComponent(e.substring(e.lastIndexOf("/")+1,e.lastIndexOf("?"))):decodeURIComponent(e.substring(e.lastIndexOf("/")+1)),t=a.substring(a.lastIndexOf(".")+1);if("png"==t||"jpg"==t||"pdf"==t){var l=document.createElement("a");l.href=e,l.download=a,l.target="_blank",l.click()}else fetch(e,{mode:"no-cors"}).then((function(e){return e.blob()})).then((function(e){console.log("blob",e),Object(r["saveAs"])(e,a)}))}function i(e,a,t){console.log("self",e);var r=e.$router.resolve({name:a,query:t});window.open(r.href,"_blank")}}}]);