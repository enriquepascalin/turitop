(()=>{var e={997:e=>{var t=1e3,n=60*t,i=60*n,o=24*i,s=7*o,a=365.25*o;function r(e,t,n,i){var o=t>=1.5*n;return Math.round(e/n)+" "+i+(o?"s":"")}e.exports=function(e,c){c=c||{};var l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var r=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!r)return;var c=parseFloat(r[1]);switch((r[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*a;case"weeks":case"week":case"w":return c*s;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*i;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===l&&isFinite(e))return c.long?function(e){var s=Math.abs(e);if(s>=o)return r(e,s,o,"day");if(s>=i)return r(e,s,i,"hour");if(s>=n)return r(e,s,n,"minute");if(s>=t)return r(e,s,t,"second");return e+" ms"}(e):function(e){var s=Math.abs(e);if(s>=o)return Math.round(e/o)+"d";if(s>=i)return Math.round(e/i)+"h";if(s>=n)return Math.round(e/n)+"m";if(s>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},372:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var i=n(67);const o=n.n(i)()("dops:analytics");let s,a;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;const r={initialize:function(e,t,n){r.setUser(e,t),r.setSuperProps(n),r.identifyUser()},setGoogleAnalyticsEnabled:function(e,t=null){this.googleAnalyticsEnabled=e,this.googleAnalyticsKey=t},setMcAnalyticsEnabled:function(e){this.mcAnalyticsEnabled=e},setUser:function(e,t){a={ID:e,username:t}},setSuperProps:function(e){s=e},assignSuperProps:function(e){s=Object.assign(s||{},e)},mc:{bumpStat:function(e,t){const n=function(e,t){let n="";if("object"==typeof e){for(const t in e)n+="&x_"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);o("Bumping stats %o",e)}else n="&x_"+encodeURIComponent(e)+"="+encodeURIComponent(t),o('Bumping stat "%s" in group "%s"',t,e);return n}(e,t);r.mcAnalyticsEnabled&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+n+"&t="+Math.random())},bumpStatWithPageView:function(e,t){const n=function(e,t){let n="";if("object"==typeof e){for(const t in e)n+="&"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);o("Built stats %o",e)}else n="&"+encodeURIComponent(e)+"="+encodeURIComponent(t),o('Built stat "%s" in group "%s"',t,e);return n}(e,t);r.mcAnalyticsEnabled&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+n+"&t="+Math.random())}},pageView:{record:function(e,t){r.tracks.recordPageView(e),r.ga.recordPageView(e,t)}},purchase:{record:function(e,t,n,i,o,s,a){r.ga.recordPurchase(e,t,n,i,o,s,a)}},tracks:{recordEvent:function(e,t){t=t||{},0===e.indexOf("akismet_")||0===e.indexOf("jetpack_")?(s&&(o("- Super Props: %o",s),t=Object.assign(t,s)),o('Record event "%s" called with props %s',e,JSON.stringify(t)),window._tkq.push(["recordEvent",e,t])):o('- Event name must be prefixed by "akismet_" or "jetpack_"')},recordJetpackClick:function(e){const t="object"==typeof e?e:{target:e};r.tracks.recordEvent("jetpack_wpa_click",t)},recordPageView:function(e){r.tracks.recordEvent("akismet_page_view",{path:e})},setOptOut:function(e){o("Pushing setOptOut: %o",e),window._tkq.push(["setOptOut",e])}},ga:{initialized:!1,initialize:function(){let e={};r.ga.initialized||(a&&(e={userId:"u-"+a.ID}),window.ga("create",this.googleAnalyticsKey,"auto",e),r.ga.initialized=!0)},recordPageView:function(e,t){r.ga.initialize(),o("Recording Page View ~ [URL: "+e+"] [Title: "+t+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",e),window.ga("send",{hitType:"pageview",page:e,title:t}))},recordEvent:function(e,t,n,i){r.ga.initialize();let s="Recording Event ~ [Category: "+e+"] [Action: "+t+"]";void 0!==n&&(s+=" [Option Label: "+n+"]"),void 0!==i&&(s+=" [Option Value: "+i+"]"),o(s),this.googleAnalyticsEnabled&&window.ga("send","event",e,t,n,i)},recordPurchase:function(e,t,n,i,o,s,a){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:e,revenue:i,currency:a}),window.ga("ecommerce:addItem",{id:e,name:t,sku:n,price:o,quantity:s}),window.ga("ecommerce:send")}},identifyUser:function(){a&&window._tkq.push(["identifyUser",a.ID,a.username])},setProperties:function(e){window._tkq.push(["setProperties",e])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},c=r},985:(e,t,n)=>{"use strict";n.d(t,{Sy:()=>i.Sy,st:()=>o.A});var i=n(634),o=(n(34),n(595),n(265),n(489));n(923),n(877),n(335),n(290)},877:(e,t,n)=>{"use strict";n(609)},335:(e,t,n)=>{"use strict";n(468)},489:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var i=n(372),o=n(384),s=n(468);const{tracks:a}=i.A,{recordEvent:r}=a,c=({pageViewEventName:e=null,pageViewNamespace:t="jetpack",pageViewSuffix:n="page_view",pageViewEventProperties:c={}}={})=>{const[l,d]=(0,s.useState)(!1),{isUserConnected:u,isRegistered:p,userConnectionData:g={}}=(0,o.useConnection)(),{wpcomUser:{login:m,ID:w}={},blogId:f}=g.currentUser||{},C=(0,s.useCallback)((async(e,t={})=>{u&&w&&m&&r(e,t)}),[u,w,m]);return(0,s.useEffect)((()=>{u&&w&&m&&f&&i.A.initialize(w,m,{blog_id:f})}),[f,w,m,u]),(0,s.useEffect)((()=>{const i=e?`${t}_${e}_${n}`:null;p&&i&&(l||(C(i,c),d(!0)))}),[l,t,e,n,p,c,C]),{recordEvent:C,tracks:a}}},923:(e,t,n)=>{"use strict";n(143),n(468),n(290)},105:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>p,E9:()=>u});var i=n(143),o=n(634),s=n(478),a=n(290);const r="SET_JETPACK_MODULES",c="SET_MODULE_UPDATING";function l(e){return u({isLoading:e})}function d(e,t){return{type:c,name:e,isUpdating:t}}function u(e){return{type:r,options:e}}const p={updateJetpackModuleStatus:function*(e){try{yield d(e.name,!0),yield(0,s.sB)(e);const t=yield(0,s.wz)();return yield u({data:t}),!0}catch(e){const t=(0,i.select)(a.F).getJetpackModules();return yield u(t),!1}finally{yield d(e.name,!1)}},setJetpackModules:u,fetchModules:function*(){if((0,o.Sy)())return!0;try{yield l(!0);const e=yield(0,s.wz)();return yield u({data:e}),!0}catch(e){const t=(0,i.select)(a.F).getJetpackModules();return yield u(t),!1}finally{yield l(!1)}}}},478:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>l,sB:()=>c,wz:()=>r});var i=n(455),o=n.n(i);const s="FETCH_JETPACK_MODULES",a="UPDATE_JETPACK_MODULE_STATUS",r=()=>({type:s}),c=e=>({type:a,settings:e}),l={[s]:function(){return o()({path:"/jetpack/v4/module/all",method:"GET"})},[a]:function({settings:e}){return o()({path:`/jetpack/v4/module/${e.name}/active`,method:"POST",data:{active:e.active}})}}},290:(e,t,n)=>{"use strict";n.d(t,{F:()=>l});var i=n(143),o=n(105),s=n(478),a=n(862),r=n(701),c=n(640);const l="jetpack-modules",d=(0,i.createReduxStore)(l,{reducer:a.A,actions:o.Ay,controls:s.Ay,resolvers:r.A,selectors:c.A});(0,i.register)(d);const u=window?.Initial_State?.getModules||window?.Jetpack_Editor_Initial_State?.modules||null;null!==u&&(0,i.dispatch)(l).setJetpackModules({data:{...u}})},862:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const i={isLoading:!1,isUpdating:{},data:{}},o=(e=i,t)=>{switch(t.type){case"SET_JETPACK_MODULES":return{...e,...t.options};case"SET_MODULE_UPDATING":return{...e,isUpdating:{...e.isUpdating,[t.name]:t.isUpdating}}}return e}},701:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var i=n(105),o=n(478);const s={getJetpackModules:function*(){try{const e=yield(0,o.wz)();if(e)return(0,i.E9)({data:e})}catch(e){console.error(e)}}}},640:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var i=n(634);const o={getJetpackModules:e=>e.data,isModuleActive:(e,t)=>(0,i.Sy)()||(e?.data?.[t]?.activated??!1),areModulesLoading:e=>e.isLoading??!1,isModuleUpdating:(e,t)=>e?.isUpdating?.[t]??!1}},265:(e,t,n)=>{"use strict";var i=n(723);n(832),n(87);const __=i.__;__("Upgrade your plan to use video covers","jetpack"),__("Upgrade your plan to upload audio","jetpack")},34:(e,t,n)=>{"use strict";n(279)},634:(e,t,n)=>{"use strict";function i(){return"object"==typeof window&&"string"==typeof window._currentSiteType?window._currentSiteType:null}function o(){return"simple"===i()}n.d(t,{Sy:()=>o})},595:(e,t,n)=>{"use strict";n(72),n(491)},67:(e,t,n)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let i=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(i++,"%c"===e&&(o=i))})),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(926)(t);const{formatters:i}=e.exports;i.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},926:(e,t,n)=>{e.exports=function(e){function t(e){let n,o,s,a=null;function r(...e){if(!r.enabled)return;const i=r,o=Number(new Date),s=o-(n||o);i.diff=s,i.prev=n,i.curr=o,n=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return"%";a++;const s=t.formatters[o];if("function"==typeof s){const t=e[a];n=s.call(i,t),e.splice(a,1),a--}return n})),t.formatArgs.call(i,e);(i.log||t.log).apply(i,e)}return r.namespace=e,r.useColors=t.useColors(),r.color=t.selectColor(e),r.extend=i,r.destroy=t.destroy,Object.defineProperty(r,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(o!==t.namespaces&&(o=t.namespaces,s=t.enabled(e)),s),set:e=>{a=e}}),"function"==typeof t.init&&t.init(r),r}function i(e,n){const i=t(this.namespace+(void 0===n?":":n)+e);return i.log=this.log,i}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const i=("string"==typeof e?e:"").split(/[\s,]+/),o=i.length;for(n=0;n<o;n++)i[n]&&("-"===(e=i[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,i;for(n=0,i=t.skips.length;n<i;n++)if(t.skips[n].test(e))return!1;for(n=0,i=t.names.length;n<i;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(997),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},384:e=>{"use strict";e.exports=window.JetpackConnection},609:e=>{"use strict";e.exports=window.React},87:e=>{"use strict";e.exports=window.lodash},455:e=>{"use strict";e.exports=window.wp.apiFetch},715:e=>{"use strict";e.exports=window.wp.blockEditor},427:e=>{"use strict";e.exports=window.wp.components},491:e=>{"use strict";e.exports=window.wp.compose},143:e=>{"use strict";e.exports=window.wp.data},468:e=>{"use strict";e.exports=window.wp.element},723:e=>{"use strict";e.exports=window.wp.i18n},279:e=>{"use strict";e.exports=window.wp.plugins},832:e=>{"use strict";e.exports=window.wp.url},72:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);(()=>{"use strict";var e=n(985),t=n(715),i=n(427),o=n(491),s=n(143),a=n(468),r=n(723);const __=r.__,_x=r._x,c={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&nbsp;":" "},l=/&(?:amp|lt|gt|quot|#39|nbsp);/g,d=e=>{if("string"!=typeof e)return e;return e.replace(l,(e=>c[e]))},u=e=>!new Set(["core/legacy-widget","core/widget-area"]).has(e);wp.hooks.addFilter("blocks.registerBlockType","widget/visibility",(function(e,t){return u(t)&&void 0!==e.attributes&&(e.attributes=Object.assign(e.attributes,{conditions:{type:"object",default:{}}})),e}));const p=(e,t=0)=>e.reduce(((e,n)=>{const[i,o]=n,s=" ".repeat(3*t);if(Array.isArray(o)){const n={label:d(s+i),value:i,disabled:!0},a=p(o,t+1);return e.concat([n]).concat(a)}const a={label:d(s+o),value:i};return e.concat([a])}),[]),g=t=>{const{rule:n,onDelete:o,setMajor:s,setMinor:a}=t,r=[{label:__("User","jetpack"),value:"loggedin"},{label:__("Role","jetpack"),value:"role"}],c=widget_conditions_data.taxonomy&&widget_conditions_data.taxonomy.length>1||"taxonomy"===n.major,l=[{label:__("Taxonomy","jetpack"),value:"taxonomy"}],d=[{label:__("-- Select --","jetpack"),value:""},{label:__("Category","jetpack"),value:"category"},{label:__("Author","jetpack"),value:"author"}].concat((0,e.Sy)()?[]:r).concat([{label:__("Tag","jetpack"),value:"tag"},{label:__("Date","jetpack"),value:"date"},{label:__("Page","jetpack"),value:"page"}]).concat(c?l:[]);let u=[];return n.major in widget_conditions_data&&(u=p(widget_conditions_data[n.major])),React.createElement("div",{className:"widget-vis__rule"},React.createElement("div",{className:"widget-vis__rule-major"},React.createElement("span",{className:"widget-vis__if"},_x("If","Widget Visibility: If {Rule Major [Page]} is {Rule Minor [Search results]}","jetpack")),React.createElement("div",{className:"widget-vis__select"},React.createElement(i.SelectControl,{label:__("Major Rule","jetpack"),hideLabelFromVision:!0,value:n.major,options:d,onChange:s}))),n.major&&React.createElement("div",{className:"widget-vis__rule-minor"},React.createElement("span",{className:"widget-vis__is"},_x("is","Widget Visibility: {Rule Major [Page]} is {Rule Minor [Search results]}","jetpack")),React.createElement("div",{className:"widget-vis__select"},React.createElement(i.SelectControl,{className:"widget-vis__select-multi-level",label:__("Minor Rule","jetpack"),hideLabelFromVision:!0,value:n.minor,options:u,onChange:a}))),React.createElement("div",{className:"widget-vis__delete-rule"},React.createElement(i.Button,{onClick:o,isSmall:!0,variant:"secondary"},_x("Remove","Delete this visibility rule","jetpack"))))},m=e=>({action:"show",rules:[],match_all:0,...e}),w=(0,o.createHigherOrderComponent)((n=>o=>{const{clientId:r,attributes:c,setAttributes:l,isSelected:d}=o,p=(0,a.useMemo)((()=>c.conditions||{}),[c]),w=(0,a.useMemo)((()=>p.rules||[]),[p]),{tracks:f}=(0,e.st)(),C=(0,s.useSelect)((e=>{const{getBlockParents:t,getBlock:n}=e("core/block-editor"),i=t(r,!0),o=i?n(i[0]):void 0;return!o||o&&"core/widget-area"===o.name}),[r]),y=(0,a.useCallback)((()=>{f.recordEvent("jetpack_widget_visibility_toggle_match_all_click"),l({conditions:{...m(p),match_all:"0"===p.match_all?"1":"0"}})}),[f,l,p]),v=(0,a.useCallback)((e=>l({conditions:{...m(p),action:e}})),[l,p]),_=(0,a.useCallback)((()=>{const e=[...w,{major:"",minor:""}];f.recordEvent("jetpack_widget_visibility_add_new_rule_click"),l({conditions:{...m(p),rules:e}})}),[w,f,l,p]),h=(0,a.useCallback)((e=>{const t=[...w.slice(0,e),...w.slice(e+1)];f.recordEvent("jetpack_widget_visibility_delete_rule_click"),l({conditions:{...m(p),rules:t}})}),[w,f,l,p]),b=(0,a.useCallback)(((e,t)=>{f.recordEvent("jetpack_widget_visibility_set_major_rule_click");let n="";t in widget_conditions_data&&Array.isArray(widget_conditions_data[t])&&widget_conditions_data[t].length>0&&(n=widget_conditions_data[t][0][0]);const i=[...w.slice(0,e),{...w[e],major:t,minor:n},...w.slice(e+1)];l({conditions:{...m(p),rules:i}})}),[f,w,l,p]),k=(0,a.useCallback)(((e,t)=>{if(f.recordEvent("jetpack_widget_visibility_set_minor_rule_click"),t&&t.includes("__HEADER__"))return;const n=[...w.slice(0,e),{...w[e],minor:t},...w.slice(e+1)];l({conditions:{...m(p),rules:n}})}),[f,w,l,p]);let F=null;return F=0===w.length?React.createElement(i.BaseControl,{id:"widget-vis__wrapper",className:"widget-vis__wrapper",label:__("Visibility","jetpack"),help:__("No visibility rules yet. Add at least one rule to use this feature.","jetpack")},React.createElement(i.Button,{variant:"secondary",onClick:_,className:"widget-vis__add-new-rule"},__("Add new rule","jetpack"))):React.createElement(i.BaseControl,{className:"widget-vis__wrapper",id:"widget-vis__wrapper",label:__("Visibility","jetpack")},React.createElement(i.SelectControl,{className:"widget-vis__show-hide",label:__("Action","jetpack"),hideLabelFromVision:!0,value:c.conditions.action,options:[{label:__("Show this block","jetpack"),value:"show"},{label:__("Hide this block","jetpack"),value:"hide"}],onChange:v}),w.map(((e,t)=>React.createElement(g,{key:t,rule:e,i:t,onDelete:()=>h(t),setMajor:e=>b(t,e),setMinor:e=>k(t,e)}))),w.length>1&&React.createElement(i.ToggleControl,{className:"widget-vis__match-all",label:__("Match all rules","jetpack"),checked:"1"===p.match_all,onChange:y}),React.createElement(i.Button,{variant:"secondary",onClick:_},__("Add new rule","jetpack"))),React.createElement(a.Fragment,null,React.createElement(n,o),d&&C&&u(o.name)&&React.createElement(t.InspectorAdvancedControls,null,F),d&&!C&&u(o.name)&&React.createElement(t.InspectorAdvancedControls,null,React.createElement(i.BaseControl,{id:"widget-vis__wrapper",className:"widget-vis__wrapper",label:__("Visibility","jetpack"),help:__("Please select the top level block of this widget to apply visibility rules.","jetpack")})))}),"visibilityAdvancedControls");wp.hooks.addFilter("editor.BlockEdit","widget/visibility",w)})(),window.WidgetVisibility={}.WidgetVisibility})();