(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a3337c4"],{3841:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"g",(function(){return i})),a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"f",(function(){return s})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return d}));var r=a("b775");function n(e){return Object(r["a"])({url:"/Staffs/add",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/Staffs/update",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/Staffs/getInfo",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/Staffs/delete",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/Staffs/getList",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/Publics/getArea",method:"post",data:e})}function d(e){return Object(r["a"])({url:"/Payments/deleteStaffBank",method:"post",data:e})}},6582:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABAFJREFUaEPdWs9PE0EU/qYUo4IhGqDYgxBjBDXBRCV6MSb8AXrzZk0MxIM/DuoBDmgU6Qk9iB4sJ/Hm0cSjJqgHUPFHlLT4G6NNWwoIFKyF7jMz7eK23XZ3u93WuqemO/Pm+958896bmWUowOOnmS0VWD5EYG0A7QJYE4B6AFVJ84sAQgB9Bdg4Az2Po3LYyTZ9Mzs8y9eAn/y1Fah0EaSjANufnx0aZbDdi2N5yMmc4XxsGCbAvW3DygUApwEY7p8FJAG4KcHeb3RWDAEI0lQPgS4XEHg6H2JglxysrlfvbOgi4KepvTZIt/KXil44cjsalWA75WR1Y1o9NQkEKXiMwO5Y6PVsGImBjjuY424uEjkJBGnqHIGuaXnByvcM7LyD1V3PNkZWAv8CeBl0LhKqBJKyGbLSs0ZtM5BLTU4ZBBILlp6XQPNanEgCa0tf2BkEAhQcKV600cKcEWVHG5jjgPLfFALJOH/FqNlitmdgF5V5YpVAMsN+/QelkzENEuxNcsZeJRCg0A0AZ4rpTeVYQ9/u48jmdtRUVuuBMNDA6s/yhoIAL8xssIdK4X2JJFz1efAkPIbGKid6Wk6icb1TiwRJWKnnBaAgUKqYvyytwD3hwdPwq1XAeknIuUEQKEXk+R2PCc+PzLzJ8Pbummb0t/KCN9dDIiKx5OKd1JqzQr5fikfR5/Pg2cxbVbP6CAAS7I2s2Fk3El9Cn9eDF7PjquD1SiixgMnFihl95pYjQvMvZ72mwScNDLAABR8CrF2vRKZjc3gQGIZry2G9XUS72dg83BODeP3TVyjwAOgRn4FPALbqQTO55Eev7zYmF/04WLsH3c2dqLTZNbtOx37iqteDd/MfCghemPrMCSwA0MweSvAyigObWtHV0oGqinVZSYSi08Lz4/PcT5mPEc2rdI9wApKeBNbrvY3H4RcZNvZt3Imu5k7VDBqIhkW08S18sQI8t0mmCXArrTXb0d3Sgdo1G1eB/oiG4PYO4n2El1cF97xsUBDIW0JKWDs2bBVycq6tw/dfAfT5BvExon5uZVI2ymGFhPJaxGpe3VbdiK7mE3D7BvF58buVnpdt80VsLIyqLWYlUu5dHqUslI3CdCKMGi6jtUgUB7wYZSDvUsIIiQJqPsU3opQwU8zpIWEVeM5EFHP8h5lyOhcJK8EDyXKaEzC7oVEjYS14XokmTuwKtqVUkrAaPM/AKVvKhIyMR6P0aCNXqgY256rhVsefqZt63qHsj1WSa4FfYJTnwZY8bWYiko6pN9kkEXmURv6/w92ElMStTHker8vTYzY3mNRKWsmQ/Zbm/71i+jsTZXzJJ5Mo62tWpRjL9qJbSaKsPzVIJVKmH3uohcdSfm7zBx1kT++F89WDAAAAAElFTkSuQmCC"},9437:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("b775");function n(e){return Object(r["a"])({url:"Publics/upload",method:"post",data:e,headers:{"content-type":"multipart/form-data"}})}},"96df":function(e,t,a){},bcbf:function(e,t,a){"use strict";a("d41b")},cbbc:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("h3",{staticClass:"main-title"},[e._v(e._s("create"==e.type?"创建人员":"编辑人员"))]),a("div",{staticClass:"main-step"},[a("el-steps",{attrs:{active:e.active,"finish-status":"success"}},[a("el-step",{attrs:{title:"填写信息",description:"创建人员"}}),a("el-step",{attrs:{title:"扩展档案",description:"详细信息"}}),a("el-step",{attrs:{title:"完成创建",description:"创建成功"}})],1),a("div",{staticClass:"step-content"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0===e.active,expression:"active === 0"}]},[a("baseInfo",{ref:"baseInfo",attrs:{detailData:e.detailData,type:e.type},on:{callback:e.callbackBaseInfo}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.active,expression:"active === 1"}]},[a("extendInfo",{ref:"extendInfo",attrs:{detailData:e.detailData}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:3===e.active,expression:"active === 3"}]},[a("createComplete",{attrs:{backWord:"查看人员",goToWord:"create"===e.type?"再次创建":"再次修改",tips:"create"===e.type?"人员创建成功":"人员修改成功",handleBack:e.handleBack,Recreate:e.Recreate}})],1)]),a("div",{staticClass:"step-button"},[1===e.active?a("el-button",{on:{click:function(t){e.active--}}},[e._v("上一步")]):e._e(),e.active<1?a("el-button",{attrs:{type:"primary"},on:{click:e.handleNext}},[e._v("下一步")]):e._e(),1===e.active?a("el-button",{attrs:{type:"primary"},on:{click:e.handleClick}},[e._v(e._s("create"===e.type?"创建":"修改"))]):e._e()],1)],1)])},n=[],i=a("c7eb"),o=a("5530"),l=a("1da1"),s=(a("d81d"),a("e9c4"),a("b64b"),a("d3b7"),a("0643"),a("4e3e"),a("a573"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("h4",{staticClass:"card-title"},[e._v("基础信息")]),a("el-form",{ref:"baseForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"人员类型",prop:"staff_type"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择人员类型",filterable:"",clearable:""},model:{value:e.ruleForm.staff_type,callback:function(t){e.$set(e.ruleForm,"staff_type",t)},expression:"ruleForm.staff_type"}},[a("el-option",{attrs:{label:"集团员工",value:"1"}}),a("el-option",{attrs:{label:"合作伙伴",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{title:e.ruleForm.name},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),a("el-form-item",{attrs:{label:"手机号",prop:"tel"}},[a("el-input",{attrs:{title:e.ruleForm.tel},model:{value:e.ruleForm.tel,callback:function(t){e.$set(e.ruleForm,"tel",t)},expression:"ruleForm.tel"}})],1),a("el-form-item",{attrs:{label:"邮箱",placeholder:"请输入邮箱"}},[a("el-input",{attrs:{title:e.ruleForm.email},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),a("el-form-item",{attrs:{label:"常驻地区"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{prop:"province"}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"省",filterable:"",clearable:""},on:{change:e.provinceChange},model:{value:e.ruleForm.province,callback:function(t){e.$set(e.ruleForm,"province",t)},expression:"ruleForm.province"}},e._l(e.provinceArr,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{prop:"city"}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"市",filterable:"",clearable:""},on:{change:e.cityChange},model:{value:e.ruleForm.city,callback:function(t){e.$set(e.ruleForm,"city",t)},expression:"ruleForm.city"}},e._l(e.cityArr,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{prop:"area"}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"区",filterable:"",clearable:""},model:{value:e.ruleForm.area,callback:function(t){e.$set(e.ruleForm,"area",t)},expression:"ruleForm.area"}},e._l(e.areaArr,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1)],1)],1),a("el-form-item",{attrs:{label:"详细地址"}},[a("el-input",{attrs:{title:e.ruleForm.address},model:{value:e.ruleForm.address,callback:function(t){e.$set(e.ruleForm,"address",t)},expression:"ruleForm.address"}})],1)],1)],1),e.handleAddBackBtn?a("el-button",{attrs:{type:"primary"},on:{click:e.handleAddBack}},[e._v("添加银行账户")]):e._e(),e.handleAddBackBtn?e._e():e._l(e.bankInformation,(function(t,r){return a("el-card",{key:r,attrs:{shadow:"never"}},[a("h4",{staticClass:"card-title"},[a("span",[e._v("银行基本信息")]),a("i",{staticClass:"el-icon-circle-plus",staticStyle:{"margin-left":"20px",cursor:"pointer"},on:{click:e.addBank}}),t.id?e._e():a("i",{staticClass:"el-icon-remove",staticStyle:{"margin-left":"20px",cursor:"pointer"},on:{click:function(a){return e.removeBank(t)}}}),"edit"==e.type&&t.id?a("el-button",{staticStyle:{"margin-left":"120px"},attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.delMsg(t.id,r)}}},[e._v("删除银行账户信息")]):e._e()],1),a("el-form",{ref:"bank"+r,refInFor:!0,attrs:{model:t,"label-width":"100px",rules:e.rules}},[a("el-form-item",{attrs:{label:"账户名称",prop:"bank_name"}},[a("el-input",{attrs:{title:t.bank_name},model:{value:t.bank_name,callback:function(a){e.$set(t,"bank_name",a)},expression:"bank.bank_name"}})],1),a("el-form-item",{attrs:{label:"银行账号",prop:"bank_number"}},[a("el-input",{attrs:{title:t.bank_number,oninput:"value=value.replace(/[^\\d]/g,'')"},model:{value:t.bank_number,callback:function(a){e.$set(t,"bank_number",a)},expression:"bank.bank_number"}})],1),a("el-form-item",{attrs:{label:"开户银行",prop:"open_bank"}},[a("el-input",{attrs:{title:t.open_bank},model:{value:t.open_bank,callback:function(a){e.$set(t,"open_bank",a)},expression:"bank.open_bank"}})],1),a("el-form-item",{attrs:{label:"备注信息",prop:"remarks"}},[a("el-input",{attrs:{title:t.remarks,type:"textarea",rows:3},model:{value:t.remarks,callback:function(a){e.$set(t,"remarks",a)},expression:"bank.remarks"}})],1)],1),0===r?a("span",{staticClass:"tips"},[e._v("默认创建现金账户")]):e._e()],1)}))],2)}),c=[],d=(a("7db0"),a("a434"),a("b0c0"),a("07ac"),a("fffc"),a("784f")),u=a.n(d),m=a("3841"),p={props:["detailData","type"],data:function(){return{handleAddBackBtn:!0,provinceArr:[],cityArr:[],areaArr:[],ruleForm:{name:"",staff_type:"",email:"",tel:"",province:"",city:"",area:"",address:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"change"}],staff_type:[{required:!0,message:"请选择人员类型",trigger:"change"}],email:[{required:!0,message:"请输入邮箱",trigger:"change"},{pattern:/^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/,message:"请输入正确的邮箱",trigger:"change"}],tel:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"请输入正确的手机号",trigger:"change"}],address:[{required:!0,message:"请输入详细地址",trigger:"change"}],bank_name:[{required:!0,message:"请输入账户名称",trigger:"change"}],bank_number:[{required:!0,message:"请输入银行账号",trigger:"change"}],open_bank:[{required:!0,message:"请输入开户银行",trigger:"change"}]},bankInformation:[]}},mounted:function(){var e=this;console.log("tttttttttt",this.props);var t=function(){var t=Object(l["a"])(Object(i["a"])().mark((function t(){var a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(m["d"])({parent_id:0});case 2:a=t.sent,e.provinceArr=a.data,console.log("this.provinceArrthis.provinceArr"),e.provinceArr;case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()},methods:{handleAddBack:function(){this.handleAddBackBtn=!1,this.bankInformation.push({bank_name:"",bank_number:"",open_bank:"",remarks:""})},delMsg:function(e){var t=this;return Object(l["a"])(Object(i["a"])().mark((function a(){var r;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(m["a"])({id:e});case 2:r=a.sent,200==r.code?t.$emit("callback"):(t.bankInformation.splice(index,1),0==t.bankInformation.length&&t.bankInformation.push({bank_name:"",bank_number:"",open_bank:"",remarks:""}));case 4:case"end":return a.stop()}}),a)})))()},addBank:function(){this.bankInformation.push({bank_name:"",bank_number:"",open_bank:"",remarks:""})},removeBank:function(e){var t=this.bankInformation.indexOf(e);-1!==t&&this.bankInformation.splice(t,1),0==this.bankInformation.length&&(this.handleAddBackBtn=!0)},getFormData:function(){var e=this,t=!1,a=[];if(this.$refs["baseForm"].validate((function(e){e&&(t=!0)})),this.bankInformation.forEach((function(t,r){e.bankInformation.length&&e.bankInformation[0].bank_number&&e.$refs["bank"+r][0].validate((function(e){a.push(e)}))})),t&&a.every((function(e){return e})))return Object(o["a"])(Object(o["a"])({},this.ruleForm),{},{bank:this.bankInformation.length>0&&this.bankInformation.find((function(e){return Object.values(e).find((function(e){return e}))}))?JSON.stringify(this.bankInformation.map((function(t){return e.detailData?Object(o["a"])(Object(o["a"])({},t),{},{staff_id:e.detailData.id}):t}))):"[]"})},resetForm:function(){var e=this;this.$refs["baseForm"].resetFields(),this.bankInformation.forEach((function(t,a){e.$refs["bank"+a][0].resetFields()}))},provinceChange:function(e){var t=this;this.ruleForm.city="",this.ruleForm.area="",t.cityArr=[],t.areaArr=[];var a=t.provinceArr.find((function(t){return t.id===e})).id;Object(m["d"])({parent_id:a}).then((function(e){t.cityArr=e.data}))},cityChange:function(e){var t=this;this.ruleForm.area="",t.areaArr=[];var a=t.cityArr.find((function(t){return t.id===e})).id;Object(m["d"])({parent_id:a}).then((function(e){t.areaArr=e.data}))},regionChange:function(e,t){var a=this;return Object(l["a"])(Object(i["a"])().mark((function r(){var n,o,l;return Object(i["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(m["d"])({parent_id:e});case 2:return n=r.sent,a.cityArr=n.data,o=a.cityArr.find((function(e){return e.id===t})).id,r.next=7,Object(m["d"])({parent_id:o});case 7:l=r.sent,a.areaArr=l.data;case 9:case"end":return r.stop()}}),r)})))()}},components:{VDistpicker:u.a},watch:{detailData:{handler:function(e){var t=this;return Object(l["a"])(Object(i["a"])().mark((function a(){return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:e&&(t.handleAddBackBtn=!e.bank.length,t.ruleForm={name:e.name,staff_type:e.staff_type+"",email:e.email,tel:e.tel,province:e.province,city:e.city,area:e.area,address:e.address},t.bankInformation=0==e.bank.length?[]:e.bank,e.bank&&!e.bank[0].bank_name&&(t.bankInformation[0].bank_name=e.name));case 1:case"end":return a.stop()}}),a)})))()},deep:!0},ruleForm:{handler:function(e,t){var a=this;return Object(l["a"])(Object(i["a"])().mark((function r(){return Object(i["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.province===t.province&&e.city===t.city||a.regionChange(e.province,e.city);case 1:case"end":return r.stop()}}),r)})))()},deep:!0}}},b=p,f=(a("f429"),a("2877")),h=Object(f["a"])(b,s,c,!1,null,"557d7104",null),v=h.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("h4",{staticClass:"card-title"},[e._v("基础信息")]),a("el-form",{ref:"extendForm_base",attrs:{model:e.extendForm_base,rules:e.rules,"label-width":"180px"}},[a("el-form-item",{attrs:{label:"所属销售负责人",prop:"sales_manager"}},[a("TypeSearch",{attrs:{type:"staff"},model:{value:e.extendForm_base.sales_manager,callback:function(t){e.$set(e.extendForm_base,"sales_manager",t)},expression:"extendForm_base.sales_manager"}})],1),a("el-form-item",{attrs:{label:"资源池",prop:"resource_pool"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择资源池",clearable:""},model:{value:e.extendForm_base.resource_pool,callback:function(t){e.$set(e.extendForm_base,"resource_pool",t)},expression:"extendForm_base.resource_pool"}},[a("el-option",{attrs:{label:"公海",value:"1"}}),a("el-option",{attrs:{label:"私海",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"照片",prop:"head"}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,accept:"image/*"}},[e.extendForm_base.head?a("img",{staticClass:"avatar",attrs:{src:e.extendForm_base.head,alt:""}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[a("el-input",{attrs:{title:e.extendForm_base.nickname,placeholder:"请输入昵称"},model:{value:e.extendForm_base.nickname,callback:function(t){e.$set(e.extendForm_base,"nickname",t)},expression:"extendForm_base.nickname"}})],1),a("el-form-item",{attrs:{label:"性别",prop:"sex"}},[a("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.extendForm_base.sex,callback:function(t){e.$set(e.extendForm_base,"sex",t)},expression:"extendForm_base.sex"}},[a("el-option",{attrs:{label:"男",value:"1"}}),a("el-option",{attrs:{label:"女",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"所属公司",prop:"company"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:"",filterable:""},model:{value:e.extendForm_base.company,callback:function(t){e.$set(e.extendForm_base,"company",t)},expression:"extendForm_base.company"}},e._l(e.companyList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"职务",prop:"position"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择职务",clearable:"",filterable:""},model:{value:e.extendForm_base.position,callback:function(t){e.$set(e.extendForm_base,"position",t)},expression:"extendForm_base.position"}},[a("el-option",{attrs:{label:"董事长",value:"1"}}),a("el-option",{attrs:{label:"总经理",value:"2"}}),a("el-option",{attrs:{label:"副总经理",value:"3"}}),a("el-option",{attrs:{label:"财务经理",value:"4"}}),a("el-option",{attrs:{label:"运营经理",value:"5"}}),a("el-option",{attrs:{label:"商务经理",value:"6"}}),a("el-option",{attrs:{label:"市场经理",value:"7"}}),a("el-option",{attrs:{label:"员工",value:"8"}}),a("el-option",{attrs:{label:"其他",value:"9"}})],1)],1),a("el-form-item",{attrs:{label:"生日",prop:"birthday"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.extendForm_base.birthday,callback:function(t){e.$set(e.extendForm_base,"birthday",t)},expression:"extendForm_base.birthday"}})],1),a("el-form-item",{attrs:{label:"籍贯"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{prop:"native_place_province"}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"省",filterable:"",clearable:""},on:{change:e.provinceChange},model:{value:e.extendForm_base.native_place_province,callback:function(t){e.$set(e.extendForm_base,"native_place_province",t)},expression:"extendForm_base.native_place_province"}},e._l(e.provinceArr,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{prop:"native_place_city"}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"市",filterable:"",clearable:""},model:{value:e.extendForm_base.native_place_city,callback:function(t){e.$set(e.extendForm_base,"native_place_city",t)},expression:"extendForm_base.native_place_city"}},e._l(e.cityArr,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1)],1)],1)],1)],1),a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("h4",{staticClass:"card-title"},[e._v("扩展信息")]),a("el-form",{ref:"extendForm_extend",attrs:{model:e.extendForm_extend,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"性格特征",prop:"character"}},[a("el-input",{attrs:{title:e.extendForm_extend.character,placeholder:"请输入性格特征"},model:{value:e.extendForm_extend.character,callback:function(t){e.$set(e.extendForm_extend,"character",t)},expression:"extendForm_extend.character"}})],1),a("el-form-item",{attrs:{label:"兴趣爱好",prop:"hobby"}},[a("el-input",{attrs:{title:e.extendForm_extend.hobby,placeholder:"请输入兴趣爱好"},model:{value:e.extendForm_extend.hobby,callback:function(t){e.$set(e.extendForm_extend,"hobby",t)},expression:"extendForm_extend.hobby"}})],1),a("el-form-item",{attrs:{label:"社交特点",prop:"characteristic"}},[a("el-input",{attrs:{title:e.extendForm_extend.characteristic,placeholder:"请输入社交特点"},model:{value:e.extendForm_extend.characteristic,callback:function(t){e.$set(e.extendForm_extend,"characteristic",t)},expression:"extendForm_extend.characteristic"}})],1),a("el-form-item",{attrs:{label:"习惯特征",prop:"habit"}},[a("el-input",{attrs:{title:e.extendForm_extend.habit,placeholder:"请输入习惯特征"},model:{value:e.extendForm_extend.habit,callback:function(t){e.$set(e.extendForm_extend,"habit",t)},expression:"extendForm_extend.habit"}})],1),a("el-form-item",{attrs:{label:"忌讳事项",prop:"taboos"}},[a("el-input",{attrs:{title:e.extendForm_extend.taboos,placeholder:"请输入忌讳事项"},model:{value:e.extendForm_extend.taboos,callback:function(t){e.$set(e.extendForm_extend,"taboos",t)},expression:"extendForm_extend.taboos"}})],1),a("el-form-item",{attrs:{label:"婚姻状况",prop:"marriage"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择婚姻状况",clearable:""},model:{value:e.extendForm_extend.marriage,callback:function(t){e.$set(e.extendForm_extend,"marriage",t)},expression:"extendForm_extend.marriage"}},[a("el-option",{attrs:{label:"未婚",value:"1"}}),a("el-option",{attrs:{label:"已婚",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"子女情况",prop:"children"}},[a("el-input",{attrs:{title:e.extendForm_extend.children,placeholder:"请输入子女情况"},model:{value:e.extendForm_extend.children,callback:function(t){e.$set(e.extendForm_extend,"children",t)},expression:"extendForm_extend.children"}})],1),a("el-form-item",{attrs:{label:"年收入",prop:"income"}},[a("el-input",{attrs:{title:e.extendForm_extend.income,placeholder:"请输入年收入"},model:{value:e.extendForm_extend.income,callback:function(t){e.$set(e.extendForm_extend,"income",t)},expression:"extendForm_extend.income"}})],1),a("el-form-item",{attrs:{label:"消费习惯",prop:"consumption"}},[a("el-input",{attrs:{title:e.extendForm_extend.consumption,placeholder:"请输入消费习惯"},model:{value:e.extendForm_extend.consumption,callback:function(t){e.$set(e.extendForm_extend,"consumption",t)},expression:"extendForm_extend.consumption"}})],1),a("el-form-item",{attrs:{label:"销售策略",prop:"sales_strategy"}},[a("el-input",{attrs:{title:e.extendForm_extend.sales_strategy,placeholder:"请输入销售策略"},model:{value:e.extendForm_extend.sales_strategy,callback:function(t){e.$set(e.extendForm_extend,"sales_strategy",t)},expression:"extendForm_extend.sales_strategy"}})],1)],1)],1)],1)},x=[],k=(a("25f0"),a("3ca3"),a("ddb0"),a("2b3d"),a("bf19"),a("9861"),a("9437")),y={props:{detailData:null|Object},data:function(){return{provinceArr:[],cityArr:[],extendForm_base:{sales_manager:"",resource_pool:"",head:"",nickname:"",sex:"",company:"",position:"",birthday:"",native_place_province:"",native_place_city:""},rules:{},extendForm_extend:{character:"",hobby:"",characteristic:"",habit:"",taboos:"",marriage:"",children:"",income:"",consumption:"",sales_strategy:""}}},computed:{companyList:function(){return this.$store.state.company.companyList}},methods:{getFormData:function(){var e=!1,t=!1;if(this.$refs["extendForm_base"].validate((function(t){return t&&(e=!0)})),this.$refs["extendForm_extend"].validate((function(e){return e&&(t=!0)})),e&&t)return Object(o["a"])(Object(o["a"])({},this.extendForm_base),this.extendForm_extend)},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t=this,a=new FormData;return a.append("files",e),Object(k["a"])(a).then((function(e){t.extendForm_base.head=e.data.file})),!1},resetForm:function(){this.$refs["extendForm_base"].resetFields(),this.$refs["extendForm_extend"].resetFields()},provinceChange:function(e){var t=this;return Object(l["a"])(Object(i["a"])().mark((function a(){var r,n;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=t,r.cityArr=[],r.extendForm_base.native_place_city="",n=r.provinceArr.find((function(t){return t.id===e})).id,Object(m["d"])({parent_id:n}).then((function(e){r.cityArr=e.data}));case 5:case"end":return a.stop()}}),a)})))()},getStaffListByDataAuthority:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return Object(l["a"])(Object(i["a"])().mark((function e(){var t;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,getStaffListByDataAuthority();case 2:t=e.sent,console.log("res",t);case 4:case"end":return e.stop()}}),e)})))()}))},mounted:function(){},components:{VDistpicker:u.a,TypeSearch:function(){return a.e("chunk-2d0e19ad").then(a.bind(null,"7ac0"))}},watch:{detailData:{handler:function(e){var t=this;return Object(l["a"])(Object(i["a"])().mark((function a(){return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:e&&(t.extendForm_base={sales_manager:0==e.sales_manager?null:e.sales_manager,resource_pool:0==e.resource_pool?null:e.resource_pool+"",head:e.head,nickname:e.nickname,sex:e.sex||"",company:0==e.company?null:e.company,position:0==e.position?null:e.position,birthday:e.birthday,native_place_province:0==e.native_place_province?null:e.native_place_province,native_place_city:0==e.native_place_city?null:e.native_place_city},t.extendForm_extend={character:e.character,hobby:e.hobby,characteristic:e.characteristic,habit:e.habit,taboos:e.taboos,marriage:0==e.marriage?null:e.marriage+"",children:e.children,income:e.income,consumption:e.consumption,sales_strategy:e.sales_strategy});case 1:case"end":return a.stop()}}),a)})))()},deep:!0},extendForm_base:{handler:function(e,t){var a=this;return Object(l["a"])(Object(i["a"])().mark((function r(){var n,o;return Object(i["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e.native_place_province||e.native_place_province===t.native_place_province){r.next=7;break}return r.next=3,Object(m["d"])({parent_id:0});case 3:n=r.sent,a.provinceArr=n.data,o=a.provinceArr.find((function(t){return t.id===e.native_place_province})).id,Object(m["d"])({parent_id:o}).then((function(e){a.cityArr=e.data}));case 7:case"end":return r.stop()}}),r)})))()},deep:!0}},beforeCreate:function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){var a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(m["d"])({parent_id:0});case 2:a=t.sent,e.provinceArr=a.data;case 4:case"end":return t.stop()}}),t)})))()}},F=y,g=(a("f90e"),Object(f["a"])(F,_,x,!1,null,"11c407ae",null)),A=g.exports,j=a("ba84"),O={data:function(){return{active:0,baseInfoData:{},extendInfoData:{},detailData:null,type:"create",id:null}},methods:{callbackBaseInfo:function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){var a,r,n;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(m["e"])({id:e.id});case 2:a=t.sent,r=a.data,Object.keys(r).forEach((function(e){0==r[e]&&(r[e]="")})),n=Object(o["a"])({},r),e.detailData=n;case 7:case"end":return t.stop()}}),t)})))()},handleNext:function(){var e=this,t=this.$refs.baseInfo.getFormData();if(this.$refs.baseInfo.bankInformation.length){var a=!0;if(this.$refs.baseInfo.bankInformation.map((function(t){console.log("itemitemitemitemitem",t),""!=t.bank_name&&""!=t.bank_number&&""!=t.open_bank||(e.$message("请完整填写账号信息"),a=!1)})),a){if(!t)return;this.baseInfoData=t,this.active+=1}}else{if(!t)return;this.baseInfoData=t,this.active+=1}},handleClick:function(){var e=this;if(this.extendInfoData=this.$refs.extendInfo.getFormData(),this.extendInfoData)if("edit"===this.type){var t=JSON.parse(this.baseInfoData.bank);t.map((function(e){console.log("2222222222",e),(e.money||0==e.money)&&delete e.money,(e.state||0==e.state)&&delete e.state,(e.status||0==e.status)&&delete e.status,(e.update_time||0==e.update_time)&&delete e.update_time,(e.create_time||0==e.create_time)&&delete e.create_time,(e.delete_time||0==e.delete_time)&&delete e.delete_time})),this.baseInfoData.bank=JSON.stringify(t),Object(m["g"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},this.baseInfoData),this.extendInfoData),{},{id:this.id})).then((function(t){console.log("res",t),200===t.code&&(e.active=3,e.$store.dispatch("company/updateAll","staff"))}))}else Object(m["b"])(Object(o["a"])(Object(o["a"])({},this.baseInfoData),this.extendInfoData)).then((function(t){200===t.code&&(e.active=3,e.id=t.data.id,e.$store.dispatch("company/updateAll","staff"))}))},Recreate:function(){"create"===this.type&&(this.$refs.baseInfo.resetForm(),this.$refs.extendInfo.resetForm()),this.active=0},handleBack:function(){console.log("this.id",this.id),this.$router.push({name:"personnel_detail",params:{id:this.id}})}},components:{baseInfo:v,extendInfo:A,createComplete:j["a"]},created:function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){var a,r,n,l;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.$route.params.id,"number"!==typeof a){t.next=10;break}return e.type="edit",e.id=a,t.next=6,Object(m["e"])({id:a});case 6:r=t.sent,n=r.data,l=Object(o["a"])(Object(o["a"])({},n),{},{area:0==n.area?"":n.area,city:0==n.city?"":n.city,province:0==n.province?"":n.province}),e.detailData=l;case 10:case"end":return t.stop()}}),t)})))()}},w=O,I=(a("bcbf"),Object(f["a"])(w,r,n,!1,null,"a8a2589c",null));t["default"]=I.exports},d41b:function(e,t,a){},f429:function(e,t,a){"use strict";a("fc74")},f90e:function(e,t,a){"use strict";a("96df")},fc74:function(e,t,a){}}]);