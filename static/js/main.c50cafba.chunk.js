(this["webpackJsonpclassic-to-do-in-react"]=this["webpackJsonpclassic-to-do-in-react"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(5),r=a.n(c),o=(a(12),a(3)),l=(a(13),a(6)),i=(a(14),function(e){return s.a.createElement("div",{className:"task"},s.a.createElement("p",null,e.task),s.a.createElement("button",{className:"taskBtn edit",onClick:function(){}},"EDIT"),s.a.createElement("button",{className:"taskBtn delete",onClick:function(){var t=Object(l.a)(e.arr);t.splice(e.index,1),e.setTasks(t)}},"DELETE"))}),u=function(e){return e.tasks.map((function(t,a){return s.a.createElement(i,{key:a,task:t,arr:e.tasks,setTasks:e.setTasks,index:a,tasks:e.tasks})}))};var k=function(){var e=Object(n.useState)([5,6,7]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),l=Object(o.a)(r,2),i=l[0],k=l[1];return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"wrapper"},s.a.createElement("input",{type:"text",placeholder:"Type new Task",value:i,onChange:function(e){k(e.target.value)}}),s.a.createElement("button",{onClick:function(){""===i?alert("type something"):(c((function(e){return e.concat([i])})),k(""),console.log(i))}},"Add Task")),s.a.createElement(u,{tasks:a,description:i,setTasks:c}))};r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.c50cafba.chunk.js.map