const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop");let d;e.setAttribute("disabled",""),t.addEventListener("click",(()=>{d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(()=>{clearInterval(d),t.removeAttribute("disabled"),e.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.6b39aeee.js.map
