import{a as e,n as t,o as n,r,t as i}from"./theme-DhlVq7S_.js";import{a,l as o,r as s}from"./plan-BxhtMa2_.js";var c=`/assets/badges-C53hLdDH.webp`,l=`/assets/pdf-DTx5_rlo.webp`,u=`/assets/presentateur-46prRi3z.webp`,d=`/assets/presentation-DcVo4Ye7.webp`,f=`/assets/seance-DumX7qDg.webp`,p=`/assets/trieuse-DlbMW-89.webp`;t(),e(()=>{});var m=Object.assign({"../decks/epita-srs-2026-27.json":o}),h=Object.assign({"../media/accueil/badges.webp":c,"../media/accueil/pdf.webp":l,"../media/accueil/presentateur.webp":u,"../media/accueil/presentation.webp":d,"../media/accueil/seance.webp":f,"../media/accueil/trieuse.webp":p}),g=e=>h[`../media/accueil/${e}.webp`]||``,_=Object.keys(m).map(e=>e.match(/([^/]+)\.json$/)[1]).sort(),v=new URLSearchParams(location.search),y=_.includes(v.get(`d`))?v.get(`d`):_[0],b=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function x(){let e=m[`../decks/${y}.json`],t=(e=``)=>{let t=new URLSearchParams(e);y!==`epita-srs-2026-27`&&t.set(`deck`,y);let n=t.toString().replace(/=(?=&|$)/g,``);return n?`?${n}`:``},o=(e=``,n=``)=>`cours.html${t(e)}${n}`,c=(e.seances||[]).map(e=>`<a class="acc-chip" href="${o(`seance=${e.n}`)}" target="_blank"><b>S${b(e.n)}</b>${e.date?`<span>${b(s(e.date))}${e.debut?` · ${b(a(e))}`:``}</span>`:``}</a>`).join(``),l=({href:e,img:t,titre:n,texte:r,extra:i=``,tag:a=``,blank:o=!0})=>`
    <article class="acc-card">
      <a class="acc-img" href="${e}"${o?` target="_blank"`:``}>${t?`<img src="${t}" alt="" loading="lazy" />`:``}</a>
      <div class="acc-body">
        <h2><a href="${e}"${o?` target="_blank"`:``}>${n}</a>${a?`<span class="acc-tag">${a}</span>`:``}</h2>
        <p>${r}</p>
        ${i}
      </div>
    </article>`,u=[l({href:o(),img:g(`presentation`),titre:`Présentation`,texte:`Le cours complet : ouverture, couverture, sommaire, puis une colonne par partie. Clicker, TAB : vue d'ensemble, G : aller à.`,extra:`<p class="acc-links"><a href="${o(``,`#/sommaire`)}" target="_blank">Sommaire</a> · <a href="${o(``,`#/calendrier`)}" target="_blank">Calendrier</a></p>`}),l({href:o(`seance=1`),img:g(`seance`),titre:`Une séance seule`,texte:`Le deck réduit à une séance (3 h) : couverture, sommaire de la séance et ses parties.`,extra:`<div class="acc-chips">${c}</div>`}),l({href:o(),img:g(`presentateur`),titre:`Vue présentateur`,texte:`Dans la présentation, touche <kbd>S</kbd> : fenêtre avec la planche suivante, les notes de l'orateur et le chronomètre.`}),l({href:o(`print-pdf`),img:g(`pdf`),titre:`Impression PDF`,texte:`Toutes les planches dans leur état final, thème clair. Chrome → Imprimer → Enregistrer au format PDF, paysage, marges « Aucune », arrière-plans activés.`}),l({href:`badges.html`,img:g(`badges`),titre:`Repères`,texte:`Badges des 5 primitives et des assemblages (AUTH, CERT), icônes Font Awesome Duotone.`})];document.getElementById(`accueil`).innerHTML=`
    <header class="acc-head">
      <div>
        <div class="acc-kicker">${b(e.ecole)} · ${b(e.code)} · ${b(e.annee)}</div>
        <h1>${b(e.cours)}</h1>
        <p class="acc-who">${b(e.intervenant||``)} · Stelau · iDAKTO</p>
      </div>
      <div class="acc-tools">
        ${_.length>1?`<label class="acc-deck">Deck <select id="acc-deck">${_.map(e=>`<option${e===y?` selected`:``}>${b(e)}</option>`).join(``)}</select></label>`:``}
        <button type="button" id="acc-theme" class="acc-btn" title="Thème : ${b(i[n()])}">Thème</button>
      </div>
    </header>
    <section class="acc-grid">${u.join(``)}</section>
    <footer class="acc-foot">${b(e.title||``)}</footer>`,document.getElementById(`acc-deck`)?.addEventListener(`change`,e=>{y=e.target.value,history.replaceState(null,``,`?d=`+encodeURIComponent(y)),x()}),document.getElementById(`acc-theme`).addEventListener(`click`,e=>{r(),e.target.title=`Thème : `+i[n()]})}x();