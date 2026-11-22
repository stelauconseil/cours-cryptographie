import{o as e,r as t}from"./theme-C7mIxbsT.js";import{i as n,n as r}from"./theme-menu-B73kwYLH.js";import{t as i}from"./ouverture-DCxQ8Ynp.js";var a=`/assets/atelier-D6uVPPqs.webp`,o=`/assets/badges-C53hLdDH.webp`,s=`/assets/oidapp-1MyFJX53.webp`,c=`/assets/pdf-DTx5_rlo.webp`,l=`/assets/plan-DAILi3Zl.webp`,u=`/assets/presentateur-46prRi3z.webp`,d=`/assets/presentation-DcVo4Ye7.webp`,f=`/assets/seance-DumX7qDg.webp`,p=`/assets/trieuse-DlbMW-89.webp`;t(),e(()=>{});var m=Object.assign({"../decks/epita-srs-2026-27.json":n}),h=Object.assign({"../media/accueil/atelier.webp":a,"../media/accueil/badges.webp":o,"../media/accueil/oidapp.webp":s,"../media/accueil/pdf.webp":c,"../media/accueil/plan.webp":l,"../media/accueil/presentateur.webp":u,"../media/accueil/presentation.webp":d,"../media/accueil/seance.webp":f,"../media/accueil/trieuse.webp":p}),g=e=>h[`../media/accueil/${e}.webp`]||``,_=Object.assign({"../media/ouverture.webp":i}),v=Object.keys(m).map(e=>e.match(/([^/]+)\.json$/)[1]).sort(),y=new URLSearchParams(location.search),b=v.includes(y.get(`d`))?y.get(`d`):v[0],x=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),S;function C(){let e=m[`../decks/${b}.json`],t=(e=``)=>{let t=new URLSearchParams(e);b!==`epita-srs-2026-27`&&t.set(`deck`,b);let n=t.toString().replace(/=(?=&|$)/g,``);return n?`?${n}`:``},n=(e=``,n=``)=>`cours.html${t(e)}${n}`,i=({href:e,img:t,titre:n,texte:r,extra:i=``,tag:a=``,blank:o=!0})=>`
    <article class="acc-card">
      <a class="acc-img" href="${e}"${o?` target="_blank"`:``}>${t?`<img src="${t}" alt="" loading="lazy" />`:``}</a>
      <div class="acc-body">
        <h2><a href="${e}"${o?` target="_blank"`:``}>${n}</a>${a?`<span class="acc-tag">${a}</span>`:``}</h2>
        <p>${r}</p>
        ${i}
      </div>
    </article>`,a=[i({href:n(),img:_[`../media/${e.ouverture}`]||g(`presentation`),titre:`Présentation`,texte:`Le cours complet : ouverture, couverture, sommaire, puis une colonne par partie. Clicker, TAB : vue d'ensemble, G : aller à.`,extra:`<p class="acc-links"><a href="${n(``,`#/sommaire`)}" target="_blank">Sommaire</a> · <a href="${n(``,`#/calendrier`)}" target="_blank">Calendrier</a></p>`}),i({href:`plan.html${b===`epita-srs-2026-27`?``:`?deck=${encodeURIComponent(b)}`}`,img:g(`plan`),titre:`Plan du cours`,texte:`Toutes les planches en miniatures, séance par séance et partie par partie, en clair ou en sombre. Un clic ouvre la planche dans le cours.`}),i({href:n(`print-pdf`),img:g(`pdf`),titre:`Impression PDF`,texte:`Toutes les planches dans leur état final, thème clair. Chrome → Imprimer → Enregistrer au format PDF, paysage, marges « Aucune », arrière-plans activés.`}),i({href:`badges.html`,img:g(`badges`),titre:`Repères`,texte:`Badges des 5 primitives et des assemblages (AUTH, CERT), icônes Font Awesome Duotone.`})],o=[i({href:`https://crypto.stelau.com`,img:g(`atelier`),titre:`Atelier crypto`,tag:`crypto.stelau.com`,texte:`Chiffrer, hacher, signer, échanger une clé, tirer de l'aléa, avec du vrai code et de vrais octets : pour chaque algorithme, une fiche de rappel et un banc d'essai.`}),i({href:`https://le-du6.github.io/OIDApp/`,img:g(`oidapp`),titre:`OIDApp`,tag:`OAuth 2 · OIDC · OID4VC`,texte:`OAuth 2.0, OpenID Connect, OID4VCI et OID4VP pas à pas, et le Crypto Lab : suivre une même clé de l'émission d'une attestation à sa présentation.`})].map(e=>e.replace(`class="acc-tag"`,`class="acc-tag ext"`));document.getElementById(`accueil`).innerHTML=`
    <header class="acc-head">
      <div>
        <div class="acc-kicker">${x(e.ecole)} · ${x(e.code)} · ${x(e.annee)}</div>
        <h1>${x(e.cours)}</h1>
        <p class="acc-who">${x(e.intervenant||``)} · Stelau · iDAKTO</p>
      </div>
      <div class="acc-tools">
        ${v.length>1?`<label class="acc-deck">Deck <select id="acc-deck">${v.map(e=>`<option${e===b?` selected`:``}>${x(e)}</option>`).join(``)}</select></label>`:``}
        <button type="button" id="acc-theme" class="acc-btn"></button>
      </div>
    </header>
    <section class="acc-grid">${a.join(``)}</section>
    <h2 class="acc-sec">Pour aller plus loin</h2>
    <section class="acc-grid">${o.join(``)}</section>
    <footer class="acc-foot">${x(e.title||``)}</footer>`,document.getElementById(`acc-deck`)?.addEventListener(`change`,e=>{b=e.target.value,history.replaceState(null,``,`?d=`+encodeURIComponent(b)),C()}),S?.retirer(),S=r(document.getElementById(`acc-theme`))}C();