"use strict";(self.webpackChunkreact_travelpa_admin=self.webpackChunkreact_travelpa_admin||[]).push([[357],{46315:function(e,r,s){s.d(r,{Z:function(){return t}});s(72791);var n=s(43504),a=s(80184);function t(){return(0,a.jsx)("div",{id:"footer",className:"copyright-area copyright-style-one",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-6 col-md-8 col-sm-12 col-12",children:(0,a.jsx)("div",{className:"copyright-left",children:(0,a.jsxs)("ul",{className:"ft-menu link-hover",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/privacy-policy",children:(0,a.jsx)("span",{children:"Privacy Policy"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/term-and-condition",children:(0,a.jsx)("span",{children:"Terms And Condition"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#/contact-us",children:"Contact Us"})})]})})}),(0,a.jsx)("div",{className:"col-lg-6 col-md-4 col-sm-12 col-12",children:(0,a.jsx)("div",{className:"copyright-right text-center text-md-end",children:(0,a.jsxs)("p",{className:"copyright-text",children:["Copyright \xa9 ",(new Date).getFullYear()," Untung 1"]})})})]})})})}},30408:function(e,r,s){var n=s(1413),a=s(45987),t=(s(72791),s(47630)),o=s(48550),i=s(61134),l=s(77201),c=s(80184),d=["control","name","label","defaultValue","number","onBlur","leadingZeros"],u=(0,t.ZP)((function(e){var r=e.control,s=e.name,t=e.label,u=e.defaultValue,m=e.number,h=e.onBlur,f=e.leadingZeros,p=(0,a.Z)(e,d);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.Qr,{control:r,name:s,defaultValue:u||"",render:function(e){var r=e.field,s=r.onChange,a=r.value,i=e.fieldState,d=i.invalid,u=i.error;return(0,c.jsx)(o.Z,(0,n.Z)({required:!0,fullWidth:!0,label:t,size:"small",onChange:s,onBlur:h,value:a,error:d,helperText:(null===u||void 0===u?void 0:u.message)||" ",InputLabelProps:{style:{color:"#CCCCCC"}},InputProps:{inputComponent:m?f?l.sm:l.eO:null},FormHelperTextProps:{className:"mt-0"},multiline:!0},p))}})})}))((function(e){e.theme;return{".MuiInputLabel-root.Mui-error":{color:"rgb(239, 83, 80) !important"},".MuiInputLabel-shrink.Mui-focused.Mui-error":{color:"rgb(239, 83, 80) !important"},".MuiInputLabel-shrink.Mui-focused":{color:"#009C99 !important"},".MuiOutlinedInput-notchedOutline":{transition:"0.3s",legend:{float:"unset",overflow:"hidden",display:"block",width:"auto",padding:0,height:"11px",fontSize:"0.75em",visibility:"hidden",transition:"max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms",whiteSpace:"nowrap"}}}}));r.Z=u},53357:function(e,r,s){s.r(r),s.d(r,{default:function(){return Z}});var n=s(29439),a=s(72791),t=s(60364),o=s(64554),i=s(57621),l=s(39504),c=s(20890),d=s(36151),u=s(61134),m=s(61265),h=s(43504),f=s(16871),p=s(17291),x=s(46315),w=s(62797),g=w.Ry().shape({password:w.Z_().required("Field is required.").min(8,"Password must be at least 8 characters"),confirmPassword:w.Z_().required("Field is required.").oneOf([w.iH("password")],"Passwords does not match")}).required(),j=s(30408),v=s(50611),b=s(80184),P={doResetPassword:v.MW,resetForgotPasswordState:v.QP},Z=(0,t.$j)((function(e){return{success:e.forgotPassword.success,fail:e.forgotPassword.fail,errorDetailData:e.forgotPassword.errorDetailData}}),P)((function(e){var r=e.doResetPassword,s=e.resetForgotPasswordState,t=e.success,w=e.fail,v=(e.errorDetailData,(0,f.s0)()),P=(0,h.lr)(),Z=(0,n.Z)(P,2),C=Z[0],y=(Z[1],(0,u.cI)({defaultValues:{password:"",confirmPassword:""},resolver:(0,m.X)(g),mode:"all"})),N=y.control,k=y.handleSubmit,M=y.getValues;(0,a.useEffect)((function(){s()}),[]),(0,a.useEffect)((function(){t&&v("/reset-password-success")}),[t]),(0,a.useEffect)((function(){w&&v("/reset-password-fail")}),[w]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p.Z,{}),(0,b.jsx)(o.Z,{className:"d-flex",sx:{height:"90vh",backgroundColor:"rgb(237, 247, 237)",p:5},children:(0,b.jsx)(i.Z,{variant:"outlined",className:"m-auto p-2",sx:{minWidth:"40%"},children:(0,b.jsxs)(l.Z,{children:[(0,b.jsx)("div",{className:"d-flex justify-content-center",children:(0,b.jsx)(c.Z,{variant:"h6",className:"mb-4",children:"Reset Password"})}),(0,b.jsxs)("div",{className:"text-center",children:[(0,b.jsx)(j.Z,{control:N,name:"password",label:"New Password",type:"password"}),(0,b.jsx)(j.Z,{control:N,name:"confirmPassword",label:"Confirm Password",type:"password"}),(0,b.jsx)(d.Z,{disableElevation:!0,variant:"contained",className:"mt-3 ",onClick:k((function(){var e=M("confirmPassword"),s=C.get("t");r({password:e,token:s})})),children:"Confirm"})]})]})})}),(0,b.jsx)(x.Z,{})]})}))}}]);
//# sourceMappingURL=357.9f914302.chunk.js.map