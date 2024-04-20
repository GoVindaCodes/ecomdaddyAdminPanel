(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[8],{1218:function(e,a,t){"use strict";var s=t(81),r=t.n(s),c=t(1),l=t(58),n=t(45),i=t(118),o=t(99),m=t(9);a.a=()=>{const[e,a]=Object(c.useState)(!1),{dispatch:t}=Object(c.useContext)(i.a),s=Object(n.g)(),d=Object(n.h)(),{register:b,handleSubmit:j,formState:{errors:h}}=Object(l.a)();return{onSubmit:e=>{let{name:c,email:l,verifyEmail:n,password:i,role:b}=e;a(!0);"/login"===d.pathname&&o.a.loginAdmin({email:l,password:i}).then((e=>{e&&e.token&&(console.log("Login response:",e),r.a.set("adminInfo",JSON.stringify(e),{expires:.5}),a(!1),Object(m.c)("Login Success!"),t({type:"USER_LOGIN",payload:{token:e.token}}),localStorage.setItem("email",l),s.replace("/"))})).catch((e=>{console.error("Login error:",e),Object(m.b)(e?e.response.data.message:e.message),a(!1)})),"/signup"===d.pathname&&o.a.registerAdmin({name:c,email:l,password:i,role:b}).then((e=>{e&&(a(!1),Object(m.c)("Register Success!"),t({type:"USER_LOGIN",payload:e}),r.a.set("adminInfo",JSON.stringify(e),{expires:.5}),s.replace("/"))})).catch((e=>{Object(m.b)(e?e.response.data.message:e.message),a(!1)})),"/forgot-password"===d.pathname&&o.a.forgetPassword({verifyEmail:n}).then((e=>{a(!1),Object(m.c)(e.message)})).catch((e=>{a(!1),Object(m.b)(e?e.response.data.message:e.message)}))},register:b,handleSubmit:j,errors:h,loading:e}}},1226:function(e,a,t){"use strict";t.r(a);t(1);var s=t(34),r=t(4),c=t(1221),l=t(139),n=t(16),i=t(39),o=t(14),m=t(225),d=t(1218),b=t.p+"static/media/create-account-office.080280cb.jpeg",j=t.p+"static/media/create-account-office-dark.080280cb.jpeg",h=t(2);a.default=()=>{const{t:e}=Object(l.a)(),{onSubmit:a,register:t,handleSubmit:x,errors:p,loading:g}=Object(d.a)();return Object(h.jsx)("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:Object(h.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800",children:Object(h.jsxs)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[Object(h.jsxs)("div",{className:"h-32 md:h-auto md:w-1/2",children:[Object(h.jsx)("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:b,alt:"Office"}),Object(h.jsx)("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:j,alt:"Office"})]}),Object(h.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:Object(h.jsxs)("div",{className:"w-full",children:[Object(h.jsx)("h1",{className:"mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200",children:e("CreateAccount")}),Object(h.jsxs)("form",{onSubmit:x(a),children:[Object(h.jsx)(o.a,{label:"Name"}),Object(h.jsx)(i.a,{register:t,label:"Name",name:"name",type:"text",placeholder:"Admin"}),Object(h.jsx)(n.a,{errorName:p.name}),Object(h.jsx)(o.a,{label:"Email"}),Object(h.jsx)(i.a,{register:t,label:"Email",name:"email",type:"email",placeholder:"john@doe.com"}),Object(h.jsx)(n.a,{errorName:p.email}),Object(h.jsx)(o.a,{label:"Password"}),Object(h.jsx)(i.a,{register:t,label:"Password",name:"password",type:"password",placeholder:"***************"}),Object(h.jsx)(n.a,{errorName:p.password}),Object(h.jsx)(o.a,{label:"Staff Role"}),Object(h.jsxs)("div",{className:"col-span-8 sm:col-span-4",children:[Object(h.jsx)(m.a,{register:t,label:"Role",name:"role"}),Object(h.jsx)(n.a,{errorName:p.role})]}),Object(h.jsxs)(r.Label,{className:"mt-6",check:!0,children:[Object(h.jsx)(r.Input,{type:"checkbox"}),Object(h.jsxs)("span",{className:"ml-2",children:[e("Iagree")," ",Object(h.jsx)("span",{className:"underline",children:e("privacyPolicy")})]})]}),Object(h.jsx)(r.Button,{disabled:g,type:"submit",className:"mt-4 h-12 w-full",to:"/dashboard",block:!0,children:e("CreateAccountTitle")})]}),Object(h.jsx)("hr",{className:"my-10"}),Object(h.jsxs)("button",{disabled:!0,className:"text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2 md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-blue-600 h-11 md:h-12 w-full mr-2",children:[Object(h.jsx)(c.a,{className:"w-4 h-4 mr-2"})," ",Object(h.jsxs)("span",{className:"ml-2",children:[" ",e("LoginWithFacebook")," "]})]}),Object(h.jsxs)("button",{disabled:!0,className:"text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2  md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-red-500 h-11 md:h-12 w-full",children:[Object(h.jsx)(c.b,{className:"w-4 h-4 mr-2"})," ",Object(h.jsx)("span",{className:"ml-2",children:e("LoginWithGoogle")})]}),Object(h.jsx)("p",{className:"mt-4",children:Object(h.jsx)(s.b,{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",to:"/login",children:e("AlreadyAccount")})})]})})]})})})}}}]);
//# sourceMappingURL=8.53239bf9.chunk.js.map