(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-162cf8de"],{"267e":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var i={FROM_TREE_TO_INVOICE:"FROM_TREE_TO_INVOICE"}},"2fe2":function(t,e,a){"use strict";a("3320")},3320:function(t,e,a){},"34d5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{"padding-left":"100px","padding-top":"50px"}},[a("el-button",{key:t.istop,attrs:{size:"small",type:"primary"},on:{click:t.handleTop}},[t._v(t._s(t.istop?"取消置顶":"置顶主页"))]),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:t.handleOver}},[t._v("申请结项")])],1),a("div",{staticClass:"invoices",staticStyle:{padding:"80px","padding-left":"100px","padding-right":"100px"}},[a("div",{staticStyle:{"margin-bottom":"10px"}},[t._v("项目负责人："+t._s(t.datails[0].contacts_name))]),t.datails.length?a("div",{staticStyle:{"line-height":"60px","text-align":"center",flex:"11","border-left":"1px solid #eee","border-bottom":"1px solid #eee","border-right":"1px solid #eee","border-top":"1px solid #eee","font-size":"28px","font-weight":"bold"}},[t._v(" "+t._s(t.datails[0].project_name))]):t._e(),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"11","border-left":"1px solid #eee","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 集团公司信息")]),t._m(0),t._l(t.datails[0].group_company_list,(function(e,i){return a("div",{key:i,class:i%2==1?"grey":"",staticStyle:{display:"flex","font-size":"12px"}},[a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","flex-shrink":"0","border-left":"1px solid #eee","border-bottom":"1px solid #eee","border-right":"1px solid #eee",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"},attrs:{title:e.name}},[t._v(" "+t._s(e.name))]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","flex-shrink":"0","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" "+t._s("集团公司"))]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","flex-shrink":"0","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.issuing_invoice_sum))])]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","flex-shrink":"0","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.contract_revenue_sum))])]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","flex-shrink":"0","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.receiving_invoice_sum))])]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","flex-shrink":"0","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.contract_payment_sum))])]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","flex-shrink":"0","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.tax_payment_sum))])]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","flex-shrink":"0","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.other_payment_sum))])]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","flex-shrink":"0","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.company_account_balance))])])])})),a("div",{staticStyle:{display:"flex","font-size":"12px"}},[a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"7","flex-shrink":"0","border-left":"1px solid #eee","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}}),t._m(1),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","flex-shrink":"0","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(t.datails[0].huizong))])])]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"11","border-left":"1px solid #eee","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 合作公司信息")]),t._m(2),t._l(t.datails[0].partners_company_list,(function(e,i){return a("div",{key:i,class:i%2==1?"grey":"",staticStyle:{display:"flex","font-size":"12px"}},[a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-left":"1px solid #eee","border-bottom":"1px solid #eee","border-right":"1px solid #eee",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"},attrs:{title:e.name}},[t._v(t._s(e.name))]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" "+t._s("合作公司"))]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.issuing_invoice_sum))])]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.contract_revenue_sum))])]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.receiving_invoice_sum))])]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.contract_payment_sum))])]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.tax_payment_sum))])]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"right",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.other_payment_sum))])]),a("div",{staticStyle:{height:"30px","line-height":"30px",flex:"1","text-align":"right","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-right":"15px"}},[t._v(t._s(e.company_account_balance))])])])}))],2),a("div",{staticStyle:{margin:"20px 0 100px 100px",border:"1px solid #eee",padding:"20px"}},[a("div",{staticStyle:{width:"130px","margin-bottom":"12px"}},[t._v("数据展示项：")]),a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:"3"}},[a("el-checkbox",{model:{value:t.showData.company_account_balance,callback:function(e){t.$set(t.showData,"company_account_balance",e)},expression:"showData.company_account_balance"}},[t._v("账户余额")])],1),a("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:"3"}},[a("el-checkbox",{model:{value:t.showData.contract_receivable,callback:function(e){t.$set(t.showData,"contract_receivable",e)},expression:"showData.contract_receivable"}},[t._v("合同应收金额")])],1),a("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:"3"}},[a("el-checkbox",{model:{value:t.showData.contract_payable,callback:function(e){t.$set(t.showData,"contract_payable",e)},expression:"showData.contract_payable"}},[t._v("合同应付金额")])],1),a("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:"3"}},[a("el-checkbox",{model:{value:t.showData.expense,callback:function(e){t.$set(t.showData,"expense",e)},expression:"showData.expense"}},[t._v("报销金额")])],1),a("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:"3"}},[a("el-checkbox",{model:{value:t.showData.other,callback:function(e){t.$set(t.showData,"other",e)},expression:"showData.other"}},[t._v("其他支出")])],1),a("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:"3"}},[a("el-checkbox",{model:{value:t.showData.tax,callback:function(e){t.$set(t.showData,"tax",e)},expression:"showData.tax"}},[t._v("税金支出")])],1),a("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:"3"}},[a("el-checkbox",{model:{value:t.showData.value_added_tax,callback:function(e){t.$set(t.showData,"value_added_tax",e)},expression:"showData.value_added_tax"}},[t._v("实时应缴增值税")])],1),a("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:"3"}},[a("el-checkbox",{model:{value:t.showData.additional_tax,callback:function(e){t.$set(t.showData,"additional_tax",e)},expression:"showData.additional_tax"}},[t._v("实时应缴附加税")])],1),a("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:"3"}},[a("el-checkbox",{model:{value:t.showData.stamp_tax,callback:function(e){t.$set(t.showData,"stamp_tax",e)},expression:"showData.stamp_tax"}},[t._v("印花税")])],1),a("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:"3"}},[a("el-checkbox",{model:{value:t.showData.enterprise_income_tax_base,callback:function(e){t.$set(t.showData,"enterprise_income_tax_base",e)},expression:"showData.enterprise_income_tax_base"}},[t._v("实时应缴企业所得税基数")])],1)],1)],1)]),a("div",{staticStyle:{"overflow-x":"auto","min-height":"calc(100vh - 630px)"}},[a("div",{staticStyle:{overflow:"auto",padding:"40px"}},[a("lcc-tree",{ref:"contractInfo",attrs:{info:t.icon,"is-root":!0,"show-data":t.showData}})],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"flex","font-size":"12px"}},[a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-left":"1px solid #eee","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 公司名称")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 公司类型")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 开具发票")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 合同收款")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 接收发票")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 合同付款")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 税金支出")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 其他支出")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 账户")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"30px","line-height":"30px",flex:"1","flex-shrink":"0","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[a("span",{staticStyle:{"padding-left":"5px"}},[t._v("汇总：")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"flex","font-size":"12px"}},[a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-left":"1px solid #eee","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 公司名称")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 公司类型")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 开具发票")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 合同收款")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 接收发票")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 合同付款")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 税金支出")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 其他支出")]),a("div",{staticStyle:{height:"30px","line-height":"30px","text-align":"center",flex:"1","border-bottom":"1px solid #eee","border-right":"1px solid #eee"}},[t._v(" 账户")])])}],o=a("c7eb"),n=a("1da1"),r=(a("e9c4"),a("b64b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"container "+(t.isLeaf?"leaf":"")+" "+(t.isRoot?"root":"yesy")},[a("div",{staticClass:"self"},[a("div",{class:"progress-container  "+(0===t.idx?"first":"")},[a("div",{staticClass:"progress-item",style:"--background: #E84747;--percent: "+t.pay_invoice_percent+"%"},[a("div",{staticClass:"label"},[t._v("实时票款差")]),a("div",{staticClass:"degree"},[a("div",{staticClass:"degree-inner"}),a("div",{staticClass:"degree-percent"},[t._v(t._s(t.pay_invoice_percent)+"%")])]),a("div",{staticClass:"percent"},[t._v(t._s(t.info.invoice_payment_differ_str))])]),a("div",{staticClass:"progress-item",style:"--background: #6CC058;--percent: "+t.invoice_percent+"%"},[a("div",{staticClass:"label"},[t._v("票")]),a("div",{staticClass:"degree"},[a("div",{staticClass:"degree-inner"}),a("div",{staticClass:"degree-percent"},[t._v(t._s(t.invoice_percent)+"%")])]),a("div",{staticClass:"percent"},[t._v(t._s(t.info.invoice_sum_str))])]),a("div",{staticClass:"progress-item",style:"--background: #6CC058;--percent: "+t.pay_percent+"%"},[a("div",{staticClass:"label"},[t._v("款")]),a("div",{staticClass:"degree"},[a("div",{staticClass:"degree-inner"}),a("div",{staticClass:"degree-percent"},[t._v(t._s(t.pay_percent)+"%")])]),a("div",{staticClass:"percent"},[t._v(t._s(t.info.payment_sum_str))])])]),a("div",{staticClass:"splitContainer"},[0===t.idx?a("div",{staticClass:"companyName"},[a("div",{class:2==t.info.contract_party_a_company_ascription?"circle":"purple",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[a("svg",{staticClass:"icon",attrs:{t:"1719761685094",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6304",width:"20",height:"20"}},[a("path",{attrs:{d:"M983.964 953.145H846.307c-21.721 0-39.33-17.575-39.33-39.249V796.141c0-21.677 17.609-39.249 39.33-39.249h39.33V580.263c0-21.679-17.607-39.251-39.33-39.251H531.664v215.88h39.332c21.721 0 39.33 17.572 39.33 39.249v117.756c0 21.674-17.609 39.249-39.33 39.249H433.34c-21.723 0-39.33-17.575-39.33-39.249V796.141c0-21.677 17.607-39.249 39.33-39.249h39.33v-215.88H177.693c-21.721 0-39.33 17.572-39.33 39.251v176.629h39.33c21.721 0 39.33 17.572 39.33 39.249v117.756c0 21.674-17.609 39.249-39.33 39.249H40.036c-21.721 0-39.33-17.575-39.33-39.249V796.141c0-21.677 17.609-39.249 39.33-39.249h39.33V560.636c0-43.355 35.219-78.502 78.663-78.502H472.67V266.257h-39.33c-21.723 0-39.33-17.575-39.33-39.253V109.252c0-21.679 17.607-39.251 39.33-39.251h137.657c21.721 0 39.33 17.572 39.33 39.251v117.751c0 21.679-17.609 39.253-39.33 39.253h-39.332v215.878h334.309c43.441 0 78.66 35.147 78.66 78.502v196.255h39.33c21.721 0 39.33 17.572 39.33 39.249v117.756c0 21.675-17.61 39.249-39.33 39.249z","p-id":"6305",fill:"#ffffff"}})])]),a("div",{staticClass:"name"},[t._v(t._s(t.info.contract_party_a_company_name))])]):t._e(),a("div",{staticClass:"splitLine"})]),a("div",{class:"btmContainer "+(t.idx===t.floorLength?"last":"")},[0===t.idx?a("div",[t.isRoot?a("span",{staticClass:"contractA"}):a("div",{staticClass:"amountContainer"},[t.showData.company_account_balance?a("div",{key:t.showData.company_account_balance,staticClass:"amountRow"},[a("div",{staticClass:"amountLabel"},[t._v("账户余额:")]),a("div",{staticClass:"amountValue"},[t._v(t._s(t.contractInfo.company_account_balance))])]):t._e(),t.showData.contract_receivable?a("div",{staticClass:"amountRow"},[a("div",{staticClass:"amountLabel"},[t._v("合同应收金额:")]),a("div",{staticClass:"amountValue"},[t._v(t._s(t.contractInfo.contract_receivable))])]):t._e(),t.showData.contract_payable?a("div",{staticClass:"amountRow"},[a("div",{staticClass:"amountLabel"},[t._v("合同应付金额:")]),a("div",{staticClass:"amountValue"},[t._v(t._s(t.contractInfo.contract_payable))])]):t._e(),t.showData.expense?a("div",{staticClass:"amountRow"},[a("div",{staticClass:"amountLabel"},[t._v("报销金额:")]),a("div",{staticClass:"amountValue"},[t._v(t._s(t.contractInfo.expense))])]):t._e(),t.showData.other?a("div",{staticClass:"amountRow"},[a("div",{staticClass:"amountLabel"},[t._v("其它支出:")]),a("div",{staticClass:"amountValue"},[t._v(t._s(t.contractInfo.other))])]):t._e(),t.showData.tax?a("div",{staticClass:"amountRow"},[a("div",{staticClass:"amountLabel"},[t._v("税金支出:")]),a("div",{staticClass:"amountValue"},[t._v(t._s(t.contractInfo.tax))])]):t._e(),t.showData.value_added_tax?a("div",{staticClass:"amountRow"},[a("div",{staticClass:"amountLabel"},[t._v("实时应缴增值税:")]),a("div",{staticClass:"amountValue"},[t._v(t._s(t.contractInfo.value_added_tax))])]):t._e(),t.showData.additional_tax?a("div",{staticClass:"amountRow"},[a("div",{staticClass:"amountLabel"},[t._v("实时应缴附加税:")]),a("div",{staticClass:"amountValue"},[t._v(t._s(t.contractInfo.additional_tax))])]):t._e(),t.showData.enterprise_income_tax_base?a("div",{staticClass:"amountRow"},[a("div",{staticClass:"amountLabel"},[t._v("实时应缴企业所得税基数:")]),a("div",{staticClass:"amountValue"},[t._v(t._s(t.contractInfo.enterprise_income_tax_base))])]):t._e(),t.showData.stamp_tax?a("div",{staticClass:"amountRow"},[a("div",{staticClass:"amountLabel"},[t._v("印花税:")]),a("div",{staticClass:"amountValue"},[t._v(t._s(t.contractInfo.stamp_tax))])]):t._e()])]):a("div"),a("div",{staticClass:"actContainer"},[a("div",{staticClass:"btnContainer"},[a("div",{staticClass:"contractPrice"},[a("span",{staticStyle:{"padding-right":"6px"}},[a("div",{staticStyle:{"margin-bottom":"3px"}},[t._v("合同金额："+t._s(t.info.contract_money_str))]),a("div",{staticStyle:{"margin-bottom":"3px"}},[t._v("税率："+t._s(t.info.tariff)+"%")]),a("div",{staticStyle:{"margin-bottom":"3px"}},[t._v("合同类型："+t._s(t.info.type_name))]),a("div",[t._v("合同编号："+t._s(t.info.contract_code))])])]),a("div",{staticClass:"btnRow"},[a("div",{staticClass:"btnList"},[a("button",{staticClass:"btn",staticStyle:{"background-color":"#6CC058",color:"#fff",border:"none",padding:"6px 10px","border-radius":"3px",cursor:"pointer"},on:{click:function(e){return t.handleClickItem(1,t.info)}}},[t._v("变更")]),a("button",{staticClass:"btn",staticStyle:{"background-color":"#E84747",color:"#fff",border:"none",padding:"6px 10px","border-radius":"3px",cursor:"pointer"},on:{click:function(e){return t.handleClickItem(2,t.info)}}},[t._v("作废")]),a("button",{staticClass:"btn",staticStyle:{"background-color":"#1595F0",color:"#fff",border:"none",padding:"6px 10px","border-radius":"3px",cursor:"pointer"},on:{click:function(e){return t.handleClickItem(6,t.info)}}},[t._v("签署")])])]),a("div",{staticClass:"btnRow"},[a("div",{staticClass:"btnList"},[a("button",{staticClass:"btn",staticStyle:{"background-color":"#E698EC",color:"#fff",border:"none",padding:"6px 10px","border-radius":"3px",cursor:"pointer"},on:{click:function(e){return t.handleClickItem(3,t.info)}}},[t._v("开票")]),a("button",{staticClass:"btn",staticStyle:{"background-color":"#66CD9D",color:"#fff",border:"none",padding:"6px 10px","border-radius":"3px",cursor:"pointer"},on:{click:function(e){return t.handleClickItem(4,t.info)}}},[t._v("付款")]),a("button",{staticClass:"btn",staticStyle:{"background-color":"#165DFF",color:"#fff",border:"none",padding:"6px 10px","border-radius":"3px",cursor:"pointer"},on:{click:function(e){return t.handleClickItem(5,t.info)}}},[t._v("查看")])])])])])])]),t.isLeaf?a("div",{class:"leafInfo "+(0===t.idx?"firstLeafInfo":"")},[a("div",{class:2==t.info.contract_party_b_company_ascription?"leafCircle":"purple",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[a("svg",{staticClass:"icon",attrs:{t:"1719761685094",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6304",width:"20",height:"20"}},[a("path",{attrs:{d:"M983.964 953.145H846.307c-21.721 0-39.33-17.575-39.33-39.249V796.141c0-21.677 17.609-39.249 39.33-39.249h39.33V580.263c0-21.679-17.607-39.251-39.33-39.251H531.664v215.88h39.332c21.721 0 39.33 17.572 39.33 39.249v117.756c0 21.674-17.609 39.249-39.33 39.249H433.34c-21.723 0-39.33-17.575-39.33-39.249V796.141c0-21.677 17.607-39.249 39.33-39.249h39.33v-215.88H177.693c-21.721 0-39.33 17.572-39.33 39.251v176.629h39.33c21.721 0 39.33 17.572 39.33 39.249v117.756c0 21.674-17.609 39.249-39.33 39.249H40.036c-21.721 0-39.33-17.575-39.33-39.249V796.141c0-21.677 17.609-39.249 39.33-39.249h39.33V560.636c0-43.355 35.219-78.502 78.663-78.502H472.67V266.257h-39.33c-21.723 0-39.33-17.575-39.33-39.253V109.252c0-21.679 17.607-39.251 39.33-39.251h137.657c21.721 0 39.33 17.572 39.33 39.251v117.751c0 21.679-17.609 39.253-39.33 39.253h-39.332v215.878h334.309c43.441 0 78.66 35.147 78.66 78.502v196.255h39.33c21.721 0 39.33 17.572 39.33 39.249v117.756c0 21.675-17.61 39.249-39.33 39.249z","p-id":"6305",fill:"#ffffff"}})])]),a("div",{staticClass:"leafRight"},[a("div",{staticClass:"leafCompany"},[t._v(t._s(t.info.contract_party_b_company_name))]),a("div",{staticClass:"leafCompanyInfo"},[t.showData.company_account_balance?a("div",{key:t.showData.company_account_balance,staticClass:"row"},[a("div",{staticClass:"label"},[t._v("账户余额:")]),a("div",{staticClass:"value"},[t._v(t._s(t.info.company_account_balance))])]):t._e(),t.showData.contract_receivable?a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("合同应收金额:")]),a("div",{staticClass:"value"},[t._v(t._s(t.info.contract_receivable))])]):t._e(),t.showData.contract_payable?a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("合同应付金额:")]),a("div",{staticClass:"value"},[t._v(t._s(t.info.contract_payable))])]):t._e(),t.showData.expense?a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("报销金额:")]),a("div",{staticClass:"value"},[t._v(t._s(t.info.expense))])]):t._e(),t.showData.other?a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("其它支出:")]),a("div",{staticClass:"value"},[t._v(t._s(t.info.other))])]):t._e(),t.showData.tax?a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("税金支出:")]),a("div",{staticClass:"value"},[t._v(t._s(t.info.tax))])]):t._e(),t.showData.value_added_tax?a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("实时应缴增值税:")]),a("div",{staticClass:"value"},[t._v(t._s(t.info.value_added_tax))])]):t._e(),t.showData.additional_tax?a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("实时应缴附加税:")]),a("div",{staticClass:"value"},[t._v(t._s(t.info.additional_tax))])]):t._e(),t.showData.enterprise_income_tax_base?a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("实时应缴企业所得税基数:")]),a("div",{staticClass:"value"},[t._v(t._s(t.info.enterprise_income_tax_base))])]):t._e(),t.showData.stamp_tax?a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("印花税:")]),a("div",{staticClass:"value"},[t._v(t._s(t.info.stamp_tax))])]):t._e()])])]):a("div",{staticClass:"childrenContainer",style:{marginTop:26*-(t.idx>1?t.idx-1:t.idx-0)+"px",marginLeft:"5px",borderLeft:t.info.children.length>1?"1px solid #409EFF":"none"}},t._l(t.info.children,(function(e,i){return a("lcc-tree",{key:i,attrs:{info:e,"is-root":!1,idx:i,"floor-length":t.info.children.length-1,"contract-info":{company_account_balance:t.info.company_account_balance,contract_receivable:t.info.contract_receivable,contract_payable:t.info.contract_payable,expense:t.info.expense,other:t.info.other,tax:t.info.tax,value_added_tax:t.info.value_added_tax,additional_tax:t.info.additional_tax,enterprise_income_tax_base:t.info.enterprise_income_tax_base,stamp_tax:t.info.stamp_tax},"show-data":t.showData}})})),1)])}),c=[],l=a("35ad"),d=a("267e"),p={name:"LccTree",props:{info:{default:void 0},isRoot:{default:!1},idx:{default:0},floorLength:{default:0},contractInfo:{default:void 0},showData:{type:Object,default:function(){return{company_account_balance:!0,contract_receivable:!0,contract_payable:!0,expense:!0,other:!0,tax:!0,value_added_tax:!0,additional_tax:!0,enterprise_income_tax_base:!0,stamp_tax:!0}}}},data:function(){return{}},computed:{isLeaf:function(){var t,e;return!(null!==(t=this.info)&&void 0!==t&&t.children)||0===(null===(e=this.info)||void 0===e||null===(e=e.children)||void 0===e?void 0:e.length)},pay_invoice_percent:function(){var t,e,a;if(0===(null===(t=this.info)||void 0===t?void 0:t.payment_sum))return 0;var i,s=(null===(e=this.info)||void 0===e?void 0:e.invoice_sum)-(null===(a=this.info)||void 0===a?void 0:a.payment_sum);return 0==this.info.invoice_sum||0==s?0:Math.floor(Math.abs(s)/(null===(i=this.info)||void 0===i?void 0:i.contract_money)*100)},invoice_percent:function(){var t,e;return Math.floor((null===(t=this.info)||void 0===t?void 0:t.invoice_sum)/(null===(e=this.info)||void 0===e?void 0:e.contract_money)*100)},pay_percent:function(){var t,e;return Math.floor((null===(t=this.info)||void 0===t?void 0:t.payment_sum)/(null===(e=this.info)||void 0===e?void 0:e.contract_money)*100)}},mounted:function(){console.log("showData",this.showData)},created:function(){},methods:{paymentsInfoFun:function(t){var e=this;return Object(n["a"])(Object(o["a"])().mark((function a(){var i;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=JSON.parse(JSON.stringify(t)),i.type="1",console.log("data.type",t.type),e.$router.push({path:"/fund_account_management/transfer_create",query:{data:JSON.stringify(i),noMoney:!0,detailToCreate:!0}});case 4:case"end":return a.stop()}}),a)})))()},handleClickItem:function(t,e){var a=this;1==t&&this.$router.push({name:"project_contract_table",params:{dialogFormVisible:!0,id:e.id}}),2==t&&Object(l["c"])({id:e.id}).then((function(t){200===t.code&&(a.$message({type:"success",message:"删除成功"}),a.getDataSource())})),3==t&&this.$router.push({path:"/invoices-management/openInvoices",query:{data:JSON.stringify(e),type:!1,detailToCreate:!0,noRemark:!0,from:d["a"].FROM_TREE_TO_INVOICE}}),4==t&&this.paymentsInfoFun(e),5==t&&this.$router.push({path:"/contrct_management/administrative_create",query:{id:e.id,showBtn:!0}}),6==t&&this.$router.push({path:"/contrct_management/administrative_create",query:{qianshu:JSON.stringify({contract_party_a_company_id:e.contract_party_b_company_id,is_project:e.is_project,is_main:0,contract_pid:e.id,project_id:e.project_id}),isEdit:!1,detailToCreate:!0}}),console.log("type,data",t,e)}}},h=p,x=(a("2fe2"),a("2877")),_=Object(x["a"])(h,r,c,!1,null,null,null),v=_.exports,u=a("277f"),b=a("429f"),g={components:{lccTree:v},data:function(){return{istop:!1,showData:{company_account_balance:!0,contract_receivable:!0,contract_payable:!0,expense:!0,other:!0,tax:!0,value_added_tax:!0,additional_tax:!0,enterprise_income_tax_base:!0,stamp_tax:!0},datails:[],icon:{},keyBool:!1}},mounted:function(){this.getData()},methods:{handleTop:function(){var t=this;return Object(n["a"])(Object(o["a"])().mark((function e(){var a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(b["h"])({id:t.$route.query.id});case 2:a=e.sent,200==a.code&&(t.$message(a.msg),t.istop="取消置顶成功"!=a.msg);case 4:case"end":return e.stop()}}),e)})))()},handleOver:function(){var t=this;return Object(n["a"])(Object(o["a"])().mark((function e(){var a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(b["i"])({id:t.$route.query.id});case 2:a=e.sent,200==a.code&&t.$message(a.msg);case 4:case"end":return e.stop()}}),e)})))()},handleClickItem:function(t,e){var a=this;1==t&&this.$router.push({name:"project_contract_table",params:{dialogFormVisible:!0,id:e.id}}),2==t&&Object(l["c"])({id:e.id}).then((function(t){200===t.code&&(a.$message({type:"success",message:"删除成功"}),a.getDataSource())})),3==t&&this.$router.push({name:"openInvoices",params:{data:e,type:!1}}),4==t&&this.paymentsInfoFun(e),console.log("type,data",t,e)},paymentsInfoFun:function(t){var e=this;return Object(n["a"])(Object(o["a"])().mark((function a(){var i;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(u["w"])({id:t.id});case 2:i=a.sent,i&&e.$router.push({name:"transfer_create",params:{id:t.id}});case 4:case"end":return a.stop()}}),a)})))()},getData:function(){var t=this;return Object(n["a"])(Object(o["a"])().mark((function e(){var a,i;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["i"])({id:t.$route.query.id});case 2:a=e.sent,t.istop=a.data.istop,i=JSON.parse(JSON.stringify(a.data)),i.children=[],t.datails.push(i),console.log("res.data.contract_info",a.data.contract_info),t.icon=a.data.contract_info,t.keyBool=!t.keyBool;case 10:case"end":return e.stop()}}),e)})))()}}},f=g,m=(a("69a3"),Object(x["a"])(f,i,s,!1,null,"03c90452",null));e["default"]=m.exports},"35ad":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return o})),a.d(e,"f",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"e",(function(){return c})),a.d(e,"d",(function(){return l}));var i=a("b775");function s(t){return Object(i["a"])({url:"/Contracts/info?id=".concat(t.id),method:"post",data:t})}function o(t){return Object(i["a"])({url:"/Contracts/add",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/Contracts/update",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/Contracts/delete",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/Contracts/getProjectList",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/Contracts/getAdministrativeList",method:"post",data:t})}},"67af":function(t,e,a){},"69a3":function(t,e,a){"use strict";a("67af")}}]);