(self.webpackChunkreact_travelpa_admin=self.webpackChunkreact_travelpa_admin||[]).push([[569],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.__esModule=!0,e.exports.default=e.exports},22858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},59713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},13884:function(e){e.exports=function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);c=!0);}catch(a){u=!0,r=a}finally{try{c||null==n.return||n.return()}finally{if(u)throw r}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},80521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},63038:function(e,t,n){var o=n(22858),r=n(13884),i=n(60379),c=n(80521);e.exports=function(e,t){return o(e)||r(e,t)||i(e,t)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},60379:function(e,t,n){var o=n(67228);e.exports=function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},10173:function(e,t,n){"use strict";var o=n(87757),r=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{a(o.next(e))}catch(t){i(t)}}function u(e){try{a(o.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}a((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.FacebookLoginClient=t.SDK_SCRIPT_ELE_ID=void 0;var i=n(78193);t.SDK_SCRIPT_ELE_ID="facebook-jssdk",t.FacebookLoginClient={getFB:function(){return window.FB?window.FB:(console.warn("FB not found"),null)},getLoginStatus:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.getFB();n?n.getLoginStatus(e,t):e({status:"unknown"})},getProfile:function(e,t){var n;null===(n=this.getFB())||void 0===n||n.api("me",t,e)},init:function(e){var t;null===(t=this.getFB())||void 0===t||t.init(e)},clear:function(){window.FB=null;var e=document.getElementById(t.SDK_SCRIPT_ELE_ID);e&&e.remove()},isRedirected:function(e){var t,n,o=(0,i.paramsToObject)(window.location.search);return(null!==(t=o.state===(null===e||void 0===e?void 0:e.state))&&void 0!==t?t:"facebookdirect")&&void 0!==o[null!==(n=null===e||void 0===e?void 0:e.response_type)&&void 0!==n?n:""]},loadSdk:function(e,n){return r(this,void 0,void 0,o.mark((function r(){return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,i.createScriptEle)(t.SDK_SCRIPT_ELE_ID,"https://connect.facebook.net/".concat(e,"/sdk").concat(n?"/xfbml.customerchat":"",".js"));case 2:case"end":return o.stop()}}),r)})))},redirectToDialog:function(e,t){window.location.href="https://www.facebook.com/dialog/oauth".concat((0,i.objectToParams)(Object.assign(Object.assign({},e),t)))},login:function(e,t){var n;null===(n=this.getFB())||void 0===n||n.login(e,t)},logout:function(e){var t=this;this.getLoginStatus((function(n){var o;"connected"===n.status?null===(o=t.getFB())||void 0===o||o.logout(e):e()}))}}},8352:function(e,t,n){"use strict";var o=n(87757),r=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},u=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{a(o.next(e))}catch(t){i(t)}}function u(e){try{a(o.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}a((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(72791)),s=n(10173);t.default=function(e){var t,n,r=this,i=e.appId,c=e.language,l=void 0===c?"en_US":c,d=e.scope,f=void 0===d?"public_profile, email":d,p=e.fields,v=void 0===p?"name,email,picture":p,b=e.onSuccess,g=e.onFail,_=e.onProfileSuccess,h=e.className,m=e.style,y=e.children,O=void 0===y?"Login with Facebook":y,w=e.render,j=e.autoLoad,S=void 0!==j&&j,x=e.useRedirect,P=void 0!==x&&x,k=e.useCustomerChat,C=void 0!==k&&k,L=Object.assign(Object.assign({version:"v9.0",xfbml:!1,cookie:!1,localStorage:!0},e.initParams),{appId:i}),E=Object.assign(Object.assign({redirect_uri:"undefined"!==typeof window?location.origin+location.pathname:"/",state:"facebookdirect",response_type:"code"},e.dialogParams),{client_id:i}),M=Object.assign(Object.assign({return_scopes:!1},e.loginOptions),{auth_nonce:"function"===typeof(null===(t=e.loginOptions)||void 0===t?void 0:t.auth_nonce)?e.loginOptions.auth_nonce():null===(n=e.loginOptions)||void 0===n?void 0:n.auth_nonce,scope:f});(0,a.useEffect)((function(){F()}),[]);var F=function(){return u(r,void 0,void 0,o.mark((function e(){return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.FacebookLoginClient.loadSdk(l,C);case 2:window.fbAsyncInit=function(){s.FacebookLoginClient.init(L);var e=s.FacebookLoginClient.isRedirected(E);!1===e&&S?B():!0===e&&P&&I()};case 3:case"end":return e.stop()}}),e)})))},I=function(){s.FacebookLoginClient.login((function(e){e.authResponse?(b&&b(e.authResponse),_&&s.FacebookLoginClient.getProfile(_,{fields:v})):g&&g({status:"loginCancelled"})}),Object.assign(Object.assign({},M),{scope:f}))},B=function(){P?s.FacebookLoginClient.redirectToDialog(E,M):window.FB?I():g&&g({status:"facebookNotLoaded"})};return w?w({onClick:B,logout:s.FacebookLoginClient.logout}):a.default.createElement("button",{type:"button",onClick:B,className:h,style:m},O)}},50717:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createScriptEle=void 0;t.createScriptEle=function(e,t){return new Promise((function(n){var o=document.getElementsByTagName("script")[0];if(!document.getElementById(e)){var r=document.createElement("script");r.id=e,r.src=t,r.onload=n,o.parentNode.insertBefore(r,o)}}))}},78193:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(50717),t),r(n(89939),t)},89939:function(e,t,n){"use strict";var o=n(59713).default,r=n(63038).default;Object.defineProperty(t,"__esModule",{value:!0}),t.paramsToObject=t.objectToParams=t.isObject=void 0;t.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)};t.objectToParams=function(e){return(0,t.isObject)(e)&&0!==Object.keys(e).length?"?"+Object.keys(e).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(e[t]))})).join("&"):""};t.paramsToObject=function(e){return(null===e||void 0===e?void 0:e.replace(/^\?/,"").split("&").reduce((function(e,t){if(!t)return e;var n=t.split("="),i=r(n,2),c=i[0],u=i[1];return Object.assign(Object.assign({},e),o({},c,decodeURIComponent(u)))}),{}))||{}}},86780:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=i(n(8352));r(n(78193),t),r(n(5129),t),r(n(8352),t),r(n(10173),t),t.default=c.default},69917:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},5129:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(69917),t),r(n(50068),t),r(n(40005),t)},50068:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},40005:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoginStatus=void 0,function(e){e.Connected="connected",e.NotAuthorized="not_authorized",e.Unknown="unknown"}(t.LoginStatus||(t.LoginStatus={}))},55872:function(e,t,n){"use strict";n.d(t,{Nq:function(){return d},rg:function(){return s}});var o=n(1413),r=n(45987),i=n(29439),c=n(72791),u=["flow","scope","onSuccess","onError"];var a=(0,c.createContext)(null);function s(e){var t=e.clientId,n=e.onScriptLoadSuccess,o=e.onScriptLoadError,r=e.children,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onScriptLoadSuccess,n=e.onScriptLoadError,o=(0,c.useState)(!1),r=(0,i.Z)(o,2),u=r[0],a=r[1],s=(0,c.useRef)(t);s.current=t;var l=(0,c.useRef)(n);return l.current=n,(0,c.useEffect)((function(){var e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.onload=function(){var e;a(!0),null===(e=s.current)||void 0===e||e.call(s)},e.onerror=function(){var e;a(!1),null===(e=l.current)||void 0===e||e.call(l)},document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),u}({onScriptLoadSuccess:n,onScriptLoadError:o}),s=(0,c.useMemo)((function(){return{clientId:t,scriptLoadedSuccessfully:u}}),[t,u]);return c.createElement(a.Provider,{value:s},r)}function l(){var e=(0,c.useContext)(a);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function d(e){var t=e.flow,n=void 0===t?"implicit":t,i=e.scope,a=void 0===i?"":i,s=e.onSuccess,d=e.onError,f=(0,r.Z)(e,u),p=l(),v=p.clientId,b=p.scriptLoadedSuccessfully,g=(0,c.useRef)(),_=(0,c.useRef)(s);_.current=s;var h=(0,c.useRef)(d);h.current=d,(0,c.useEffect)((function(){var e;if(b){var t="implicit"===n?"initTokenClient":"initCodeClient",r=null===(e=window.google)||void 0===e?void 0:e.accounts.oauth2[t]((0,o.Z)({client_id:v,scope:"openid profile email ".concat(a),callback:function(e){var t,n;if(e.error)return null===(t=h.current)||void 0===t?void 0:t.call(h,e);null===(n=_.current)||void 0===n||n.call(_,e)}},f));g.current=r}}),[v,b,n,a]);var m=(0,c.useCallback)((function(e){return g.current.requestAccessToken(e)}),[]),y=(0,c.useCallback)((function(){return g.current.requestCode()}),[]);return"implicit"===n?m:y}}}]);
//# sourceMappingURL=569.2b5115b3.chunk.js.map