!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory(require("axios"),require("moment")):"function"==typeof define&&define.amd?define(["axios","moment"],factory):"object"==typeof exports?exports.VueGithubActivity=factory(require("axios"),require("moment")):root.VueGithubActivity=factory(root.axios,root.moment)}(this,function(__WEBPACK_EXTERNAL_MODULE_49__,__WEBPACK_EXTERNAL_MODULE_50__){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=14)}([function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return fromNow}),__webpack_require__.d(__webpack_exports__,"b",function(){return hash}),__webpack_require__.d(__webpack_exports__,"c",function(){return branch});var __WEBPACK_IMPORTED_MODULE_0_moment__=__webpack_require__(50),__WEBPACK_IMPORTED_MODULE_0_moment___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__),fromNow=function(time){return __WEBPACK_IMPORTED_MODULE_0_moment___default()(time).fromNow()},hash=function(sha){return sha.substr(sha.length-6)},branch=function(ref){return ref.replace("refs/heads/","")}},function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){__webpack_require__(37);var Component=__webpack_require__(0)(__webpack_require__(16),__webpack_require__(48),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){__webpack_require__(34);var Component=__webpack_require__(0)(__webpack_require__(17),__webpack_require__(45),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){__webpack_require__(28);var Component=__webpack_require__(0)(__webpack_require__(18),__webpack_require__(39),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){__webpack_require__(35);var Component=__webpack_require__(0)(__webpack_require__(19),__webpack_require__(46),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){__webpack_require__(27);var Component=__webpack_require__(0)(__webpack_require__(20),__webpack_require__(38),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){__webpack_require__(31);var Component=__webpack_require__(0)(__webpack_require__(21),__webpack_require__(42),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){__webpack_require__(32);var Component=__webpack_require__(0)(__webpack_require__(22),__webpack_require__(43),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){__webpack_require__(36);var Component=__webpack_require__(0)(__webpack_require__(23),__webpack_require__(47),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){__webpack_require__(29);var Component=__webpack_require__(0)(__webpack_require__(24),__webpack_require__(40),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){__webpack_require__(30);var Component=__webpack_require__(0)(__webpack_require__(25),__webpack_require__(41),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){__webpack_require__(33);var Component=__webpack_require__(0)(__webpack_require__(26),__webpack_require__(44),null,null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(global){function install(Vue){Vue.component("github-feed",__WEBPACK_IMPORTED_MODULE_0__components_GithubFeed_vue___default.a),Vue.component("push-event",__WEBPACK_IMPORTED_MODULE_1__components_events_PushEvent_vue___default.a),Vue.component("pull-request-event",__WEBPACK_IMPORTED_MODULE_2__components_events_PullRequestEvent_vue___default.a),Vue.component("create-event",__WEBPACK_IMPORTED_MODULE_3__components_events_CreateEvent_vue___default.a),Vue.component("watch-event",__WEBPACK_IMPORTED_MODULE_5__components_events_WatchEvent_vue___default.a),Vue.component("delete-event",__WEBPACK_IMPORTED_MODULE_4__components_events_DeleteEvent_vue___default.a),Vue.component("issues-event",__WEBPACK_IMPORTED_MODULE_6__components_events_IssuesEvent_vue___default.a),Vue.component("issue-comment-event",__WEBPACK_IMPORTED_MODULE_7__components_events_IssueCommentEvent_vue___default.a),Vue.component("commit-comment-event",__WEBPACK_IMPORTED_MODULE_9__components_events_CommitCommentEvent_vue___default.a),Vue.component("fork-event",__WEBPACK_IMPORTED_MODULE_8__components_events_ForkEvent_vue___default.a),Vue.component("public-event",__WEBPACK_IMPORTED_MODULE_10__components_events_PublicEvent_vue___default.a)}__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_GithubFeed_vue__=__webpack_require__(3),__WEBPACK_IMPORTED_MODULE_0__components_GithubFeed_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_GithubFeed_vue__),__WEBPACK_IMPORTED_MODULE_1__components_events_PushEvent_vue__=__webpack_require__(12),__WEBPACK_IMPORTED_MODULE_1__components_events_PushEvent_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_events_PushEvent_vue__),__WEBPACK_IMPORTED_MODULE_2__components_events_PullRequestEvent_vue__=__webpack_require__(11),__WEBPACK_IMPORTED_MODULE_2__components_events_PullRequestEvent_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_events_PullRequestEvent_vue__),__WEBPACK_IMPORTED_MODULE_3__components_events_CreateEvent_vue__=__webpack_require__(5),__WEBPACK_IMPORTED_MODULE_3__components_events_CreateEvent_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_events_CreateEvent_vue__),__WEBPACK_IMPORTED_MODULE_4__components_events_DeleteEvent_vue__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_4__components_events_DeleteEvent_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_events_DeleteEvent_vue__),__WEBPACK_IMPORTED_MODULE_5__components_events_WatchEvent_vue__=__webpack_require__(13),__WEBPACK_IMPORTED_MODULE_5__components_events_WatchEvent_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_events_WatchEvent_vue__),__WEBPACK_IMPORTED_MODULE_6__components_events_IssuesEvent_vue__=__webpack_require__(9),__WEBPACK_IMPORTED_MODULE_6__components_events_IssuesEvent_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_events_IssuesEvent_vue__),__WEBPACK_IMPORTED_MODULE_7__components_events_IssueCommentEvent_vue__=__webpack_require__(8),__WEBPACK_IMPORTED_MODULE_7__components_events_IssueCommentEvent_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_events_IssueCommentEvent_vue__),__WEBPACK_IMPORTED_MODULE_8__components_events_ForkEvent_vue__=__webpack_require__(7),__WEBPACK_IMPORTED_MODULE_8__components_events_ForkEvent_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_events_ForkEvent_vue__),__WEBPACK_IMPORTED_MODULE_9__components_events_CommitCommentEvent_vue__=__webpack_require__(4),__WEBPACK_IMPORTED_MODULE_9__components_events_CommitCommentEvent_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_events_CommitCommentEvent_vue__),__WEBPACK_IMPORTED_MODULE_10__components_events_PublicEvent_vue__=__webpack_require__(10),__WEBPACK_IMPORTED_MODULE_10__components_events_PublicEvent_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_events_PublicEvent_vue__);__webpack_require__.d(__webpack_exports__,"GithubFeed",function(){return __WEBPACK_IMPORTED_MODULE_0__components_GithubFeed_vue___default.a}),__webpack_require__.d(__webpack_exports__,"PushEvent",function(){return __WEBPACK_IMPORTED_MODULE_1__components_events_PushEvent_vue___default.a}),__webpack_require__.d(__webpack_exports__,"PullRequestEvent",function(){return __WEBPACK_IMPORTED_MODULE_2__components_events_PullRequestEvent_vue___default.a}),__webpack_require__.d(__webpack_exports__,"CreateEvent",function(){return __WEBPACK_IMPORTED_MODULE_3__components_events_CreateEvent_vue___default.a}),__webpack_require__.d(__webpack_exports__,"WatchEvent",function(){return __WEBPACK_IMPORTED_MODULE_5__components_events_WatchEvent_vue___default.a}),__webpack_require__.d(__webpack_exports__,"DeleteEvent",function(){return __WEBPACK_IMPORTED_MODULE_4__components_events_DeleteEvent_vue___default.a}),__webpack_require__.d(__webpack_exports__,"IssuesEvent",function(){return __WEBPACK_IMPORTED_MODULE_6__components_events_IssuesEvent_vue___default.a}),__webpack_require__.d(__webpack_exports__,"IssueCommentEvent",function(){return __WEBPACK_IMPORTED_MODULE_7__components_events_IssueCommentEvent_vue___default.a}),__webpack_require__.d(__webpack_exports__,"ForkEvent",function(){return __WEBPACK_IMPORTED_MODULE_8__components_events_ForkEvent_vue___default.a}),__webpack_require__.d(__webpack_exports__,"CommitCommentEvent",function(){return __WEBPACK_IMPORTED_MODULE_9__components_events_CommitCommentEvent_vue___default.a}),__webpack_require__.d(__webpack_exports__,"PublicEvent",function(){return __WEBPACK_IMPORTED_MODULE_10__components_events_PublicEvent_vue___default.a});var plugin={version:"2.1.0",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}.call(__webpack_exports__,__webpack_require__(2))},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_axios__=__webpack_require__(49),__WEBPACK_IMPORTED_MODULE_0_axios___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__),client=__WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({baseURL:"https://api.github.com/users/"});__webpack_exports__.a={user:function(login){return client.get(login)},events:function(login){return client.get(login+"/events")}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__services_GithubService__=__webpack_require__(15);__webpack_exports__.default={name:"github-feed",props:{login:{required:!0}},data:function(){return{user:{},events:[],loading:!1,error:!1}},created:function(){var _this=this;__WEBPACK_IMPORTED_MODULE_0__services_GithubService__.a.user(this.login).then(function(response){_this.user=response.data,__WEBPACK_IMPORTED_MODULE_0__services_GithubService__.a.events(_this.login).then(function(events){_this.loading=!1,_this.error=!1,_this.events=events.data}).catch(function(e){_this.loading=!1,_this.error=!0})}).catch(function(e){_this.loading=!1,_this.error=!0})}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__=__webpack_require__(1);__webpack_exports__.default={name:"commit-comment-event",props:{event:{required:!0}},methods:{fromNow:__WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__.a,hash:__WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__.b}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__=__webpack_require__(1);__webpack_exports__.default={name:"create-event",props:{event:{required:!0}},methods:{fromNow:__WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__.a,link:function(event){return"branch"===event.payload.ref_type?"https://github.com/"+event.repo.name+"/tree/"+event.payload.ref:"https://github.com/"+event.repo.name+"/releases/tag/"+event.payload.ref}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__=__webpack_require__(1);__webpack_exports__.default={name:"delete-event",props:{event:{required:!0}},methods:{fromNow:__WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__.a}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__=__webpack_require__(1);__webpack_exports__.default={name:"fork-event",props:{event:{required:!0}},methods:{fromNow:__WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__.a}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__=__webpack_require__(1);__webpack_exports__.default={name:"issue-comment-event",props:{event:{required:!0}},methods:{fromNow:__WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__.a}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__=__webpack_require__(1);__webpack_exports__.default={name:"issues-event",props:{event:{required:!0}},methods:{fromNow:__WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__.a}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__=__webpack_require__(1);__webpack_exports__.default={name:"public-event",props:{event:{required:!0}},methods:{fromNow:__WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__.a}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__=__webpack_require__(1);__webpack_exports__.default={name:"pull-request-event",props:{event:{required:!0}},methods:{fromNow:__WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__.a}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__=__webpack_require__(1);__webpack_exports__.default={name:"push-event",props:{event:{required:!0}},methods:{fromNow:__WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__.a,hash:__WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__.b,branch:__WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__.c}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__=__webpack_require__(1);__webpack_exports__.default={name:"watch-event",props:{event:{required:!0}},methods:{fromNow:__WEBPACK_IMPORTED_MODULE_0__utils_FormatTools__.a}}},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"github-event"},[_c("span",{staticClass:"event-octicon octicon octicon-repo-forked dashboard-event-icon"}),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-text",staticStyle:{display:"inline-block"}},[_c("a",[_vm._v(_vm._s(_vm.event.actor.login))]),_vm._v(" "),_c("b",[_vm._v("\n        forked "),_c("a",{staticClass:"event-link",attrs:{href:"https://github.com/"+_vm.event.repo.name,target:"_blank"}},[_vm._v(_vm._s(_vm.event.repo.name))]),_vm._v("\n        to "),_c("a",{staticClass:"event-link",attrs:{href:_vm.event.payload.forkee.html_url,target:"_blank"}},[_vm._v(_vm._s(_vm.event.payload.forkee.full_name))])])]):_vm._e(),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-time"},[_vm._v("\n        "+_vm._s(_vm.fromNow(_vm.event.created_at))+"\n    ")]):_vm._e()])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"github-event"},[_c("span",{staticClass:"event-octicon octicon dashboard-event-icon",class:"repository"===_vm.event.payload.ref_type?"octicon-repo":"octicon-git-branch"}),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-text",staticStyle:{display:"inline-block"}},[_c("a",[_vm._v(_vm._s(_vm.event.actor.login))]),_vm._v(" "),_c("b",[_vm._v("\n        created "+_vm._s(_vm.event.payload.ref_type)+"\n        "),"repository"!==_vm.event.payload.ref_type?_c("span",[_c("a",{staticClass:"event-link",attrs:{href:_vm.link(_vm.event),target:"_blank"}},[_vm._v(_vm._s(_vm.event.payload.ref))]),_vm._v("\n        at")]):_vm._e(),_vm._v(" "),_c("a",{staticClass:"event-link",attrs:{href:"https://github.com/"+_vm.event.repo.name,target:"_blank"}},[_vm._v(_vm._s(_vm.event.repo.name))])])]):_vm._e(),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-time"},[_vm._v("\n        "+_vm._s(_vm.fromNow(_vm.event.created_at))+"\n    ")]):_vm._e()])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"github-event",staticStyle:{"padding-bottom":"0.5em !important"}},[_c("span",{staticClass:"event-octicon octicon octicon-git-pull-request dashboard-event-icon"}),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-text",staticStyle:{display:"inline-block"}},[_c("a",[_vm._v(_vm._s(_vm.event.actor.login))]),_vm._v(" "),_c("b",[_vm._v("\n        "+_vm._s(_vm.event.payload.action)+" pull request"),_c("a",{staticClass:"event-link",attrs:{href:_vm.event.payload.pull_request.html_url,target:"_blank"}},[_vm._v(" #"+_vm._s(_vm.event.payload.number))]),_vm._v("\n        at "),_c("a",{staticClass:"event-link",attrs:{href:"https://github.com/"+_vm.event.repo.name,target:"_blank"}},[_vm._v(_vm._s(_vm.event.repo.name))])])]):_vm._e(),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-time"},[_vm._v("\n        "+_vm._s(_vm.fromNow(_vm.event.created_at))+"\n    ")]):_vm._e(),_vm._v(" "),_c("ul",[_c("li",{staticClass:"event-text event-detail",staticStyle:{"list-style":"none"}},[_c("span",{staticClass:"event-octicon octicon octicon-chevron-right dashboard-event-icon"}),_vm._v(" "),_vm.event.payload.pull_request.merged?_c("b",[_vm._v("[MERGED]")]):_vm._e(),_vm._v(" "+_vm._s(_vm.event.payload.pull_request.title)+"\n        ")])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"github-event",staticStyle:{"padding-bottom":"0.5em !important"}},[_c("span",{staticClass:"event-octicon octicon octicon-repo-push dashboard-event-icon"}),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-text",staticStyle:{display:"inline-block"}},[_c("a",[_vm._v(_vm._s(_vm.event.actor.login))]),_vm._v(" "),_c("b",[_vm._v("\n        pushed to "),_c("a",{staticClass:"event-link",attrs:{href:"https://github.com/"+_vm.event.repo.name+"/tree/"+_vm.branch(_vm.event.payload.ref),target:"_blank"}},[_vm._v(_vm._s(_vm.branch(_vm.event.payload.ref)))]),_vm._v("\n        at "),_c("a",{staticClass:"event-link",attrs:{href:"https://github.com/"+_vm.event.repo.name,target:"_blank"}},[_vm._v(_vm._s(_vm.event.repo.name))])])]):_vm._e(),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-time"},[_vm._v("\n        "+_vm._s(_vm.fromNow(_vm.event.created_at))+"\n    ")]):_vm._e(),_vm._v(" "),_c("ul",_vm._l(_vm.event.payload.commits,function(commit){return _c("li",{staticClass:"event-text event-detail",staticStyle:{"list-style":"none"}},[_c("span",{staticClass:"event-octicon octicon octicon-git-commit dashboard-event-icon"}),_vm._v(" "),_c("a",{staticClass:"event-link",attrs:{href:"https://github.com/"+_vm.event.repo.name+"/commit/"+commit.sha,target:"_blank"}},[_vm._v(_vm._s(_vm.hash(commit.sha)))]),_vm._v(" "+_vm._s(commit.message)+"\n        ")])}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"github-event",staticStyle:{"padding-bottom":"0.5em !important"}},[_c("span",{staticClass:"event-octicon octicon dashboard-event-icon octicon-comment"}),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-text",staticStyle:{display:"inline-block"}},[_c("a",[_vm._v(_vm._s(_vm.event.actor.login))]),_vm._v(" "),_c("b",[_vm._v("\n        commented on "+_vm._s(_vm.event.payload.issue.pull_request?"pull request":"issue")+"\n            "),_c("a",{staticClass:"event-link",attrs:{href:_vm.event.payload.issue.html_url,target:"_blank"}},[_vm._v(" #"+_vm._s(_vm.event.payload.issue.number))]),_vm._v("\n        at "),_c("a",{staticClass:"event-link",attrs:{href:"https://github.com/"+_vm.event.repo.name,target:"_blank"}},[_vm._v(_vm._s(_vm.event.repo.name))])])]):_vm._e(),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-time"},[_vm._v("\n        "+_vm._s(_vm.fromNow(_vm.event.created_at))+"\n    ")]):_vm._e(),_vm._v(" "),_c("ul",[_c("li",{staticClass:"event-text event-detail",staticStyle:{"list-style":"none"}},[_c("span",{staticClass:"event-octicon octicon octicon-chevron-right dashboard-event-icon"}),_vm._v(" "),_c("a",{staticClass:"event-link",attrs:{href:_vm.event.payload.comment.html_url,target:"_blank"}},[_vm._v("See comment here ...")])])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"github-event",staticStyle:{"padding-bottom":"0.5em !important"}},[_c("span",{staticClass:"event-octicon octicon dashboard-event-icon",class:"opened"===_vm.event.payload.action?"octicon-issue-opened":"octicon-issue-closed"}),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-text",staticStyle:{display:"inline-block"}},[_c("a",[_vm._v(_vm._s(_vm.event.actor.login))]),_vm._v(" "),_c("b",[_vm._v("\n        "+_vm._s(_vm.event.payload.action)+" issue\n            "),_c("a",{staticClass:"event-link",attrs:{href:_vm.event.payload.issue.html_url,target:"_blank"}},[_vm._v(" #"+_vm._s(_vm.event.payload.issue.number))]),_vm._v("\n        at "),_c("a",{staticClass:"event-link",attrs:{href:"https://github.com/"+_vm.event.repo.name,target:"_blank"}},[_vm._v(_vm._s(_vm.event.repo.name))])])]):_vm._e(),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-time"},[_vm._v("\n        "+_vm._s(_vm.fromNow(_vm.event.created_at))+"\n    ")]):_vm._e(),_vm._v(" "),_c("ul",[_c("li",{staticClass:"event-text event-detail",staticStyle:{"list-style":"none"}},[_c("span",{staticClass:"event-octicon octicon octicon-chevron-right dashboard-event-icon"}),_vm._v(_vm._s(_vm.event.payload.issue.title)+"\n        ")])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"github-event"},[_c("span",{staticClass:"event-octicon octicon octicon-star dashboard-event-icon"}),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-text",staticStyle:{display:"inline-block"}},[_c("a",[_vm._v(_vm._s(_vm.event.actor.login))]),_vm._v(" "),_c("b",[_vm._v("\n        starred "),_c("a",{staticClass:"event-link",attrs:{href:"https://github.com/"+_vm.event.repo.name,target:"_blank"}},[_vm._v(_vm._s(_vm.event.repo.name))])])]):_vm._e(),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-time"},[_vm._v("\n        "+_vm._s(_vm.fromNow(_vm.event.created_at))+"\n    ")]):_vm._e()])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"github-event",staticStyle:{"padding-bottom":"0.5em !important"}},[_c("span",{staticClass:"event-octicon octicon dashboard-event-icon octicon-comment"}),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-text",staticStyle:{display:"inline-block"}},[_c("a",[_vm._v(_vm._s(_vm.event.actor.login))]),_vm._v(" "),_c("b",[_vm._v("\n        commented on commit\n            "),_c("a",{staticClass:"event-link",attrs:{href:"https://github.com/"+_vm.event.repo.name+"/commit/"+_vm.event.payload.comment.commit_id,target:"_blank"}},[_vm._v(" "+_vm._s(_vm.hash(_vm.event.payload.comment.commit_id)))]),_vm._v("\n        at "),_c("a",{staticClass:"event-link",attrs:{href:"https://github.com/"+_vm.event.repo.name,target:"_blank"}},[_vm._v(_vm._s(_vm.event.repo.name))])])]):_vm._e(),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-time"},[_vm._v("\n        "+_vm._s(_vm.fromNow(_vm.event.created_at))+"\n    ")]):_vm._e(),_vm._v(" "),_c("ul",[_c("li",{staticClass:"event-text event-detail",staticStyle:{"list-style":"none"}},[_c("span",{staticClass:"event-octicon octicon octicon-chevron-right dashboard-event-icon"}),_vm._v(" "),_c("a",{staticClass:"event-link",attrs:{href:_vm.event.payload.comment.html_url,target:"_blank"}},[_vm._v("See comment here ...")])])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"github-event"},[_c("span",{staticClass:"event-octicon octicon octicon-trashcan dashboard-event-icon"}),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-text",staticStyle:{display:"inline-block"}},[_c("a",[_vm._v(_vm._s(_vm.event.actor.login))]),_vm._v(" "),_c("b",[_vm._v("\n        deleted "+_vm._s(_vm.event.payload.ref_type)+" "),_c("a",{staticClass:"event-link",attrs:{href:"#"}},[_vm._v(_vm._s(_vm.event.payload.ref))]),_vm._v("\n        at "),_c("a",{staticClass:"event-link",attrs:{href:"https://github.com/"+_vm.event.repo.name,target:"_blank"}},[_vm._v(_vm._s(_vm.event.repo.name))])])]):_vm._e(),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-time"},[_vm._v("\n        "+_vm._s(_vm.fromNow(_vm.event.created_at))+"\n    ")]):_vm._e()])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"github-event"},[_c("span",{staticClass:"event-octicon octicon octicon-telescope dashboard-event-icon"}),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-text",staticStyle:{display:"inline-block"}},[_c("a",[_vm._v(_vm._s(_vm.event.actor.login))]),_vm._v(" "),_c("b",[_vm._v("\n        open sourced "),_c("a",{staticClass:"event-link",attrs:{href:"https://github.com/"+_vm.event.repo.name,target:"_blank"}},[_vm._v(_vm._s(_vm.event.repo.name))])])]):_vm._e(),_vm._v(" "),_vm.event?_c("div",{staticClass:"event-time"},[_vm._v("\n        "+_vm._s(_vm.fromNow(_vm.event.created_at))+"\n    ")]):_vm._e()])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"feed"},[_c("div",{staticClass:"header-wrapper"},[_c("div",{staticClass:"header"},[_vm._m(0),_vm._v(" "),_c("a",{staticClass:"github-profile",attrs:{href:_vm.user.html_url,target:"_blank"}},[_c("div",{staticStyle:{"font-size":"26px","line-height":"30px"}},[_vm._v("\n                    "+_vm._s(_vm.user.name)+"\n                ")]),_vm._v(" "),_c("div",{staticClass:"github-username"},[_vm._v("\n                    "+_vm._s(_vm.user.login)+"\n                ")])]),_vm._v(" "),_c("div",{staticClass:"avatar-wrapper"},[_c("img",{staticClass:"avatar",attrs:{src:_vm.user.avatar_url}})])])]),_vm._v(" "),_c("div",{staticClass:"events-wrapper"},[_c("div",{staticClass:"feed-list"},[_c("div",{staticClass:"event-list"},_vm._l(_vm.events,function(event){return _c("div",["PushEvent"===event.type?_c("push-event",{key:event.id,attrs:{event:event}}):_vm._e(),_vm._v(" "),"PullRequestEvent"===event.type?_c("pull-request-event",{key:event.id,attrs:{event:event}}):_vm._e(),_vm._v(" "),"CreateEvent"===event.type?_c("create-event",{key:event.id,attrs:{event:event}}):_vm._e(),_vm._v(" "),"WatchEvent"===event.type?_c("watch-event",{key:event.id,attrs:{event:event}}):_vm._e(),_vm._v(" "),"DeleteEvent"===event.type?_c("delete-event",{key:event.id,attrs:{event:event}}):_vm._e(),_vm._v(" "),"IssuesEvent"===event.type?_c("issues-event",{key:event.id,attrs:{event:event}}):_vm._e(),_vm._v(" "),"IssueCommentEvent"===event.type?_c("issue-comment-event",{key:event.id,attrs:{event:event}}):_vm._e(),_vm._v(" "),"ForkEvent"===event.type?_c("fork-event",{key:event.id,attrs:{event:event}}):_vm._e(),_vm._v(" "),"CommitCommentEvent"===event.type?_c("commit-comment-event",{key:event.id,attrs:{event:event}}):_vm._e(),_vm._v(" "),"PublicEvent"===event.type?_c("public-event",{key:event.id,attrs:{event:event}}):_vm._e()],1)}))])]),_vm._v(" "),_vm._m(1)])},staticRenderFns:[function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"github-icon"},[_c("span",{staticClass:"github-octicon octicon octicon-mark-github"})])},function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"footer-wrapper"},[_c("p",{staticStyle:{display:"inline"}},[_vm._v("Public Activity")]),_vm._v(" "),_c("a",{staticStyle:{float:"right",color:"#232323"},attrs:{target:"_blank",href:"https://github.com/lexmartinez/vue-github-activity"}},[_vm._v("GitHub Activity Feed")])])}]}},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_49__},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_50__}])});