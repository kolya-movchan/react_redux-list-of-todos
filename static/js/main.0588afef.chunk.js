(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{31:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c.n(n),s=c(6),r=c(21),i=c(10),l=c(18),o=c(19),d=function(e){return e.FILTER="filter/FILTER",e.QUERY="filter/QUERY",e.TODOS="todos/ALL",e.SET="currentTodo/SET",e.REMOVE="currentTodo/REMOVE",e}({}),u=function(e){return{type:d.SET,payload:e}},j=function(){return{type:d.REMOVE}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SET:return t.payload;case d.REMOVE:return null;default:return e}},h={status:"all",query:""},O=function(e){return{type:d.FILTER,payload:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:d.QUERY,payload:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload,a=e.status,s=e.query;switch(c){case d.FILTER:return{status:n,query:s};case d.QUERY:return{status:a,query:n};default:return e}},m=function(e){return{type:d.TODOS,payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===d.TODOS?t.payload:e},v=Object(i.combineReducers)({currentTodo:b,filter:x,todos:p}),y=Object(i.createStore)(v,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(o.a))),N=c(0),g=(c(29),c(30),c(2)),T=c(4),E=c(3),k=c(20),S=c.n(k);function w(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(31);var R=c(1),L=function(){return Object(R.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(R.jsx)("div",{className:"Loader__content"})})},C=function(){var e=Object(N.useState)(!1),t=Object(E.a)(e,2),c=t[0],n=t[1],a=Object(s.b)(),r=Object(s.c)((function(e){return e.filter.status})),i=Object(s.c)((function(e){return e.filter.query})),l=Object(s.c)((function(e){return e.todos})),o=Object(s.c)((function(e){return e.currentTodo})),d=function(){var e=Object(T.a)(Object(g.a)().mark((function e(){var t;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,w("/todos");case 4:t=e.sent,a(m(t));case 6:return e.prev=6,n(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(){return e.apply(this,arguments)}}();return Object(N.useEffect)((function(){d()}),[]),Object(R.jsxs)(R.Fragment,{children:[c&&Object(R.jsx)(L,{}),l.length>0&&!l.length&&Object(R.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),l.length>0&&l.length>0&&Object(R.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(R.jsx)("thead",{children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{children:"#"}),Object(R.jsx)("th",{children:Object(R.jsx)("span",{className:"icon",children:Object(R.jsx)("i",{className:"fas fa-check"})})}),Object(R.jsx)("th",{children:"Title"}),Object(R.jsx)("th",{children:" "})]})}),Object(R.jsx)("tbody",{children:l.length>0&&l.map((function(e){var t=e.id,c=e.title,n=e.completed;return function(e,t){return!(!e.includes(i)||"active"===r&&t||"completed"===r&&!t)}(c,n)?Object(R.jsxs)("tr",{"data-cy":"todo",children:[Object(R.jsx)("td",{className:"is-vcentered",children:t}),Object(R.jsx)("td",{className:"is-vcentered",children:n&&Object(R.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(R.jsx)("i",{className:"fas fa-check"})})}),Object(R.jsx)("td",{className:"is-vcentered is-expanded",children:Object(R.jsx)("p",{className:n?"has-text-success":"has-text-danger",children:c})}),Object(R.jsx)("td",{className:"has-text-right is-vcentered",children:Object(R.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){a(u(e))},children:Object(R.jsx)("span",{className:"icon",children:Object(R.jsx)("i",{className:S()("far",{"fa-eye-slash":(null===o||void 0===o?void 0:o.id)===t},{"fa-eye":(null===o||void 0===o?void 0:o.id)!==t})})})})})]},t):Object(R.jsx)(N.Fragment,{},t)}))})]})]})},F=function(){var e=Object(s.c)((function(e){return e.filter.status})),t=Object(s.c)((function(e){return e.filter.query})),c=Object(s.b)();return Object(R.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(R.jsx)("p",{className:"control",children:Object(R.jsx)("span",{className:"select",children:Object(R.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){var t=e.currentTarget.value;c(O(t))},value:e,children:[Object(R.jsx)("option",{value:"all",children:"All"}),Object(R.jsx)("option",{value:"active",children:"Active"}),Object(R.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(R.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(R.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){var t=e.currentTarget.value;c(f(t))},value:t}),Object(R.jsx)("span",{className:"icon is-left",children:Object(R.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(R.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(R.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c(f())}})})]})]})},I=function(e){var t=e.currentTodo,c=Object(s.b)(),n=Object(N.useState)(null),a=Object(E.a)(n,2),r=a[0],i=a[1],l=Object(N.useState)(!1),o=Object(E.a)(l,2),d=o[0],u=o[1],b=function(){var e=Object(T.a)(Object(g.a)().mark((function e(){var c;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return u(!0),e.prev=2,e.next=5,n=t.userId,w("/users/".concat(n));case 5:c=e.sent,i(c);case 7:return e.prev=7,u(!1),e.finish(7);case 10:case"end":return e.stop()}var n}),e,null,[[2,,7,10]])})));return function(){return e.apply(this,arguments)}}();Object(N.useLayoutEffect)((function(){b()}),[]);var h=null!==t&&void 0!==t?t:{},O=h.id,f=h.title,x=h.completed,m=null!==r&&void 0!==r?r:{},p=m.name,v=m.email;return Object(R.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(R.jsx)("div",{className:"modal-background"}),d?Object(R.jsx)(L,{}):Object(R.jsxs)("div",{className:"modal-card",children:[Object(R.jsxs)("header",{className:"modal-card-head",children:[Object(R.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(O)}),Object(R.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(j())}})]}),Object(R.jsxs)("div",{className:"modal-card-body",children:[Object(R.jsx)("p",{className:"block","data-cy":"modal-title",children:f}),Object(R.jsxs)("p",{className:"block","data-cy":"modal-user",children:[x?Object(R.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(R.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(R.jsx)("a",{href:"mailto:".concat(v),children:p})]})]})]})]})},q=function(){var e=Object(s.c)((function(e){return e.currentTodo}));return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("div",{className:"section",children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:"box",children:[Object(R.jsx)("h1",{className:"title",children:"Todos:"}),Object(R.jsx)("div",{className:"block",children:Object(R.jsx)(F,{})}),Object(R.jsx)("div",{className:"block",children:Object(R.jsx)(C,{})})]})})}),e&&Object(R.jsx)(I,{currentTodo:e})]})},D=function(){return Object(R.jsx)(s.a,{store:y,children:Object(R.jsx)(r.a,{children:Object(R.jsx)(q,{})})})};a.a.render(Object(R.jsx)(D,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.0588afef.chunk.js.map