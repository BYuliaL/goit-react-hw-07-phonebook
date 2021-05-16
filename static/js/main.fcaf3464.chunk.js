(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{27:function(t,e,n){t.exports={contactsList:"Contacts_contactsList__Chcrh",contactsList__button:"Contacts_contactsList__button__1JOHi"}},40:function(t,e,n){t.exports={form__button:"Form_form__button__9ij5z",form__label:"Form_form__label__23Nn4"}},74:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(21),o=n.n(r),i=n(13),s=n(14),l=n(17),u=n(16),b=n(4),j=n(1),d={container:{minHeight:"calc(100vh - 50px)",display:"flex",alignItems:"center",justifyContent:"center"},title:{fontWeight:500,fontSize:48,textAlign:"center"}},h=function(){return Object(j.jsx)("div",{style:d.container,children:Object(j.jsx)("h1",{style:d.title,children:"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430 "})})},m=n(3),f={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",email:"",password:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onRegister(t.state),t.setState({name:"",email:"",password:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.email,a=t.password;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(j.jsxs)("form",{onSubmit:this.handleSubmit,style:f.form,autoComplete:"off",children:[Object(j.jsxs)("label",{style:f.label,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handleChange})]}),Object(j.jsxs)("label",{style:f.label,children:["Email",Object(j.jsx)("input",{type:"email",name:"email",value:n,onChange:this.handleChange})]}),Object(j.jsxs)("label",{style:f.label,children:["Parol",Object(j.jsx)("input",{type:"password",name:"password",value:a,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}}]),n}(a.Component),p={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},x=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={email:"",password:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onLogin(t.state),t.setState({name:"",email:"",password:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.email,n=t.password;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Login page"}),Object(j.jsxs)("form",{onSubmit:this.handleSubmit,style:p.form,autoComplete:"off",children:[Object(j.jsxs)("label",{style:p.label,children:["Email",Object(j.jsx)("input",{type:"email",name:"email",value:e,onChange:this.handleChange})]}),Object(j.jsxs)("label",{style:p.label,children:["Parol",Object(j.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submit",children:"LogIn"})]})]})}}]),n}(a.Component),g=n(15),v=n(24),y=n.n(v),C=n(5),w=Object(C.b)("contacts/fetchContactsRequest"),_=Object(C.b)("contacts/fetchContactsSuccess"),k=Object(C.b)("contacts/fetchContactsError"),S=Object(C.b)("contacts/addContactsRequest"),L=Object(C.b)("contacts/addContactsSuccess"),A=Object(C.b)("contacts/addContactsError"),D=Object(C.b)("contacts/deleteContactsRequest"),N=Object(C.b)("contacts/deleteContactsSuccess"),B=Object(C.b)("contacts/deleteContactsError"),R=Object(C.b)("contacts/filter"),q=function(){return function(t){t(w()),y.a.get("/contacts").then((function(e){var n=e.data;return t(_(n))})).catch((function(e){return t(k(e.message))}))}},E=function(t,e){return function(n){var a={name:t,number:e};console.log(a),n(S()),y.a.post("/contacts",a).then((function(t){var e=t.data;return n(L(e))})).catch((function(t){return n(A(t.message))}))}},z=function(t){return function(e){e(D()),y.a.delete("/contacts/".concat(t)).then((function(){return e(N(t))})).catch((function(t){return e(B(t.message))}))}},F=n(22),I=function(t){return t.contacts.items},W=function(t){return t.contacts.filter},J={getItems:I,getFilter:W,getVisibleContacts:Object(F.a)([I,W],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},H=n(40),M=n.n(H),Z={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},P=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){var n=t.state.name;e.preventDefault(),t.props.contacts.map((function(t){return t.name.toLowerCase()})).includes(n.toLowerCase())?alert("Name '".concat(n,"' is already in contacts")):t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:Z.form,children:[Object(j.jsxs)("label",{className:Z.label,children:["Name",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{className:Z.label,children:["Namber",Object(j.jsx)("br",{}),Object(j.jsx)("input",{value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:M.a.form__button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),T=Object(g.b)((function(t){return{contacts:J.getItems(t)}}),(function(t){return{onSubmit:function(e){var n=e.name,a=e.number;return t(E(n,a))}}}))(P),V=n(11),$=n.n(V),G=n(27),K=n.n(G),Q=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:K.a.contactsList,children:[a,", ",c,Object(j.jsx)("button",{className:K.a.contactsList__button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})};Q.prototype={contacts:$.a.arrayOf($.a.shape({id:$.a.string.isRequired,name:$.a.string.isRequired,number:$.a.string.isRequired}))};var U,X,Y=Object(g.b)((function(t){return{contacts:J.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(z(e))}}}))(Q),tt={label:{display:"flex",flexDirection:"column",marginBottom:15}},et=Object(g.b)((function(t){return{value:J.getFilter(t)}}),(function(t){return{onChange:function(e){return t(R(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:tt.label,children:["Find contacts by name: ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:e,onChange:n})]})})),nt=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(T,{}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(et,{}),Object(j.jsx)(Y,{})]})}}]),n}(a.Component),at=Object(g.b)(null,(function(t){return{fetchContacts:function(){return t(q())}}}))(nt),ct=n(18),rt={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},ot=function(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)(ct.b,{to:"/",exact:!0,style:rt.link,activeStyle:rt.activeLink,children:"Home"}),Object(j.jsx)(ct.b,{to:"/contacts",exact:!0,style:rt.link,activeStyle:rt.activeLink,children:"Contacts"})]})},it={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},st=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(ct.b,{to:"/register",exact:!0,style:it.link,activeStyle:it.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsx)(ct.b,{to:"/login",exact:!0,style:it.link,activeStyle:it.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})},lt={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}},ut=function(t){t.avatar;var e=t.name,n=t.onLogout;return Object(j.jsxs)("div",{style:lt.container,children:[Object(j.jsxs)("span",{style:lt.name,children:["Welcome, ",e]}),Object(j.jsx)("button",{type:"button",onClick:n,children:"Logout"})]})},bt={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}},jt=function(t){var e=t.isAuthenticated;return Object(j.jsxs)("header",{style:bt.header,children:[Object(j.jsx)(ot,{}),e?Object(j.jsx)(ut,{}):Object(j.jsx)(st,{})]})},dt=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(jt,{}),Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{exact:!0,path:"/",component:h}),Object(j.jsx)(b.a,{path:"/register",component:O}),Object(j.jsx)(b.a,{path:"/login",component:x}),Object(j.jsx)(b.a,{path:"/contacts",component:at})]})]})}}]),n}(a.Component),ht=n(23),mt=n(6),ft=n(41),Ot=n.n(ft),pt=n(19),xt=Object(C.c)([],(U={},Object(m.a)(U,_,(function(t,e){return e.payload})),Object(m.a)(U,L,(function(t,e){return[].concat(Object(ht.a)(t),[e.payload])})),Object(m.a)(U,N,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),U)),gt=Object(C.c)("",Object(m.a)({},R,(function(t,e){return e.payload}))),vt=Object(C.c)(!1,(X={},Object(m.a)(X,w,(function(){return!0})),Object(m.a)(X,_,(function(){return!1})),Object(m.a)(X,k,(function(){return!1})),Object(m.a)(X,S,(function(){return!0})),Object(m.a)(X,L,(function(){return!1})),Object(m.a)(X,A,(function(){return!1})),Object(m.a)(X,D,(function(){return!0})),Object(m.a)(X,N,(function(){return!1})),Object(m.a)(X,B,(function(){return!1})),X)),yt=Object(C.c)(null,{}),Ct=Object(mt.b)({items:xt,filter:gt,loading:vt,error:yt}),wt=[].concat(Object(ht.a)(Object(C.d)({serializableCheck:{ignoredActions:[pt.a,pt.f,pt.b,pt.c,pt.d,pt.e]}})),[Ot.a]),_t=Object(mt.b)({contacts:Ct}),kt=Object(C.a)({reducer:_t,middleware:wt,devTools:!1}),St={store:kt,persistor:Object(pt.g)(kt)};n(73),n(74);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g.a,{store:St.store,children:Object(j.jsx)(ct.a,{children:Object(j.jsx)(dt,{})})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.fcaf3464.chunk.js.map