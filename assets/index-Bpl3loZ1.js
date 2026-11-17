import{a as e,n as t,r as n,s as r,t as i}from"./theme-VQVo3Bwf.js";import{t as a}from"./epita-srs-2026-27-CTvEkxKu.js";import{t as o}from"./ouverture-DCxQ8Ynp.js";var s=`/assets/atelier-D6uVPPqs.webp`,c=`/assets/badges-C53hLdDH.webp`,l=`/assets/oidapp-1MyFJX53.webp`,u=`/assets/pdf-DTx5_rlo.webp`,d=`/assets/plan-DAILi3Zl.webp`,f=`/assets/presentateur-46prRi3z.webp`,p=`/assets/presentation-DcVo4Ye7.webp`,m=`/assets/seance-DumX7qDg.webp`,h=`/assets/trieuse-DlbMW-89.webp`;t(),e(()=>{});var g=Object.assign({"../decks/epita-srs-2026-27.json":a}),_=Object.assign({"../media/accueil/atelier.webp":s,"../media/accueil/badges.webp":c,"../media/accueil/oidapp.webp":l,"../media/accueil/pdf.webp":u,"../media/accueil/plan.webp":d,"../media/accueil/presentateur.webp":f,"../media/accueil/presentation.webp":p,"../media/accueil/seance.webp":m,"../media/accueil/trieuse.webp":h}),v=e=>_[`../media/accueil/${e}.webp`]||``,y=Object.assign({"../media/ouverture.webp":o}),b=Object.keys(g).map(e=>e.match(/([^/]+)\.json$/)[1]).sort(),x=new URLSearchParams(location.search),S=b.includes(x.get(`d`))?x.get(`d`):b[0],C=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function w(){let e=g[`../decks/${S}.json`],t=(e=``)=>{let t=new URLSearchParams(e);S!==`epita-srs-2026-27`&&t.set(`deck`,S);let n=t.toString().replace(/=(?=&|$)/g,``);return n?`?${n}`:``},a=(e=``,n=``)=>`cours.html${t(e)}${n}`,o=({href:e,img:t,titre:n,texte:r,extra:i=``,tag:a=``,blank:o=!0})=>`
    <article class="acc-card">
      <a class="acc-img" href="${e}"${o?` target="_blank"`:``}>${t?`<img src="${t}" alt="" loading="lazy" />`:``}</a>
      <div class="acc-body">
        <h2><a href="${e}"${o?` target="_blank"`:``}>${n}</a>${a?`<span class="acc-tag">${a}</span>`:``}</h2>
        <p>${r}</p>
        ${i}
      </div>
    </article>`,s=[o({href:a(),img:y[`../media/${e.ouverture}`]||v(`presentation`),titre:`Présentation`,texte:`Le cours complet : ouverture, couverture, sommaire, puis une colonne par partie. Clicker, TAB : vue d'ensemble, G : aller à.`,extra:`<p class="acc-links"><a href="${a(``,`#/sommaire`)}" target="_blank">Sommaire</a> · <a href="${a(``,`#/calendrier`)}" target="_blank">Calendrier</a></p>`}),o({href:`plan.html${S===`epita-srs-2026-27`?``:`?deck=${encodeURIComponent(S)}`}`,img:v(`plan`),titre:`Plan du cours`,texte:`Toutes les planches en miniatures, séance par séance et partie par partie, en clair ou en sombre. Un clic ouvre la planche dans le cours.`}),o({href:a(`print-pdf`),img:v(`pdf`),titre:`Impression PDF`,texte:`Toutes les planches dans leur état final, thème clair. Chrome → Imprimer → Enregistrer au format PDF, paysage, marges « Aucune », arrière-plans activés.`}),o({href:`badges.html`,img:v(`badges`),titre:`Repères`,texte:`Badges des 5 primitives et des assemblages (AUTH, CERT), icônes Font Awesome Duotone.`})],c=[o({href:`https://crypto.stelau.com`,img:v(`atelier`),titre:`Atelier crypto`,tag:`crypto.stelau.com`,texte:`Chiffrer, hacher, signer, échanger une clé, tirer de l'aléa, avec du vrai code et de vrais octets : pour chaque algorithme, une fiche de rappel et un banc d'essai.`}),o({href:`https://le-du6.github.io/OIDApp/`,img:v(`oidapp`),titre:`OIDApp`,tag:`OAuth 2 · OIDC · OID4VC`,texte:`OAuth 2.0, OpenID Connect, OID4VCI et OID4VP pas à pas, et le Crypto Lab : suivre une même clé de l'émission d'une attestation à sa présentation.`})].map(e=>e.replace(`class="acc-tag"`,`class="acc-tag ext"`));document.getElementById(`accueil`).innerHTML=`
    <header class="acc-head">
      <div>
        <div class="acc-kicker">${C(e.ecole)} · ${C(e.code)} · ${C(e.annee)}</div>
        <h1>${C(e.cours)}</h1>
        <p class="acc-who">${C(e.intervenant||``)} · Stelau · iDAKTO</p>
      </div>
      <div class="acc-tools">
        ${b.length>1?`<label class="acc-deck">Deck <select id="acc-deck">${b.map(e=>`<option${e===S?` selected`:``}>${C(e)}</option>`).join(``)}</select></label>`:``}
        <button type="button" id="acc-theme" class="acc-btn" title="Thème : ${C(i[r()])}">Thème</button>
      </div>
    </header>
    <section class="acc-grid">${s.join(``)}</section>
    <h2 class="acc-sec">Pour aller plus loin</h2>
    <section class="acc-grid">${c.join(``)}</section>
    <footer class="acc-foot">${C(e.title||``)}</footer>`,document.getElementById(`acc-deck`)?.addEventListener(`change`,e=>{S=e.target.value,history.replaceState(null,``,`?d=`+encodeURIComponent(S)),w()}),document.getElementById(`acc-theme`).addEventListener(`click`,e=>{n(),e.target.title=`Thème : `+i[r()]})}w();