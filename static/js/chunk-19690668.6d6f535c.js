(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19690668"],{"2ae4":function(e,t,a){},3841:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"g",(function(){return r})),a.d(t,"e",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"f",(function(){return i})),a.d(t,"d",(function(){return d})),a.d(t,"a",(function(){return l}));var n=a("b775");function s(e){return Object(n["a"])({url:"/Staffs/add",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/Staffs/update",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/Staffs/getInfo",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/Staffs/delete",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/Staffs/getList",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/Publics/getArea",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/Payments/deleteStaffBank",method:"post",data:e})}},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-ps":"4c98","./ar-ps.js":"4c98","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku-kmr":"7558","./ku-kmr.js":"7558","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e9","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e9","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"4c04":function(e,t,a){"use strict";a("2ae4")},"56c3":function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"j",(function(){return r})),a.d(t,"e",(function(){return c})),a.d(t,"h",(function(){return o})),a.d(t,"i",(function(){return i})),a.d(t,"f",(function(){return d})),a.d(t,"d",(function(){return l})),a.d(t,"g",(function(){return u})),a.d(t,"l",(function(){return m})),a.d(t,"k",(function(){return f})),a.d(t,"a",(function(){return b})),a.d(t,"c",(function(){return p}));var n=a("b775");function s(e){return Object(n["a"])({url:"/Payments/add",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/Payments/getList",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/Payments/delete",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/Payments/getCompanyBankList",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/Payments/getCompanyCashList",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/Payments/disabledCompanyBank",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/Payments/deleteCompanyBank",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/Payments/fundTransfer",method:"post",data:e})}function m(e){return Object(n["a"])({url:"/Payments/getDraftList",method:"post",data:e})}function f(e){return Object(n["a"])({url:"/Payments/draftInfo?id=".concat(e.id),method:"post",data:e})}function b(e){return Object(n["a"])({url:e.id?"/Payments/editDraft":"/Payments/draftAdd",method:"post",data:e})}function p(e){return Object(n["a"])({url:"/Payments/delDraft",method:"post",data:e})}},b281:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("searchComponent",{attrs:{"search-config":e.searchConfig},on:{search:e.handleSearch}}),a("div",{staticClass:"extend-action"},[a("el-button",{attrs:{size:"small"},on:{click:e.batchExport}},[e._v("批量导出")])],1),a("customTable",{attrs:{columns:e.columns,"data-source":e.dataSource,total:e.total,height:"calc(100vh - 310px)",loading:e.loading},on:{selectChange:e.handleSelectChange,pageChange:e.handlePageChange},scopedSlots:e._u([{key:"action",fn:function(t){return[a("div",{staticClass:"action"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return e.handleTransfer(t.data)}}},[e._v("现金取款")]),a("el-button",{staticStyle:{margin:"0"},attrs:{size:"small",type:"primary"},on:{click:function(a){return e.handleEdit(t.data)}}},[e._v("校正")]),a("el-button",{staticStyle:{margin:"0"},attrs:{size:"small",type:"success"},on:{click:function(a){return e.handleStop(t.data)}}},[e._v(e._s(1==t.data.state?"停用":"启用"))]),a("el-popconfirm",{attrs:{title:"确定删除该条内容吗"},on:{onConfirm:function(a){return e.handleDelete(t.data)}}},[a("el-button",{attrs:{slot:"reference",size:"small",type:"danger"},slot:"reference"},[e._v("删除")])],1)],1)]}}])}),a("el-dialog",{attrs:{title:"校正",visible:e.dialogVisibleA,width:"30%"},on:{"update:visible":function(t){e.dialogVisibleA=t}}},[a("div",[a("el-form-item",{attrs:{label:"付款金额",prop:"payment_money"}}),a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("span",{staticStyle:{width:"60px","margin-right":"5px"}},[e._v("金额：")]),a("el-input",{attrs:{title:e.payment_moneyA,placeholder:"请输入付款金额"},model:{value:e.payment_moneyA,callback:function(t){e.payment_moneyA=t},expression:"payment_moneyA"}})],1),a("div",{staticStyle:{display:"flex","align-items":"center","margin-top":"10px"}},[a("span",{staticStyle:{width:"60px","margin-right":"5px"}},[e._v("备注：")]),a("el-input",{attrs:{title:e.remarksA},model:{value:e.remarksA,callback:function(t){e.remarksA=t},expression:"remarksA"}})],1),a("div",{staticStyle:{display:"flex","justify-content":"center","margin-top":"10px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmitA}},[e._v("提交")])],1)],1)]),a("el-dialog",{attrs:{title:"现金取款",visible:e.dialogVisibleB,width:"30%"},on:{"update:visible":function(t){e.dialogVisibleB=t}}},[a("div",[a("el-form",{ref:"transferForm",staticClass:"demo-transferForm",attrs:{model:e.transferForm,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"划转金额",prop:"money"}},[a("el-input",{attrs:{title:e.transferForm.money,placeholder:"请输入划转金额"},model:{value:e.transferForm.money,callback:function(t){e.$set(e.transferForm,"money",t)},expression:"transferForm.money"}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{title:e.transferForm.remarks,placeholder:"请输入备注"},model:{value:e.transferForm.remarks,callback:function(t){e.$set(e.transferForm,"remarks",t)},expression:"transferForm.remarks"}})],1)],1),a("div",{staticStyle:{display:"flex","justify-content":"center","margin-top":"10px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmitB}},[e._v("提交")])],1)],1)])],1)},s=[],r=a("c7eb"),c=a("5530"),o=a("1da1"),i=(a("d81d"),a("a573"),a("878f")),d=a("6cff"),l=a("56c3"),u=a("ed08"),m=a("277f"),f=a("c1df"),b=a.n(f),p={components:{customTable:i["a"],searchComponent:d["a"]},data:function(){return{payment_moneyA:"",remarksA:"",dialogVisibleA:!1,dialogVisibleB:!1,companyListAccount:[],columns:[{title:"账户编号",key:"id",minWidth:"120"},{title:"创建人",key:"create_name",minWidth:"120"},{title:"所属公司",key:"company_name",minWidth:"120"},{title:"公司归属",key:"company_ascription",minWidth:"120"},{title:"开户行",key:"open_bank",minWidth:"120"},{title:"账户名",key:"account_name",minWidth:"120"},{title:"账号",key:"bank_number",minWidth:"120"},{title:"账户状态",key:"state_name",minWidth:"120"},{title:"账户余额",key:"balance",minWidth:"120"},{title:"创建日期",key:"create_time",minWidth:"120"},{title:"操作",key:"action",fixed:"right",width:"290px",render:"action"}],dataSource:[],total:0,loading:!1,searchParams:{page:1,limit:10},selectArr:[],searchConfig:{formItemLength:3,span:12,labelWidth:"60px",initValue:{},formItem:[{label:"公司名称",value:["payment_company_id","payment_company_bank_id"],type:"subject",extend:{type:"payment",label:"公司账户"}},{label:"公司归属",value:"company_ascription",type:"select",options:[{label:"集团公司",value:"1"},{label:"合作公司",value:"2"}],extend:{colSpan:6}},{label:"创建日期",value:"date",type:"dateRange",extend:{colSpan:6}}]},transferForm:{company_id:"",company_bank_id:"",money:"",remarks:""},rules:{company_id:[{required:!0,message:"请选择公司",trigger:"change"}],company_bank_id:[{required:!0,message:"请选择公司账号",trigger:"change"}],money:[{required:!0,message:"请输入划转金额",trigger:"blur"}],remarks:[{required:!0,message:"请输入备注",trigger:"blur"}]}}},computed:{companyList:function(){return this.$store.state.company.companyList}},watch:{transferForm:{handler:function(e,t){var a=this;e.company_id&&this.companyList.map((function(t){t.id==e.company_id&&(a.companyListAccount=t.companyBankList)}))},deep:!0}},mounted:function(){this.$route.params.initValue?this.searchConfig.initValue=this.$route.params.initValue:this.getDataSource()},methods:{batchExport:function(){var e=this;return Object(o["a"])(Object(r["a"])().mark((function t(){var a,n,s;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["h"])(Object(c["a"])({page:1,limit:1e6},e.searchParams));case 2:a=t.sent,n=e.columns.map((function(e){return e.key})),s=[],a.data.map((function(e){var t={};n.map((function(a){t[a]=e[a]})),s.push(t)})),Object(u["b"])(s,e.$route.meta.title,e.columns.map((function(e){return e.title})),e.$route.meta.title);case 7:case"end":return t.stop()}}),t)})))()},handleSubmitA:function(){var e=this;return Object(o["a"])(Object(r["a"])().mark((function t(){var a,n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={money:e.payment_moneyA,remarks:e.remarksA,company_bank_id:e.rowData.id,type:1},t.next=3,Object(m["v"])(a);case 3:n=t.sent,200==n.code&&(e.dialogVisibleA=!1,e.$message({type:"success",message:n.msg}),e.getDataSource());case 5:case"end":return t.stop()}}),t)})))()},handleSelectChange:function(){},selectChange:function(){},handleEdit:function(e){console.log(88,e),this.dialogVisibleA=!0,this.rowData=e},handleDelete:function(e){var t=this;Object(l["d"])({id:e.id}).then((function(e){200==e.code&&t.$message.success("删除成功"),t.getDataSource()}))},handleStop:function(e){var t=this;Object(l["f"])({id:e.id}).then((function(e){200==e.code&&t.$message.success("操作成功"),t.getDataSource()}))},handlePageChange:function(e){this.searchParams=Object(c["a"])(Object(c["a"])({},this.searchParams),e),this.getDataSource(),console.log(100,e)},handleSearch:function(e){this.searchParams=Object(c["a"])(Object(c["a"])({},this.searchParams),{},{company_ascription:e.company_ascription,company_id:e.payment_company_id||"",company_bank_id:e.payment_company_bank_id||""}),e.date?(this.searchParams.start_time=b()(e.date[0]).format("YYYY-MM-DD HH:mm:ss"),this.searchParams.end_time=b()(e.date[1]).format("YYYY-MM-DD HH:mm:ss")):(this.searchParams.start_time="",this.searchParams.end_time=""),this.getDataSource()},getDataSource:function(){var e=this;return Object(o["a"])(Object(r["a"])().mark((function t(){var a;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(l["h"])(e.searchParams);case 3:a=t.sent,e.loading=!1,e.total=a.count,e.dataSource=a.data;case 7:case"end":return t.stop()}}),t)})))()},handleTransfer:function(e){this.transferForm.company_id=e.company_id,this.transferForm.company_bank_id=e.id,this.rowData=e,console.log("param",e),this.dialogVisibleB=!0},handleSubmitB:function(){var e=this;return Object(o["a"])(Object(r["a"])().mark((function t(){var a,n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=Object(c["a"])(Object(c["a"])({},e.transferForm),{},{type:2}),t.next=3,Object(l["g"])(a);case 3:n=t.sent,200==n.code&&(e.dialogVisibleB=!1,e.$message({type:"success",message:n.msg}),e.getDataSource()),e.$refs.transferForm.resetFields();case 6:case"end":return t.stop()}}),t)})))()}}},j=p,h=(a("4c04"),a("2877")),y=Object(h["a"])(j,n,s,!1,null,"63ab2d14",null);t["default"]=y.exports},ed08:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return o}));a("53ca"),a("d81d"),a("a434"),a("d3b7"),a("4d63"),a("ac1f"),a("2c3e"),a("00b4"),a("25f0"),a("4d90"),a("5319"),a("0643"),a("4e3e"),a("a573"),a("159b");var n=a("21a6"),s=a("25ca");a("bc3a"),a("aeb1");function r(e,t,a,r){var c=[],o=[],i=function(e){var t=0;for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t++;return t};for(var d in e)if(console.log("------------------------"),Object.prototype.hasOwnProperty.call(e,d)){var l=e[d],u=[];for(var m in l)if(Object.prototype.hasOwnProperty.call(l,m)){var f=l[m];u.push(f),o.length<i(l)&&o.push(m)}c.push(u)}var b=[];a.map((function(e,t){"快速操作"!=e&&"详情"!=e&&b.push(e)})),c.splice(0,0,o,b),console.log("excel_data",s);var p=s["utils"].aoa_to_sheet(c),j=s["utils"].book_new(),h=[{hidden:!0}];p["!rows"]=h,s["utils"].book_append_sheet(j,p,r);var y=s["write"](j,{bookType:"xlsx",type:"array"}),g=new Blob([y],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});Object(n["saveAs"])(g,t+".xlsx")}function c(e){var t=-1!==e.lastIndexOf("?")?decodeURIComponent(e.substring(e.lastIndexOf("/")+1,e.lastIndexOf("?"))):decodeURIComponent(e.substring(e.lastIndexOf("/")+1)),a=t.substring(t.lastIndexOf(".")+1);if("png"==a||"jpg"==a||"pdf"==a){var s=document.createElement("a");s.href=e,s.download=t,s.target="_blank",s.click()}else fetch(e,{mode:"no-cors"}).then((function(e){return e.blob()})).then((function(e){console.log("blob",e),Object(n["saveAs"])(e,t)}))}function o(e,t,a){console.log("self",e);var n=e.$router.resolve({name:t,query:a}),s=window.open(n.href,t);s&&s.location.reload()}}}]);