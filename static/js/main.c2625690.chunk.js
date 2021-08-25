(this["webpackJsonpds-task"]=this["webpackJsonpds-task"]||[]).push([[1],{178:function(e,t,n){},261:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(33),c=n.n(i),s=(n(177),n(178),n(53)),o=n(25),l=n(35),d=n(48),j=n(112),b=n(87),u=n(289),h=n(304),m=n(293),O=n(292),f=n(301),p=n(300),v=n(139),x=n(303),g=n(299),N=n(305),y=n(288),w=n(6);var k=function(e){var t=e.imagePreviewSourceViaFileAPI,n=e.handleSetImagePreviewSourceViaViaFileAPI,r=Object(a.useState)(!1),i=Object(d.a)(r,2),c=i[0],s=i[1],o=Object(a.useState)(!1),l=Object(d.a)(o,2),j=l[0],b=l[1],u=function(){s((function(e){return!e}))};return Object(w.jsxs)(w.Fragment,{children:[t&&Object(w.jsx)(x.a,{avatar:Object(w.jsx)(g.a,{presence:"online",src:t,size:"xxlarge"})}),Object(w.jsx)(v.a,{appearance:"primary",className:"upload-button",onClick:u,children:t?"Change Avatar":"Upload Avatar"}),Object(w.jsx)(y.a,{children:!!c&&Object(w.jsx)(N.a,{onImagePicked:function(e){var t;t=e,b(!0),n(URL.createObjectURL(t)),u(),b(!1)},onCancel:u,isLoading:j})})]})},P=/^[a-zA-Z ]+$/,S=/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$/,F=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;function I(e,t){switch(e){case"name":return P.test(t)?void 0:"INCORRECT";case"phone":return S.test(t)?void 0:"INCORRECT";case"email":return F.test(t)?void 0:"INCORRECT";case"birthday":case"about":return t?void 0:"INCORRECT";default:return}}var R=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),c=Object(d.a)(i,2),s=c[0],v=c[1],x=Object(o.f)();return Object(w.jsx)("section",{children:Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("h1",{className:"header-main",children:"Profile form"}),Object(w.jsx)(j.c,{onSubmit:function(e){return t=e,r(!0),void fetch("apis/add",{method:"POST",body:JSON.stringify(Object(l.a)(Object(l.a)({},t),{},{avatar:s}))}).then((function(e){return e.json()})).then((function(e){return x.push("/ds-task/profiles/".concat(e))})).catch((function(e){console.log(e)})).finally((function(){return r(!1)}));var t},children:function(e){var t=e.formProps;return Object(w.jsxs)("form",Object(l.a)(Object(l.a)({},t),{},{children:[Object(w.jsx)(b.b,{isRequired:!0,label:"First name",name:"firstName",validate:function(e){return I("name",e)},children:function(e){var t=e.fieldProps,n=e.error;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,Object(l.a)({placeholder:"Enter your first name"},t)),n&&Object(w.jsx)(u.a,{children:"First name must contains only letters from a-z"})]})}}),Object(w.jsx)(b.b,{isRequired:!0,label:"Last name",name:"lastName",validate:function(e){return I("name",e)},children:function(e){var t=e.fieldProps,n=e.error;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,Object(l.a)({placeholder:"Enter your last name"},t)),n&&Object(w.jsx)(u.a,{children:"Last name must contains only letters from a-z"})]})}}),Object(w.jsx)(b.b,{isRequired:!0,label:"Email",name:"email",validate:function(e){return I("email",e)},children:function(e){var t=e.fieldProps,n=e.error;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,Object(l.a)({placeholder:"Enter your e-mail"},t)),n&&Object(w.jsx)(u.a,{children:"Invalid e-mail"})]})}}),Object(w.jsx)(b.b,{isRequired:!0,label:"Phone number",name:"phone",validate:function(e){return I("phone",e)},children:function(e){var t=e.fieldProps,n=e.error;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,Object(l.a)({placeholder:"Enter your phone number"},t)),n&&Object(w.jsx)(u.a,{children:"Invalid phone number "})]})}}),Object(w.jsx)(b.b,{isRequired:!0,label:"About",name:"about",validate:function(e){return I("about",e)},children:function(e){var t=e.fieldProps,n=e.error;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,Object(l.a)({placeholder:"Type something about you",minimumRows:3},t)),n&&Object(w.jsx)(u.a,{children:"This field is required"})]})}}),Object(w.jsx)(b.b,{name:"birthday",label:"Birthday",isRequired:!0,validate:function(e){return I("birthday",e)},children:function(e){var t=e.fieldProps,n=e.error;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(m.a,Object(l.a)(Object(l.a)({},t),{},{placeholder:"Pick your birthday"})),n&&Object(w.jsx)(u.a,{children:"Pick your birthday"})]})}}),Object(w.jsx)(k,{handleSetImagePreviewSourceViaViaFileAPI:v,imagePreviewSourceViaFileAPI:s}),Object(w.jsx)(h.a,{children:Object(w.jsx)(O.a,{type:"submit",appearance:"primary",isLoading:n,children:"Submit"})})]}))}})]})})},C=n(156),E=n(295),L=n(302),A=n(296),T=[{name:"Home",path:"/ds-task"}],q=n.p+"static/media/logo.103b5fa1.svg";function W(){var e=Object(C.useMediaQuery)({query:"(min-width: 1024px)"});return Object(w.jsx)("nav",{className:"navbar",children:Object(w.jsxs)("div",{className:"container navbar-container",children:[Object(w.jsx)("figure",{className:"navbar-logo",children:Object(w.jsx)("img",{src:q,alt:"logo"})}),e?Object(w.jsx)("ul",{className:"navbar-list",children:T.map((function(e){return Object(w.jsx)("li",{className:"navbar-list-item",children:Object(w.jsx)(s.b,{to:e.path,children:e.name})},e.name)}))}):Object(w.jsx)(E.a,{trigger:"Menu",triggerType:"button",children:Object(w.jsx)(L.a,{children:T.map((function(e){return Object(w.jsx)(A.a,{children:Object(w.jsx)(s.b,{className:"navbar-dropdown-item",to:e.path,children:e.name})},e.name)}))})})]})})}function z(){return Object(w.jsx)("footer",{className:"footer",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})})})}var U=n(263);var V=function(){var e=Object(a.useState)({}),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!0),c=Object(d.a)(i,2),s=c[0],l=c[1],j=Object(o.g)().profileId;return Object(a.useEffect)((function(){l(!0),fetch("/apis/profile/".concat(j)).then((function(e){return e.json()})).then((function(e){r(e.profile)})).catch((function(e){console.log(e)})).finally((function(){return l(!1)}))}),[j]),s?Object(w.jsx)("div",{className:"spinner-box",children:Object(w.jsx)(U.a,{appearance:"inherit",size:"xlarge"})}):Object(w.jsx)("section",{children:Object(w.jsxs)("div",{className:"container-narrow",children:[Object(w.jsxs)("h1",{className:"header-main",children:["Profile ",null===n||void 0===n?void 0:n.firstName," ",null===n||void 0===n?void 0:n.lastName]}),Object(w.jsxs)("div",{className:"profile",children:[Object(w.jsx)("div",{className:"profile-avatar",children:Object(w.jsx)(x.a,{avatar:Object(w.jsx)(g.a,{presence:"online",src:null===n||void 0===n?void 0:n.avatar,size:"xxlarge"})})}),Object(w.jsxs)("div",{className:"profile-data",children:[Object(w.jsxs)("div",{className:"profile-item",children:[Object(w.jsx)("span",{className:"profile-item-label",children:"First Name:"}),Object(w.jsx)("span",{children:null===n||void 0===n?void 0:n.firstName})]}),Object(w.jsxs)("div",{className:"profile-item",children:[Object(w.jsx)("span",{className:"profile-item-label",children:"Last Name:"}),Object(w.jsx)("span",{children:null===n||void 0===n?void 0:n.lastName})]}),Object(w.jsxs)("div",{className:"profile-item",children:[Object(w.jsx)("span",{className:"profile-item-label",children:"Email:"}),Object(w.jsx)("span",{children:null===n||void 0===n?void 0:n.email})]}),Object(w.jsxs)("div",{className:"profile-item",children:[Object(w.jsx)("span",{className:"profile-item-label",children:"Phone:"}),Object(w.jsx)("span",{children:null===n||void 0===n?void 0:n.phone})]}),Object(w.jsxs)("div",{className:"profile-item",children:[Object(w.jsx)("span",{className:"profile-item-label",children:"Birthday:"}),Object(w.jsx)("span",{children:null===n||void 0===n?void 0:n.birthday})]}),Object(w.jsxs)("div",{className:"profile-item",children:[Object(w.jsx)("span",{className:"profile-item-label",children:"About:"}),Object(w.jsx)("span",{children:null===n||void 0===n?void 0:n.about})]})]})]})]})})};function B(){return Object(w.jsx)(s.a,{children:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(W,{}),Object(w.jsxs)(o.c,{children:[Object(w.jsx)(o.a,{exact:!0,path:"/ds-task",children:Object(w.jsx)(R,{})}),Object(w.jsx)(o.a,{path:"/ds-task/profiles/:profileId",children:Object(w.jsx)(V,{})})]}),Object(w.jsx)(z,{})]})})}var $=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){if("installed"===n.state){if(navigator.serviceWorker.controller)return console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e),window.location.reload();console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)}})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,374)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(B,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ds-task",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ds-task","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):J(t,e)}))}}(),M()}},[[261,2,3]]]);
//# sourceMappingURL=main.c2625690.chunk.js.map