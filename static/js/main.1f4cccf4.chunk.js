(this["webpackJsonpclassic-to-do-in-react"]=this["webpackJsonpclassic-to-do-in-react"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(3),o=n.n(s),r=(n(9),n(1)),l=(n(10),n(11),function(e){return c.a.createElement("div",{className:"task"},c.a.createElement("p",null,e.task),c.a.createElement("button",{className:"taskBtn edit",onClick:function(){}},"EDIT"),c.a.createElement("button",{className:"taskBtn delete",onClick:function(){}},"DELETE"))}),i=function(e){return e.tasks.map((function(t,n){return c.a.createElement(l,{key:n,task:t,arr:e.tasks,setTask:e.setTasks,index:n,tasks:e.tasks})}))};var u=function(){var e=Object(a.useState)([5,6,7]),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(""),l=Object(r.a)(o,2),u=l[0],k=l[1];return c.a.createElement("div",{className:"App"},c.a.createElement("input",{type:"text",placeholder:"Type new Task",value:u,onChange:function(e){k(e.target.value)}}),c.a.createElement("button",{onClick:function(){""===u?alert("type something"):(s((function(e){return e.concat([u])})),k(""),console.log(u))}},"Add Task"),c.a.createElement(i,{tasks:n,description:u,setTasks:s}))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.1f4cccf4.chunk.js.map