import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},s=document.querySelector(".feedback-form"),l=s.querySelector('[name="email"]'),r=s.querySelector('[name="message"]');s.addEventListener("input",t=>{const{name:a,value:m}=t.target;a==="email"?e.email=m.trim():a==="message"&&(e.message=m.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(e))});window.addEventListener("load",()=>{const t=localStorage.getItem("feedback-form-state");if(t){const a=JSON.parse(t);l.value=a.email,r.value=a.message,e.email=a.email,e.message=a.message}});s.addEventListener("submit",t=>{if(t.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),s.reset(),e.email="",e.message=""});
//# sourceMappingURL=2-form.js.map
