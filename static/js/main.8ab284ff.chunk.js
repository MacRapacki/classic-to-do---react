(this["webpackJsonpclassic-to-do-in-react"]=this["webpackJsonpclassic-to-do-in-react"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(3),r=a.n(s),o=(a(9),a(1)),l=(a(10),a(11),function(e){return c.a.createElement("div",{className:"task"},c.a.createElement("p",null,e.task),c.a.createElement("button",{className:"taskBtn edit",onClick:function(){}},"EDIT"),c.a.createElement("button",{className:"taskBtn delete",onClick:function(){}},"DELETE"))}),i=function(e){return e.tasks.map((function(t,a){return c.a.createElement(l,{key:a,task:t,arr:e.tasks,setTask:e.setTasks,index:a,tasks:e.tasks})}))};var u=function(){var e=Object(n.useState)([5,6,7]),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),l=Object(o.a)(r,2),u=l[0],k=l[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("input",{type:"text",placeholder:"Type new Task",value:u,onChange:function(e){k(e.target.value)}}),c.a.createElement("button",{onClick:function(){""===u?alert("type something"):(s((function(e){return e.concat([u])})),k(""),console.log(u))}},"Add Task")),c.a.createElement(i,{tasks:a,description:u,setTasks:s}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.8ab284ff.chunk.js.map