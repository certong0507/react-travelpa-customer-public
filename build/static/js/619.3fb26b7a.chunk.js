"use strict";(self.webpackChunkreact_travelpa_admin=self.webpackChunkreact_travelpa_admin||[]).push([[619],{5574:function(e,r,o){var a=o(4942),n=o(63366),t=o(87462),i=o(72791),l=o(28182),c=o(90767),s=o(96248),d=o(14036),p=o(58446),u=o(60627),v=o(10703),f=o(61046),m=o(47630),Z=o(17780),h=o(85090),x=o(52739),g=o(13967),b=o(80184),S=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],w=(0,m.ZP)(x.Z,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,r){return r.backdrop}})({zIndex:-1}),W=(0,m.ZP)(p.Z,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,r){return r.root}})({"@media print":{position:"absolute !important"}}),k=(0,m.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,r){var o=e.ownerState;return[r.container,r["scroll".concat((0,d.Z)(o.scroll))]]}})((function(e){var r=e.ownerState;return(0,t.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===r.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===r.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),D=(0,m.ZP)(v.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,r){var o=e.ownerState;return[r.paper,r["scrollPaper".concat((0,d.Z)(o.scroll))],r["paperWidth".concat((0,d.Z)(String(o.maxWidth)))],o.fullWidth&&r.paperFullWidth,o.fullScreen&&r.paperFullScreen]}})((function(e){var r=e.theme,o=e.ownerState;return(0,t.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===o.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===o.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===o.maxWidth&&(0,a.Z)({maxWidth:"px"===r.breakpoints.unit?Math.max(r.breakpoints.values.xs,444):"".concat(r.breakpoints.values.xs).concat(r.breakpoints.unit)},"&.".concat(Z.Z.paperScrollBody),(0,a.Z)({},r.breakpoints.down(Math.max(r.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),"xs"!==o.maxWidth&&(0,a.Z)({maxWidth:"".concat(r.breakpoints.values[o.maxWidth]).concat(r.breakpoints.unit)},"&.".concat(Z.Z.paperScrollBody),(0,a.Z)({},r.breakpoints.down(r.breakpoints.values[o.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&(0,a.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(Z.Z.paperScrollBody),{margin:0,maxWidth:"100%"}))})),y=i.forwardRef((function(e,r){var o=(0,f.Z)({props:e,name:"MuiDialog"}),a=(0,g.Z)(),p={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},m=o["aria-describedby"],x=o["aria-labelledby"],y=o.BackdropComponent,C=o.BackdropProps,M=o.children,P=o.className,B=o.disableEscapeKeyDown,R=void 0!==B&&B,N=o.fullScreen,T=void 0!==N&&N,j=o.fullWidth,A=void 0!==j&&j,F=o.maxWidth,E=void 0===F?"sm":F,I=o.onBackdropClick,K=o.onClose,Y=o.open,_=o.PaperComponent,X=void 0===_?v.Z:_,H=o.PaperProps,L=void 0===H?{}:H,z=o.scroll,O=void 0===z?"paper":z,q=o.TransitionComponent,G=void 0===q?u.Z:q,J=o.transitionDuration,Q=void 0===J?p:J,U=o.TransitionProps,V=(0,n.Z)(o,S),$=(0,t.Z)({},o,{disableEscapeKeyDown:R,fullScreen:T,fullWidth:A,maxWidth:E,scroll:O}),ee=function(e){var r=e.classes,o=e.scroll,a=e.maxWidth,n=e.fullWidth,t=e.fullScreen,i={root:["root"],container:["container","scroll".concat((0,d.Z)(o))],paper:["paper","paperScroll".concat((0,d.Z)(o)),"paperWidth".concat((0,d.Z)(String(a))),n&&"paperFullWidth",t&&"paperFullScreen"]};return(0,c.Z)(i,Z.D,r)}($),re=i.useRef(),oe=(0,s.Z)(x),ae=i.useMemo((function(){return{titleId:oe}}),[oe]);return(0,b.jsx)(W,(0,t.Z)({className:(0,l.Z)(ee.root,P),BackdropProps:(0,t.Z)({transitionDuration:Q,as:y},C),closeAfterTransition:!0,BackdropComponent:w,disableEscapeKeyDown:R,onClose:K,open:Y,ref:r,onClick:function(e){re.current&&(re.current=null,I&&I(e),K&&K(e,"backdropClick"))},ownerState:$},V,{children:(0,b.jsx)(G,(0,t.Z)({appear:!0,in:Y,timeout:Q,role:"presentation"},U,{children:(0,b.jsx)(k,{className:(0,l.Z)(ee.container),onMouseDown:function(e){re.current=e.target===e.currentTarget},ownerState:$,children:(0,b.jsx)(D,(0,t.Z)({as:X,elevation:24,role:"dialog","aria-describedby":m,"aria-labelledby":oe},L,{className:(0,l.Z)(ee.paper,L.className),ownerState:$,children:(0,b.jsx)(h.Z.Provider,{value:ae,children:M})}))})}))}))}));r.Z=y},85090:function(e,r,o){var a=(0,o(72791).createContext)({});r.Z=a},17780:function(e,r,o){o.d(r,{D:function(){return n}});var a=o(95159);function n(e){return(0,a.Z)("MuiDialog",e)}var t=(0,o(30208).Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);r.Z=t},97123:function(e,r,o){o.d(r,{Z:function(){return m}});var a=o(63366),n=o(87462),t=o(72791),i=o(28182),l=o(90767),c=o(47630),s=o(61046),d=o(95159);function p(e){return(0,d.Z)("MuiDialogActions",e)}(0,o(30208).Z)("MuiDialogActions",["root","spacing"]);var u=o(80184),v=["className","disableSpacing"],f=(0,c.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,!o.disableSpacing&&r.spacing]}})((function(e){var r=e.ownerState;return(0,n.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!r.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),m=t.forwardRef((function(e,r){var o=(0,s.Z)({props:e,name:"MuiDialogActions"}),t=o.className,c=o.disableSpacing,d=void 0!==c&&c,m=(0,a.Z)(o,v),Z=(0,n.Z)({},o,{disableSpacing:d}),h=function(e){var r=e.classes,o={root:["root",!e.disableSpacing&&"spacing"]};return(0,l.Z)(o,p,r)}(Z);return(0,u.jsx)(f,(0,n.Z)({className:(0,i.Z)(h.root,t),ownerState:Z,ref:r},m))}))},39157:function(e,r,o){o.d(r,{Z:function(){return h}});var a=o(4942),n=o(63366),t=o(87462),i=o(72791),l=o(28182),c=o(90767),s=o(47630),d=o(61046),p=o(95159);function u(e){return(0,p.Z)("MuiDialogContent",e)}(0,o(30208).Z)("MuiDialogContent",["root","dividers"]);var v=o(17673),f=o(80184),m=["className","dividers"],Z=(0,s.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,o.dividers&&r.dividers]}})((function(e){var r=e.theme,o=e.ownerState;return(0,t.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat(r.palette.divider),borderBottom:"1px solid ".concat(r.palette.divider)}:(0,a.Z)({},".".concat(v.Z.root," + &"),{paddingTop:0}))})),h=i.forwardRef((function(e,r){var o=(0,d.Z)({props:e,name:"MuiDialogContent"}),a=o.className,i=o.dividers,s=void 0!==i&&i,p=(0,n.Z)(o,m),v=(0,t.Z)({},o,{dividers:s}),h=function(e){var r=e.classes,o={root:["root",e.dividers&&"dividers"]};return(0,c.Z)(o,u,r)}(v);return(0,f.jsx)(Z,(0,t.Z)({className:(0,l.Z)(h.root,a),ownerState:v,ref:r},p))}))},17673:function(e,r,o){o.d(r,{a:function(){return n}});var a=o(95159);function n(e){return(0,a.Z)("MuiDialogTitle",e)}var t=(0,o(30208).Z)("MuiDialogTitle",["root"]);r.Z=t}}]);
//# sourceMappingURL=619.3fb26b7a.chunk.js.map