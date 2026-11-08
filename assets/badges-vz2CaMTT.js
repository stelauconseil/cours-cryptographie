import{n as e,r as t}from"./theme-BR3ECXx9.js";import{n,r,t as i}from"./primitives-B_fyDBUv.js";e();var a=Object.keys(n),o=e=>a.filter(t=>n[t].groupe===e),s=e=>`<div class="cell"><span class="prim" data-prim="${e}"></span><code>${e}</code><small>${n[e].famille}</small></div>`;document.body.insertAdjacentHTML(`beforeend`,`<style>
    body.refs { margin: 0; padding: 40px 56px; font-family: var(--sans); background: var(--paper); color: var(--ink); }
    .refs h1 { font-size: 26px; font-weight: 600; margin: 0 0 6px; }
    .refs p { color: var(--muted); margin: 0 0 28px; }
    .refs h2 { font-size: 13px; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); margin: 34px 0 16px; }
    .refs h2 small { margin-left: 10px; font-size: 13px; letter-spacing: 0; text-transform: none; color: var(--faint); }
    .row { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 34px 46px; }
    .cell { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
    .cell code { font: 13px var(--mono); color: var(--muted); }
    .cell small { font-size: 14px; color: var(--muted); margin-top: -6px; }
    .txt { font-size: 22px; line-height: 1.7; max-width: 1100px; }
    .back { position: fixed; top: 18px; right: 24px; font-size: 14px; color: var(--muted); }
  </style>
  <a class="back" href="/">← Accueil</a>
  <h1>Repères des 5 primitives</h1>
  <p>Badges et icônes Font Awesome Duotone 7.3.1 · <b>T</b> : clair / sombre</p>
  <h2>Les 5 primitives · 64 px</h2>
  <div class="row">${o(`primitive`).map(s).join(``)}</div>
  <h2>Assemblages cryptographiques · 64 px<small>construits à partir des primitives</small></h2>
  <div class="row">${o(`assemblage`).map(s).join(``)}</div>
  <h2>Tous les badges · 40 px</h2>
  <div class="row">${a.map(e=>`<span class="prim" data-prim="${e}" data-h="40"></span>`).join(``)}</div>
  <h2>Icônes seules, dans le texte</h2>
  <div class="txt">${a.map(e=>`<span class="prim-ico" data-prim="${e}"></span> ${e}`).join(` · `)}
    · ${Object.keys(i).map(e=>`<span class="prim-ico" data-prim="${e}"></span> ${e}`).join(` · `)}</div>`),r(document.body),addEventListener(`keydown`,e=>{e.key.toLowerCase()===`t`&&t()});