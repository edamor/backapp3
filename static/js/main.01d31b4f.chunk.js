(this["webpackJsonpbackapp-v2"]=this["webpackJsonpbackapp-v2"]||[]).push([[0],{74:function(e,a,t){e.exports=t(88)},79:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),c=t.n(o),l=(t(79),t(28)),i=t(10),s=t(31),u=t.n(s),m=t(38),p=t(13),d=t(127),b=t(121),g=t(119),h=t(123),f=t(120),E=t(125),v=t(122),j=t(124),O=t(43),w=t.n(O),y=t(89),S=t(117),x=t(118);function C(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ","Ed Amor"," ",(new Date).getFullYear(),".")}var k=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function T(e){var a=e.onChangeUsername,t=e.onChangePassword,n=e.uNError,o=e.pWError,c=e.uNHelpText,i=e.pWHelpText,s=e.handleSignIn,u=k();return r.a.createElement(x.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement("div",{className:u.paper},r.a.createElement(d.a,{className:u.avatar},r.a.createElement(w.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:u.form,noValidate:!0},r.a.createElement(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(e){return a(e.target.value)},helperText:c,error:n}),r.a.createElement(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return t(e.target.value)},helperText:i,error:o}),r.a.createElement(f.a,{control:r.a.createElement(E.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(b.a,{type:"button",fullWidth:!0,variant:"contained",className:u.submit,onClick:s},"Sign In"),r.a.createElement(v.a,{container:!0,justify:"flex-end"},r.a.createElement(v.a,{item:!0},r.a.createElement(l.b,{to:"/register",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(j.a,{mt:8},r.a.createElement(C,null)))}function N(){var e=Object(n.useState)(""),a=Object(p.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(""),l=Object(p.a)(c,2),i=l[0],s=l[1],d=Object(n.useState)(!1),b=Object(p.a)(d,2),g=b[0],h=b[1],f=Object(n.useState)(!1),E=Object(p.a)(f,2),v=E[0],j=E[1],O=Object(n.useState)(""),w=Object(p.a)(O,2),y=w[0],S=w[1],x=Object(n.useState)(""),C=Object(p.a)(x,2),k=C[0],N=C[1];function W(e){var a=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),t=decodeURIComponent(atob(a).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(t)}var P=function(){var e=Object(m.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:t,password:i},e.next=3,fetch("https://young-anchorage-59812.herokuapp.com/login",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 3:if((n=e.sent).ok){e.next=9;break}throw console.log("response status: "+n.status),new Error("HTTP error! status: ".concat(n.status));case 9:return e.next=11,n.text();case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{onChangeUsername:function(e){return o(e)},onChangePassword:function(e){return s(e)},uNError:g,pWError:v,uNHelpText:y,pWHelpText:k,handleSignIn:function(e){P().then((function(e){"Username is invalid"===e&&(S(e),h(!0)),"Password is incorrect"===e?(N(e),j(!0)):(console.log("data: "+e),console.log("user: "+JSON.stringify(W(e).user)),localStorage.setItem("token",e),localStorage.setItem("user",JSON.stringify(W(e).user)),S(""),h(!1),N(""),j(!1))})).catch((function(e){return console.log("error "+e)}))}}))}function W(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ","Ed Amor"," ",(new Date).getFullYear(),".")}var P=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function I(e){var a=e.REGISTER_URL,t=P(),o=Object(n.useState)(!1),c=Object(p.a)(o,2),i=c[0],s=c[1],O=Object(n.useState)(!1),S=Object(p.a)(O,2),C=S[0],k=S[1],T=Object(n.useState)(!1),N=Object(p.a)(T,2),I=N[0],U=N[1],F=Object(n.useState)(""),R=Object(p.a)(F,2),J=R[0],q=R[1],D=Object(n.useState)("Personal"),H=Object(p.a)(D,2),A=H[0],B=H[1],_=Object(n.useState)(""),G=Object(p.a)(_,2),L=G[0],V=G[1],Y=Object(n.useState)(""),M=Object(p.a)(Y,2),$=M[0],z=M[1],K=Object(n.useCallback)((function(e){q(e.target.value.trim())}),[]),Q=Object(n.useCallback)((function(e){B(e.target.value.trim())}),[]),X=Object(n.useCallback)((function(e){V(e.target.value.trim())}),[]),Z=Object(n.useCallback)((function(e){z(e.target.value.trim())}),[]),ee=["Username be at least 4 characters","Field cannot be left blank","Password must be at least 8 characters","Passwords don't match"],ae=Object(n.useState)(""),te=Object(p.a)(ae,2),ne=te[0],re=te[1],oe=Object(n.useState)(""),ce=Object(p.a)(oe,2),le=ce[0],ie=ce[1],se=Object(n.useState)(""),ue=Object(p.a)(se,2),me=ue[0],pe=ue[1],de=Object(n.useCallback)((function(e){""===e.target.value?(s(!0),re(ee[1])):J.length<4?(s(!0),re(ee[0])):(s(!1),re(""))}),[ee,J]),be=Object(n.useCallback)((function(e){""===e.target.value?(k(!0),ie(ee[1])):L.length<8?(k(!0),ie(ee[2])):""!==$&&L!==$?(k(!0),U(!0),ie(ee[3]),pe(ee[3])):(k(!1),U(!1),ie(""))}),[ee,L,$]),ge=Object(n.useCallback)((function(e){$!==L?(U(!0),k(!0),pe(ee[3]),ie(ee[3])):""===$?(U(!0),pe(ee[1])):(U(!1),k(!1),pe(""))}),[ee,$,L]),he=function(e){C&&I&&(ie(""),pe(""))},fe=function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:J,password:L},n=a+A,e.next=4,fetch(n,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 4:if((r=e.sent).ok){e.next=9;break}throw new Error("HTTP error! status: ".concat(r.status));case 9:return e.next=11,r.json();case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(x.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(d.a,{className:t.avatar},r.a.createElement(w.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(v.a,{container:!0,spacing:2},r.a.createElement(v.a,{item:!0,xs:12,sm:6},r.a.createElement(h.a,{autoComplete:"uname",name:"username",variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",autoFocus:!0,error:i,onBlur:de,onChange:K,value:J,helperText:ne})),r.a.createElement(v.a,{item:!0,xs:12,sm:6},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,id:"userType",label:"Account Type",autoComplete:"userType",onChange:Q,value:A,SelectProps:{native:!0},select:!0},[{id:1,label:"Personal"},{id:2,label:"Partner"}].map((function(e){return r.a.createElement("option",{key:e.id,value:e.label},e.label)})))),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",error:C,onBlur:be,onChange:X,value:L,helperText:le,onFocus:he})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,id:"confirm-password",label:"Confirm Password",type:"password",name:"confirm-password",autoComplete:"current-password",error:I,onBlur:ge,onChange:Z,value:$,helperText:me,onFocus:he})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(f.a,{control:r.a.createElement(E.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(b.a,{type:"button",fullWidth:!0,variant:"contained",className:t.submit,onClick:function(){fe().then((function(e){alert("Success"),console.log(e)})).catch((function(e){return console.log(e)}))}},"Sign Up"),r.a.createElement(v.a,{container:!0,justify:"flex-end"},r.a.createElement(v.a,{item:!0},r.a.createElement(l.b,{to:"/login",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(j.a,{mt:5},r.a.createElement(W,null)))}function U(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{REGISTER_URL:"https://young-anchorage-59812.herokuapp.com/register/"}))}var F=t(53);function R(e){e.children;var a=Object(F.a)(e,["children"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,Object.assign({},a,{render:function(e){var a=e.location;return r.a.createElement(i.a,{to:{pathname:"/login",state:{from:a}}})}})))}function J(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Dashboard Route"))}var q=function(){return r.a.createElement(l.a,{basename:"/backapp3"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login",children:r.a.createElement(N,null)}),r.a.createElement(i.b,{path:"/register",children:r.a.createElement(U,null)}),r.a.createElement(R,{exact:!0,path:"/"},r.a.createElement(J,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.01d31b4f.chunk.js.map