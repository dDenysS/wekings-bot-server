webpackJsonp([3],{QLgx:function(t,e){},esL9:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.bots,"select-all":"","hide-actions":"","item-key":"name"},scopedSlots:t._u([{key:"headers",fn:function(e){return[s("tr",[s("th",[s("v-checkbox",{attrs:{"input-value":e.all,indeterminate:e.indeterminate,primary:"","hide-details":""},on:{click:function(e){return e.stopPropagation(),t.toggleAll(e)}}})],1),t._v(" "),t._l(e.headers,function(e){return s("th",{key:e.text},[t._v("\n                "+t._s(e.text)+"\n            ")])})],2)]}},{key:"items",fn:function(e){return[s("tr",{attrs:{active:e.selected},on:{click:function(t){e.selected=!e.selected}}},[s("td",[s("v-checkbox",{attrs:{"input-value":e.selected,primary:"","hide-details":""}})],1),t._v(" "),s("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.id))]),t._v(" "),s("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.name))]),t._v(" "),s("td",{staticClass:"text-xs-center"},[s("v-btn",{attrs:{outline:"",color:e.item.runing?"green":"red"}},[t._v("\n                    "+t._s(e.item.runing?"Запущен":"Не запущен")+"\n                ")])],1),t._v(" "),s("td",{staticClass:"justify-center align-center layout px-0"},[s("v-tooltip",{attrs:{top:""}},[s("v-icon",{staticClass:"mr-2",attrs:{slot:"activator"},slot:"activator"},[t._v("\n                        play_arrow\n                    ")]),t._v(" "),s("span",[t._v("Запустить")])],1)],1)])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},staticRenderFns:[]};var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{row:"","justify-center":""}},[s("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v("\n                    Додати бота\n                ")])]),t._v(" "),s("v-card-text",{staticClass:"pt-0"},[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-container",{staticClass:"pt-0",attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:"Имя",required:"",rules:t.rules.required},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{required:"",rules:t.rules.required,label:"Пароль",hint:"Мы не храним пароль. Мы используем другие методы доступа к вашему аккаунту"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[t.captchaUrl?s("v-layout",{attrs:{"align-center":""}},[s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-text-field",{attrs:{required:"",rules:t.rules.required,label:"Код подтверждения"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",md3:""}},[s("img",{staticClass:"captcha-url",attrs:{src:t.captchaUrl,alt:"captcha img"}})])],1):s("p",[t._v("Загрузка капчи...")])],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("p",{staticClass:"red--text"},[t._v(t._s(t.responseNotify))])])],1)],1)],1)],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                    Закрыть\n                ")]),t._v(" "),s("v-btn",{attrs:{color:"success",loading:t.loading.submitButton},on:{click:t.submitBot}},[t._v("\n                    Отправить\n                ")])],1)],1)],1)],1)},staticRenderFns:[]};var i={name:"Home",components:{BotsTable:s("VU/8")({name:"BotsTable",data:function(){return{selected:[],bots:[],headers:[{text:"id",align:"center",value:"name"},{text:"Логин",value:"name"},{text:"Статус",value:"runing"},{text:"Действия",value:"actions",sortable:!1}]}},created:function(){this.getBots(),this.$bus.$on("update-bots-table",this.getBots)},beforeDestroy:function(){this.$bus.$off("update-bots-table",this.getBots)},methods:{toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.bots.slice()},getBots:function(){var t=this;this.$http("/bots").then(function(e){var s=e.data;t.bots=s})}}},a,!1,function(t){s("QLgx")},"data-v-28163a64",null).exports,AddBotDialog:s("VU/8")({name:"AddBotDialog",data:function(){return{dialog:!1,rules:{required:[function(t){return!!t||"Заполните поле"}]},loading:{submitButton:!1},captchaUrl:null,username:"",password:"",valid:null,code:"",responseNotify:""}},watch:{dialog:function(t){t||this.handlerClose()}},created:function(){this.$bus.$on("open-add-bot-dialog",this.openDialog)},methods:{openDialog:function(){this.dialog=!0,this.getCaptcha()},getCaptcha:function(){var t=this;this.captchaUrl=null,this.$http("/bots/captcha").then(function(e){var s=e.data;t.captchaUrl=s.img})},submitBot:function(){var t=this;this.$refs.form.validate()&&(this.$set(this.loading,"submitButton",!0),this.$http.post("/bots/add",{username:this.username.trim(),password:this.password.trim(),code:this.code.trim()}).then(function(){t.$bus.$emit("update-bots-table"),t.dialog=!1}).catch(function(e){t.responseNotify=e.response.data.notify||e.response.data.message,t.getCaptcha()}).finally(function(){t.$set(t.loading,"submitButton",!1)}))},handlerClose:function(){this.loading={submitButton:!1},this.captchaUrl=null,this.username="midflash",this.password=" 1Specialized1",this.valid=null,this.code="",this.responseNotify="",this.$refs.form.resetValidation()}}},n,!1,function(t){s("xnCc")},null,null).exports},methods:{addBot:function(){this.$bus.$emit("open-add-bot-dialog")}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"","justify-center":"",wrap:""}},[s("v-flex",{staticClass:"display-1 white px-3 py-3 elevation-1 mb-3",attrs:{xs12:"",sm9:"",tag:"h2"}},[t._v("\n            Таблица ботов\n        ")]),t._v(" "),s("v-flex",{attrs:{xs12:"",sm9:""}},[s("bots-table")],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm9:""}},[s("v-btn",{attrs:{color:"orange white--text"},on:{click:t.addBot}},[t._v("Додати бота")]),t._v(" "),s("v-btn",{attrs:{color:"orange white--text",to:"/bot"}},[t._v("Налаштування")])],1)],1),t._v(" "),s("add-bot-dialog")],1)},staticRenderFns:[]},o=s("VU/8")(i,l,!1,null,null,null);e.default=o.exports},xnCc:function(t,e){}});
//# sourceMappingURL=3.b6eda5c84e1a9f82eba8.js.map