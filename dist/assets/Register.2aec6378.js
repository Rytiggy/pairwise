import{r as n,u as d,o as i,c as m,a as e,w as u,v as r,F as g,b as v,g as h}from"./index.f1b653d2.js";const f=e("h1",null," Create an Account ",-1),x={__name:"Register",setup(w){const a=n(""),s=n(""),c=d(),p=()=>{v(h(),a.value,s.value).then(t=>{console.log("Successfully registered!"),c.push("/feed")}).catch(t=>{console.log(t.code),alert(t.message)})};return(t,l)=>(i(),m(g,null,[f,e("p",null,[u(e("input",{type:"text",placeholder:"Email","onUpdate:modelValue":l[0]||(l[0]=o=>a.value=o)},null,512),[[r,a.value]])]),e("p",null,[u(e("input",{type:"password",placeholder:"Password","onUpdate:modelValue":l[1]||(l[1]=o=>s.value=o)},null,512),[[r,s.value]])]),e("p",null,[e("button",{onClick:p}," Submit ")])],64))}};export{x as default};
