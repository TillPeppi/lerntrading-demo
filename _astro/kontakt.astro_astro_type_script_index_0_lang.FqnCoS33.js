const o=document.getElementById("kontakt-form");o?.addEventListener("submit",a=>{a.preventDefault();const t=new FormData(o),e=String(t.get("name")??"").trim(),n=String(t.get("email")??"").trim(),c=String(t.get("nachricht")??"").trim(),r=encodeURIComponent(`Anfrage über lerntrading.de${e?` — ${e}`:""}`),i=encodeURIComponent(`${c}

—
${e}${n?` · ${n}`:""}`);window.location.href=`mailto:klose.patrick0599@gmail.com?subject=${r}&body=${i}`});
