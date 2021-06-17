(this["webpackJsonpblock-master"]=this["webpackJsonpblock-master"]||[]).push([[0],{268:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(65),a=n.n(r),i=n(24),o=n(26),s=n.n(o),l=n(43),j=n(7),d=n(300),b=n(159),u=n(30),h=n(23),p=n(74);n(185),n(186);p.a.initializeApp({apiKey:"AIzaSyDl3ImS3sSkbHjB_UxryrBKTg7w8nlHbp8",authDomain:"block-master-765b2.firebaseapp.com",projectId:"block-master-765b2",storageBucket:"block-master-765b2.appspot.com",messagingSenderId:"150136770203",appId:"1:150136770203:web:d29b1ec798bd39e809c03e"});var O,x,m,g,f,v,y,w,k,F,E,C,S,D,A,L,R,z,I,N,M=p.a.firestore(),P=new p.a.auth.GoogleAuthProvider,_=new p.a.auth.FacebookAuthProvider,U="Auth Login",q="Auth Logout",B="SetError",G="RemoveError",T="StartLoading",K="FinishLoading",H="Add Movie",W="Update Movie",V="Load Movie",J="Active Movie",X=function(e){return{type:B,payload:e}},Y=function(){return{type:G}},Q=function(e,t){return function(n){return p.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n({type:T}),n(Z(t.uid,t.displayName,t.email,t.photoURL))})).catch((function(e){n({type:K}),console.log(e)}))}},Z=function(e,t,n,c){return{type:U,payload:{uid:e,displayName:t,email:n,image:c}}},$=function(){return{type:q}},ee=n(13),te=n(104),ne=n(4),ce=["isAuthenticated","component"],re=function(e){var t=e.isAuthenticated,n=e.component,c=Object(te.a)(e,ce);return[Object(ne.jsx)(h.b,Object(ee.a)(Object(ee.a)({},c),{},{component:function(e){return t?Object(ne.jsx)(n,Object(ee.a)({},e)):Object(ne.jsx)(h.a,{to:"/auth/login"})}}))]},ae=["isAuthenticated","component"],ie=function(e){var t=e.isAuthenticated,n=e.component,c=Object(te.a)(e,ae);return Object(ne.jsx)(h.b,Object(ee.a)(Object(ee.a)({},c),{},{component:function(e){return t?Object(ne.jsx)(h.a,{to:"/home"}):Object(ne.jsx)(n,Object(ee.a)({},e))}}))},oe=n(17),se=n(283),le=n(284),je=n(301),de=n(161),be=n(287),ue=n(288),he=n(160),pe=n(289),Oe=n(18),xe=n(38),me=n(146),ge=n(10),fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(j.a)(t,2),r=n[0],a=n[1],i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;a(t)},o=function(e){var t=e.target;a(Object(ee.a)(Object(ee.a)({},r),{},Object(ge.a)({},t.name,t.value)))};return[r,o,i]},ve=n(75),ye=n.n(ve),we=Oe.a.div(O||(O=Object(oe.a)(["\n    background: url('https://i.ibb.co/jzwCKMb/BG.png') center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n"]))),ke=Object(Oe.a)(se.a)(x||(x=Object(oe.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n"]))),Fe=Oe.a.div(m||(m=Object(oe.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 80%;\n    height: 90%;\n    text-align: -webkit-center;\n    padding: 70px 30px;\n    background: #0F0E17;\n    border: solid #FED941;\n    border-radius: 5px;\n    @media (max-width: 460px) {\n        width: 90%;\n        padding: 50px 30px;\n    }\n"]))),Ee=Object(Oe.a)(le.a)(g||(g=Object(oe.a)(["\n    background: #FFFFFE;\n    /* opacity: 0.5; */\n    color: #000000;\n    border-radius: 10px;\n"]))),Ce=Oe.a.div(f||(f=Object(oe.a)(["\n    display: flex;\n    align-items: center;\n"]))),Se=function(){var e=Object(i.b)(),t=Object(c.useState)(!1),n=Object(j.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(!1),d=Object(j.a)(o,2),b=d[0],h=d[1],O=Object(i.c)((function(e){return e.ui})).msjError,x=fe({name:"",lastName:"",email:"",password:"",password2:""}),m=Object(j.a)(x,2),g=m[0],f=m[1],v=g.name,y=g.lastName,w=g.email,k=g.password,F=g.password2;return Object(ne.jsx)(we,{children:Object(ne.jsx)(ke,{children:Object(ne.jsxs)(Fe,{children:[Object(ne.jsx)("img",{src:"https://i.ibb.co/L9gqLtb/logo-block-Master.png",alt:"logo-block-Master",border:"0"}),Object(ne.jsxs)("form",{onSubmit:function(t){t.preventDefault(),(0===v.trim().length?(e(X("Nombre requerido")),0):0===y.trim().length?(e(X("Apellido requerido")),0):ye.a.isEmail(w)?ye.a.isStrongPassword(k)?k!==F?(e(X("Passwords no coinciden")),0):(e(Y()),1):(e(X("Password no strong")),0):(e(X("Email requerido")),0))&&e(function(e,t,n,c){return function(r){p.a.auth().createUserWithEmailAndPassword(n,c).then(function(){var n=Object(l.a)(s.a.mark((function n(c){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=c.user,n.next=3,a.updateProfile({displayName:e+" "+t});case 3:r(Z(a.uid,a.displayName,a.email,a.photoURL));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}}(v,y,w,k))},children:[O&&Object(ne.jsxs)(je.a,{status:"error",mt:5,children:[Object(ne.jsx)(je.b,{}),O]}),Object(ne.jsxs)(Ce,{children:[Object(ne.jsx)(de.a,{mt:10,mr:2,children:Object(ne.jsxs)(Ee,{children:[Object(ne.jsx)(be.a,{pointerEvents:"none",children:Object(ne.jsx)(xe.e,{color:"#0F0E17"})}),Object(ne.jsx)(ue.a,{type:"text",placeholder:"Name",name:"name",value:v,onChange:f})]})}),Object(ne.jsx)(de.a,{mt:10,ml:2,children:Object(ne.jsxs)(Ee,{children:[Object(ne.jsx)(be.a,{pointerEvents:"none",children:Object(ne.jsx)(xe.e,{color:"#0F0E17"})}),Object(ne.jsx)(ue.a,{type:"text",placeholder:"Last name",name:"lastName",value:y,onChange:f})]})})]}),Object(ne.jsx)(de.a,{mt:5,children:Object(ne.jsxs)(Ee,{children:[Object(ne.jsx)(be.a,{pointerEvents:"none",children:Object(ne.jsx)(me.a,{color:"#0F0E17"})}),Object(ne.jsx)(ue.a,{type:"email",placeholder:"Email address",name:"email",value:w,onChange:f})]})}),Object(ne.jsx)(de.a,{mt:5,children:Object(ne.jsxs)(Ee,{children:[Object(ne.jsx)(be.a,{pointerEvents:"none",children:Object(ne.jsx)(xe.a,{color:"#0F0E17"})}),Object(ne.jsx)(ue.a,{type:r?"text":"password",placeholder:"Password",name:"password",value:k,onChange:f}),Object(ne.jsx)(be.b,{width:"4.5rem",children:Object(ne.jsx)(he.a,{h:"1.75rem",size:"sm",onClick:function(){return a(!r)},children:r?"Hide":"Show"})})]})}),Object(ne.jsx)(de.a,{mt:5,children:Object(ne.jsxs)(Ee,{children:[Object(ne.jsx)(be.a,{pointerEvents:"none",children:Object(ne.jsx)(xe.a,{color:"#0F0E17"})}),Object(ne.jsx)(ue.a,{type:b?"text":"password",placeholder:"Confirm password",name:"password2",value:F,onChange:f}),Object(ne.jsx)(be.b,{width:"4.5rem",children:Object(ne.jsx)(he.a,{h:"1.75rem",size:"sm",onClick:function(){return h(!b)},children:b?"Hide":"Show"})})]})}),Object(ne.jsx)(he.a,{type:"submit",width:"100%",mt:5,background:"#2832c2",color:"#FED941",_hover:{background:"#FED941",color:"#2832c2"},children:"Register"})]}),Object(ne.jsxs)(pe.a,{mt:3,mb:3,color:"#FFFFFE",children:["Already registered?"," ",Object(ne.jsx)(u.b,{to:"/auth/login",style:{color:"#FED941"},onClick:function(){e(Y())},children:"Sign in"})]})]})})})},De=n(147),Ae=n(290),Le=n(148),Re=n(149),ze=Oe.a.div(v||(v=Object(oe.a)(["\n    background: url('https://i.ibb.co/jzwCKMb/BG.png') center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n"]))),Ie=Object(Oe.a)(se.a)(y||(y=Object(oe.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n"]))),Ne=Oe.a.div(w||(w=Object(oe.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 80%;\n    height: 90%;\n    text-align: -webkit-center;\n    padding: 80px 30px;\n    background: #0F0E17;\n    border: solid #FED941;\n    border-radius: 5px;\n    @media (max-width: 460px) {\n        width: 90%;\n        padding: 50px 30px;\n    }\n"]))),Me=Object(Oe.a)(le.a)(k||(k=Object(oe.a)(["\n    background: #FFFFFE;\n    /* opacity: 0.5; */\n    color: #000000;\n    border-radius: 10px;\n"]))),Pe=Oe.a.div(F||(F=Object(oe.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 100%;\n"]))),_e=function(){var e=Object(i.b)(),t=Object(c.useState)(!1),n=Object(j.a)(t,2),r=n[0],a=n[1],o=fe({user:"",password:""}),d=Object(j.a)(o,2),b=d[0],h=d[1],O=b.user,x=b.password,m=Object(i.c)((function(e){return e.ui})).msjError;return Object(ne.jsx)(ze,{children:Object(ne.jsx)(Ie,{children:Object(ne.jsxs)(Ne,{children:[Object(ne.jsx)("img",{src:"https://i.ibb.co/L9gqLtb/logo-block-Master.png",alt:"logo-block-Master",border:"0"}),Object(ne.jsxs)("form",{onSubmit:function(t){t.preventDefault(),(ye.a.isEmail(O)?ye.a.isStrongPassword(x)?(e(Y()),1):(e(X("La contrase\xf1a es incorrecta")),0):(e(X("Email requerido")),0))&&e(Q(O,x))},children:[m&&Object(ne.jsxs)(je.a,{status:"error",mt:5,children:[Object(ne.jsx)(je.b,{}),m]}),Object(ne.jsx)(de.a,{mt:10,children:Object(ne.jsxs)(Me,{children:[Object(ne.jsx)(be.a,{pointerEvents:"none",children:Object(ne.jsx)(xe.e,{color:"#0F0E17"})}),Object(ne.jsx)(ue.a,{type:"email",placeholder:"Email address",name:"user",value:O,onChange:h})]})}),Object(ne.jsx)(de.a,{mt:10,children:Object(ne.jsxs)(Me,{children:[Object(ne.jsx)(be.a,{pointerEvents:"none",children:Object(ne.jsx)(xe.a,{color:"#0F0E17"})}),Object(ne.jsx)(ue.a,{type:r?"text":"password",placeholder:"Password",name:"password",value:x,onChange:h}),Object(ne.jsx)(be.b,{width:"4.5rem",children:Object(ne.jsx)(he.a,{h:"1.75rem",size:"sm",onClick:function(){return a(!r)},children:r?"Hide":"Show"})})]})}),Object(ne.jsx)(he.a,{type:"submit",width:"100%",mt:5,background:"#2832c2",color:"#FED941",_hover:{background:"#FED941",color:"#2832c2"},children:"Login"})]}),Object(ne.jsxs)(pe.a,{mt:3,mb:3,color:"#FFFFFE",children:["New to us?"," ",Object(ne.jsx)(u.b,{to:"/auth/register",style:{color:"#FED941"},onClick:function(){e(Y())},children:"Sign Up"})]}),Object(ne.jsxs)(De.a,{templateColumns:"repeat(3, 1fr)",gap:2,width:"100%",mt:"10px",children:[Object(ne.jsx)(pe.a,{w:"100%",h:"10",mt:"13px",children:Object(ne.jsx)("hr",{color:"#FFFFFE"})}),Object(ne.jsx)(pe.a,{w:"100%",h:"10",textAlign:"center",color:"#FFFFFE",children:"or"}),Object(ne.jsx)(pe.a,{w:"100%",h:"10",mt:"13px",children:Object(ne.jsx)("hr",{color:"#FFFFFE"})})]}),Object(ne.jsxs)(Pe,{children:[Object(ne.jsx)(Ae.a,{colorScheme:"teal","aria-label":"Call Segun",size:"lg",background:"#fffffe",_hover:{bg:"#fffffe"},icon:Object(ne.jsx)(Le.a,{fontSize:"30px"}),onClick:function(){e((function(e){p.a.auth().signInWithPopup(P).then(function(){var t=Object(l.a)(s.a.mark((function t(n){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=n.user,e(Z(c.uid,c.displayName,c.email,c.photoURL));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}))}}),Object(ne.jsx)(Ae.a,{colorScheme:"teal","aria-label":"Call Segun",size:"lg",background:"#3b5a9a",color:"#fffffe",_hover:{bg:"#3b5a9a",color:"#fffffe"},icon:Object(ne.jsx)(Re.a,{fontSize:"30px"}),onClick:function(){e((function(e){p.a.auth().signInWithPopup(_).then(function(){var t=Object(l.a)(s.a.mark((function t(n){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=n.user,e(Z(c.uid,c.displayName,c.email,c.photoURL));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}))}})]})]})})})},Ue=function(){return Object(ne.jsx)(u.a,{children:Object(ne.jsxs)(h.d,{children:[Object(ne.jsx)(h.b,{exact:!0,path:"/auth/login",component:_e}),Object(ne.jsx)(h.b,{exact:!0,path:"/auth/register",component:Se})]})})},qe=n(291),Be=n(292),Ge=n(302),Te=n(299),Ke=n(303),He=n(151),We=Object(Oe.a)(le.a)(E||(E=Object(oe.a)(["\n    background: #FFFFFE;\n    /* opacity: 0.5; */\n    color: #000000;\n    border-radius: 20px;\n"]))),Ve=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})),n=t.email,c=t.image,r=Object(qe.a)(),a=r.isOpen,o=r.onOpen,j=r.onClose;return Object(ne.jsxs)(Be.a,{as:"nav",align:"center",justify:"space-between",wrap:"wrap",paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10,background:"#0F0E17",color:"white",children:[Object(ne.jsx)(Be.a,{align:"center",children:Object(ne.jsx)("img",{src:"https://i.ibb.co/L9gqLtb/logo-block-Master.png",alt:"logo-block-Master",border:"0",width:"100px",height:"60px"})}),Object(ne.jsx)(pe.a,{display:{base:"block",md:"none"},onClick:function(){return a?j():o()},children:Object(ne.jsx)(He.a,{})}),Object(ne.jsx)(Ge.a,{direction:{base:"column",md:"row"},display:{base:a?"block":"none",md:"flex"},width:{base:"full",md:"auto"},alignItems:"center",flexGrow:1,mt:{base:4,md:0},justifyContent:"center",children:Object(ne.jsx)(u.b,{to:"/home",children:"All"})}),Object(ne.jsx)(Ge.a,{direction:{base:"column",md:"row"},display:{base:a?"block":"none",md:"flex"},width:{base:"full",md:"auto"},alignItems:"center",flexGrow:1,mt:{base:4,md:0},justifyContent:"center",children:Object(ne.jsx)(u.b,{to:"/home",children:"Most valued"})}),Object(ne.jsx)(Ge.a,{direction:{base:"column",md:"row"},display:{base:a?"block":"none",md:"flex"},width:{base:"full",md:"auto"},alignItems:"center",flexGrow:1,mt:{base:4,md:0},justifyContent:"center",children:Object(ne.jsx)(u.b,{to:"/home",children:"Least valued"})}),Object(ne.jsx)(Ge.a,{direction:{base:"column",md:"row"},display:{base:a?"block":"none",md:"flex"},width:{base:"full",md:"auto"},alignItems:"center",flexGrow:1,mt:{base:4,md:0},children:Object(ne.jsx)(de.a,{children:Object(ne.jsxs)(We,{children:[Object(ne.jsx)(be.a,{pointerEvents:"none",children:Object(ne.jsx)(xe.d,{color:"#0F0E17"})}),Object(ne.jsx)(ue.a,{type:"search",placeholder:"Search...",name:"search",borderRadius:20})]})})}),Object(ne.jsx)(Ge.a,{direction:{base:"column",md:"row"},display:{base:a?"block":"none",md:"flex"},width:{base:"full",md:"auto"},alignItems:"center",flexGrow:1,mt:{base:4,md:0},justifyContent:"center",children:Object(ne.jsxs)(Te.a,{children:[Object(ne.jsx)(Te.b,{children:Object(ne.jsx)(Ke.a,{name:"Dan Abrahmov",src:c})}),Object(ne.jsxs)(Te.d,{background:"#0F0E17",color:"#FED941",children:[Object(ne.jsx)(Te.c,{background:"transparent !important",_hover:{background:"#FED941 !important",color:"#2832c2"},children:"Profile"}),"chicholoncia@gmail.com"===n&&Object(ne.jsx)(u.b,{to:"/addmovies",children:Object(ne.jsx)(Te.c,{_hover:{background:"#FED941",color:"#2832c2"},children:"Add movie"})}),Object(ne.jsx)("hr",{background:"#FED941"}),Object(ne.jsx)(Te.c,{onClick:function(){e(function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.auth().signOut();case 2:t($());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},_hover:{background:"#FED941",color:"#2832c2"},children:"Logout"})]})]})})]})},Je=n(294),Xe=n(295),Ye=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.collection("".concat(t)).get();case 2:return n=e.sent,c=[],n.forEach((function(e){c.push(Object(ee.a)({id:e.id},e.data()))})),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Qe=function(e){return{type:H,payload:Object(ee.a)({},e)}},Ze=function(e){return function(){var t=Object(l.a)(s.a.mark((function t(n){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ye(e);case 2:c=t.sent,n($e(c));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$e=function(e){return{type:V,payload:e}},et=Oe.a.form(C||(C=Object(oe.a)(["\n    display: grid;\n    grid-template-columns: repeat(2);\n    grid-template-rows: repeat(5);\n    grid-gap: 10px;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n"]))),tt=Oe.a.img(S||(S=Object(oe.a)(["\n    align-items: center;\n    justify-content: center;\n    width: 80%;\n"]))),nt=function(){var e=Object(i.b)(),t=fe({tittle:"",description:"",year:"",categorie:"",image:"",duration:""}),n=Object(j.a)(t,2),c=n[0],r=n[1],a=c.tittle,o=c.description,d=c.year,b=c.categorie,u=c.image,h=c.duration;return Object(ne.jsxs)(Be.a,{color:"white",m:10,children:[Object(ne.jsx)(Je.a,{width:"30%",children:Object(ne.jsx)(tt,{src:"https://i.ibb.co/KxBkKrz/rollocine.jpg",alt:"rollocine",border:"0",style:{width:"80%"}})}),Object(ne.jsx)(Je.a,{width:"70%",children:Object(ne.jsxs)(et,{children:[Object(ne.jsx)("div",{style:{gridColumn:"1",gridRow:"1"},children:Object(ne.jsx)(ue.a,{type:"text",name:"tittle",placeholder:"Tittle",value:a,onChange:r})}),Object(ne.jsx)("div",{style:{gridColumn:"1",gridRow:"2"},children:Object(ne.jsx)(ue.a,{type:"text",name:"year",placeholder:"Year",value:d,onChange:r})}),Object(ne.jsx)("div",{style:{gridColumn:"1",gridRow:"3"},children:Object(ne.jsx)(ue.a,{type:"text",name:"categorie",placeholder:"Categories",value:b,onChange:r})}),Object(ne.jsx)("div",{style:{gridColumn:"1",gridRow:"4"},children:Object(ne.jsx)(ue.a,{type:"text",name:"duration",placeholder:"Duration",value:h,onChange:r})}),Object(ne.jsx)("div",{style:{gridColumn:"2",gridRow:"1"},children:Object(ne.jsx)(ue.a,{type:"text",name:"image",placeholder:"Image URL",value:u,onChange:r})}),Object(ne.jsx)("div",{style:{gridColumn:"2",gridRow:"2/5"},children:Object(ne.jsx)(Xe.a,{name:"description",rows:"8",cols:"50",placeholder:"Description",resize:"none",value:o,onChange:r})}),Object(ne.jsx)("div",{style:{gridColumn:"1/3",gridRow:"5",textAlign:"center"},children:Object(ne.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),e(function(e,t,n,c,r,a){return function(){var i=Object(l.a)(s.a.mark((function i(o){var l;return s.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return l={image:r,tittle:e,description:t,year:n,categorie:c,duration:a,qualification:[],trailer:""},console.log(l),i.next=4,M.collection("movies/").add(l);case 4:o(Qe(l)),o(Ze("movies"));case 6:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}()}(a,o,d,b,u,h))},children:"Add Movie"})})]})})]})},ct=n(296),rt=Object(Oe.a)(De.a)(D||(D=Object(oe.a)(["\n    border: solid;\n"]))),at=Object(Oe.a)(pe.a)(A||(A=Object(oe.a)(["\n    display: flex;\n    justify-content: center;\n"]))),it=Object(Oe.a)(pe.a)(L||(L=Object(oe.a)(["\n    display: flex;\n    justify-content: left;\n"]))),ot=function(){var e=Object(i.c)((function(e){return e.movie})).movie;return console.log(e),Object(ne.jsx)(ct.a,{children:e.map((function(e,t){return Object(ne.jsxs)(rt,{templateColumns:"repeat(4, 1fr)",gap:6,children:[Object(ne.jsx)(at,{w:"100%",h:"20",children:Object(ne.jsx)("img",{src:e.image,alt:e.tittle,border:"0"})}),Object(ne.jsx)(it,{w:"100%",h:"20",children:Object(ne.jsxs)("div",{children:[Object(ne.jsx)("p",{children:e.tittle}),Object(ne.jsx)("p",{children:e.year})]})}),Object(ne.jsx)(at,{w:"100%",h:"20",children:Object(ne.jsxs)("form",{children:[Object(ne.jsx)(ue.a,{type:"text",name:"trailer",placeholder:"Trailer"}),Object(ne.jsx)("button",{style:{width:"100%"},children:"Add Trailer"})]})}),Object(ne.jsx)(at,{w:"100%",h:"20",children:Object(ne.jsx)("button",{children:"Delete"})})]},t)}))})},st=function(){return Object(ne.jsxs)("div",{style:{color:"white"},children:[Object(ne.jsx)(nt,{}),Object(ne.jsx)(ot,{})]})},lt=n(298),jt=Oe.a.img(R||(R=Object(oe.a)(["\n    border-radius: 10px !important;\n    opacity: 0.5;\n    :hover {\n        opacity: 1;\n    }\n"]))),dt=Object(Oe.a)(lt.d)(z||(z=Object(oe.a)(["\n    max-width: none;\n    width: 80%;\n    background: rgba(0, 0, 0, 0.5);\n    color: white;\n    border-radius: 20px;\n"]))),bt=Object(Oe.a)(lt.b)(I||(I=Object(oe.a)(["\n    display: flex;\n"]))),ut=(Oe.a.h1(N||(N=Object(oe.a)(["\n\n"]))),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.movie})).movie,n=Object(i.c)((function(e){return e.movie})).active,c=Object(qe.a)(),r=c.isOpen,a=c.onOpen,o=c.onClose;console.log(t);var s=function(t){e(function(e,t){return{type:J,payload:Object(ee.a)({id:e},t)}}(t.id,Object(ee.a)({},t)))};return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(De.a,{templateColumns:"repeat(5, 1fr)",gap:3,m:10,children:t.map((function(e,t){return Object(ne.jsx)(pe.a,{w:"100%",h:"100%",onClick:function(){return s(e)},children:Object(ne.jsx)(jt,{onClick:a,src:e.image,alt:e.tittle,border:"0"})},t)}))}),Object(ne.jsx)(lt.a,{isOpen:r,onClose:o,children:Object(ne.jsxs)(dt,{className:"hola",children:[Object(ne.jsx)(lt.f,{children:Object(ne.jsx)(lt.c,{})}),Object(ne.jsxs)(bt,{children:[Object(ne.jsx)("img",{src:n.image,alt:n.tittle,border:"0",style:{marginRight:"10px",width:"30%",height:"30%"}}),Object(ne.jsxs)("div",{children:[Object(ne.jsx)("h1",{style:{fontSize:"30px"},children:n.tittle}),Object(ne.jsx)("hr",{}),Object(ne.jsx)("p",{style:{fontSize:"18px"},children:n.description}),Object(ne.jsx)("hr",{}),Object(ne.jsxs)("p",{style:{fontSize:"14px"},children:[n.year," - ",n.categorie," - ",n.duration]})]})]}),Object(ne.jsxs)(lt.e,{children:[Object(ne.jsx)(he.a,{leftIcon:Object(ne.jsx)(xe.b,{}),style:{width:"270",height:"50",background:"#FED941",color:"#0F0E17",border:"solid #FED941",marginRight:"10px"},children:"Ver Ahora"}),Object(ne.jsx)(he.a,{leftIcon:Object(ne.jsx)(xe.c,{}),style:{width:"270",height:"50",background:"transparent",color:"#FED941",border:"solid #FED941"},children:"Ver despues"})]})]})})]})}),ht=function(){return Object(ne.jsx)("div",{style:{color:"white"},children:Object(ne.jsx)(ut,{})})},pt=function(){return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(Ve,{}),Object(ne.jsxs)(h.d,{children:[Object(ne.jsx)(h.b,{path:"/home",component:ht}),Object(ne.jsx)(h.b,{path:"/addmovies",component:st})]})]})};var Ot=function(){var e=Object(i.b)(),t=Object(c.useState)(!0),n=Object(j.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(!1),p=Object(j.a)(o,2),O=p[0],x=p[1];return Object(c.useEffect)((function(){b.a.auth().onAuthStateChanged(function(){var t=Object(l.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(Z(n.uid,n.displayName,n.email,n.photoURL)),x(!0),e(Ze("movies"))):x(!1),a(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,a,x]),r?Object(ne.jsx)("h1",{children:"Loading ..."}):Object(ne.jsx)(d.a,{children:Object(ne.jsx)(u.a,{children:Object(ne.jsxs)(h.d,{children:[Object(ne.jsx)(ie,{path:"/auth",component:Ue,isAuthenticated:O}),Object(ne.jsx)(re,{path:"/",component:pt,isAuthenticated:O}),Object(ne.jsx)(h.a,{to:"/auth/login"})]})})})},xt=n(84),mt=n(156),gt=n(27),ft={movie:[],active:{}},vt={loading:!1,msjError:null},yt="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xt.c,wt=Object(xt.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return{uid:t.payload.uid,name:t.payload.displayName,email:t.payload.email,image:t.payload.image};case q:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(ee.a)(Object(ee.a)({},e),{},{msjError:t.payload});case G:return Object(ee.a)(Object(ee.a)({},e),{},{msjError:null});case T:return Object(ee.a)(Object(ee.a)({},e),{},{loading:!0});case K:case q:return Object(ee.a)(Object(ee.a)({},e),{},{loading:!1});default:return e}},movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(ee.a)(Object(ee.a)({},e),{},{movie:[t.payload].concat(Object(gt.a)(e.movie))});case V:return Object(ee.a)(Object(ee.a)({},e),{},{movie:Object(gt.a)(t.payload)});case J:return Object(ee.a)(Object(ee.a)({},e),{},{active:Object(ee.a)({},t.payload)});case W:return{};default:return e}}}),kt=Object(xt.d)(wt,yt(Object(xt.a)(mt.a)));a.a.render(Object(ne.jsx)(i.a,{store:kt,children:Object(ne.jsx)(Ot,{})}),document.getElementById("root"))}},[[268,1,2]]]);
//# sourceMappingURL=main.09f4f0d2.chunk.js.map