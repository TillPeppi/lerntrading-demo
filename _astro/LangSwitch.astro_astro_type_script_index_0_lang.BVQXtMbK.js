document.querySelectorAll(".lang-switch__opt").forEach(t=>{t.addEventListener("click",()=>{try{localStorage.setItem("lt-lang",t.dataset.lang||"de")}catch{}})});
