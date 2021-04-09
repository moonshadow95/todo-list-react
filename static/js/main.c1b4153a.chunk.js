(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{15:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),a=n(9),s=n.n(a),r=(n(15),n(16),n(2)),d=n(10),i=n(3),l=n(4),u=n(6),j=n(5),h=(n(20),n(21),n(0)),b=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).handleIncrement=function(){t.props.onIncrement(t.props.todo)},t.handleDecrement=function(){t.props.onDecrement(t.props.todo)},t.handleDelete=function(){t.props.onDelete(t.props.todo)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.name,n=t.count;return Object(h.jsxs)("li",{className:"todo",children:[Object(h.jsxs)("div",{className:"todo-name__wrap",children:[Object(h.jsx)("span",{className:"todo-name",children:e}),Object(h.jsx)("span",{className:"todo-count",children:n})]}),Object(h.jsxs)("div",{className:"todo-buttons",children:[Object(h.jsx)("button",{className:"todo-button todo-plus",onClick:this.handleIncrement,children:Object(h.jsx)("i",{className:"fas fa-plus"})}),Object(h.jsx)("button",{className:"todo-button todo-minus",onClick:this.handleDecrement,children:Object(h.jsx)("i",{className:"fas fa-minus"})}),Object(h.jsx)("button",{className:"todo-button todo-delete",onClick:this.handleDelete,children:Object(h.jsx)("i",{className:"far fa-trash-alt"})})]})]})}}]),n}(o.PureComponent),m=Object(o.memo)((function(t){var e=c.a.createRef(),n=c.a.createRef();return Object(h.jsxs)("form",{ref:n,className:"add-form",onSubmit:function(o){o.preventDefault();var c=e.current.value;c&&t.onAdd(c),n.current.reset()},children:[Object(h.jsx)("input",{ref:e,type:"text",className:"add-input",placeholder:"Type your goal"}),Object(h.jsx)("button",{className:"add-button",children:"Add"})]})})),f=Object(o.memo)((function(t){var e=function(e){t.onIncrement(e)},n=function(e){t.onDecrement(e)},o=function(e){t.onDelete(e)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{onAdd:function(e){t.onAdd(e)}}),Object(h.jsx)("ul",{children:t.todos.map((function(t){return Object(h.jsx)(b,{todo:t,onIncrement:e,onDecrement:n,onDelete:o},t.id)}))})]})})),O=function(t){return Object(h.jsxs)("header",{children:[Object(h.jsx)("span",{className:"header-icon",children:Object(h.jsx)("i",{className:"fas fa-fire-alt"})}),Object(h.jsx)("h1",{className:"title",children:"To-Do List for This Week "}),Object(h.jsx)("span",{className:"total-count",children:t.totalCount})]})},p=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={todos:[]},t.handleAdd=function(e){var n=[].concat(Object(d.a)(t.state.todos),[{id:Date.now(),name:e,count:0}]);t.setState({todos:n})},t.handleIncrement=function(e){var n=t.state.todos.map((function(t){return t.id===e.id?Object(r.a)(Object(r.a)({},e),{},{count:e.count+1}):t}));t.setState({todos:n})},t.handleDecrement=function(e){var n=t.state.todos.map((function(t){if(t.id===e.id){var n=e.count-1;return Object(r.a)(Object(r.a)({},e),{},{count:n<0?0:n})}return t}));t.setState({todos:n})},t.handleDelete=function(e){var n=t.state.todos.filter((function(t){return t.id!==e.id}));t.setState({todos:n})},t.handleReset=function(){var e=t.state.todos.map((function(t){return 0!==t.count?Object(r.a)(Object(r.a)({},t),{},{count:0}):t}));t.setState({todos:e})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{totalCount:this.state.todos.filter((function(t){return t.count>0})).length}),Object(h.jsx)(f,{todos:this.state.todos,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd}),Object(h.jsx)("button",{className:"reset",onClick:this.handleReset,children:"RESET"})]})}}]),n}(o.Component);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.c1b4153a.chunk.js.map