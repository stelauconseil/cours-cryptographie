import{a as e,n as t,o as n,r,t as i}from"./theme-B-jlehmd.js";import{t as a}from"./epita-srs-2026-27-ukXME-je.js";var o=`/assets/badges-C53hLdDH.webp`,s=`/assets/pdf-DTx5_rlo.webp`,c=`/assets/presentateur-46prRi3z.webp`,l=`/assets/presentation-DcVo4Ye7.webp`,u=`/assets/seance-DumX7qDg.webp`,d=`/assets/trieuse-DlbMW-89.webp`;t(),e(()=>{});var f=Object.assign({"../decks/epita-srs-2026-27.json":a}),p=Object.assign({"../media/accueil/badges.webp":o,"../media/accueil/pdf.webp":s,"../media/accueil/presentateur.webp":c,"../media/accueil/presentation.webp":l,"../media/accueil/seance.webp":u,"../media/accueil/trieuse.webp":d}),m=e=>p[`../media/accueil/${e}.webp`]||``,h=Object.keys(f).map(e=>e.match(/([^/]+)\.json$/)[1]).sort(),g=new URLSearchParams(location.search),_=h.includes(g.get(`d`))?g.get(`d`):h[0],v=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function y(){let e=f[`../decks/${_}.json`],t=(e=``)=>{let t=new URLSearchParams(e);_!==`epita-srs-2026-27`&&t.set(`deck`,_);let n=t.toString().replace(/=(?=&|$)/g,``);return n?`?${n}`:``},a=(e=``,n=``)=>`cours.html${t(e)}${n}`,o=({href:e,img:t,titre:n,texte:r,extra:i=``,tag:a=``,blank:o=!0})=>`
    <article class="acc-card">
      <a class="acc-img" href="${e}"${o?` target="_blank"`:``}>${t?`<img src="${t}" alt="" loading="lazy" />`:``}</a>
      <div class="acc-body">
        <h2><a href="${e}"${o?` target="_blank"`:``}>${n}</a>${a?`<span class="acc-tag">${a}</span>`:``}</h2>
        <p>${r}</p>
        ${i}
      </div>
    </article>`,s=[o({href:a(),img:m(`presentation`),titre:`Présentation`,texte:`Le cours complet : ouverture, couverture, sommaire, puis une colonne par partie. Clicker, TAB : vue d'ensemble, G : aller à.`,extra:`<p class="acc-links"><a href="${a(``,`#/sommaire`)}" target="_blank">Sommaire</a> · <a href="${a(``,`#/calendrier`)}" target="_blank">Calendrier</a></p>`}),o({href:a(`print-pdf`),img:m(`pdf`),titre:`Impression PDF`,texte:`Toutes les planches dans leur état final, thème clair. Chrome → Imprimer → Enregistrer au format PDF, paysage, marges « Aucune », arrière-plans activés.`}),o({href:`badges.html`,img:m(`badges`),titre:`Repères`,texte:`Badges des 5 primitives et des assemblages (AUTH, CERT), icônes Font Awesome Duotone.`})];document.getElementById(`accueil`).innerHTML=`
    <header class="acc-head">
      <div>
        <div class="acc-kicker">${v(e.ecole)} · ${v(e.code)} · ${v(e.annee)}</div>
        <h1>${v(e.cours)}</h1>
        <p class="acc-who">${v(e.intervenant||``)} · Stelau · iDAKTO</p>
      </div>
      <div class="acc-tools">
        ${h.length>1?`<label class="acc-deck">Deck <select id="acc-deck">${h.map(e=>`<option${e===_?` selected`:``}>${v(e)}</option>`).join(``)}</select></label>`:``}
        <button type="button" id="acc-theme" class="acc-btn" title="Thème : ${v(i[n()])}">Thème</button>
      </div>
    </header>
    <section class="acc-grid">${s.join(``)}</section>
    <footer class="acc-foot">${v(e.title||``)}</footer>`,document.getElementById(`acc-deck`)?.addEventListener(`change`,e=>{_=e.target.value,history.replaceState(null,``,`?d=`+encodeURIComponent(_)),y()}),document.getElementById(`acc-theme`).addEventListener(`click`,e=>{r(),e.target.title=`Thème : `+i[n()]})}y();