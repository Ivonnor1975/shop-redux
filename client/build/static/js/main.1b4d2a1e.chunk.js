(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{46:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},77:function(e,t,a){e.exports=a(93)},82:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(42),o=a.n(c),l=(a(82),a(3)),i=a(10),u=a(8),s=a(71),m=a(74),d=a(105),p=a(103),f=a(9),E=a(72),b=a(28),g={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PRODUCTS":return Object(l.a)(Object(l.a)({},e),{},{products:Object(b.a)(t.products)});case"ADD_TO_CART":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(b.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(l.a)(Object(l.a)({},e),{},{cart:[].concat(Object(b.a)(e.cart),Object(b.a)(t.products))});case"UPDATE_CART_QUANTITY":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(l.a)(Object(l.a)({},e),{},{cartOpen:a.length>0,cart:a});case"CLEAR_CART":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!e.cartOpen});case"UPDATE_CATEGORIES":return Object(l.a)(Object(l.a)({},e),{},{categories:Object(b.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(l.a)(Object(l.a)({},e),{},{currentCategory:t.currentCategory});default:return e}},O=Object(E.a)(h),v=a(70);function y(e,t,a){return new Promise((function(n,r){var c,o,l,i=window.indexedDB.open("shop-shop",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(c=i.result,o=c.transaction(e,"readwrite"),l=o.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":l.put(a),n(a);break;case"get":var u=l.getAll();u.onsuccess=function(){n(u.result)};break;case"delete":l.delete(a._id);break;default:console.log("No valid method")}o.oncomplete=function(){c.close()}}}))}var j,w,_,T,k,N=function(e){var t=Object(f.c)((function(e){return e})),a=Object(f.b)(),n=t.cart,c=e.image,o=e.name,u=e._id,s=e.price,m=e.quantity;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(u)},r.a.createElement("img",{alt:o,src:"/images/".concat(c)}),r.a.createElement("p",null,o)),r.a.createElement("div",null,r.a.createElement("div",null,m," ",function(e,t){return 1===t?e:e+"s"}("item",m)," in stock"),r.a.createElement("span",null,"$",s)),r.a.createElement("button",{onClick:function(){var t=n.find((function(e){return e._id===u}));t?(a({type:"UPDATE_CART_QUANTITY",_id:u,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),y("cart","put",Object(l.a)(Object(l.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:"ADD_TO_CART",product:Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:1})}),y("cart","put",Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},C=a(65),A=a(24),x=a(104),R=Object(x.a)(j||(j=Object(A.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),D=Object(x.a)(w||(w=Object(A.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),S=(Object(x.a)(_||(_=Object(A.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(x.a)(T||(T=Object(A.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),P=Object(x.a)(k||(k=Object(A.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),U=a(46),I=a.n(U);var Q=function(){var e=Object(f.c)((function(e){return e})),t=Object(f.b)(),a=e.currentCategory,c=Object(C.a)(R),o=c.loading,l=c.data;return Object(n.useEffect)((function(){l?(t({type:"UPDATE_PRODUCTS",products:l.products}),l.products.forEach((function(e){y("products","put",e)}))):o||y("products","get").then((function(e){t({type:"UPDATE_PRODUCTS",products:e})}))}),[l,o,t]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),e.products.length?r.a.createElement("div",{className:"flex-row"},(a?e.products.filter((function(e){return e.category._id===a})):e.products).map((function(e){return r.a.createElement(N,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),o?r.a.createElement("img",{src:I.a,alt:"loading"}):null)};var $=function(){var e=Object(f.c)((function(e){return e})),t=Object(f.b)(),a=e.categories,c=Object(C.a)(S),o=c.loading,l=c.data;return Object(n.useEffect)((function(){l?(t({type:"UPDATE_CATEGORIES",categories:l.categories}),l.categories.forEach((function(e){y("categories","put",e)}))):o||y("categories","get").then((function(e){t({type:"UPDATE_CATEGORIES",categories:e})}))}),[l,o,t]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),a.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var a;a=e._id,t({type:"UPDATE_CURRENT_CATEGORY",currentCategory:a})}},e.name)})))},F=a(18),L=a.n(F),M=a(27),q=a(16),G=a(67),Y=a(101),W=function(e){var t=e.item,a=Object(f.b)();return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(a({type:"REMOVE_FROM_CART",_id:t._id}),y("cart","delete",Object(l.a)({},t))):(a({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(n)}),y("cart","put",Object(l.a)(Object(l.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){a({type:"REMOVE_FROM_CART",_id:e._id}),y("cart","delete",Object(l.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},B=a(68),H=a(69),V=a(55),J=a.n(V),z=new(function(){function e(){Object(B.a)(this,e)}return Object(H.a)(e,[{key:"getProfile",value:function(){return J()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return J()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),K=(a(92),Object(G.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),X=function(){var e=Object(f.c)((function(e){return e})),t=Object(f.b)(),a=Object(Y.a)(D),c=Object(q.a)(a,2),o=c[0],l=c[1].data;function i(){t({type:"TOGGLE_CART"})}return Object(n.useEffect)((function(){l&&K.then((function(e){e.redirectToCheckout({sessionId:l.checkout.session})}))}),[l]),Object(n.useEffect)((function(){function a(){return(a=Object(M.a)(L.a.mark((function e(){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("cart","get");case 2:a=e.sent,t({type:"ADD_MULTIPLE_TO_CART",products:Object(b.a)(a)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.cart.length||function(){a.apply(this,arguments)}()}),[e.cart.length,t]),e.cartOpen?r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:i},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),e.cart.length?r.a.createElement("div",null,e.cart.map((function(e){return r.a.createElement(W,{key:e._id,item:e})})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var t=0;return e.cart.forEach((function(e){t+=e.price*e.purchaseQuantity})),t.toFixed(2)}()),z.loggedIn()?r.a.createElement("button",{onClick:function(){var t=[];e.cart.forEach((function(e){for(var a=0;a<e.purchaseQuantity;a++)t.push(e._id)})),o({variables:{products:t}})}},"Checkout"):r.a.createElement("span",null,"(log in to check out)"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!")):r.a.createElement("div",{className:"cart-closed",onClick:i},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))},Z=function(){return r.a.createElement("div",{className:"container"},r.a.createElement($,null),r.a.createElement(Q,null),r.a.createElement(X,null))};var ee=function(){var e=Object(f.c)((function(e){return e})),t=Object(f.b)(),a=Object(u.f)().id,c=Object(n.useState)({}),o=Object(q.a)(c,2),s=o[0],m=o[1],d=Object(C.a)(R),p=d.loading,E=d.data,b=e.products,g=e.cart;return Object(n.useEffect)((function(){b.length?m(b.find((function(e){return e._id===a}))):E?(t({type:"UPDATE_PRODUCTS",products:E.products}),E.products.forEach((function(e){y("products","put",e)}))):p||y("products","get").then((function(e){t({type:"UPDATE_PRODUCTS",products:e})}))}),[b,E,p,t,a]),r.a.createElement(r.a.Fragment,null,s&&g?r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,s.name),r.a.createElement("p",null,s.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",s.price," ",r.a.createElement("button",{onClick:function(){var e=g.find((function(e){return e._id===a}));e?(t({type:"UPDATE_CART_QUANTITY",_id:a,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),y("cart","put",Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(t({type:"ADD_TO_CART",product:Object(l.a)(Object(l.a)({},s),{},{purchaseQuantity:1})}),y("cart","put",Object(l.a)(Object(l.a)({},s),{},{purchaseQuantity:1})))}},"Add to Cart"),r.a.createElement("button",{disabled:!g.find((function(e){return e._id===s._id})),onClick:function(){t({type:"REMOVE_FROM_CART",_id:s._id}),y("cart","delete",Object(l.a)({},s))}},"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(s.image),alt:s.name})):null,p?r.a.createElement("img",{src:I.a,alt:"loading"}):null,r.a.createElement(X,null))};var te,ae,ne,re=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},ce=function(){return r.a.createElement("div",null,r.a.createElement(re,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},oe=a(33),le=a(102),ie=Object(x.a)(te||(te=Object(A.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ue=Object(x.a)(ae||(ae=Object(A.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),se=Object(x.a)(ne||(ne=Object(A.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var me=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(q.a)(t,2),c=a[0],o=a[1],u=Object(le.a)(ie),s=Object(q.a)(u,2),m=s[0],d=s[1].error,p=function(){var e=Object(M.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,z.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.target,a=t.name,n=t.value;o(Object(l.a)(Object(l.a)({},c),{},Object(oe.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:p},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:f})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:f})),d?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var de=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(q.a)(t,2),c=a[0],o=a[1],u=Object(le.a)(se),s=Object(q.a)(u,1)[0],m=function(){var e=Object(M.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,z.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,a=t.name,n=t.value;o(Object(l.a)(Object(l.a)({},c),{},Object(oe.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:m},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var pe=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,z.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return z.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/login"},"Login")))))};var fe=function(){var e=Object(le.a)(ue),t=Object(q.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(M.a)(L.a.mark((function e(){var a,n,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("cart","get");case 2:if(a=e.sent,!(n=a.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:r=e.sent,c=r.data,c.addOrder.products.forEach((function(e){y("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",null,r.a.createElement(re,null,r.a.createElement("h1",null,"Success!"),r.a.createElement("h2",null,"Thank you for your purchase!"),r.a.createElement("h2",null,"You will now be redirected to the home page")))};var Ee=function(){var e,t=Object(C.a)(P).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,o=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",o)))}))))}))):null))},be=Object(s.a)({uri:"/graphql"}),ge=Object(v.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(l.a)(Object(l.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),he=new m.a({link:ge.concat(be),cache:new d.a});var Oe=function(){return r.a.createElement(p.a,{client:he},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(f.a,{store:O},r.a.createElement(pe,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:Z}),r.a.createElement(u.a,{exact:!0,path:"/login",component:me}),r.a.createElement(u.a,{exact:!0,path:"/signup",component:de}),r.a.createElement(u.a,{exact:!0,path:"/success",component:fe}),r.a.createElement(u.a,{exact:!0,path:"/orderHistory",component:Ee}),r.a.createElement(u.a,{exact:!0,path:"/products/:id",component:ee}),r.a.createElement(u.a,{component:ce}))))))},ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ye(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ye(t,e)}))}}()}},[[77,1,2]]]);
//# sourceMappingURL=main.1b4d2a1e.chunk.js.map