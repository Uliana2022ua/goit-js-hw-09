!function(){var t,e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop");r.setAttribute("disabled",""),e.addEventListener("click",(function(){t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.setAttribute("disabled",""),r.removeAttribute("disabled")})),r.addEventListener("click",(function(){clearInterval(t),e.removeAttribute("disabled"),r.setAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.f90389c9.js.map
