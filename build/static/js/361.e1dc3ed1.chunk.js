"use strict";(self.webpackChunkreact_travelpa_admin=self.webpackChunkreact_travelpa_admin||[]).push([[361],{57923:function(e,n,t){t.d(n,{Qy:function(){return m},Qz:function(){return f},RZ:function(){return j},T4:function(){return h},Tf:function(){return a},Ud:function(){return s},Y_:function(){return p},bD:function(){return x},cn:function(){return u},fC:function(){return l},ic:function(){return c},sd:function(){return o},zH:function(){return d}});var i=t(71653),r=t.n(i),a=function(e){return{type:r().SET_INSURANCE_DETAILS,payload:e}},s=function(e){return{type:r().SET_SELECTED_INSURANCE,payload:e}},l=function(e){return{type:r().SET_INSURANCE_RATE_DETAILS,payload:e}},o=function(e){return{type:r().SET_WATCH_INSURANCE_COVERAGE,payload:e}},c=function(e){return{type:r().SET_IS_SPOUSE,payload:e}},d=function(e){return{type:r().SET_ERROR_CODE_CONFIRM_DATA,payload:e}},u=function(e){return{type:r().SET_CODE_CONFIRM_SUCCESS,payload:e}},m=function(e){return{type:r().SET_ERROR_NEW_CODE_CONFIRM_DATA,payload:e}},f=function(e){return{type:r().SET_NEW_CODE_CONFIRM_SUCCESS,payload:e}},x=function(e){return{type:r().SET_NEW_CODE_SENT_SUCCESS,payload:e}},h=function(e){return{type:r().SET_CODE_SENT_SUCCESS,payload:e}},p=function(e){return{type:r().SET_ERROR_CODE_SENT_DATA,payload:e}},j=function(e){return{type:r().SET_RESEND_EMAIL_VERIFICATION,payload:e}}},30408:function(e,n,t){var i=t(1413),r=t(45987),a=(t(72791),t(47630)),s=t(48550),l=t(61134),o=t(77201),c=t(80184),d=["control","name","label","defaultValue","number","onBlur","leadingZeros"],u=(0,a.ZP)((function(e){var n=e.control,t=e.name,a=e.label,u=e.defaultValue,m=e.number,f=e.onBlur,x=e.leadingZeros,h=(0,r.Z)(e,d);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l.Qr,{control:n,name:t,defaultValue:u||"",render:function(e){var n=e.field,t=n.onChange,r=n.value,l=e.fieldState,d=l.invalid,u=l.error;return(0,c.jsx)(s.Z,(0,i.Z)({required:!0,fullWidth:!0,label:a,size:"small",onChange:t,onBlur:f,value:r,error:d,helperText:(null===u||void 0===u?void 0:u.message)||" ",InputLabelProps:{style:{color:"#CCCCCC"}},InputProps:{inputComponent:m?x?o.sm:o.eO:null},FormHelperTextProps:{className:"mt-0"},multiline:!0},h))}})})}))((function(e){e.theme;return{".MuiInputLabel-root.Mui-error":{color:"rgb(239, 83, 80) !important"},".MuiInputLabel-shrink.Mui-focused.Mui-error":{color:"rgb(239, 83, 80) !important"},".MuiInputLabel-shrink.Mui-focused":{color:"#009C99 !important"},".MuiOutlinedInput-notchedOutline":{transition:"0.3s",legend:{float:"unset",overflow:"hidden",display:"block",width:"auto",padding:0,height:"11px",fontSize:"0.75em",visibility:"hidden",transition:"max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms",whiteSpace:"nowrap"}}}}));n.Z=u},9361:function(e,n,t){t.r(n),t.d(n,{MyProfile:function(){return U},default:function(){return M}});var i=t(15861),r=t(29439),a=t(87757),s=t.n(a),l=t(72791),o=t(64554),c=t(61889),d=t(57621),u=t(39504),m=t(20890),f=t(36151),x=t(94070),h=t(61134),p=t(61265),j=t(60364),Z=t(16871),v=t(14651),E=t(7692),C=t(30408),g=t(62797),y=g.Ry().shape({name:g.Z_().nullable().required("Required field").max(255,"The maximum length is 255 characters")}).required(),S=t(5574),b=t(65661),N=t(39157),_=t(97123),R=t(94721),P=t(80184),D=(0,j.$j)((function(e){return{}}),{})((function(e){var n=e.handleClose,t=e.handleSubmit,i=e.isOpen,r=e.buttonLabel,a=e.title,s=e.children;return(0,P.jsxs)(S.Z,{disableEscapeKeyDown:!0,onClose:function(e,t){t&&"backdropClick"===t||n()},open:i,maxWidth:"sm",style:{minWidth:"30%"},fullWidth:!0,children:[(0,P.jsx)(b.Z,{id:"confirmation-dialog-title",className:"text-center",children:a}),(0,P.jsx)(R.Z,{style:{width:"93%"},className:"m-auto"}),(0,P.jsx)(N.Z,{children:s}),(0,P.jsx)(_.Z,{className:"justify-content-center mb-2",children:(0,P.jsx)(f.Z,{disableRipple:!0,onClick:t||n,autoFocus:!0,className:"w-50",variant:"contained",size:"medium",children:r})})]})})),T=t(13239),I=t(50611),O=t(57923),V={doSendCurrentEmailVerificationCode:I.YC,setErrorCodeConfirmData:O.zH,setErrorCodeSentData:O.Y_},w=(0,j.$j)((function(e){return{loggedInUser:e.core.loggedInUser,codeSentSuccess:e.userProfile.codeSentSuccess,errorCodeSentData:e.userProfile.errorCodeSentData}}),V)((function(e){var n,t=e.doSendCurrentEmailVerificationCode,i=e.setErrorCodeSentData,a=e.setErrorCodeConfirmData,s=e.handleClose,c=e.isOpen,d=e.loggedInUser,u=e.codeSentSuccess,x=e.errorCodeSentData,h=(0,Z.s0)(),p=(0,l.useState)(!1),j=(0,r.Z)(p,2),v=j[0],E=j[1],C=(0,l.useState)(null),g=(0,r.Z)(C,2),y=g[0],R=g[1];(0,l.useEffect)((function(){setTimeout((function(){x&&(E(!1),R(x))}),3e3)}),[x]),(0,l.useEffect)((function(){var e=setTimeout((function(){u?(s(),h("/dashboard/change-email")):E(!1)}),3e3);return function(){clearTimeout(e)}}),[u]);return(0,P.jsxs)(S.Z,{disableEscapeKeyDown:!0,onClose:function(e,n){n&&"backdropClick"===n||s()},open:c,fullWidth:!0,children:[(0,P.jsx)(b.Z,{children:"Email Verification"}),(0,P.jsxs)(N.Z,{children:[v&&(0,P.jsxs)(o.Z,{className:"text-center",children:[(0,P.jsx)("div",{children:(0,P.jsx)(T.Z,{})}),(0,P.jsx)(m.Z,{variant:"body2",component:"div",color:"text.secondary",className:"mt-3",children:"Sending email..."})]}),!v&&(0,P.jsxs)(m.Z,{variant:"body2",component:"div",color:"text.secondary",children:["Please verify your email before proceed to change email. Email account verification code to"," ",(0,P.jsx)(m.Z,{variant:"subtitle1",component:"span",children:(0,P.jsx)("b",{children:null===d||void 0===d||null===(n=d.customer)||void 0===n?void 0:n.email})}),"."]})]}),!v&&(0,P.jsxs)(_.Z,{className:"justify-content-between m-2",children:[(0,P.jsx)(m.Z,{color:"error",variant:"caption",children:y}),(0,P.jsxs)(o.Z,{children:[(0,P.jsx)(f.Z,{disableRipple:!0,disableElevation:!0,onClick:s,autoFocus:!0,variant:"outlined",className:"mx-2",children:"Cancel"}),(0,P.jsx)(f.Z,{disableRipple:!0,disableElevation:!0,onClick:function(){i(null),a(null),t(),E(!0)},autoFocus:!0,variant:"contained",children:"Send Code"})]})]})]})})),U=function(e){var n,t,a,j,g,S=e.loggedInUser,b=e.success,N=e.fail,_=e.errorDetailData,R=e.errorresendVerificationEmail,T=e.doUpdateUserProfile,I=e.doResetUserProfile,O=e.doGetLoggedInUser,V=e.doResendVerificationEmail,U=e.setResendVerificationEmail,k=e.setCodeSentSuccess,M=e.setErrorCodeSentData,A=e.resendVerificationEmailSuccess,F=e.resendVerificationEmailFail,L=(0,Z.s0)(),W=(0,h.cI)({defaultValues:{name:(null===S||void 0===S||null===(n=S.customer)||void 0===n?void 0:n.name)||"",phone_number:(null===S||void 0===S||null===(t=S.customer)||void 0===t?void 0:t.phone_number)||"",address:(null===S||void 0===S||null===(a=S.customer)||void 0===a?void 0:a.address)||""},resolver:(0,p.X)(y),mode:"all"}),z=W.control,K=W.handleSubmit,Q=W.trigger,q=(0,l.useState)(!1),$=(0,r.Z)(q,2),B=$[0],G=$[1],H=(0,l.useState)(!1),Y=(0,r.Z)(H,2),X=Y[0],J=Y[1],ee=(0,l.useState)(!1),ne=(0,r.Z)(ee,2),te=ne[0],ie=ne[1],re=(0,l.useState)(null),ae=(0,r.Z)(re,2),se=ae[0],le=ae[1];(0,l.useEffect)((function(){I(),k(!1),O(),U(!1),G(!1)}),[]),(0,l.useEffect)((function(){b&&(O(),I(),J(!0)),N&&le(_)}),[b,N]),(0,l.useEffect)((function(){_||le(null)}),[_]),(0,l.useEffect)((function(){A&&G(!0),F&&G(!0)}),[A,F]);var oe=function(){var e=(0,i.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:e.sent&&T({name:n.name,phone_number:n.phone_number,address:n.address});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,P.jsxs)(P.Fragment,{children:[A&&(0,P.jsx)(D,{title:"Resend Verification Email",buttonLabel:"OK",isOpen:B,handleClose:function(){U(!1),G(!B)},children:(0,P.jsxs)(o.Z,{children:[(0,P.jsx)(o.Z,{className:"d-flex justify-content-center mb-3",children:(0,P.jsx)(E.wRn,{color:"#4caf50",size:"5rem"})}),(0,P.jsx)(m.Z,{variant:"body2",className:"text-center",children:"Please check your inbox/junk mail for the verification email."})]})}),F&&(0,P.jsx)(D,{title:"Resend Verification Email",buttonLabel:"OK",isOpen:B,handleClose:function(){U(!1),G(!B)},children:(0,P.jsxs)(o.Z,{children:[(0,P.jsx)(o.Z,{className:"d-flex justify-content-center mb-3",children:(0,P.jsx)(v.$Vt,{color:"#ef5350",size:"5rem"})}),(0,P.jsx)(m.Z,{variant:"body2",className:"text-center",children:R})]})}),X&&(0,P.jsx)(D,{title:"Profile Updated.",buttonLabel:"OK",isOpen:X,handleClose:function(){return J(!X)}}),te&&(0,P.jsx)(w,{isOpen:te,handleClose:function(){return ie(!te)}}),(0,P.jsx)(o.Z,{children:(0,P.jsx)(d.Z,{variant:"outlined",children:(0,P.jsxs)(u.Z,{children:[!(null!==S&&void 0!==S&&null!==(j=S.customer)&&void 0!==j&&j.is_verify)&&(0,P.jsxs)(x.Z,{severity:"warning",className:"mb-3 d-flex justify-content-start",children:[(0,P.jsx)(m.Z,{variant:"caption",children:"Please verify your email."}),(0,P.jsx)(f.Z,{disableElevation:!0,disableFocusRipple:!0,color:"warning",size:"small",variant:"text",onClick:function(){V()},children:(0,P.jsx)(m.Z,{variant:"caption",children:"Resend Verification Email"})})]}),(0,P.jsx)(o.Z,{className:"d-flex justify-content-between mb-3",children:(0,P.jsx)(m.Z,{variant:"h6",children:"My Profile"})}),(0,P.jsxs)(c.ZP,{container:!0,columns:{xs:1,lg:12},children:[(0,P.jsx)(c.ZP,{item:!0,xs:1,lg:12,className:"pt-0",children:(0,P.jsxs)(c.ZP,{container:!0,columns:{xs:1,sm:1,md:12,lg:12},children:[(0,P.jsx)(c.ZP,{item:!0,xs:1,sm:1,md:1.5,lg:1.5,className:"pt-0",children:(0,P.jsx)(m.Z,{variant:"caption",color:"text.secondary",children:"Full Name"})}),(0,P.jsx)(c.ZP,{item:!0,xs:1,sm:1,md:4.5,lg:4.5,className:"pt-0",children:(0,P.jsx)(C.Z,{control:z,name:"name",label:""})})]})}),(0,P.jsx)(c.ZP,{item:!0,xs:1,lg:12,className:"pt-0",children:(0,P.jsxs)(c.ZP,{container:!0,columns:{xs:1,sm:1,md:12,lg:12},children:[(0,P.jsx)(c.ZP,{item:!0,xs:1,sm:1,md:1.5,lg:1.5,className:"pt-0",children:(0,P.jsx)(m.Z,{variant:"caption",color:"text.secondary",children:"Phone Number"})}),(0,P.jsx)(c.ZP,{item:!0,xs:1,sm:1,md:4.5,lg:4.5,className:"pt-0",children:(0,P.jsx)(C.Z,{control:z,name:"phone_number",label:""})})]})}),(0,P.jsx)(c.ZP,{item:!0,xs:1,lg:12,className:"pt-0",children:(0,P.jsxs)(c.ZP,{container:!0,columns:{xs:1,sm:1,md:12,lg:12},children:[(0,P.jsx)(c.ZP,{item:!0,xs:1,sm:1,md:1.5,lg:1.5,className:"pt-0",children:(0,P.jsx)(m.Z,{variant:"caption",color:"text.secondary",children:"Address"})}),(0,P.jsx)(c.ZP,{item:!0,xs:1,sm:1,md:4.5,lg:4.5,className:"pt-0",children:(0,P.jsx)(C.Z,{control:z,name:"address",label:""})})]})}),(0,P.jsx)(c.ZP,{item:!0,xs:1,lg:12,className:"pt-0 mb-3",children:(0,P.jsxs)(c.ZP,{container:!0,columns:{xs:1,sm:1,md:12,lg:12},children:[(0,P.jsx)(c.ZP,{item:!0,xs:1,sm:1,md:1.5,lg:1.5,className:"pt-0",children:(0,P.jsx)(m.Z,{variant:"caption",color:"text.secondary",children:"Email"})}),(0,P.jsx)(c.ZP,{item:!0,xs:1,sm:1,md:4.5,lg:4.5,className:"pt-0",children:(0,P.jsxs)("div",{className:"d-flex justify-content-start",children:[(0,P.jsx)(m.Z,{variant:"body2",style:{paddingRight:"0px"},children:null===S||void 0===S||null===(g=S.customer)||void 0===g?void 0:g.email}),(0,P.jsx)(f.Z,{disableRipple:!0,style:{textDecoration:"underline",padding:"0px 0px"},onClick:function(){M(null),ie(!0)},variant:"text",size:"small",children:"Change"})]})})]})}),(0,P.jsx)(c.ZP,{item:!0,xs:1,lg:12,className:"pt-0",children:(0,P.jsxs)(c.ZP,{container:!0,columns:{xs:1,sm:1,md:12,lg:12},children:[(0,P.jsx)(c.ZP,{item:!0,xs:1,sm:1,md:1.5,lg:1.5,className:"pt-0",children:(0,P.jsx)(m.Z,{variant:"caption",color:"text.secondary",children:"Password"})}),(0,P.jsx)(c.ZP,{item:!0,xs:1,sm:1,md:4.5,lg:4.5,className:"pt-0",children:(0,P.jsxs)("div",{className:"d-flex justify-content-start",children:[(0,P.jsx)(m.Z,{variant:"body2",style:{paddingRight:"0px"},children:"********"}),(0,P.jsx)(f.Z,{disableRipple:!0,style:{textDecoration:"underline",padding:"0px 0px"},onClick:function(){L("/dashboard/change-password")},variant:"text",size:"small",children:"Change"})]})})]})})]}),(0,P.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,P.jsx)(m.Z,{variant:"subtitle2",color:"error",component:"div",className:"my-auto",children:null===se||void 0===se?void 0:se.errorMessage}),(0,P.jsx)(f.Z,{disableElevation:!0,variant:"contained",onClick:K(oe),children:"Save"})]})]})})})]})},k={doUpdateUserProfile:I.Vb,doResetUserProfile:I.$s,doGetLoggedInUser:I.Bq,doResendVerificationEmail:I.GK,setCodeSentSuccess:O.T4,setErrorCodeSentData:O.Y_,setResendVerificationEmail:O.RZ},M=(0,j.$j)((function(e){return{loggedInUser:e.core.loggedInUser,success:e.userProfile.success,fail:e.userProfile.fail,errorDetailData:e.userProfile.errorDetailData,resendVerificationEmailSuccess:e.userProfile.resendVerificationEmailSuccess,resendVerificationEmailFail:e.userProfile.resendVerificationEmailFail,errorresendVerificationEmail:e.userProfile.errorresendVerificationEmail}}),k)(U)},77201:function(e,n,t){t.d(n,{Du:function(){return x},Ny:function(){return f},eO:function(){return m},hu:function(){return h},sm:function(){return u}});var i=t(1413),r=t(45987),a=t(72791),s=t(30948),l=t(24805),o=t(80184),c=["onChange","name"],d=["onChange","name"],u=a.forwardRef((function(e,n){var t=e.onChange,a=e.name,l=(0,r.Z)(e,c);return(0,o.jsx)(s.Z,(0,i.Z)((0,i.Z)({},l),{},{allowLeadingZeros:!0,allowNegative:!1,decimalSeparator:!1,getInputRef:n,onValueChange:function(e){t({target:{name:a,value:e.value}})}}))})),m=a.forwardRef((function(e,n){var t=e.onChange,a=e.name,l=(0,r.Z)(e,d);return(0,o.jsx)(s.Z,(0,i.Z)((0,i.Z)({},l),{},{allowNegative:!1,getInputRef:n,onValueChange:function(e){t({target:{name:a,value:e.value}})}}))})),f=function(e){var n=e.children;return(0,l.useMediaQuery)({minWidth:992})?n:null},x=function(e){var n=e.children;return(0,l.useMediaQuery)({minWidth:768,maxWidth:991})?n:null},h=function(e){var n=e.children;return(0,l.useMediaQuery)({maxWidth:767})?n:null}}}]);
//# sourceMappingURL=361.e1dc3ed1.chunk.js.map