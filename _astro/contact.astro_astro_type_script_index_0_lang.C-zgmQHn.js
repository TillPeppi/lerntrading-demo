const o=document.getElementById("kontakt-form");o?.addEventListener("submit",i=>{i.preventDefault();const t=new FormData(o),n=String(t.get("name")??"").trim(),e=String(t.get("email")??"").trim(),a=String(t.get("nachricht")??"").trim(),c=encodeURIComponent(`Inquiry via lerntrading.de${n?` — ${n}`:""}`),m=encodeURIComponent(`${a}

—
${n}${e?` · ${e}`:""}`);window.location.href=`mailto:klose.patrick0599@gmail.com?subject=${c}&body=${m}`});
