(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){e.exports=n.p+"static/media/Logo.0d733fca.png"},117:function(e,t,n){e.exports=n.p+"static/media/loading.c5590569.svg"},121:function(e,t,n){e.exports=n(325)},126:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},232:function(e,t,n){},316:function(e,t,n){},325:function(e,t,n){"use strict";n.r(t);var a=n(18),s=n.n(a),o=(n(126),n(127),n(0)),r=n.n(o),c=n(327),l=n(15),i=n(16),u=n(21),h=n(19),d=n(20),m=(n(128),n(111)),g=n.n(m),p=(n(129),n(112)),f=n.n(p),b=function(){return r.a.createElement(f.a,{id:"page-footer"},r.a.createElement("div",null,r.a.createElement("h4",null,"\xa9 2019 Coding Crew")))},k=n(38),v=n(39),E=n.n(v),y=(n(206),function(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":""," display-flex")},n)}),w=function(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)},O=(n(207),function(e){return console.log(e.name),r.a.createElement("div",{className:"card-height"},r.a.createElement("hr",null),localStorage.hasOwnProperty("isLoggedIn")?r.a.createElement("button",{onClick:function(t){return e.handleClick(t,e)}},r.a.createElement("i",{className:"fas fa-heart heart-icon"})):null,r.a.createElement("div",{className:"card-result"},"Name: ",e.name),r.a.createElement("div",{className:"card-result"},"Address: ",e.vicinity),r.a.createElement("div",{className:"card-result"},"Rating: ",e.rating),r.a.createElement("div",{className:"card-result"},"Open Now: ",e.opening_hours?"Yes":"No"))}),S={saveFavorite:function(e){return E.a.post("/api/favorite",e)},getAll:function(e){return E.a.post("/api/user/all",e)}},j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s))))._handleClick=function(e,t){e.preventDefault(),console.log(t.vicinity);var n={name:t.name,address:t.vicinity,rating:t.rating,userId:localStorage.getItem("userid")};S.saveFavorite(n).then(function(e){console.log(e)}).catch(function(e){return e})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.brewResults,a=t.barkResults;return console.log("Card container hit."),console.log(n),r.a.createElement("div",{xs:"12",sm:"6",md:"8"},n&&n.map(function(t,n){return r.a.createElement(O,Object.assign({key:n,handleClick:e._handleClick},t))}),a&&a.map(function(t,n){return r.a.createElement(O,Object.assign({key:n,handleClick:e._handleClick},t))}))}}]),t}(o.Component),C=n(65),I=(n(232),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("BNB Loaded")}},{key:"render",value:function(){var e=this.props,t=e.brewResults,n=e.barkResults;return console.log(this.props),r.a.createElement("div",{className:"container-fluid card-space"},r.a.createElement(y,null,r.a.createElement(w,{size:"sm-5"},r.a.createElement(C.Card,{className:"card-bg"},r.a.createElement("h3",null,"Brew Places"),t?r.a.createElement(j,{className:"card-result",brewResults:t}):r.a.createElement("h4",null))),r.a.createElement(w,{size:"sm-5"},r.a.createElement(C.Card,{className:"card-bg"},r.a.createElement("h3",null,"Bark Places"),n?r.a.createElement(j,{className:"card-result",barkResults:n}):r.a.createElement("h4",null)))))}}]),t}(o.Component)),N=n(114),T=n.n(N),A=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){localStorage.hasOwnProperty("searchZip")&&(n.setState({zip:localStorage.getItem("searchZip")}),n.search(localStorage.getItem("searchZip")))},n.search=function(e){console.log("performing search on:"),console.log(e),E.a.post("/api/search",{zip:e}).then(function(t){console.log(t.data),t.data&&(localStorage.setItem("searchZip",e),n.setState({brewResults:t.data.brews,barkResults:t.data.barks,results:!0},function(){console.log(n.state.brewResults)}))})},n.handleChange=function(e){n.setState({zip:e.target.value},function(){5===n.state.zip.length?n.search(n.state.zip):n.setState({brewResults:null,barkResults:null})})},n.state={results:!1,error:!1,zip:"",brewResults:null,barkResults:null},n.state.handleChange=n.handleChange.bind(Object(k.a)(Object(k.a)(n))),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"form-style"},r.a.createElement(T.a,{id:"standard-search",placeholder:"Search for...",value:this.state.zip,onChange:this.handleChange}),r.a.createElement("p",{className:"searchMessage"},"Please login to Save Search Results"),this.state.brewResults&&r.a.createElement(I,{brewResults:this.state.brewResults,barkResults:this.state.barkResults})))}}]),t}(o.Component),R=n(115),L=n.n(R),x=n(116),z=n.n(x),_=n(46),D=n.n(_),B=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s))))._handleClick=function(e,t){e.preventDefault();var n={userId:localStorage.getItem("userid")};S.getAll(n).then(function(e){console.log(e)}).catch(function(e){return e})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"goTo",value:function(e){this.props.history.replace("/".concat(e)),this.setState(localStorage.setItem("searchZip",""))}},{key:"login",value:function(){this.props.auth.login()}},{key:"logout",value:function(){this.props.auth.logout(),this.setState(localStorage.removeItem("searchZip"))}},{key:"componentDidMount",value:function(){var e=this.props.auth.renewSession;"true"===localStorage.getItem("isLoggedIn")&&e()}},{key:"render",value:function(){var e=this,t=this.props.auth.isAuthenticated;return r.a.createElement("div",null,r.a.createElement(L.a,{fluid:!0,className:"bnb-nav",xs:"12",sm:"6",md:"8"},r.a.createElement(z.a,null,r.a.createElement("div",null,r.a.createElement("img",{className:"Logo",src:g.a,alt:"Logo"})),r.a.createElement("span",{className:"btnLoc"},r.a.createElement(D.a,{id:"savedBut",bsStyle:"primary",className:"btn-margin","data-toggle":"collapse",onClick:function(t){return e._handleClick(t)}},"Saved Searches"),!t()&&r.a.createElement(D.a,{id:"qsLoginBtn",bsStyle:"primary",className:"btn-margin","data-toggle":"collapse",onClick:this.login.bind(this)},"Log In"),t()&&r.a.createElement(D.a,{id:"qsLogoutBtn",bsStyle:"primary",className:"btn-margin",onClick:this.logout.bind(this)},"Log Out")))),r.a.createElement(b,null),r.a.createElement(A,null))}}]),t}(o.Component),P=(n(316),o.Component,n(117)),Z=n.n(P),M=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{position:"absolute",display:"flex",justifyContent:"center",height:"100vh",width:"100vw",top:0,bottom:0,left:0,right:0,backgroundColor:"white"}},r.a.createElement("img",{src:Z.a,alt:"loading"}))}}]),t}(o.Component),U=n(118),q=n.n(U)()(),F=n(119),J={domain:"react-project3.auth0.com",clientId:"D3x4WpuDdoN-tmhsyOUGZ9uAfeb5lSOt",responseType:"token id_token",scope:"openid",callbackUrl:"http://localhost:3000/callback"};var W=new(function(){function e(){Object(l.a)(this,e),this.auth0=new F.a.WebAuth({domain:J.domain,clientID:J.clientId,redirectUri:J.callbackUrl,responseType:"token id_token",scope:"openid"}),this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getAccessToken=this.getAccessToken.bind(this),this.getIdToken=this.getIdToken.bind(this),this.renewSession=this.renewSession.bind(this)}return Object(i.a)(e,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;this.auth0.parseHash(function(t,n){n&&n.accessToken&&n.idToken?e.setSession(n):t&&(q.replace("/home"),console.log(t),alert("Error: ".concat(t.error,". Check the console for further details.")))})}},{key:"getAccessToken",value:function(){return this.accessToken}},{key:"getIdToken",value:function(){return this.idToken}},{key:"setSession",value:function(e){console.log(e.idTokenPayload.sub),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("userid",e.idTokenPayload.sub);var t=1e3*e.expiresIn+(new Date).getTime();this.accessToken=e.accessToken,this.idToken=e.idToken,this.expiresAt=t,q.replace("/")}},{key:"renewSession",value:function(){var e=this;this.auth0.checkSession({},function(t,n){n&&n.accessToken&&n.idToken?e.setSession(n):t&&(e.logout(),console.log(t),alert("Could not get a new token (".concat(t.error,": ").concat(t.error_description,").")))})}},{key:"logout",value:function(){this.accessToken=null,this.idToken=null,this.expiresAt=0,localStorage.removeItem("isLoggedIn"),this.auth0.logout({returnTo:window.location.origin}),q.replace("/")}},{key:"isAuthenticated",value:function(){var e=this.expiresAt;return(new Date).getTime()<e}}]),e}()),G=r.a.createElement(c.b,{history:q},r.a.createElement("div",null,r.a.createElement(c.a,{path:"/",render:function(e){return r.a.createElement(B,Object.assign({auth:W},e))}}),r.a.createElement(c.a,{path:"/callback",render:function(e){return function(e){var t=e.location;/access_token|id_token|error/.test(t.hash)&&W.handleAuthentication()}(e),r.a.createElement(M,e)}})));s.a.render(G,document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.dceae32d.chunk.js.map