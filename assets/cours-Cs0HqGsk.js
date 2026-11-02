import{a as e,i as t,n,o as r,r as i,s as a,t as o}from"./theme-CbDiJNRV.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./plan-BxhtMa2_.js";import{r as g}from"./primitives-DjZ-A1Ck.js";var _=Object.defineProperty,v=(e,t)=>{let n={};for(var r in e)_(n,r,{get:e[r],enumerable:!0});return t||_(n,Symbol.toStringTag,{value:`Module`}),n},y=`<section class="pl af-eq">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Grandes affaires · les outils de la NSA</div>
        <h2>Equation Group et les Shadow Brokers</h2>
      </div>
    </div>

    <div class="eq-grid">
      <ol class="eq-time">
        <li>
          <span class="eq-y">2015</span>
          Kaspersky décrit l'<b>Equation Group</b>, groupe d'attaquants d'une sophistication
          inédite, attribué à la NSA.
        </li>
        <li>
          <span class="eq-y">2016</span>
          Les <b>Shadow Brokers</b> publient et mettent aux enchères ses outils d'attaque.
        </li>
        <li>
          <span class="eq-y">Exemple</span>
          <b>BENIGNCERTAIN</b> (<span class="mono">bc-genpkt</span>,
          <span class="mono">bc-id</span>) : un paquet IKE forgé fait renvoyer à un pare-feu Cisco
          PIX de la mémoire non initialisée… et ses clés VPN.
        </li>
      </ol>

      <figure class="eq-doc">
        <img class="eq-logo" src="./pixpocket.webp" alt="Logo PIXPOCKET" />
        <img
          class="eq-shot"
          src="./bc-genpkt.webp"
          alt="Analyse de bc-genpkt et bc-id : usage et options des outils"
        />
      </figure>

      <div class="eq-side">
        <img
          src="./kaspersky.webp"
          alt="Kaspersky : Equation Group, questions and answers (février 2015)"
        />
        <img src="./masque.webp" alt="Illustration de l'Equation Group" />
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Les outils de la NSA ? Equation Group (Kaspersky, février 2015), puis les Shadow Brokers (2016)
    publient les outils : BENIGNCERTAIN contre les pare-feu Cisco PIX (analyse de Hector Martin).
  </aside>
</section>
`,b=`<section class="pl af-hist">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Grandes affaires · Historique</div>
        <h2>Rien n'a vraiment changé</h2>
      </div>
    </div>

    <div class="hi-stage">
      <p class="hi-story">
        Le <b>11 août 1996</b>
        <span class="hi-ago">— il y a <span class="hi-ans">30</span> ans —</span>
        <b>aleph_one</b> publie
        <span class="hi-title">« <i>Smashing The Stack For Fun And Profit</i> »</span>
        dans une revue de hackers : <i>Phrack</i> n° 49.
      </p>
      <figure class="hi-who">
        <img src="./elias.webp" alt="Elias Levy, alias aleph_one" />
        <figcaption>Elias Levy · aleph_one</figcaption>
      </figure>

      <img
        class="hi-paper hi-phrack"
        src="./phrack.webp"
        alt="Phrack n° 49, fichier 14 : Smashing The Stack For Fun And Profit, par Aleph One"
      />
      <img
        class="hi-paper hi-code"
        src="./code.webp"
        alt="testsc2.c : un shellcode exécuté en écrasant l'adresse de retour sur la pile"
      />

      <div class="hi-stamp fragment" data-fragment-index="2">
        <span>UaF + dF</span><span>RUST</span>
      </div>
      <p class="hi-stamp-note fragment" data-fragment-index="2">
        <i>use-after-free</i>, <i>double free</i>… y compris en Rust
      </p>

      <div class="hi-retenir fragment" data-fragment-index="1">
        <b>Ce qu'il faut retenir :</b>
        N'importe quel appareil équipé d'un CPU qui fait tourner du code est potentiellement
        vulnérable.
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Fondamentalement, tout ordinateur actuel est sujet aux vulnérabilités de la gestion des mémoires
    (60 % des exploitations de vulnérabilités). Même Rust peut produire des dépassements de mémoire
    dans certaines situations. UaF : use-after-free ; dF : double free.
  </aside>
</section>
`,x=`<section class="pl af-meta">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">
          Grandes affaires · Michael Hayden, ancien directeur de la NSA et de la CIA
        </div>
        <h2 class="mt-q">« We kill people based on metadata »</h2>
      </div>
    </div>

    <div class="mt-top">
      <img
        class="mt-video"
        src="./video.webp"
        alt="NSA Director Michael Hayden : We Kill People Based on Metadata (débat The Price of Privacy, 7 avril 2014)"
      />
      <figure class="mt-fig">
        <img
          src="./figure.webp"
          alt="Identification par trajectoire : trois points échantillonnés suffisent à rattacher une trace à M2 plutôt qu'à M1"
        />
      </figure>
    </div>

    <ul class="mt-pts">
      <li>
        <i class="duo" data-icon="envelope"></i>
        <p>Le chiffrement moderne protège le <b>contenu</b> des messages.</p>
      </li>
      <li>
        <i class="duo" data-icon="share-nodes"></i>
        <p>Les <b>métadonnées</b> restent visibles : qui, à qui, quand, d'où, combien de fois…</p>
      </li>
      <li>
        <i class="duo" data-icon="eye"></i>
        <p>Elles en disent souvent <b>plus que le message</b> lui-même.</p>
      </li>
    </ul>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    La cryptographie moderne permet de ne plus donner accès facilement au contenu des messages. Mais
    est-ce si important ? Les métadonnées sont souvent plus importantes que le contenu du message
    lui-même.
  </aside>
</section>
`,S=`<section class="pl af-nsa">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Grandes affaires · les outils de la NSA</div>
        <h2>Quand la NSA perd ses outils</h2>
      </div>
    </div>

    <div class="ns-grid">
      <!-- Le dépôt GitHub des outils publiés par les Shadow Brokers (avril 2017), simulé -->
      <div class="ns-gh" aria-label="github.com/misterch0c/shadowbroker : liste des exploits">
        <div class="gh-url"><span>🔒</span>github.com/misterch0c/shadowbroker</div>
        <div class="gh-repo">
          <span class="gh-ico">▣</span><b>misterch0c</b> / <b>shadowbroker</b>
          <span class="gh-pub">Public</span>
        </div>
        <div class="gh-path">shadowbroker / windows / <b>exploits</b> · README.md</div>
        <div class="gh-view">
          <ul class="gh-list"></ul>
        </div>
      </div>

      <div class="ns-right">
        <p class="ns-key">
          <i class="duo" data-icon="key"></i>
          <span
            >Les Shadow Brokers fournissent la <b>clé</b> (PGP) de l'archive : les exploits sont
            publics.</span
          >
        </p>
        <div class="ns-term" aria-label="Metasploit : module auxiliary/scanner/smb/smb_ms17_010">
          <div class="tm-bar"><i></i><i></i><i></i><span>msfconsole — 192.168.1.42</span></div>
          <pre class="tm-out"></pre>
        </div>
      </div>
    </div>

    <ol class="ns-chain">
      <li><b>ETERNALBLUE</b><small>exploit SMBv1 · MS17-010</small></li>
      <li><b>WannaCry</b><small>mai 2017</small></li>
      <li><b>NotPetya</b><small>juin 2017</small></li>
    </ol>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Quand la NSA perd ses outils : ETERNALBLUE → WannaCry → NotPetya. À gauche, le dépôt public
    (toujours en ligne) des outils publiés par les Shadow Brokers ; à droite, le module Metasploit
    qui détecte la faille MS17-010 exploitée par ETERNALBLUE.
  </aside>
</section>
`,C=`<section class="pl af-pon">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">
          Clichés et lieux communs · les tartes à la crème du hacking et du chiffrement
        </div>
        <h2>Vrai ou faux ?</h2>
      </div>
    </div>

    <ol class="po-grid">
      <li class="po-card fragment">
        <span class="po-n">Poncif n° 1</span>
        <p class="po-q">Tout système est piratable ?</p>
        <p class="po-a">
          <button type="button" class="po-oui">oui</button> /
          <button type="button" class="po-non">non</button>
        </p>
      </li>
      <li class="po-card fragment">
        <span class="po-n">Poncif n° 2</span>
        <p class="po-q">C'est bon, c'est chiffré !</p>
        <p class="po-a">
          <button type="button" class="po-oui">oui</button> /
          <button type="button" class="po-non">non</button>
        </p>
      </li>
      <li class="po-card fragment">
        <span class="po-n">Poncif n° 3</span>
        <p class="po-q">Nos données sont chiffrées !</p>
        <p class="po-a">
          <button type="button" class="po-oui">oui</button> /
          <button type="button" class="po-non">non</button>
        </p>
      </li>
      <li class="po-card fragment">
        <span class="po-n">Poncif n° 4</span>
        <p class="po-q">AES, c'est pour les naïfs</p>
        <p class="po-a">
          <button type="button" class="po-oui">oui</button> /
          <button type="button" class="po-non">non</button>
        </p>
      </li>
    </ol>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Clichés et lieux communs (stéréotypes) : les tartes à la crème du hacking et du chiffrement. Un
    clic par poncif ; faire voter la salle. À la souris, « oui » ou « non » se marque (vote
    affiché), un second clic l'efface.
  </aside>
</section>
`,w=`<section class="pl af-wc">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Grandes affaires · mai 2017</div>
        <h2>WannaCry</h2>
      </div>
    </div>

    <div class="wc-grid">
      <div class="wc-left">
        <ul class="wc-facts">
          <li><span>Vecteur</span><b>ETERNALBLUE</b></li>
          <li><span>Faille SMBv1</span><b>MS17-010</b></li>
        </ul>
        <div
          class="wc-note"
          role="img"
          aria-label="Ooops, your files have been encrypted! (écran de rançon de WannaCry, reconstitution)"
        >
          <div class="wd">
            <div class="wd-bar"><span>Wana Decrypt0r 2.0</span><i>✕</i></div>
            <div class="wd-body">
              <div class="wd-left">
                <svg class="wd-lock" viewBox="0 0 120 140" aria-hidden="true">
                  <path
                    d="M30 62V42a30 30 0 0 1 60 0v20"
                    fill="none"
                    stroke="#e8e8e8"
                    stroke-width="13"
                  />
                  <rect x="12" y="60" width="96" height="74" rx="8" fill="#f2c94c" />
                  <rect x="12" y="60" width="96" height="74" rx="8" fill="url(#wdg)" />
                  <circle cx="60" cy="90" r="10" fill="#6b4a00" />
                  <rect x="56" y="94" width="8" height="22" rx="3" fill="#6b4a00" />
                  <defs>
                    <linearGradient id="wdg" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stop-color="#fff" stop-opacity=".35" />
                      <stop offset="1" stop-color="#000" stop-opacity=".15" />
                    </linearGradient>
                  </defs>
                </svg>
                <div class="wd-timer">
                  <b>Payment will be raised on</b>
                  <span>5/16/2017 00:47:55</span>
                  <em>Time Left</em>
                  <strong>02:23:57:37</strong>
                </div>
                <div class="wd-timer">
                  <b>Your files will be lost on</b>
                  <span>5/20/2017 00:47:55</span>
                  <em>Time Left</em>
                  <strong>06:23:57:37</strong>
                </div>
                <div class="wd-links">
                  <u>About bitcoin</u><u>How to buy bitcoins?</u><u>Contact Us</u>
                </div>
              </div>
              <div class="wd-right">
                <div class="wd-title">
                  Ooops, your files have been encrypted!<span>English ▾</span>
                </div>
                <div class="wd-text">
                  <h4>What Happened to My Computer?</h4>
                  <p>
                    Your important files are encrypted. Many of your documents, photos, videos,
                    databases and other files are no longer accessible because they have been
                    encrypted.
                  </p>
                  <h4>Can I Recover My Files?</h4>
                  <p>
                    Sure. We guarantee that you can recover all your files safely and easily. But
                    you have not so enough time. You can decrypt some of your files for free. Try
                    now by clicking &lt;Decrypt&gt;.
                  </p>
                  <h4>How Do I Pay?</h4>
                  <p>
                    Payment is accepted in Bitcoin only. Please check the current price of Bitcoin
                    and buy some bitcoins…
                  </p>
                </div>
                <div class="wd-pay">
                  <span class="wd-btc"
                    >₿ <small>bitcoin<br />ACCEPTED HERE</small></span
                  >
                  <div>
                    <small>Send $300 worth of bitcoin to this address:</small>
                    <code>12t9YDPgwueZ9NyMgw519p7AA8isjr6SMw</code>
                  </div>
                </div>
                <div class="wd-btns"><span>Check Payment</span><span>Decrypt</span></div>
              </div>
            </div>
          </div>
        </div>
        <p class="wc-crypto">
          Un modèle cryptographique solide : chaque fichier chiffré en
          <span class="prim" data-prim="aes" data-h="30"></span>, la clé protégée par
          <span class="prim" data-prim="rsa" data-h="30"></span>
        </p>
      </div>

      <figure class="wc-photo">
        <img src="./hopital.webp" alt="Couloir d'hôpital" />
        <figcaption>
          WannaCry responsable du trou de la Sécu au Royaume-Uni
          <small>Le NHS paralysé : coût estimé à 92 M£</small>
        </figcaption>
      </figure>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Le modèle cryptographique utilisé par WannaCry est solide. Cependant, sous certains OS, des
    phénomènes particuliers ont révélé des failles pour le moins surprenantes (cf. suppression
    sécurisée de KVs).
  </aside>
</section>
`,T=`<section class="pl bt">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Assemblage cryptographique</div>
        <h2><img class="bt-logo" src="./bitcoin.svg" alt="" />Bitcoin</h2>
      </div>
    </div>

    <!-- Le réseau pair à pair, la transaction diffusée, la chaîne de blocs -->
    <svg class="bt-net" viewBox="0 0 1600 900" aria-hidden="true">
      <defs>
        <marker
          id="bt-ah"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M0 0L10 5L0 10z" fill="#8fd14f" />
        </marker>
        <g id="bt-doc">
          <rect x="-13" y="-14" width="26" height="28" rx="1.5" />
          <path d="M-7 -6H7M-7 0H7M-7 6H3" />
        </g>
      </defs>
      <g class="bt-edges">
        <path
          d="M295 232L370 295L410 341L463 218L410 341L533 305M278 345L410 341L342 417L299 521M342 417L517 455L463 218M517 455L533 305"
        />
      </g>
      <g class="bt-docs">
        <use href="#bt-doc" x="277" y="201" />
        <use href="#bt-doc" x="497" y="190" />
        <use href="#bt-doc" x="385" y="262" />
        <use href="#bt-doc" x="570" y="288" />
        <use href="#bt-doc" x="262" y="311" />
        <use href="#bt-doc" x="446" y="358" />
        <use href="#bt-doc" x="370" y="441" />
        <use href="#bt-doc" x="265" y="543" />
      </g>
      <g class="bt-nodes">
        <circle cx="295" cy="232" r="9" />
        <circle cx="278" cy="345" r="9" />
        <circle cx="410" cy="341" r="9" />
        <circle cx="463" cy="218" r="9" />
        <circle cx="533" cy="305" r="9" />
        <circle cx="342" cy="417" r="9" />
        <circle cx="299" cy="521" r="9" />
        <circle class="bt-emit" cx="370" cy="295" r="10" />
        <circle class="bt-mine" cx="517" cy="455" r="10" />
      </g>
      <!-- branche concurrente, abandonnée -->
      <g class="bt-fork">
        <rect x="478" y="480" width="26" height="12" rx="2" />
        <rect x="508" y="480" width="26" height="12" rx="2" />
        <rect x="538" y="480" width="26" height="12" rx="2" />
        <rect x="572" y="468" width="22" height="12" rx="2" class="bt-x" />
        <rect x="572" y="490" width="22" height="12" rx="2" class="bt-x" />
        <rect x="598" y="490" width="22" height="12" rx="2" class="bt-x" />
        <rect x="568" y="511" width="26" height="12" rx="2" />
        <rect x="598" y="511" width="26" height="12" rx="2" />
        <rect x="628" y="511" width="26" height="12" rx="2" />
        <path
          d="M534 486H538M564 486L572 474M564 486L572 496M594 496H598M564 486L568 517M594 517H598M624 517H628"
        />
      </g>
      <path class="bt-green" d="M642 112L415 244" marker-end="url(#bt-ah)" />
      <path class="bt-green bt-s2" d="M370 318H618V608H712" marker-end="url(#bt-ah)" />
    </svg>

    <div class="bt-tx">
      <span class="bt-who"
        ><i class="duo" data-icon="user-tie-hair-long" data-tight></i><small>1HpKwpfm…</small></span
      >
      <span class="bt-ticket"
        ><span
          ><i class="duo" data-icon="user-tie-hair-long" data-tight></i> →
          <i class="duo" data-icon="user-tie-hair" data-tight></i></span
        ><b>10 BTC</b></span
      >
      <span class="bt-swap">⟷</span>
      <span class="bt-ticket bt-mono"
        ><span>1HpKwpfm…<br />→<br />1bz6tzsP…</span><b>10 BTC</b></span
      >
      <span class="bt-who"
        ><i class="duo" data-icon="user-tie-hair" data-tight></i><small>1bz6tzsP…</small></span
      >
    </div>

    <ol class="bt-chain">
      <li>
        <b>Bloc 46</b>Transaction 92<br />Transaction 93<br />Transaction 94<br />Transaction 95
      </li>
      <li><b>Bloc 47</b>Transaction 96<br />Transaction 97<br />Transaction 98</li>
      <li><b>Bloc 48</b>Transaction 99<br />Transaction 100<br />Transaction 101</li>
      <li class="bt-new">
        <b>Bloc 49</b>Transaction 102<br />Transaction 103<br />Transaction 104<br />Transaction 105
      </li>
    </ol>

    <img class="bt-ava" src="./ava-code.webp" alt="Ex Machina : Ava" />

    <ul class="bt-props">
      <li>preuve de possession · imputabilité</li>
      <li>anonymat · pseudonymat</li>
      <li>traçabilité · intégrité · non-répudiation</li>
      <li>disponibilité · accessibilité</li>
      <li>évolutivité · adaptabilité · scalability</li>
      <li>autonomie et pérennité de fonctionnement</li>
      <li class="bt-g">consensus décentralisé et automatisé</li>
      <li class="bt-g">unicité de la dépense (anti double spending)</li>
    </ul>

    <span class="fragment bt-tick" data-fragment-index="1"></span>
    <span class="fragment bt-tick" data-fragment-index="2"></span>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Bitcoin fonctionne sans intervention humaine depuis 2009. Savez-vous comment ? Clic 1 : les
    propriétés « classiques » d'un système de paiement, toutes assurées par des primitives connues
    (signature ECDSA, hachage SHA-256). Clic 2 : ce qui est nouveau, le consensus décentralisé
    (preuve de travail) et l'unicité de la dépense : la transaction entre dans le bloc 49.
  </aside>
</section>
`,E=`<section class="pl bs">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Assemblage cryptographique · Bitcoin</div>
        <h2>Bitcoin : hachages et signature</h2>
      </div>
      <span class="bs-badges"
        ><span class="prim" data-prim="sha" data-label="SHA256" data-h="44"></span
        ><span class="prim" data-prim="rsa-priv" data-label="ECDSA" data-h="44"></span
      ></span>
    </div>

    <div class="fig bs-fig">
      <img
        src="./blocs-merkle.webp"
        alt="Blocs chaînés par Prev_Hash, arbre de Merkle des transactions, structure d'une transaction"
      />
    </div>

    <div class="bs-right">
      <div class="fig bs-sat">
        <img src="./satoshi.webp" alt="Chaîne de transactions (Satoshi Nakamoto, 2008)" />
      </div>
      <p class="bs-txt">
        La <b>clé privée de l'expéditeur</b> signe l'empreinte SHA-256 de toute la transaction :
        entrées, sorties et montants.
      </p>
      <div class="bs-home fragment">
        <span class="bs-at">@home</span>
        <span class="prim" data-prim="rsa-priv" data-label="ECDSA" data-h="36"></span>
        <div class="bs-sig mono">ECDSA(H256(Tx<sub>2</sub> I/O Field))</div>
        <span class="prim-ico bs-alice" data-prim="alice"></span>
      </div>
      <div class="bs-tx fragment">
        <div class="bs-txn">T<sub>x2</sub></div>
        <p><i class="duo bs-kg" data-icon="key" data-tight></i>clé publique d'Alice possède 2 ₿</p>
        <p><i class="duo bs-ky" data-icon="key" data-tight></i>clé publique de Bob reçoit 1 ₿</p>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Un Tx (ou transaction) en Bitcoin est une opération dans laquelle une ou plusieurs entrées de
    Bitcoin sont utilisées pour créer une ou plusieurs sorties de Bitcoin. Les entrées sont des
    sorties de transactions antérieures envoyées à l'adresse Bitcoin du destinataire et maintenant
    disponibles pour être dépensées. Les sorties sont des montants envoyés à une adresse Bitcoin.
    Hachages partout : Prev_Hash chaîne les blocs, l'arbre de Merkle résume les transactions
    (Tx_Root), l'adresse est un double hachage de la clé publique. La clé privée de l'expéditeur
    signe (ECDSA) le SHA-256 de toute la transaction.
  </aside>
</section>
`,D=`<section class="pl ct">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Assemblage cryptographique</div>
        <h2>Certificat électronique</h2>
      </div>
      <span class="prim" data-prim="cert" data-h="58"></span>
    </div>

    <div class="ct-left">
      <ul class="ct-lead">
        <li>Ce n'est pas une primitive cryptographique</li>
        <li>C'est un <b>assemblage</b></li>
        <li>C'est un fichier comme un autre</li>
      </ul>
      <ol class="ct-steps">
        <li data-on="1"><b>identité</b><small>qui ?</small></li>
        <li data-on="2"><b>clé publique</b><small>du titulaire</small></li>
        <li data-on="3">
          <b>signature de l'identité par un tiers</b><small>l'autorité de certification</small>
        </li>
      </ol>
    </div>

    <div class="ct-stage">
      <!-- Fils tracés par slide.js d'après la position réelle des éléments (aucun croisement) -->
      <svg class="ct-wires" aria-hidden="true">
        <defs>
          <marker
            id="ct-ah-sha"
            viewBox="0 0 12 12"
            refX="10"
            refY="6"
            markerWidth="12"
            markerHeight="12"
            markerUnits="userSpaceOnUse"
            orient="auto"
          >
            <path d="M2 2L10 6L2 10" class="ct-ah ct-ah-sha" />
          </marker>
          <marker
            id="ct-ah-rsa"
            viewBox="0 0 12 12"
            refX="10"
            refY="6"
            markerWidth="12"
            markerHeight="12"
            markerUnits="userSpaceOnUse"
            orient="auto"
          >
            <path d="M2 2L10 6L2 10" class="ct-ah ct-ah-rsa" />
          </marker>
          <marker
            id="ct-ah-mut"
            viewBox="0 0 12 12"
            refX="10"
            refY="6"
            markerWidth="12"
            markerHeight="12"
            markerUnits="userSpaceOnUse"
            orient="auto"
          >
            <path d="M2 2L10 6L2 10" class="ct-ah ct-ah-mut" />
          </marker>
        </defs>
      </svg>

      <!-- Le certificat : un fichier, trois champs -->
      <div class="ct-card" data-s="0">
        <i class="duo ct-seal" data-icon="file-certificate" data-tight></i>
        <span class="prim ct-cert" data-prim="cert" data-h="44" data-s="5"></span>
        <div class="ct-slot ct-id" data-s="1">
          <small>Sujet</small>
          <pre class="ct-val" id="ct-ident">
{intervenant}
Stelau
valide 3 ans</pre>
        </div>
        <div class="ct-slot ct-pk" data-s="2">
          <small>Clé publique <i class="duo ct-k ct-kpub" data-icon="key" data-tight></i></small>
          <pre class="ct-val mono" id="ct-pk">…</pre>
        </div>
        <div class="ct-slot ct-sig" data-s="4">
          <small
            >Signature de l'AC <i class="duo ct-k ct-kac" data-icon="file-signature" data-tight></i
          ></small>
          <pre class="ct-val mono" id="ct-sig">…</pre>
        </div>
        <div class="ct-caption" data-s="5">identité + clé publique + signature d'un tiers</div>
      </div>

      <!-- Empreinte SHA-256 de (identité + clé publique) -->
      <span class="prim ct-sha" data-prim="sha" data-label="SHA256" data-h="40" data-s="3"></span>
      <div class="ct-hashbox" data-s="3">
        <small>Empreinte · id ‖ clé</small>
        <pre class="ct-hash mono" id="ct-hash">…</pre>
      </div>
      <!-- L'autorité signe l'empreinte avec SA clé privée -->
      <span class="prim ct-rsa" data-prim="rsa-priv" data-h="40" data-s="4"></span>
      <small class="ct-rsacap" data-s="4">clé privée de l'AC</small>

      <!-- Le titulaire et sa bi-clé -->
      <div class="ct-actor ct-owner" data-s="1">
        <span class="prim-ico" data-prim="bob"></span>
        <div><b>Titulaire</b><small>génère sa bi-clé</small></div>
        <span class="ct-keys" data-s="2"
          ><i class="duo ct-kpub" data-icon="key" data-tight></i
          ><i class="duo ct-kpriv" data-icon="key" data-tight></i
        ></span>
      </div>
      <!-- Vérification de l'identité, en face à face -->
      <div class="ct-actor ct-check" data-s="4">
        <i class="duo ct-meet" data-icon="users" data-tight></i>
        <i class="duo ct-card-id" data-icon="id-card" data-tight></i>
        <div><b>Vérification</b><small>pièce d'identité, face à face</small></div>
      </div>
      <!-- L'autorité de certification signe -->
      <div class="ct-actor ct-ac" data-s="4">
        <span class="prim-ico" data-prim="alice"></span>
        <div><b>Autorité de certification</b><small>le tiers de confiance</small></div>
        <span class="ct-keys"
          ><i class="duo ct-kacpub" data-icon="key" data-tight></i
          ><i class="duo ct-kacpriv" data-icon="key" data-tight></i
        ></span>
      </div>
    </div>

    <span class="fragment ct-tick" data-fragment-index="1"></span>
    <span class="fragment ct-tick" data-fragment-index="2"></span>
    <span class="fragment ct-tick" data-fragment-index="3"></span>
    <span class="fragment ct-tick" data-fragment-index="4"></span>
    <span class="fragment ct-tick" data-fragment-index="5"></span>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Un certificat n'est pas une primitive : c'est un assemblage, un fichier comme un autre (X.509).
    Clic 1 : l'identité du titulaire. Clic 2 : sa clé publique (il garde la clé privée). Clic 3 :
    empreinte SHA-256 de l'identité et de la clé. Clic 4 : l'autorité de certification vérifie
    l'identité en face à face puis signe l'empreinte avec SA clé privée (RSA). Clic 5 : le
    certificat est assemblé. Valeurs réelles : clé RSA-2048 générée dans le navigateur, empreinte et
    signature calculées à l'affichage.
  </aside>
</section>
`,O=`<section class="pl cv">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Assemblage cryptographique · 2D-DOC</div>
        <h2>CEV : Cachet Électronique Visible</h2>
      </div>
      <img class="cv-titres" src="./titres.webp" alt="Titres et justificatifs portant un 2D-DOC" />
    </div>

    <svg class="cv-wires" viewBox="0 0 1600 900" aria-hidden="true">
      <defs>
        <marker
          id="cv-ah"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0 0L10 5L0 10z" class="cv-ahp" />
        </marker>
      </defs>
      <path data-s="1" d="M1148 318 H880 V392 H772" marker-end="url(#cv-ah)" />
      <path data-s="1" d="M656 392 H618" marker-end="url(#cv-ah)" />
      <path data-s="2" d="M468 405 H368" marker-end="url(#cv-ah)" />
      <path data-s="3" d="M157 444 V552" marker-end="url(#cv-ah)" />
      <path data-s="3" d="M345 700 H560" marker-end="url(#cv-ah)" />
      <path data-s="4" d="M1258 404 V560 H1405 V676" class="cv-dash" marker-end="url(#cv-ah)" />
    </svg>

    <!-- L'émetteur signe -->
    <div class="cv-box cv-edf">
      <span class="cv-at">@EDF</span>
      <span class="prim" data-prim="rsa" data-h="40"></span>
      <small>clé privée d'EDF : signe<br />clé publique : publiée</small>
    </div>
    <img class="cv-dm" src="./2d-doc.webp" alt="Code 2D-DOC" />
    <pre class="cv-val cv-sig mono" data-s="2" id="cv-sig">…</pre>
    <i class="duo cv-kpriv" data-icon="key" data-tight data-s="2"></i>
    <pre class="cv-val cv-hash mono" data-s="1" id="cv-hash">…</pre>
    <span class="prim cv-sha" data-prim="sha" data-h="40" data-s="1"></span>

    <!-- Le justificatif imprimé -->
    <div class="fig cv-att">
      <img src="./attestation.webp" alt="Attestation titulaire de contrat EDF" />
    </div>
    <address class="cv-addr" id="cv-addr">
      <b>LEGER BENOIT</b><span>2 rue d'Ici</span><span>1<sup>er</sup> Étage</span
      ><span>75001 PARIS</span>
    </address>
    <img
      class="cv-doc"
      src="./doc.webp"
      alt="Le justificatif imprimé, avec son 2D-DOC"
      data-s="3"
    />

    <!-- Vérification, chez soi -->
    <div class="cv-box cv-home" data-s="3">
      <span class="cv-at">@home</span>
      <pre class="cv-val cv-sig2 mono" id="cv-sig2">…</pre>
      <i class="cv-arr">→</i>
      <span class="cv-ver"
        ><i class="duo cv-kpub" data-icon="key" data-tight></i
        ><span class="prim" data-prim="rsa-pub" data-h="34"></span
      ></span>
      <i class="cv-arr">→</i>
      <pre class="cv-val cv-h1 mono" id="cv-h1">…</pre>
      <span class="cv-eq" data-s="4">=</span>
      <pre class="cv-val cv-h2 mono" id="cv-h2" data-s="4">…</pre>
      <span class="cv-arr cv-l" data-s="4"
        >←<span class="prim" data-prim="sha" data-h="28"></span>← données lues</span
      >
      <span class="prim-ico cv-who" data-prim="alice"></span>
      <div class="cv-ok" data-s="4" id="cv-ok">signature vérifiée</div>
    </div>

    <span class="fragment cv-tick" data-fragment-index="1"></span>
    <span class="fragment cv-tick" data-fragment-index="2"></span>
    <span class="fragment cv-tick" data-fragment-index="3"></span>
    <span class="fragment cv-tick" data-fragment-index="4"></span>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Le Cachet Électronique Visible (2D-DOC) : clic 1, EDF calcule l'empreinte SHA-256 des données
    imprimées (nom, adresse). Clic 2, EDF la signe avec sa clé privée ; la signature va dans le code
    2D-DOC. Clic 3, le justificatif imprimé circule ; chez soi (ou au guichet), on lit le 2D-DOC et
    on vérifie la signature avec la clé publique d'EDF. Clic 4, on recalcule l'empreinte des données
    lues : égalité, le justificatif est authentique et intègre. Valeurs réelles (WebCrypto,
    RSA-2048) ; le 2D-DOC réel de l'ANTS signe en ECDSA, le principe est identique. Adresse fictive.
  </aside>
</section>
`,k=`<section class="pl exm">
  <div class="wrap">
    <img class="exm-banner" src="./ex-machina.webp" alt="Ex Machina (Alex Garland, 2014) : Ava" />
    <img class="exm-ava" src="./ava.webp" alt="Ava, en robe blanche" />
    <p class="exm-q">Bitcoin as Frankenstein creature ?</p>
    <p class="exm-sub">
      Une créature assemblée de pièces connues :
      <span class="prim" data-prim="sha" data-h="30"></span>
      <span class="prim" data-prim="rsa" data-label="ECDSA" data-h="30"></span>
      <span class="prim" data-prim="prng" data-h="30"></span>… qui vit seule depuis 2009.
    </p>
    <div class="foot"></div>
  </div>
  <aside class="notes">Avez-vous vu ce film ? Savez-vous comment fonctionne Bitcoin ?</aside>
</section>
`,A=`<section class="pl pp pp-full">
  <div class="wrap">
    <h2 class="pp-title">Passeport électronique : un assemblage riche et complexe</h2>
    <svg class="pp-defs" aria-hidden="true">
      <defs>
        <marker
          id="pp-ah"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0 0L10 5L0 10z" />
        </marker>
      </defs>
    </svg>
    <div class="pp-g pp-frame">
      <span class="pp-a pp-oaci" style="left: 26px; top: 14px">OACI</span>
      <img
        class="pp-a pp-pass"
        src="./passeport.svg"
        alt=""
        style="left: 34px; top: 78px; width: 62px"
      />
      <span class="pp-a pp-vert" style="left: 102px; top: 66px">Passeport</span>
      <img
        class="pp-a pp-panel"
        src="./filigrane.svg"
        alt=""
        style="left: 192px; top: 20px; width: 720px"
      />
      <div class="pp-a pp-bar" style="left: 192px; top: 170px; width: 720px"></div>
      <div class="pp-a pp-bar" style="left: 192px; top: 532px; width: 720px"></div>
      <span class="pp-a pp-pace" style="left: 203px; top: 62px">PACE</span>
      <span class="pp-a pp-band" style="left: 232px; top: 184px">Passive Authentication</span>
      <span class="pp-a pp-band" style="left: 230px; top: 366px">Active Authentication</span>
      <span class="pp-a pp-band" style="left: 226px; top: 548px">Chip Authentication</span>
      <span class="pp-a pp-band" style="left: 222px; top: 694px">Terminal Authentication</span>
      <div class="pp-a pp-sep"></div>
    </div>
    <div class="pp-g">
      <pre class="pp-a pp-box mono pp-mrz" style="left: 300px; top: 14px">
P&lt;NLDDE&lt;BRUIJN&lt;&lt;WILLEKE&lt;LISELOTTE&lt;&lt;&lt;&lt;
I20142ND6503101F2403096990&lt;&lt;&lt;&lt;&lt;84</pre>
      <span class="prim pp-a" data-prim="sha" data-h="30" style="left: 268px; top: 36px"></span>
      <span class="prim pp-a" data-prim="prng" data-h="30" style="left: 286px; top: 98px"></span>
      <span class="pp-a pp-agp" style="left: 374px; top: 68px"
        ><b class="o">a</b>, <b class="b">g</b>, <b class="b">p</b></span
      >
      <span class="prim pp-a" data-prim="dh" data-h="30" style="left: 392px; top: 112px"></span>
      <span class="pp-a pp-bigk" style="left: 506px; top: 96px">K</span>
      <span class="prim pp-a" data-prim="aes" data-h="30" style="left: 562px; top: 106px"></span>
      <img
        class="pp-a pp-puce"
        src="./puce.svg"
        alt=""
        style="left: 808px; top: 40px; width: 62px"
      />
      <span class="pp-a pp-nfc" style="left: 876px; top: 46px">)))</span>
      <img class="pp-a" src="./nfc.svg" alt="" style="left: 962px; top: 8px; width: 46px" />
      <pre class="pp-a pp-box mono pp-mrz" style="left: 1018px; top: 6px">
P&lt;NLDDE&lt;BRUIJN&lt;&lt;WILLEKE&lt;LISELOTTE&lt;&lt;&lt;&lt;
SPECI20142ND6503101F2403096990&lt;&lt;&lt;&lt;&lt;84</pre>
      <span class="prim pp-a" data-prim="sha" data-h="30" style="left: 1222px; top: 34px"></span>
      <span class="prim pp-a" data-prim="prng" data-h="30" style="left: 1000px; top: 62px"></span>
      <span class="pp-a pp-agp" style="left: 1102px; top: 58px"
        ><b class="o">b</b>, <b class="b">g</b>, <b class="b">p</b></span
      >
      <span class="prim pp-a" data-prim="aes" data-h="30" style="left: 950px; top: 122px"></span>
      <span class="pp-a pp-bigk" style="left: 1046px; top: 116px">K</span>
      <span class="prim pp-a" data-prim="dh" data-h="30" style="left: 1094px; top: 124px"></span>
      <img class="pp-a" src="./officier.svg" alt="" style="left: 1258px; top: 76px; width: 62px" />
      <svg class="pp-wires" viewBox="0 0 1600 900" aria-hidden="true">
        <path d="M670 127 L940 127" marker-end="url(#pp-ah)" />
        <path d="M940 127 L672 127" marker-end="url(#pp-ah)" />
      </svg>
    </div>
    <div class="pp-g">
      <pre class="pp-a pp-box mono pp-id" style="left: 213px; top: 228px">
Benoit
LEGER-DERVILLE
29-02-77
à BourgLaVille</pre>
      <span class="prim-ico pp-a pp-bob" data-prim="bob" style="left: 372px; top: 236px"></span>
      <span class="pp-a pp-sod" style="left: 490px; top: 230px">SO<sub>D</sub></span>
      <img
        class="pp-a pp-sigi"
        src="./signature.svg"
        alt=""
        style="left: 494px; top: 280px; width: 52px"
      />
      <pre class="pp-a pp-box mono" style="left: 550px; top: 232px">
r9zNN1c/
+Bstc6nhaL
Ufe0wCkbNF
wJq2I1husn
Ik</pre>
      <span class="prim pp-a" data-prim="cert" data-h="30" style="left: 752px; top: 258px"></span>
      <span class="pp-a pp-fr" style="left: 762px; top: 306px">France</span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 822px; top: 266px; width: 34px; height: 34px; color: #00b0f0"
      ></i>
      <img
        class="pp-a pp-sigi"
        src="./signature.svg"
        alt=""
        style="left: 988px; top: 268px; width: 52px"
      />
      <pre class="pp-a pp-box mono" style="left: 1040px; top: 220px">
r9zNN1c/
+Bstc6nhaL
Ufe0wCkbNF
wJq2I1husn
Ik</pre>
      <img class="pp-a" src="./officier.svg" alt="" style="left: 1186px; top: 200px; width: 62px" />
      <span class="prim pp-a" data-prim="cert" data-h="30" style="left: 1262px; top: 212px"></span>
      <span class="prim pp-a" data-prim="rsa" data-h="30" style="left: 1182px; top: 278px"></span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1140px; top: 300px; width: 34px; height: 34px; color: #00b0f0"
      ></i>
      <svg class="pp-wires" viewBox="0 0 1600 900" aria-hidden="true">
        <path d="M682 242 L1030 242" marker-end="url(#pp-ah)" />
      </svg>
      <span class="pp-a pp-pays" style="left: 1370px; top: 18px">PAYS<br />SIGNATAIRE</span>
      <span class="prim pp-a" data-prim="rsa" data-h="30" style="left: 1494px; top: 86px"></span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1376px; top: 92px; width: 34px; height: 34px; color: #00b0f0"
      ></i>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1430px; top: 92px; width: 34px; height: 34px; color: #7030a0"
      ></i>
      <div class="pp-a pp-dash" style="top: 146px"></div>
      <span class="prim pp-a" data-prim="cert" data-h="30" style="left: 1420px; top: 180px"></span>
      <span class="pp-a pp-fr" style="left: 1424px; top: 232px">France</span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1520px; top: 186px; width: 34px; height: 34px; color: #00b0f0"
      ></i>
      <div class="pp-a pp-dash" style="top: 284px"></div>
      <pre class="pp-a pp-box mono pp-id" style="left: 1368px; top: 332px">
Benoit
LEGER-DERVILLE
29-02-77
à BourgLaVille</pre>
      <span class="prim-ico pp-a pp-bob" data-prim="bob" style="left: 1528px; top: 340px"></span>
      <span class="prim pp-a" data-prim="sha" data-h="30" style="left: 1394px; top: 440px"></span>
      <pre class="pp-a pp-box mono pp-h" style="left: 1458px; top: 452px">
b6e296cc4
8838ebb9d
f74aba8db
a8126b197
0267</pre>
      <span class="prim pp-a" data-prim="rsa" data-h="30" style="left: 1376px; top: 540px"></span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1358px; top: 580px; width: 30px; height: 30px; color: #7030a0"
      ></i>
      <img
        class="pp-a pp-sigi"
        src="./signature.svg"
        alt=""
        style="left: 1384px; top: 620px; width: 50px"
      />
      <pre class="pp-a pp-box mono" style="left: 1446px; top: 560px">
r9zNN1c/
+Bstc6nhaL
Ufe0wCkbNF
wJq2I1husn
Ik</pre>
      <span class="pp-a pp-sod" style="left: 1490px; top: 662px">SO<sub>D</sub></span>
      <span class="pp-a pp-sodt" style="left: 1446px; top: 708px"
        >Security<br />Object<br />document</span
      >
    </div>
    <div class="pp-g">
      <pre class="pp-a pp-box mono" style="left: 333px; top: 410px">GTFFYSHJSU</pre>
      <span class="prim pp-a" data-prim="sha" data-h="30" style="left: 270px; top: 446px"></span>
      <pre class="pp-a pp-box mono pp-h" style="left: 348px; top: 460px">
b6e296cc4
8838ebb9d
f7</pre>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 488px; top: 496px; width: 30px; height: 30px; color: #c00000"
      ></i>
      <span class="prim pp-a" data-prim="rsa" data-h="30" style="left: 456px; top: 464px"></span>
      <img
        class="pp-a pp-sigi"
        src="./signature.svg"
        alt=""
        style="left: 532px; top: 455px; width: 52px"
      />
      <pre class="pp-a pp-box mono" style="left: 586px; top: 458px">
stc6nhaLUf
r9zNN1c/+B</pre>
      <pre class="pp-a pp-box mono" style="left: 990px; top: 406px">GTFFYSHJSU</pre>
      <span class="prim pp-a" data-prim="prng" data-h="30" style="left: 1090px; top: 398px"></span>
      <img class="pp-a" src="./officier.svg" alt="" style="left: 1200px; top: 404px; width: 62px" />
      <img
        class="pp-a pp-sigi"
        src="./signature.svg"
        alt=""
        style="left: 994px; top: 465px; width: 52px"
      />
      <pre class="pp-a pp-box mono" style="left: 1046px; top: 464px">
r9zNN1c/
+Bstc6nhaL
Uf</pre>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1150px; top: 488px; width: 34px; height: 34px; color: #00b050"
      ></i>
      <span class="prim pp-a" data-prim="rsa" data-h="30" style="left: 1190px; top: 486px"></span>
      <svg class="pp-wires" viewBox="0 0 1600 900" aria-hidden="true">
        <path d="M985 428 L452 428" marker-end="url(#pp-ah)" />
        <path d="M724 480 L984 480" marker-end="url(#pp-ah)" />
      </svg>
    </div>
    <div class="pp-g">
      <img
        class="pp-a"
        src="./puce-violette.svg"
        alt=""
        style="left: 276px; top: 612px; width: 46px"
      />
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 326px; top: 646px; width: 30px; height: 30px; color: #b98ce6"
      ></i>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 352px; top: 638px; width: 30px; height: 30px; color: #7030a0"
      ></i>
      <span class="prim pp-a" data-prim="dh" data-h="30" style="left: 408px; top: 618px"></span>
      <span class="pp-a pp-kca" style="left: 512px; top: 610px">K<sub>CA</sub></span>
      <span class="prim pp-a" data-prim="aes" data-h="30" style="left: 596px; top: 594px"></span>
      <span class="prim pp-a" data-prim="aes" data-h="30" style="left: 984px; top: 578px"></span>
      <span class="pp-a pp-kca" style="left: 1010px; top: 614px">K<sub>CA</sub></span>
      <span class="prim pp-a" data-prim="dh" data-h="30" style="left: 1076px; top: 620px"></span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1142px; top: 580px; width: 30px; height: 30px; color: #7fc6c6"
      ></i>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1168px; top: 574px; width: 30px; height: 30px; color: #009999"
      ></i>
      <img class="pp-a" src="./officier.svg" alt="" style="left: 1202px; top: 552px; width: 62px" />
      <svg class="pp-wires" viewBox="0 0 1600 900" aria-hidden="true">
        <path d="M690 607 L960 607" marker-end="url(#pp-ah)" />
        <path d="M960 607 L692 607" marker-end="url(#pp-ah)" />
      </svg>
    </div>
    <div class="pp-g">
      <pre class="pp-a pp-box mono" style="left: 333px; top: 734px">OKN0NCE009</pre>
      <span class="prim pp-a" data-prim="prng" data-h="30" style="left: 264px; top: 758px"></span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 384px; top: 818px; width: 34px; height: 34px; color: #ffc000"
      ></i
      ><span class="pp-a pp-k" style="left: 412px; top: 806px; color: #ffc000">K<sub>P</sub></span>
      <span class="prim pp-a" data-prim="rsa" data-h="30" style="left: 462px; top: 790px"></span>
      <img
        class="pp-a pp-sigi"
        src="./signature.svg"
        alt=""
        style="left: 532px; top: 778px; width: 52px"
      />
      <pre class="pp-a pp-box mono" style="left: 586px; top: 778px">
Ufm/
+A56/+Bstc
6nhako</pre>
      <pre class="pp-a pp-box mono" style="left: 990px; top: 726px">OKN0NCE009</pre>
      <span class="prim pp-a" data-prim="sha" data-h="30" style="left: 1096px; top: 728px"></span>
      <img class="pp-a" src="./officier.svg" alt="" style="left: 1206px; top: 726px; width: 62px" />
      <img
        class="pp-a pp-sigi"
        src="./signature.svg"
        alt=""
        style="left: 962px; top: 790px; width: 52px"
      />
      <pre class="pp-a pp-box mono" style="left: 1016px; top: 790px">
r9zNN1c/
+Bstc6nhaL
Uf</pre>
      <span class="prim pp-a" data-prim="rsa" data-h="30" style="left: 1146px; top: 806px"></span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1108px; top: 836px; width: 30px; height: 30px; color: #009999"
      ></i
      ><span class="pp-a pp-k" style="left: 1132px; top: 824px; color: #009999">K<sub>S</sub></span>
      <svg class="pp-wires" viewBox="0 0 1600 900" aria-hidden="true">
        <path d="M448 752 L980 752" marker-end="url(#pp-ah)" />
        <path d="M1010 812 L726 812" marker-end="url(#pp-ah)" />
      </svg>
    </div>
    <div class="pp-g">
      <span class="pp-a pp-hand" style="left: 18px; top: 690px"
        >Assemblage<br />riche et<br />complexe<br />mais sans<br />surprise !</span
      >
    </div>
    <div class="foot"></div>
  </div>
  <aside class="notes">
    Passeport électronique (OACI, doc 9303) : un assemblage riche et complexe… mais sans surprise,
    toutes les primitives du cours. Clic 1, PACE : la MRZ lue optiquement (hachée) sert de mot de
    passe ; Diffie-Hellman avec aléas → clé de session K, puis messagerie sécurisée AES. Clic 2,
    Passive Authentication : le pays signataire a signé (RSA, clé K_S) les empreintes des données
    (SO_D) ; le terminal vérifie avec la clé publique K_P du certificat du pays. Clic 3, Active
    Authentication : la puce signe un défi aléatoire du terminal avec sa clé privée (anti-clonage).
    Clic 4, Chip Authentication : DH avec la clé statique de la puce → nouvelle clé K_CA. Clic 5,
    Terminal Authentication : le terminal prouve ses droits (certificat) en signant l'aléa de la
    puce, avant l'accès aux empreintes digitales. Clic 6 : rien de nouveau, que des primitives
    connues.
  </aside>
</section>
`,j=`<section class="pl pp pp-simple">
  <div class="wrap">
    <h2 class="pp-title">Passeport électronique : Passive Authentication</h2>
    <svg class="pp-defs" aria-hidden="true">
      <defs>
        <marker
          id="pp-ah"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0 0L10 5L0 10z" />
        </marker>
      </defs>
    </svg>
    <div class="pp-g pp-frame">
      <span class="pp-a pp-oaci" style="left: 26px; top: 14px">OACI</span>
      <img
        class="pp-a pp-pass"
        src="./passeport.svg"
        alt=""
        style="left: 34px; top: 78px; width: 62px"
      />
      <span class="pp-a pp-vert" style="left: 102px; top: 66px">Passeport</span>
      <img
        class="pp-a pp-panel"
        src="./filigrane.svg"
        alt=""
        style="left: 192px; top: 20px; width: 720px"
      />
      <div class="pp-a pp-bar" style="left: 192px; top: 170px; width: 720px"></div>
      <div class="pp-a pp-bar" style="left: 192px; top: 532px; width: 720px"></div>
      <span class="pp-a pp-pace" style="left: 203px; top: 62px">PACE</span>
      <span class="pp-a pp-band" style="left: 232px; top: 184px">Passive Authentication</span>
      <span class="pp-a pp-band" style="left: 230px; top: 366px">Active Authentication</span>
      <span class="pp-a pp-band" style="left: 226px; top: 548px">Chip Authentication</span>
      <span class="pp-a pp-band" style="left: 222px; top: 694px">Terminal Authentication</span>
      <div class="pp-a pp-sep"></div>
      <span class="pp-a pp-pays" style="left: 1370px; top: 18px">PAYS<br />SIGNATAIRE</span>
      <span class="prim pp-a" data-prim="rsa" data-h="30" style="left: 1494px; top: 86px"></span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1376px; top: 92px; width: 34px; height: 34px; color: #00b0f0"
      ></i
      ><span class="pp-a pp-k" style="left: 1404px; top: 80px; color: #00b0f0">K<sub>P</sub></span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1430px; top: 92px; width: 34px; height: 34px; color: #7030a0"
      ></i
      ><span class="pp-a pp-k" style="left: 1458px; top: 80px; color: #7030a0">K<sub>S</sub></span>
      <div class="pp-a pp-dash" style="top: 146px"></div>
      <span class="prim pp-a" data-prim="cert" data-h="30" style="left: 1420px; top: 180px"></span>
      <span class="pp-a pp-fr" style="left: 1424px; top: 232px">France</span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1520px; top: 186px; width: 34px; height: 34px; color: #00b0f0"
      ></i
      ><span class="pp-a pp-k" style="left: 1548px; top: 174px; color: #00b0f0">K<sub>P</sub></span>
      <div class="pp-a pp-dash" style="top: 284px"></div>
    </div>
    <div class="pp-g fragment" data-fragment-index="1">
      <pre class="pp-a pp-box mono pp-id" style="left: 1368px; top: 332px">
Benoit
LEGER-DERVILLE
29-02-77
à BourgLaVille</pre>
      <span class="prim-ico pp-a pp-bob" data-prim="bob" style="left: 1528px; top: 340px"></span>
      <span class="prim pp-a" data-prim="sha" data-h="30" style="left: 1394px; top: 440px"></span>
      <pre class="pp-a pp-box mono pp-h" style="left: 1458px; top: 452px">
b6e296cc4
8838ebb9d
f74aba8db
a8126b197
0267</pre>
      <span class="prim pp-a" data-prim="rsa" data-h="30" style="left: 1376px; top: 540px"></span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1358px; top: 580px; width: 30px; height: 30px; color: #7030a0"
      ></i
      ><span class="pp-a pp-k" style="left: 1382px; top: 568px; color: #7030a0">K<sub>S</sub></span>
      <img
        class="pp-a pp-sigi"
        src="./signature.svg"
        alt=""
        style="left: 1384px; top: 620px; width: 50px"
      />
      <pre class="pp-a pp-box mono" style="left: 1446px; top: 560px">
r9zNN1c/
+Bstc6nhaL
Ufe0wCkbNF
wJq2I1husn
Ik</pre>
      <span class="pp-a pp-sod" style="left: 1490px; top: 662px">SO<sub>D</sub></span>
      <span class="pp-a pp-sodt" style="left: 1446px; top: 708px"
        >Security<br />Object<br />document</span
      >
    </div>
    <div class="pp-g fragment" data-fragment-index="2">
      <pre class="pp-a pp-box mono pp-id" style="left: 213px; top: 228px">
Benoit
LEGER-DERVILLE
29-02-77
à BourgLaVille</pre>
      <span class="prim-ico pp-a pp-bob" data-prim="bob" style="left: 372px; top: 236px"></span>
      <span class="pp-a pp-sod" style="left: 490px; top: 230px">SO<sub>D</sub></span>
      <img
        class="pp-a pp-sigi"
        src="./signature.svg"
        alt=""
        style="left: 494px; top: 280px; width: 52px"
      />
      <pre class="pp-a pp-box mono" style="left: 550px; top: 232px">
r9zNN1c/
+Bstc6nhaL
Ufe0wCkbNF
wJq2I1husn
Ik</pre>
      <span class="prim pp-a" data-prim="cert" data-h="30" style="left: 752px; top: 258px"></span>
      <span class="pp-a pp-fr" style="left: 762px; top: 306px">France</span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 822px; top: 266px; width: 34px; height: 34px; color: #00b0f0"
      ></i>
    </div>
    <div class="pp-g fragment" data-fragment-index="3">
      <img
        class="pp-a pp-sigi"
        src="./signature.svg"
        alt=""
        style="left: 988px; top: 268px; width: 52px"
      />
      <pre class="pp-a pp-box mono" style="left: 1040px; top: 220px">
r9zNN1c/
+Bstc6nhaL
Ufe0wCkbNF
wJq2I1husn
Ik</pre>
      <img class="pp-a" src="./officier.svg" alt="" style="left: 1186px; top: 200px; width: 62px" />
      <span class="prim pp-a" data-prim="cert" data-h="30" style="left: 1262px; top: 212px"></span>
      <span class="prim pp-a" data-prim="rsa" data-h="30" style="left: 1182px; top: 278px"></span>
      <i
        class="duo pp-a pp-key"
        data-icon="key"
        data-tight
        style="left: 1140px; top: 300px; width: 34px; height: 34px; color: #00b0f0"
      ></i>
      <svg class="pp-wires" viewBox="0 0 1600 900" aria-hidden="true">
        <path d="M682 242 L1030 242" marker-end="url(#pp-ah)" />
      </svg>
    </div>
    <div class="foot"></div>
  </div>
  <aside class="notes">
    Passive Authentication, pas à pas. Clic 1 : le pays signataire calcule l'empreinte (SHA) des
    données du titulaire et la signe avec sa clé privée K_S : c'est le SO_D (Security Object
    Document). Clic 2 : le SO_D est écrit dans la puce, avec le certificat du pays (clé publique
    K_P). Clic 3 : le terminal (la police aux frontières) vérifie la signature avec K_P : les
    données n'ont pas été modifiées depuis l'émission. Ne protège pas du clonage : c'est le rôle de
    l'Active Authentication.
  </aside>
</section>
`,M=`<section class="pl tl" data-hl="">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Assemblage cryptographique · TLS</div>
        <h2>Une suite de chiffrement, quatre primitives</h2>
      </div>
      <img class="tl-https" src="./https.webp" alt="https://" />
    </div>

    <!-- La suite décortiquée -->
    <div class="tl-suite">
      <div class="tl-row tl-up">
        <span class="tl-l" data-k="rsa">Authentication</span>
        <span class="tl-l" data-k="aes">Algorithm · Strength · Mode</span>
      </div>
      <div class="tl-name mono">
        <span>TLS_</span><span class="tl-seg" data-k="dh">ECDHE</span><span>_</span
        ><span class="tl-seg" data-k="rsa">RSA</span><span>_WITH_</span
        ><span class="tl-seg" data-k="aes">AES_128_GCM</span><span>_</span
        ><span class="tl-seg" data-k="sha">SHA256</span>
      </div>
      <div class="tl-row tl-down">
        <span class="tl-l" data-k="dh">Key exchange</span>
        <span class="tl-l" data-k="aes">Cipher</span>
        <span class="tl-l" data-k="sha">MAC or PRF</span>
      </div>
      <div class="tl-prims">
        <span class="tl-p" data-k="dh"><span class="prim" data-prim="dh" data-h="34"></span></span>
        <span class="tl-p" data-k="rsa"
          ><span class="prim" data-prim="rsa" data-h="34"></span
        ></span>
        <span class="tl-p" data-k="aes"
          ><span class="prim" data-prim="aes" data-h="34"></span
        ></span>
        <span class="tl-p" data-k="sha"
          ><span class="prim" data-prim="sha" data-h="34"></span
        ></span>
      </div>
    </div>

    <!-- Quelques suites -->
    <table class="tl-table mono">
      <thead>
        <tr>
          <th>Cipher Suite Name</th>
          <th data-k="rsa">Auth</th>
          <th data-k="dh">KX</th>
          <th data-k="aes">Cipher</th>
          <th data-k="sha">MAC</th>
          <th data-k="sha">PRF</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256</td>
          <td data-k="rsa">RSA</td>
          <td data-k="dh">ECDHE</td>
          <td data-k="aes">AES-128-GCM</td>
          <td data-k="sha">-</td>
          <td data-k="sha">SHA256</td>
        </tr>
        <tr>
          <td>TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384</td>
          <td data-k="rsa">ECDSA</td>
          <td data-k="dh">ECDHE</td>
          <td data-k="aes">AES-256-GCM</td>
          <td data-k="sha">-</td>
          <td data-k="sha">SHA384</td>
        </tr>
        <tr class="tl-old">
          <td>TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA</td>
          <td data-k="rsa">RSA</td>
          <td data-k="dh">DHE</td>
          <td data-k="aes">3DES-EDE-CBC</td>
          <td data-k="sha">SHA1</td>
          <td data-k="sha">Protocol</td>
        </tr>
        <tr class="tl-old">
          <td>TLS_RSA_WITH_AES_128_CBC_SHA</td>
          <td data-k="rsa">RSA</td>
          <td data-k="dh">RSA</td>
          <td data-k="aes">AES-128-CBC</td>
          <td data-k="sha">SHA1</td>
          <td data-k="sha">Protocol</td>
        </tr>
        <tr>
          <td>TLS_ECDHE_ECDSA_WITH_AES_128_CCM</td>
          <td data-k="rsa">ECDSA</td>
          <td data-k="dh">ECDHE</td>
          <td data-k="aes">AES-128-CCM</td>
          <td data-k="sha">-</td>
          <td data-k="sha">SHA256</td>
        </tr>
      </tbody>
    </table>
    <p class="tl-note">
      TLS 1.3 ne nomme plus que le chiffrement et le hachage (<span class="mono"
        >TLS_AES_128_GCM_SHA256</span
      >) : l'échange de clés (ECDHE) et la signature (RSA, ECDSA) se négocient à part.
    </p>

    <!-- La poignée de main -->
    <div class="tl-hs">
      <div class="tl-hs-t">TLS 1.3</div>
      <div class="tl-who"><span>Client</span><span>Serveur</span></div>
      <div class="tl-m tl-c" data-k="rsa">
        <span class="prim" data-prim="cert" data-h="30"></span><b>Identité client</b><i>→</i>
      </div>
      <div class="tl-m tl-c" data-k="prng">
        <span class="prim" data-prim="prng" data-h="30"></span><b>Aléa client</b><i>→</i>
      </div>
      <div class="tl-m tl-s" data-k="rsa">
        <i>←</i><b>Identité serveur</b><span class="prim" data-prim="cert" data-h="30"></span>
      </div>
      <div class="tl-m tl-s" data-k="prng">
        <i>←</i><b>Aléa serveur</b><span class="prim" data-prim="prng" data-h="30"></span>
      </div>
      <div class="tl-m tl-s" data-k="rsa">
        <i>←</i><b>Sign (aléa client)</b><span class="prim" data-prim="rsa" data-h="30"></span>
      </div>
      <div class="tl-m tl-c" data-k="rsa">
        <span class="prim" data-prim="rsa" data-h="30"></span><b>Sign (aléa serveur)</b><i>→</i>
      </div>
      <div class="tl-m tl-both" data-k="dh">
        <span class="prim" data-prim="dh" data-h="30"></span><em>Secret</em><i>←</i
        ><b>Échange de clés</b><i>→</i><em>Secret</em
        ><span class="prim" data-prim="dh" data-h="30"></span>
      </div>
      <div class="tl-m tl-both tl-kk">
        <span class="tl-ks"
          ><span class="prim" data-prim="aes" data-h="30"></span
          ><em data-k="aes">K<sub>chiff</sub></em
          ><em data-k="sha">K<sub>auth</sub></em
          ><span class="prim" data-prim="sha" data-h="30"></span></span
        ><i>⇄</i><b data-k="aes sha">Chiffrement authentifié</b><i>⇄</i
        ><span class="tl-ks"
          ><span class="prim" data-prim="aes" data-h="30"></span
          ><em data-k="aes">K<sub>chiff</sub></em
          ><em data-k="sha">K<sub>auth</sub></em
          ><span class="prim" data-prim="sha" data-h="30"></span
        ></span>
      </div>
    </div>

    <span class="fragment tl-tick" data-fragment-index="1"></span>
    <span class="fragment tl-tick" data-fragment-index="2"></span>
    <span class="fragment tl-tick" data-fragment-index="3"></span>
    <span class="fragment tl-tick" data-fragment-index="4"></span>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Une suite de chiffrement TLS = un assemblage de primitives. Clic 1 : ECDHE, l'échange de clés
    (Diffie-Hellman sur courbe elliptique, éphémère). Clic 2 : RSA, l'authentification du serveur
    (certificat + signature des aléas). Clic 3 : AES-128-GCM, le chiffrement authentifié. Clic 4 :
    SHA-256, la dérivation de clés (PRF / HKDF). Les suites en CBC + SHA1 sont obsolètes. En TLS
    1.3, la suite ne nomme plus que l'AEAD et le hachage (TLS_AES_128_GCM_SHA256).
  </aside>
</section>
`,N=`<section class="pl ts">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Assemblage cryptographique · SSL/TLS</div>
        <h2>Établir la clé de session : RSA ou Diffie-Hellman</h2>
      </div>
      <span class="ts-badges"
        ><span class="prim" data-prim="rsa" data-h="44"></span
        ><span class="prim" data-prim="dh" data-h="44"></span
      ></span>
    </div>

    <div class="ts-grid">
      <figure class="ts-col">
        <div class="fig"><img src="./tls-rsa.webp" alt="SSL/TLS : établissement de clé RSA" /></div>
        <figcaption>
          <span class="prim" data-prim="rsa-pub" data-h="30"></span>
          <p>
            La pré-clé de session voyage <b>chiffrée sous la clé publique</b> du serveur. Voler un
            jour sa clé privée, c'est déchiffrer tout le trafic enregistré.
          </p>
        </figcaption>
      </figure>
      <figure class="ts-col fragment">
        <div class="fig"><img src="./tls-dhe.webp" alt="SSL/TLS : établissement de clé DHE" /></div>
        <figcaption>
          <span class="prim" data-prim="dh" data-h="30"></span>
          <p>
            Le secret naît <b>des deux côtés</b> (g<sup>x<sub>C</sub></sup
            >, g<sup>x<sub>S</sub></sup
            >), signé par le serveur : clés éphémères, <b>confidentialité persistante</b>. Seul mode
            de TLS 1.3.
          </p>
        </figcaption>
      </figure>
    </div>
    <p class="src">Schémas : Jean-René Reinhard, 14 avril 2016</p>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Deux poignées de main TLS 1.2. RSA : le client chiffre la pré-clé sous pK_S (ClientKeyExchange)
    ; si la clé privée du serveur fuit, tout le trafic enregistré se déchiffre. DHE : chacun apporte
    sa part (g^xC, g^xS), le serveur signe ses paramètres ; clés éphémères → confidentialité
    persistante (PFS). TLS 1.3 ne garde que (EC)DHE.
  </aside>
</section>
`,ee=`<section class="tp">
  <div class="wrap">
    <div class="tp-head">
      <div>
        <div class="eyebrow">Mécanismes d'authentification</div>
        <h2>Trois façons de prouver qui l'on est</h2>
      </div>
      <span class="prim" data-prim="auth" data-h="58"></span>
    </div>

    <ol class="tp-lanes">
      <!-- Sec : le secret est présenté -->
      <li class="tp-lane tp-s fragment">
        <div class="tp-lbl">
          <span class="tp-tag">Sec</span>
          <div>
            <b>Secret présenté</b>
            <small>Mot de passe · HTTP Basic · formulaire · LDAP bind</small>
          </div>
        </div>
        <div class="tp-end">
          <i class="duo tp-who" data-icon="user-tie-hair-long" data-tight></i>
          <span class="tp-hold"
            ><i class="duo" data-icon="input-password" data-tight></i>mot de passe</span
          >
        </div>
        <div class="tp-chan">
          <span class="tp-spy"><i class="duo" data-icon="user-secret" data-tight></i></span>
          <span class="tp-msg tp-up tp-leak mono">Tr0ub4dor&amp;3</span>
          <span class="tp-msg tp-go tp-pwd mono">Tr0ub4dor&amp;3</span>
        </div>
        <div class="tp-end">
          <i class="duo tp-srv" data-icon="server" data-tight></i>
          <span class="tp-hold">empreinte salée du mot de passe</span>
        </div>
        <div class="tp-out tp-bad">
          <i class="duo" data-icon="xmark" data-tight></i>
          <p>
            <b>Le secret traverse le réseau.</b> Intercepté, rejoué, deviné : 97 % des attaques
            d'identité.
          </p>
          <p class="tp-salt">
            <b>Côté serveur :</b> empreinte salée contre les rainbow tables, puis dérivation lente :
            PBKDF2 → bcrypt → scrypt → <b>Argon2id</b>
          </p>
        </div>
      </li>

      <!-- Sym : défi-réponse avec un secret partagé -->
      <li class="tp-lane tp-y fragment">
        <div class="tp-lbl">
          <span class="tp-tag">Sym</span>
          <div>
            <b>Défi-réponse symétrique</b>
            <small>Kerberos · NTLM · TOTP · SIM · EMV (ARQC)</small>
          </div>
        </div>
        <div class="tp-end">
          <i class="duo tp-who" data-icon="user-tie-hair-long" data-tight></i>
          <span class="tp-hold"><i class="duo tp-kg" data-icon="key" data-tight></i>clé K</span>
        </div>
        <div class="tp-chan">
          <span class="tp-msg tp-back tp-nonce mono">défi 7f3a…</span>
          <span class="tp-msg tp-go tp-late tp-mac mono">HMAC<sub class="tp-sk">K</sub>(défi)</span>
        </div>
        <div class="tp-end">
          <i class="duo tp-srv" data-icon="server" data-tight></i>
          <span class="tp-hold"
            ><i class="duo tp-kg" data-icon="key" data-tight></i>la même clé K</span
          >
        </div>
        <div class="tp-out tp-mid">
          <i class="duo" data-icon="circle-info" data-tight></i>
          <p>
            <b>Le secret ne circule plus</b>, mais il est partagé : qui vole la base du serveur peut
            se faire passer pour vous.
          </p>
        </div>
      </li>

      <!-- Sig : défi-réponse par signature -->
      <li class="tp-lane tp-g fragment">
        <div class="tp-lbl">
          <span class="tp-tag">Sig</span>
          <div>
            <b>Défi-réponse par signature</b>
            <small>SSH · TLS · carte à puce · FIDO2 / passkeys · Wallet</small>
          </div>
        </div>
        <div class="tp-end">
          <i class="duo tp-who" data-icon="user-tie-hair-long" data-tight></i>
          <span class="tp-hold"
            ><i class="duo tp-kr" data-icon="key" data-tight></i>clé privée</span
          >
        </div>
        <div class="tp-chan">
          <span class="tp-msg tp-back tp-nonce mono">défi 7f3a…</span>
          <span class="tp-msg tp-go tp-late tp-sig mono"
            >Sign<sub class="tp-sk">clé privée</sub>(défi)</span
          >
        </div>
        <div class="tp-end">
          <i class="duo tp-srv" data-icon="server" data-tight></i>
          <span class="tp-hold"
            ><i class="duo tp-kv" data-icon="key" data-tight></i>clé publique</span
          >
          <i class="duo tp-ok" data-icon="badge-check" data-tight></i>
        </div>
        <div class="tp-out tp-good">
          <i class="duo" data-icon="check" data-tight></i>
          <p>
            <b>Seule la preuve circule.</b> Le serveur ne détient rien de secret : il vérifie avec
            la clé publique.
          </p>
        </div>
      </li>
    </ol>

    <div class="tp-chute fragment">
      <p class="tp-moto">Prouver sans jamais révéler</p>
      <dl class="tp-stats">
        <div>
          <dt>97 %</dt>
          <dd>
            des attaques d'identité visent le mot de passe<small
              >Microsoft Digital Defense Report 2025</small
            >
          </dd>
        </div>
        <div>
          <dt>15 Md</dt>
          <dd>
            de comptes en ligne acceptent les passkeys<small
              >FIDO Alliance, Passkey Index 2025</small
            >
          </dd>
        </div>
      </dl>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Sec : le secret lui-même est transmis (ou son équivalent) ; le serveur en garde l'empreinte,
    salée (un sel aléatoire par compte rend les rainbow tables inutiles) et calculée par une
    fonction volontairement lente et coûteuse : PBKDF2 (2000), bcrypt (1999), scrypt (2009, coûteuse
    en mémoire), Argon2id (lauréat PHC 2015, RFC 9106, recommandé par l'OWASP). Cela freine la casse
    hors ligne après vol de la base, sans rien changer à l'exposition du secret sur le réseau. Sym :
    le secret reste chez chacun, mais les deux en ont une copie : la base du serveur est un trésor
    (pass-the-hash, vol de la base Kerberos). Notation : HMAC indicé par K, Sign indicé par la clé
    privée ; on signe le défi, le hachage H(défi) est interne au schéma de signature (RSA-PSS,
    ECDSA, EdDSA). Piège : AWS SigV4 s'appelle « signature » mais c'est un HMAC. Sig : la clé privée
    ne quitte jamais l'appareil, le serveur ne stocke qu'une clé publique ; avec WebAuthn, la
    signature couvre aussi l'origine du site, ce qui neutralise le phishing. Nuance : en OIDC ou
    SAML, la signature authentifie l'assertion de l'IdP, pas forcément l'utilisateur. Chiffres :
    Microsoft MDDR 2025 (plus de 97 % des attaques d'identité sont des attaques par mot de passe) ;
    FIDO Alliance (plus de 15 milliards de comptes compatibles passkeys, plus d'un milliard de
    personnes en ont activé une).
  </aside>
</section>
`,te=`<section class="elsi">
  <div class="wrap">
    <div class="eyebrow">{ecole} · {code} · {annee}</div>
    <h1>La signature électronique sécurisée</h1>
    <div class="elsi-row">
      <img class="elsi-juge" src="./juge.webp" alt="Caricature d'un juge lisant un code" />
      <div class="elsi-picasso">
        <img class="elsi-trait elsi-colombe" src="./colombe.webp" alt="La colombe de Picasso" />
        <img class="elsi-trait elsi-sign" src="./signature.webp" alt="Signature de Picasso" />
      </div>
      <pre class="elsi-hex" aria-label="Valeur de signature électronique">
F96DE8C227A259C87EE1DA2AED5
7C93FE5DA36ED4EC87EF2C63AAE
5B9A7EFFD673BE4ACF7BE8923CA
B1ECE7AF2DCF7AE29A3DA44F235
A24C963FF0DF3CA3599A70E5DA3
6BF1ECE77F8DC34BE129A6CF4D1
26BF5B9A7CFEDF3EB850D37CF0C
63AA2509A76FF9227A55B9A6FE3
D720A850D97AB1DD35ED5FCE6BF
0D138A84CF8DC34BE129F8DC34B</pre>
    </div>
    <div class="elsi-who">
      <span class="elsi-cours">{cours}</span>
      <span class="elsi-nom">{intervenant}</span>
      <span class="elsi-org">Stelau · iDAKTO</span>
    </div>
    <div class="foot"></div>
  </div>
  <aside class="notes">
    ELSI : ELectronique SIgnature. D'abord un cours sur la signature électronique et sa mise en
    œuvre sécurisée, c'est aujourd'hui avant tout un cours sur la cryptographie moderne : la
    richesse de ses 5 primitives et la composabilité des mécanismes qui en découlent, simples ou
    complexes.
  </aside>
</section>
`,ne=`<section class="pl ha-anniv">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Rappels</div>
        <h2>Le paradoxe des anniversaires</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <p class="an-txt">
      Soit <i>E</i> un ensemble fini. Parmi <i>n</i> éléments tirés uniformément dans <i>E</i>, la
      probabilité <i>p̄</i>(<i>n</i>) qu'ils soient tous distincts vaut, pour |<i>E</i>| = 365 (les
      jours de l'année) :
    </p>
    <div class="an-formula">
      <img src="./formule.webp" alt="p barre de n = 365! / (365 − n)! × 1 / 365 puissance n" />
      <span>et la probabilité qu'au moins deux soient identiques : <b>p(n) = 1 − p̄(n)</b></span>
    </div>

    <div class="an-grid">
      <div class="fig an-curves">
        <img
          src="./courbes.webp"
          alt="Probabilités de coïncidence et de non-coïncidence selon le nombre de personnes : elles se croisent à 50 % vers 23 personnes"
        />
      </div>
      <div class="fig an-table">
        <img
          src="./table.webp"
          alt="p(n) : 5 → 2,71 % ; 10 → 11,69 % ; 23 → 50,73 % ; 50 → 97,04 % ; 60 → 99,41 %"
        />
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Avec 23 personnes, il y a déjà plus d'une chance sur deux que deux d'entre elles partagent le
    même anniversaire ; avec 60, c'est quasi certain. Intuition : on compare toutes les paires, soit
    n(n−1)/2 ≈ n²/2 paires. Appliqué à une empreinte de n bits : une collision après environ 2^(n/2)
    essais.
  </aside>
</section>
`,re=`<section class="pl ha-att">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Rappels</div>
        <h2>Trois attaques, trois résistances</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <ul class="at-list">
      <li class="at-1">
        <b>Résistance aux préimages</b>
        <p>Attaque : avec <var>x</var> donné, trouver <var>m</var> tel que <code>H(m) = x</code></p>
      </li>
      <li class="at-2">
        <b>Résistance aux secondes préimages</b>
        <p>
          Attaque : avec <var>m1</var> donné, trouver <var>m2</var> tel que
          <code>H(m1) = H(m2)</code>
        </p>
      </li>
      <li class="at-3">
        <b>Résistance aux collisions</b>
        <p>Attaque : trouver <var>m1</var> et <var>m2</var> tels que <code>H(m1) = H(m2)</code></p>
      </li>
    </ul>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Coût générique pour une empreinte de n bits : 2^n essais pour une préimage ou une seconde
    préimage, 2^(n/2) seulement pour une collision (paradoxe des anniversaires, planches suivantes).
    D'où SHA-256 pour 128 bits de sécurité face aux collisions.
  </aside>
</section>
`,ie=`<section class="pl ha-btc">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Secure Hash Algorithm</div>
        <h2>SHA-256 partout dans Bitcoin</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <div class="bt-grid">
      <div class="bt-left">
        <ul class="bt-pts">
          <li><b>Chaînage</b> : chaque bloc contient l'empreinte du précédent</li>
          <li><b>Arbre de Merkle</b> : une empreinte résume toutes les transactions</li>
          <li><b>Preuve de travail</b> : trouver un nonce dont l'empreinte commence par des 0</li>
          <li><b>Adresses et signatures</b> : SHA-256, RIPEMD-160 et ECDSA</li>
        </ul>
        <img class="bt-coin" src="./bitcoin.webp" alt="Bitcoin" />
      </div>
      <div class="bt-right">
        <span class="hv bt-hv"
          >f9dcc621fcb8ac6a172c40fd3ffcbfcf20fa400e3b216d3777362ee7c22965ea<span
            class="prim"
            data-prim="sha"
            data-label="SHA256"
            data-h="26"
          ></span
        ></span>
        <div class="fig bt-chain">
          <img
            src="./blockchain.webp"
            alt="Blocs chaînés par Prev_Hash, arbre de Merkle des transactions, structure d'une transaction signée en ECDSA"
          />
        </div>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Chaque badge SHA256 du schéma marque un calcul d'empreinte : Prev_Hash relie les blocs, l'arbre
    de Merkle (Hash0…Hash23) produit Tx_Root, l'adresse est RIPEMD-160(SHA-256(clé publique)) avec
    un code de contrôle en double SHA-256, et la signature ECDSA porte sur l'empreinte de la
    transaction. La preuve de travail est celle de la planche « Imprévisible : il faut essayer ».
  </aside>
</section>
`,ae=`<section class="pl ha-col">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Rappels</div>
        <h2>Le paradoxe des anniversaires appliqué au hachage</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <div class="co-grid">
      <div class="co-left">
        <p class="co-box">
          Si une fonction de hachage a une sortie de <b>n</b> bits (<b>n grand</b>), alors
          l'ensemble d'arrivée possède 2<sup>n</sup> éléments et il faut <b>environ</b> 2<sup
            >n/2</sup
          >
          hachés d'éléments distincts pour produire une collision avec 50 % de chance.
        </p>
        <div class="co-f">
          <img src="./np-approx.webp" alt="n(p) ≈ racine de 2 |E| ln(1 / (1 − p))" />
          <img src="./pn-exact.webp" alt="p(n) = 1 − |E|! / (|E| − n)! × 1 / |E| puissance n" />
        </div>
        <p class="co-calc fragment" data-fragment-index="1">
          Sur 8 bits : |E| = 256 et p = 50 % ⇒ n ≈ √(2 × 256 × ln 2) ≈ <b>19</b>
        </p>
      </div>

      <div class="co-right">
        <div class="co-term">
          <img
            src="./sortie.webp"
            alt="Sortie du script : empreintes SHA-1 et leurs 8 premiers bits"
          />
          <div class="co-live fragment" data-fragment-index="2" aria-live="off">
            <pre id="co-lines"></pre>
            <div class="co-stat">
              <span>tirage <b id="co-j">0</b> / 100</span>
              <span>avec collision : <b id="co-k">0</b></span>
            </div>
          </div>
        </div>
        <div class="co-script">
          <img
            src="./script.webp"
            alt="Script bash : 100 fois, hacher N valeurs aléatoires et compter les collisions sur 8 bits"
          />
          <span class="co-n fragment" data-fragment-index="1">19</span>
        </div>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Le script : 100 fois, on hache N valeurs aléatoires de 142 octets (SHA-1), on ne garde que les 8
    premiers bits (2 caractères hexadécimaux) et on compte les tirages qui contiennent au moins une
    collision. Question aux étudiants : quelle valeur de N donne une chance sur deux ? Clic 1 : 19.
    Clic 2 : le script tourne en direct (SHA-1 réels de valeurs aléatoires) ; on obtient environ 50
    tirages sur 100 avec collision.
  </aside>
</section>
`,oe=`<section class="pl ha-def" data-texte="{cours}">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Secure Hash Algorithm</div>
        <h2>Une empreinte de taille fixe pour n'importe quelle donnée</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <div class="hd-grid">
      <div class="hd-left">
        <div class="hd-alice" aria-label="Alice hache son message">
          <span class="hd-who">
            <i class="duo" data-icon="user-tie-hair-long" data-tight></i>
            <small>Alice</small>
          </span>
          <i class="duo hd-env" data-icon="envelope" data-tight></i>
          <i class="arr"></i>
          <span class="prim-ico" data-prim="sha"></span>
        </div>

        <ol class="hd-props">
          <li class="off">Confidentialité</li>
          <li class="on">
            Intégrité
            <ul>
              <li>Très rapide</li>
              <li>Gros volume</li>
            </ul>
          </li>
          <li class="off">Authenticité</li>
          <li class="off">Disponibilité</li>
          <li class="off">Originalité</li>
          <li class="off">Non-répudiation</li>
          <li class="on">Traçabilité</li>
        </ol>
      </div>

      <div class="hd-right">
        <div class="hd-defbox">
          <div class="hd-flow">
            <span class="prim" data-prim="sha" data-h="52"></span>
            <i class="arr"></i>
            <span class="hd-print">
              <span class="hv" id="hd-hv">…</span>
              <span class="hd-brace">empreinte cryptographique : <b>h</b> bits</span>
            </span>
          </div>
          <p>
            Une fonction de hachage cryptographique est une fonction <b>sans clé</b> qui permet de
            transformer une donnée de <b>taille arbitraire</b> en une chaîne de bits de
            <b>taille h fixe</b>, appelée haché.
          </p>
        </div>

        <div class="hd-anssi">
          <div class="fig hd-r3">
            <img
              src="./anssi-r3.webp"
              alt="ANSSI, règle R3 : fonctions de hachage SHA-2 et SHA-3 de 256 bits ou plus"
            />
          </div>
          <div class="hd-side">
            <ul class="hd-five" aria-label="Les 5 primitives">
              <li><span class="prim" data-prim="aes" data-h="24"></span></li>
              <li><span class="prim" data-prim="rsa" data-h="24"></span></li>
              <li class="me">
                <i class="arr"></i><span class="prim" data-prim="sha" data-h="24"></span>
              </li>
              <li><span class="prim" data-prim="dh" data-h="24"></span></li>
              <li><span class="prim" data-prim="prng" data-h="24"></span></li>
            </ul>
            <div class="hd-others">
              <small>Autres familles</small>
              <ol>
                <li>BLAKE</li>
                <li>RIPEMD</li>
                <li>WHIRLPOOL</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="src">Source : Guide de sélection d'algorithmes cryptographiques · ANSSI</div>
    <div class="foot"></div>
  </div>
  <aside class="notes">
    Son usage est omniprésent. La fonction de hachage cryptographique facilite le besoin de
    vérification de l'intégrité sur tout type de données informatiques. Elle facilite notamment
    l'utilisation des autres opérations cryptographiques. Enfin, elle est aussi présente dans la
    génération pseudo-aléatoire. L'empreinte affichée est le SHA-256 réel de « {cours} ».
  </aside>
</section>
`,se=`<section class="pl ha-hmac">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Secure Hash Algorithm</div>
        <h2>Construction du HMAC</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <div class="hm-grid">
      <div class="hm-left">
        <div class="fig hm-schema">
          <img
            src="./hmac-schema.webp"
            alt="Schéma du HMAC : deux passes de la fonction de compression f, avec ipad puis opad"
          />
        </div>
        <div class="fig hm-octets">
          <img
            src="./hmac-octets.webp"
            alt="HMAC-SHA1 octet par octet : clé XOR ipad, message, première passe ; clé XOR opad, deuxième passe"
          />
        </div>
      </div>
      <div class="hm-right">
        <div class="fig hm-formule">
          <img src="./hmac-formule.webp" alt="HMAC_K(m) = h((K ⊕ opad) ‖ h((K ⊕ ipad) ‖ m))" />
        </div>
        <div class="fig hm-pads">
          <img src="./hmac-pads.webp" alt="Clé XOR ipad et opad, puis deux passes de hachage" />
        </div>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    HMAC (RFC 2104) : deux passes de hachage. La clé, complétée à la taille du bloc (64 octets pour
    SHA-1 et SHA-256), est combinée par XOR avec ipad (0x36 répété) puis avec opad (0x5c répété).
    Cette double enveloppe neutralise l'attaque par extension de longueur des constructions
    Merkle-Damgård. C'est le HMAC qui est calculé en direct sur la planche TOTP.
  </aside>
</section>
`,ce=`<section class="pl ha-lim">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Secure Hash Algorithm</div>
        <h2>Ce que n'est pas un HMAC</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <table class="li-tab">
      <thead>
        <tr>
          <th></th>
          <th>Hash</th>
          <th>MAC</th>
          <th>Signature numérique</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Intégrité</th>
          <td class="y">Oui</td>
          <td class="y">Oui</td>
          <td class="y">Oui</td>
        </tr>
        <tr>
          <th>Authentification</th>
          <td>Non</td>
          <td class="y">Oui</td>
          <td class="y">Oui</td>
        </tr>
        <tr>
          <th>Non-répudiation</th>
          <td>Non</td>
          <td>Non</td>
          <td class="y">Oui</td>
        </tr>
        <tr class="li-keys">
          <th>Clés</th>
          <td>Aucune</td>
          <td>Symétrique <span class="prim-ico" data-prim="aes"></span></td>
          <td>Asymétrique <span class="prim-ico" data-prim="rsa"></span></td>
        </tr>
      </tbody>
    </table>

    <div class="li-grid">
      <dl class="li-defs">
        <dt>Intégrité</dt>
        <dd>
          Le destinataire peut-il être sûr que le message n'a pas été modifié accidentellement ?
        </dd>
        <dt>Authentification</dt>
        <dd>Le destinataire peut-il être sûr que le message provient de l'expéditeur ?</dd>
        <dt>Non-répudiation</dt>
        <dd>
          Si le destinataire transmet le message et la preuve à une tierce partie, cette dernière
          peut-elle être certaine que le message provient de l'expéditeur ?
        </dd>
      </dl>
      <div class="li-notes">
        <p class="li-sig">
          Pour les signatures, un vérificateur doit être sûr que la clé de vérification appartient
          réellement au signataire.
        </p>
        <p class="li-mac">
          Pour les MAC, un destinataire doit être sûr que la clé symétrique partagée n'a été
          partagée qu'avec l'expéditeur.
        </p>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Un HMAC prouve l'intégrité et l'origine entre deux parties qui partagent la clé, mais pas la
    non-répudiation : le destinataire possède la même clé et aurait pu fabriquer le MAC lui-même.
    Seule la signature, avec une clé privée que le signataire est seul à détenir, l'apporte.
  </aside>
</section>
`,le=`<section class="pl ha-pwd">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Secure Hash Algorithm</div>
        <h2>Hacher les mots de passe : saler et ralentir</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <div class="mp-top">
      <span class="mp-pwd mono" id="mp-pwd">P@55w0rD/2023</span>
      <i class="arr"></i>
      <span class="prim" data-prim="sha" data-label="SHA1" data-h="30"></span>
      <i class="arr mp-short"></i>
      <span class="hv" id="mp-h">…</span>
    </div>

    <div class="mp-grid">
      <div class="fig mp-zip">
        <img src="./zip.webp" alt="Archive ZIP chiffrée en AES-256 par mot de passe" />
      </div>

      <div class="mp-steps">
        <div class="mp-card mp-rt fragment" data-fragment-index="1">
          <div class="mp-lbl"><b>Sans sel</b> · table précalculée (rainbow table)</div>
          <table class="mp-table" aria-label="Table d'empreintes précalculées">
            <tr>
              <td class="mono">5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8</td>
              <td>password</td>
            </tr>
            <tr>
              <td class="mono">7c4a8d09ca3762af61e59520943dc26494f8941b</td>
              <td>123456</td>
            </tr>
            <tr class="hit">
              <td class="mono" id="mp-hit">…</td>
              <td class="mono">P@55w0rD/2023</td>
            </tr>
            <tr>
              <td class="mono">b1b3773a05c0ed0176787a4f1574ff0075f7521e</td>
              <td>qwerty</td>
            </tr>
          </table>
          <p>Même mot de passe ⇒ même empreinte : une seule recherche dans la table suffit.</p>
        </div>

        <div class="mp-card mp-kdf fragment" data-fragment-index="2">
          <div class="mp-lbl"><b>Avec sel et dérivation lente</b> · PBKDF2-HMAC-SHA256</div>
          <div class="mp-kdf-body">
            <div class="fig mp-diag">
              <img
                src="./pbkdf.webp"
                alt="Sel et mot de passe, fonction de hachage itérée N fois"
              />
            </div>
            <dl class="mp-vals">
              <dt>Sel (aléatoire, 128 bits)</dt>
              <dd class="mono mp-salt" id="mp-salt">…</dd>
              <dt>Itérations N</dt>
              <dd>
                <b class="mono" id="mp-n">0</b> / 600 000 <small>(recommandation OWASP)</small>
              </dd>
              <dt>Empreinte stockée</dt>
              <dd class="mono mp-res" id="mp-res">…</dd>
              <dt>Coût</dt>
              <dd id="mp-cost">…</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Un mot de passe haché sans sel donne toujours la même empreinte : les tables précalculées
    (rainbow tables) le retrouvent immédiatement. Le sel, aléatoire et propre à chaque compte, rend
    ces tables inutiles ; l'itération (PBKDF2, bcrypt, scrypt, Argon2id) rend chaque essai coûteux.
    Le calcul PBKDF2 est réel (WebCrypto du navigateur) et chronométré : chaque itération de
    PBKDF2-HMAC-SHA256 coûte deux SHA-256, soit 1,2 million de SHA-256 par essai. Le ZIP chiffré en
    AES-256 dérive sa clé du mot de passe de la même façon.
  </aside>
</section>
`,ue=`<section class="pl ha-pow">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Secure Hash Algorithm</div>
        <h2>Imprévisible : il faut essayer</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <div class="pw-top">
      <span class="hv" id="pw-hex"
        >…<span class="prim" data-prim="sha" data-label="SHA256" data-h="26"></span
      ></span>
    </div>

    <div class="pw-board" aria-live="off">
      <div class="pw-eq">
        SHA256(“<span class="pw-in">Guess #<b id="pw-n">0</b></span
        >”) =
      </div>
      <div class="pw-bits" id="pw-bits" aria-label="Les 256 bits de l'empreinte"></div>
    </div>

    <div class="pw-stats">
      <div><small>Essais</small><b id="pw-tries">1</b></div>
      <div>
        <small>Cible</small><b>16 bits à 0 en tête</b>
        <span>soit 2<sup>16</sup> = 65 536 essais en moyenne</span>
      </div>
      <div class="pw-best"><small>Meilleur</small><b id="pw-best">0 bit</b></div>
      <div class="pw-found" id="pw-found">
        <i class="duo" data-icon="pickaxe" data-tight></i>
        <p>
          <b>Trouvé !</b> Preuve de travail : chacun vérifie en <b>un seul</b> calcul ce qui a
          demandé des milliers d'essais. Bitcoin exige près de 80 bits à 0.
        </p>
      </div>
    </div>
    <span class="fragment" data-fragment-index="1" aria-hidden="true"></span>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Une empreinte ne se devine pas : changer un caractère change environ la moitié des 256 bits.
    Seul moyen d'obtenir une empreinte commençant par k bits à 0 : essayer, en moyenne 2^k fois. ›
    lance la recherche (SHA-256 réels, calculés en direct) : « Guess #106392 » est le premier
    message dont l'empreinte commence par 16 bits à 0. C'est la preuve de travail de Bitcoin, dont
    la difficulté correspond aujourd'hui à près de 80 bits à 0 (19 à 20 zéros hexadécimaux).
  </aside>
</section>
`,de=`<section class="pl ha-rbt">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Rappels</div>
        <h2>Compromis temps-mémoire : les rainbow tables</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <ul class="rb-pts">
      <li>
        Rainbow Tables
        <p>génération longue, délicate</p>
      </li>
    </ul>
    <div class="fig rb-chains">
      <img
        src="./chaines.webp"
        alt="Chaînes : mot de passe, H, empreinte, réduction R1, mot de passe… seules les extrémités sont stockées"
      />
    </div>
    <div class="fig rb-salt">
      <img src="./formule-sel.webp" alt="empreinte = h(mot_de_passe + sel)" />
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Une rainbow table enchaîne hachage H et fonctions de réduction R1, R2, R3 (empreinte → mot de
    passe candidat) ; on ne stocke que le début et la fin de chaque chaîne. Retrouver un mot de
    passe revient à recalculer une partie de chaîne : on échange de la mémoire contre du temps.
    Parade : le sel. Avec empreinte = h(mot_de_passe + sel), il faudrait une table par valeur de
    sel, ce qui ruine le précalcul. Voir aussi la planche « Hacher les mots de passe ».
  </aside>
</section>
`,fe=`<section class="pl ha-uni ha-rap">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Rappels</div>
        <h2>Fonctions de hachage cryptographiques</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <div class="ru-body">
      <ul class="hu-pts">
        <li>
          Fonctions à sens unique
          <p>d'un espace infini vers un espace fini</p>
          <p class="hu-sizes">128, 160, 224, 256 ou 512 bits</p>
        </li>
        <li>
          Résistantes aux attaques
          <ol>
            <li>
              <span class="k1">1<sup>re</sup> pré-image</span>
            </li>
            <li>
              <span class="k2">2<sup>de</sup> pré-image</span>
            </li>
            <li><span class="k3">collision</span></li>
          </ol>
        </li>
      </ul>
      <div class="hu-sets ru-sets">
        <div class="fragment" data-fragment-index="1">
          <svg
            viewBox="0 0 420 270"
            role="img"
            aria-label="Un espace infini de messages projeté sur un espace fini d'empreintes"
          >
            <defs>
              <marker
                id="ru-a"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path d="M0 0 10 5 0 10z" class="ru-ah" />
              </marker>
            </defs>
            <ellipse class="hu-e" cx="92" cy="138" rx="84" ry="124" />
            <ellipse class="hu-e" cx="330" cy="120" rx="54" ry="78" />
            <g class="hu-l">
              <line x1="112" y1="66" x2="326" y2="78" marker-end="url(#ru-a)" />
              <line x1="70" y1="112" x2="368" y2="150" marker-end="url(#ru-a)" />
              <line x1="140" y1="160" x2="324" y2="82" marker-end="url(#ru-a)" />
              <line x1="48" y1="208" x2="306" y2="114" marker-end="url(#ru-a)" />
              <line x1="52" y1="216" x2="322" y2="168" marker-end="url(#ru-a)" />
            </g>
            <g class="hu-p">
              <circle cx="112" cy="66" r="5" />
              <circle cx="70" cy="112" r="5" />
              <circle cx="140" cy="160" r="5" />
              <circle cx="48" cy="208" r="5" />
              <circle cx="52" cy="216" r="5" />
            </g>
            <circle class="hu-col" cx="332" cy="80" r="6" />
            <circle class="hu-img" cx="312" cy="114" r="5" />
            <circle class="hu-img" cx="374" cy="151" r="5" />
            <circle class="hu-img" cx="328" cy="168" r="5" />
            <text x="92" y="26" class="hu-t">messages : ∞</text>
            <text x="330" y="28" class="hu-t">
              empreintes : 2
              <tspan dy="-8" font-size="12">h</tspan>
            </text>
            <text x="350" y="64" class="hu-tc">collision</text>
          </svg>
        </div>
        <div class="fragment" data-fragment-index="2">
          <div class="hu-big">
            <b>2<sup>264</sup></b>
            <span>≈ 2<sup>(80 × 3,3)</sup></span>
            <span>≈ 10<sup>80</sup></span>
            <small>nb. d'atomes de l'univers</small>
          </div>
        </div>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Rappel avant la signature : une fonction de hachage projette un espace infini de messages sur un
    espace fini d'empreintes (› fait apparaître le schéma puis l'ordre de grandeur). Des collisions
    existent donc forcément : la sécurité tient à ce qu'on ne sache pas les trouver. 2^264 ≈ 10^80,
    le nombre d'atomes de l'univers.
  </aside>
</section>
`,pe=`<section class="pl ha-uni" data-texte="🔥{ecole} Rocks!">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Secure Hash Algorithm</div>
        <h2>Fonctions à sens unique</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <div class="hu-grid">
      <div class="hu-code" aria-label="SHA-1 en pseudo-code">
        <div class="fig"><img src="./sha1-compress.webp" alt="SHA1-compress" /></div>
        <div class="hu-row">
          <div class="fig hu-tour"><img src="./sha1-tour.webp" alt="Un tour de SHA-1" /></div>
          <div class="fig"><img src="./sha1-blockcipher.webp" alt="SHA1-blockcipher" /></div>
        </div>
        <div class="fig"><img src="./sha1-expand.webp" alt="expand" /></div>
        <div class="fig hu-f"><img src="./sha1-f.webp" alt="Fonction f" /></div>
      </div>

      <div class="hu-right">
        <div class="hu-flow">
          <span class="hu-in" id="hu-in"></span>
          <i class="arr"></i>
          <span class="hv" id="hu-hv"
            >…<span class="prim" data-prim="sha" data-label="SHA1" data-h="26"></span
          ></span>
        </div>

        <ul class="hu-pts">
          <li>
            Fonctions à sens unique
            <p>d'un espace infini vers un espace fini de :</p>
            <p class="hu-sizes">128, 160, 224, 256 ou 512 bits</p>
          </li>
          <li>
            Résistantes aux attaques
            <ol>
              <li>
                <span class="k1">1<sup>re</sup> pré-image</span>
              </li>
              <li>
                <span class="k2">2<sup>de</sup> pré-image</span>
              </li>
              <li><span class="k3">collisions</span></li>
            </ol>
          </li>
        </ul>

        <div class="hu-sets">
          <svg
            viewBox="0 0 420 270"
            role="img"
            aria-label="Un espace infini de messages projeté sur un espace fini d'empreintes"
          >
            <defs>
              <marker
                id="hu-a"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path d="M0 0 10 5 0 10z" class="hu-ah" />
              </marker>
            </defs>
            <ellipse class="hu-e" cx="92" cy="138" rx="84" ry="124" />
            <ellipse class="hu-e" cx="330" cy="120" rx="54" ry="78" />
            <g class="hu-l">
              <line x1="112" y1="66" x2="326" y2="78" marker-end="url(#hu-a)" />
              <line x1="70" y1="112" x2="368" y2="150" marker-end="url(#hu-a)" />
              <line x1="140" y1="160" x2="324" y2="82" marker-end="url(#hu-a)" />
              <line x1="48" y1="208" x2="306" y2="114" marker-end="url(#hu-a)" />
              <line x1="52" y1="216" x2="322" y2="168" marker-end="url(#hu-a)" />
            </g>
            <g class="hu-p">
              <circle cx="112" cy="66" r="5" />
              <circle cx="70" cy="112" r="5" />
              <circle cx="140" cy="160" r="5" />
              <circle cx="48" cy="208" r="5" />
              <circle cx="52" cy="216" r="5" />
            </g>
            <circle class="hu-col" cx="332" cy="80" r="6" />
            <circle class="hu-img" cx="312" cy="114" r="5" />
            <circle class="hu-img" cx="374" cy="151" r="5" />
            <circle class="hu-img" cx="328" cy="168" r="5" />
            <text x="92" y="26" class="hu-t">messages : ∞</text>
            <text x="330" y="28" class="hu-t">
              empreintes : 2
              <tspan dy="-8" font-size="12">h</tspan>
            </text>
            <text x="350" y="64" class="hu-tc">collision</text>
          </svg>
          <div class="hu-big">
            <b>2<sup>264</sup></b>
            <span>≈ 2<sup>(80 × 3,3)</sup></span>
            <span>≈ 10<sup>80</sup></span>
            <small>nb. d'atomes de l'univers</small>
          </div>
        </div>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    À gauche, SHA-1 en pseudo-code : compression, chiffrement par blocs interne, expansion du
    message, fonction f des 80 tours. Pré-image : retrouver un message à partir de son empreinte.
    Seconde pré-image : à partir d'un message, en trouver un autre de même empreinte. Collision :
    trouver deux messages quelconques de même empreinte (paradoxe des anniversaires : 2^(h/2)
    essais). L'empreinte en haut à droite est le SHA-1 réel du texte affiché.
  </aside>
</section>
`,me=`<section class="pl ha-code">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Rappels</div>
        <h2>SHA-1 en quelques lignes</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <div class="sc-top">
      <span class="sc-in mono">password</span>
      <i class="arr"></i>
      <span class="hv" id="sc-hv"
        >…<span class="prim" data-prim="sha" data-label="SHA1" data-h="24"></span
      ></span>
    </div>

    <div class="sc-grid">
      <div class="sc-left">
        <div class="fig"><img src="./sha1-compress.webp" alt="SHA1-compress" /></div>
        <div class="fig sc-exp"><img src="./sha1-expand.webp" alt="expand" /></div>
        <div class="fig sc-bc"><img src="./sha1-blockcipher.webp" alt="SHA1-blockcipher" /></div>
        <div class="fig sc-f"><img src="./sha1-f.webp" alt="Fonction f" /></div>
      </div>
      <div class="sc-right">
        <div class="fig sc-tour">
          <img
            src="./sha1-tour.webp"
            alt="Un tour de SHA-1 : registres A à E, fonction F, rotations, Wt et Kt"
          />
        </div>
        <div class="fig sc-go">
          <img src="./go-putuint32.webp" alt="Code Go : putUint32, écriture big-endian" />
        </div>
      </div>
    </div>

    <div class="src">Source : Serious Cryptography · © 2018 Jean-Philippe Aumasson</div>
    <div class="foot"></div>
  </div>
  <aside class="notes">
    Tout SHA-1 tient en quelques fonctions : compression (5 mots de 32 bits), expansion du bloc de
    512 bits en 80 mots, 80 tours avec la fonction f qui change tous les 20 tours. L'empreinte
    affichée est le SHA-1 réel de « password », celui qu'on retrouve en tête de toutes les tables
    précalculées (le pptx portait une coquille : un « c » manquait).
  </aside>
</section>
`,he=`<section class="pl ha-totp">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Secure Hash Algorithm</div>
        <h2>Du secret partagé au code à 6 chiffres : TOTP</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <!-- 1. Le secret seul : toujours la même empreinte -->
    <div class="to-row">
      <div class="to-end">
        <i class="duo to-alice" data-icon="user-tie-hair-long" data-tight></i>
        <span class="to-sec">les carottes sont cuites</span>
      </div>
      <i class="arr"></i>
      <span class="hv to-h" id="to-h1"
        >…<span class="prim" data-prim="sha" data-label="SHA1" data-h="24"></span
      ></span>
      <i class="arr"></i>
      <div class="to-end">
        <i class="duo to-bob" data-icon="user-tie-hair" data-tight></i>
        <span class="to-sec">les carottes sont cuites</span>
      </div>
    </div>

    <!-- 2. Le secret et l'heure : l'empreinte change chaque minute -->
    <div class="to-row fragment" data-fragment-index="1">
      <div class="to-end">
        <i class="duo to-cal to-cal-a" data-icon="calendar-clock" data-tight></i>
        <i class="duo to-alice" data-icon="user-tie-hair-long" data-tight></i>
        <span class="to-sec">les carottes sont cuites<b class="to-now">…</b></span>
      </div>
      <i class="arr"></i>
      <span class="hv to-h" id="to-h2"
        >…<span class="prim" data-prim="sha" data-label="SHA1" data-h="24"></span
      ></span>
      <i class="arr"></i>
      <div class="to-end">
        <i class="duo to-bob" data-icon="user-tie-hair" data-tight></i>
        <span class="to-sec">les carottes sont cuites<b class="to-now">…</b></span>
        <i class="duo to-cal to-cal-b" data-icon="calendar-clock" data-tight></i>
      </div>
    </div>

    <!-- 3. Le code envoyé -->
    <div class="to-code fragment" data-fragment-index="2">
      <i class="to-elbow"></i>
      <div class="to-otp">
        <b id="to-otp">……</b>
        <span>TOTP · HMAC</span>
      </div>
      <div class="fig to-sms">
        <img src="./sms.webp" alt="SMS de BNP Paribas avec un code d'authentification" />
      </div>
    </div>

    <!-- 4. Le calcul réel (RFC 6238) -->
    <div class="to-rfc fragment" data-fragment-index="3">
      <div class="to-clock">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle class="to-track" cx="50" cy="50" r="44" />
          <circle class="to-left" id="to-ring" cx="50" cy="50" r="44" pathLength="30" />
        </svg>
        <div><b id="to-sec">30</b><small>s</small></div>
      </div>
      <div class="to-steps">
        <div class="to-step">
          <small>T = ⌊ heure Unix / 30 ⌋</small><b class="mono" id="to-T">…</b>
        </div>
        <div class="to-step to-macline">
          <small>HMAC-SHA1(K, T) · 20 octets</small>
          <div class="to-mac mono" id="to-mac"></div>
        </div>
        <div class="to-step to-trunc">
          <small>4 octets à partir de l'offset, bit de poids fort à 0</small>
          <b class="mono" id="to-bin">…</b>
          <span class="to-mod">mod 10<sup>6</sup></span>
          <b class="mono to-final" id="to-otp2">…</b>
        </div>
      </div>
      <div class="to-key">
        <small>Secret K à saisir dans votre application (Base32)</small>
        <code id="to-b32">…</code>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    1) Alice et Bob partagent un secret : son empreinte est toujours la même, la montrer ne prouve
    rien de neuf (elle peut être rejouée). 2) On ajoute l'heure : l'empreinte change chaque minute,
    Alice et Bob la calculent chacun de leur côté (valeurs réelles, en direct). 3) Le code transmis
    n'est qu'un extrait de quelques chiffres. 4) En vrai, RFC 6238 : HMAC-SHA1(K, ⌊t/30⌋),
    troncature dynamique (RFC 4226) : l'offset est donné par les 4 derniers bits du dernier octet,
    on lit 4 octets, on met le bit de poids fort à 0, puis modulo 10^6. Le secret affiché en Base32
    peut être saisi dans Google Authenticator, FreeOTP… : les téléphones des étudiants affichent le
    même code.
  </aside>
</section>
`,ge=`<section class="pl ha-totpc">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Secure Hash Algorithm</div>
        <h2>Construction : TOTP</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <div class="tc-grid">
      <div class="fig tc-schema">
        <img
          src="./totp-schema.webp"
          alt="Le jeton TOTP et le serveur calculent chacun HMAC-SHA1 du secret partagé et de l'heure, puis comparent les codes"
        />
      </div>
      <div class="fig tc-rfc">
        <img
          src="./rfc4226.webp"
          alt="RFC 4226, section 5.4 : exemple de calcul HOTP, troncature dynamique"
        />
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    À gauche, le principe : jeton et serveur partagent un secret et une horloge ; chacun calcule
    HMAC-SHA1, en extrait un code, et le serveur compare. À droite, RFC 4226 §5.4 : troncature
    dynamique (offset = 4 derniers bits du dernier octet, 4 octets, bit de poids fort à 0, modulo
    10^6). RFC 6238 (TOTP) remplace le compteur par ⌊t / 30⌋.
  </aside>
</section>
`,_e=`<section class="pl ha-all">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Secure Hash Algorithm</div>
        <h2>Tout se hache, et toujours sur 160 bits</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <div class="ta-row ta-a fragment" data-fragment-index="1">
      <p class="ta-txt" id="ta-txt">
        La cryptographie moderne est une branche de la cryptologie qui utilise des algorithmes
        mathématiques pour protéger et sécuriser les informations. Elle est devenue essentielle dans
        le monde numérique pour garantir la confidentialité, l'intégrité et l'authenticité des
        données échangées. Les principaux objectifs de la cryptographie moderne sont de garantir la
        confidentialité, l'authenticité et l'intégrité des données. Elle est utilisée dans de
        nombreux domaines tels que les transactions financières, la communication en ligne, la
        sécurité des réseaux informatiques, et la protection des données personnelles.
      </p>
      <i class="arr"></i>
      <span class="prim" data-prim="sha" data-label="SHA1" data-h="30"></span>
      <i class="arr ta-short"></i>
      <span class="hv" data-h="txt">…</span>
    </div>

    <div class="ta-row ta-b fragment" data-fragment-index="2">
      <img class="ta-photo" src="./photo.webp" alt="Une photographie" />
      <i class="arr"></i>
      <span class="prim" data-prim="sha" data-label="SHA1" data-h="30"></span>
      <i class="arr ta-short"></i>
      <span class="hv" data-h="photo">…</span>
    </div>

    <div class="ta-id fragment" data-fragment-index="3">
      <div class="ta-parts">
        <div class="ta-row">
          <address class="ta-civ" id="ta-civ">
            <b>{intervenant}</b><span>12 mars 1974</span><span>5 rue de la Villa</span
            ><span>65432 Bourg-la-Ville</span>
          </address>
          <i class="arr"></i>
          <span class="prim" data-prim="sha" data-label="SHA1" data-h="26"></span>
          <i class="arr ta-short"></i>
          <span class="hv" data-h="civ">…</span>
        </div>
        <div class="ta-row">
          <span class="ta-in"><img class="ta-face" src="./portrait.webp" alt="Portrait" /></span>
          <i class="arr"></i>
          <span class="prim" data-prim="sha" data-label="SHA1" data-h="26"></span>
          <i class="arr ta-short"></i>
          <span class="hv" data-h="face">…</span>
        </div>
        <div class="ta-row">
          <span class="ta-in"
            ><img class="ta-finger" src="./empreinte-digitale.webp" alt="Empreinte digitale"
          /></span>
          <i class="arr"></i>
          <span class="prim" data-prim="sha" data-label="SHA1" data-h="26"></span>
          <i class="arr ta-short"></i>
          <span class="hv" data-h="finger">…</span>
        </div>
      </div>
      <div class="ta-join fragment" data-fragment-index="4">
        <i class="ta-bar"></i>
        <i class="arr ta-short"></i>
        <span class="prim" data-prim="sha" data-label="SHA1" data-h="30"></span>
        <i class="arr ta-short"></i>
        <span class="hv ta-final" data-h="id">…<small>identité = SHA1(h₁ ‖ h₂ ‖ h₃)</small></span>
      </div>
    </div>

    <div class="ta-aval fragment" data-fragment-index="5" id="ta-aval">
      Une seule lettre change (<b>L</b> → <b>l</b>) : <b id="ta-diff">…</b> bits sur 160 basculent.
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Toutes les empreintes sont des SHA-1 réels calculés en direct : le texte tel qu'affiché, les
    fichiers des images, l'état civil, puis l'empreinte de l'identité = SHA-1 de la concaténation
    des trois empreintes. Quelle que soit la taille de l'entrée (un paragraphe, une photo, trois
    lignes), la sortie fait 160 bits. Dernier clic : effet avalanche, une lettre change et environ
    la moitié des bits de l'empreinte basculent.
  </aside>
</section>
`,ve=`<section class="pl ha-res">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Hachage cryptographique · Rappels</div>
        <h2>Résistantes aux attaques</h2>
      </div>
      <span class="prim" data-prim="sha" data-h="58"></span>
    </div>

    <div class="rs-grid">
      <div>
        <ol class="rs-kinds">
          <li>1<sup>re</sup> pré-image</li>
          <li>2<sup>de</sup> pré-image</li>
          <li class="k3">collision</li>
        </ol>
        <div class="fig rs-rho">
          <img src="./rho.webp" alt="Suite H1, H2… qui finit par boucler : une collision" />
        </div>
      </div>
      <ol class="rs-defs">
        <li>Il est très difficile de trouver le contenu du message à partir de son condensat.</li>
        <li>
          À partir d'un message donné et de son condensat (et de la fonction de hachage), il est
          très difficile de générer un autre message qui donne le même condensat.
        </li>
        <li>
          Il est très difficile de trouver deux messages aléatoires qui donnent un même condensat
          (résistance aux collisions).
        </li>
      </ol>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Le schéma en ρ (rho) : en itérant H sur sa propre sortie, H1 → H2 → … on finit forcément par
    retomber sur une valeur déjà vue, puisque l'ensemble d'arrivée est fini. Le point d'entrée de la
    boucle donne une collision : c'est la méthode rho de Pollard, en environ 2^(n/2) étapes et
    presque sans mémoire.
  </aside>
</section>
`,ye=`<section class="pl hv-acd">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">
          Toujours au cœur du chiffrement symétrique moderne · <b class="ac-conf">Confusion</b> et
          <b class="ac-diff">Diffusion</b>
        </div>
        <h2>Un tour d'AES : substitution, permutation, mélange, clé</h2>
      </div>
      <span class="prim" data-prim="aes" data-h="58"></span>
    </div>

    <div class="ac-main">
      <ol class="ac-ops">
        <li data-op="addRoundKey" class="ac-op ac-key">
          <b>AddRoundKey</b><span>⊕ clé de tour : seule la <em>clé</em> est secrète</span>
        </li>
        <li data-op="subBytes" class="ac-op ac-sub">
          <b>SubBytes</b
          ><span
            ><em class="ac-conf">Confusion</em> par <em class="ac-subst">substitution</em> (boîte
            S)</span
          >
        </li>
        <li data-op="shiftRows" class="ac-op ac-shift">
          <b>ShiftRows</b
          ><span><em class="ac-diff">Diffusion</em> par <em class="ac-permu">permutation</em></span>
        </li>
        <li data-op="mixColumns" class="ac-op ac-mix">
          <b>MixColumns</b><span><em class="ac-diff">Diffusion</em> par mélange des colonnes</span>
        </li>
        <li class="ac-loop"><b>× 10 tours</b><span>les 4 opérations, encore et encore</span></li>
      </ol>

      <div class="ac-center">
        <div class="ac-status">
          <span class="ac-round">Clair</span><span class="ac-step"></span>
        </div>
        <div class="ac-grid" aria-label="État AES : 16 octets"></div>
        <div class="ac-legend">état : 16 octets, 4 lignes × 4 colonnes</div>
      </div>

      <div class="ac-side">
        <div class="ac-panel" data-p="0">
          <h3>Bloc clair et clé</h3>
          <p class="ac-hex"><small>clair</small><code class="ac-pt"></code></p>
          <p class="ac-hex"><small>clé</small><code class="ac-k"></code></p>
          <p class="ac-src">Exemple de la norme FIPS-197, annexe B</p>
        </div>
        <div class="ac-panel" data-p="1">
          <h3>AddRoundKey</h3>
          <p>Chaque octet est combiné (⊕, XOR) avec l'octet de la clé de tour.</p>
          <p class="ac-eq"><code class="ac-x1"></code></p>
        </div>
        <div class="ac-panel" data-p="2">
          <h3><span class="ac-conf">Confusion</span> : la boîte S</h3>
          <p>Chaque octet est remplacé par un autre, lu dans une table de 256 cases.</p>
          <div class="ac-sbox"></div>
          <p class="ac-eq"><code class="ac-s1"></code></p>
        </div>
        <div class="ac-panel" data-p="3">
          <h3><span class="ac-diff">Diffusion</span> : la permutation</h3>
          <p>
            La ligne <i>r</i> tourne de <i>r</i> cases vers la gauche : les octets d'une colonne se
            dispersent dans les 4 colonnes.
          </p>
        </div>
        <div class="ac-panel" data-p="4">
          <h3><span class="ac-diff">Diffusion</span> : le mélange</h3>
          <p>
            Chaque colonne est multipliée par une matrice :
            <b>chaque octet de sortie dépend des 4 octets</b> de la colonne.
          </p>
          <pre class="ac-mat">
⎡2 3 1 1⎤
⎢1 2 3 1⎥
⎢1 1 2 3⎥
⎣3 1 1 2⎦</pre>
          <p class="ac-eq ac-mline"><code class="ac-m1"></code></p>
        </div>
        <div class="ac-panel" data-p="5">
          <h3>10 tours plus tard</h3>
          <p class="ac-hex"><small>chiffré</small><code class="ac-ct"></code></p>
          <p>Identique au vecteur de test de la norme.</p>
        </div>
        <div class="ac-panel" data-p="6">
          <h3>Effet avalanche</h3>
          <p>On change <b>1 seul bit</b> du clair :</p>
          <p class="ac-hex"><small>clair′</small><code class="ac-pt2"></code></p>
          <p class="ac-hex"><small>chiffré</small><code class="ac-c1"></code></p>
          <p class="ac-hex"><small>chiffré′</small><code class="ac-c2"></code></p>
          <p class="ac-av"><b class="ac-nb"></b> bits sur 128 ont changé</p>
        </div>
      </div>
    </div>

    <span class="fragment ac-tick" data-fragment-index="1"></span>
    <span class="fragment ac-tick" data-fragment-index="2"></span>
    <span class="fragment ac-tick" data-fragment-index="3"></span>
    <span class="fragment ac-tick" data-fragment-index="4"></span>
    <span class="fragment ac-tick" data-fragment-index="5"></span>
    <span class="fragment ac-tick" data-fragment-index="6"></span>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Planche ajoutée : la confusion et la diffusion de Shannon (1949) sont toujours au cœur du
    chiffrement symétrique moderne. Un tour d'AES-128, calculé en direct sur l'exemple de FIPS-197
    (annexe B). Clic 1 : AddRoundKey (la clé). Clic 2 : SubBytes, la boîte S = confusion par
    substitution (la seule opération non linéaire). Clic 3 : ShiftRows = diffusion par permutation.
    Clic 4 : MixColumns = diffusion par mélange (chaque octet dépend des 4 octets de sa colonne).
    Clic 5 : les 9 autres tours défilent jusqu'au chiffré 3925841d…, celui de la norme. Clic 6 :
    effet avalanche, un seul bit change dans le clair, environ la moitié des bits du chiffré
    changent. César et la scytale faisaient déjà de la substitution et de la permutation : AES les
    répète 10 fois, avec une clé, sur des octets.
  </aside>
</section>
`,be=`<section class="pl hv-cd">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">
          Cryptographie symétrique ⇒ <b class="cd-conf">Confusion</b> et
          <b class="cd-diff">Diffusion</b>
        </div>
        <h2>Confusion et Diffusion · Substitution et Permutation</h2>
      </div>
    </div>

    <div class="cd-block cd-sub">
      <h3><span class="cd-conf">Confusion</span> par <span class="cd-subst">Substitution</span></h3>
      <div class="cd-sub-grid">
        <div class="cd-alpha" aria-label="Table de substitution"></div>
        <img class="cd-disque" src="./disque.webp" alt="Disque de chiffrement de César" />
      </div>
      <div class="cd-word">
        <span class="cd-in" data-text="ALLO"></span>
        <span class="cd-arrow">⇒</span>
        <span class="cd-out"></span>
      </div>
    </div>

    <div class="cd-block cd-perm">
      <h3>
        <span class="cd-diff">Diffusion</span> par <span class="cd-permu">Permutation</span> /
        <span class="cd-permu">Transposition</span>
      </h3>
      <div class="cd-tiles">
        <div class="cd-row cd-src"></div>
        <span class="cd-arrow">⇒</span>
        <div class="cd-row cd-dst"></div>
      </div>
      <p class="cd-note">
        mêmes lettres, autre ordre : une anagramme · la clé, c'est la permutation
      </p>
    </div>

    <span class="fragment cd-tick" data-fragment-index="1"></span>
    <span class="fragment cd-tick" data-fragment-index="2"></span>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Clic 1 : substitution lettre à lettre (ALLO → ETTY) avec la table du pptx. Clic 2 : permutation
    (JE SUIS PAS LA → SIUS EJ AL SAP), les lettres se déplacent. Permutation = anagramme. La
    substitution (un symbole du texte clair est remplacé par un autre) fut une première approche
    pour introduire la confusion (dans les chiffrements modernes, on utilise à cet effet des boîtes
    S). Quant à la permutation/transposition, elle augmente la diffusion. Les chiffrements utilisent
    pour cela des boîtes P. D'autres mécanismes peuvent être déployés, comme des transformations
    linéaires (par exemple dans Rijndael). Un chiffrement par produit combine des opérations pour
    garantir à la fois la diffusion et la confusion.
  </aside>
</section>
`,xe=`<section class="pl hv-eni">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Cryptographie n°0 · Histoire</div>
        <h2>« Qui a cassé Enigma ? »</h2>
      </div>
    </div>

    <div class="en-body">
      <div class="en-text">
        <p>
          <b>1932.</b> Dans la salle de bains d'un hôtel bruxellois, un espion français photographie
          les premiers documents décrivant une nouvelle machine à coder <i>a priori</i> inviolable :
          Enigma. Une machine que s'apprêtent à adopter les services secrets allemands. Quelques
          mois plus tard, avec l'aide des Français, un groupe de mathématiciens polonais entreprend
          de percer à jour le fonctionnement complexe de la machine.
        </p>
        <p>
          <b>1940.</b> Après la défaite française face aux nazis, les Français et les Polonais
          transmettent leurs trouvailles aux Britanniques. À Bletchley Park se déploie une
          gigantesque entreprise de décodage dont va dépendre l'issue de la guerre.
        </p>
        <p>
          <b>1942.</b> Sous le nez des Allemands, à Vichy même, Français et Polonais continuent
          leurs efforts de décodage. La Gestapo est à leurs trousses et le MI-6 a pour priorité
          absolue de les exfiltrer. Pendant ce temps dans l'Atlantique, les U-Boote allemands mènent
          une traque dévastatrice contre les navires américains qui ravitaillent la Grande-Bretagne
          en armes, vivres et marchandises. Si on ne réussit pas très vite à décoder les messages de
          la Marine allemande, le Royaume-Uni ne tiendra pas.
        </p>
        <p class="en-turing">
          À Bletchley Park, un des cerveaux les plus brillants de l'histoire scientifique,
          <b>Alan Turing</b>, va apporter une contribution décisive…
        </p>
      </div>

      <div class="en-pics">
        <img class="en-p en-paper" src="./paper-enigma.webp" alt="Paper Enigma Machine" />
        <img
          class="en-p en-cover"
          src="./bd-couverture.webp"
          alt="Couverture de la bande dessinée « Qui a cassé Enigma ? »"
        />
        <img class="en-p en-p1" src="./bd-planche.webp" alt="Extrait de la bande dessinée" />
        <img
          class="en-p en-p2"
          src="./bd-vichy.webp"
          alt="Extrait de la bande dessinée : les cryptologues à Vichy"
        />
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Repères : les documents livrés au renseignement français par Hans-Thilo Schmidt (« Asché ») ;
    les mathématiciens polonais Rejewski, Różycki et Zygalski reconstituent la machine ; en juillet
    1939 (réunion de Pyry), ils transmettent leurs travaux aux Français et aux Britanniques.
  </aside>
</section>
`,Se=`<section class="pl hv-ep">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Confusion et diffusion · Enigma de papier</div>
        <h2>Substitutions et permutations combinées : une Enigma en papier</h2>
      </div>
    </div>

    <div class="ep-main">
      <div
        class="ep-paper"
        aria-label="Enigma de papier : réflecteur, rotors I, II, III, entrée et sortie"
      >
        <div class="ep-heads">
          <span class="ep-h ep-h-ref">Réflecteur B</span>
          <span class="ep-h ep-h-l">Rotor I <small>gauche</small></span>
          <span class="ep-h ep-h-c">Rotor II <small>centre</small></span>
          <span class="ep-h ep-h-r">Rotor III <small>droite</small></span>
          <span class="ep-h ep-h-io">Entrée<br />sortie</span>
        </div>
        <div class="ep-body">
          <div class="ep-window" aria-hidden="true"></div>
          <div class="ep-col ep-ref"></div>
          <div class="ep-strip ep-s0"><div class="ep-tape"></div></div>
          <div class="ep-col ep-link ep-k1"></div>
          <div class="ep-strip ep-s1"><div class="ep-tape"></div></div>
          <div class="ep-col ep-link ep-k2"></div>
          <div class="ep-strip ep-s2"><div class="ep-tape"></div></div>
          <div class="ep-col ep-io"></div>
          <svg class="ep-svg" aria-hidden="true"></svg>
        </div>
      </div>

      <div class="ep-side">
        <div class="ep-key">
          <span class="ep-key-l">Clé</span>
          <span class="ep-key-r"><b>I · II · III</b><small>rotors</small></span>
          <span class="ep-key-w"
            ><b class="ep-w0">A</b><b class="ep-w1">A</b><b class="ep-w2">A</b
            ><small>fenêtres</small></span
          >
        </div>

        <div class="ep-cards">
          <div class="ep-card" data-s="0">
            <h3>Une Enigma… en papier</h3>
            <p>
              Trois bandes-rotors et un réflecteur, d'après Michael C. Koss (2003).<br />
              Rien que des lettres de A à Z.
            </p>
          </div>
          <div class="ep-card" data-s="1">
            <h3>La clé</h3>
            <p>
              Le choix et l'ordre des rotors <b>(I · II · III)</b> et leurs positions de départ :<br />
              <b>(M C K)</b>.<br />
              Le mécanisme, lui, est connu de tous.
            </p>
          </div>
          <div class="ep-card" data-s="2">
            <h3><span class="ep-conf">Substitutions</span> en chaîne</h3>
            <p>
              Le rotor de droite avance d'un cran.<br />
              Puis <b>E</b> traverse 3 rotors, rebondit sur le réflecteur et revient par les 3
              rotors : <b>E → Q</b>.
            </p>
          </div>
          <div class="ep-card" data-s="3">
            <h3>La rotation <span class="ep-diff">permute</span> le câblage</h3>
            <p>
              On tape encore <b>E</b> : le rotor a tourné, toute la substitution a changé.<br />
              La même lettre ne se chiffre pas deux fois de suite de la même façon.
            </p>
          </div>
          <div class="ep-card" data-s="4">
            <h3>Même clé pour déchiffrer</h3>
            <p>
              On repart de <b>M C K</b> et on tape le chiffré : le clair réapparaît.<br />
              Grâce au réflecteur, Enigma est réversible…<br />
              … et une lettre ne se chiffre <b>jamais en elle-même</b>, faille exploitée à Bletchley
              Park.
            </p>
          </div>
        </div>

        <div class="ep-msg">
          <div class="ep-line"><small>entrée</small><code class="ep-in"></code></div>
          <div class="ep-line"><small>sortie</small><code class="ep-out"></code></div>
        </div>
        <div class="ep-legend">
          <span class="ep-lg-a">aller : 3 substitutions</span><span class="ep-lg-x">réflecteur</span
          ><span class="ep-lg-r">retour : 3 substitutions inverses</span>
        </div>
      </div>
    </div>

    <span class="fragment ep-tick" data-fragment-index="1"></span>
    <span class="fragment ep-tick" data-fragment-index="2"></span>
    <span class="fragment ep-tick" data-fragment-index="3"></span>
    <span class="fragment ep-tick" data-fragment-index="4"></span>
    <span class="fragment ep-tick" data-fragment-index="5"></span>
    <span class="fragment ep-tick" data-fragment-index="6"></span>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Enigma de papier de Michael C. Koss (2003), simulée exactement (rotors I, II, III, réflecteur B,
    pas du rotor de droite avant chaque lettre, encoches Q, E, V et double pas du rotor central,
    sans tableau de connexions ni anneaux). Clic 1 : la clé, rotors I-II-III et positions M C K.
    Clic 2 : on tape E, le rotor de droite avance (K → L), E traverse trois substitutions, le
    réflecteur, puis les trois substitutions inverses : Q, comme indiqué sur le papier. Clics 3 à 5
    : on tape encore E, trois fois, le rotor avance à chaque fois et la lettre obtenue change :
    chiffrement polyalphabétique, la rotation permute le câblage à chaque lettre. Clic 6 : on repart
    de M C K et on tape le message exemple du papier QMJIDO MZWZJFJR : ENIGMA REVEALED. Même clé
    pour chiffrer et déchiffrer ; le réflecteur interdit qu'une lettre se chiffre en elle-même, ce
    qui a aidé les cryptanalystes de Bletchley Park. Distribuer les Enigma papier pour jouer
    (planche suivante).
  </aside>
</section>
`,Ce=`<section class="pl hv-fig">
  <img
    class="fg-banner"
    src="./imitation.webp"
    alt="The Imitation Game : Alan Turing devant les tambours de la Bombe"
  />
  <div class="fg-title">&lt;Crypto-Story&gt;</div>
  <div class="fg-film">The Imitation Game · 2014</div>
  <blockquote class="fg-quote">
    <p>
      Feindre d'ignorer ce qu'on sait,<br />
      de savoir tout ce qu'on ignore, …<br />
      avoir souvent pour grand secret<br />
      de cacher qu'il n'y en a point, …
    </p>
    <cite>Beaumarchais · Le Mariage de Figaro (1778)</cite>
  </blockquote>
  <div class="fg-box">Savoir réagir après avoir cassé le code de son adversaire</div>
  <div class="foot"></div>
  <aside class="notes">
    Turing et Bletchley Park : casser Enigma ne suffit pas, encore faut-il ne pas le montrer à
    l'adversaire (feindre d'ignorer ce qu'on sait).
  </aside>
</section>
`,we=`<section class="pl hv-ker">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Crypto symétrique moderne · Auguste Kerckhoffs</div>
        <h2>Principes de Kerckhoffs · 1883</h2>
      </div>
    </div>

    <div class="kh-body">
      <div class="kh-left">
        <ol class="kh-princ">
          <li>
            Il faut qu'il n'exige <b>pas le secret</b>, et qu'il puisse sans inconvénient tomber
            entre les mains de l'ennemi.
          </li>
          <li>
            La <b>clef</b> doit pouvoir <b>en être communiquée</b> et retenue sans le secours de
            notes écrites, et être changée ou modifiée au gré des correspondants.
          </li>
        </ol>
        <blockquote class="kh-concl fragment" data-fragment-index="2">
          Ce qui est gardé secret doit être ce qui est le moins coûteux à changer si le secret
          s'avérait divulgué.
        </blockquote>
      </div>

      <div class="kh-right">
        <div class="kh-box">
          <p>Notion de <b>clé secrète</b></p>
          <p>Algorithme connu de tous :</p>
          <ul>
            <li>Substitution</li>
            <li>Permutation</li>
          </ul>
          <p>mais basées sur la clé secrète</p>
        </div>
        <figure class="kh-fig">
          <img
            src="./chiffre.webp"
            alt="Table d'un chiffre ancien : symboles substitués aux lettres et aux mots"
          />
          <svg
            class="kh-x fragment"
            data-fragment-index="1"
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M22 6 L78 54 M78 6 L22 54" />
          </svg>
          <figcaption>un chiffre dont la sécurité repose sur le secret de l'algorithme</figcaption>
        </figure>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Clic 1 : on barre le « chiffre » dont la sécurité repose sur le secret de sa table. Clic 2 : la
    conséquence : ce qu'on garde secret, c'est la clé, le moins coûteux à changer.
  </aside>
</section>
`,Te=`<section class="pl hv-otp">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Chiffrement symétrique · cryptosystème parfait : « incassable »</div>
        <h2>Le masque jetable · One Time Pad · 1917</h2>
      </div>
      <img class="op-tel" src="./telephone.webp" alt="Téléphone rouge" />
    </div>

    <div class="op-body">
      <ul class="op-rules">
        <li>
          La clé doit être une suite de caractères <b>au moins aussi longue</b> que le message à
          chiffrer
        </li>
        <li>Les caractères composant la clé doivent être choisis de façon <b>aléatoire</b></li>
        <li>
          Chaque clé, ou « masque », ne doit être utilisée <b>qu'une seule fois</b> · d'où le nom de
          masque jetable
        </li>
      </ul>

      <div class="op-calc" data-clair="HOWAREYOU" data-masque="13 2 1 19 25 16 0 17 23">
        <div class="op-ttl">One-Time Pad <small>A = 0 … Z = 25 · addition modulo 26</small></div>
        <table class="op-tab"></table>
        <p class="op-leg">
          <b>en bleu</b> : somme ≥ 26, on retranche 26 (42 → 16, 31 → 5, 43 → 17)
        </p>
      </div>
    </div>

    <span class="fragment op-tick" data-fragment-index="1"></span>
    <div class="foot"></div>
  </div>
  <aside class="notes">
    Clic : le calcul, colonne par colonne. H (7) + N (13) = 20 → U … R (17) + Z (25) = 42 → 42 mod
    26 = 16 → Q. Shannon (1949) : le masque jetable est parfaitement sûr si ses trois règles sont
    respectées. Le « téléphone rouge » Washington-Moscou l'a utilisé.
  </aside>
</section>
`,Ee=`<section class="pl hv-otx">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Chiffrement symétrique · cryptosystème parfait</div>
        <h2>Masque jetable ou One Time Pad : exemples</h2>
      </div>
    </div>

    <div class="ox-alpha">
      <div class="ox-at">
        Alphabet de 37 symboles · <b>addition modulo 37</b> · l'espace (<span class="ox-sp">␣</span
        >) est chiffré aussi
      </div>
      <div class="ox-grid"></div>
    </div>

    <div class="ox-ex">
      <div class="ox-card" data-clair="RDV AU LOUVRE A 15H" data-masque="UJZDE8GXD6NCF10EPF9">
        <h3>Exemple 1 <small>&nbsp;</small></h3>
      </div>
      <div class="ox-card" data-clair="RDV AU LOUVRE A 16H" data-masque="K3M2TQH5Z8L0B7N1C4D">
        <h3>Exemple 2 <small>heure différente + masque différent</small></h3>
      </div>
      <div class="ox-card" data-clair="BONJOUR PARIS 2025" data-masque="ZYMLOPIFQY78F5M0NX">
        <h3>Exemple 3 <small>clair totalement différent</small></h3>
      </div>
    </div>

    <p class="ox-moral fragment" data-fragment-index="3">
      15H → 16H : un seul caractère change, et pourtant <b>rien ne relie les chiffrés</b>.
      <strong>Sans le masque, tout clair de même longueur est également possible.</strong>
    </p>

    <span class="fragment ox-tick" data-fragment-index="1"></span>
    <span class="fragment ox-tick" data-fragment-index="2"></span>
    <span class="fragment ox-tick" data-fragment-index="3"></span>
    <div class="foot"></div>
  </div>
  <aside class="notes">
    Un clic par exemple : le chiffré est calculé en direct (vérifié identique au pptx). Exemples 1
    et 2 : une seule lettre change dans le clair, mais avec des masques différents rien ne permet de
    relier les chiffrés. Sans le masque, tous les clairs de même longueur sont également possibles.
  </aside>
</section>
`,De=`<section class="pl hv-pen">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Atelier · 6 Enigma papier</div>
        <h2>Paper Enigma Machine</h2>
      </div>
    </div>
    <div class="pe-body">
      <div class="pe-left">
        <figure class="pe-photo">
          <img src="./enigma.webp" alt="Machine Enigma à trois rotors" />
          <figcaption>Enigma, trois rotors</figcaption>
        </figure>
        <p class="pe-lead">Jouer pour comprendre :</p>
        <ul class="pe-list">
          <li>la <b>clé</b> (ici <code>MCK</code>)</li>
          <li>les <b>permutations</b></li>
          <li>les <b>substitutions</b></li>
        </ul>
      </div>
      <figure class="pe-scan">
        <img
          src="./paper-enigma.webp"
          alt="Paper Enigma Machine : réflecteur, trois rotors et mode d'emploi"
        />
        <figcaption>© 2003, Michael C. Koss</figcaption>
      </figure>
    </div>
    <div class="foot"></div>
  </div>
  <aside class="notes">
    Distribution des 6 Enigma papier en couleur pour jouer et comprendre les notions de : clé (ici
    MCK), permutations, substitutions.
  </aside>
</section>
`,Oe=`<section class="pl hv-story">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Cryptographie n°0 · Histoire</div>
        <h2>Very Short Crypto Story</h2>
      </div>
    </div>

    <ol class="st-rows">
      <li class="st-row st-sym">
        <span class="st-lab"
          ><b class="st-n">3000</b> ans de <b>crypto.</b> <b class="st-k">symétrique</b></span
        >
        <span class="st-box"
          >recettes militaro-diplomatiques<br />de confusion et de diffusion</span
        >
        <span class="st-com"
          ><b>Confusion</b> et <b>Diffusion</b><br /><i>« tant bien que mal »</i><br />de César à
          Enigma</span
        >
      </li>
      <li class="st-row st-mod">
        <span class="st-lab"
          ><b class="st-n">100</b> ans de <b>crypto.</b> <b class="st-k">moderne</b></span
        >
        <span class="st-box">de Kerckhoffs …<br />au crypto-système incassable</span>
        <span class="st-com st-left"
          >1. Principes de Kerckhoffs · 1883<br />2. One Time Pad · 1917</span
        >
        <span class="st-badges">
          <span class="st-b"
            ><span class="prim" data-prim="aes" data-h="38"></span><em>1997</em></span
          >
          <span class="st-b"
            ><span class="prim" data-prim="sha" data-h="38"></span><em>1993</em></span
          >
          <span class="st-b"><span class="prim" data-prim="prng" data-h="38"></span></span>
        </span>
      </li>
      <li class="st-row st-asy">
        <span class="st-sep" aria-hidden="true"></span>
        <span class="st-lab"
          ><b class="st-n">50</b> ans de <b>crypto.</b> <b class="st-k">asymétrique</b></span
        >
        <span class="st-box">LA véritable révolution</span>
        <span class="st-com"
          >Résout la difficulté de <b>l'échange</b> de clé<br />+<br />Permet l'usage du principe de
          <b>Signature</b></span
        >
        <span class="st-badges">
          <span class="st-b"
            ><span class="prim" data-prim="dh" data-h="38"></span><em>1976</em></span
          >
          <span class="st-b"
            ><span class="prim" data-prim="rsa" data-h="38"></span><em>1977</em></span
          >
        </span>
      </li>
      <li class="st-row st-pqc">
        <span class="st-lab"
          ><b class="st-n">20</b> ans de <b>crypto.</b> <b class="st-k">post-quantique</b></span
        >
        <span class="st-box">révolution ? (ou pas)</span>
        <span class="st-com">standards NIST 2024<br />ML-KEM · ML-DSA · SLH-DSA</span>
        <span class="st-badges">
          <span class="st-b st-pq"
            ><span class="st-pqb">CRYSTALS</span><i class="duo" data-icon="key"></i
            ><i class="duo" data-icon="key"></i
          ></span>
          <span class="st-b st-pq"
            ><span class="st-pqb">SPHINCS+</span><i class="duo" data-icon="key"></i
            ><i class="duo" data-icon="key"></i
          ></span>
          <span class="st-b st-pq"
            ><span class="st-pqb">FALCON</span><i class="duo" data-icon="key"></i
            ><i class="duo" data-icon="key"></i
          ></span>
        </span>
      </li>
    </ol>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Une période par clic. 4 périodes : 3000 ans de confusion/diffusion (substitution/permutation) ;
    100 ans de rationalisation des 3000 ans précédents (clé, OTP puis AES avec un peu de math) ; 50
    ans de révolution asymétrique ; 20 ans de post-quantique ? La substitution (un symbole du texte
    clair est remplacé par un autre) fut une première approche pour introduire la confusion (dans
    les chiffrements modernes, on utilise à cet effet des boîtes S). Quant à la
    permutation/transposition, elle augmente la diffusion. Les chiffrements utilisent pour cela des
    boîtes P. D'autres mécanismes peuvent être déployés, comme des transformations linéaires (par
    exemple dans Rijndael). Un chiffrement par produit combine des opérations pour garantir à la
    fois la diffusion et la confusion.
  </aside>
</section>
`,ke=`<section class="pl hv-story hv-dates">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Cryptographie n°0 · Histoire · 4 périodes</div>
        <h2>Very Short Crypto Story</h2>
      </div>
    </div>

    <div class="sd-main">
      <ol class="st-rows">
        <li class="st-row st-sym">
          <span class="st-lab"
            ><b class="st-n">3000</b> ans de <b>crypto.</b> <b class="st-k">symétrique</b></span
          >
          <span class="st-box">recettes militaro-diplomatiques de confusion et de diffusion</span>
        </li>
        <li class="st-row st-mod">
          <span class="st-lab"
            ><b class="st-n">100</b> ans de <b>crypto.</b> <b class="st-k">moderne</b></span
          >
          <span class="st-box">de Kerckhoffs … au crypto-système incassable</span>
        </li>
        <li class="st-row st-asy">
          <span class="st-lab"
            ><b class="st-n">50</b> ans de <b>crypto.</b> <b class="st-k">asymétrique</b></span
          >
          <span class="st-box">LA véritable révolution</span>
        </li>
        <li class="st-row st-pqc">
          <span class="st-lab"
            ><b class="st-n">20</b> ans de <b>crypto.</b> <b class="st-k">quantique</b></span
          >
          <span class="st-box">révolution ? (ou pas)</span>
        </li>
        <li class="sd-people">
          <figure>
            <img src="./diffie-hellman.webp" alt="Whitfield Diffie et Martin Hellman" />
            <figcaption>Whitfield Diffie · Martin Hellman</figcaption>
            <span class="sd-badge"
              ><span class="prim" data-prim="dh" data-h="36"></span><em>1976</em></span
            >
          </figure>
          <figure>
            <img src="./rsa.webp" alt="Ron Rivest, Adi Shamir et Leonard Adleman" />
            <figcaption>Ron Rivest · Adi Shamir · Leonard Adleman</figcaption>
            <span class="sd-badge"
              ><span class="prim" data-prim="rsa" data-h="36"></span><em>1977</em></span
            >
          </figure>
        </li>
      </ol>

      <p class="sd-src">
        Les dates clefs de la cryptographie : fr.wikipedia.org/wiki/Histoire_de_la_cryptologie
      </p>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    4 périodes : 3000 ans de confusion/diffusion (substitution/permutation) ; 100 ans de
    rationalisation des 3000 ans précédents (clé, OTP puis AES avec un peu de math) ; 50 ans de
    révolution asymétrique ; 20 ans de quantique ? Lien :
    https://fr.wikipedia.org/wiki/Histoire_de_la_cryptologie
  </aside>
</section>
`,Ae=`<section class="pl hv-voc">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Cryptographie n°0 · Les mots justes</div>
        <h2>Vocabulaire cryptographique</h2>
      </div>
    </div>

    <div class="vc-body">
      <div class="vc-left">
        <ul class="vc-list">
          <li>
            <b>Cryptologie</b>
            <span class="vc-etym">science (λόγος) du secret (κρυπτός)</span>
            <ul>
              <li>cryptographie</li>
              <li>cryptanalyse</li>
            </ul>
          </li>
          <li class="vc-dont">« Do not implement crypto yourself »</li>
          <li>Le bureau du chiffre du quai d'Orsay</li>
          <li>« <i>crypter</i> » est un néologisme</li>
        </ul>
        <ul class="vc-list vc-ssi">
          <li>Cybersécurité = sécurité informatique = SSI</li>
          <li>SSI : sécurité des systèmes d'information</li>
          <li>C'est <s>crypté</s> chiffré donc c'est sécurisé … ne veut rien dire en SSI.</li>
        </ul>

        <table class="vc-tab">
          <thead>
            <tr>
              <th>Algo. de chiffrement</th>
              <th>Avec clé</th>
              <th>Sans clé</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>message</span> clair</td>
              <td>chiffrer</td>
              <td><s>crypter</s></td>
            </tr>
            <tr>
              <td><span>message</span> chiffré</td>
              <td>déchiffrer</td>
              <td>décrypter</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure class="vc-photo">
        <img
          src="./onditchiffrer.webp"
          alt="Autocollants « On dit chiffrer ! » et #onditchiffrer"
        />
        <div class="vc-stamp">
          La cryptologie ne se limite plus aujourd'hui à assurer la confidentialité des secrets
        </div>
      </figure>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    « onditchiffrer » mais savez-vous pourquoi on ne dit pas crypter en français ? (Chiffrer : avec
    la clé. Décrypter : retrouver le clair sans la clé. « Crypter » supposerait chiffrer sans clé :
    cela n'a pas de sens.)
  </aside>
</section>
`,je=`<section class="pl cs">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Les 5 primitives · aide-mémoire</div>
        <h2>Cheat sheet de la cryptographie moderne</h2>
      </div>
    </div>

    <div class="cs-grid">
      <article class="cs-card fragment fade-up" data-k="aes" data-fragment-index="1">
        <header>
          <span class="prim" data-prim="aes" data-h="30"></span>
          <h3>Chiffrement symétrique</h3>
        </header>
        <p><b>Principe</b> même clé pour chiffrer et déchiffrer.</p>
        <p>
          <b>Propriétés</b> rapidité ; sécurité fondée sur la confidentialité de la clé ; résistance
          aux attaques différentielles / linéaires.
        </p>
        <ul>
          <li>données en transit ou au repos (TLS, VPN, disque chiffré)</li>
          <li>chiffrement authentifié (AES-GCM, ChaCha20-Poly1305)</li>
          <li>protection de sessions, de bases de données</li>
        </ul>
        <p><b>Exemples</b> AES, ChaCha20, Camellia, Twofish</p>
        <p><b>Modes</b> <s>ECB</s> (à proscrire), CBC, CTR, GCM</p>
        <p class="cs-key">Confidentialité</p>
      </article>

      <article class="cs-card fragment fade-up" data-k="rsa" data-fragment-index="2">
        <header>
          <span class="prim" data-prim="rsa" data-h="30"></span>
          <h3>Chiffrement asymétrique <small>RSA / EC</small></h3>
        </header>
        <p>
          <b>Principe</b> clé publique pour chiffrer / vérifier, clé privée pour déchiffrer /
          signer.
        </p>
        <p>
          <b>Propriétés</b> authentification, non-répudiation ; lenteur (sert à échanger des clés ou
          à signer).
        </p>
        <ul>
          <li>échange de clés (RSA, ECC, KEM post-quantique)</li>
          <li>signature (RSA, ECDSA, EdDSA, Dilithium)</li>
          <li>authentification (certificats X.509, OpenID, S/MIME)</li>
        </ul>
        <p><b>Exemples</b> RSA, DSA, ECDSA, Ed25519, Dilithium, Kyber</p>
        <p class="cs-key"><s>Confidentialité</s> + Authenticité + Non-répudiation</p>
      </article>

      <article class="cs-card fragment fade-up" data-k="sha" data-fragment-index="3">
        <header>
          <span class="prim" data-prim="sha" data-h="30"></span>
          <h3>Fonctions de hachage</h3>
        </header>
        <p><b>Principe</b> fonction à sens unique produisant un condensat de taille fixe.</p>
        <p><b>Propriétés</b> non-inversibilité ; résistance aux collisions et aux préimages.</p>
        <ul>
          <li>empreintes numériques (SHA-256, SHA-3)</li>
          <li>signatures (hachage avant signature)</li>
          <li>mots de passe (PBKDF2, bcrypt, Argon2)</li>
          <li>intégrité (arbres de Merkle, blockchain)</li>
        </ul>
        <p><b>Exemples</b> SHA-2, SHA-3, BLAKE2, BLAKE3</p>
        <p class="cs-key">Intégrité</p>
      </article>

      <article class="cs-card fragment fade-up" data-k="dh" data-fragment-index="4">
        <header>
          <span class="prim" data-prim="dh" data-h="30"></span>
          <h3>Établissement de clé</h3>
        </header>
        <p><b>Principe</b> accord sur un secret commun (Diffie-Hellman, ECDH, ECDHE).</p>
        <p>
          <b>Propriétés</b> confidentialité, éphémérité, protection contre l'interception passive.
        </p>
        <ul>
          <li>TLS, SSH, Signal (X25519, X448)</li>
          <li>messageries sécurisées (ratchets)</li>
          <li>sessions symétriques temporaires</li>
        </ul>
        <p><b>Exemples</b> DH, ECDH, X25519, Kyber (KEM post-quantique)</p>
        <p class="cs-key">Confidentialité partagée</p>
      </article>

      <article class="cs-card fragment fade-up" data-k="prng" data-fragment-index="5">
        <header>
          <span class="prim" data-prim="prng" data-h="30"></span>
          <h3>Générateurs d'aléa <small>PRNG ≠ RNG</small></h3>
        </header>
        <p><b>Principe</b> production de bits imprévisibles et uniformes.</p>
        <p><b>Propriétés</b> imprédictibilité, entropie, résistance aux biais.</p>
        <ul>
          <li>génération de clés (symétriques, asymétriques)</li>
          <li>IV, nonces, sels, défis de protocole</li>
          <li>schémas probabilistes (RSA-OAEP, signatures)</li>
        </ul>
        <p><b>Exemples</b> Fortuna, /dev/urandom, HMAC-DRBG, ChaCha20-DRBG</p>
        <p class="cs-key">Imprévisibilité</p>
      </article>

      <div class="cs-rest fragment fade-in" data-fragment-index="6">
        <p>Le reste n'est<br />qu'<b>assemblage</b></p>
        <div class="cs-mini">
          <span class="prim" data-prim="aes" data-h="26"></span
          ><span class="prim" data-prim="rsa" data-h="26"></span
          ><span class="prim" data-prim="sha" data-h="26"></span
          ><span class="prim" data-prim="dh" data-h="26"></span
          ><span class="prim" data-prim="prng" data-h="26"></span>
        </div>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    AES, RSA et les familles SHA sont des implémentations importantes. DH et PRNG sont des acronymes
    génériques (utilisés pour ce cours) mais ne correspondent pas à une implémentation réelle du
    principe cryptographique moderne sous-jacent. Un clic par primitive, puis « le reste n'est
    qu'assemblage ».
  </aside>
</section>
`,Me=`<section class="pl cq">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Introduction · trois notions à ne pas confondre</div>
        <h2>Quantique, quantique… et post-quantique</h2>
      </div>
    </div>

    <div class="cq-grid">
      <div class="cq-col">
        <h3>Calcul<br />quantique</h3>
        <img src="./calcul.webp" alt="Ordinateur quantique (cryostat)" />
      </div>
      <span class="cq-ne" aria-label="différent de">≠</span>
      <div class="cq-col">
        <h3>Cryptographie<br />quantique</h3>
        <img src="./crypto-quantique.webp" alt="Banc optique de distribution quantique de clés" />
      </div>
      <span class="cq-ne" aria-label="différent de">≠</span>
      <div class="cq-col cq-pq">
        <h3>CPQ <small>Cryptographie post-quantique</small></h3>
        <div class="cq-keys">
          <i class="duo cq-k1" data-icon="key"></i><i class="duo cq-k2" data-icon="key"></i>
        </div>
        <table class="cq-tab">
          <thead>
            <tr>
              <th>Catégorie</th>
              <th>Nom officiel</th>
              <th>Origine</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>KEM</td>
              <td>ML-KEM</td>
              <td>CRYSTALS-Kyber</td>
            </tr>
            <tr>
              <td></td>
              <td>HQC</td>
              <td>Hamming Quasi-Cyclic</td>
            </tr>
            <tr class="cq-sep">
              <td>Signatures</td>
              <td>ML-DSA</td>
              <td>CRYSTALS-Dilithium</td>
            </tr>
            <tr>
              <td></td>
              <td>SLH-DSA</td>
              <td>SPHINCS⁺</td>
            </tr>
            <tr>
              <td></td>
              <td>FN-DSA</td>
              <td>FALCON</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Trois notions à ne pas confondre : le calcul quantique (la menace), la cryptographie quantique
    (distribution quantique de clés, de la physique) et la cryptographie post-quantique (des
    algorithmes classiques résistants au calcul quantique, normalisés par le NIST).
  </aside>
</section>
`,Ne=`<section class="shot">
  <img
    class="shot-img"
    src="./films.webp"
    alt="Films et séries : Tehran, Zero Days, Snowden, Citizenfour, WarGames, Le Bureau des légendes, Mr. Robot, TV5Monde, Imitation Game"
  />
  <aside class="notes">
    Vous devez voir Zero Days ! Tehran, Snowden, Citizenfour, WarGames, Le Bureau des légendes, Mr.
    Robot, l'attaque de TV5Monde, Imitation Game.
  </aside>
</section>
`,Pe=`<section class="pl ob">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Introduction à la cryptographie moderne · ce qu'il faut retenir</div>
        <h2>Les 3 objectifs</h2>
      </div>
    </div>

    <div class="ob-grid">
      <ol class="ob-list">
        <li class="ob-item">
          <span class="ob-n">1</span>
          <div>
            <p>La cryptographie moderne, c'est <b>5 primitives</b> à connaître</p>
            <div class="ob-prims">
              <span class="prim" data-prim="aes" data-h="34"></span>
              <span class="prim" data-prim="rsa" data-h="34"></span>
              <span class="prim" data-prim="sha" data-h="34"></span>
              <span class="prim" data-prim="dh" data-h="34"></span>
              <span class="prim" data-prim="prng" data-h="34"></span>
            </div>
          </div>
        </li>
        <li class="ob-item">
          <span class="ob-n">2</span>
          <p>
            Comprendre l'aspect « <i>révolutionnaire</i> » de la cryptographie
            <b class="ob-asym">asymétrique</b>
          </p>
        </li>
        <li class="ob-item">
          <span class="ob-n">3</span>
          <div>
            <p>En déduire le concept de <b class="ob-sig">signature</b> cryptographique…</p>
            <p class="ob-auth">… et d'<b>authentification</b></p>
          </div>
        </li>
      </ol>
      <figure class="ob-photo">
        <img src="./tableau.webp" alt="Étudiante écrivant un chiffrement au tableau" />
      </figure>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Voilà ce que vous devez essayer de retenir pour ce cours d'introduction à la cryptographie
    moderne.
  </aside>
</section>
`,Fe=`<section class="pl se">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Introduction · cryptographie moderne ou pas</div>
      </div>
    </div>

    <div class="se-stage">
      <div class="se-q1">
        <i class="duo se-spy" data-icon="user-secret"></i>
        <blockquote>
          <span>« Le secret… c'est qu'il y a<i class="se-dots"> …</i></span
          ><br /><span class="se-rest">toujours un secret »</span>
        </blockquote>
      </div>
      <svg class="se-arrow" viewBox="0 0 400 420" aria-hidden="true">
        <line x1="20" y1="10" x2="360" y2="380" />
        <polygon points="0,0 -20,46 20,46" transform="translate(372 394) rotate(137)" />
      </svg>
      <p class="se-mid">Cryptographie moderne ou pas</p>
      <div class="se-q2 fragment" data-fragment-index="1">
        <blockquote>« Où est la clé privée ? »</blockquote>
        <i class="duo se-key" data-icon="key"></i>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Cryptographie moderne ou pas : le secret, c'est qu'il y a toujours un secret. En cryptographie
    moderne, la question devient : où est la clé privée ?
  </aside>
</section>
`,Ie=`<section class="pl sg">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Introduction · candidats à voir</div>
        <h2>Offre de stage</h2>
      </div>
      <p class="sg-cloud">
        <b class="sg-xl">excellents</b> stages<br />missions <b class="sg-l">formatrices</b
        ><br />rémunération
        <b class="sg-l">++</b>
      </p>
    </div>

    <div class="sg-grid">
      <ol class="sg-list">
        <li>
          <p>
            <b>Expertise SSI</b> : consulting, analyse technique Cyber/SSI/Crypto, lecture/rédaction
            de cibles de sécurité (labo CESTI), lecture de spécifications (passeport biométrique,
            carte d'identité électronique), notes techniques.
          </p>
          <p class="sg-obj">
            <span>Objectif n°1</span>devenir <b>Consultant(e) Expert Cyber</b>, à terme Auditeur MIE
            / PVID / eIDAS / 27K1
          </p>
        </li>
        <li>
          <p>
            <b>Code</b> : développement d'outils internes et commerciaux Stelau (IdCheck, IdFod,
            reBop, Lib CEV et VDS Verify).
          </p>
          <p class="sg-obj">
            <span>Objectif n°2</span>connaître et <b>maîtriser</b> l'assemblage des primitives
            cryptographiques de cybersécurité
          </p>
        </li>
        <li>
          <p>
            <b>Conception</b> : participation à l'élaboration et au maintien des cours EPITA et EGE
            (renouvellement et adaptation des TP, TD et jeux cryptographiques).
          </p>
          <p class="sg-obj"><span>Objectif n°3</span><b>Apprendre et enseigner</b></p>
        </li>
      </ol>
      <div class="sg-side">
        <img class="sg-fi" src="./france-identite.webp" alt="Application France Identité" />
        <img class="sg-team" src="./equipe.webp" alt="" />
      </div>
    </div>

    <div class="sg-strip">
      <img src="./p47.webp" alt="" /><img src="./p48.webp" alt="" /><img
        src="./p49.webp"
        alt=""
      /><img src="./p50.webp" alt="" /><img src="./p51.webp" alt="" /><img
        src="./p52.webp"
        alt=""
      /><img src="./p53.webp" alt="" />
    </div>

    <div class="foot"></div>
  </div>
</section>
`,Le=`<section class="pl st">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Introduction · les visages derrière les projets</div>
        <h2>Cabinet d'experts cybersécurité</h2>
      </div>
      <img class="st-logo" src="./stelau.webp" alt="Stelau" />
    </div>

    <ol class="st-grid">
      <li class="st-p">
        <span class="st-lab"><b>STELAU</b> / 01</span>
        <span class="st-ph"><img src="./nicolas.webp" alt="Nicolas Chalanset" /></span>
        <strong>Nicolas Chalanset</strong>
        <small>Directeur Expertise</small>
      </li>
      <li class="st-p st-me">
        <span class="st-lab"><b>STELAU</b> / 02</span>
        <span class="st-ph"><img src="./benoit.webp" alt="Benoit Leger-Derville" /></span>
        <strong>Benoit Leger-Derville</strong>
        <small>Directeur Conseil</small>
      </li>
      <li class="st-p">
        <span class="st-lab"><b>STELAU</b> / 03</span>
        <span class="st-ph"><img src="./quentin.webp" alt="Quentin Ropele" /></span>
        <strong>Quentin Ropele</strong>
        <small>Ingénieur cybersécurité</small>
      </li>
      <li class="st-p">
        <span class="st-lab"><b>STELAU</b> / 04</span>
        <span class="st-ph"><img src="./loic.webp" alt="Loïc Perry" /></span>
        <strong>Loïc Perry</strong>
        <small>Ingénieur cybersécurité</small>
      </li>
      <li class="st-p">
        <span class="st-lab"><b>STELAU</b> / 05</span>
        <span class="st-ph"><img src="./paul.webp" alt="Paul Chabas" /></span>
        <strong>Paul Chabas</strong>
        <small>Ingénieur cybersécurité</small>
      </li>
      <li class="st-p">
        <span class="st-lab"><b>STELAU</b> / 06</span>
        <span class="st-ph"><img src="./hector.webp" alt="Hector Colin" /></span>
        <strong>Hector Colin</strong>
        <small>Ingénieur cybersécurité</small>
      </li>
      <li class="st-p">
        <span class="st-lab"><b>STELAU</b> / 07</span>
        <span class="st-ph"><img src="./julien.webp" alt="Julien Erhard" /></span>
        <strong>Julien Erhard</strong>
        <small>Ingénieur cybersécurité</small>
      </li>
      <li class="st-p">
        <span class="st-lab"><b>STELAU</b> / 08</span>
        <span class="st-ph"><img src="./lucas.webp" alt="Lucas Kotevski" /></span>
        <strong>Lucas Kotevski</strong>
        <small>Ingénieur cybersécurité</small>
      </li>
      <li class="st-p">
        <span class="st-lab"><b>STELAU</b> / 09</span>
        <span class="st-ph"><img src="./kilian.webp" alt="Kilian Hardy" /></span>
        <strong>Kilian Hardy</strong>
        <small>Ingénieur cybersécurité</small>
      </li>
    </ol>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Experts Stelau Conseil, éditeur de www.rebop.io. Loïc, Quentin et Romain nous aideront durant
    les ateliers/jeux cryptographiques. Équipe et fonctions : stelau.com/a-propos.
  </aside>
</section>
`,Re=`<section class="pl vf">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Introduction · Ingénieur(e) · IA &amp; Cyber</div>
        <h2>Voilà… c'est fini !</h2>
      </div>
    </div>

    <div class="vf-rows">
      <div class="vf-row vf-ing">
        <div class="vf-txt">
          <h3>Ingénieur(e)s</h3>
          <ul>
            <li>scientifiques</li>
            <li>design</li>
          </ul>
        </div>
        <div class="vf-ico">
          <img src="./calques.svg" alt="" /><img src="./bezier.svg" alt="" /><img
            src="./angle.svg"
            alt=""
          /><img src="./equerre.svg" alt="" /><img class="vf-big" src="./alice.svg" alt="" /><img
            class="vf-big"
            src="./bob.svg"
            alt=""
          />
        </div>
      </div>
      <div class="vf-row vf-code">
        <div class="vf-txt">
          <h3>Code</h3>
          <ul>
            <li>préhistoire</li>
            <li>tout à inventer</li>
          </ul>
        </div>
        <div class="vf-ico">
          <img src="./terminal.svg" alt="" /><img src="./branche.svg" alt="" /><img
            src="./fusion.svg"
            alt=""
          /><img src="./fichier-binaire.svg" alt="" />
        </div>
      </div>
      <div class="vf-row vf-stage">
        <div class="vf-txt">
          <h3>Stage</h3>
          <ul>
            <li>pas très grave</li>
            <li>management</li>
          </ul>
          <p class="vf-note">1<sup>re</sup> page du rapport le 1<sup>er</sup> jour + répétitions</p>
        </div>
        <div class="vf-ico">
          <img src="./espion.svg" alt="" /><img src="./robot.svg" alt="" /><img
            src="./medecin.svg"
            alt=""
          /><img src="./astronaute.svg" alt="" /><img src="./chef.svg" alt="" /><img
            src="./etudiante.svg"
            alt=""
          /><img src="./casque.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Ingénieur(e)s : scientifiques et design. Code : on est encore à la préhistoire, tout est à
    inventer. Stage : pas très grave ; le management compte ; écrire la 1re page du rapport dès le
    1er jour, et répéter.
  </aside>
</section>
`,ze=`<section class="pl vd">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Introduction · cryptographie moderne</div>
        <h2>Les vraies difficultés de la cryptographie moderne</h2>
      </div>
    </div>

    <div class="vd-grid">
      <ol class="vd-list">
        <li class="vd-it vd-th">
          <h3><span>1.</span> <b>THÉORIE</b> : Cryptologie</h3>
          <p>failles théoriques = <em>mathématiques</em></p>
          <p>cryptologue est un métier</p>
        </li>
        <li class="vd-it vd-co">
          <h3><span>2.</span> <b>CODE</b> : Implémentations</h3>
          <p>erreurs / failles / vuln. = <em>informatique</em></p>
          <p class="vd-q">« Do not implement cryptography yourself ! »</p>
        </li>
        <li class="vd-it vd-ux">
          <h3><span>3.</span> <b>UX</b> : Usages</h3>
          <p>mauvais usages = <em>ignorance / pusillanimité</em></p>
          <p>bons usages = <em>formation</em></p>
        </li>
      </ol>
      <div class="vd-arrows" aria-hidden="true">
        <i class="vd-a vd-a1"></i><i class="vd-a vd-a2"></i><i class="vd-a vd-a3"></i>
      </div>
      <div class="vd-pics">
        <img src="./v56.webp" alt="" />
        <div class="vd-pair"><img src="./v60.webp" alt="" /><img src="./v59.webp" alt="" /></div>
        <img src="./v57.webp" alt="" />
        <img src="./v58.webp" alt="" />
      </div>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    ATTENTION : « Do not implement cryptography yourself ! » Never. UX : usages — mauvais usages =
    ne pas vérifier, fatigue, coûts, R&amp;D, docs, etc. Les flèches : chaque difficulté englobe la
    précédente, du mathématicien à l'utilisateur.
  </aside>
</section>
`,Be=`<section class="pl nt-co">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Notions · ne pas confondre</div>
        <h2>Codage, stéganographie, obfuscation, chiffrement</h2>
      </div>
    </div>

    <div class="co-grid">
      <article class="co-card fragment">
        <h3>Codage</h3>
        <p class="co-def">Conversion de données pour compatibilité, efficacité ou facilité.</p>
        <div class="co-ex">
          <span class="co-k">Texte</span><code class="co-clair">"Hello, World!"</code>
          <span class="co-k">Base64</span><code class="co-out co-b64"></code>
        </div>
        <p class="co-note">Réversible par tous : aucune clé.</p>
      </article>

      <article class="co-card fragment">
        <h3>Stéganographie</h3>
        <p class="co-def">Dissimulation d'informations dans des éléments usuels.</p>
        <div class="co-ex">
          <span class="co-k">Texte</span><code class="co-clair">"Hello, World!"</code>
          <span class="co-k">caché dans l'image</span>
        </div>
        <img
          class="co-steg"
          src="./stegano.webp"
          alt="Une photo de fleur et, à droite, les bits de poids faible qui révèlent le message dissimulé"
        />
        <p class="co-note">Secret… tant qu'on ne sait pas où chercher.</p>
      </article>

      <article class="co-card fragment">
        <h3>Obfuscation</h3>
        <p class="co-def">Rendre le code source ou les données difficiles à comprendre.</p>
        <div class="co-ex">
          <span class="co-k">Commande</span
          ><code class="co-clair co-cmd">console.log("Hello, World!")</code>
          <span class="co-k">Obfusquée</span>
          <code class="co-obf"
            >eval(function(p,a,c,k,e,d){e=function(c){return(c&lt;a?'':e(parseInt(c/a)))+((c=c%a)&gt;35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return
            d[e]}];e=function(){return'\\\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new
            RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c])}}return p}('0.1("2,
            3!")',4,4,'console|log|Hello|World'.split('|'),0,{}))</code
          >
        </div>
        <p class="co-note">Ralentit la rétro-ingénierie, ne l'empêche pas.</p>
      </article>

      <article class="co-card fragment">
        <h3>Chiffrement <span class="prim" data-prim="aes" data-h="26"></span></h3>
        <p class="co-def">Transformation de données en format illisible pour la confidentialité.</p>
        <div class="co-ex">
          <span class="co-k">Texte clair</span><code class="co-clair">"Hello, World!"</code>
          <span class="co-k">Clé (128 bits, tirée à l'instant)</span><code class="co-key"></code>
          <span class="co-k">Chiffré AES-GCM (Base64)</span><code class="co-out co-ct"></code>
        </div>
        <p class="co-note">Sans la clé, illisible.</p>
      </article>
    </div>

    <p class="co-warn fragment">
      Un codage n'est pas un chiffrement : seul le chiffrement repose sur une <b>clé secrète</b>.
    </p>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Attention : un codage (ou encodage) n'est pas un système de chiffrement. Le codage est la
    conversion des données d'un format à un autre pour assurer la compatibilité et l'efficacité. La
    stéganographie consiste à dissimuler des informations secrètes dans des objets apparemment
    innocents. Le chiffrement est la conversion des données en un format illisible pour assurer la
    confidentialité. L'obfuscation est le processus de rendre un code source ou des données
    difficiles à comprendre pour décourager la rétro-ingénierie et protéger les secrets. Base64 et
    chiffré AES-GCM calculés en direct (nouvelle clé à chaque passage sur la planche).
  </aside>
</section>
`,Ve=`<section class="pl nt-cm">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Notions · ce que manipule la cryptographie</div>
        <h2>La cryptographie moderne</h2>
      </div>
    </div>

    <div class="cm-hex" aria-label="Bloc de données hexadécimales"></div>
    <div class="cm-tag">Modern<br />Cryptography</div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    La cryptographie ne se contente plus d'assurer la confidentialité des secrets : elle détient
    désormais le pouvoir d'empêcher de cloner des passeports (ou pas), de garantir la solidité
    technique du Bitcoin et de rendre le chiffrement du rançongiciel WannaCry invincible. Mais
    attention, maîtriser ces compétences requiert l'apprentissage des cinq fondamentaux
    cryptographiques de ce cours ! Le temps des vieilles « méthodes » de chiffrement de César, Marie
    Stuart, Vigenère et Enigma est révolu : place à la cryptographie asymétrique et aux assemblages
    maîtrisés. Préparez-vous à plonger dans la magie d'un des piliers de la cybersécurité.
  </aside>
</section>
`,He=`<section class="pl nt-oc">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Notions · représentations des données</div>
        <h2>Caractères, octets, bits</h2>
      </div>
    </div>

    <div class="oc-stage">
      <div class="oc-hex" aria-label="Bloc de données hexadécimales"></div>
      <div class="oc-loupe" aria-hidden="true"></div>
      <svg class="oc-rays" aria-hidden="true">
        <line />
        <line />
      </svg>

      <div class="oc-zoom">
        <div class="oc-bytes">
          <div class="oc-byte">
            <span class="oc-nib" data-h="9"></span><span class="oc-nib" data-h="A"></span>
          </div>
          <div class="oc-byte">
            <span class="oc-nib" data-h="7"></span><span class="oc-nib" data-h="E"></span>
          </div>
        </div>
        <div class="oc-braces"><span>8 bits = 1 octet</span><span>8 bits = 1 octet</span></div>
      </div>

      <div class="oc-utf">
        <div class="oc-utf-t">UTF-8 : un caractère, un à quatre octets</div>
        <div class="oc-utf-r" data-c="é"></div>
        <div class="oc-utf-r" data-c="🔥"></div>
      </div>

      <div class="oc-band">
        <span class="oc-lab">caractères<small>l'utilisateur</small></span>
        <span class="oc-lab">octets (hexa)<small>l'informaticien</small></span>
        <span class="oc-lab">bits<small>la machine</small></span>
      </div>
    </div>

    <span class="fragment oc-tick" data-fragment-index="1"></span>
    <span class="fragment oc-tick" data-fragment-index="2"></span>
    <span class="fragment oc-tick" data-fragment-index="3"></span>
    <span class="fragment oc-tick" data-fragment-index="4"></span>
    <span class="fragment oc-tick" data-fragment-index="5"></span>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Ce sont des représentations : la machine travaille sur des données binaires. GRAPHIQUE :
    représentation humaine (UX), l'utilisateur final, les caractères, les glyphes. HEXADÉCIMAL :
    représentation de l'informaticien, le concepteur, les octets. BINAIRE : représentation machine,
    l'ordinateur, les bits. Clics : 1 loupe sur 9A 7E · 2 les bits · 3 « Bonjour » · 4 octets puis
    bits · 5 UTF-8 (é, 🔥).
  </aside>
</section>
`,Ue=`<section class="cpa">
  <h2 class="sr-only">Les 5 primitives en action</h2>
  <div
    class="cpa-host"
    role="img"
    aria-label="Les 5 primitives en action : AES, RSA, SHA, DH, PRNG"
  ></div>
  <aside class="notes">
    Les 5 primitives en action, en boucle, avec de vraies valeurs : AES (M → C → M), RSA (clé
    publique pour chiffrer, privée pour déchiffrer), SHA-1 réel, Diffie-Hellman (p = 47, g = 26, a =
    7, b = 41 : secret commun 44), PRNG déterministe (même graine, même suite).
  </aside>
</section>
`,We=`<section class="pl p5">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Fil rouge · à connaître par cœur</div>
        <h2>Les 5 primitives cryptographiques</h2>
      </div>
    </div>

    <ol class="p5-list">
      <li class="p5-row" data-k="aes">
        <span class="p5-fam"
          ><span class="in"><span class="c-aes">Chiffrement symétrique</span></span></span
        >
        <span class="prim" data-prim="aes" data-h="66"></span>
        <span class="p5-acr"
          ><span class="in"><b>A</b>dvanced <b>E</b>ncryption <b>S</b>tandard</span></span
        >
      </li>
      <li class="p5-row" data-k="rsa">
        <span class="p5-fam"
          ><span class="in"
            ><span class="c-priv">Chiffrement</span> <span class="c-pub">asymétrique</span></span
          ></span
        >
        <span class="prim" data-prim="rsa" data-h="66"></span>
        <span class="p5-acr"
          ><span class="in"><b>R</b>ivest · <b>S</b>hamir · <b>A</b>dleman</span></span
        >
      </li>
      <li class="p5-row" data-k="sha">
        <span class="p5-fam"
          ><span class="in"
            ><span class="c-sha">Fonctions de hachage<small>cryptographique</small></span></span
          ></span
        >
        <span class="prim" data-prim="sha" data-h="66"></span>
        <span class="p5-acr"
          ><span class="in"><b>S</b>ecure <b>H</b>ash <b>A</b>lgorithm</span></span
        >
      </li>
      <li class="p5-row" data-k="dh">
        <span class="p5-fam"
          ><span class="in"><span class="c-dh">Établissement de clé</span></span></span
        >
        <span class="prim" data-prim="dh" data-h="66"></span>
        <span class="p5-acr"
          ><span class="in"><b>D</b>iffie – <b>H</b>ellman <small>nom générique</small></span></span
        >
      </li>
      <li class="p5-row" data-k="prng">
        <span class="p5-fam"
          ><span class="in"><span class="c-prng">Générateurs d'aléa</span></span></span
        >
        <span class="prim" data-prim="prng" data-h="66"></span>
        <span class="p5-acr"
          ><span class="in"
            ><b>P</b>seudo-<b>R</b>andom <b>N</b>umber <b>G</b>enerator
            <small>nom générique</small></span
          ></span
        >
      </li>
    </ol>

    <!-- Étapes (› du clicker) : une famille par clic, puis les acronymes développés -->
    <span class="fragment p5-tick" data-fragment-index="1"></span>
    <span class="fragment p5-tick" data-fragment-index="2"></span>
    <span class="fragment p5-tick" data-fragment-index="3"></span>
    <span class="fragment p5-tick" data-fragment-index="4"></span>
    <span class="fragment p5-tick" data-fragment-index="5"></span>
    <span class="fragment p5-tick" data-fragment-index="6"></span>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Planche fil rouge, reprise à chaque séance. À l'arrivée, les cinq badges se posent ; à chaque
    clic, faire dire la famille avant de l'afficher. Dernier clic : les acronymes développés. AES,
    RSA et les familles SHA sont des implémentations importantes. DH et PRNG sont des acronymes
    génériques (utilisés pour ce cours) qui ne désignent pas une implémentation réelle du principe
    cryptographique moderne sous-jacent.
  </aside>
</section>
`,Ge=`<section class="pl tp-at">
  <div class="wrap">
    <div class="pl-head">
      <div>
        <div class="eyebrow">Travaux pratiques · ateliers et jeux</div>
        <h2>Ateliers de cryptographie moderne</h2>
      </div>
    </div>

    <div class="at-grid">
      <article class="at-card">
        <header>
          <span class="at-n">Atelier 1</span>
          <span class="prim" data-prim="dh" data-h="40"></span>
        </header>
        <h3>DH War <small>Enemy in the Middle</small></h3>
        <div class="at-fig">
          <img src="./fiches.webp" alt="Les quatre fiches de l'atelier DH War" />
        </div>
        <p class="at-who"><b>4 groupes</b> de 10 étudiants</p>
      </article>

      <div class="at-sep" aria-hidden="true"></div>

      <article class="at-card">
        <header>
          <span class="at-n">Atelier 2</span>
          <span class="prim" data-prim="rsa" data-h="40"></span>
        </header>
        <h3>Wannacry <small>Nightmare Puzzle</small></h3>
        <div class="at-photo">
          <img src="./puzzle.webp" alt="Le puzzle Wannacry Nightmare : fiches, bougie, café" />
        </div>
        <p class="at-who"><b>4 groupes</b> de 5 étudiants</p>
      </article>
    </div>

    <div class="foot"></div>
  </div>
  <aside class="notes">
    Atelier 1 : DH War, Enemy in the Middle (établissement de clé, attaque de l'homme du milieu), 4
    groupes de 10 étudiants. Atelier 2 : Wannacry Nightmare Puzzle (RSA), 4 groupes de 5 étudiants.
  </aside>
</section>
`,Ke=`/assets/bc-genpkt-DA6CLPNV.webp`,qe=`/assets/kaspersky-DbKxKsJc.webp`,Je=`/assets/masque-aIqgTnZo.webp`,Ye=`data:image/webp;base64,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`,Xe=`/assets/code-jnUc6UoN.webp`,Ze=`data:image/webp;base64,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`,Qe=`/assets/phrack-i0ptIaeX.webp`,$e=`/assets/figure-DMOWoXmn.webp`,et=`/assets/video-ClUfWB2e.webp`,tt=`/assets/hopital-BMZukQ2z.webp`,nt=`/assets/ava-code-CK-laIkq.webp`,rt=`data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cstyle%3e%20.MsftOfcThm_Accent6_lumMod_60_lumOff_40_Fill_v2%20{%20fill:%23FF6238;%20}%20%3c/style%3e%3cpath%20d='M504%20256C504%20392.967%20392.967%20504%20256%20504%20119.033%20504%208%20392.967%208%20256%208%20119.033%20119.033%208%20256%208%20392.967%208%20504%20119.033%20504%20256ZM362.349%20220.67C367.286%20187.671%20342.158%20169.931%20307.799%20158.097L318.945%20113.395%20291.732%20106.614%20280.881%20150.138C273.727%20148.355%20266.379%20146.674%20259.078%20145.008L270.007%20101.198%20242.809%2094.417%20231.656%20139.103C225.734%20137.754%20219.921%20136.421%20214.279%20135.019L214.31%20134.879%20176.78%20125.509%20169.541%20154.571C169.541%20154.571%20189.732%20159.198%20189.306%20159.484%20200.328%20162.235%20202.32%20169.528%20201.986%20175.309L189.29%20226.234C190.05%20226.428%20191.034%20226.707%20192.119%20227.141%20191.212%20226.916%20190.243%20226.668%20189.243%20226.428L171.447%20297.766C170.098%20301.114%20166.68%20306.136%20158.976%20304.23%20159.247%20304.625%20139.196%20299.293%20139.196%20299.293L125.686%20330.44%20161.1%20339.267C167.688%20340.918%20174.145%20342.646%20180.5%20344.273L169.238%20389.486%20196.42%20396.267%20207.573%20351.534C214.782%20353.488%20222.011%20355.363%20229.26%20357.161L218.145%20401.684%20245.358%20408.465%20256.62%20363.337C303.024%20372.118%20337.919%20368.576%20352.606%20326.61%20364.442%20292.82%20352.017%20273.329%20327.602%20260.619%20345.382%20256.521%20358.776%20244.827%20362.349%20220.67ZM300.172%20307.849C291.762%20341.639%20234.864%20323.372%20216.417%20318.792L231.361%20258.893C249.807%20263.496%20308.961%20272.61%20300.172%20307.849ZM308.589%20220.182C300.916%20250.918%20253.558%20235.302%20238.196%20231.474L251.744%20177.147C267.107%20180.975%20316.58%20188.12%20308.589%20220.182Z'%20class='MsftOfcThm_Accent6_lumMod_60_lumOff_40_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23FF6238'%20fill-opacity='1'/%3e%3c/svg%3e`,it=`/assets/blocs-merkle-ByxanURt.webp`,at=`/assets/satoshi-mBi4oK4v.webp`,ot=`/assets/2d-doc-CkxeGMpk.webp`,st=`/assets/attestation-DRYJOMjN.webp`,ct=`data:image/webp;base64,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`,lt=`/assets/titres-DA-PmVpi.webp`,ut=`/assets/ava-BZbp3-ex.webp`,dt=`/assets/ex-machina-B-qp4p2j.webp`,ft=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cstyle%3e%20.MsftOfcThm_Accent6_lumMod_75_Fill_v2%20{%20fill:%23861D00;%20}%20%3c/style%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M0%2064C0%2028.7%2028.7%200%2064%200L384%200C419.3%200%20448%2028.7%20448%2064L448%20448C448%20483.3%20419.3%20512%20384%20512L64%20512C28.7%20512%200%20483.3%200%20448L0%2064ZM183%20278.8C155.1%20265.6%20134.6%20239.4%20129.3%20208L168.4%20208C170%20238.4%20176.1%20261.8%20183%20278.8ZM224.3%20288%20224%20288%20223.7%20288C221.3%20284.5%20218%20279.1%20214.6%20271.5%20208.6%20257.9%20202.2%20237.2%20200.4%20208L247.5%20208C245.7%20237.2%20239.4%20257.9%20233.3%20271.5%20229.9%20279.1%20226.6%20284.5%20224.2%20288ZM265%20278.8C271.8%20261.7%20277.9%20238.4%20279.6%20208L318.7%20208C313.4%20239.4%20292.9%20265.6%20265%20278.8ZM279.6%20176C278%20145.6%20271.9%20122.2%20265%20105.2%20292.9%20118.4%20313.4%20144.6%20318.7%20176L279.6%20176ZM223.7%2096%20224%2096%20224.3%2096C226.7%2099.5%20230%20104.9%20233.4%20112.5%20239.4%20126.1%20245.8%20146.8%20247.6%20176L200.5%20176C202.3%20146.8%20208.6%20126.1%20214.7%20112.5%20218.1%20104.9%20221.4%2099.5%20223.8%2096ZM183%20105.2C176.2%20122.3%20170.1%20145.6%20168.4%20176L129.3%20176C134.6%20144.6%20155.1%20118.4%20183%20105.2ZM352%20192C352%20121.308%20294.692%2064%20224%2064%20153.308%2064%2096%20121.308%2096%20192%2096%20262.692%20153.308%20320%20224%20320%20294.692%20320%20352%20262.692%20352%20192ZM112%20384C103.2%20384%2096%20391.2%2096%20400%2096%20408.8%20103.2%20416%20112%20416L336%20416C344.8%20416%20352%20408.8%20352%20400%20352%20391.2%20344.8%20384%20336%20384L112%20384Z'%20class='MsftOfcThm_Accent6_lumMod_75_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23861D00'%20fill-opacity='0.08996'/%3e%3cpath%20d='M183%20278.8C176.2%20261.7%20170.1%20238.4%20168.4%20208L129.3%20208C134.6%20239.4%20155.1%20265.6%20183%20278.8ZM224.3%20288C226.7%20284.5%20230%20279.1%20233.4%20271.5%20239.4%20257.9%20245.8%20237.2%20247.6%20208L200.5%20208C202.3%20237.2%20208.6%20257.9%20214.7%20271.5%20218.1%20279.1%20221.4%20284.5%20223.8%20288%20223.9%20288%20224%20288%20224.1%20288%20224.2%20288%20224.3%20288%20224.4%20288ZM265%20278.8C292.9%20265.6%20313.4%20239.4%20318.7%20208L279.6%20208C278%20238.4%20271.9%20261.8%20265%20278.8ZM279.6%20176%20318.7%20176C313.4%20144.6%20292.9%20118.4%20265%20105.2%20271.8%20122.3%20277.9%20145.6%20279.6%20176ZM223.7%2096C221.3%2099.5%20218%20104.9%20214.6%20112.5%20208.6%20126.1%20202.2%20146.8%20200.4%20176L247.5%20176C245.7%20146.8%20239.4%20126.1%20233.3%20112.5%20229.9%20104.9%20226.6%2099.5%20224.2%2096%20224.1%2096%20224%2096%20223.9%2096%20223.8%2096%20223.7%2096%20223.6%2096ZM183%20105.2C155.1%20118.4%20134.6%20144.6%20129.3%20176L168.4%20176C170%20145.6%20176.1%20122.2%20183%20105.2ZM96%20192C96%20121.308%20153.308%2064%20224%2064%20294.692%2064%20352%20121.308%20352%20192%20352%20262.692%20294.692%20320%20224%20320%20153.308%20320%2096%20262.692%2096%20192Z'%20class='MsftOfcThm_Accent6_lumMod_75_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23861D00'%20fill-opacity='0.08996'%20opacity='0.4'/%3e%3c/svg%3e`,pt=`data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cpath%20d='M224%2064%2064%2064%2064%20448%20288%20448%20288%20288%20352%20288%20352%20448C352%20483.3%20323.3%20512%20288%20512L64%20512C28.7%20512%200%20483.3%200%20448L0%2064C0%2028.7%2028.7%200%2064%200L224%200%20224%2064ZM128%20400C128%20391.2%20135.2%20384%20144%20384L208%20384C216.8%20384%20224%20391.2%20224%20400%20224%20408.8%20216.8%20416%20208%20416L144%20416C135.2%20416%20128%20408.8%20128%20400Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20fill-opacity='1'%20opacity='0.4'/%3e%3cpath%20d='M256%2024C256%2010.7%20266.7%200%20280%200%20408.1%200%20512%20103.9%20512%20232%20512%20245.3%20501.3%20256%20488%20256%20474.7%20256%20464%20245.3%20464%20232%20464%20130.4%20381.6%2048%20280%2048%20266.7%2048%20256%2037.3%20256%2024ZM256%20224C256%20206.327%20270.327%20192%20288%20192%20305.673%20192%20320%20206.327%20320%20224%20320%20241.673%20305.673%20256%20288%20256%20270.327%20256%20256%20241.673%20256%20224ZM280%2096C355.1%2096%20416%20156.9%20416%20232%20416%20245.3%20405.3%20256%20392%20256%20378.7%20256%20368%20245.3%20368%20232%20368%20183.4%20328.6%20144%20280%20144%20266.7%20144%20256%20133.3%20256%20120%20256%20106.7%20266.7%2096%20280%2096Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20fill-opacity='1'/%3e%3c/svg%3e`,mt=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cpath%20d='M101.7%20154.2C98%20166.1%2096%20178.8%2096%20192%2096%20262.7%20153.3%20320%20224%20320%20294.7%20320%20352%20262.7%20352%20192%20352%20178.8%20350%20166.1%20346.3%20154.2%20308.2%20168.3%20267%20176%20224%20176%20181%20176%20139.8%20168.3%20101.7%20154.2Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20fill-opacity='1'%20opacity='0.4'/%3e%3cpath%20d='M230.1%200.8%20382.1%2040.8C390.7%2043.1%20397.4%2049.9%20399.4%2058.6%20401.4%2067.3%20398.4%2076.4%20391.6%2082.2L367.8%20102.6C367.9%20103.6%20367.9%20104.6%20367.9%20105.7L367.9%20126.9C367.9%20137.6%20362.6%20147.7%20352.8%20152.1%20328.7%20162.9%20284.2%20176.1%20223.9%20176.1%20163.6%20176.1%20119.1%20162.9%2095%20152.1%2085.3%20147.7%2080%20137.6%2080%20126.9L80%20105.7C80%20104.7%2080%20103.6%2080.1%20102.6L56.4%2082.2C49.6%2076.4%2046.6%2067.3%2048.6%2058.6%2050.6%2049.9%2057.3%2043%2065.9%2040.8L217.9%200.8C221.9-0.3%20226.1-0.3%20230.1%200.8ZM227%2048.6C225.1%2047.8%20223%2047.8%20221.1%2048.6L189%2061.4C186%2062.6%20184%2065.6%20184%2068.8%20184%2086%20191%20114.9%20220.9%20127.4%20222.9%20128.2%20225.1%20128.2%20227.1%20127.4%20257%20114.9%20264%2086%20264%2068.8%20264%2065.5%20262%2062.6%20259%2061.4L227%2048.6ZM208%20416%20187.6%20375.2C182.3%20364.6%20190%20352%20201.9%20352L246.1%20352C258%20352%20265.7%20364.5%20260.4%20375.2L240%20416%20252.2%20464.9%20315%20360.3C318%20355.3%20323.6%20352.2%20329.4%20352.9%20396.2%20360.8%20448%20417.5%20448%20486.4%20448%20500.5%20436.5%20512%20422.4%20512L256%20512%20256%20512%20192%20512%20192%20512%2025.6%20512C11.5%20512%200%20500.5%200%20486.4%200%20417.5%2051.8%20360.8%20118.6%20352.9%20124.4%20352.2%20130%20355.3%20133%20360.3L195.8%20464.9%20208%20416ZM352%20408C348.5%20408%20345.5%20410.2%20344.4%20413.5L339%20430.2%20321.6%20430.2C318.1%20430.2%20315%20432.4%20314%20435.7%20313%20439%20314.1%20442.6%20316.9%20444.7L331%20454.8%20325.6%20471.4C324.5%20474.7%20325.7%20478.3%20328.5%20480.4%20331.3%20482.5%20335.1%20482.4%20337.9%20480.4L352%20470.1%20366.1%20480.4C368.9%20482.4%20372.7%20482.5%20375.5%20480.4%20378.3%20478.3%20379.5%20474.7%20378.4%20471.4L373%20454.8%20387.1%20444.6C389.9%20442.6%20391.1%20438.9%20390%20435.6%20388.9%20432.3%20385.8%20430.1%20382.4%20430.1L365%20430.1%20359.6%20413.5C358.5%20410.2%20355.5%20408%20352%20408Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20fill-opacity='1'/%3e%3c/svg%3e`,ht=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cstyle%3e%20.MsftOfcThm_Accent6_lumMod_75_Fill_v2%20{%20fill:%23861D00;%20}%20%3c/style%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M0%2064C0%2028.7%2028.7%200%2064%200L384%200C419.3%200%20448%2028.7%20448%2064L448%20448C448%20483.3%20419.3%20512%20384%20512L64%20512C28.7%20512%200%20483.3%200%20448L0%2064ZM183%20278.8C155.1%20265.6%20134.6%20239.4%20129.3%20208L168.4%20208C170%20238.4%20176.1%20261.8%20183%20278.8ZM224.3%20288%20224%20288%20223.7%20288C221.3%20284.5%20218%20279.1%20214.6%20271.5%20208.6%20257.9%20202.2%20237.2%20200.4%20208L247.5%20208C245.7%20237.2%20239.4%20257.9%20233.3%20271.5%20229.9%20279.1%20226.6%20284.5%20224.2%20288ZM265%20278.8C271.8%20261.7%20277.9%20238.4%20279.6%20208L318.7%20208C313.4%20239.4%20292.9%20265.6%20265%20278.8ZM279.6%20176C278%20145.6%20271.9%20122.2%20265%20105.2%20292.9%20118.4%20313.4%20144.6%20318.7%20176L279.6%20176ZM223.7%2096%20224%2096%20224.3%2096C226.7%2099.5%20230%20104.9%20233.4%20112.5%20239.4%20126.1%20245.8%20146.8%20247.6%20176L200.5%20176C202.3%20146.8%20208.6%20126.1%20214.7%20112.5%20218.1%20104.9%20221.4%2099.5%20223.8%2096ZM183%20105.2C176.2%20122.3%20170.1%20145.6%20168.4%20176L129.3%20176C134.6%20144.6%20155.1%20118.4%20183%20105.2ZM352%20192C352%20121.308%20294.692%2064%20224%2064%20153.308%2064%2096%20121.308%2096%20192%2096%20262.692%20153.308%20320%20224%20320%20294.692%20320%20352%20262.692%20352%20192ZM112%20384C103.2%20384%2096%20391.2%2096%20400%2096%20408.8%20103.2%20416%20112%20416L336%20416C344.8%20416%20352%20408.8%20352%20400%20352%20391.2%20344.8%20384%20336%20384L112%20384Z'%20class='MsftOfcThm_Accent6_lumMod_75_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23861D00'%20fill-opacity='1'/%3e%3cpath%20d='M183%20278.8C176.2%20261.7%20170.1%20238.4%20168.4%20208L129.3%20208C134.6%20239.4%20155.1%20265.6%20183%20278.8ZM224.3%20288C226.7%20284.5%20230%20279.1%20233.4%20271.5%20239.4%20257.9%20245.8%20237.2%20247.6%20208L200.5%20208C202.3%20237.2%20208.6%20257.9%20214.7%20271.5%20218.1%20279.1%20221.4%20284.5%20223.8%20288%20223.9%20288%20224%20288%20224.1%20288%20224.2%20288%20224.3%20288%20224.4%20288ZM265%20278.8C292.9%20265.6%20313.4%20239.4%20318.7%20208L279.6%20208C278%20238.4%20271.9%20261.8%20265%20278.8ZM279.6%20176%20318.7%20176C313.4%20144.6%20292.9%20118.4%20265%20105.2%20271.8%20122.3%20277.9%20145.6%20279.6%20176ZM223.7%2096C221.3%2099.5%20218%20104.9%20214.6%20112.5%20208.6%20126.1%20202.2%20146.8%20200.4%20176L247.5%20176C245.7%20146.8%20239.4%20126.1%20233.3%20112.5%20229.9%20104.9%20226.6%2099.5%20224.2%2096%20224.1%2096%20224%2096%20223.9%2096%20223.8%2096%20223.7%2096%20223.6%2096ZM183%20105.2C155.1%20118.4%20134.6%20144.6%20129.3%20176L168.4%20176C170%20145.6%20176.1%20122.2%20183%20105.2ZM96%20192C96%20121.308%20153.308%2064%20224%2064%20294.692%2064%20352%20121.308%20352%20192%20352%20262.692%20294.692%20320%20224%20320%20153.308%20320%2096%20262.692%2096%20192Z'%20class='MsftOfcThm_Accent6_lumMod_75_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23861D00'%20fill-opacity='1'%20opacity='0.4'/%3e%3c/svg%3e`,gt=`data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cpath%20d='M152%200C138.7%200%20128%2010.7%20128%2024L128%2064%20176%2064%20176%2024C176%2010.7%20165.3%200%20152%200ZM232%2024%20232%2064%20280%2064%20280%2024C280%2010.7%20269.3%200%20256%200%20242.7%200%20232%2010.7%20232%2024ZM336%2024%20336%2064%20384%2064%20384%2024C384%2010.7%20373.3%200%20360%200%20346.7%200%20336%2010.7%20336%2024ZM488%20128%20448%20128%20448%20176%20488%20176C501.3%20176%20512%20165.3%20512%20152%20512%20138.7%20501.3%20128%20488%20128ZM488%20232%20448%20232%20448%20280%20488%20280C501.3%20280%20512%20269.3%20512%20256%20512%20242.7%20501.3%20232%20488%20232ZM488%20336%20448%20336%20448%20384%20488%20384C501.3%20384%20512%20373.3%20512%20360%20512%20346.7%20501.3%20336%20488%20336ZM384%20488%20384%20448%20336%20448%20336%20488C336%20501.3%20346.7%20512%20360%20512%20373.3%20512%20384%20501.3%20384%20488ZM280%20448%20232%20448%20232%20488C232%20501.3%20242.7%20512%20256%20512%20269.3%20512%20280%20501.3%20280%20488L280%20448ZM176%20448%20128%20448%20128%20488C128%20501.3%20138.7%20512%20152%20512%20165.3%20512%20176%20501.3%20176%20488L176%20448ZM24%20384%2064%20384%2064%20336%2024%20336C10.7%20336%200%20346.7%200%20360%200%20373.3%2010.7%20384%2024%20384ZM64%20280%2064%20232%2024%20232C10.7%20232%200%20242.7%200%20256%200%20269.3%2010.7%20280%2024%20280L64%20280ZM24%20128C10.7%20128%200%20138.7%200%20152%200%20165.3%2010.7%20176%2024%20176L64%20176%2064%20128%2024%20128ZM352%20160%20160%20160%20160%20352%20352%20352%20352%20160Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20fill-opacity='1'%20opacity='0.4'/%3e%3cpath%20d='M128%2064C92.7%2064%2064%2092.7%2064%20128L64%20384C64%20419.3%2092.7%20448%20128%20448L384%20448C419.3%20448%20448%20419.3%20448%20384L448%20128C448%2092.7%20419.3%2064%20384%2064L128%2064ZM160%20128%20352%20128C369.7%20128%20384%20142.3%20384%20160L384%20352C384%20369.7%20369.7%20384%20352%20384L160%20384C142.3%20384%20128%20369.7%20128%20352L128%20160C128%20142.3%20142.3%20128%20160%20128Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20fill-opacity='1'/%3e%3c/svg%3e`,_t=`data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cpath%20d='M152%200C138.7%200%20128%2010.7%20128%2024L128%2064%20176%2064%20176%2024C176%2010.7%20165.3%200%20152%200ZM232%2024%20232%2064%20280%2064%20280%2024C280%2010.7%20269.3%200%20256%200%20242.7%200%20232%2010.7%20232%2024ZM336%2024%20336%2064%20384%2064%20384%2024C384%2010.7%20373.3%200%20360%200%20346.7%200%20336%2010.7%20336%2024ZM488%20128%20448%20128%20448%20176%20488%20176C501.3%20176%20512%20165.3%20512%20152%20512%20138.7%20501.3%20128%20488%20128ZM488%20232%20448%20232%20448%20280%20488%20280C501.3%20280%20512%20269.3%20512%20256%20512%20242.7%20501.3%20232%20488%20232ZM488%20336%20448%20336%20448%20384%20488%20384C501.3%20384%20512%20373.3%20512%20360%20512%20346.7%20501.3%20336%20488%20336ZM384%20488%20384%20448%20336%20448%20336%20488C336%20501.3%20346.7%20512%20360%20512%20373.3%20512%20384%20501.3%20384%20488ZM280%20448%20232%20448%20232%20488C232%20501.3%20242.7%20512%20256%20512%20269.3%20512%20280%20501.3%20280%20488L280%20448ZM176%20448%20128%20448%20128%20488C128%20501.3%20138.7%20512%20152%20512%20165.3%20512%20176%20501.3%20176%20488L176%20448ZM24%20384%2064%20384%2064%20336%2024%20336C10.7%20336%200%20346.7%200%20360%200%20373.3%2010.7%20384%2024%20384ZM64%20280%2064%20232%2024%20232C10.7%20232%200%20242.7%200%20256%200%20269.3%2010.7%20280%2024%20280L64%20280ZM24%20128C10.7%20128%200%20138.7%200%20152%200%20165.3%2010.7%20176%2024%20176L64%20176%2064%20128%2024%20128ZM352%20160%20160%20160%20160%20352%20352%20352%20352%20160Z'%20opacity='0.4'/%3e%3cpath%20d='M128%2064C92.7%2064%2064%2092.7%2064%20128L64%20384C64%20419.3%2092.7%20448%20128%20448L384%20448C419.3%20448%20448%20419.3%20448%20384L448%20128C448%2092.7%20419.3%2064%20384%2064L128%2064ZM160%20128%20352%20128C369.7%20128%20384%20142.3%20384%20160L384%20352C384%20369.7%20369.7%20384%20352%20384L160%20384C142.3%20384%20128%20369.7%20128%20352L128%20160C128%20142.3%20142.3%20128%20160%20128Z'/%3e%3c/svg%3e`,vt=`data:image/svg+xml,%3csvg%20viewBox='0%200%20640%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cstyle%3e%20.MsftOfcThm_Accent6_lumMod_50_Fill_v2%20{%20fill:%23591300;%20}%20%3c/style%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M496%20272%20496%20320%20560%20320%20560%20272C560%20254.3%20545.7%20240%20528%20240%20510.3%20240%20496%20254.3%20496%20272ZM448%20320%20448%20272C448%20227.8%20483.8%20192%20528%20192%20572.2%20192%20608%20227.8%20608%20272L608%20320C625.7%20320%20640%20334.3%20640%20352L640%20480C640%20497.7%20625.7%20512%20608%20512L448%20512C430.3%20512%20416%20497.7%20416%20480L416%20352C416%20334.3%20430.3%20320%20448%20320Z'%20class='MsftOfcThm_Accent6_lumMod_50_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23591300'/%3e%3cpath%20d='M128%2096C110.3%2096%2096%20110.3%2096%20128L96%20160C96%20177.7%2081.7%20192%2064%20192%2046.3%20192%2032%20177.7%2032%20160L32%20128C32%2075%2075%2032%20128%2032%20181%2032%20224%2075%20224%20128L224%20135.8C224%20156.6%20222.8%20177.4%20220.4%20198.1L342.8%20161.4C354.2%20158%20366.6%20161.2%20375%20169.8%20383.4%20178.4%20386.2%20190.9%20382.4%20202.2L364.4%20256.1%20417.1%20256.1C416.4%20261.3%20416%20266.7%20416%20272.1L416%20296.7C406.3%20302.3%20398.2%20310.4%20392.6%20320.1L320%20320.1C309.7%20320.1%20300.1%20315.2%20294%20306.8%20287.9%20298.4%20286.3%20287.7%20289.6%20278L302.1%20240.5%20207.7%20268.8C195.8%20321.6%20176.1%20372.3%20149.3%20419.3L135.4%20443.6C122.5%20466.1%2098.5%20480%2072.5%20480%2032.5%20480%200%20447.5%200%20407.5L0%20335.6C0%20293.2%2027.8%20255.8%2068.4%20243.6L152.8%20218.3C157.6%20191.1%20159.9%20163.4%20159.9%20135.8L159.9%20128C159.9%20110.3%20145.6%2096%20127.9%2096ZM384%20368%20384%20416%20187.5%20416C195.7%20400.3%20203.1%20384.3%20209.8%20368L384%20368ZM135.8%20290.3%2086.8%20305C73.3%20309%2064%20321.5%2064%20335.6L64%20407.5C64%20412.2%2067.8%20416%2072.5%20416%2075.5%20416%2078.4%20414.4%2079.9%20411.7L93.8%20387.4C111.4%20356.6%20125.5%20324%20135.9%20290.2Z'%20class='MsftOfcThm_Accent6_lumMod_50_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23591300'%20opacity='0.4'/%3e%3c/svg%3e`,yt=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cstyle%3e%20.MsftOfcThm_Accent6_lumMod_75_Fill_v2%20{%20fill:%23861D00;%20}%20%3c/style%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M0%2064C0%2028.7%2028.7%200%2064%200L384%200C419.3%200%20448%2028.7%20448%2064L448%20448C448%20483.3%20419.3%20512%20384%20512L64%20512C28.7%20512%200%20483.3%200%20448L0%2064ZM183%20278.8C155.1%20265.6%20134.6%20239.4%20129.3%20208L168.4%20208C170%20238.4%20176.1%20261.8%20183%20278.8ZM224.3%20288%20224%20288%20223.7%20288C221.3%20284.5%20218%20279.1%20214.6%20271.5%20208.6%20257.9%20202.2%20237.2%20200.4%20208L247.5%20208C245.7%20237.2%20239.4%20257.9%20233.3%20271.5%20229.9%20279.1%20226.6%20284.5%20224.2%20288ZM265%20278.8C271.8%20261.7%20277.9%20238.4%20279.6%20208L318.7%20208C313.4%20239.4%20292.9%20265.6%20265%20278.8ZM279.6%20176C278%20145.6%20271.9%20122.2%20265%20105.2%20292.9%20118.4%20313.4%20144.6%20318.7%20176L279.6%20176ZM223.7%2096%20224%2096%20224.3%2096C226.7%2099.5%20230%20104.9%20233.4%20112.5%20239.4%20126.1%20245.8%20146.8%20247.6%20176L200.5%20176C202.3%20146.8%20208.6%20126.1%20214.7%20112.5%20218.1%20104.9%20221.4%2099.5%20223.8%2096ZM183%20105.2C176.2%20122.3%20170.1%20145.6%20168.4%20176L129.3%20176C134.6%20144.6%20155.1%20118.4%20183%20105.2ZM352%20192C352%20121.308%20294.692%2064%20224%2064%20153.308%2064%2096%20121.308%2096%20192%2096%20262.692%20153.308%20320%20224%20320%20294.692%20320%20352%20262.692%20352%20192ZM112%20384C103.2%20384%2096%20391.2%2096%20400%2096%20408.8%20103.2%20416%20112%20416L336%20416C344.8%20416%20352%20408.8%20352%20400%20352%20391.2%20344.8%20384%20336%20384L112%20384Z'%20class='MsftOfcThm_Accent6_lumMod_75_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23861D00'%20fill-opacity='0.08996'/%3e%3cpath%20d='M183%20278.8C176.2%20261.7%20170.1%20238.4%20168.4%20208L129.3%20208C134.6%20239.4%20155.1%20265.6%20183%20278.8ZM224.3%20288C226.7%20284.5%20230%20279.1%20233.4%20271.5%20239.4%20257.9%20245.8%20237.2%20247.6%20208L200.5%20208C202.3%20237.2%20208.6%20257.9%20214.7%20271.5%20218.1%20279.1%20221.4%20284.5%20223.8%20288%20223.9%20288%20224%20288%20224.1%20288%20224.2%20288%20224.3%20288%20224.4%20288ZM265%20278.8C292.9%20265.6%20313.4%20239.4%20318.7%20208L279.6%20208C278%20238.4%20271.9%20261.8%20265%20278.8ZM279.6%20176%20318.7%20176C313.4%20144.6%20292.9%20118.4%20265%20105.2%20271.8%20122.3%20277.9%20145.6%20279.6%20176ZM223.7%2096C221.3%2099.5%20218%20104.9%20214.6%20112.5%20208.6%20126.1%20202.2%20146.8%20200.4%20176L247.5%20176C245.7%20146.8%20239.4%20126.1%20233.3%20112.5%20229.9%20104.9%20226.6%2099.5%20224.2%2096%20224.1%2096%20224%2096%20223.9%2096%20223.8%2096%20223.7%2096%20223.6%2096ZM183%20105.2C155.1%20118.4%20134.6%20144.6%20129.3%20176L168.4%20176C170%20145.6%20176.1%20122.2%20183%20105.2ZM96%20192C96%20121.308%20153.308%2064%20224%2064%20294.692%2064%20352%20121.308%20352%20192%20352%20262.692%20294.692%20320%20224%20320%20153.308%20320%2096%20262.692%2096%20192Z'%20class='MsftOfcThm_Accent6_lumMod_75_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23861D00'%20fill-opacity='0.08996'%20opacity='0.4'/%3e%3c/svg%3e`,bt=`data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cpath%20d='M224%2064%2064%2064%2064%20448%20288%20448%20288%20288%20352%20288%20352%20448C352%20483.3%20323.3%20512%20288%20512L64%20512C28.7%20512%200%20483.3%200%20448L0%2064C0%2028.7%2028.7%200%2064%200L224%200%20224%2064ZM128%20400C128%20391.2%20135.2%20384%20144%20384L208%20384C216.8%20384%20224%20391.2%20224%20400%20224%20408.8%20216.8%20416%20208%20416L144%20416C135.2%20416%20128%20408.8%20128%20400Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20fill-opacity='1'%20opacity='0.4'/%3e%3cpath%20d='M256%2024C256%2010.7%20266.7%200%20280%200%20408.1%200%20512%20103.9%20512%20232%20512%20245.3%20501.3%20256%20488%20256%20474.7%20256%20464%20245.3%20464%20232%20464%20130.4%20381.6%2048%20280%2048%20266.7%2048%20256%2037.3%20256%2024ZM256%20224C256%20206.327%20270.327%20192%20288%20192%20305.673%20192%20320%20206.327%20320%20224%20320%20241.673%20305.673%20256%20288%20256%20270.327%20256%20256%20241.673%20256%20224ZM280%2096C355.1%2096%20416%20156.9%20416%20232%20416%20245.3%20405.3%20256%20392%20256%20378.7%20256%20368%20245.3%20368%20232%20368%20183.4%20328.6%20144%20280%20144%20266.7%20144%20256%20133.3%20256%20120%20256%20106.7%20266.7%2096%20280%2096Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20fill-opacity='1'/%3e%3c/svg%3e`,xt=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cpath%20d='M101.7%20154.2C98%20166.1%2096%20178.8%2096%20192%2096%20262.7%20153.3%20320%20224%20320%20294.7%20320%20352%20262.7%20352%20192%20352%20178.8%20350%20166.1%20346.3%20154.2%20308.2%20168.3%20267%20176%20224%20176%20181%20176%20139.8%20168.3%20101.7%20154.2Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20fill-opacity='1'%20opacity='0.4'/%3e%3cpath%20d='M230.1%200.8%20382.1%2040.8C390.7%2043.1%20397.4%2049.9%20399.4%2058.6%20401.4%2067.3%20398.4%2076.4%20391.6%2082.2L367.8%20102.6C367.9%20103.6%20367.9%20104.6%20367.9%20105.7L367.9%20126.9C367.9%20137.6%20362.6%20147.7%20352.8%20152.1%20328.7%20162.9%20284.2%20176.1%20223.9%20176.1%20163.6%20176.1%20119.1%20162.9%2095%20152.1%2085.3%20147.7%2080%20137.6%2080%20126.9L80%20105.7C80%20104.7%2080%20103.6%2080.1%20102.6L56.4%2082.2C49.6%2076.4%2046.6%2067.3%2048.6%2058.6%2050.6%2049.9%2057.3%2043%2065.9%2040.8L217.9%200.8C221.9-0.3%20226.1-0.3%20230.1%200.8ZM227%2048.6C225.1%2047.8%20223%2047.8%20221.1%2048.6L189%2061.4C186%2062.6%20184%2065.6%20184%2068.8%20184%2086%20191%20114.9%20220.9%20127.4%20222.9%20128.2%20225.1%20128.2%20227.1%20127.4%20257%20114.9%20264%2086%20264%2068.8%20264%2065.5%20262%2062.6%20259%2061.4L227%2048.6ZM208%20416%20187.6%20375.2C182.3%20364.6%20190%20352%20201.9%20352L246.1%20352C258%20352%20265.7%20364.5%20260.4%20375.2L240%20416%20252.2%20464.9%20315%20360.3C318%20355.3%20323.6%20352.2%20329.4%20352.9%20396.2%20360.8%20448%20417.5%20448%20486.4%20448%20500.5%20436.5%20512%20422.4%20512L256%20512%20256%20512%20192%20512%20192%20512%2025.6%20512C11.5%20512%200%20500.5%200%20486.4%200%20417.5%2051.8%20360.8%20118.6%20352.9%20124.4%20352.2%20130%20355.3%20133%20360.3L195.8%20464.9%20208%20416ZM352%20408C348.5%20408%20345.5%20410.2%20344.4%20413.5L339%20430.2%20321.6%20430.2C318.1%20430.2%20315%20432.4%20314%20435.7%20313%20439%20314.1%20442.6%20316.9%20444.7L331%20454.8%20325.6%20471.4C324.5%20474.7%20325.7%20478.3%20328.5%20480.4%20331.3%20482.5%20335.1%20482.4%20337.9%20480.4L352%20470.1%20366.1%20480.4C368.9%20482.4%20372.7%20482.5%20375.5%20480.4%20378.3%20478.3%20379.5%20474.7%20378.4%20471.4L373%20454.8%20387.1%20444.6C389.9%20442.6%20391.1%20438.9%20390%20435.6%20388.9%20432.3%20385.8%20430.1%20382.4%20430.1L365%20430.1%20359.6%20413.5C358.5%20410.2%20355.5%20408%20352%20408Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20fill-opacity='1'/%3e%3c/svg%3e`,St=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cstyle%3e%20.MsftOfcThm_Accent6_lumMod_75_Fill_v2%20{%20fill:%23861D00;%20}%20%3c/style%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M0%2064C0%2028.7%2028.7%200%2064%200L384%200C419.3%200%20448%2028.7%20448%2064L448%20448C448%20483.3%20419.3%20512%20384%20512L64%20512C28.7%20512%200%20483.3%200%20448L0%2064ZM183%20278.8C155.1%20265.6%20134.6%20239.4%20129.3%20208L168.4%20208C170%20238.4%20176.1%20261.8%20183%20278.8ZM224.3%20288%20224%20288%20223.7%20288C221.3%20284.5%20218%20279.1%20214.6%20271.5%20208.6%20257.9%20202.2%20237.2%20200.4%20208L247.5%20208C245.7%20237.2%20239.4%20257.9%20233.3%20271.5%20229.9%20279.1%20226.6%20284.5%20224.2%20288ZM265%20278.8C271.8%20261.7%20277.9%20238.4%20279.6%20208L318.7%20208C313.4%20239.4%20292.9%20265.6%20265%20278.8ZM279.6%20176C278%20145.6%20271.9%20122.2%20265%20105.2%20292.9%20118.4%20313.4%20144.6%20318.7%20176L279.6%20176ZM223.7%2096%20224%2096%20224.3%2096C226.7%2099.5%20230%20104.9%20233.4%20112.5%20239.4%20126.1%20245.8%20146.8%20247.6%20176L200.5%20176C202.3%20146.8%20208.6%20126.1%20214.7%20112.5%20218.1%20104.9%20221.4%2099.5%20223.8%2096ZM183%20105.2C176.2%20122.3%20170.1%20145.6%20168.4%20176L129.3%20176C134.6%20144.6%20155.1%20118.4%20183%20105.2ZM352%20192C352%20121.308%20294.692%2064%20224%2064%20153.308%2064%2096%20121.308%2096%20192%2096%20262.692%20153.308%20320%20224%20320%20294.692%20320%20352%20262.692%20352%20192ZM112%20384C103.2%20384%2096%20391.2%2096%20400%2096%20408.8%20103.2%20416%20112%20416L336%20416C344.8%20416%20352%20408.8%20352%20400%20352%20391.2%20344.8%20384%20336%20384L112%20384Z'%20class='MsftOfcThm_Accent6_lumMod_75_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23861D00'%20fill-opacity='1'/%3e%3cpath%20d='M183%20278.8C176.2%20261.7%20170.1%20238.4%20168.4%20208L129.3%20208C134.6%20239.4%20155.1%20265.6%20183%20278.8ZM224.3%20288C226.7%20284.5%20230%20279.1%20233.4%20271.5%20239.4%20257.9%20245.8%20237.2%20247.6%20208L200.5%20208C202.3%20237.2%20208.6%20257.9%20214.7%20271.5%20218.1%20279.1%20221.4%20284.5%20223.8%20288%20223.9%20288%20224%20288%20224.1%20288%20224.2%20288%20224.3%20288%20224.4%20288ZM265%20278.8C292.9%20265.6%20313.4%20239.4%20318.7%20208L279.6%20208C278%20238.4%20271.9%20261.8%20265%20278.8ZM279.6%20176%20318.7%20176C313.4%20144.6%20292.9%20118.4%20265%20105.2%20271.8%20122.3%20277.9%20145.6%20279.6%20176ZM223.7%2096C221.3%2099.5%20218%20104.9%20214.6%20112.5%20208.6%20126.1%20202.2%20146.8%20200.4%20176L247.5%20176C245.7%20146.8%20239.4%20126.1%20233.3%20112.5%20229.9%20104.9%20226.6%2099.5%20224.2%2096%20224.1%2096%20224%2096%20223.9%2096%20223.8%2096%20223.7%2096%20223.6%2096ZM183%20105.2C155.1%20118.4%20134.6%20144.6%20129.3%20176L168.4%20176C170%20145.6%20176.1%20122.2%20183%20105.2ZM96%20192C96%20121.308%20153.308%2064%20224%2064%20294.692%2064%20352%20121.308%20352%20192%20352%20262.692%20294.692%20320%20224%20320%20153.308%20320%2096%20262.692%2096%20192Z'%20class='MsftOfcThm_Accent6_lumMod_75_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23861D00'%20fill-opacity='1'%20opacity='0.4'/%3e%3c/svg%3e`,Ct=`data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cpath%20d='M152%200C138.7%200%20128%2010.7%20128%2024L128%2064%20176%2064%20176%2024C176%2010.7%20165.3%200%20152%200ZM232%2024%20232%2064%20280%2064%20280%2024C280%2010.7%20269.3%200%20256%200%20242.7%200%20232%2010.7%20232%2024ZM336%2024%20336%2064%20384%2064%20384%2024C384%2010.7%20373.3%200%20360%200%20346.7%200%20336%2010.7%20336%2024ZM488%20128%20448%20128%20448%20176%20488%20176C501.3%20176%20512%20165.3%20512%20152%20512%20138.7%20501.3%20128%20488%20128ZM488%20232%20448%20232%20448%20280%20488%20280C501.3%20280%20512%20269.3%20512%20256%20512%20242.7%20501.3%20232%20488%20232ZM488%20336%20448%20336%20448%20384%20488%20384C501.3%20384%20512%20373.3%20512%20360%20512%20346.7%20501.3%20336%20488%20336ZM384%20488%20384%20448%20336%20448%20336%20488C336%20501.3%20346.7%20512%20360%20512%20373.3%20512%20384%20501.3%20384%20488ZM280%20448%20232%20448%20232%20488C232%20501.3%20242.7%20512%20256%20512%20269.3%20512%20280%20501.3%20280%20488L280%20448ZM176%20448%20128%20448%20128%20488C128%20501.3%20138.7%20512%20152%20512%20165.3%20512%20176%20501.3%20176%20488L176%20448ZM24%20384%2064%20384%2064%20336%2024%20336C10.7%20336%200%20346.7%200%20360%200%20373.3%2010.7%20384%2024%20384ZM64%20280%2064%20232%2024%20232C10.7%20232%200%20242.7%200%20256%200%20269.3%2010.7%20280%2024%20280L64%20280ZM24%20128C10.7%20128%200%20138.7%200%20152%200%20165.3%2010.7%20176%2024%20176L64%20176%2064%20128%2024%20128ZM352%20160%20160%20160%20160%20352%20352%20352%20352%20160Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20fill-opacity='1'%20opacity='0.4'/%3e%3cpath%20d='M128%2064C92.7%2064%2064%2092.7%2064%20128L64%20384C64%20419.3%2092.7%20448%20128%20448L384%20448C419.3%20448%20448%20419.3%20448%20384L448%20128C448%2092.7%20419.3%2064%20384%2064L128%2064ZM160%20128%20352%20128C369.7%20128%20384%20142.3%20384%20160L384%20352C384%20369.7%20369.7%20384%20352%20384L160%20384C142.3%20384%20128%20369.7%20128%20352L128%20160C128%20142.3%20142.3%20128%20160%20128Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20fill-opacity='1'/%3e%3c/svg%3e`,wt=`data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cpath%20d='M152%200C138.7%200%20128%2010.7%20128%2024L128%2064%20176%2064%20176%2024C176%2010.7%20165.3%200%20152%200ZM232%2024%20232%2064%20280%2064%20280%2024C280%2010.7%20269.3%200%20256%200%20242.7%200%20232%2010.7%20232%2024ZM336%2024%20336%2064%20384%2064%20384%2024C384%2010.7%20373.3%200%20360%200%20346.7%200%20336%2010.7%20336%2024ZM488%20128%20448%20128%20448%20176%20488%20176C501.3%20176%20512%20165.3%20512%20152%20512%20138.7%20501.3%20128%20488%20128ZM488%20232%20448%20232%20448%20280%20488%20280C501.3%20280%20512%20269.3%20512%20256%20512%20242.7%20501.3%20232%20488%20232ZM488%20336%20448%20336%20448%20384%20488%20384C501.3%20384%20512%20373.3%20512%20360%20512%20346.7%20501.3%20336%20488%20336ZM384%20488%20384%20448%20336%20448%20336%20488C336%20501.3%20346.7%20512%20360%20512%20373.3%20512%20384%20501.3%20384%20488ZM280%20448%20232%20448%20232%20488C232%20501.3%20242.7%20512%20256%20512%20269.3%20512%20280%20501.3%20280%20488L280%20448ZM176%20448%20128%20448%20128%20488C128%20501.3%20138.7%20512%20152%20512%20165.3%20512%20176%20501.3%20176%20488L176%20448ZM24%20384%2064%20384%2064%20336%2024%20336C10.7%20336%200%20346.7%200%20360%200%20373.3%2010.7%20384%2024%20384ZM64%20280%2064%20232%2024%20232C10.7%20232%200%20242.7%200%20256%200%20269.3%2010.7%20280%2024%20280L64%20280ZM24%20128C10.7%20128%200%20138.7%200%20152%200%20165.3%2010.7%20176%2024%20176L64%20176%2064%20128%2024%20128ZM352%20160%20160%20160%20160%20352%20352%20352%20352%20160Z'%20opacity='0.4'/%3e%3cpath%20d='M128%2064C92.7%2064%2064%2092.7%2064%20128L64%20384C64%20419.3%2092.7%20448%20128%20448L384%20448C419.3%20448%20448%20419.3%20448%20384L448%20128C448%2092.7%20419.3%2064%20384%2064L128%2064ZM160%20128%20352%20128C369.7%20128%20384%20142.3%20384%20160L384%20352C384%20369.7%20369.7%20384%20352%20384L160%20384C142.3%20384%20128%20369.7%20128%20352L128%20160C128%20142.3%20142.3%20128%20160%20128Z'/%3e%3c/svg%3e`,Tt=`data:image/svg+xml,%3csvg%20viewBox='0%200%20640%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cstyle%3e%20.MsftOfcThm_Accent6_lumMod_50_Fill_v2%20{%20fill:%23591300;%20}%20%3c/style%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M496%20272%20496%20320%20560%20320%20560%20272C560%20254.3%20545.7%20240%20528%20240%20510.3%20240%20496%20254.3%20496%20272ZM448%20320%20448%20272C448%20227.8%20483.8%20192%20528%20192%20572.2%20192%20608%20227.8%20608%20272L608%20320C625.7%20320%20640%20334.3%20640%20352L640%20480C640%20497.7%20625.7%20512%20608%20512L448%20512C430.3%20512%20416%20497.7%20416%20480L416%20352C416%20334.3%20430.3%20320%20448%20320Z'%20class='MsftOfcThm_Accent6_lumMod_50_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23591300'/%3e%3cpath%20d='M128%2096C110.3%2096%2096%20110.3%2096%20128L96%20160C96%20177.7%2081.7%20192%2064%20192%2046.3%20192%2032%20177.7%2032%20160L32%20128C32%2075%2075%2032%20128%2032%20181%2032%20224%2075%20224%20128L224%20135.8C224%20156.6%20222.8%20177.4%20220.4%20198.1L342.8%20161.4C354.2%20158%20366.6%20161.2%20375%20169.8%20383.4%20178.4%20386.2%20190.9%20382.4%20202.2L364.4%20256.1%20417.1%20256.1C416.4%20261.3%20416%20266.7%20416%20272.1L416%20296.7C406.3%20302.3%20398.2%20310.4%20392.6%20320.1L320%20320.1C309.7%20320.1%20300.1%20315.2%20294%20306.8%20287.9%20298.4%20286.3%20287.7%20289.6%20278L302.1%20240.5%20207.7%20268.8C195.8%20321.6%20176.1%20372.3%20149.3%20419.3L135.4%20443.6C122.5%20466.1%2098.5%20480%2072.5%20480%2032.5%20480%200%20447.5%200%20407.5L0%20335.6C0%20293.2%2027.8%20255.8%2068.4%20243.6L152.8%20218.3C157.6%20191.1%20159.9%20163.4%20159.9%20135.8L159.9%20128C159.9%20110.3%20145.6%2096%20127.9%2096ZM384%20368%20384%20416%20187.5%20416C195.7%20400.3%20203.1%20384.3%20209.8%20368L384%20368ZM135.8%20290.3%2086.8%20305C73.3%20309%2064%20321.5%2064%20335.6L64%20407.5C64%20412.2%2067.8%20416%2072.5%20416%2075.5%20416%2078.4%20414.4%2079.9%20411.7L93.8%20387.4C111.4%20356.6%20125.5%20324%20135.9%20290.2Z'%20class='MsftOfcThm_Accent6_lumMod_50_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23591300'%20opacity='0.4'/%3e%3c/svg%3e`,Et=`data:image/webp;base64,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`,Dt=`/assets/tls-dhe-B-M4jOSH.webp`,Ot=`/assets/tls-rsa-BG-lRmUN.webp`,kt=`/assets/colombe-BO8Ly3DC.webp`,At=`/assets/juge-DPsdQaOg.webp`,jt=`/assets/signature-DBlzj5yx.webp`,Mt=`/assets/courbes-S20O74fQ.webp`,Nt=`/assets/formule-D_7dz0qT.webp`,Pt=`/assets/table-DrnJlov5.webp`,Ft=`/assets/bitcoin-i8BM07UN.webp`,It=`/assets/blockchain-Bm7_aOGR.webp`,Lt=`/assets/np-approx-CLx5hKI0.webp`,Rt=`/assets/pn-exact-CbcdU9fX.webp`,zt=`/assets/script-CBWosV2i.webp`,Bt=`/assets/sortie-DN3K6gig.webp`,Vt=`/assets/anssi-r3-Bbutw1Y1.webp`,Ht=`/assets/hmac-formule-CEmma0ci.webp`,Ut=`/assets/hmac-octets-pKnuti7o.webp`,Wt=`/assets/hmac-pads-DzpZ5V0U.webp`,Gt=`/assets/hmac-schema-C2j2Ddl8.webp`,Kt=`/assets/pbkdf-cWkjS6Gj.webp`,qt=`/assets/zip-aKZWeU7H.webp`,Jt=`/assets/chaines-DVSyRZo5.webp`,Yt=`/assets/formule-sel-Brnyey4Y.webp`,Xt=`/assets/sha1-blockcipher-BlUf6h8d.webp`,Zt=`/assets/sha1-compress-BsbTLuvm.webp`,Qt=`/assets/sha1-expand-lpXPQeSE.webp`,$t=`/assets/sha1-f-BfIpeVbP.webp`,en=`/assets/sha1-tour-Bz-GubaK.webp`,tn=`/assets/go-putuint32-DJQSe02k.webp`,nn=`/assets/sha1-blockcipher-F1m-sQud.webp`,rn=`/assets/sha1-compress-a4pMgwsQ.webp`,an=`/assets/sha1-expand-DJzKyC98.webp`,on=`/assets/sha1-f-BuGpVQbH.webp`,sn=`/assets/sha1-tour-CSyx9zaK.webp`,cn=`/assets/sms-Do0JeUhJ.webp`,ln=`/assets/rfc4226-Dg50dTXv.webp`,un=`/assets/totp-schema-Cp45mb2b.webp`,dn=`/assets/empreinte-digitale-CDqVNkB5.webp`,fn=`/assets/photo-26HSk2Ta.webp`,pn=`/assets/portrait-BXvwh90g.webp`,mn=`/assets/rho-BDE1s74C.webp`,hn=`/assets/disque-B1lxwT_G.webp`,gn=`/assets/bd-couverture-Bj7qX4hT.webp`,_n=`/assets/bd-planche-Bja2KwCd.webp`,vn=`/assets/bd-vichy-BbtAo4Tj.webp`,yn=`/assets/paper-enigma-ByY4fFU0.webp`,bn=`/assets/imitation-AC-3Qp5W.webp`,xn=`/assets/chiffre-PkwPdYVq.webp`,Sn=`/assets/telephone-DBez3CBK.webp`,Cn=`/assets/enigma-Dr2vwASN.webp`,wn=`/assets/paper-enigma-Z6iPhDJK.webp`,Tn=`/assets/diffie-hellman-Dk7iRjrC.webp`,En=`/assets/rsa-QGP4uo_7.webp`,Dn=`/assets/onditchiffrer-B9AI86vs.webp`,On=`/assets/calcul-CbrBU9Rl.webp`,kn=`/assets/crypto-quantique-zpTo--qt.webp`,An=`/assets/films-TjDwERN6.webp`,jn=`/assets/tableau-eUu0J1ic.webp`,Mn=`data:image/webp;base64,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`,Nn=`/assets/france-identite-DC2pwBs2.webp`,Pn=`/assets/p47-BTq5Qvd4.webp`,Fn=`/assets/p48-DZIkBWth.webp`,In=`/assets/p49-C4D9gZz5.webp`,Ln=`data:image/webp;base64,UklGRnwNAABXRUJQVlA4IHANAADQQQCdASp2AKIAPlEijkUjoiEUOb6EOAUEsoBnrlzrklK8r+P38+3XnPD5f3vncvXP5n/NB9LX0gfIB/Zuqa9ADy2/Zg/u3+7/bD2rryj/b+G/m7+eTB7kfsg+987PEnbS37sAnzieHjrDeGfNT/43r14uv3j1B/5r/lfR70qPW3/nN716me2bxSA+h6DIEHEku2FPDpbBdnCZFUNsBALPthmhVLXDMtdAABllwlEUL8aBks1X3Kzr8L2RPeEEkUJaJE/t6Haf2we3hAuGbt8EGQukZxf2pw7KeetULuARMRQJh4XOEy06Sx3PK9+HrwVwmnuDP1kCU07AIncmYg9bHzoszNCHU9oRfGTkOFOIma+VzF+uB3AvfthgXa5IWllRIcVMxYM1HnjaUajy76iqFwMqMC6geliYNh1Xq/1LVdGeTosiWx7CEgpOiyo0LPkUguaRmRsMrSmrAUmueZQg3qm9/pnc7E9CsLBUa71U0p/TRetE73OZeSsvDePkjhL//H5wcOrB7lOtEELnJHX4KfvHmEcubMv8c3A2gO6PU3+6MRs9X8tYQufK7Li6EHpSGCt6qa7CKJMqtnDXywqZhMjxFu0oNfGl+h/RQ4nlv3VMJP6taIX35H1Qayq48LT+G600WNYOGwY1WYKiWkqKquouCxY9FgQ5OcxmFTZTywsD1kc8UWRzZoxjb24N+yertZld+YAAAP79rNtOKkO+2Zgg4khN5AnDtMtmlVzQzyTPrntCVmg0jU6KjOJp+HNZTaBAACuMG5z8gQ5WiOTknUuI7pSFApI6gEtfZZ60p6iaXUj9mugodzzl560SrlJOL6BrLeuS7mlYuZB0AU+fGpVuM0W47Oanyqa8c4cRwtt9M1Hq133LMMgkTQCVvdGir3HjSyyHxcZEZqMfWLhrcl/DaiQ4RO7x7vDfQ30ej+F/KIul2l+75kVC3wFTrU69OpzZWy4ZMVeL4MgTPmxB+1RsLEyV7zzbWa0sQDAyE0V0/Ar+OOI19R1WjZ9WciHtZ5/W/dbACFEViwQERBy40oLfsdVx5FWr9eR4ossmOqoxkdEr7xdxV2DLFwtFATg17qV0mMDWg+/h/nF8xkuCAudTKA5c6beMnlNe30q+vaA2NJZxr8meK1d7eZ983PPYMq/fEJ00Nvm90bi9RUoG50rjjzxqFt/K+hkKp4QjRMLw5viXS89nxuEomifByayWZeRqBvRSE2YIO6jnUJio0ZxsrX3g1QzmRumhEL+uQNLL+/B2nr1TppLhE1evfR/1iBfoIDj+q2/N26UAweU1CdYlDZ5RhMFUs/3rAcvoQDdXahBkFaPd2pjCBz2A8OSMKnzcHFPTlxW10S7XuevaOUL2IaQgOzxul6vZxfFERGWV4kX7H87i7EW0E3BqnbMHbfUZbxQNzcj87nsKqVBxL6xCTU7REiI9iZTRwVH3hF2WjFPIZVkr7GMfVpmVsR/D1QYFDqNdY6LNtkOLV4qzgHlz8JGtBEnTl09DSmMMwEl79oZ3kLvsSjxWHhv5ZzxBFkdpF1UxZYaWb2EBIi9oXMNUubk0qvLd4vqjKCXvekn7aDmCnxDoJiGrTjzG5Psv3bhSw4Lln7xAr2+47bAQDboNvLkiRZBzAGS3z07licUFzdxYR4lGRVsH0qE7FP+UaRI2ufjHQoesTSS4iA2oxg10OcMwmDLFwhK1EXfjXDez9FgdHoisx7gOpS9HDb+0H7NJQvK8kEWMl1LrHsucZjbotiYMcFd42Oj16UUCwTlQKR++HjRfbNPcmXvoBFXg9XW/TafEgz6CBGdKCRCQRrDi4Mj60egNV7gsUvuZyEvYb8Iy9BFMGDdMP0cgyOW4hERnYu/hHU3Wjy8biel9vGxgcP9bDd0/AI0yKYPQ19sdL+swmN1zDpldwun0HdXrvsDV8Ef1GM3yfB8GVuiJBoPl5mt9EcUvE+OrFaJeA39fm0wmB9jFNJUqM02veJ8z8FNluRlZKzFiMNSKcR7EaGVwa1SLXe559mlaV8s1hwNaMKgqW9YwKLlfAEHAxexHy6r9Ez1yzkRzy1KFV7A9T5pOYqFO4j+Y26Mk6c383dFmpi1ZnDBwR1s6vzrj/ny+2lzMDQg4PxiNb1vawn0UnSvRAT2p5hWhiw3qJ3jF8ixSz5xQiZT/Z3rWGmJSPsv5phJLbnwDtDxTJfVlkWWIMrSvNK2MzLLAe5rrKAEM/FJA/zpiT85pC8eIFg/XaqSxjrSfDXYj7XyEVKW0lIvt0OuMD3pJ0JmtfNUV7s27I6N114GxKGE4cRZRRPRluOc07L+qTQaf7Tq3TCRyMe/pGatuyXlcsJfF7fFfn64wguFd37z8+Dlq5ElHoESc4AJv3SxLXCY65e2Jx7FsFp7EwdoqBFcZxRcTa42ZGR/N72S+7lng53kFa/IjtX036mtWPRFo8jJXfU57+xY3lAM+fuW5UGnGbvMj9S9q6GN+Hp9MJXTcG9OGRmsxPdfKqjj413ojC9Kb8iWn1hu4aku+KIwLA690xImGMozKOeQOX7UosByylb79TAknLt2LV5J48H/mf9tZU5KF7TS7JT4o7LDVBMB1+3pzmil24gGyefLIJwDr+k2sWcVf9ca5I429RiAhPU45HU5Pkby93kChWmn9iA20haMgsdU2QaFZ5ZuhzuNlyiV1ZeRgfRcIuhez7EcVM0wfOO52vzxlevtsjGLXUijRXhAJe9C2murevGfoAJOr2Nzisy21B4XrK7V1RVbappmsnYko9mwYkOpvqjfYE/5TH3wjpEjNsqnNM0Vy1KnLzzy6P++Ur/pSVGP83jwUYS1lwgD/9fABDdmyes6dYCeauIN78GCT1gzP/PhW6rRI55keU7u7iajPe/kda0xBwI6k+/czVfXGfKAEjgheCG6UIne7C5Z8T+dkXUFbEteHYqL18aZJQam3EBGukIOs6VEFWfKu5LE4HRuXlWAZ3d5Sf19OTFc1hOpyNJSHzmioxDeoui9M9emp/ikMo1zwYwK3DcoNefiM3sc4rTbJC6PKE1g5aGVgbPd8ZRg9wNQcF7F3m1dsYozeEBcvgAM5jOnpVPvr/ScDnUBRaJ/aUw8z/Co38fWzNuD0pAW1w9HXcqm4Xykfl2G+LeB7WJPnbd+l3rA+63XSvJZTnncIdnmHyYqgAPDxA7KjPVdrJWrLvDe8WZKvMhfK2J9/C2t/hLrRlWcB6J0hfC3Bvc6ZTOPkLeml+yqTH/ZRytmsl2mfW3m/Mk3SVmiJEDXZNMJSZpyDVuQli2K9nzSutzxboKt/DJitVakP7rkcawF3sJbBHbZHZxJslzsb8LuLwdHxcTH3wf0UnHBSEd6c7TL6OgHaslwR7/0fPSI57sAow2yrh47oSJWEe5+3JTW1PNaZSDvbfWBquCCFrjibK5iaUOQmYJZjsR3JGPMfEBJt3wkNymjxZG/qcecL7mGrzKFJfta7SrYuUeZ0PrPH9W98oOLFMGZ+sbfMozW63te3WC/etqiqxiCH5X4i18dmW5va/CDGdXXxDbdu0b675HWZuGvNGK4jV+AUq6iNdH/t6+gY6uPPkSXxl618hbG91vxAm+mhY3xtKR1//02xtHxrYYp18LxI8PjDq+YG6IrXsSZvg7apm4dAJdGeY4WpstgZawwE1n6W8diBDmQqsmDJDCQzSiK5d4bHDRZ8tIy4v1auHzzK+Vg3s3+u481OdK4r3T06xEcy6lugitXloWvP3oN2eltUL8pijuOEnnd+k25fwD3zr5Fsj8p10vH+fpqwAM1XOQur0QD8qOKl0Bdv3Ivh3n1zDntHlPsp0uNUnmFnLl9iCWAm5Z/aIx3TlBUECj+WoqiSg/s1+AV/tirl6yI00bxoa0jU+0HOjDazTH9tFPT4wLOPBOo9APK/lQb74zAPDi9sedP31lT9MXqDtwK3IyAW6NPNYrS4iMcX0J3znj7ld26scrzW9dkYavrETwyBDNp/wAvz0v2bMRb+XrAYeHNHvA1LA8K6DJsQZ+0HxD006QMVziiUlB0TC4HLmYuKm+MCb7xu8W3+cdalqIQZCpt2/Cl9p3fZMCZP9YJp3/sp9Jy8qMpMr/TPf0SMcNz/fgt0znavP6FyZtWMfZpfiZp7dj+RAcaHtViTu6POjcsBwTcc86uP+D6Uz9zpIKgXQmYZGJz80zXQMu/GvU5wOGVf1LzuEArOQTfZPg0udeMYS4v7fniElH57CutBgw0/6/GI5bwNYmQ2hD5mELVDverfzkdl6lYD65OphOT2oY24yDHPmDM9ZWRN4tS9wa1OGtFbOh8dE2O1JoJRM9cEcmpacfDxl7Mc29CIdRFzMmVClE1XvFu0VNqhm4z/Ep4kqTAUw4cRk/08PAIh8Brt6ctjgPeiKkLOC0ZK0I7/uBlncrG666fXlathdLg21TOCyD8aCG/sQTsQds6eQXKxs7cBVs0aw3CJ9BC6Yh/xVbWtR5NpobC928VuTLxi6v6WsLCnQ0Z3iy4FwAUy++z7g1X2u1deRAXFvpHZy4YQiUPyIb7ArBc1gBzdJ2U7VDoYPxDyjTyjSbsCifNdpdWrvt+xkcwARcugAA==`,Rn=`data:image/webp;base64,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`,zn=`/assets/p52-CLvl-tTM.webp`,Bn=`/assets/p53-CxncVOQX.webp`,Vn=`/assets/benoit-DaxgaPah.webp`,Hn=`/assets/hector-CCBLpfmZ.webp`,Un=`/assets/julien-CFWUImNL.webp`,Wn=`/assets/kilian-C5QrWxn5.webp`,Gn=`/assets/loic-DIYjAwNn.webp`,Kn=`/assets/lucas-D5bGPE2e.webp`,qn=`/assets/nicolas-R6ubR1MD.webp`,Jn=`/assets/paul-gEZdPOdu.webp`,Yn=`/assets/quentin-zUSOkcrn.webp`,Xn=`data:image/webp;base64,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`,Zn=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M70.63%20272C58.13%20272%2048%20261.9%2048%20249.4%2048%20243.4%2050.38%20237.6%2054.63%20233.4L58.51%20229.5C82.51%20205.5%2096%20172.9%2096%20138.1L96%20128C96%2057.31%20153.3%200%20224%200%20294.6%200%20351.8%2057.1%20352%20127.6L352%20128.4%20352%20128.6%20352%20138.1C352%20172.9%20365.5%20205.5%20389.5%20229.5L393.4%20233.4C397.6%20237.6%20400%20243.4%20400%20249.4%20400%20261.9%20389.9%20272%20377.4%20272L70.63%20272ZM128%20112%20128%20160C128%20213%20170.1%20256%20224%20256%20277%20256%20320%20213%20320%20160L320%2096%20312%2096C289.2%2096%20269.2%2084.09%20257.9%2066.16%20240.1%2093.66%20210.6%20112%20176%20112L128%20112ZM209.1%20359.2%20176%20304%20272%20304%20238.9%20359.2%20272.2%20483.1%20311.7%20321.9C388.9%20333.9%20448%20400.7%20448%20481.3%20448%20498.2%20434.2%20512%20417.3%20512L30.72%20512C13.75%20512%200%20498.2%200%20481.3%200%20400.7%2059.09%20333.9%20136.3%20321.9L175.8%20483.1%20209.1%20359.2Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23941100'/%3e%3cpath%20d='M312%2096%20320%2096%20320%20160C320%20213%20277%20256%20224%20256%20170.1%20256%20128%20213%20128%20160L128%20112%20176%20112C210.6%20112%20240.1%2093.66%20257.9%2066.16%20269.2%2084.1%20289.2%2096%20312%2096L312%2096Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23941100'%20opacity='0.4'/%3e%3c/svg%3e`,Qn=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M238.3%2035.38C254.1%2043.28%20260.5%2062.5%20252.6%2078.31L83.78%20416%20416%20416C433.7%20416%20448%20430.3%20448%20448%20448%20465.7%20433.7%20480%20416%20480L32%20480C20.91%20480%2010.61%20474.3%204.779%20464.8-1.052%20455.4-1.581%20443.6%203.378%20433.7L195.4%2049.69C203.3%2033.88%20222.5%2027.47%20238.3%2035.38L238.3%2035.38Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23941100'/%3e%3cpath%20d='M274.7%20278.5C258.9%20255.9%20239.9%20235.5%20218.5%20218.1L240.4%20174.3C269.4%20196.4%20294.8%20223.1%20315.5%20253.2L274.7%20278.5ZM332.4%20280.3C350.2%20312.1%20363.1%20347%20370.1%20384L321.1%20384C314.9%20356.2%20304.9%20329.9%20291.6%20305.7L332.4%20280.3Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23941100'%20opacity='0.4'/%3e%3c/svg%3e`,$n=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M64%20224%2077.5%20224C102.3%20280.5%20158.4%20320%20224%20320%20289.6%20320%20345.8%20280.5%20370.5%20224L384%20224C392.75%20224%20400%20216.75%20400%20208L400%20112C400%20103.3%20392.8%2096%20384%2096L370.5%2096C345.8%2039.5%20289.6%200%20224%200%20158.4%200%20102.3%2039.5%2077.5%2096L64%2096C55.25%2096%2048%20103.3%2048%20112L48%20208C48%20216.8%2055.25%20224%2064%20224ZM104%20136C104%20113.9%20125.5%2096%20152%2096L296%2096C322.5%2096%20344%20113.88%20344%20136L344%20160C344%20213%20301%20256%20248%20256L200%20256C147%20256%20104%20213%20104%20160L104%20136ZM336.1%20315.4C304%20338.6%20265.1%20352%20224%20352%20182.9%20352%20143.97%20338.57%20111.9%20315.41%2046.55%20340.2%200%20403.3%200%20477.3%200%20496.5%2015.52%20512%2034.66%20512L128%20512%20128%20448C128%20430.25%20142.25%20416%20160%20416L288%20416C305.75%20416%20320%20430.25%20320%20448L320%20512%20413.34%20512C432.5%20512%20448%20496.5%20448%20477.3%20448%20403.3%20401.5%20340.2%20336.1%20315.4ZM272%20448C263.25%20448%20256%20455.25%20256%20464%20256%20472.75%20263.25%20480%20272%20480%20280.75%20480%20288%20472.75%20288%20464%20288%20455.25%20280.8%20448%20272%20448Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'/%3e%3cpath%20d='M296%2096%20152%2096C125.5%2096%20104%20113.88%20104%20136L104%20160C104%20213%20147%20256%20200%20256L248%20256C301%20256%20344%20213%20344%20160L344%20136C344%20113.9%20322.5%2096%20296%2096ZM212.6%20163.8%20188%20172%20179.8%20196.6C178.585%20200.245%20173.425%20200.245%20172.21%20196.6L164%20172%20139.4%20163.8C135.754%20162.581%20135.754%20157.425%20139.4%20156.206L164%20148%20172.205%20123.38C173.42%20119.732%20178.58%20119.732%20179.795%20123.38L188%20148%20212.62%20156.203C216.3%20157.4%20216.3%20162.6%20212.6%20163.8ZM288%20416%20160%20416C142.33%20416%20128%20430.33%20128%20448L128%20512%20160%20512%20160%20464C160%20455.3%20167.3%20448%20176%20448%20184.7%20448%20192%20455.3%20192%20464L192%20512%20320%20512%20320%20448C320%20430.3%20305.7%20416%20288%20416ZM272%20480C263.25%20480%20256%20472.75%20256%20464%20256%20455.25%20263.25%20448%20272%20448%20280.75%20448%20288%20455.25%20288%20464%20288%20472.75%20280.8%20480%20272%20480Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20opacity='0.4'/%3e%3c/svg%3e`,er=`data:image/svg+xml,%3csvg%20viewBox='0%200%20640%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M240%2080C240%2053.49%20261.5%2032%20288%2032L352%2032C378.5%2032%20400%2053.49%20400%2080L400%20144C400%20170.5%20378.5%20192%20352%20192L288%20192C261.5%20192%20240%20170.5%20240%20144L240%2080ZM344%20136%20344%2088%20296%2088%20296%20136%20344%20136ZM144%20320C170.5%20320%20192%20341.5%20192%20368L192%20432C192%20458.5%20170.5%20480%20144%20480L80%20480C53.49%20480%2032%20458.5%2032%20432L32%20368C32%20341.5%2053.49%20320%2080%20320L144%20320ZM88%20376%2088%20424%20136%20424%20136%20376%2088%20376ZM560%20320C586.5%20320%20608%20341.5%20608%20368L608%20432C608%20458.5%20586.5%20480%20560%20480L496%20480C469.5%20480%20448%20458.5%20448%20432L448%20368C448%20341.5%20469.5%20320%20496%20320L560%20320ZM504%20376%20504%20424%20552%20424%20552%20376%20504%20376Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23941100'/%3e%3cpath%20d='M240%20144C240%20153.1%20243%20163.2%20248.2%20170.9%20189.2%20196.6%20146.6%20253%20140.7%20320L84.53%20320C89.56%20244.1%20129.6%20179.6%20188.5%20140L121.6%20140C111.2%20161.3%2089.3%20176%2064%20176%2028.65%20176%200%20147.3%200%20112%200%2076.65%2028.65%2048%2064%2048%2089.3%2048%20111.2%2062.69%20121.6%2084L240%2084%20240%20144ZM400%20144%20400%2084%20518.4%2084C528.8%2062.69%20550.7%2048%20576%2048%20611.3%2048%20640%2076.65%20640%20112%20640%20147.3%20611.3%20176%20576%20176%20550.7%20176%20528.8%20161.3%20518.4%20140L451.5%20140C510.4%20179.6%20550.4%20244.1%20555.5%20320L499.3%20320C493.4%20253%20450.8%20196.6%20391.8%20170.9%20396.1%20163.2%20400%20153.1%20400%20144L400%20144Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23941100'%20opacity='0.4'/%3e%3c/svg%3e`,tr=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M97.66%20107.4C107.5%2046.48%20160.3%200%20224%200%20283.6%200%20333.8%2040.79%20347.1%2096L312%2096C289.2%2096%20269.2%2084.09%20257.9%2066.16%20240.1%2093.66%20210.6%20112%20176%20112L120%20112C112.1%20112%20104.5%20110.3%2097.66%20107.4L97.66%20107.4ZM209.1%20359.2%20176%20304%20272%20304%20238.9%20359.2%20272.2%20483.1%20311.7%20321.9C388.9%20333.9%20448%20400.7%20448%20481.3%20448%20498.2%20434.2%20512%20417.3%20512L30.72%20512C13.75%20512%200%20498.2%200%20481.3%200%20400.7%2059.09%20333.9%20136.3%20321.9L175.8%20483.1%20209.1%20359.2Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23FF9900'/%3e%3cpath%20d='M257.9%2066.16C269.2%2084.1%20289.2%2096%20312%2096L347.1%2096C350.6%20106.2%20352%20116.1%20352%20128%20352%20198.7%20294.7%20256%20224%20256%20153.3%20256%2096%20198.7%2096%20128%2096%20120.1%2096.57%20114.1%2097.65%20107.4%20104.5%20110.4%20112.1%20112%20120%20112L176%20112C210.6%20112%20240.1%2093.66%20257.9%2066.16L257.9%2066.16Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23FF9900'%20opacity='0.4'/%3e%3c/svg%3e`,nr=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cstyle%3e%20.MsftOfcThm_Accent1_lumMod_50_Fill_v2%20{%20fill:%233C8C93;%20}%20%3c/style%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M0%2080C0%2035.82%2035.82%200%2080%200%20124.2%200%20160%2035.82%20160%2080%20160%20124.2%20124.2%20160%2080%20160%2035.82%20160%200%20124.2%200%2080ZM80%20104C93.25%20104%20104%2093.25%20104%2080%20104%2066.75%2093.25%2056%2080%2056%2066.75%2056%2056%2066.75%2056%2080%2056%2093.25%2066.75%20104%2080%20104ZM288%2080C288%2035.82%20323.8%200%20368%200%20412.2%200%20448%2035.82%20448%2080%20448%20124.2%20412.2%20160%20368%20160%20323.8%20160%20288%20124.2%20288%2080ZM368%20104C381.3%20104%20392%2093.25%20392%2080%20392%2066.75%20381.3%2056%20368%2056%20354.7%2056%20344%2066.75%20344%2080%20344%2093.25%20354.7%20104%20368%20104ZM160%20432C160%20476.2%20124.2%20512%2080%20512%2035.82%20512%200%20476.2%200%20432%200%20387.8%2035.82%20352%2080%20352%20124.2%20352%20160%20387.8%20160%20432ZM80%20408C66.75%20408%2056%20418.7%2056%20432%2056%20445.3%2066.75%20456%2080%20456%2093.25%20456%20104%20445.3%20104%20432%20104%20418.7%2093.25%20408%2080%20408Z'%20class='MsftOfcThm_Accent1_lumMod_50_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%233C8C93'/%3e%3cpath%20d='M112%20241.1C130.8%20230.2%20152.7%20224%20176%20224L272%20224C307.3%20224%20336%20195.3%20336%20160L336%20153.3C345.8%20157.6%20356.6%20160%20368%20160%20379.4%20160%20390.2%20157.6%20400%20153.3L400%20160C400%20230.7%20342.7%20288%20272%20288L176%20288C140.7%20288%20112%20316.7%20112%20352L112%20358.7C102.2%20354.4%2091.38%20352%2080%20352%2068.62%20352%2057.8%20354.4%2048%20358.7L48%20153.3C57.8%20157.6%2068.62%20160%2080%20160%2091.38%20160%20102.2%20157.6%20112%20153.3L112%20241.1Z'%20class='MsftOfcThm_Accent1_lumMod_50_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%233C8C93'%20opacity='0.4'/%3e%3c/svg%3e`,rr=`data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M232.5%205.167C247.4-1.722%20264.6-1.722%20279.5%205.167L498.1%20106.2C506.6%20110.1%20512%20118.6%20512%20127.1%20512%20137.3%20506.6%20145.8%20498.1%20149.8L279.5%20250.8C264.6%20257.7%20247.4%20257.7%20232.5%20250.8L13.93%20149.8C5.438%20145.8%200%20137.3%200%20127.1%200%20118.6%205.437%20110.1%2013.93%20106.2L232.5%205.167ZM498.1%20362.2C506.6%20366.1%20512%20374.6%20512%20383.1%20512%20393.3%20506.6%20401.8%20498.1%20405.8L279.5%20506.8C264.6%20513.7%20247.4%20513.7%20232.5%20506.8L13.93%20405.8C5.438%20401.8%200%20393.3%200%20383.1%200%20374.6%205.437%20366.1%2013.93%20362.2L67.13%20337.6%20219.1%20407.8C242.5%20418.7%20269.5%20418.7%20292.9%20407.8L444.9%20337.6%20498.1%20362.2Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23FF9900'/%3e%3cpath%20d='M292.9%20279.8%20444.9%20209.6%20498.1%20234.2C506.6%20238.1%20512%20246.6%20512%20255.1%20512%20265.3%20506.6%20273.8%20498.1%20277.8L279.5%20378.8C264.6%20385.7%20247.4%20385.7%20232.5%20378.8L13.93%20277.8C5.438%20273.8%200%20265.3%200%20255.1%200%20246.6%205.437%20238.1%2013.93%20234.2L67.13%20209.6%20219.1%20279.8C242.5%20290.7%20269.5%20290.7%20292.9%20279.8L292.9%20279.8Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23FF9900'%20opacity='0.4'/%3e%3c/svg%3e`,ir=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M320%20352%20128%20352C57.31%20352%200%20409.31%200%20480%200%20497.67%2014.33%20512%2032%20512L160%20512%20160%20464%20224%20416%20288%20464%20288%20512%20416%20512C433.67%20512%20448%20497.67%20448%20480%20448%20409.3%20390.7%20352%20320%20352ZM89.3%20293.9%20207.8%20320%20240.11%20320%20358.61%20293.91C374.09%20290.502%20384.78%20276.48%20383.85%20260.8L376.944%20143.8C372.8%2063.19%20305.5%200%20224%200%20142.5%200%2075.25%2063.19%2070.96%20143.8L64.06%20260.8C63.13%20276.5%2073.82%20290.5%2089.3%20293.9ZM329.7%20156.2%20335.233%20249.94%20248%20269.1%20248%20171.5%20329.7%20156.2ZM224%2048C270.57%2048%20309.95%2078.06%20323.72%20120L124.2%20120C137.9%2078.14%20177.4%2048%20224%2048ZM118.3%20156.2%20200%20171.5%20200%20269.13%20112.8%20249.9%20118.3%20156.2Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'/%3e%3cpath%20d='M330.5%20169.9C305.36%20183.82%20266.27%20213.72%20257.81%20266.92L335.22%20249.88%20330.5%20169.9ZM96%200%2080%200C71.16%200%2064%207.164%2064%2016L64%20264%2064.3984%20263.615C64.37%20262.7%2064%20261.8%2064.06%20260.8L70.966%20143.8C72.43%20116.2%2081.71%2090.9%2096%2069.22L96%2032C104.836%2032%20112%2024.836%20112%2016%20112%207.164%20104.8%200%2096%200ZM117.5%20169.9%20112.779%20249.88%20190.189%20266.92C181.7%20213.8%20142.6%20183.9%20117.5%20169.9ZM160%20464%20160%20512%20288%20512%20288%20464%20224%20416%20160%20464Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20opacity='0.4'/%3e%3c/svg%3e`,ar=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M96%2093.06%2096%20160%20352%20160%20352%2093.06C370.6%2086.45%20384%2068.87%20384%2048%20384%2021.49%20362.5%200%20336%200%20321.58%200%20308.8%206.488%20300%2016.55%20291.2%206.488%20278.4%200%20264%200%20247.3%200%20232.6%208.564%20224%2021.53%20215.4%208.564%20200.7%200%20184%200%20169.6%200%20156.8%206.488%20148%2016.55%20139.2%206.488%20126.4%200%20112%200%2085.49%200%2064%2021.49%2064%2048%2064%2068.87%2077.4%2086.45%2096%2093.06ZM352%20356.5%20352%20321.21%20128%20410.8%20128%20512%20416%20512C433.67%20512%20448%20497.67%20448%20480%20448%20420.4%20407.1%20370.8%20352%20356.5ZM208%20448C199.2%20448%20192%20440.8%20192%20432%20192%20423.2%20199.2%20416%20208%20416%20216.8%20416%20224%20423.162%20224%20432%20224%20440.8%20216.8%20448%20208%20448ZM304%20448C295.164%20448%20288%20440.836%20288%20432%20288%20423.162%20295.164%20416%20304%20416%20312.836%20416%20320%20423.162%20320%20432%20320%20440.8%20312.8%20448%20304%20448ZM96%20320%2096%20356.53C40.89%20370.8%200%20420.4%200%20480%200%20497.67%2014.33%20512%2032%20512L96%20512%2096%20389.2%20202.4%20346.63%2096%20320Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'/%3e%3cpath%20d='M352%20160%20352%20176C352%20246.75%20294.75%20304%20224%20304%20153.25%20304%2096%20246.75%2096%20176L96%20160%20352%20160Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20opacity='0.4'/%3e%3c/svg%3e`,or=`data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M129.9%2084.69%20107.3%20107.3C101.1%20113.6%2090.94%20113.6%2084.69%20107.3%2078.44%20101.1%2078.44%2090.93%2084.69%2084.69L107.3%2062.06%20129.9%2084.69ZM209.9%20164.7%20187.3%20187.3C181.1%20193.6%20170.9%20193.6%20164.7%20187.3%20158.4%20181.1%20158.4%20170.9%20164.7%20164.7L187.3%20142.1%20209.9%20164.7ZM289.9%20244.7%20267.3%20267.3C261.1%20273.6%20250.9%20273.6%20244.7%20267.3%20238.4%20261.1%20238.4%20250.9%20244.7%20244.7L267.3%20222.1%20289.9%20244.7ZM369.9%20324.7%20347.3%20347.3C341.1%20353.6%20330.9%20353.6%20324.7%20347.3%20318.4%20341.1%20318.4%20330.9%20324.7%20324.7L347.3%20302.1%20369.9%20324.7ZM449.9%20404.7%20427.3%20427.3C421.1%20433.6%20410.9%20433.6%20404.7%20427.3%20398.4%20421.1%20398.4%20410.9%20404.7%20404.7L427.3%20382.1%20449.9%20404.7Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23941100'/%3e%3cpath%20d='M107.3%2062.06%2084.69%2084.69C78.44%2090.93%2078.44%20101.1%2084.69%20107.3%2090.93%20113.6%20101.1%20113.6%20107.3%20107.3L129.9%2084.69%20187.3%20142.1%20164.7%20164.7C158.4%20170.9%20158.4%20181.1%20164.7%20187.3%20170.9%20193.6%20181.1%20193.6%20187.3%20187.3L209.9%20164.7%20267.3%20222.1%20244.7%20244.7C238.4%20250.9%20238.4%20261.1%20244.7%20267.3%20250.9%20273.6%20261.1%20273.6%20267.3%20267.3L289.9%20244.7%20347.3%20302.1%20324.7%20324.7C318.4%20330.9%20318.4%20341.1%20324.7%20347.3%20330.9%20353.6%20341.1%20353.6%20347.3%20347.3L369.9%20324.7%20427.3%20382.1%20404.7%20404.7C398.4%20410.9%20398.4%20421.1%20404.7%20427.3%20410.9%20433.6%20421.1%20433.6%20427.3%20427.3L449.9%20404.7%20502.6%20457.4C511.8%20466.5%20514.5%20480.3%20509.6%20492.2%20504.6%20504.2%20492.9%20512%20480%20512L64%20512C28.65%20512%200%20483.3%200%20448L0%2032C0%2019.06%207.796%207.39%2019.75%202.437%2031.71-2.516%2045.48%200.2215%2054.63%209.373L107.3%2062.06ZM128%20256%20128%20384%20256%20384%20128%20256Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%23941100'%20opacity='0.4'/%3e%3c/svg%3e`,sr=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M105.5%20224%2048.02%20224C36.7%20224%2028.96%20235.4%2033.16%20245.9L70.31%20338.77C27.87%20370.4%200%20420.4%200%20477.3%200%20496.5%2015.52%20512%2034.66%20512L184%20512%20117.9%20247.6C112.9%20240.3%20108.9%20232.3%20105.5%20224ZM377.7%20338.8%20414.85%20245.93C419%20235.4%20411.3%20224%20399.1%20224L341.62%20224C338.245%20232.322%20334.173%20240.28%20329.21%20247.62L264%20512%20413.3%20512C432.5%20512%20448%20496.5%20448%20477.3%20448%20420.4%20420.1%20370.4%20377.7%20338.8ZM281.6%20224C302.8%20224%20320%20207%20320%20186L320%20169.5C377.3%20161.2%20416%20145.8%20416%20128%20416%20111.92%20384.25%2097.72%20335.69%2089.01%20323.8%2045.15%20304.9%200%20277.4%200%20267.02%200%20257.78%204.5%20250.02%2010.5%20234.77%2022.38%20213.27%2022.38%20198.02%2010.5%20190.3%204.5%20181.1%200%20170.7%200%20143.2%200%20124.4%2045.16%20112.5%2088.98%2063.83%2097.68%2032%20111.9%2032%20128%2032%20145.76%2070.67%20161.22%20128%20169.53L128%20186.05C128%20207%20145.2%20224%20166.4%20224L178.73%20224C195.19%20224%20209.02%20213.61%20214.36%20199.01%20215.9%20194.9%20219.6%20192%20224%20192%20228.4%20192%20232.105%20194.887%20233.615%20199.008%20238.1%20213.6%20252.8%20224%20269.3%20224L281.6%20224Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'/%3e%3cpath%20d='M176%20320%20208%20376%20176.01%20479.1%20184%20512%20264%20512%20271.988%20479.95%20240%20376%20272%20320%20176%20320ZM350.8%20163.9C341.2%20166%20331.1%20167.9%20320%20169.5L320%20186.02C320%20207%20302.8%20224%20281.6%20224L269.27%20224C252.81%20224%20238.98%20213.61%20233.64%20199.01%20232.1%20194.9%20228.4%20192%20224%20192%20219.6%20192%20215.9%20194.9%20214.4%20199%20209%20213.6%20195.2%20224%20178.8%20224L166.47%20224C145.2%20224%20128%20207%20128%20186L128%20169.5C116.9%20167.9%20106.8%20166%2097.22%20163.9%2096.83%20167.1%2096%20171.8%2096%20176%2096%20246.69%20153.31%20304%20223.1%20304%20292.89%20304%20352%20246.7%20352%20176%20352%20171.8%20351.2%20167.1%20350.8%20163.9Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20opacity='0.4'/%3e%3c/svg%3e`,cr=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M274.7%20304%20173.3%20304C77.61%20304%200%20381.6%200%20477.3%200%20496.5%2015.52%20512%2034.66%20512L413.3%20512C432.5%20512%20448%20496.5%20448%20477.3%20448%20381.6%20370.4%20304%20274.7%20304ZM96%20192C103.096%20192%20109.78%20190.367%20115.84%20187.604%20113.6%20178.7%20112%20169.6%20112%20160L112%20112C112%20106.826%20112.844%20101.88%20113.523%2096.89%20122.431%20103.285%20132.723%20107.77%20143.813%20110.11%20149.1%20111.2%20154.4%20112%20160%20112%20186.29%20112%20209.42%2099.15%20224%2079.56%20238.6%2099.15%20261.7%20112%20288%20112%20293.582%20112%20298.95%20111.223%20304.19%20110.115%20315.28%20107.771%20325.57%20103.289%20334.48%2096.895%20335.2%20101.9%20336%20106.8%20336%20112L336%20160C336%20169.582%20334.428%20178.73%20332.164%20187.6%20338.2%20190.4%20344.9%20192%20352%20192%20378.51%20192%20400%20170.51%20400%20144L400%20112C400%2085.49%20378.5%2064%20352%2064%20342.941%2064%20334.56%2066.658%20327.33%2071.02%20311%2029.57%20271.3%200%20224%200%20176.7%200%20136.1%2029.57%20120.7%2071.02%20113.4%2066.66%20105.1%2064%2096%2064%2069.49%2064%2048%2085.49%2048%20112L48%20144C48%20170.5%2069.49%20192%2096%20192Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'/%3e%3cpath%20d='M288%20112C305.38%20112%20321.36%20106.312%20334.48%2096.89%20335.2%20101.9%20336%20106.8%20336%20112L336%20160C336%20221.86%20285.86%20272%20224%20272%20162.14%20272%20112%20221.9%20112%20160L112%20112C112%20106.826%20112.844%20101.88%20113.523%2096.89%20126.6%20106.3%20142.6%20112%20160%20112%20186.29%20112%20209.42%2099.15%20224%2079.56%20238.6%2099.15%20261.7%20112%20288%20112Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20opacity='0.4'/%3e%3c/svg%3e`,lr=`data:image/svg+xml,%3csvg%20viewBox='0%200%20384%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cstyle%3e%20.MsftOfcThm_Accent1_lumMod_50_Fill_v2%20{%20fill:%233C8C93;%20}%20%3c/style%3e%3cpath%20d='M64%200C28.7%200%200%2028.7%200%2064L0%20448C0%20483.3%2028.7%20512%2064%20512L320%20512C355.3%20512%20384%20483.3%20384%20448L384%20160%20256%20160C238.3%20160%20224%20145.7%20224%20128L224%200%2064%200ZM256%200%20256%20128%20384%20128%20256%200ZM112%20256%20144%20256C170.5%20256%20192%20277.5%20192%20304L192%20368C192%20394.5%20170.5%20416%20144%20416L112%20416C85.5%20416%2064%20394.5%2064%20368L64%20304C64%20277.5%2085.5%20256%20112%20256ZM96%20304%2096%20368C96%20376.8%20103.2%20384%20112%20384L144%20384C152.8%20384%20160%20376.8%20160%20368L160%20304C160%20295.2%20152.8%20288%20144%20288L112%20288C103.2%20288%2096%20295.2%2096%20304ZM240%20256%20272%20256C280.8%20256%20288%20263.2%20288%20272L288%20384%20304%20384C312.8%20384%20320%20391.2%20320%20400%20320%20408.8%20312.8%20416%20304%20416L272%20416%20240%20416C231.2%20416%20224%20408.8%20224%20400%20224%20391.2%20231.2%20384%20240%20384L256%20384%20256%20288%20240%20288C231.2%20288%20224%20280.8%20224%20272%20224%20263.2%20231.2%20256%20240%20256Z'%20class='MsftOfcThm_Accent1_lumMod_50_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%233C8C93'%20fill-opacity='1'/%3e%3c/svg%3e`,ur=`data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cstyle%3e%20.MsftOfcThm_Accent1_lumMod_50_Fill_v2%20{%20fill:%233C8C93;%20}%20%3c/style%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M0%2080C0%2035.82%2035.82%200%2080%200%20124.2%200%20160%2035.82%20160%2080%20160%20124.2%20124.2%20160%2080%20160%2035.82%20160%200%20124.2%200%2080ZM80%20104C93.25%20104%20104%2093.25%20104%2080%20104%2066.75%2093.25%2056%2080%2056%2066.75%2056%2056%2066.75%2056%2080%2056%2093.25%2066.75%20104%2080%20104ZM0%20432C0%20387.8%2035.82%20352%2080%20352%20124.2%20352%20160%20387.8%20160%20432%20160%20476.2%20124.2%20512%2080%20512%2035.82%20512%200%20476.2%200%20432ZM80%20456C93.25%20456%20104%20445.3%20104%20432%20104%20418.7%2093.25%20408%2080%20408%2066.75%20408%2056%20418.7%2056%20432%2056%20445.3%2066.75%20456%2080%20456ZM512%20432C512%20476.2%20476.2%20512%20432%20512%20387.8%20512%20352%20476.2%20352%20432%20352%20387.8%20387.8%20352%20432%20352%20476.2%20352%20512%20387.8%20512%20432ZM432%20408C418.7%20408%20408%20418.7%20408%20432%20408%20445.3%20418.7%20456%20432%20456%20445.3%20456%20456%20445.3%20456%20432%20456%20418.7%20445.3%20408%20432%20408Z'%20class='MsftOfcThm_Accent1_lumMod_50_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%233C8C93'/%3e%3cpath%20d='M320%2064%20336%2064C406.7%2064%20464%20121.3%20464%20192L464%20358.7C454.2%20354.4%20443.4%20352%20432%20352%20420.6%20352%20409.8%20354.4%20400%20358.7L400%20192C400%20156.7%20371.3%20128%20336%20128L320%20128%20320%20168C320%20177.5%20314.4%20186.1%20305.8%20189.9%20297.1%20193.8%20286.1%20192.2%20279.9%20185.8L199.9%20113.8C194.9%20109.3%20192%20102.8%20192%2096%20192%2089.2%20194.9%2082.71%20199.9%2078.16L279.9%206.161C286.1-0.1791%20297.1-1.779%20305.8%202.077%20314.4%205.933%20320%2014.52%20320%2024L320%2064ZM48%20153.3C57.8%20157.6%2068.62%20160%2080%20160%2091.38%20160%20102.2%20157.6%20112%20153.3L112%20358.7C102.2%20354.4%2091.38%20352%2080%20352%2068.62%20352%2057.8%20354.4%2048%20358.7L48%20153.3Z'%20class='MsftOfcThm_Accent1_lumMod_50_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%233C8C93'%20opacity='0.4'/%3e%3c/svg%3e`,dr=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M70.63%20272C58.13%20272%2048%20261.9%2048%20249.4%2048%20243.4%2050.38%20237.6%2054.63%20233.4L58.51%20229.5C82.51%20205.5%2096%20172.9%2096%20138.1L96%20128C96%2057.31%20153.3%200%20224%200%20294.6%200%20351.8%2057.1%20352%20127.6L352%20128.4%20352%20128.6%20352%20138.1C352%20172.9%20365.5%20205.5%20389.5%20229.5L393.4%20233.4C397.6%20237.6%20400%20243.4%20400%20249.4%20400%20261.9%20389.9%20272%20377.4%20272L70.63%20272ZM128%20112%20128%20160C128%20213%20170.1%20256%20224%20256%20277%20256%20320%20213%20320%20160L320%2096%20312%2096C289.2%2096%20269.2%2084.09%20257.9%2066.16%20240.1%2093.66%20210.6%20112%20176%20112L128%20112ZM288%20362C260.4%20369.1%20240%20394.2%20240%20424L240%20464C240%20472.8%20247.2%20480%20256%20480L272%20480C280.8%20480%20288%20472.8%20288%20464%20288%20455.2%20280.8%20448%20272%20448L272%20424C272%20406.3%20286.3%20392%20304%20392%20321.7%20392%20336%20406.3%20336%20424L336%20448C327.2%20448%20320%20455.2%20320%20464%20320%20472.8%20327.2%20480%20336%20480L352%20480C360.8%20480%20368%20472.8%20368%20464L368%20424C368%20394.2%20347.6%20369.1%20320%20362L320%20308.8C393.5%20326.7%20448%20393%20448%20472L448%20480C448%20497.7%20433.7%20512%20416%20512L32%20512C14.33%20512%200%20497.7%200%20480L0%20472C0%20393%2054.53%20326.7%20128%20308.8L128%20370.3C104.9%20377.2%2088%20398.6%2088%20424%2088%20454.9%20113.1%20480%20144%20480%20174.9%20480%20200%20454.9%20200%20424%20200%20398.6%20183.1%20377.2%20160%20370.3L160%20304.2C162.7%20304.1%20165.3%20304%20168%20304L280%20304C282.7%20304%20285.3%20304.1%20288%20304.2L288%20362ZM168%20424C168%20437.3%20157.3%20448%20144%20448%20130.7%20448%20120%20437.3%20120%20424%20120%20410.7%20130.7%20400%20144%20400%20157.3%20400%20168%20410.7%20168%20424Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'/%3e%3cpath%20d='M312%2096%20320%2096%20320%20160C320%20213%20277%20256%20224%20256%20170.1%20256%20128%20213%20128%20160L128%20112%20176%20112C210.6%20112%20240.1%2093.66%20257.9%2066.16%20269.2%2084.1%20289.2%2096%20312%2096L312%2096Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20opacity='0.4'/%3e%3c/svg%3e`,fr=`data:image/svg+xml,%3csvg%20viewBox='0%200%20448%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cdefs%3e%3c/defs%3e%3cpath%20d='M80%20128C80%2092.65%20108.7%2064%20144%2064L304%2064C339.3%2064%20368%2092.65%20368%20128L368%20256C368%20291.3%20339.3%20320%20304%20320L144%20320C108.7%20320%2080%20291.3%2080%20256L80%20128ZM160%20128C142.3%20128%20128%20142.3%20128%20160%20128%20177.7%20142.3%20192%20160%20192%20177.7%20192%20192%20177.7%20192%20160%20192%20142.3%20177.7%20128%20160%20128ZM288%20192C305.7%20192%20320%20177.7%20320%20160%20320%20142.3%20305.7%20128%20288%20128%20270.3%20128%20256%20142.3%20256%20160%20256%20177.7%20270.3%20192%20288%20192ZM160%20272C168.8%20272%20176%20264.8%20176%20256%20176%20247.2%20168.8%20240%20160%20240%20151.2%20240%20144%20247.2%20144%20256%20144%20264.8%20151.2%20272%20160%20272ZM224%20240C215.2%20240%20208%20247.2%20208%20256%20208%20264.8%20215.2%20272%20224%20272%20232.8%20272%20240%20264.8%20240%20256%20240%20247.2%20232.8%20240%20224%20240ZM288%20272C296.8%20272%20304%20264.8%20304%20256%20304%20247.2%20296.8%20240%20288%20240%20279.2%20240%20272%20247.2%20272%20256%20272%20264.8%20279.2%20272%20288%20272ZM0%20448C0%20394.1%2042.98%20352%2096%20352L352%20352C405%20352%20448%20394.1%20448%20448L448%20480C448%20497.7%20433.7%20512%20416%20512L352%20512%20352%20448C352%20430.3%20337.7%20416%20320%20416L128%20416C110.3%20416%2096%20430.3%2096%20448L96%20512%2032%20512C14.33%20512%200%20497.7%200%20480L0%20448Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'/%3e%3cpath%20d='M240%2064%20208%2064%20208%2016C208%207.164%20215.2%200%20224%200%20232.8%200%20240%207.164%20240%2016L240%2064ZM48%20144%2048%20240C48%20248.8%2040.84%20256%2032%20256%2023.16%20256%2016%20248.8%2016%20240L16%20144C16%20135.2%2023.16%20128%2032%20128%2040.84%20128%2048%20135.2%2048%20144ZM176%20512%20144%20512%20144%20464C144%20455.2%20151.2%20448%20160%20448%20168.8%20448%20176%20455.2%20176%20464L176%20512ZM240%20512%20208%20512%20208%20464C208%20455.2%20215.2%20448%20224%20448%20232.8%20448%20240%20455.2%20240%20464L240%20512ZM288%20448C296.8%20448%20304%20455.2%20304%20464L304%20512%20272%20512%20272%20464C272%20455.2%20279.2%20448%20288%20448ZM432%20240C432%20248.8%20424.8%20256%20416%20256%20407.2%20256%20400%20248.8%20400%20240L400%20144C400%20135.2%20407.2%20128%20416%20128%20424.8%20128%20432%20135.2%20432%20144L432%20240Z'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%237030A0'%20opacity='0.4'/%3e%3c/svg%3e`,pr=`data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20overflow='hidden'%3e%3cstyle%3e%20.MsftOfcThm_Accent1_lumMod_50_Fill_v2%20{%20fill:%233C8C93;%20}%20%3c/style%3e%3cpath%20d='M0%2096C0%2060.7%2028.7%2032%2064%2032L448%2032C483.3%2032%20512%2060.7%20512%2096L512%20416C512%20451.3%20483.3%20480%20448%20480L64%20480C28.7%20480%200%20451.3%200%20416L0%2096ZM102.3%20151.8C93.3%20161.6%2094%20176.8%20103.8%20185.7L180.5%20256%20103.8%20326.3C94%20335.3%2093.4%20350.4%20102.3%20360.2%20111.2%20370%20126.4%20370.6%20136.2%20361.7L232.2%20273.7C237.2%20269.2%20240%20262.7%20240%20256%20240%20249.3%20237.2%20242.9%20232.2%20238.3L136.2%20150.3C126.4%20141.3%20111.2%20142%20102.3%20151.8ZM248%20336C234.7%20336%20224%20346.7%20224%20360%20224%20373.3%20234.7%20384%20248%20384L392%20384C405.3%20384%20416%20373.3%20416%20360%20416%20346.7%20405.3%20336%20392%20336L248%20336Z'%20class='MsftOfcThm_Accent1_lumMod_50_Fill_v2'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='4'%20fill='%233C8C93'%20fill-opacity='1'/%3e%3c/svg%3e`,mr=`/assets/v56-DbuHrLo7.webp`,hr=`/assets/v57-BVza1h20.webp`,gr=`/assets/v58-BO4C0dAi.webp`,_r=`/assets/v59-D7MDvF3h.webp`,vr=`/assets/v60-DmJzs8rv.webp`,yr=`/assets/stegano-PVa5GGif.webp`,br=`/assets/fiches-D6SpTzYG.webp`,xr=`/assets/puzzle-DTVM_l98.webp`,Sr=`/assets/ouverture-ChxznJyt.webp`,Cr=(e,t)=>{for(let n in t)e[n]=t[n];return e},P=(e,t)=>Array.from(e.querySelectorAll(t)),wr=(e,t,n)=>{n?e.classList.add(t):e.classList.remove(t)},Tr=e=>{if(typeof e==`string`){if(e===`null`)return null;if(e===`true`)return!0;if(e===`false`)return!1;if(e.match(/^-?[\d\.]+$/))return parseFloat(e)}return e},Er=(e,t)=>{e.style.transform=t},Dr=(e,t)=>{let n=e.matches||e.matchesSelector||e.msMatchesSelector;return!(!n||!n.call(e,t))},Or=(e,t)=>{if(typeof e.closest==`function`)return e.closest(t);for(;e;){if(Dr(e,t))return e;e=e.parentNode}return null},kr=e=>{let t=(e||=document.documentElement).requestFullscreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;t&&t.apply(e)},Ar=e=>{let t=document.createElement(`style`);return t.type=`text/css`,e&&e.length>0&&(t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))),document.head.appendChild(t),t},jr=()=>{let e={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,(t=>{e[t.split(`=`).shift()]=t.split(`=`).pop()}));for(let t in e){let n=e[t];e[t]=Tr(unescape(n))}return e.dependencies!==void 0&&delete e.dependencies,e},Mr={mp4:`video/mp4`,m4a:`video/mp4`,ogv:`video/ogg`,mpeg:`video/mpeg`,webm:`video/webm`},Nr=navigator.userAgent,Pr=/(iphone|ipod|ipad|android)/gi.test(Nr)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1,Fr=/android/gi.test(Nr),Ir=function(e){if(e){var t=function(e){return[].slice.call(e)},n=3,r=[],i=null,a=`requestAnimationFrame`in e?function(){e.cancelAnimationFrame(i),i=e.requestAnimationFrame((function(){return s(r.filter((function(e){return e.dirty&&e.active})))}))}:function(){},o=function(e){return function(){r.forEach((function(t){return t.dirty=e})),a()}},s=function(e){e.filter((function(e){return!e.styleComputed})).forEach((function(e){e.styleComputed=d(e)})),e.filter(f).forEach(p);var t=e.filter(u);t.forEach(l),t.forEach((function(e){p(e),c(e)})),t.forEach(m)},c=function(e){return e.dirty=0},l=function(e){e.availableWidth=e.element.parentNode.clientWidth,e.currentWidth=e.element.scrollWidth,e.previousFontSize=e.currentFontSize,e.currentFontSize=Math.min(Math.max(e.minSize,e.availableWidth/e.currentWidth*e.previousFontSize),e.maxSize),e.whiteSpace=e.multiLine&&e.currentFontSize===e.minSize?`normal`:`nowrap`},u=function(e){return e.dirty!==2||e.dirty===2&&e.element.parentNode.clientWidth!==e.availableWidth},d=function(t){var n=e.getComputedStyle(t.element,null);return t.currentFontSize=parseFloat(n.getPropertyValue(`font-size`)),t.display=n.getPropertyValue(`display`),t.whiteSpace=n.getPropertyValue(`white-space`),!0},f=function(e){var t=!1;return!e.preStyleTestCompleted&&(/inline-/.test(e.display)||(t=!0,e.display=`inline-block`),e.whiteSpace!==`nowrap`&&(t=!0,e.whiteSpace=`nowrap`),e.preStyleTestCompleted=!0,t)},p=function(e){e.element.style.whiteSpace=e.whiteSpace,e.element.style.display=e.display,e.element.style.fontSize=e.currentFontSize+`px`},m=function(e){e.element.dispatchEvent(new CustomEvent(`fit`,{detail:{oldValue:e.previousFontSize,newValue:e.currentFontSize,scaleFactor:e.currentFontSize/e.previousFontSize}}))},h=function(e,t){return function(){e.dirty=t,e.active&&a()}},g=function(e){return function(){r=r.filter((function(t){return t.element!==e.element})),e.observeMutations&&e.observer.disconnect(),e.element.style.whiteSpace=e.originalStyle.whiteSpace,e.element.style.display=e.originalStyle.display,e.element.style.fontSize=e.originalStyle.fontSize}},_=function(e){return function(){e.active||(e.active=!0,a())}},v=function(e){return function(){return e.active=!1}},y=function(e){e.observeMutations&&(e.observer=new MutationObserver(h(e,1)),e.observer.observe(e.element,e.observeMutations))},b={minSize:16,maxSize:512,multiLine:!0,observeMutations:`MutationObserver`in e&&{subtree:!0,childList:!0,characterData:!0}},x=null,S=function(){e.clearTimeout(x),x=e.setTimeout(o(2),T.observeWindowDelay)},C=[`resize`,`orientationchange`];return Object.defineProperty(T,"observeWindow",{set:function(t){var n=`${t?`add`:`remove`}EventListener`;C.forEach((function(t){e[n](t,S)}))}}),T.observeWindow=!0,T.observeWindowDelay=100,T.fitAll=o(n),T}function w(e,t){var i=Object.assign({},b,t),o=e.map((function(e){var t=Object.assign({},i,{element:e,active:!0});return function(e){e.originalStyle={whiteSpace:e.element.style.whiteSpace,display:e.element.style.display,fontSize:e.element.style.fontSize},y(e),e.newbie=!0,e.dirty=!0,r.push(e)}(t),{element:e,fit:h(t,n),unfreeze:_(t),freeze:v(t),unsubscribe:g(t)}}));return a(),o}function T(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof e==`string`?w(t(document.querySelectorAll(e)),n):w([e],n)[0]}}(typeof window>`u`?null:window),Lr=class{constructor(e){this.Reveal=e,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(e){if(this.Reveal.isScrollView())return!0;let t=this.Reveal.getConfig().preloadIframes;return typeof t!=`boolean`&&(t=e.hasAttribute(`data-preload`)),t}load(e,t={}){e.style.display=this.Reveal.getConfig().display,P(e,`img[data-src], video[data-src], audio[data-src], iframe[data-src]`).forEach((e=>{(e.tagName!==`IFRAME`||this.shouldPreload(e))&&(e.setAttribute(`src`,e.getAttribute(`data-src`)),e.setAttribute(`data-lazy-loaded`,``),e.removeAttribute(`data-src`))})),P(e,`video, audio`).forEach((e=>{let t=0;P(e,`source[data-src]`).forEach((e=>{e.setAttribute(`src`,e.getAttribute(`data-src`)),e.removeAttribute(`data-src`),e.setAttribute(`data-lazy-loaded`,``),t+=1})),Pr&&e.tagName===`VIDEO`&&e.setAttribute(`playsinline`,``),t>0&&e.load()}));let n=e.slideBackgroundElement;if(n){n.style.display=`block`;let r=e.slideBackgroundContentElement,i=e.getAttribute(`data-background-iframe`);if(!1===n.hasAttribute(`data-loaded`)){n.setAttribute(`data-loaded`,`true`);let a=e.getAttribute(`data-background-image`),o=e.getAttribute(`data-background-video`),s=e.hasAttribute(`data-background-video-loop`),c=e.hasAttribute(`data-background-video-muted`);if(a)/^data:/.test(a.trim())?r.style.backgroundImage=`url(${a.trim()})`:r.style.backgroundImage=a.split(`,`).map((e=>`url(${((e=``)=>encodeURI(e).replace(/%5B/g,`[`).replace(/%5D/g,`]`).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)))(decodeURI(e.trim()))})`)).join(`,`);else if(o&&!this.Reveal.isSpeakerNotes()){let e=document.createElement(`video`);s&&e.setAttribute(`loop`,``),c&&(e.muted=!0),Pr&&(e.muted=!0,e.setAttribute(`playsinline`,``)),o.split(`,`).forEach((t=>{let n=document.createElement(`source`);n.setAttribute(`src`,t);let r=((e=``)=>Mr[e.split(`.`).pop()])(t);r&&n.setAttribute(`type`,r),e.appendChild(n)})),r.appendChild(e)}else if(i&&!0!==t.excludeIframes){let e=document.createElement(`iframe`);e.setAttribute(`allowfullscreen`,``),e.setAttribute(`mozallowfullscreen`,``),e.setAttribute(`webkitallowfullscreen`,``),e.setAttribute(`allow`,`autoplay`),e.setAttribute(`data-src`,i),e.style.width=`100%`,e.style.height=`100%`,e.style.maxHeight=`100%`,e.style.maxWidth=`100%`,r.appendChild(e)}}let a=r.querySelector(`iframe[data-src]`);a&&this.shouldPreload(n)&&!/autoplay=(1|true|yes)/gi.test(i)&&a.getAttribute(`src`)!==i&&a.setAttribute(`src`,i)}this.layout(e)}layout(e){Array.from(e.querySelectorAll(`.r-fit-text`)).forEach((e=>{Ir(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})}))}unload(e){e.style.display=`none`;let t=this.Reveal.getSlideBackground(e);t&&(t.style.display=`none`,P(t,`iframe[src]`).forEach((e=>{e.removeAttribute(`src`)}))),P(e,`video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]`).forEach((e=>{e.setAttribute(`data-src`,e.getAttribute(`src`)),e.removeAttribute(`src`)})),P(e,`video[data-lazy-loaded] source[src], audio source[src]`).forEach((e=>{e.setAttribute(`data-src`,e.getAttribute(`src`)),e.removeAttribute(`src`)}))}formatEmbeddedContent(){let e=(e,t,n)=>{P(this.Reveal.getSlidesElement(),`iframe[`+e+`*="`+t+`"]`).forEach((t=>{let r=t.getAttribute(e);r&&r.indexOf(n)===-1&&t.setAttribute(e,r+(/\?/.test(r)?`&`:`?`)+n)}))};e(`src`,`youtube.com/embed/`,`enablejsapi=1`),e(`data-src`,`youtube.com/embed/`,`enablejsapi=1`),e(`src`,`player.vimeo.com/`,`api=1`),e(`data-src`,`player.vimeo.com/`,`api=1`)}startEmbeddedContent(e){e&&!this.Reveal.isSpeakerNotes()&&(P(e,`img[src$=".gif"]`).forEach((e=>{e.setAttribute(`src`,e.getAttribute(`src`))})),P(e,`video, audio`).forEach((e=>{if(Or(e,`.fragment`)&&!Or(e,`.fragment.visible`))return;let t=this.Reveal.getConfig().autoPlayMedia;if(typeof t!=`boolean`&&(t=e.hasAttribute(`data-autoplay`)||!!Or(e,`.slide-background`)),t&&typeof e.play==`function`){if(e.readyState>1)this.startEmbeddedMedia({target:e});else if(Pr){let t=e.play();t&&typeof t.catch==`function`&&!1===e.controls&&t.catch((()=>{e.controls=!0,e.addEventListener(`play`,(()=>{e.controls=!1}))}))}else e.removeEventListener(`loadeddata`,this.startEmbeddedMedia),e.addEventListener(`loadeddata`,this.startEmbeddedMedia)}})),P(e,`iframe[src]`).forEach((e=>{Or(e,`.fragment`)&&!Or(e,`.fragment.visible`)||this.startEmbeddedIframe({target:e})})),P(e,`iframe[data-src]`).forEach((e=>{Or(e,`.fragment`)&&!Or(e,`.fragment.visible`)||e.getAttribute(`src`)!==e.getAttribute(`data-src`)&&(e.removeEventListener(`load`,this.startEmbeddedIframe),e.addEventListener(`load`,this.startEmbeddedIframe),e.setAttribute(`src`,e.getAttribute(`data-src`)))})))}startEmbeddedMedia(e){let t=!!Or(e.target,`html`),n=!!Or(e.target,`.present`);t&&n&&(e.target.paused||e.target.ended)&&(e.target.currentTime=0,e.target.play()),e.target.removeEventListener(`loadeddata`,this.startEmbeddedMedia)}startEmbeddedIframe(e){let t=e.target;if(t&&t.contentWindow){let n=!!Or(e.target,`html`),r=!!Or(e.target,`.present`);if(n&&r){let e=this.Reveal.getConfig().autoPlayMedia;typeof e!=`boolean`&&(e=t.hasAttribute(`data-autoplay`)||!!Or(t,`.slide-background`)),/youtube\.com\/embed\//.test(t.getAttribute(`src`))&&e?t.contentWindow.postMessage(`{"event":"command","func":"playVideo","args":""}`,`*`):/player\.vimeo\.com\//.test(t.getAttribute(`src`))&&e?t.contentWindow.postMessage(`{"method":"play"}`,`*`):t.contentWindow.postMessage(`slide:start`,`*`)}}}stopEmbeddedContent(e,t={}){t=Cr({unloadIframes:!0},t),e&&e.parentNode&&(P(e,`video, audio`).forEach((e=>{e.hasAttribute(`data-ignore`)||typeof e.pause!=`function`||(e.setAttribute(`data-paused-by-reveal`,``),e.pause())})),P(e,`iframe`).forEach((e=>{e.contentWindow&&e.contentWindow.postMessage(`slide:stop`,`*`),e.removeEventListener(`load`,this.startEmbeddedIframe)})),P(e,`iframe[src*="youtube.com/embed/"]`).forEach((e=>{!e.hasAttribute(`data-ignore`)&&e.contentWindow&&typeof e.contentWindow.postMessage==`function`&&e.contentWindow.postMessage(`{"event":"command","func":"pauseVideo","args":""}`,`*`)})),P(e,`iframe[src*="player.vimeo.com/"]`).forEach((e=>{!e.hasAttribute(`data-ignore`)&&e.contentWindow&&typeof e.contentWindow.postMessage==`function`&&e.contentWindow.postMessage(`{"method":"pause"}`,`*`)})),!0===t.unloadIframes&&P(e,`iframe[data-src]`).forEach((e=>{e.setAttribute(`src`,`about:blank`),e.removeAttribute(`src`)})))}},Rr=`.slides section`,zr=`.slides>section`,Br=`.slides>section.present>section`,Vr=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,Hr=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/,Ur=class{constructor(e){this.Reveal=e}render(){this.element=document.createElement(`div`),this.element.className=`slide-number`,this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){let n=`none`;e.slideNumber&&!this.Reveal.isPrintView()&&(e.showSlideNumber===`all`||e.showSlideNumber===`speaker`&&this.Reveal.isSpeakerNotes())&&(n=`block`),this.element.style.display=n}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(e=this.Reveal.getCurrentSlide()){let t,n=this.Reveal.getConfig(),r=`h.v`;if(typeof n.slideNumber==`function`)t=n.slideNumber(e);else{typeof n.slideNumber==`string`&&(r=n.slideNumber),/c/.test(r)||this.Reveal.getHorizontalSlides().length!==1||(r=`c`);let i=e&&e.dataset.visibility===`uncounted`?0:1;switch(t=[],r){case`c`:t.push(this.Reveal.getSlidePastCount(e)+i);break;case`c/t`:t.push(this.Reveal.getSlidePastCount(e)+i,`/`,this.Reveal.getTotalSlides());break;default:let n=this.Reveal.getIndices(e);t.push(n.h+i);let a=r===`h/v`?`/`:`.`;this.Reveal.isVerticalSlide(e)&&t.push(a,n.v+1)}}let i=`#`+this.Reveal.location.getHash(e);return this.formatNumber(t[0],t[1],t[2],i)}formatNumber(e,t,n,r=`#`+this.Reveal.location.getHash()){return typeof n!=`number`||isNaN(n)?`<a href="${r}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t</a>`:`<a href="${r}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t<span class="slide-number-delimiter">${t}</span>\n\t\t\t\t\t<span class="slide-number-b">${n}</span>\n\t\t\t\t\t</a>`}destroy(){this.element.remove()}},Wr=class{constructor(e){this.Reveal=e,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement(`div`),this.element.className=`jump-to-slide`,this.jumpInput=document.createElement(`input`),this.jumpInput.type=`text`,this.jumpInput.className=`jump-to-slide-input`,this.jumpInput.placeholder=`Jump to slide`,this.jumpInput.addEventListener(`input`,this.onInput),this.jumpInput.addEventListener(`keydown`,this.onKeyDown),this.jumpInput.addEventListener(`blur`,this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value=``,clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;let e,t=this.jumpInput.value.trim(``);if(/^\d+$/.test(t)){let n=this.Reveal.getConfig().slideNumber;if(n===`c`||n===`c/t`){let n=this.Reveal.getSlides()[parseInt(t,10)-1];n&&(e=this.Reveal.getIndices(n))}}return e||=(/^\d+\.\d+$/.test(t)&&(t=t.replace(`.`,`/`)),this.Reveal.location.getIndicesFromHash(t,{oneBasedIndex:!0})),!e&&/\S+/i.test(t)&&t.length>1&&(e=this.search(t)),e&&t!==``?(this.Reveal.slide(e.h,e.v,e.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(e){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout((()=>this.jump()),e)}search(e){let t=RegExp(`\\b`+e.trim()+`\\b`,`i`),n=this.Reveal.getSlides().find((e=>t.test(e.innerText)));return n?this.Reveal.getIndices(n):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener(`input`,this.onInput),this.jumpInput.removeEventListener(`keydown`,this.onKeyDown),this.jumpInput.removeEventListener(`blur`,this.onBlur),this.element.remove()}onKeyDown(e){e.keyCode===13?this.confirm():e.keyCode===27&&(this.cancel(),e.stopImmediatePropagation())}onInput(e){this.jumpAfter(200)}onBlur(){setTimeout((()=>this.hide()),1)}},Gr=e=>{let t=e.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let n=e.match(/^#([0-9a-f]{6})$/i);if(n&&n[1])return n=n[1],{r:parseInt(n.slice(0,2),16),g:parseInt(n.slice(2,4),16),b:parseInt(n.slice(4,6),16)};let r=e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(r)return{r:parseInt(r[1],10),g:parseInt(r[2],10),b:parseInt(r[3],10)};let i=e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10),a:parseFloat(i[4])}:null},Kr=class{constructor(e){this.Reveal=e}render(){this.element=document.createElement(`div`),this.element.className=`backgrounds`,this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML=``,this.element.classList.add(`no-transition`),this.Reveal.getHorizontalSlides().forEach((e=>{let t=this.createBackground(e,this.element);P(e,`section`).forEach((e=>{this.createBackground(e,t),t.classList.add(`stack`)}))})),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage=`url("`+this.Reveal.getConfig().parallaxBackgroundImage+`")`,this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout((()=>{this.Reveal.getRevealElement().classList.add(`has-parallax-background`)}),1)):(this.element.style.backgroundImage=``,this.Reveal.getRevealElement().classList.remove(`has-parallax-background`))}createBackground(e,t){let n=document.createElement(`div`);n.className=`slide-background `+e.className.replace(/present|past|future/,``);let r=document.createElement(`div`);return r.className=`slide-background-content`,n.appendChild(r),t.appendChild(n),e.slideBackgroundElement=n,e.slideBackgroundContentElement=r,this.sync(e),n}sync(e){let t=e.slideBackgroundElement,n=e.slideBackgroundContentElement,r={background:e.getAttribute(`data-background`),backgroundSize:e.getAttribute(`data-background-size`),backgroundImage:e.getAttribute(`data-background-image`),backgroundVideo:e.getAttribute(`data-background-video`),backgroundIframe:e.getAttribute(`data-background-iframe`),backgroundColor:e.getAttribute(`data-background-color`),backgroundGradient:e.getAttribute(`data-background-gradient`),backgroundRepeat:e.getAttribute(`data-background-repeat`),backgroundPosition:e.getAttribute(`data-background-position`),backgroundTransition:e.getAttribute(`data-background-transition`),backgroundOpacity:e.getAttribute(`data-background-opacity`)},i=e.hasAttribute(`data-preload`);e.classList.remove(`has-dark-background`),e.classList.remove(`has-light-background`),t.removeAttribute(`data-loaded`),t.removeAttribute(`data-background-hash`),t.removeAttribute(`data-background-size`),t.removeAttribute(`data-background-transition`),t.style.backgroundColor=``,n.style.backgroundSize=``,n.style.backgroundRepeat=``,n.style.backgroundPosition=``,n.style.backgroundImage=``,n.style.opacity=``,n.innerHTML=``,r.background&&(/^(http|file|\/\/)/gi.test(r.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(r.background)?e.setAttribute(`data-background-image`,r.background):t.style.background=r.background),(r.background||r.backgroundColor||r.backgroundGradient||r.backgroundImage||r.backgroundVideo||r.backgroundIframe)&&t.setAttribute(`data-background-hash`,r.background+r.backgroundSize+r.backgroundImage+r.backgroundVideo+r.backgroundIframe+r.backgroundColor+r.backgroundGradient+r.backgroundRepeat+r.backgroundPosition+r.backgroundTransition+r.backgroundOpacity),r.backgroundSize&&t.setAttribute(`data-background-size`,r.backgroundSize),r.backgroundColor&&(t.style.backgroundColor=r.backgroundColor),r.backgroundGradient&&(t.style.backgroundImage=r.backgroundGradient),r.backgroundTransition&&t.setAttribute(`data-background-transition`,r.backgroundTransition),i&&t.setAttribute(`data-preload`,``),r.backgroundSize&&(n.style.backgroundSize=r.backgroundSize),r.backgroundRepeat&&(n.style.backgroundRepeat=r.backgroundRepeat),r.backgroundPosition&&(n.style.backgroundPosition=r.backgroundPosition),r.backgroundOpacity&&(n.style.opacity=r.backgroundOpacity);let a=this.getContrastClass(e);typeof a==`string`&&e.classList.add(a)}getContrastClass(e){let t=e.slideBackgroundElement,n=e.getAttribute(`data-background-color`);if(!n||!Gr(n)){let e=window.getComputedStyle(t);e&&e.backgroundColor&&(n=e.backgroundColor)}if(n){let e=Gr(n);if(e&&e.a!==0)return typeof(r=n)==`string`&&(r=Gr(r)),(r?(299*r.r+587*r.g+114*r.b)/1e3:null)<128?`has-dark-background`:`has-light-background`}var r;return null}bubbleSlideContrastClassToElement(e,t){[`has-light-background`,`has-dark-background`].forEach((n=>{e.classList.contains(n)?t.classList.add(n):t.classList.remove(n)}),this)}update(e=!1){let t=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide(),r=this.Reveal.getIndices(),i=null,a=t.rtl?`future`:`past`,o=t.rtl?`past`:`future`;if(Array.from(this.element.childNodes).forEach(((t,n)=>{t.classList.remove(`past`,`present`,`future`),n<r.h?t.classList.add(a):n>r.h?t.classList.add(o):(t.classList.add(`present`),i=t),(e||n===r.h)&&P(t,`.slide-background`).forEach(((e,t)=>{e.classList.remove(`past`,`present`,`future`);let a=typeof r.v==`number`?r.v:0;t<a?e.classList.add(`past`):t>a?e.classList.add(`future`):(e.classList.add(`present`),n===r.h&&(i=e))}))})),this.previousBackground&&!this.previousBackground.closest(`body`)&&(this.previousBackground=null),i&&this.previousBackground){let e=this.previousBackground.getAttribute(`data-background-hash`),t=i.getAttribute(`data-background-hash`);if(t&&t===e&&i!==this.previousBackground){this.element.classList.add(`no-transition`);let e=i.querySelector(`video`),t=this.previousBackground.querySelector(`video`);if(e&&t){let n=e.parentNode;t.parentNode.appendChild(e),n.appendChild(t)}}}if(this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),i){this.Reveal.slideContent.startEmbeddedContent(i);let e=i.querySelector(`.slide-background-content`);if(e){let t=e.style.backgroundImage||``;/\.gif/i.test(t)&&(e.style.backgroundImage=``,window.getComputedStyle(e).opacity,e.style.backgroundImage=t)}this.previousBackground=i}n&&this.bubbleSlideContrastClassToElement(n,this.Reveal.getRevealElement()),setTimeout((()=>{this.element.classList.remove(`no-transition`)}),10)}updateParallax(){let e=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let t,n,r=this.Reveal.getHorizontalSlides(),i=this.Reveal.getVerticalSlides(),a=this.element.style.backgroundSize.split(` `);a.length===1?t=n=parseInt(a[0],10):(t=parseInt(a[0],10),n=parseInt(a[1],10));let o,s,c=this.element.offsetWidth,l=r.length;o=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal==`number`?this.Reveal.getConfig().parallaxBackgroundHorizontal:l>1?(t-c)/(l-1):0,s=o*e.h*-1;let u,d,f=this.element.offsetHeight,p=i.length;u=typeof this.Reveal.getConfig().parallaxBackgroundVertical==`number`?this.Reveal.getConfig().parallaxBackgroundVertical:(n-f)/(p-1),d=p>0?u*e.v:0,this.element.style.backgroundPosition=s+`px `+-d+`px`}}destroy(){this.element.remove()}},qr=0,Jr=class{constructor(e){this.Reveal=e}run(e,t){this.reset();let n=this.Reveal.getSlides(),r=n.indexOf(t),i=n.indexOf(e);if(e&&t&&e.hasAttribute(`data-auto-animate`)&&t.hasAttribute(`data-auto-animate`)&&e.getAttribute(`data-auto-animate-id`)===t.getAttribute(`data-auto-animate-id`)&&!(r>i?t:e).hasAttribute(`data-auto-animate-restart`)){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||Ar();let n=this.getAutoAnimateOptions(t);e.dataset.autoAnimate=`pending`,t.dataset.autoAnimate=`pending`,n.slideDirection=r>i?`forward`:`backward`;let a=e.style.display===`none`;a&&(e.style.display=this.Reveal.getConfig().display);let o=this.getAutoAnimatableElements(e,t).map((e=>this.autoAnimateElements(e.from,e.to,e.options||{},n,qr++)));if(a&&(e.style.display=`none`),t.dataset.autoAnimateUnmatched!==`false`&&!0===this.Reveal.getConfig().autoAnimateUnmatched){let e=.8*n.duration,r=.2*n.duration;this.getUnmatchedAutoAnimateElements(t).forEach((e=>{let t=this.getAutoAnimateOptions(e,n),r=`unmatched`;t.duration===n.duration&&t.delay===n.delay||(r=`unmatched-`+qr++,o.push(`[data-auto-animate="running"] [data-auto-animate-target="${r}"] { transition: opacity ${t.duration}s ease ${t.delay}s; }`)),e.dataset.autoAnimateTarget=r}),this),o.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e}s ease ${r}s; }`)}this.autoAnimateStyleSheet.innerHTML=o.join(``),requestAnimationFrame((()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,t.dataset.autoAnimate=`running`)})),this.Reveal.dispatchEvent({type:`autoanimate`,data:{fromSlide:e,toSlide:t,sheet:this.autoAnimateStyleSheet}})}}reset(){P(this.Reveal.getRevealElement(),`[data-auto-animate]:not([data-auto-animate=""])`).forEach((e=>{e.dataset.autoAnimate=``})),P(this.Reveal.getRevealElement(),`[data-auto-animate-target]`).forEach((e=>{delete e.dataset.autoAnimateTarget})),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(e,t,n,r,i){e.dataset.autoAnimateTarget=``,t.dataset.autoAnimateTarget=i;let a=this.getAutoAnimateOptions(t,r);n.delay!==void 0&&(a.delay=n.delay),n.duration!==void 0&&(a.duration=n.duration),n.easing!==void 0&&(a.easing=n.easing);let o=this.getAutoAnimatableProperties(`from`,e,n),s=this.getAutoAnimatableProperties(`to`,t,n);if(t.classList.contains(`fragment`)&&(delete s.styles.opacity,e.classList.contains(`fragment`))&&(e.className.match(Hr)||[``])[0]===(t.className.match(Hr)||[``])[0]&&r.slideDirection===`forward`&&t.classList.add(`visible`,`disabled`),!1!==n.translate||!1!==n.scale){let e=this.Reveal.getScale(),t={x:(o.x-s.x)/e,y:(o.y-s.y)/e,scaleX:o.width/s.width,scaleY:o.height/s.height};t.x=Math.round(1e3*t.x)/1e3,t.y=Math.round(1e3*t.y)/1e3,t.scaleX=Math.round(1e3*t.scaleX)/1e3,t.scaleX=Math.round(1e3*t.scaleX)/1e3;let r=!1!==n.translate&&(t.x!==0||t.y!==0),i=!1!==n.scale&&(t.scaleX!==0||t.scaleY!==0);if(r||i){let e=[];r&&e.push(`translate(${t.x}px, ${t.y}px)`),i&&e.push(`scale(${t.scaleX}, ${t.scaleY})`),o.styles.transform=e.join(` `),o.styles[`transform-origin`]=`top left`,s.styles.transform=`none`}}for(let e in s.styles){let t=s.styles[e],n=o.styles[e];t===n?delete s.styles[e]:(!0===t.explicitValue&&(s.styles[e]=t.value),!0===n.explicitValue&&(o.styles[e]=n.value))}let c=``,l=Object.keys(s.styles);return l.length>0&&(o.styles.transition=`none`,s.styles.transition=`all ${a.duration}s ${a.easing} ${a.delay}s`,s.styles[`transition-property`]=l.join(`, `),s.styles[`will-change`]=l.join(`, `),c=`[data-auto-animate-target="`+i+`"] {`+Object.keys(o.styles).map((e=>e+`: `+o.styles[e]+` !important;`)).join(``)+`}[data-auto-animate="running"] [data-auto-animate-target="`+i+`"] {`+Object.keys(s.styles).map((e=>e+`: `+s.styles[e]+` !important;`)).join(``)+`}`),c}getAutoAnimateOptions(e,t){let n={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(n=Cr(n,t),e.parentNode){let t=Or(e.parentNode,`[data-auto-animate-target]`);t&&(n=this.getAutoAnimateOptions(t,n))}return e.dataset.autoAnimateEasing&&(n.easing=e.dataset.autoAnimateEasing),e.dataset.autoAnimateDuration&&(n.duration=parseFloat(e.dataset.autoAnimateDuration)),e.dataset.autoAnimateDelay&&(n.delay=parseFloat(e.dataset.autoAnimateDelay)),n}getAutoAnimatableProperties(e,t,n){let r=this.Reveal.getConfig(),i={styles:[]};if(!1!==n.translate||!1!==n.scale){let e;if(typeof n.measure==`function`)e=n.measure(t);else if(r.center)e=t.getBoundingClientRect();else{let n=this.Reveal.getScale();e={x:t.offsetLeft*n,y:t.offsetTop*n,width:t.offsetWidth*n,height:t.offsetHeight*n}}i.x=e.x,i.y=e.y,i.width=e.width,i.height=e.height}let a=getComputedStyle(t);return(n.styles||r.autoAnimateStyles).forEach((t=>{let n;typeof t==`string`&&(t={property:t}),t.from!==void 0&&e===`from`?n={value:t.from,explicitValue:!0}:t.to!==void 0&&e===`to`?n={value:t.to,explicitValue:!0}:(t.property===`line-height`&&(n=parseFloat(a[`line-height`])/parseFloat(a[`font-size`])),isNaN(n)&&(n=a[t.property])),n!==``&&(i.styles[t.property]=n)})),i}getAutoAnimatableElements(e,t){let n=(typeof this.Reveal.getConfig().autoAnimateMatcher==`function`?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,e,t),r=[];return n.filter(((e,t)=>{if(r.indexOf(e.to)===-1)return r.push(e.to),!0}))}getAutoAnimatePairs(e,t){let n=[],r=`h1, h2, h3, h4, h5, h6, p, li`;return this.findAutoAnimateMatches(n,e,t,`[data-id]`,(e=>e.nodeName+`:::`+e.getAttribute(`data-id`))),this.findAutoAnimateMatches(n,e,t,r,(e=>e.nodeName+`:::`+e.innerText)),this.findAutoAnimateMatches(n,e,t,`img, video, iframe`,(e=>e.nodeName+`:::`+(e.getAttribute(`src`)||e.getAttribute(`data-src`)))),this.findAutoAnimateMatches(n,e,t,`pre`,(e=>e.nodeName+`:::`+e.innerText)),n.forEach((e=>{Dr(e.from,r)?e.options={scale:!1}:Dr(e.from,`pre`)&&(e.options={scale:!1,styles:[`width`,`height`]},this.findAutoAnimateMatches(n,e.from,e.to,`.hljs .hljs-ln-code`,(e=>e.textContent),{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(n,e.from,e.to,`.hljs .hljs-ln-numbers[data-line-number]`,(e=>e.getAttribute(`data-line-number`)),{scale:!1,styles:[`width`],measure:this.getLocalBoundingBox.bind(this)}))}),this),n}getLocalBoundingBox(e){let t=this.Reveal.getScale();return{x:Math.round(e.offsetLeft*t*100)/100,y:Math.round(e.offsetTop*t*100)/100,width:Math.round(e.offsetWidth*t*100)/100,height:Math.round(e.offsetHeight*t*100)/100}}findAutoAnimateMatches(e,t,n,r,i,a){let o={},s={};[].slice.call(t.querySelectorAll(r)).forEach(((e,t)=>{let n=i(e);typeof n==`string`&&n.length&&(o[n]=o[n]||[],o[n].push(e))})),[].slice.call(n.querySelectorAll(r)).forEach(((t,n)=>{let r=i(t),c;if(s[r]=s[r]||[],s[r].push(t),o[r]){let e=s[r].length-1,t=o[r].length-1;o[r][e]?(c=o[r][e],o[r][e]=null):o[r][t]&&(c=o[r][t],o[r][t]=null)}c&&e.push({from:c,to:t,options:a})}))}getUnmatchedAutoAnimateElements(e){return[].slice.call(e.children).reduce(((e,t)=>{let n=t.querySelector(`[data-auto-animate-target]`);return t.hasAttribute(`data-auto-animate-target`)||n||e.push(t),t.querySelector(`[data-auto-animate-target]`)&&(e=e.concat(this.getUnmatchedAutoAnimateElements(t))),e}),[])}},Yr=class{constructor(e){this.Reveal=e,this.active=!1,this.activatedCallbacks=[],this.onScroll=this.onScroll.bind(this)}activate(){if(this.active)return;let e=this.Reveal.getState();this.active=!0,this.slideHTMLBeforeActivation=this.Reveal.getSlidesElement().innerHTML;let t=P(this.Reveal.getRevealElement(),zr),n=P(this.Reveal.getRevealElement(),`.backgrounds>.slide-background`),r;this.viewportElement.classList.add(`loading-scroll-mode`,`reveal-scroll`);let i=window.getComputedStyle(this.viewportElement);i&&i.background&&(r=i.background);let a=[],o=t[0].parentNode,s,c=(e,t,i,o)=>{let c;if(s&&this.Reveal.shouldAutoAnimateBetween(s,e))c=document.createElement(`div`),c.className=`scroll-page-content scroll-auto-animate-page`,c.style.display=`none`,s.closest(`.scroll-page-content`).parentNode.appendChild(c);else{let e=document.createElement(`div`);if(e.className=`scroll-page`,a.push(e),o&&n.length>t){let i=n[t],a=window.getComputedStyle(i);a&&a.background?e.style.background=a.background:r&&(e.style.background=r)}else r&&(e.style.background=r);let i=document.createElement(`div`);i.className=`scroll-page-sticky`,e.appendChild(i),c=document.createElement(`div`),c.className=`scroll-page-content`,i.appendChild(c)}c.appendChild(e),e.classList.remove(`past`,`future`),e.setAttribute(`data-index-h`,t),e.setAttribute(`data-index-v`,i),e.slideBackgroundElement&&(e.slideBackgroundElement.remove(`past`,`future`),c.insertBefore(e.slideBackgroundElement,e)),s=e};t.forEach(((e,t)=>{this.Reveal.isVerticalStack(e)?e.querySelectorAll(`section`).forEach(((e,n)=>{c(e,t,n,!0)})):c(e,t,0)}),this),this.createProgressBar(),P(this.Reveal.getRevealElement(),`.stack`).forEach((e=>e.remove())),a.forEach((e=>o.appendChild(e))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.layout(),this.Reveal.setState(e),this.activatedCallbacks.forEach((e=>e())),this.activatedCallbacks=[],this.restoreScrollPosition(),this.viewportElement.classList.remove(`loading-scroll-mode`),this.viewportElement.addEventListener(`scroll`,this.onScroll,{passive:!0})}deactivate(){if(!this.active)return;let e=this.Reveal.getState();this.active=!1,this.viewportElement.removeEventListener(`scroll`,this.onScroll),this.viewportElement.classList.remove(`reveal-scroll`),this.removeProgressBar(),this.Reveal.getSlidesElement().innerHTML=this.slideHTMLBeforeActivation,this.Reveal.sync(),this.Reveal.setState(e),this.slideHTMLBeforeActivation=null}toggle(e){typeof e==`boolean`?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}createProgressBar(){this.progressBar=document.createElement(`div`),this.progressBar.className=`scrollbar`,this.progressBarInner=document.createElement(`div`),this.progressBarInner.className=`scrollbar-inner`,this.progressBar.appendChild(this.progressBarInner),this.progressBarPlayhead=document.createElement(`div`),this.progressBarPlayhead.className=`scrollbar-playhead`,this.progressBarInner.appendChild(this.progressBarPlayhead),this.viewportElement.insertBefore(this.progressBar,this.viewportElement.firstChild);let e=e=>{let t=(e.clientY-this.progressBarInner.getBoundingClientRect().top)/this.progressBarHeight;t=Math.max(Math.min(t,1),0),this.viewportElement.scrollTop=t*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight)},t=n=>{this.draggingProgressBar=!1,this.showProgressBar(),document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t)};this.progressBarInner.addEventListener(`mousedown`,(n=>{n.preventDefault(),this.draggingProgressBar=!0,document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),e(n)}))}removeProgressBar(){this.progressBar&&=(this.progressBar.remove(),null)}layout(){this.isActive()&&(this.syncPages(),this.syncScrollPosition())}syncPages(){let e=this.Reveal.getConfig(),t=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),n=this.Reveal.getScale(),r=e.scrollLayout===`compact`,i=this.viewportElement.offsetHeight,a=t.height*n,o=r?a:i;this.scrollTriggerHeight=r?a:i,this.viewportElement.style.setProperty(`--page-height`,o+`px`),this.viewportElement.style.scrollSnapType=typeof e.scrollSnap==`string`?`y ${e.scrollSnap}`:``,this.slideTriggers=[];let s=Array.from(this.Reveal.getRevealElement().querySelectorAll(`.scroll-page`));this.pages=s.map((n=>{let a=this.createPage({pageElement:n,slideElement:n.querySelector(`section`),stickyElement:n.querySelector(`.scroll-page-sticky`),contentElement:n.querySelector(`.scroll-page-content`),backgroundElement:n.querySelector(`.slide-background`),autoAnimateElements:n.querySelectorAll(`.scroll-auto-animate-page`),autoAnimatePages:[]});a.pageElement.style.setProperty(`--slide-height`,!0===e.center?`auto`:t.height+`px`),this.slideTriggers.push({page:a,activate:()=>this.activatePage(a),deactivate:()=>this.deactivatePage(a)}),this.createFragmentTriggersForPage(a),a.autoAnimateElements.length>0&&this.createAutoAnimateTriggersForPage(a);let s=Math.max(a.scrollTriggers.length-1,0);s+=a.autoAnimatePages.reduce(((e,t)=>e+Math.max(t.scrollTriggers.length-1,0)),a.autoAnimatePages.length),a.pageElement.querySelectorAll(`.scroll-snap-point`).forEach((e=>e.remove()));for(let e=0;e<s+1;e++){let t=document.createElement(`div`);t.className=`scroll-snap-point`,t.style.height=this.scrollTriggerHeight+`px`,t.style.scrollSnapAlign=r?`center`:`start`,a.pageElement.appendChild(t),e===0&&(t.style.marginTop=-this.scrollTriggerHeight+`px`)}return r&&a.scrollTriggers.length>0?(a.pageHeight=i,a.pageElement.style.setProperty(`--page-height`,i+`px`)):(a.pageHeight=o,a.pageElement.style.removeProperty(`--page-height`)),a.scrollPadding=this.scrollTriggerHeight*s,a.totalHeight=a.pageHeight+a.scrollPadding,a.pageElement.style.setProperty(`--page-scroll-padding`,a.scrollPadding+`px`),s>0?(a.stickyElement.style.position=`sticky`,a.stickyElement.style.top=Math.max((i-a.pageHeight)/2,0)+`px`):(a.stickyElement.style.position=`relative`,a.pageElement.style.scrollSnapAlign=a.pageHeight<i?`center`:`start`),a})),this.setTriggerRanges(),this.viewportElement.setAttribute(`data-scrollbar`,e.scrollProgress),e.scrollProgress&&this.totalScrollTriggerCount>1?(this.progressBar||this.createProgressBar(),this.syncProgressBar()):this.removeProgressBar()}setTriggerRanges(){this.totalScrollTriggerCount=this.slideTriggers.reduce(((e,t)=>e+Math.max(t.page.scrollTriggers.length,1)),0);let e=0;this.slideTriggers.forEach(((t,n)=>{t.range=[e,e+Math.max(t.page.scrollTriggers.length,1)/this.totalScrollTriggerCount];let r=(t.range[1]-t.range[0])/t.page.scrollTriggers.length;t.page.scrollTriggers.forEach(((t,n)=>{t.range=[e+n*r,e+(n+1)*r]})),e=t.range[1]}))}createFragmentTriggersForPage(e,t){t||=e.slideElement;let n=this.Reveal.fragments.sort(t.querySelectorAll(`.fragment`),!0);return n.length&&(e.fragments=this.Reveal.fragments.sort(t.querySelectorAll(`.fragment:not(.disabled)`)),e.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(-1,e.fragments,t)}}),n.forEach(((n,r)=>{e.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(r,e.fragments,t)}})}))),e.scrollTriggers.length}createAutoAnimateTriggersForPage(e){e.autoAnimateElements.length>0&&this.slideTriggers.push(...Array.from(e.autoAnimateElements).map(((t,n)=>{let r=this.createPage({slideElement:t.querySelector(`section`),contentElement:t,backgroundElement:t.querySelector(`.slide-background`)});return this.createFragmentTriggersForPage(r,r.slideElement),e.autoAnimatePages.push(r),{page:r,activate:()=>this.activatePage(r),deactivate:()=>this.deactivatePage(r)}})))}createPage(e){return e.scrollTriggers=[],e.indexh=parseInt(e.slideElement.getAttribute(`data-index-h`),10),e.indexv=parseInt(e.slideElement.getAttribute(`data-index-v`),10),e}syncProgressBar(){this.progressBarInner.querySelectorAll(`.scrollbar-slide`).forEach((e=>e.remove()));let e=this.viewportElement.scrollHeight,t=this.viewportElement.offsetHeight,n=t/e;this.progressBarHeight=this.progressBarInner.offsetHeight,this.playheadHeight=Math.max(n*this.progressBarHeight,8),this.progressBarScrollableHeight=this.progressBarHeight-this.playheadHeight;let r=t/e*this.progressBarHeight,i=Math.min(r/8,4);this.progressBarPlayhead.style.height=this.playheadHeight-i+`px`,r>6?this.slideTriggers.forEach((e=>{let{page:t}=e;t.progressBarSlide=document.createElement(`div`),t.progressBarSlide.className=`scrollbar-slide`,t.progressBarSlide.style.top=e.range[0]*this.progressBarHeight+`px`,t.progressBarSlide.style.height=(e.range[1]-e.range[0])*this.progressBarHeight-i+`px`,t.progressBarSlide.classList.toggle(`has-triggers`,t.scrollTriggers.length>0),this.progressBarInner.appendChild(t.progressBarSlide),t.scrollTriggerElements=t.scrollTriggers.map(((n,r)=>{let a=document.createElement(`div`);return a.className=`scrollbar-trigger`,a.style.top=(n.range[0]-e.range[0])*this.progressBarHeight+`px`,a.style.height=(n.range[1]-n.range[0])*this.progressBarHeight-i+`px`,t.progressBarSlide.appendChild(a),r===0&&(a.style.display=`none`),a}))})):this.pages.forEach((e=>e.progressBarSlide=null))}syncScrollPosition(){let e=this.viewportElement.offsetHeight,t=e/this.viewportElement.scrollHeight,n=this.viewportElement.scrollTop,r=this.viewportElement.scrollHeight-e,i=Math.max(Math.min(n/r,1),0),a=Math.max(Math.min((n+e/2)/this.viewportElement.scrollHeight,1),0),o;this.slideTriggers.forEach((e=>{let{page:n}=e;i>=e.range[0]-2*t&&i<=e.range[1]+2*t&&!n.loaded?(n.loaded=!0,this.Reveal.slideContent.load(n.slideElement)):n.loaded&&(n.loaded=!1,this.Reveal.slideContent.unload(n.slideElement)),i>=e.range[0]&&i<=e.range[1]?(this.activateTrigger(e),o=e.page):e.active&&this.deactivateTrigger(e)})),o&&o.scrollTriggers.forEach((e=>{a>=e.range[0]&&a<=e.range[1]?this.activateTrigger(e):e.active&&this.deactivateTrigger(e)})),this.setProgressBarValue(n/(this.viewportElement.scrollHeight-e))}setProgressBarValue(e){this.progressBar&&(this.progressBarPlayhead.style.transform=`translateY(${e*this.progressBarScrollableHeight}px)`,this.getAllPages().filter((e=>e.progressBarSlide)).forEach((e=>{e.progressBarSlide.classList.toggle(`active`,!0===e.active),e.scrollTriggers.forEach(((t,n)=>{e.scrollTriggerElements[n].classList.toggle(`active`,!0===e.active&&!0===t.active)}))})),this.showProgressBar())}showProgressBar(){this.progressBar.classList.add(`visible`),clearTimeout(this.hideProgressBarTimeout),this.Reveal.getConfig().scrollProgress!==`auto`||this.draggingProgressBar||(this.hideProgressBarTimeout=setTimeout((()=>{this.progressBar&&this.progressBar.classList.remove(`visible`)}),500))}prev(){this.viewportElement.scrollTop-=this.scrollTriggerHeight}next(){this.viewportElement.scrollTop+=this.scrollTriggerHeight}scrollToSlide(e){if(this.active){let t=this.getScrollTriggerBySlide(e);t&&(this.viewportElement.scrollTop=t.range[0]*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight))}else this.activatedCallbacks.push((()=>this.scrollToSlide(e)))}storeScrollPosition(){clearTimeout(this.storeScrollPositionTimeout),this.storeScrollPositionTimeout=setTimeout((()=>{sessionStorage.setItem(`reveal-scroll-top`,this.viewportElement.scrollTop),sessionStorage.setItem(`reveal-scroll-origin`,location.origin+location.pathname),this.storeScrollPositionTimeout=null}),50)}restoreScrollPosition(){let e=sessionStorage.getItem(`reveal-scroll-top`),t=sessionStorage.getItem(`reveal-scroll-origin`);e&&t===location.origin+location.pathname&&(this.viewportElement.scrollTop=parseInt(e,10))}activatePage(e){if(!e.active){e.active=!0;let{slideElement:t,backgroundElement:n,contentElement:r,indexh:i,indexv:a}=e;r.style.display=`block`,t.classList.add(`present`),n&&n.classList.add(`present`),this.Reveal.setCurrentScrollPage(t,i,a),this.Reveal.backgrounds.bubbleSlideContrastClassToElement(t,this.viewportElement),Array.from(r.parentNode.querySelectorAll(`.scroll-page-content`)).forEach((e=>{e!==r&&(e.style.display=`none`)}))}}deactivatePage(e){e.active&&(e.active=!1,e.slideElement&&e.slideElement.classList.remove(`present`),e.backgroundElement&&e.backgroundElement.classList.remove(`present`))}activateTrigger(e){e.active||(e.active=!0,e.activate())}deactivateTrigger(e){e.active&&(e.active=!1,e.deactivate&&e.deactivate())}getSlideByIndices(e,t){let n=this.getAllPages().find((n=>n.indexh===e&&n.indexv===t));return n?n.slideElement:null}getScrollTriggerBySlide(e){return this.slideTriggers.find((t=>t.page.slideElement===e))}getAllPages(){return this.pages.flatMap((e=>[e,...e.autoAnimatePages||[]]))}onScroll(){this.syncScrollPosition(),this.storeScrollPosition()}get viewportElement(){return this.Reveal.getViewportElement()}},Xr=class{constructor(e){this.Reveal=e}async activate(){let e=this.Reveal.getConfig(),t=P(this.Reveal.getRevealElement(),Rr),n=e.slideNumber&&/all|print/i.test(e.showSlideNumber),r=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),i=Math.floor(r.width*(1+e.margin)),a=Math.floor(r.height*(1+e.margin)),o=r.width,s=r.height;await new Promise(requestAnimationFrame),Ar(`@page{size:`+i+`px `+a+`px; margin: 0px;}`),Ar(`.reveal section>img, .reveal section>video, .reveal section>iframe{max-width: `+o+`px; max-height:`+s+`px}`),document.documentElement.classList.add(`reveal-print`,`print-pdf`),document.body.style.width=i+`px`,document.body.style.height=a+`px`;let c=this.Reveal.getViewportElement(),l;if(c){let e=window.getComputedStyle(c);e&&e.background&&(l=e.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(o,s),await new Promise(requestAnimationFrame);let u=t.map((e=>e.scrollHeight)),d=[],f=t[0].parentNode,p=1;t.forEach((function(t,r){if(!1===t.classList.contains(`stack`)){let c=(i-o)/2,f=(a-s)/2,m=u[r],h=Math.max(Math.ceil(m/a),1);h=Math.min(h,e.pdfMaxPagesPerSlide),(h===1&&e.center||t.classList.contains(`center`))&&(f=Math.max((a-m)/2,0));let g=document.createElement(`div`);if(d.push(g),g.className=`pdf-page`,g.style.height=(a+e.pdfPageHeightOffset)*h+`px`,l&&(g.style.background=l),g.appendChild(t),t.style.left=c+`px`,t.style.top=f+`px`,t.style.width=o+`px`,this.Reveal.slideContent.layout(t),t.slideBackgroundElement&&g.insertBefore(t.slideBackgroundElement,t),e.showNotes){let n=this.Reveal.getSlideNotes(t);if(n){let t=typeof e.showNotes==`string`?e.showNotes:`inline`,r=document.createElement(`div`);r.classList.add(`speaker-notes`),r.classList.add(`speaker-notes-pdf`),r.setAttribute(`data-layout`,t),r.innerHTML=n,t===`separate-page`?d.push(r):(r.style.left=`8px`,r.style.bottom=`8px`,r.style.width=i-16+`px`,g.appendChild(r))}}if(n){let e=document.createElement(`div`);e.classList.add(`slide-number`),e.classList.add(`slide-number-pdf`),e.innerHTML=p++,g.appendChild(e)}if(e.pdfSeparateFragments){let e=this.Reveal.fragments.sort(g.querySelectorAll(`.fragment`),!0),t;e.forEach((function(e,r){t&&t.forEach((function(e){e.classList.remove(`current-fragment`)})),e.forEach((function(e){e.classList.add(`visible`,`current-fragment`)}),this);let i=g.cloneNode(!0);if(n){let e=r+1;i.querySelector(`.slide-number-pdf`).innerHTML+=`.`+e}d.push(i),t=e}),this),e.forEach((function(e){e.forEach((function(e){e.classList.remove(`visible`,`current-fragment`)}))}))}else P(g,`.fragment:not(.fade-out)`).forEach((function(e){e.classList.add(`visible`)}))}}),this),await new Promise(requestAnimationFrame),d.forEach((e=>f.appendChild(e))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:`pdf-ready`}),c.classList.remove(`loading-scroll-mode`)}isActive(){return this.Reveal.getConfig().view===`print`}},Zr=class{constructor(e){this.Reveal=e}configure(e,t){!1===e.fragments?this.disable():!1===t.fragments&&this.enable()}disable(){P(this.Reveal.getSlidesElement(),`.fragment`).forEach((e=>{e.classList.add(`visible`),e.classList.remove(`current-fragment`)}))}enable(){P(this.Reveal.getSlidesElement(),`.fragment`).forEach((e=>{e.classList.remove(`visible`),e.classList.remove(`current-fragment`)}))}availableRoutes(){let e=this.Reveal.getCurrentSlide();if(e&&this.Reveal.getConfig().fragments){let t=e.querySelectorAll(`.fragment:not(.disabled)`),n=e.querySelectorAll(`.fragment:not(.disabled):not(.visible)`);return{prev:t.length-n.length>0,next:!!n.length}}return{prev:!1,next:!1}}sort(e,t=!1){e=Array.from(e);let n=[],r=[],i=[];e.forEach((e=>{if(e.hasAttribute(`data-fragment-index`)){let t=parseInt(e.getAttribute(`data-fragment-index`),10);n[t]||(n[t]=[]),n[t].push(e)}else r.push([e])})),n=n.concat(r);let a=0;return n.forEach((e=>{e.forEach((e=>{i.push(e),e.setAttribute(`data-fragment-index`,a)})),a++})),!0===t?n:i}sortAll(){this.Reveal.getHorizontalSlides().forEach((e=>{let t=P(e,`section`);t.forEach(((e,t)=>{this.sort(e.querySelectorAll(`.fragment`))}),this),t.length===0&&this.sort(e.querySelectorAll(`.fragment`))}))}update(e,t,n=this.Reveal.getCurrentSlide()){let r={shown:[],hidden:[]};if(n&&this.Reveal.getConfig().fragments&&(t||=this.sort(n.querySelectorAll(`.fragment`))).length){let i=0;if(typeof e!=`number`){let t=this.sort(n.querySelectorAll(`.fragment.visible`)).pop();t&&(e=parseInt(t.getAttribute(`data-fragment-index`)||0,10))}Array.from(t).forEach(((t,n)=>{if(t.hasAttribute(`data-fragment-index`)&&(n=parseInt(t.getAttribute(`data-fragment-index`),10)),i=Math.max(i,n),n<=e){let i=t.classList.contains(`visible`);t.classList.add(`visible`),t.classList.remove(`current-fragment`),n===e&&(this.Reveal.announceStatus(this.Reveal.getStatusText(t)),t.classList.add(`current-fragment`),this.Reveal.slideContent.startEmbeddedContent(t)),i||(r.shown.push(t),this.Reveal.dispatchEvent({target:t,type:`visible`,bubbles:!1}))}else{let e=t.classList.contains(`visible`);t.classList.remove(`visible`),t.classList.remove(`current-fragment`),e&&(this.Reveal.slideContent.stopEmbeddedContent(t),r.hidden.push(t),this.Reveal.dispatchEvent({target:t,type:`hidden`,bubbles:!1}))}})),e=typeof e==`number`?e:-1,e=Math.max(Math.min(e,i),-1),n.setAttribute(`data-fragment`,e)}return r.hidden.length&&this.Reveal.dispatchEvent({type:`fragmenthidden`,data:{fragment:r.hidden[0],fragments:r.hidden}}),r.shown.length&&this.Reveal.dispatchEvent({type:`fragmentshown`,data:{fragment:r.shown[0],fragments:r.shown}}),r}sync(e=this.Reveal.getCurrentSlide()){return this.sort(e.querySelectorAll(`.fragment`))}goto(e,t=0){let n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments){let r=this.sort(n.querySelectorAll(`.fragment:not(.disabled)`));if(r.length){if(typeof e!=`number`){let t=this.sort(n.querySelectorAll(`.fragment:not(.disabled).visible`)).pop();e=t?parseInt(t.getAttribute(`data-fragment-index`)||0,10):-1}e+=t;let i=this.update(e,r);return this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!i.shown.length&&!i.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}},Qr=class{constructor(e){this.Reveal=e,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.Reveal.isScrollView()&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add(`overview`),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),P(this.Reveal.getRevealElement(),Rr).forEach((e=>{e.classList.contains(`stack`)||e.addEventListener(`click`,this.onSlideClicked,!0)}));let e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+70,this.overviewSlideHeight=e.height+70,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();let t=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:`overviewshown`,data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach(((e,t)=>{e.setAttribute(`data-index-h`,t),Er(e,`translate3d(`+t*this.overviewSlideWidth+`px, 0, 0)`),e.classList.contains(`stack`)&&P(e,`section`).forEach(((e,n)=>{e.setAttribute(`data-index-h`,t),e.setAttribute(`data-index-v`,n),Er(e,`translate3d(0, `+n*this.overviewSlideHeight+`px, 0)`)}))})),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(((e,t)=>{Er(e,`translate3d(`+t*this.overviewSlideWidth+`px, 0, 0)`),P(e,`.slide-background`).forEach(((e,t)=>{Er(e,`translate3d(0, `+t*this.overviewSlideHeight+`px, 0)`)}))}))}update(){let e=Math.min(window.innerWidth,window.innerHeight),t=Math.max(e/5,150)/e,n=this.Reveal.getIndices();this.Reveal.transformSlides({overview:[`scale(`+t+`)`,`translateX(`+-n.h*this.overviewSlideWidth+`px)`,`translateY(`+-n.v*this.overviewSlideHeight+`px)`].join(` `)})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove(`overview`),this.Reveal.getRevealElement().classList.add(`overview-deactivating`),setTimeout((()=>{this.Reveal.getRevealElement().classList.remove(`overview-deactivating`)}),1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),P(this.Reveal.getRevealElement(),Rr).forEach((e=>{Er(e,``),e.removeEventListener(`click`,this.onSlideClicked,!0)})),P(this.Reveal.getBackgroundsElement(),`.slide-background`).forEach((e=>{Er(e,``)})),this.Reveal.transformSlides({overview:``});let e=this.Reveal.getIndices();this.Reveal.slide(e.h,e.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:`overviewhidden`,data:{indexh:e.h,indexv:e.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(e){typeof e==`boolean`?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(e){if(this.isActive()){e.preventDefault();let t=e.target;for(;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains(`disabled`)&&(this.deactivate(),t.nodeName.match(/section/gi))){let e=parseInt(t.getAttribute(`data-index-h`),10),n=parseInt(t.getAttribute(`data-index-v`),10);this.Reveal.slide(e,n)}}}},$r=class{constructor(e){this.Reveal=e,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this)}configure(e,t){e.navigationMode===`linear`?(this.shortcuts[`&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J`]=`Next slide`,this.shortcuts[`&#8592;  ,  &#8593;  ,  P  ,  H  ,  K`]=`Previous slide`):(this.shortcuts[`N  ,  SPACE`]=`Next slide`,this.shortcuts[`P  ,  Shift SPACE`]=`Previous slide`,this.shortcuts[`&#8592;  ,  H`]=`Navigate left`,this.shortcuts[`&#8594;  ,  L`]=`Navigate right`,this.shortcuts[`&#8593;  ,  K`]=`Navigate up`,this.shortcuts[`&#8595;  ,  J`]=`Navigate down`),this.shortcuts[`Alt + &#8592;/&#8593/&#8594;/&#8595;`]=`Navigate without fragments`,this.shortcuts[`Shift + &#8592;/&#8593/&#8594;/&#8595;`]=`Jump to first/last slide`,this.shortcuts[`B  ,  .`]=`Pause`,this.shortcuts.F=`Fullscreen`,this.shortcuts.G=`Jump to slide`,this.shortcuts[`ESC, O`]=`Slide overview`}bind(){document.addEventListener(`keydown`,this.onDocumentKeyDown,!1)}unbind(){document.removeEventListener(`keydown`,this.onDocumentKeyDown,!1)}addKeyBinding(e,t){typeof e==`object`&&e.keyCode?this.bindings[e.keyCode]={callback:t,key:e.key,description:e.description}:this.bindings[e]={callback:t,key:null,description:null}}removeKeyBinding(e){delete this.bindings[e]}triggerKey(e){this.onDocumentKeyDown({keyCode:e})}registerKeyboardShortcut(e,t){this.shortcuts[e]=t}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyDown(e){let t=this.Reveal.getConfig();if(typeof t.keyboardCondition==`function`&&!1===t.keyboardCondition(e)||t.keyboardCondition===`focused`&&!this.Reveal.isFocused())return!0;let n=e.keyCode,r=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(e);let i=document.activeElement&&!0===document.activeElement.isContentEditable,a=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),o=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),s=!([32,37,38,39,40,63,78,80,191].indexOf(e.keyCode)!==-1&&e.shiftKey||e.altKey)&&(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey);if(i||a||o||s)return;let c,l=[66,86,190,191,112];if(typeof t.keyboard==`object`)for(c in t.keyboard)t.keyboard[c]===`togglePause`&&l.push(parseInt(c,10));if(this.Reveal.isPaused()&&l.indexOf(n)===-1)return!1;let u=t.navigationMode===`linear`||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),d=!1;if(typeof t.keyboard==`object`){for(c in t.keyboard)if(parseInt(c,10)===n){let n=t.keyboard[c];typeof n==`function`?n.apply(null,[e]):typeof n==`string`&&typeof this.Reveal[n]==`function`&&this.Reveal[n].call(),d=!0}}if(!1===d){for(c in this.bindings)if(parseInt(c,10)===n){let t=this.bindings[c].callback;typeof t==`function`?t.apply(null,[e]):typeof t==`string`&&typeof this.Reveal[t]==`function`&&this.Reveal[t].call(),d=!0}}!1===d&&(d=!0,n===80||n===33?this.Reveal.prev({skipFragments:e.altKey}):n===78||n===34?this.Reveal.next({skipFragments:e.altKey}):n===72||n===37?e.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&u?t.rtl?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.left({skipFragments:e.altKey}):n===76||n===39?e.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&u?t.rtl?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey}):this.Reveal.right({skipFragments:e.altKey}):n===75||n===38?e.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&u?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.up({skipFragments:e.altKey}):n===74||n===40?e.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&u?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.down({skipFragments:e.altKey}):n===36?this.Reveal.slide(0):n===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):n===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),e.shiftKey?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey})):[58,59,66,86,190].includes(n)||n===191&&!e.shiftKey?this.Reveal.togglePause():n===70?kr(t.embedded?this.Reveal.getViewportElement():document.documentElement):n===65?t.autoSlideStoppable&&this.Reveal.toggleAutoSlide(r):n===71?t.jumpToSlide&&this.Reveal.toggleJumpToSlide():n!==63&&n!==191||!e.shiftKey?n===112?this.Reveal.toggleHelp():d=!1:this.Reveal.toggleHelp()),d?e.preventDefault&&e.preventDefault():n!==27&&n!==79||(!1===this.Reveal.closeOverlay()&&this.Reveal.overview.toggle(),e.preventDefault&&e.preventDefault()),this.Reveal.cueAutoSlide()}},ei=class{MAX_REPLACE_STATE_FREQUENCY=1e3;constructor(e){this.Reveal=e,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener(`hashchange`,this.onWindowHashChange,!1)}unbind(){window.removeEventListener(`hashchange`,this.onWindowHashChange,!1)}getIndicesFromHash(e=window.location.hash,t={}){let n=e.replace(/^#\/?/,``),r=n.split(`/`);if(/^[0-9]*$/.test(r[0])||!n.length){let e=this.Reveal.getConfig(),n,i=e.hashOneBasedIndex||t.oneBasedIndex?1:0,a=parseInt(r[0],10)-i||0,o=parseInt(r[1],10)-i||0;return e.fragmentInURL&&(n=parseInt(r[2],10),isNaN(n)&&(n=void 0)),{h:a,v:o,f:n}}{let e,t;/\/[-\d]+$/g.test(n)&&(t=parseInt(n.split(`/`).pop(),10),t=isNaN(t)?void 0:t,n=n.split(`/`).shift());try{e=document.getElementById(decodeURIComponent(n)).closest(`.slides section`)}catch{}if(e)return{...this.Reveal.getIndices(e),f:t}}return null}readURL(){let e=this.Reveal.getIndices(),t=this.getIndicesFromHash();t?t.h===e.h&&t.v===e.v&&t.f===void 0||this.Reveal.slide(t.h,t.v,t.f):this.Reveal.slide(e.h||0,e.v||0)}writeURL(e){let t=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof e==`number`)this.writeURLTimeout=setTimeout(this.writeURL,e);else if(n){let e=this.getHash();t.history?window.location.hash=e:t.hash&&(e===`/`?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState(`#`+e))}}replaceState(e){window.history.replaceState(null,null,e),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(e){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(e):this.replaceStateTimeout=setTimeout((()=>this.replaceState(e)),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(e){let t=`/`,n=e||this.Reveal.getCurrentSlide(),r=n?n.getAttribute(`id`):null;r&&=encodeURIComponent(r);let i=this.Reveal.getIndices(e);if(this.Reveal.getConfig().fragmentInURL||(i.f=void 0),typeof r==`string`&&r.length)t=`/`+r,i.f>=0&&(t+=`/`+i.f);else{let e=+!!this.Reveal.getConfig().hashOneBasedIndex;(i.h>0||i.v>0||i.f>=0)&&(t+=i.h+e),(i.v>0||i.f>=0)&&(t+=`/`+(i.v+e)),i.f>=0&&(t+=`/`+i.f)}return t}onWindowHashChange(e){this.readURL()}},ti=class{constructor(e){this.Reveal=e,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this),this.onEnterFullscreen=this.onEnterFullscreen.bind(this)}render(){let e=this.Reveal.getConfig().rtl,t=this.Reveal.getRevealElement();this.element=document.createElement(`aside`),this.element.className=`controls`,this.element.innerHTML=`<button class="navigate-left" aria-label="${e?`next slide`:`previous slide`}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="${e?`previous slide`:`next slide`}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=P(t,`.navigate-left`),this.controlsRight=P(t,`.navigate-right`),this.controlsUp=P(t,`.navigate-up`),this.controlsDown=P(t,`.navigate-down`),this.controlsPrev=P(t,`.navigate-prev`),this.controlsNext=P(t,`.navigate-next`),this.controlsFullscreen=P(t,`.enter-fullscreen`),this.controlsRightArrow=this.element.querySelector(`.navigate-right`),this.controlsLeftArrow=this.element.querySelector(`.navigate-left`),this.controlsDownArrow=this.element.querySelector(`.navigate-down`)}configure(e,t){this.element.style.display=e.controls?`block`:`none`,this.element.setAttribute(`data-controls-layout`,e.controlsLayout),this.element.setAttribute(`data-controls-back-arrows`,e.controlsBackArrows)}bind(){let e=[`touchstart`,`click`];Fr&&(e=[`touchstart`]),e.forEach((e=>{this.controlsLeft.forEach((t=>t.addEventListener(e,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((t=>t.addEventListener(e,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((t=>t.addEventListener(e,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((t=>t.addEventListener(e,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((t=>t.addEventListener(e,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((t=>t.addEventListener(e,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((t=>t.addEventListener(e,this.onEnterFullscreen,!1)))}))}unbind(){[`touchstart`,`click`].forEach((e=>{this.controlsLeft.forEach((t=>t.removeEventListener(e,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((t=>t.removeEventListener(e,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((t=>t.removeEventListener(e,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((t=>t.removeEventListener(e,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((t=>t.removeEventListener(e,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((t=>t.removeEventListener(e,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((t=>t.removeEventListener(e,this.onEnterFullscreen,!1)))}))}update(){let e=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach((e=>{e.classList.remove(`enabled`,`fragmented`),e.setAttribute(`disabled`,`disabled`)})),e.left&&this.controlsLeft.forEach((e=>{e.classList.add(`enabled`),e.removeAttribute(`disabled`)})),e.right&&this.controlsRight.forEach((e=>{e.classList.add(`enabled`),e.removeAttribute(`disabled`)})),e.up&&this.controlsUp.forEach((e=>{e.classList.add(`enabled`),e.removeAttribute(`disabled`)})),e.down&&this.controlsDown.forEach((e=>{e.classList.add(`enabled`),e.removeAttribute(`disabled`)})),(e.left||e.up)&&this.controlsPrev.forEach((e=>{e.classList.add(`enabled`),e.removeAttribute(`disabled`)})),(e.right||e.down)&&this.controlsNext.forEach((e=>{e.classList.add(`enabled`),e.removeAttribute(`disabled`)}));let t=this.Reveal.getCurrentSlide();if(t){let e=this.Reveal.fragments.availableRoutes();e.prev&&this.controlsPrev.forEach((e=>{e.classList.add(`fragmented`,`enabled`),e.removeAttribute(`disabled`)})),e.next&&this.controlsNext.forEach((e=>{e.classList.add(`fragmented`,`enabled`),e.removeAttribute(`disabled`)})),this.Reveal.isVerticalSlide(t)?(e.prev&&this.controlsUp.forEach((e=>{e.classList.add(`fragmented`,`enabled`),e.removeAttribute(`disabled`)})),e.next&&this.controlsDown.forEach((e=>{e.classList.add(`fragmented`,`enabled`),e.removeAttribute(`disabled`)}))):(e.prev&&this.controlsLeft.forEach((e=>{e.classList.add(`fragmented`,`enabled`),e.removeAttribute(`disabled`)})),e.next&&this.controlsRight.forEach((e=>{e.classList.add(`fragmented`,`enabled`),e.removeAttribute(`disabled`)})))}if(this.Reveal.getConfig().controlsTutorial){let t=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&e.down?this.controlsDownArrow.classList.add(`highlight`):(this.controlsDownArrow.classList.remove(`highlight`),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&e.left&&t.v===0?this.controlsLeftArrow.classList.add(`highlight`):this.controlsLeftArrow.classList.remove(`highlight`):!this.Reveal.hasNavigatedHorizontally()&&e.right&&t.v===0?this.controlsRightArrow.classList.add(`highlight`):this.controlsRightArrow.classList.remove(`highlight`))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode===`linear`?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode===`linear`?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}onEnterFullscreen(e){let t=this.Reveal.getConfig(),n=this.Reveal.getViewportElement();kr(t.embedded?n:n.parentElement)}},ni=class{constructor(e){this.Reveal=e,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement(`div`),this.element.className=`progress`,this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement(`span`),this.element.appendChild(this.bar)}configure(e,t){this.element.style.display=e.progress?`block`:`none`}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener(`click`,this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener(`click`,this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let e=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(e=0),this.bar.style.transform=`scaleX(`+e+`)`}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(e){this.Reveal.onUserInput(e),e.preventDefault();let t=this.Reveal.getSlides(),n=t.length,r=Math.floor(e.clientX/this.getMaxWidth()*n);this.Reveal.getConfig().rtl&&(r=n-r);let i=this.Reveal.getIndices(t[r]);this.Reveal.slide(i.h,i.v)}destroy(){this.element.remove()}},ri=class{constructor(e){this.Reveal=e,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(e,t){e.mouseWheel?document.addEventListener(`wheel`,this.onDocumentMouseScroll,!1):document.removeEventListener(`wheel`,this.onDocumentMouseScroll,!1),e.hideInactiveCursor?(document.addEventListener(`mousemove`,this.onDocumentCursorActive,!1),document.addEventListener(`mousedown`,this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener(`mousemove`,this.onDocumentCursorActive,!1),document.removeEventListener(`mousedown`,this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor=``)}hideCursor(){!1===this.cursorHidden&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor=`none`)}destroy(){this.showCursor(),document.removeEventListener(`wheel`,this.onDocumentMouseScroll,!1),document.removeEventListener(`mousemove`,this.onDocumentCursorActive,!1),document.removeEventListener(`mousedown`,this.onDocumentCursorActive,!1)}onDocumentCursorActive(e){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(e){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let t=e.detail||-e.wheelDelta;t>0?this.Reveal.next():t<0&&this.Reveal.prev()}}},ii=(e,t)=>{let n=document.createElement(`script`);n.type=`text/javascript`,n.async=!1,n.defer=!1,n.src=e,typeof t==`function`&&(n.onload=n.onreadystatechange=e=>{(e.type===`load`||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=n.onerror=null,t())},n.onerror=e=>{n.onload=n.onreadystatechange=n.onerror=null,t(Error(`Failed loading script: `+n.src+`
`+e))});let r=document.querySelector(`head`);r.insertBefore(n,r.lastChild)},ai=class{constructor(e){this.Reveal=e,this.state=`idle`,this.registeredPlugins={},this.asyncDependencies=[]}load(e,t){return this.state=`loading`,e.forEach(this.registerPlugin.bind(this)),new Promise((e=>{let n=[],r=0;if(t.forEach((e=>{e.condition&&!e.condition()||(e.async?this.asyncDependencies.push(e):n.push(e))})),n.length){r=n.length;let t=t=>{t&&typeof t.callback==`function`&&t.callback(),--r==0&&this.initPlugins().then(e)};n.forEach((e=>{typeof e.id==`string`?(this.registerPlugin(e),t(e)):typeof e.src==`string`?ii(e.src,(()=>t(e))):(console.warn(`Unrecognized plugin format`,e),t())}))}else this.initPlugins().then(e)}))}initPlugins(){return new Promise((e=>{let t=Object.values(this.registeredPlugins),n=t.length;if(n===0)this.loadAsync().then(e);else{let r,i=()=>{--n==0?this.loadAsync().then(e):r()},a=0;r=()=>{let e=t[a++];if(typeof e.init==`function`){let t=e.init(this.Reveal);t&&typeof t.then==`function`?t.then(i):i()}else i()},r()}}))}loadAsync(){return this.state=`loaded`,this.asyncDependencies.length&&this.asyncDependencies.forEach((e=>{ii(e.src,e.callback)})),Promise.resolve()}registerPlugin(e){arguments.length===2&&typeof arguments[0]==`string`?(e=arguments[1]).id=arguments[0]:typeof e==`function`&&(e=e());let t=e.id;typeof t==`string`?this.registeredPlugins[t]===void 0?(this.registeredPlugins[t]=e,this.state===`loaded`&&typeof e.init==`function`&&e.init(this.Reveal)):console.warn(`reveal.js: "`+t+`" plugin has already been registered`):console.warn(`Unrecognized plugin format; can't find plugin.id`,e)}hasPlugin(e){return!!this.registeredPlugins[e]}getPlugin(e){return this.registeredPlugins[e]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach((e=>{typeof e.destroy==`function`&&e.destroy()})),this.registeredPlugins={},this.asyncDependencies=[]}},oi=class{constructor(e){this.Reveal=e,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let e=this.Reveal.getRevealElement();`onpointerdown`in window?(e.addEventListener(`pointerdown`,this.onPointerDown,!1),e.addEventListener(`pointermove`,this.onPointerMove,!1),e.addEventListener(`pointerup`,this.onPointerUp,!1)):window.navigator.msPointerEnabled?(e.addEventListener(`MSPointerDown`,this.onPointerDown,!1),e.addEventListener(`MSPointerMove`,this.onPointerMove,!1),e.addEventListener(`MSPointerUp`,this.onPointerUp,!1)):(e.addEventListener(`touchstart`,this.onTouchStart,!1),e.addEventListener(`touchmove`,this.onTouchMove,!1),e.addEventListener(`touchend`,this.onTouchEnd,!1))}unbind(){let e=this.Reveal.getRevealElement();e.removeEventListener(`pointerdown`,this.onPointerDown,!1),e.removeEventListener(`pointermove`,this.onPointerMove,!1),e.removeEventListener(`pointerup`,this.onPointerUp,!1),e.removeEventListener(`MSPointerDown`,this.onPointerDown,!1),e.removeEventListener(`MSPointerMove`,this.onPointerMove,!1),e.removeEventListener(`MSPointerUp`,this.onPointerUp,!1),e.removeEventListener(`touchstart`,this.onTouchStart,!1),e.removeEventListener(`touchmove`,this.onTouchMove,!1),e.removeEventListener(`touchend`,this.onTouchEnd,!1)}isSwipePrevented(e){if(Dr(e,`video[controls], audio[controls]`))return!0;for(;e&&typeof e.hasAttribute==`function`;){if(e.hasAttribute(`data-prevent-swipe`))return!0;e=e.parentNode}return!1}onTouchStart(e){if(this.touchCaptured=!1,this.isSwipePrevented(e.target))return!0;this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.touchStartCount=e.touches.length}onTouchMove(e){if(this.isSwipePrevented(e.target))return!0;let t=this.Reveal.getConfig();if(this.touchCaptured)Fr&&e.preventDefault();else{this.Reveal.onUserInput(e);let n=e.touches[0].clientX,r=e.touches[0].clientY;if(e.touches.length===1&&this.touchStartCount!==2){let i=this.Reveal.availableRoutes({includeFragments:!0}),a=n-this.touchStartX,o=r-this.touchStartY;a>40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,t.navigationMode===`linear`?t.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):a<-40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,t.navigationMode===`linear`?t.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):o>40&&i.up?(this.touchCaptured=!0,t.navigationMode===`linear`?this.Reveal.prev():this.Reveal.up()):o<-40&&i.down&&(this.touchCaptured=!0,t.navigationMode===`linear`?this.Reveal.next():this.Reveal.down()),t.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&e.preventDefault():e.preventDefault()}}}onTouchEnd(e){this.touchCaptured=!1}onPointerDown(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!==`touch`||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchStart(e))}onPointerMove(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!==`touch`||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchMove(e))}onPointerUp(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!==`touch`||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchEnd(e))}},si=`focus`,ci=`blur`,li=class{constructor(e){this.Reveal=e,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(e,t){e.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener(`pointerdown`,this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener(`pointerdown`,this.onRevealPointerDown,!1),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!1)}focus(){this.state!==si&&(this.Reveal.getRevealElement().classList.add(`focused`),document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!1)),this.state=si}blur(){this.state!==ci&&(this.Reveal.getRevealElement().classList.remove(`focused`),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!1)),this.state=ci}isFocused(){return this.state===si}destroy(){this.Reveal.getRevealElement().classList.remove(`focused`)}onRevealPointerDown(e){this.focus()}onDocumentPointerDown(e){let t=Or(e.target,`.reveal`);t&&t===this.Reveal.getRevealElement()||this.blur()}},ui=class{constructor(e){this.Reveal=e}render(){this.element=document.createElement(`div`),this.element.className=`speaker-notes`,this.element.setAttribute(`data-prevent-swipe`,``),this.element.setAttribute(`tabindex`,`0`),this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){e.showNotes&&this.element.setAttribute(`data-layout`,typeof e.showNotes==`string`?e.showNotes:`inline`)}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()&&(this.element.innerHTML=this.getSlideNotes()||`<span class="notes-placeholder">No notes on this slide.</span>`)}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()?this.Reveal.getRevealElement().classList.add(`show-notes`):this.Reveal.getRevealElement().classList.remove(`show-notes`)}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll(`[data-notes], aside.notes`).length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(e=this.Reveal.getCurrentSlide()){if(e.hasAttribute(`data-notes`))return e.getAttribute(`data-notes`);let t=e.querySelectorAll(`aside.notes`);return t?Array.from(t).map((e=>e.innerHTML)).join(`
`):null}destroy(){this.element.remove()}},di=class{constructor(e,t){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=t,this.canvas=document.createElement(`canvas`),this.canvas.className=`playback`,this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+`px`,this.canvas.style.height=this.diameter2+`px`,this.context=this.canvas.getContext(`2d`),this.container.appendChild(this.canvas),this.render()}setPlaying(e){let t=this.playing;this.playing=e,!t&&this.playing?this.animate():this.render()}animate(){let e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let e=this.playing?this.progress:0,t=this.diameter2-this.thickness,n=this.diameter2,r=this.diameter2;this.progressOffset+=.1*(1-this.progressOffset);let i=-Math.PI/2+2*Math.PI*e,a=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,r,t+4,0,2*Math.PI,!1),this.context.fillStyle=`rgba( 0, 0, 0, 0.4 )`,this.context.fill(),this.context.beginPath(),this.context.arc(n,r,t,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle=`rgba( 255, 255, 255, 0.2 )`,this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,r,t,a,i,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle=`#fff`,this.context.stroke()),this.context.translate(n-14,r-14),this.playing?(this.context.fillStyle=`#fff`,this.context.fillRect(0,0,10,28),this.context.fillRect(18,0,10,28)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,28),this.context.fillStyle=`#fff`,this.context.fill()),this.context.restore()}on(e,t){this.canvas.addEventListener(e,t,!1)}off(e,t){this.canvas.removeEventListener(e,t,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}},fi={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:`bottom-right`,controlsBackArrows:`faded`,progress:!0,slideNumber:!1,showSlideNumber:`all`,hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:`default`,shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:`ease`,autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:[`opacity`,`color`,`background-color`,`padding`,`font-size`,`line-height`,`letter-spacing`,`border-width`,`border-color`,`border-radius`,`outline`,`outline-offset`],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:`slide`,transitionSpeed:`default`,backgroundTransition:`fade`,parallaxBackgroundImage:``,parallaxBackgroundSize:``,parallaxBackgroundRepeat:``,parallaxBackgroundPosition:``,parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,view:null,scrollLayout:`full`,scrollSnap:`mandatory`,scrollProgress:`auto`,scrollActivationWidth:435,pdfMaxPagesPerSlide:1/0,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:`block`,hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]},pi=`5.1.0`;function mi(e,t){arguments.length<2&&(t=arguments[0],e=document.querySelector(`.reveal`));let n={},r,i,a,o,s,c={},l=!1,u=!1,d={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},f=[],p=1,m={layout:``,overview:``},h={},g=`idle`,_=0,v=0,y=-1,b=!1,x=new Lr(n),S=new Ur(n),C=new Wr(n),w=new Jr(n),T=new Kr(n),E=new Yr(n),D=new Xr(n),O=new Zr(n),k=new Qr(n),A=new $r(n),j=new ei(n),M=new ti(n),N=new ni(n),ee=new ri(n),te=new ai(n),ne=new li(n),re=new oi(n),ie=new ui(n);function ae(){u=!0,c.showHiddenSlides||P(h.wrapper,`section[data-visibility="hidden"]`).forEach((e=>{let t=e.parentNode;t.childElementCount===1&&/section/i.test(t.nodeName)?t.remove():e.remove()})),function(){h.slides.classList.add(`no-transition`),Pr?h.wrapper.classList.add(`no-hover`):h.wrapper.classList.remove(`no-hover`),T.render(),S.render(),C.render(),M.render(),N.render(),ie.render(),h.pauseOverlay=((e,t,n,r=``)=>{let i=e.querySelectorAll(`.`+n);for(let t=0;t<i.length;t++){let n=i[t];if(n.parentNode===e)return n}let a=document.createElement(t);return a.className=n,a.innerHTML=r,e.appendChild(a),a})(h.wrapper,`div`,`pause-overlay`,c.controls?`<button class="resume-button">Resume presentation</button>`:null),h.statusElement=function(){let e=h.wrapper.querySelector(`.aria-status`);return e||(e=document.createElement(`div`),e.style.position=`absolute`,e.style.height=`1px`,e.style.width=`1px`,e.style.overflow=`hidden`,e.style.clip=`rect( 1px, 1px, 1px, 1px )`,e.classList.add(`aria-status`),e.setAttribute(`aria-live`,`polite`),e.setAttribute(`aria-atomic`,`true`),h.wrapper.appendChild(e)),e}(),h.wrapper.setAttribute(`role`,`application`)}(),c.postMessage&&window.addEventListener(`message`,ut,!1),setInterval((()=>{(!E.isActive()&&h.wrapper.scrollTop!==0||h.wrapper.scrollLeft!==0)&&(h.wrapper.scrollTop=0,h.wrapper.scrollLeft=0)}),1e3),document.addEventListener(`fullscreenchange`,ht),document.addEventListener(`webkitfullscreenchange`,ht),qe().forEach((e=>{P(e,`section`).forEach(((e,t)=>{t>0&&(e.classList.remove(`present`),e.classList.remove(`past`),e.classList.add(`future`),e.setAttribute(`aria-hidden`,`true`))}))})),ce(),T.update(!0),function(){let e=c.view===`print`,t=c.view===`scroll`||c.view===`reader`;(e||t)&&(e?ue():re.unbind(),h.viewport.classList.add(`loading-scroll-mode`),e?document.readyState===`complete`?D.activate():window.addEventListener(`load`,(()=>D.activate())):E.activate())}(),j.readURL(),setTimeout((()=>{h.slides.classList.remove(`no-transition`),h.wrapper.classList.add(`ready`),me({type:`ready`,data:{indexh:r,indexv:i,currentSlide:o}})}),1)}function oe(e){h.statusElement.textContent=e}function se(e){let t=``;if(e.nodeType===3)t+=e.textContent;else if(e.nodeType===1){let n=e.getAttribute(`aria-hidden`),r=window.getComputedStyle(e).display===`none`;n===`true`||r||Array.from(e.childNodes).forEach((e=>{t+=se(e)}))}return t=t.trim(),t===``?``:t+` `}function ce(e){let t={...c};if(typeof e==`object`&&Cr(c,e),!1===n.isReady())return;let r=h.wrapper.querySelectorAll(Rr).length;h.wrapper.classList.remove(t.transition),h.wrapper.classList.add(c.transition),h.wrapper.setAttribute(`data-transition-speed`,c.transitionSpeed),h.wrapper.setAttribute(`data-background-transition`,c.backgroundTransition),h.viewport.style.setProperty(`--slide-width`,typeof c.width==`string`?c.width:c.width+`px`),h.viewport.style.setProperty(`--slide-height`,typeof c.height==`string`?c.height:c.height+`px`),c.shuffle&&Re(),wr(h.wrapper,`embedded`,c.embedded),wr(h.wrapper,`rtl`,c.rtl),wr(h.wrapper,`center`,c.center),!1===c.pause&&Me(),c.previewLinks?(_e(),ve(`[data-preview-link=false]`)):(ve(),_e(`[data-preview-link]:not([data-preview-link=false])`)),w.reset(),s&&=(s.destroy(),null),r>1&&c.autoSlide&&c.autoSlideStoppable&&(s=new di(h.wrapper,(()=>Math.min(Math.max((Date.now()-y)/_,0),1))),s.on(`click`,_t),b=!1),c.navigationMode==="default"?h.wrapper.removeAttribute(`data-navigation-mode`):h.wrapper.setAttribute(`data-navigation-mode`,c.navigationMode),ie.configure(c,t),ne.configure(c,t),ee.configure(c,t),M.configure(c,t),N.configure(c,t),A.configure(c,t),O.configure(c,t),S.configure(c,t),Le()}function le(){window.addEventListener(`resize`,pt,!1),c.touch&&re.bind(),c.keyboard&&A.bind(),c.progress&&N.bind(),c.respondToHashChanges&&j.bind(),M.bind(),ne.bind(),h.slides.addEventListener(`click`,ft,!1),h.slides.addEventListener(`transitionend`,dt,!1),h.pauseOverlay.addEventListener(`click`,Me,!1),c.focusBodyOnPageVisibilityChange&&document.addEventListener(`visibilitychange`,mt,!1)}function ue(){re.unbind(),ne.unbind(),A.unbind(),M.unbind(),N.unbind(),j.unbind(),window.removeEventListener(`resize`,pt,!1),h.slides.removeEventListener(`click`,ft,!1),h.slides.removeEventListener(`transitionend`,dt,!1),h.pauseOverlay.removeEventListener(`click`,Me,!1)}function de(t,n,r){e.addEventListener(t,n,r)}function fe(t,n,r){e.removeEventListener(t,n,r)}function pe(e){typeof e.layout==`string`&&(m.layout=e.layout),typeof e.overview==`string`&&(m.overview=e.overview),m.layout?Er(h.slides,m.layout+` `+m.overview):Er(h.slides,m.overview)}function me({target:e=h.wrapper,type:t,data:n,bubbles:r=!0}){let i=document.createEvent(`HTMLEvents`,1,2);return i.initEvent(t,r,!0),Cr(i,n),e.dispatchEvent(i),e===h.wrapper&&ge(t),i}function he(e){me({type:`slidechanged`,data:{indexh:r,indexv:i,previousSlide:a,currentSlide:o,origin:e}})}function ge(e,t){if(c.postMessageEvents&&window.parent!==window.self){let n={namespace:`reveal`,eventName:e,state:$e()};Cr(n,t),window.parent.postMessage(JSON.stringify(n),`*`)}}function _e(e=`a`){Array.from(h.wrapper.querySelectorAll(e)).forEach((e=>{/^(http|www)/gi.test(e.getAttribute(`href`))&&e.addEventListener(`click`,gt,!1)}))}function ve(e=`a`){Array.from(h.wrapper.querySelectorAll(e)).forEach((e=>{/^(http|www)/gi.test(e.getAttribute(`href`))&&e.removeEventListener(`click`,gt,!1)}))}function ye(e){xe(),h.overlay=document.createElement(`div`),h.overlay.classList.add(`overlay`),h.overlay.classList.add(`overlay-preview`),h.wrapper.appendChild(h.overlay),h.overlay.innerHTML=`<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="${e}" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="${e}"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>`,h.overlay.querySelector(`iframe`).addEventListener(`load`,(e=>{h.overlay.classList.add(`loaded`)}),!1),h.overlay.querySelector(`.close`).addEventListener(`click`,(e=>{xe(),e.preventDefault()}),!1),h.overlay.querySelector(`.external`).addEventListener(`click`,(e=>{xe()}),!1)}function be(){if(c.help){xe(),h.overlay=document.createElement(`div`),h.overlay.classList.add(`overlay`),h.overlay.classList.add(`overlay-help`),h.wrapper.appendChild(h.overlay);let e=`<p class="title">Keyboard Shortcuts</p><br/>`,t=A.getShortcuts(),n=A.getBindings();e+=`<table><th>KEY</th><th>ACTION</th>`;for(let n in t)e+=`<tr><td>${n}</td><td>${t[n]}</td></tr>`;for(let t in n)n[t].key&&n[t].description&&(e+=`<tr><td>${n[t].key}</td><td>${n[t].description}</td></tr>`);e+=`</table>`,h.overlay.innerHTML=`\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">${e}</div>\n\t\t\t\t</div>\n\t\t\t`,h.overlay.querySelector(`.close`).addEventListener(`click`,(e=>{xe(),e.preventDefault()}),!1)}}function xe(){return!!h.overlay&&(h.overlay.parentNode.removeChild(h.overlay),h.overlay=null,!0)}function Se(){if(h.wrapper&&!D.isActive()){let e=h.viewport.offsetWidth,t=h.viewport.offsetHeight;if(!c.disableLayout){Pr&&!c.embedded&&document.documentElement.style.setProperty(`--vh`,.01*window.innerHeight+`px`);let n=E.isActive()?we(e,t):we(),r=p;Ce(c.width,c.height),h.slides.style.width=n.width+`px`,h.slides.style.height=n.height+`px`,p=Math.min(n.presentationWidth/n.width,n.presentationHeight/n.height),p=Math.max(p,c.minScale),p=Math.min(p,c.maxScale),p===1||E.isActive()?(h.slides.style.zoom=``,h.slides.style.left=``,h.slides.style.top=``,h.slides.style.bottom=``,h.slides.style.right=``,pe({layout:``})):(h.slides.style.zoom=``,h.slides.style.left=`50%`,h.slides.style.top=`50%`,h.slides.style.bottom=`auto`,h.slides.style.right=`auto`,pe({layout:`translate(-50%, -50%) scale(`+p+`)`}));let i=Array.from(h.wrapper.querySelectorAll(Rr));for(let e=0,t=i.length;e<t;e++){let t=i[e];t.style.display!==`none`&&(c.center||t.classList.contains(`center`)?t.classList.contains(`stack`)?t.style.top=0:t.style.top=Math.max((n.height-t.scrollHeight)/2,0)+`px`:t.style.top=``)}r!==p&&me({type:`resize`,data:{oldScale:r,scale:p,size:n}})}(function(){if(h.wrapper&&!c.disableLayout&&!D.isActive()&&typeof c.scrollActivationWidth==`number`&&c.view!==`scroll`){let e=we();e.presentationWidth>0&&e.presentationWidth<=c.scrollActivationWidth?E.isActive()||(T.create(),E.activate()):E.isActive()&&E.deactivate()}})(),h.viewport.style.setProperty(`--slide-scale`,p),h.viewport.style.setProperty(`--viewport-width`,e+`px`),h.viewport.style.setProperty(`--viewport-height`,t+`px`),E.layout(),N.update(),T.updateParallax(),k.isActive()&&k.update()}}function Ce(e,t){P(h.slides,`section > .stretch, section > .r-stretch`).forEach((n=>{let r=((e,t=0)=>{if(e){let n,r=e.style.height;return e.style.height=`0px`,e.parentNode.style.height=`auto`,n=t-e.parentNode.offsetHeight,e.style.height=r+`px`,e.parentNode.style.removeProperty(`height`),n}return t})(n,t);if(/(img|video)/gi.test(n.nodeName)){let t=n.naturalWidth||n.videoWidth,i=n.naturalHeight||n.videoHeight,a=Math.min(e/t,r/i);n.style.width=t*a+`px`,n.style.height=i*a+`px`}else n.style.width=e+`px`,n.style.height=r+`px`}))}function we(e,t){let n=c.width,r=c.height;c.disableLayout&&(n=h.slides.offsetWidth,r=h.slides.offsetHeight);let i={width:n,height:r,presentationWidth:e||h.wrapper.offsetWidth,presentationHeight:t||h.wrapper.offsetHeight};return i.presentationWidth-=i.presentationWidth*c.margin,i.presentationHeight-=i.presentationHeight*c.margin,typeof i.width==`string`&&/%$/.test(i.width)&&(i.width=parseInt(i.width,10)/100*i.presentationWidth),typeof i.height==`string`&&/%$/.test(i.height)&&(i.height=parseInt(i.height,10)/100*i.presentationHeight),i}function Te(e,t){typeof e==`object`&&typeof e.setAttribute==`function`&&e.setAttribute(`data-previous-indexv`,t||0)}function Ee(e){if(typeof e==`object`&&typeof e.setAttribute==`function`&&e.classList.contains(`stack`)){let t=e.hasAttribute(`data-start-indexv`)?`data-start-indexv`:`data-previous-indexv`;return parseInt(e.getAttribute(t)||0,10)}return 0}function De(e=o){return e&&e.parentNode&&!!e.parentNode.nodeName.match(/section/i)}function Oe(){return!(!o||!De(o))&&!o.nextElementSibling}function ke(){return r===0&&i===0}function Ae(){return!!o&&!o.nextElementSibling&&(!De(o)||!o.parentNode.nextElementSibling)}function je(){if(c.pause){let e=h.wrapper.classList.contains(`paused`);tt(),h.wrapper.classList.add(`paused`),!1===e&&me({type:`paused`})}}function Me(){let e=h.wrapper.classList.contains(`paused`);h.wrapper.classList.remove(`paused`),et(),e&&me({type:`resumed`})}function Ne(e){typeof e==`boolean`?e?je():Me():Pe()?Me():je()}function Pe(){return h.wrapper.classList.contains(`paused`)}function Fe(t,n,s,l){if(me({type:`beforeslidechange`,data:{indexh:t===void 0?r:t,indexv:n===void 0?i:n,origin:l}}).defaultPrevented)return;a=o;let u=h.wrapper.querySelectorAll(zr);if(E.isActive()){let e=E.getSlideByIndices(t,n);e&&E.scrollToSlide(e);return}if(u.length===0)return;n!==void 0||k.isActive()||(n=Ee(u[t])),a&&a.parentNode&&a.parentNode.classList.contains(`stack`)&&Te(a.parentNode,i);let d=f.concat();f.length=0;let p=r||0,m=i||0;r=ze(zr,t===void 0?r:t),i=ze(Br,n===void 0?i:n);let _=r!==p||i!==m;_||(a=null);let v=u[r],y=v.querySelectorAll(`section`);e.classList.toggle(`is-vertical-slide`,y.length>1),o=y[i]||v;let b=!1;_&&a&&o&&!k.isActive()&&(g=`running`,b=Ie(a,o,p,m),b&&h.slides.classList.add(`disable-slide-transitions`)),He(),Se(),k.isActive()&&k.update(),s!==void 0&&O.goto(s),a&&a!==o&&(a.classList.remove(`present`),a.setAttribute(`aria-hidden`,`true`),ke()&&setTimeout((()=>{P(h.wrapper,zr+`.stack`).forEach((e=>{Te(e,0)}))}),0));e:for(let e=0,t=f.length;e<t;e++){for(let t=0;t<d.length;t++)if(d[t]===f[e]){d.splice(t,1);continue e}h.viewport.classList.add(f[e]),me({type:f[e]})}for(;d.length;)h.viewport.classList.remove(d.pop());_&&he(l),!_&&a||(x.stopEmbeddedContent(a),x.startEmbeddedContent(o)),requestAnimationFrame((()=>{oe(se(o))})),N.update(),M.update(),ie.update(),T.update(),T.updateParallax(),S.update(),O.update(),j.writeURL(),et(),b&&(setTimeout((()=>{h.slides.classList.remove(`disable-slide-transitions`)}),0),c.autoAnimate&&w.run(a,o))}function Ie(e,t,n,a){return e.hasAttribute(`data-auto-animate`)&&t.hasAttribute(`data-auto-animate`)&&e.getAttribute(`data-auto-animate-id`)===t.getAttribute(`data-auto-animate-id`)&&!(r>n||i>a?t:e).hasAttribute(`data-auto-animate-restart`)}function Le(){ue(),le(),Se(),_=c.autoSlide,et(),T.create(),j.writeURL(),!0===c.sortFragmentsOnSync&&O.sortAll(),M.update(),N.update(),He(),ie.update(),ie.updateVisibility(),T.update(!0),S.update(),x.formatEmbeddedContent(),!1===c.autoPlayMedia?x.stopEmbeddedContent(o,{unloadIframes:!1}):x.startEmbeddedContent(o),k.isActive()&&k.layout()}function Re(e=qe()){e.forEach(((t,n)=>{let r=e[Math.floor(Math.random()*e.length)];r.parentNode===t.parentNode&&t.parentNode.insertBefore(t,r);let i=t.querySelectorAll(`section`);i.length&&Re(i)}))}function ze(e,t){let n=P(h.wrapper,e),r=n.length,i=E.isActive()||D.isActive(),a=!1,o=!1;if(r){c.loop&&(t>=r&&(a=!0),(t%=r)<0&&(t=r+t,o=!0)),t=Math.max(Math.min(t,r-1),0);for(let e=0;e<r;e++){let r=n[e],s=c.rtl&&!De(r);r.classList.remove(`past`),r.classList.remove(`present`),r.classList.remove(`future`),r.setAttribute(`hidden`,``),r.setAttribute(`aria-hidden`,`true`),r.querySelector(`section`)&&r.classList.add(`stack`),i?r.classList.add(`present`):e<t?(r.classList.add(s?`future`:`past`),c.fragments&&Be(r)):e>t?(r.classList.add(s?`past`:`future`),c.fragments&&Ve(r)):e===t&&c.fragments&&(a?Ve(r):o&&Be(r))}let e=n[t],s=e.classList.contains(`present`);e.classList.add(`present`),e.removeAttribute(`hidden`),e.removeAttribute(`aria-hidden`),s||me({target:e,type:`visible`,bubbles:!1});let l=e.getAttribute(`data-state`);l&&(f=f.concat(l.split(` `)))}else t=0;return t}function Be(e){P(e,`.fragment`).forEach((e=>{e.classList.add(`visible`),e.classList.remove(`current-fragment`)}))}function Ve(e){P(e,`.fragment.visible`).forEach((e=>{e.classList.remove(`visible`,`current-fragment`)}))}function He(){let e,t,n=qe(),a=n.length;if(a&&r!==void 0){let o=k.isActive()?10:c.viewDistance;Pr&&(o=k.isActive()?6:c.mobileViewDistance),D.isActive()&&(o=Number.MAX_VALUE);for(let s=0;s<a;s++){let l=n[s],u=P(l,`section`),d=u.length;if(e=Math.abs((r||0)-s)||0,c.loop&&(e=Math.abs(((r||0)-s)%(a-o))||0),e<o?x.load(l):x.unload(l),d){let n=Ee(l);for(let a=0;a<d;a++){let c=u[a];t=Math.abs(s===(r||0)?(i||0)-a:a-n),e+t<o?x.load(c):x.unload(c)}}}Xe()?h.wrapper.classList.add(`has-vertical-slides`):h.wrapper.classList.remove(`has-vertical-slides`),Ye()?h.wrapper.classList.add(`has-horizontal-slides`):h.wrapper.classList.remove(`has-horizontal-slides`)}}function Ue({includeFragments:e=!1}={}){let t=h.wrapper.querySelectorAll(zr),n=h.wrapper.querySelectorAll(Br),a={left:r>0,right:r<t.length-1,up:i>0,down:i<n.length-1};if(c.loop&&(t.length>1&&(a.left=!0,a.right=!0),n.length>1&&(a.up=!0,a.down=!0)),t.length>1&&c.navigationMode===`linear`&&(a.right=a.right||a.down,a.left=a.left||a.up),!0===e){let e=O.availableRoutes();a.left=a.left||e.prev,a.up=a.up||e.prev,a.down=a.down||e.next,a.right=a.right||e.next}if(c.rtl){let e=a.left;a.left=a.right,a.right=e}return a}function We(e=o){let t=qe(),n=0;e:for(let r=0;r<t.length;r++){let i=t[r],a=i.querySelectorAll(`section`);for(let t=0;t<a.length;t++){if(a[t]===e)break e;a[t].dataset.visibility!==`uncounted`&&n++}if(i===e)break;!1===i.classList.contains(`stack`)&&i.dataset.visibility!==`uncounted`&&n++}return n}function Ge(e){let t,n=r,a=i;if(e){if(E.isActive())n=parseInt(e.getAttribute(`data-index-h`),10),e.getAttribute(`data-index-v`)&&(a=parseInt(e.getAttribute(`data-index-v`),10));else{let t=De(e),r=t?e.parentNode:e,i=qe();n=Math.max(i.indexOf(r),0),a=void 0,t&&(a=Math.max(P(e.parentNode,`section`).indexOf(e),0))}}if(!e&&o&&o.querySelectorAll(`.fragment`).length>0){let e=o.querySelector(`.current-fragment`);t=e&&e.hasAttribute(`data-fragment-index`)?parseInt(e.getAttribute(`data-fragment-index`),10):o.querySelectorAll(`.fragment.visible`).length-1}return{h:n,v:a,f:t}}function Ke(){return P(h.wrapper,Rr+`:not(.stack):not([data-visibility="uncounted"])`)}function qe(){return P(h.wrapper,zr)}function Je(){return P(h.wrapper,`.slides>section>section`)}function Ye(){return qe().length>1}function Xe(){return Je().length>1}function Ze(){return Ke().length}function Qe(e,t){let n=qe()[e],r=n&&n.querySelectorAll(`section`);return r&&r.length&&typeof t==`number`?r?r[t]:void 0:n}function $e(){let e=Ge();return{indexh:e.h,indexv:e.v,indexf:e.f,paused:Pe(),overview:k.isActive()}}function et(){if(tt(),o&&!1!==c.autoSlide){let e=o.querySelector(`.current-fragment[data-autoslide]`),t=e?e.getAttribute(`data-autoslide`):null,n=o.parentNode?o.parentNode.getAttribute(`data-autoslide`):null,r=o.getAttribute(`data-autoslide`);t?_=parseInt(t,10):r?_=parseInt(r,10):n?_=parseInt(n,10):(_=c.autoSlide,o.querySelectorAll(`.fragment`).length===0&&P(o,`video, audio`).forEach((e=>{e.hasAttribute(`data-autoplay`)&&_&&1e3*e.duration/e.playbackRate>_&&(_=1e3*e.duration/e.playbackRate+1e3)}))),!_||b||Pe()||k.isActive()||Ae()&&!O.availableRoutes().next&&!0!==c.loop||(v=setTimeout((()=>{typeof c.autoSlideMethod==`function`?c.autoSlideMethod():lt(),et()}),_),y=Date.now()),s&&s.setPlaying(v!==-1)}}function tt(){clearTimeout(v),v=-1}function nt(){_&&!b&&(b=!0,me({type:`autoslidepaused`}),clearTimeout(v),s&&s.setPlaying(!1))}function rt(){_&&b&&(b=!1,me({type:`autoslideresumed`}),et())}function it({skipFragments:e=!1}={}){if(d.hasNavigatedHorizontally=!0,E.isActive())return E.prev();c.rtl?(k.isActive()||e||!1===O.next())&&Ue().left&&Fe(r+1,c.navigationMode===`grid`?i:void 0):(k.isActive()||e||!1===O.prev())&&Ue().left&&Fe(r-1,c.navigationMode===`grid`?i:void 0)}function at({skipFragments:e=!1}={}){if(d.hasNavigatedHorizontally=!0,E.isActive())return E.next();c.rtl?(k.isActive()||e||!1===O.prev())&&Ue().right&&Fe(r-1,c.navigationMode===`grid`?i:void 0):(k.isActive()||e||!1===O.next())&&Ue().right&&Fe(r+1,c.navigationMode===`grid`?i:void 0)}function ot({skipFragments:e=!1}={}){if(E.isActive())return E.prev();(k.isActive()||e||!1===O.prev())&&Ue().up&&Fe(r,i-1)}function st({skipFragments:e=!1}={}){if(d.hasNavigatedVertically=!0,E.isActive())return E.next();(k.isActive()||e||!1===O.next())&&Ue().down&&Fe(r,i+1)}function ct({skipFragments:e=!1}={}){if(E.isActive())return E.prev();if(e||!1===O.prev()){if(Ue().up)ot({skipFragments:e});else{let t;if(t=c.rtl?P(h.wrapper,zr+`.future`).pop():P(h.wrapper,zr+`.past`).pop(),t&&t.classList.contains(`stack`)){let e=t.querySelectorAll(`section`).length-1||void 0;Fe(r-1,e)}else c.rtl?at({skipFragments:e}):it({skipFragments:e})}}}function lt({skipFragments:e=!1}={}){if(d.hasNavigatedHorizontally=!0,d.hasNavigatedVertically=!0,E.isActive())return E.next();if(e||!1===O.next()){let t=Ue();t.down&&t.right&&c.loop&&Oe()&&(t.down=!1),t.down?st({skipFragments:e}):c.rtl?it({skipFragments:e}):at({skipFragments:e})}}function ut(e){let t=e.data;if(typeof t==`string`&&t.charAt(0)===`{`&&t.charAt(t.length-1)===`}`&&(t=JSON.parse(t),t.method&&typeof n[t.method]==`function`)){if(!1===Vr.test(t.method)){let e=n[t.method].apply(n,t.args);ge(`callback`,{method:t.method,result:e})}else console.warn(`reveal.js: "`+t.method+`" is is blacklisted from the postMessage API`)}}function dt(e){g===`running`&&/section/gi.test(e.target.nodeName)&&(g=`idle`,me({type:`slidetransitionend`,data:{indexh:r,indexv:i,previousSlide:a,currentSlide:o}}))}function ft(e){let t=Or(e.target,`a[href^="#"]`);if(t){let r=t.getAttribute(`href`),i=j.getIndicesFromHash(r);i&&(n.slide(i.h,i.v,i.f),e.preventDefault())}}function pt(e){Se()}function mt(e){!1===document.hidden&&document.activeElement!==document.body&&(typeof document.activeElement.blur==`function`&&document.activeElement.blur(),document.body.focus())}function ht(e){(document.fullscreenElement||document.webkitFullscreenElement)===h.wrapper&&(e.stopImmediatePropagation(),setTimeout((()=>{n.layout(),n.focus.focus()}),1))}function gt(e){if(e.currentTarget&&e.currentTarget.hasAttribute(`href`)){let t=e.currentTarget.getAttribute(`href`);t&&(ye(t),e.preventDefault())}}function _t(e){Ae()&&!1===c.loop?(Fe(0,0),rt()):b?rt():nt()}let vt={VERSION:pi,initialize:function(r){if(!e)throw`Unable to find presentation root (<div class="reveal">).`;if(l=!0,h.wrapper=e,h.slides=e.querySelector(`.slides`),!h.slides)throw`Unable to find slides container (<div class="slides">).`;return c={...fi,...c,...t,...r,...jr()},/print-pdf/gi.test(window.location.search)&&(c.view=`print`),function(){!0===c.embedded?h.viewport=Or(e,`.reveal-viewport`)||e:(h.viewport=document.body,document.documentElement.classList.add(`reveal-full-page`)),h.viewport.classList.add(`reveal-viewport`)}(),window.addEventListener(`load`,Se,!1),te.load(c.plugins,c.dependencies).then(ae),new Promise((e=>n.on(`ready`,e)))},configure:ce,destroy:function(){!1!==l&&(ue(),tt(),ve(),ie.destroy(),ne.destroy(),te.destroy(),ee.destroy(),M.destroy(),N.destroy(),T.destroy(),S.destroy(),C.destroy(),document.removeEventListener(`fullscreenchange`,ht),document.removeEventListener(`webkitfullscreenchange`,ht),document.removeEventListener(`visibilitychange`,mt,!1),window.removeEventListener(`message`,ut,!1),window.removeEventListener(`load`,Se,!1),h.pauseOverlay&&h.pauseOverlay.remove(),h.statusElement&&h.statusElement.remove(),document.documentElement.classList.remove(`reveal-full-page`),h.wrapper.classList.remove(`ready`,`center`,`has-horizontal-slides`,`has-vertical-slides`),h.wrapper.removeAttribute(`data-transition-speed`),h.wrapper.removeAttribute(`data-background-transition`),h.viewport.classList.remove(`reveal-viewport`),h.viewport.style.removeProperty(`--slide-width`),h.viewport.style.removeProperty(`--slide-height`),h.slides.style.removeProperty(`width`),h.slides.style.removeProperty(`height`),h.slides.style.removeProperty(`zoom`),h.slides.style.removeProperty(`left`),h.slides.style.removeProperty(`top`),h.slides.style.removeProperty(`bottom`),h.slides.style.removeProperty(`right`),h.slides.style.removeProperty(`transform`),Array.from(h.wrapper.querySelectorAll(Rr)).forEach((e=>{e.style.removeProperty(`display`),e.style.removeProperty(`top`),e.removeAttribute(`hidden`),e.removeAttribute(`aria-hidden`)})))},sync:Le,syncSlide:function(e=o){T.sync(e),O.sync(e),x.load(e),T.update(),ie.update()},syncFragments:O.sync.bind(O),slide:Fe,left:it,right:at,up:ot,down:st,prev:ct,next:lt,navigateLeft:it,navigateRight:at,navigateUp:ot,navigateDown:st,navigatePrev:ct,navigateNext:lt,navigateFragment:O.goto.bind(O),prevFragment:O.prev.bind(O),nextFragment:O.next.bind(O),on:de,off:fe,addEventListener:de,removeEventListener:fe,layout:Se,shuffle:Re,availableRoutes:Ue,availableFragments:O.availableRoutes.bind(O),toggleHelp:function(e){typeof e==`boolean`?e?be():xe():h.overlay?xe():be()},toggleOverview:k.toggle.bind(k),toggleScrollView:E.toggle.bind(E),togglePause:Ne,toggleAutoSlide:function(e){typeof e==`boolean`?e?rt():nt():b?rt():nt()},toggleJumpToSlide:function(e){typeof e==`boolean`?e?C.show():C.hide():C.isVisible()?C.hide():C.show()},isFirstSlide:ke,isLastSlide:Ae,isLastVerticalSlide:Oe,isVerticalSlide:De,isVerticalStack:function(e=o){return e.classList.contains(`.stack`)||e.querySelector(`section`)!==null},isPaused:Pe,isAutoSliding:function(){return!(!_||b)},isSpeakerNotes:ie.isSpeakerNotesWindow.bind(ie),isOverview:k.isActive.bind(k),isFocused:ne.isFocused.bind(ne),isScrollView:E.isActive.bind(E),isPrintView:D.isActive.bind(D),isReady:()=>u,loadSlide:x.load.bind(x),unloadSlide:x.unload.bind(x),startEmbeddedContent:()=>x.startEmbeddedContent(o),stopEmbeddedContent:()=>x.stopEmbeddedContent(o,{unloadIframes:!1}),showPreview:ye,hidePreview:xe,addEventListeners:le,removeEventListeners:ue,dispatchEvent:me,getState:$e,setState:function(e){if(typeof e==`object`){Fe(Tr(e.indexh),Tr(e.indexv),Tr(e.indexf));let t=Tr(e.paused),n=Tr(e.overview);typeof t==`boolean`&&t!==Pe()&&Ne(t),typeof n==`boolean`&&n!==k.isActive()&&k.toggle(n)}},getProgress:function(){let e=Ze(),t=We();if(o){let e=o.querySelectorAll(`.fragment`);e.length>0&&(t+=o.querySelectorAll(`.fragment.visible`).length/e.length*.9)}return Math.min(t/(e-1),1)},getIndices:Ge,getSlidesAttributes:function(){return Ke().map((e=>{let t={};for(let n=0;n<e.attributes.length;n++){let r=e.attributes[n];t[r.name]=r.value}return t}))},getSlidePastCount:We,getTotalSlides:Ze,getSlide:Qe,getPreviousSlide:()=>a,getCurrentSlide:()=>o,getSlideBackground:function(e,t){let n=typeof e==`number`?Qe(e,t):e;if(n)return n.slideBackgroundElement},getSlideNotes:ie.getSlideNotes.bind(ie),getSlides:Ke,getHorizontalSlides:qe,getVerticalSlides:Je,hasHorizontalSlides:Ye,hasVerticalSlides:Xe,hasNavigatedHorizontally:()=>d.hasNavigatedHorizontally,hasNavigatedVertically:()=>d.hasNavigatedVertically,shouldAutoAnimateBetween:Ie,addKeyBinding:A.addKeyBinding.bind(A),removeKeyBinding:A.removeKeyBinding.bind(A),triggerKey:A.triggerKey.bind(A),registerKeyboardShortcut:A.registerKeyboardShortcut.bind(A),getComputedSlideSize:we,setCurrentScrollPage:function(e,t,n){let s=r||0;r=t,i=n;let l=o!==e;a=o,o=e,o&&a&&c.autoAnimate&&Ie(a,o,s,i)&&w.run(a,o),l&&(a&&(x.stopEmbeddedContent(a),x.stopEmbeddedContent(a.slideBackgroundElement)),x.startEmbeddedContent(o),x.startEmbeddedContent(o.slideBackgroundElement)),requestAnimationFrame((()=>{oe(se(o))})),he()},getScale:()=>p,getConfig:()=>c,getQueryHash:jr,getSlidePath:j.getHash.bind(j),getRevealElement:()=>e,getSlidesElement:()=>h.slides,getViewportElement:()=>h.viewport,getBackgroundsElement:()=>T.element,registerPlugin:te.registerPlugin.bind(te),hasPlugin:te.hasPlugin.bind(te),getPlugin:te.getPlugin.bind(te),getPlugins:te.getRegisteredPlugins.bind(te)};return Cr(n,{...vt,announceStatus:oe,getStatusText:se,focus:ne,scroll:E,progress:N,controls:M,location:j,overview:k,fragments:O,backgrounds:T,slideContent:x,slideNumber:S,onUserInput:function(e){c.autoSlideStoppable&&nt()},closeOverlay:xe,updateSlidesVisibility:He,layoutSlideContents:Ce,transformSlides:pe,cueAutoSlide:et,cancelAutoSlide:tt}),vt}var F=mi,hi=[];F.initialize=e=>(Object.assign(F,new mi(document.querySelector(`.reveal`),e)),hi.map((e=>e(F))),F.initialize()),[`configure`,`on`,`off`,`addEventListener`,`removeEventListener`,`registerPlugin`].forEach((e=>{F[e]=(...t)=>{hi.push((n=>n[e].call(null,...t)))}})),F.isReady=()=>!1,F.VERSION=pi;function gi(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:``,highlight:null,hooks:null,langPrefix:`language-`,mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var _i={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:``,highlight:null,hooks:null,langPrefix:`language-`,mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},vi=/[&<>"']/,yi=new RegExp(vi.source,`g`),bi=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,xi=new RegExp(bi.source,`g`),Si={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Ci=e=>Si[e];function wi(e,t){if(t){if(vi.test(e))return e.replace(yi,Ci)}else if(bi.test(e))return e.replace(xi,Ci);return e}var Ti=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Ei(e){return e.replace(Ti,((e,t)=>(t=t.toLowerCase())===`colon`?`:`:t.charAt(0)===`#`?t.charAt(1)===`x`?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):``))}var Di=/(^|[^\[])\^/g;function I(e,t){e=typeof e==`string`?e:e.source,t||=``;let n={replace:(t,r)=>(r=(r=r.source||r).replace(Di,`$1`),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n}var Oi=/[^\w:]/g,ki=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Ai(e,t,n){if(e){let e;try{e=decodeURIComponent(Ei(n)).replace(Oi,``).toLowerCase()}catch{return null}if(e.indexOf(`javascript:`)===0||e.indexOf(`vbscript:`)===0||e.indexOf(`data:`)===0)return null}t&&!ki.test(n)&&(n=function(e,t){ji[` `+e]||(Mi.test(e)?ji[` `+e]=e+`/`:ji[` `+e]=Li(e,`/`,!0)),e=ji[` `+e];let n=e.indexOf(`:`)===-1;return t.substring(0,2)===`//`?n?t:e.replace(Ni,`$1`)+t:t.charAt(0)===`/`?n?t:e.replace(Pi,`$1`)+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,`%`)}catch{return null}return n}var ji={},Mi=/^[^:]+:\/*[^/]*$/,Ni=/^([^:]+:)[\s\S]*$/,Pi=/^([^:]+:\/*[^/]*)[\s\S]*$/,Fi={exec:function(){}};function Ii(e,t){let n=e.replace(/\|/g,((e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`})).split(/ \|/),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,`|`);return n}function Li(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a!==t||n){if(a===t||!n)break;i++}else i++}return e.slice(0,r-i)}function Ri(e,t){if(t<1)return``;let n=``;for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}function zi(e,t,n,r){let i=t.href,a=t.title?wi(t.title):null,o=e[1].replace(/\\([\[\]])/g,`$1`);if(e[0].charAt(0)!==`!`){r.state.inLink=!0;let e={type:`link`,raw:n,href:i,title:a,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,e}return{type:`image`,raw:n,href:i,title:a,text:wi(o)}}var Bi=class{constructor(e){this.options=e||_i}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(/^ {1,4}/gm,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:Li(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=function(e,t){let n=e.match(/^(\s+)(?:```)/);if(n===null)return t;let r=n[1];return t.split(`
`).map((e=>{let t=e.match(/^\s+/);if(t===null)return e;let[n]=t;return n.length>=r.length?e.slice(r.length):e})).join(`
`)}(e,t[3]||``);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){let t=Li(e,`#`);this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:t[0]}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=t[0].replace(/^ *>[ \t]?/gm,``),n=this.lexer.state.top;this.lexer.state.top=!0;let r=this.lexer.blockTokens(e);return this.lexer.state.top=n,{type:`blockquote`,raw:t[0],tokens:r,text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,r,i,a,o,s,c,l,u,d,f,p,m=t[1].trim(),h=m.length>1,g={type:`list`,raw:``,ordered:h,start:h?+m.slice(0,-1):``,loose:!1,items:[]};m=h?`\\d{1,9}\\${m.slice(-1)}`:`\\${m}`,this.options.pedantic&&(m=h?m:`[*+-]`);let _=RegExp(`^( {0,3}${m})((?:[\t ][^\\n]*)?(?:\\n|$))`);for(;e&&(p=!1,t=_.exec(e))&&!this.rules.block.hr.test(e);){if(n=t[0],e=e.substring(n.length),l=t[2].split(`
`,1)[0].replace(/^\t+/,(e=>` `.repeat(3*e.length))),u=e.split(`
`,1)[0],this.options.pedantic?(a=2,f=l.trimLeft()):(a=t[2].search(/[^ ]/),a=a>4?1:a,f=l.slice(a),a+=t[1].length),s=!1,!l&&/^ *$/.test(u)&&(n+=u+`
`,e=e.substring(u.length+1),p=!0),!p){let t=RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),r=RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),i=RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),o=RegExp(`^ {0,${Math.min(3,a-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],u=d,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,`  `)),!i.test(u))&&!o.test(u)&&!t.test(u)&&!r.test(e);){if(u.search(/[^ ]/)>=a||!u.trim())f+=`
`+u.slice(a);else{if(s||l.search(/[^ ]/)>=4||i.test(l)||o.test(l)||r.test(l))break;f+=`
`+u}s||u.trim()||(s=!0),n+=d+`
`,e=e.substring(d.length+1),l=u.slice(a)}}g.loose||(c?g.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(f),r&&(i=r[0]!==`[ ] `,f=f.replace(/^\[[ xX]\] +/,``))),g.items.push({type:`list_item`,raw:n,task:!!r,checked:i,loose:!1,text:f}),g.raw+=n}g.items[g.items.length-1].raw=n.trimRight(),g.items[g.items.length-1].text=f.trimRight(),g.raw=g.raw.trimRight();let v=g.items.length;for(o=0;o<v;o++)if(this.lexer.state.top=!1,g.items[o].tokens=this.lexer.blockTokens(g.items[o].text,[]),!g.loose){let e=g.items[o].tokens.filter((e=>e.type===`space`));g.loose=e.length>0&&e.some((e=>/\n.*\n/.test(e.raw)))}if(g.loose)for(o=0;o<v;o++)g.items[o].loose=!0;return g}}html(e){let t=this.rules.block.html.exec(e);if(t){let e={type:`html`,raw:t[0],pre:!this.options.sanitizer&&(t[1]===`pre`||t[1]===`script`||t[1]===`style`),text:t[0]};if(this.options.sanitize){let n=this.options.sanitizer?this.options.sanitizer(t[0]):wi(t[0]);e.type=`paragraph`,e.text=n,e.tokens=this.lexer.inline(n)}return e}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(/\s+/g,` `),n=t[2]?t[2].replace(/^<(.*)>$/,`$1`).replace(this.rules.inline._escapes,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(t){let e={type:`table`,header:Ii(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,``).split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,``).split(`
`):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r,i,a,o=e.align.length;for(n=0;n<o;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]=`right`:/^ *:-+: *$/.test(e.align[n])?e.align[n]=`center`:/^ *:-+ *$/.test(e.align[n])?e.align[n]=`left`:e.align[n]=null;for(o=e.rows.length,n=0;n<o;n++)e.rows[n]=Ii(e.rows[n],e.header.length).map((e=>({text:e})));for(o=e.header.length,r=0;r<o;r++)e.header[r].tokens=this.lexer.inline(e.header[r].text);for(o=e.rows.length,r=0;r<o;r++)for(a=e.rows[r],i=0;i<a.length;i++)a[i].tokens=this.lexer.inline(a[i].text);return e}}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:wi(t[1])}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?`text`:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):wi(t[0]):t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let t=Li(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(e.indexOf(t[1])===-1)return-1;let n=e.length,r=0,i=0;for(;i<n;i++)if(e[i]===`\\`)i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&(r--,r<0))return i;return-1}(t[2],`()`);if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),zi(t,{href:n&&n.replace(this.rules.inline._escapes,`$1`),title:r&&r.replace(this.rules.inline._escapes,`$1`)},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g,` `);if(e=t[e.toLowerCase()],!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return zi(n,e,n[0],this.lexer)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r||r[3]&&n.match(/[\p{L}\p{N}]/u))return;let i=r[1]||r[2]||``;if(!i||i&&(n===``||this.rules.inline.punctuation.exec(n))){let n=r[0].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=i.length,r[3]||r[4]){o+=a;continue}if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=e.slice(0,n+r.index+(r[0].length-i.length)+a);if(Math.min(n,a)%2){let e=t.slice(1,-1);return{type:`em`,raw:t,text:e,tokens:this.lexer.inlineTokens(e)}}let c=t.slice(2,-2);return{type:`strong`,raw:t,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g,` `),n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=wi(e,!0),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:`del`,raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){let n=this.rules.inline.autolink.exec(e);if(n){let e,r;return n[2]===`@`?(e=wi(this.options.mangle?t(n[1]):n[1]),r=`mailto:`+e):(e=wi(n[1]),r=e),{type:`link`,raw:n[0],text:e,href:r,tokens:[{type:`text`,raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if(n[2]===`@`)e=wi(this.options.mangle?t(n[0]):n[0]),r=`mailto:`+e;else{let t;do t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(t!==n[0]);e=wi(n[0]),r=n[1]===`www.`?`http://`+n[0]:n[0]}return{type:`link`,raw:n[0],text:e,href:r,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e,t){let n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):wi(n[0]):n[0]:wi(this.options.smartypants?t(n[0]):n[0]),{type:`text`,raw:n[0],text:e}}}},L={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))`,def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Fi,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};L.def=I(L.def).replace(`label`,L._label).replace(`title`,L._title).getRegex(),L.bullet=/(?:[*+-]|\d{1,9}[.)])/,L.listItemStart=I(/^( *)(bull) */).replace(`bull`,L.bullet).getRegex(),L.list=I(L.list).replace(/bull/g,L.bullet).replace(`hr`,`\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))`).replace(`def`,`\\n+(?=`+L.def.source+`)`).getRegex(),L._tag=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,L._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,L.html=I(L.html,`i`).replace(`comment`,L._comment).replace(`tag`,L._tag).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),L.paragraph=I(L._paragraph).replace(`hr`,L.hr).replace(`heading`,` {0,3}#{1,6} `).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,L._tag).getRegex(),L.blockquote=I(L.blockquote).replace(`paragraph`,L.paragraph).getRegex(),L.normal={...L},L.gfm={...L.normal,table:`^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`},L.gfm.table=I(L.gfm.table).replace(`hr`,L.hr).replace(`heading`,` {0,3}#{1,6} `).replace(`blockquote`,` {0,3}>`).replace(`code`,` {4}[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,L._tag).getRegex(),L.gfm.paragraph=I(L._paragraph).replace(`hr`,L.hr).replace(`heading`,` {0,3}#{1,6} `).replace(`|lheading`,``).replace(`table`,L.gfm.table).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,L._tag).getRegex(),L.pedantic={...L.normal,html:I(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,L._comment).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Fi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:I(L.normal._paragraph).replace(`hr`,L.hr).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,L.lheading).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).getRegex()};var R={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Fi,tag:`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`,link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:`reflink|nolink(?!\\()`,emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Fi,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Vi(e){return e.replace(/---/g,`—`).replace(/--/g,`–`).replace(/(^|[-\u2014/(\[{"\s])'/g,`$1‘`).replace(/'/g,`’`).replace(/(^|[-\u2014/(\[{\u2018\s])"/g,`$1“`).replace(/"/g,`”`).replace(/\.{3}/g,`…`)}function Hi(e){let t,n,r=``,i=e.length;for(t=0;t<i;t++)n=e.charCodeAt(t),Math.random()>.5&&(n=`x`+n.toString(16)),r+=`&#`+n+`;`;return r}R._punctuation=`!"#$%&'()+\\-.,/:;<=>?@\\[\\]\`^{|}~`,R.punctuation=I(R.punctuation).replace(/punctuation/g,R._punctuation).getRegex(),R.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,R.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,R._comment=I(L._comment).replace(`(?:-->|$)`,`-->`).getRegex(),R.emStrong.lDelim=I(R.emStrong.lDelim).replace(/punct/g,R._punctuation).getRegex(),R.emStrong.rDelimAst=I(R.emStrong.rDelimAst,`g`).replace(/punct/g,R._punctuation).getRegex(),R.emStrong.rDelimUnd=I(R.emStrong.rDelimUnd,`g`).replace(/punct/g,R._punctuation).getRegex(),R._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,R._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,R._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,R.autolink=I(R.autolink).replace(`scheme`,R._scheme).replace(`email`,R._email).getRegex(),R._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,R.tag=I(R.tag).replace(`comment`,R._comment).replace(`attribute`,R._attribute).getRegex(),R._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,R._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,R._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,R.link=I(R.link).replace(`label`,R._label).replace(`href`,R._href).replace(`title`,R._title).getRegex(),R.reflink=I(R.reflink).replace(`label`,R._label).replace(`ref`,L._label).getRegex(),R.nolink=I(R.nolink).replace(`ref`,L._label).getRegex(),R.reflinkSearch=I(R.reflinkSearch,`g`).replace(`reflink`,R.reflink).replace(`nolink`,R.nolink).getRegex(),R.normal={...R},R.pedantic={...R.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:I(/^!?\[(label)\]\((.*?)\)/).replace(`label`,R._label).getRegex(),reflink:I(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,R._label).getRegex()},R.gfm={...R.normal,escape:I(R.escape).replace(`])`,`~|])`).getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},R.gfm.url=I(R.gfm.url,`i`).replace(`email`,R.gfm._extended_email).getRegex(),R.breaks={...R.gfm,br:I(R.br).replace(`{2,}`,`*`).getRegex(),text:I(R.gfm.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()};var Ui=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||_i,this.options.tokenizer=this.options.tokenizer||new Bi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:L.normal,inline:R.normal};this.options.pedantic?(t.block=L.pedantic,t.inline=R.pedantic):this.options.gfm&&(t.block=L.gfm,t.inline=this.options.breaks?R.breaks:R.gfm),this.tokenizer.rules=t}static get rules(){return{block:L,inline:R}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let n,r,i,a;for(e=this.options.pedantic?e.replace(/\t/g,`    `).replace(/^ +$/gm,``):e.replace(/^( *)(\t+)/gm,((e,t,n)=>t+`    `.repeat(n.length)));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0))))){if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||r.type!==`paragraph`&&r.type!==`text`?t.push(n):(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||r.type!==`paragraph`&&r.type!==`text`?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(r.raw+=`
`+n.raw,r.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else{if(i=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach((function(e){r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i)))r=t[t.length-1],a&&r.type===`paragraph`?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),a=i.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&r.type===`text`?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);else if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,r,i,a,o,s,c=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)e.includes(a[0].slice(a[0].lastIndexOf(`[`)+1,-1))&&(c=c.slice(0,a.index)+`[`+Ri(`a`,a[0].length-2)+`]`+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,a.index)+`[`+Ri(`a`,a[0].length-2)+`]`+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(c))!=null;)c=c.slice(0,a.index+a[0].length-2)+`++`+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(o||(s=``),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0))))){if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&n.type===`text`&&r.type===`text`?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),r=t[t.length-1],r&&n.type===`text`&&r.type===`text`?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.emStrong(e,c,s))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.autolink(e,Hi))e=e.substring(n.raw.length),t.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,Hi))){if(i=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach((function(e){r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(i,Vi))e=e.substring(n.raw.length),n.raw.slice(-1)!==`_`&&(s=n.raw.slice(-1)),o=!0,r=t[t.length-1],r&&r.type===`text`?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}else e=e.substring(n.raw.length),t.push(n)}return t}},Wi=class{constructor(e){this.options=e||_i}code(e,t,n){let r=(t||``).match(/\S*/)[0];if(this.options.highlight){let t=this.options.highlight(e,r);t!=null&&t!==e&&(n=!0,e=t)}return e=e.replace(/\n$/,``)+`
`,r?`<pre><code class="`+this.options.langPrefix+wi(r)+`">`+(n?e:wi(e,!0))+`</code></pre>
`:`<pre><code>`+(n?e:wi(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e){return e}heading(e,t,n,r){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+r.slug(n)}">${e}</h${t}>\n`:`<h${t}>${e}</h${t}>\n`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){let r=t?`ol`:`ul`;return`<`+r+(t&&n!==1?` start="`+n+`"`:``)+`>
`+e+`</`+r+`>
`}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"`+(this.options.xhtml?` /`:``)+`> `}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&=`<tbody>${t}</tbody>`,`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){let n=t.header?`th`:`td`;return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?`<br/>`:`<br>`}del(e){return`<del>${e}</del>`}link(e,t,n){if((e=Ai(this.options.sanitize,this.options.baseUrl,e))===null)return n;let r=`<a href="`+e+`"`;return t&&(r+=` title="`+t+`"`),r+=`>`+n+`</a>`,r}image(e,t,n){if((e=Ai(this.options.sanitize,this.options.baseUrl,e))===null)return n;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=this.options.xhtml?`/>`:`>`,r}text(e){return e}},Gi=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return``+n}image(e,t,n){return``+n}br(){return``}},Ki=class{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,``).replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,``).replace(/\s/g,`-`)}getNextSafeSlug(e,t){let n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do r++,n=e+`-`+r;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n}slug(e,t={}){let n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}},qi=class e{constructor(e){this.options=e||_i,this.options.renderer=this.options.renderer||new Wi,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Gi,this.slugger=new Ki}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e,t=!0){let n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x=``,S=e.length;for(n=0;n<S;n++)if(d=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&(b=this.options.extensions.renderers[d.type].call({parser:this},d),!1!==b||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`paragraph`,`text`].includes(d.type)))x+=b||``;else switch(d.type){case`space`:continue;case`hr`:x+=this.renderer.hr();continue;case`heading`:x+=this.renderer.heading(this.parseInline(d.tokens),d.depth,Ei(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue;case`code`:x+=this.renderer.code(d.text,d.lang,d.escaped);continue;case`table`:for(l=``,c=``,a=d.header.length,r=0;r<a;r++)c+=this.renderer.tablecell(this.parseInline(d.header[r].tokens),{header:!0,align:d.align[r]});for(l+=this.renderer.tablerow(c),u=``,a=d.rows.length,r=0;r<a;r++){for(s=d.rows[r],c=``,o=s.length,i=0;i<o;i++)c+=this.renderer.tablecell(this.parseInline(s[i].tokens),{header:!1,align:d.align[i]});u+=this.renderer.tablerow(c)}x+=this.renderer.table(l,u);continue;case`blockquote`:u=this.parse(d.tokens),x+=this.renderer.blockquote(u);continue;case`list`:for(f=d.ordered,p=d.start,m=d.loose,a=d.items.length,u=``,r=0;r<a;r++)g=d.items[r],_=g.checked,v=g.task,h=``,g.task&&(y=this.renderer.checkbox(_),m?g.tokens.length>0&&g.tokens[0].type===`paragraph`?(g.tokens[0].text=y+` `+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&g.tokens[0].tokens[0].type===`text`&&(g.tokens[0].tokens[0].text=y+` `+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:`text`,text:y}):h+=y),h+=this.parse(g.tokens,m),u+=this.renderer.listitem(h,v,_);x+=this.renderer.list(u,f,p);continue;case`html`:x+=this.renderer.html(d.text);continue;case`paragraph`:x+=this.renderer.paragraph(this.parseInline(d.tokens));continue;case`text`:for(u=d.tokens?this.parseInline(d.tokens):d.text;n+1<S&&e[n+1].type===`text`;)d=e[++n],u+=`
`+(d.tokens?this.parseInline(d.tokens):d.text);x+=t?this.renderer.paragraph(u):u;continue;default:{let e=`Token with "`+d.type+`" type was not found.`;if(this.options.silent)return void console.error(e);throw Error(e)}}return x}parseInline(e,t){t||=this.renderer;let n,r,i,a=``,o=e.length;for(n=0;n<o;n++)if(r=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(i=this.options.extensions.renderers[r.type].call({parser:this},r),!1!==i||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(r.type)))a+=i||``;else switch(r.type){case`escape`:case`text`:a+=t.text(r.text);break;case`html`:a+=t.html(r.text);break;case`link`:a+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case`image`:a+=t.image(r.href,r.title,r.text);break;case`strong`:a+=t.strong(this.parseInline(r.tokens,t));break;case`em`:a+=t.em(this.parseInline(r.tokens,t));break;case`codespan`:a+=t.codespan(r.text);break;case`br`:a+=t.br();break;case`del`:a+=t.del(this.parseInline(r.tokens,t));break;default:{let e=`Token with "`+r.type+`" type was not found.`;if(this.options.silent)return void console.error(e);throw Error(e)}}return a}},Ji=class{constructor(e){this.options=e||_i}static passThroughHooks=new Set([`preprocess`,`postprocess`]);preprocess(e){return e}postprocess(e){return e}};function Yi(e,t){return(n,r,i)=>{typeof r==`function`&&(i=r,r=null);let a={...r},o=function(e,t,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+wi(r.message+``,!0)+`</pre>`;return t?Promise.resolve(e):n?void n(null,e):e}if(t)return Promise.reject(r);if(!n)throw r;n(r)}}((r={...z.defaults,...a}).silent,r.async,i);if(n==null)return o(Error(`marked(): input parameter is undefined or null`));if(typeof n!=`string`)return o(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(n)+`, string expected`));if(function(e){e&&e.sanitize&&!e.silent&&console.warn(`marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options`)}(r),r.hooks&&(r.hooks.options=r),i){let a=r.highlight,s;try{r.hooks&&(n=r.hooks.preprocess(n)),s=e(n,r)}catch(e){return o(e)}let c=function(e){let n;if(!e)try{r.walkTokens&&z.walkTokens(s,r.walkTokens),n=t(s,r),r.hooks&&(n=r.hooks.postprocess(n))}catch(t){e=t}return r.highlight=a,e?o(e):i(null,n)};if(!a||a.length<3||(delete r.highlight,!s.length))return c();let l=0;z.walkTokens(s,(function(e){e.type===`code`&&(l++,setTimeout((()=>{a(e.text,e.lang,(function(t,n){if(t)return c(t);n!=null&&n!==e.text&&(e.text=n,e.escaped=!0),l--,l===0&&c()}))}),0))})),l===0&&c()}else{if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then((t=>e(t,r))).then((e=>r.walkTokens?Promise.all(z.walkTokens(e,r.walkTokens)).then((()=>e)):e)).then((e=>t(e,r))).then((e=>r.hooks?r.hooks.postprocess(e):e)).catch(o);try{r.hooks&&(n=r.hooks.preprocess(n));let i=e(n,r);r.walkTokens&&z.walkTokens(i,r.walkTokens);let a=t(i,r);return r.hooks&&(a=r.hooks.postprocess(a)),a}catch(e){return o(e)}}}}function z(e,t,n){return Yi(Ui.lex,qi.parse)(e,t,n)}z.options=z.setOptions=function(e){var t;return z.defaults={...z.defaults,...e},t=z.defaults,_i=t,z},z.getDefaults=gi,z.defaults=_i,z.use=function(...e){let t=z.defaults.extensions||{renderers:{},childTokens:{}};e.forEach((e=>{let n={...e};if(n.async=z.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach((e=>{if(!e.name)throw Error(`extension name required`);if(e.renderer){let n=t.renderers[e.name];t.renderers[e.name]=n?function(...t){let r=e.renderer.apply(this,t);return!1===r&&(r=n.apply(this,t)),r}:e.renderer}if(e.tokenizer){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);t[e.level]?t[e.level].unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}e.childTokens&&(t.childTokens[e.name]=e.childTokens)})),n.extensions=t),e.renderer){let t=z.defaults.renderer||new Wi;for(let n in e.renderer){let r=t[n];t[n]=(...i)=>{let a=e.renderer[n].apply(t,i);return!1===a&&(a=r.apply(t,i)),a}}n.renderer=t}if(e.tokenizer){let t=z.defaults.tokenizer||new Bi;for(let n in e.tokenizer){let r=t[n];t[n]=(...i)=>{let a=e.tokenizer[n].apply(t,i);return!1===a&&(a=r.apply(t,i)),a}}n.tokenizer=t}if(e.hooks){let t=z.defaults.hooks||new Ji;for(let n in e.hooks){let r=t[n];t[n]=Ji.passThroughHooks.has(n)?i=>{if(z.defaults.async)return Promise.resolve(e.hooks[n].call(t,i)).then((e=>r.call(t,e)));let a=e.hooks[n].call(t,i);return r.call(t,a)}:(...i)=>{let a=e.hooks[n].apply(t,i);return!1===a&&(a=r.apply(t,i)),a}}n.hooks=t}if(e.walkTokens){let t=z.defaults.walkTokens;n.walkTokens=function(n){let r=[];return r.push(e.walkTokens.call(this,n)),t&&(r=r.concat(t.call(this,n))),r}}z.setOptions(n)}))},z.walkTokens=function(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(z,r)),r.type){case`table`:for(let e of r.header)n=n.concat(z.walkTokens(e.tokens,t));for(let e of r.rows)for(let r of e)n=n.concat(z.walkTokens(r.tokens,t));break;case`list`:n=n.concat(z.walkTokens(r.items,t));break;default:z.defaults.extensions&&z.defaults.extensions.childTokens&&z.defaults.extensions.childTokens[r.type]?z.defaults.extensions.childTokens[r.type].forEach((function(e){n=n.concat(z.walkTokens(r[e],t))})):r.tokens&&(n=n.concat(z.walkTokens(r.tokens,t)))}return n},z.parseInline=Yi(Ui.lexInline,qi.parseInline),z.Parser=qi,z.parser=qi.parse,z.Renderer=Wi,z.TextRenderer=Gi,z.Lexer=Ui,z.lexer=Ui.lex,z.Tokenizer=Bi,z.Slugger=Ki,z.Hooks=Ji,z.parse=z,z.options,z.setOptions,z.use,z.walkTokens,z.parseInline,qi.parse,Ui.lex;var Xi=()=>{let e,t,n=null;function r(){if(n&&!n.closed)n.focus();else{if(n=window.open(`about:blank`,`reveal.js - Notes`,`width=1100,height=700`),n.marked=z,n.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector\xA0*/
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					// Validate the origin of all messages to avoid parsing messages
					// that aren't meant for us. Ignore when running off file:// so
					// that the speaker view continues to work without a web server.
					if( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {
						return
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							dispatchStateToMainWindow( data.state );

						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!n)return void alert(`Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.`);(function(){let r=t.getConfig().url,i=typeof r==`string`?r:window.location.protocol+`//`+window.location.host+window.location.pathname+window.location.search;e=setInterval((function(){n.postMessage(JSON.stringify({namespace:`reveal-notes`,type:`connect`,state:t.getState(),url:i}),`*`)}),500),window.addEventListener(`message`,a)})()}}function i(e){let r=t.getCurrentSlide(),i=r.querySelectorAll(`aside.notes`),a=r.querySelector(`.current-fragment`),o={namespace:`reveal-notes`,type:`state`,notes:``,markdown:!1,whitespace:`normal`,state:t.getState()};if(r.hasAttribute(`data-notes`)&&(o.notes=r.getAttribute(`data-notes`),o.whitespace=`pre-wrap`),a){let e=a.querySelector(`aside.notes`);e?(o.notes=e.innerHTML,o.markdown=typeof e.getAttribute(`data-markdown`)==`string`,i=null):a.hasAttribute(`data-notes`)&&(o.notes=a.getAttribute(`data-notes`),o.whitespace=`pre-wrap`,i=null)}i&&i.length&&(i=Array.from(i).filter((e=>e.closest(`.fragment`)===null)),o.notes=i.map((e=>e.innerHTML)).join(`
`),o.markdown=i[0]&&typeof i[0].getAttribute(`data-markdown`)==`string`),n.postMessage(JSON.stringify(o),`*`)}function a(r){if(function(e){try{return window.location.origin===e.source.location.origin}catch{return!1}}(r))try{let i=JSON.parse(r.data);i&&i.namespace===`reveal-notes`&&i.type===`connected`?(clearInterval(e),o()):i&&i.namespace===`reveal-notes`&&i.type===`call`&&function(e,r,i){let a=t[e].apply(t,r);n.postMessage(JSON.stringify({namespace:`reveal-notes`,type:`return`,result:a,callId:i}),`*`)}(i.methodName,i.arguments,i.callId)}catch{}}function o(){t.on(`slidechanged`,i),t.on(`fragmentshown`,i),t.on(`fragmenthidden`,i),t.on(`overviewhidden`,i),t.on(`overviewshown`,i),t.on(`paused`,i),t.on(`resumed`,i),i()}return{id:`notes`,init:function(e){t=e,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)===null?window.addEventListener(`message`,(e=>{if(!n&&typeof e.data==`string`){let r;try{r=JSON.parse(e.data)}catch{}r&&r.namespace===`reveal-notes`&&r.type===`heartbeat`&&(t=e.source,n&&!n.closed?n.focus():(n=t,window.addEventListener(`message`,a),o()))}var t})):r(),t.addKeyBinding({keyCode:83,key:`S`,description:`Speaker notes view`},(function(){r()})))},open:r}},Zi={card:`--card`,line:`--line`,line2:`--line-2`,ink:`--ink`,muted:`--muted`,faint:`--faint`,paper:`--paper`,navy:`--navy`,navyT:`--navy-tint`,navyL:`--navy-line`,ark:`--ark`,arkT:`--ark-tint`,arkL:`--ark-line`,sb:`--sb`,sbT:`--sb-tint`,sbL:`--sb-line`,sr:`--sr`,srT:`--sr-tint`,srL:`--sr-line`,mc:`--mc`,mcT:`--mc-tint`,mcL:`--mc-line`,ok:`--ok`,okInk:`--ok-ink`,okT:`--ok-tint`,okBg:`--ok-bg`,onAcc:`--on-accent`,track:`--track`,trackDash:`--track-dash`,trail:`--trail`,shadow:`--shadow`,shadow0:`--shadow-0`},Qi={},$i={};function ea(){let e=getComputedStyle(document.documentElement);for(let[t,n]of Object.entries(Zi))Qi[t]=e.getPropertyValue(n).trim();Object.assign($i,{ark:[Qi.ark,Qi.arkT],sb:[Qi.sb,Qi.sbT],sr:[Qi.sr,Qi.srT],mc:[Qi.mc,Qi.mcT]})}var ta=e=>document.getElementById(e),na=(e,t,n,r)=>{let i=document.createElement(e);return t&&(i.className=t),n!=null&&(i.textContent=n),r&&r.appendChild(i),i};function ra(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function ia(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var aa={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},oa={duration:.5,overwrite:!1,delay:0},sa,ca,B,la=1e8,V=1/la,ua=Math.PI*2,da=ua/4,fa=0,pa=Math.sqrt,ma=Math.cos,ha=Math.sin,ga=function(e){return typeof e==`string`},H=function(e){return typeof e==`function`},_a=function(e){return typeof e==`number`},va=function(e){return e===void 0},ya=function(e){return typeof e==`object`},ba=function(e){return e!==!1},xa=function(){return typeof window<`u`},Sa=function(e){return H(e)||ga(e)},Ca=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},wa=Array.isArray,Ta=/(?:-?\.?\d|\.)+/gi,Ea=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Da=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Oa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ka=/[+-]=-?[.\d]+/,Aa=/[^,'"\[\]\s]+/gi,ja=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,U,Ma,Na,Pa,Fa={},Ia={},La,Ra=function(e){return(Ia=ho(e,Fa))&&Nc},za=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},Ba=function(e,t){return!t&&console.warn(e)},Va=function(e,t){return e&&(Fa[e]=t)&&Ia&&(Ia[e]=t)||Fa},Ha=function(){return 0},Ua={suppressEvents:!0,isStart:!0,kill:!1},Wa={suppressEvents:!0,kill:!1},Ga={suppressEvents:!0},Ka={},qa=[],Ja={},Ya,Xa={},Za={},Qa=30,$a=[],eo=``,to=function(e){var t=e[0],n,r;if(ya(t)||H(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=$a.length;r--&&!$a[r].targetTest(t););n=$a[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Us(e[r],n)))||e.splice(r,1);return e},no=function(e){return e._gsap||to(Qo(e))[0]._gsap},ro=function(e,t,n){return(n=e[t])&&H(n)?e[t]():va(n)&&e.getAttribute&&e.getAttribute(t)||n},io=function(e,t){return(e=e.split(`,`)).forEach(t)||e},W=function(e){return Math.round(e*1e5)/1e5||0},ao=function(e){return Math.round(e*1e7)/1e7||0},oo=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},so=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},co=function(){var e=qa.length,t=qa.slice(0),n,r;for(Ja={},qa.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},lo=function(e,t,n,r){qa.length&&!ca&&co(),e.render(t,n,r||ca&&t<0&&(e._initted||e._startAt)),qa.length&&!ca&&co()},uo=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(Aa).length<2?t:ga(e)?e.trim():e},fo=function(e){return e},po=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},mo=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},ho=function(e,t){for(var n in t)e[n]=t[n];return e},go=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=ya(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},_o=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},vo=function(e){var t=e.parent||U,n=e.keyframes?mo(wa(e.keyframes)):po;if(ba(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},yo=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},bo=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},xo=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},So=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Co=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},wo=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},To=function(e,t,n,r){return e._startAt&&(ca?e._startAt.revert(Wa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Eo=function e(t){return!t||t._ts&&e(t.parent)},Do=function(e){return e._repeat?Oo(e._tTime,e=e.duration()+e._rDelay)*e:0},Oo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ko=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ao=function(e){return e._end=ao(e._start+(e._tDur/Math.abs(e._ts||e._rts||V)||0))},jo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ao(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ao(e),n._dirty||Co(n,e)),e},Mo=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ko(e.rawTime(),t),(!t._dur||Ko(0,t.totalDuration(),n)-t._tTime>V)&&t.render(n,!0)),Co(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-V}},No=function(e,t,n,r){return t.parent&&So(t),t._start=ao((_a(n)?n:n||e!==U?Uo(e,n,t):e._time)+t._delay),t._end=ao(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bo(e,t,`_first`,`_last`,e._sort?`_start`:0),Lo(t)||(e._recent=t),r||Mo(e,t),e._ts<0&&jo(e,e._tTime),e},Po=function(e,t){return(Fa.ScrollTrigger||za(`scrollTrigger`,t))&&Fa.ScrollTrigger.create(t,e)},Fo=function(e,t,n,r,i){if(Qs(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!ca&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ya!==ks.frame)return qa.push(e),e._lazy=[i,r],1},Io=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Lo=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Ro=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&Io(e)&&(e._initted||!Lo(e))||(e._ts<0||e._dp._ts<0)&&!Lo(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=Ko(0,e._tDur,t),l=Oo(s,o),e._yoyo&&l&1&&(a=1-a),l!==Oo(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||ca||r||e._zTime===V||!t&&e._zTime){if(!e._initted&&Fo(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?V:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&To(e,t,n,!0),e._onUpdate&&!n&&hs(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&hs(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&So(e,1),!n&&!ca&&(hs(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},zo=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},Bo=function(e,t,n,r){var i=e._repeat,a=ao(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:ao(a*(i+1)+e._rDelay*i):a,o>0&&!r&&jo(e,e._tTime=e._tDur*o),e.parent&&Ao(e),n||Co(e.parent,e),e},Vo=function(e){return e instanceof Gs?Co(e):Bo(e,e._dur)},Ho={_start:0,endTime:Ha,totalDuration:Ha},Uo=function e(t,n,r){var i=t.labels,a=t._recent||Ho,o=t.duration()>=la?a.endTime(!1):t._dur,s,c,l;return ga(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(wa(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},Wo=function(e,t,n){var r=_a(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=ba(s.vars.inherit)&&s.parent;a.immediateRender=ba(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new ac(t[0],a,t[i+1])},Go=function(e,t){return e||e===0?t(e):t},Ko=function(e,t,n){return n<e?e:n>t?t:n},qo=function(e,t){return!ga(e)||!(t=ja.exec(e))?``:t[1]},Jo=function(e,t,n){return Go(n,function(n){return Ko(e,t,n)})},Yo=[].slice,Xo=function(e,t){return e&&ya(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&ya(e[0]))&&!e.nodeType&&e!==Ma},Zo=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return ga(e)&&!t||Xo(e,1)?(r=n).push.apply(r,Qo(e)):n.push(e)})||n},Qo=function(e,t,n){return B&&!t&&B.selector?B.selector(e):ga(e)&&!n&&(Na||!As())?Yo.call((t||Pa).querySelectorAll(e),0):wa(e)?Zo(e,n):Xo(e)?Yo.call(e,0):e?[e]:[]},$o=function(e){return e=Qo(e)[0]||Ba(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return Qo(t,n.querySelectorAll?n:n===e?Ba(`Invalid scope`)||Pa.createElement(`div`):e)}},es=function(e){return e.sort(function(){return .5-Math.random()})},ts=function(e){if(H(e))return e;var t=ya(e)?e:{each:e},n=Rs(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return ga(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,la])[1],!S){for(b=-la;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===la?0:s?f*u/S-.5:r/S|0,b=0,x=la,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):pa(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&es(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=qo(t.amount||t.each)||0,n=n&&f<0?Is(n):n}return f=(p[e]-p.min)/p.max||0,ao(p.b+(n?n(f):f)*p.v)+p.u}},ns=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=ao(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(_a(n)?0:qo(n))}},rs=function(e,t){var n=wa(e),r,i;return!n&&ya(e)&&(r=n=e.radius||la,e.values?(e=Qo(e.values),(i=!_a(e[0]))&&(r*=r)):e=ns(e.increment)),Go(t,n?H(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=la,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||_a(t)?s:s+qo(t)}:ns(e))},is=function(e,t,n,r){return Go(wa(e)?!t:n===!0?!!(n=0):!r,function(){return wa(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},as=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},os=function(e,t){return function(n){return e(parseFloat(n))+(t||qo(n))}},ss=function(e,t,n){return fs(e,t,0,1,n)},cs=function(e,t,n){return Go(n,function(n){return e[~~t(n)]})},ls=function e(t,n,r){var i=n-t;return wa(t)?cs(t,e(0,t.length),n):Go(r,function(e){return(i+(e-t)%i)%i+t})},us=function e(t,n,r){var i=n-t,a=i*2;return wa(t)?cs(t,e(0,t.length-1),n):Go(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},ds=function(e){for(var t=0,n=``,r,i,a,o;~(r=e.indexOf(`random(`,t));)a=e.indexOf(`)`,r),o=e.charAt(r+7)===`[`,i=e.substr(r+7,a-r-7).match(o?Aa:Ta),n+=e.substr(t,r-t)+is(o?i:+i[0],o?0:+i[1],+i[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},fs=function(e,t,n,r,i){var a=t-e,o=r-n;return Go(i,function(t){return n+((t-e)/a*o||0)})},ps=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=ga(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(wa(t)&&!wa(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=ho(wa(t)?[]:{},t));if(!u){for(c in n)qs.call(s,t,c,`get`,n[c]);a=function(e){return mc(e,s)||(o?t.p:t)}}}return Go(r,a)},ms=function(e,t,n){var r=e.labels,i=la,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},hs=function(e,t,n){var r=e.vars,i=r[t],a=B,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&qa.length&&co(),o&&(B=o),l=s?i.apply(c,s):i.call(c),B=a,l},gs=function(e){return So(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ca),e.progress()<1&&hs(e,`onInterrupt`),e},_s,vs=[],ys=function(e){if(e){if(e=!e.name&&e.default||e,xa()||e.headless){var t=e.name,n=H(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:Ha,render:mc,add:qs,kill:gc,modifier:hc,rawVars:0},a={targetTest:0,get:0,getSetter:uc,aliases:{},register:0};if(As(),e!==r){if(Xa[t])return;po(r,po(_o(e,i),a)),ho(r.prototype,ho(i,_o(e,a))),Xa[r.prop=t]=r,e.targetTest&&($a.push(r),Ka[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}Va(t,r),e.register&&e.register(Nc,r,yc)}else vs.push(e)}},G=255,bs={aqua:[0,G,G],lime:[0,G,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,G],navy:[0,0,128],white:[G,G,G],olive:[128,128,0],yellow:[G,G,0],orange:[G,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[G,0,0],pink:[G,192,203],cyan:[0,G,G],transparent:[G,G,G,0]},xs=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*G+.5|0},Ss=function(e,t,n){var r=e?_a(e)?[e>>16,e>>8&G,e&G]:0:bs.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),bs[e])r=bs[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&G,r&G,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&G,e&G]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(Ta),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=xs(s+1/3,i,a),r[1]=xs(s,i,a),r[2]=xs(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(Ea),n&&r.length<4&&(r[3]=1),r}else r=e.match(Ta)||bs.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/G,a=r[1]/G,o=r[2]/G,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Cs=function(e){var t=[],n=[],r=-1;return e.split(Ts).forEach(function(e){var i=e.match(Da)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},ws=function(e,t,n){var r=``,i=(e+r).match(Ts),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Ss(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Cs(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Ts,`1`).split(Da),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Ts),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Ts=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in bs)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Es=/hsl[a]?\(/,Ds=function(e){var t=e.join(` `),n;if(Ts.lastIndex=0,Ts.test(t))return n=Es.test(t),e[1]=ws(e[1],n),e[0]=ws(e[0],n,Cs(e[1])),!0},Os,ks=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){La&&(!Na&&xa()&&(Ma=Na=window,Pa=Ma.document||{},Fa.gsap=Nc,(Ma.gsapVersions||(Ma.gsapVersions=[])).push(Nc.version),Ra(Ia||Ma.GreenSockGlobals||!Ma.gsap&&Ma||{}),vs.forEach(ys)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Os=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Os=0,l=Ha},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),As(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),As=function(){return!Os&&ks.wake()},K={},js=/^[\d.\-M][\d.\-,\s]/,Ms=/["']/g,Ns=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Ms,``).trim():+c,r=s.substr(o+1).trim();return t},Ps=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Fs=function(e){var t=(e+``).split(`(`),n=K[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Ns(t[1])]:Ps(e).split(`,`).map(uo)):K._CE&&js.test(e)?K._CE(``,e):n},Is=function(e){return function(t){return 1-e(1-t)}},Ls=function e(t,n){for(var r=t._first,i;r;)r instanceof Gs?e(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?e(r.timeline,n):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=n)),r=r._next},Rs=function(e,t){return e&&(H(e)?e:K[e]||Fs(e))||t},zs=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return io(e,function(e){for(var t in K[e]=Fa[e]=i,K[a=e.toLowerCase()]=n,i)K[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=K[e+`.`+t]=i[t]}),i},Bs=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Vs=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/ua*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*ha((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Bs(s);return a=ua/a,c.config=function(n,r){return e(t,n,r)},c},Hs=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Bs(r);return i.config=function(n){return e(t,n)},i};io(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;zs(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),K.Linear.easeNone=K.none=K.Linear.easeIn,zs(`Elastic`,Vs(`in`),Vs(`out`),Vs()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};zs(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),zs(`Expo`,function(e){return e?2**(10*(e-1)):0}),zs(`Circ`,function(e){return-(pa(1-e*e)-1)}),zs(`Sine`,function(e){return e===1?1:-ma(e*da)+1}),zs(`Back`,Hs(`in`),Hs(`out`),Hs()),K.SteppedEase=K.steps=Fa.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-V;return function(e){return((r*Ko(0,a,e)|0)+i)*n}}},oa.ease=K[`quad.out`],io(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return eo+=e+`,`+e+`Params,`});var Us=function(e,t){this.id=fa++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ro,this.set=t?t.getSetter:uc},Ws=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Bo(this,+e.duration,1,1),this.data=e.data,B&&(this._ctx=B,B.data.push(this)),Os||ks.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,Bo(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(As(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(jo(this,e),!n._dp||n.parent||Mo(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&No(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===V||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),lo(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Do(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):+(this.rawTime()>0)},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Do(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Oo(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-V?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?ko(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-V?0:this._rts,this.totalTime(Ko(-Math.abs(this._delay),this._tDur,n),t!==!1),Ao(this),wo(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(As(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==V&&(this._tTime-=V)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=e;var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&No(t,this,e-this._delay),this}return this._start},t.endTime=function(e){return this._start+(ba(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ko(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=Ga);var t=ca;return ca=e,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),ca=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,Vo(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,Vo(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(Uo(this,e),ba(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,ba(t))},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-V:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-V,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-V)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this;return new Promise(function(n){var r=H(e)?e:fo,i=function(){var e=t.then;t.then=null,H(r)&&(r=r(t))&&(r.then||r===t)&&(t.then=e),n(r),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?i():t._prom=i})},t.kill=function(){gs(this)},e}();po(Ws.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-V,_prom:0,_ps:!1,_rts:1});var Gs=function(e){ia(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=ba(t.sortChildren),U&&No(t.parent||U,ra(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&Po(ra(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return Wo(0,arguments,this),this},n.from=function(e,t,n){return Wo(1,arguments,this),this},n.fromTo=function(e,t,n,r){return Wo(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,vo(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new ac(e,t,Uo(this,n),1),this},n.call=function(e,t,n){return No(this,ac.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new ac(e,n,Uo(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,vo(n).immediateRender=ba(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,vo(r).immediateRender=ba(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:ao(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==U&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=ao(o%f),o===i?(d=this._repeat,c=a):(d=~~(o/f),d&&d===o/f&&(c=a,d--),c>a&&(c=a)),_=Oo(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:ao(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&hs(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this;Ls(this,y)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=zo(this,ao(r),ao(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&c&&!t&&!d&&(hs(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-V);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||ca&&(l._initted||l._startAt)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-V:V);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-V)._zTime=c>=r?1:-1,this._ts))return this._start=g,Ao(this),this.render(e,t,n);this._onUpdate&&!t&&hs(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&So(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(hs(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(_a(t)||(t=Uo(this,t,e)),!(e instanceof Ws)){if(wa(e))return e.forEach(function(e){return n.add(e,t)}),this;if(ga(e))return this.addLabel(e,t);if(H(e))e=ac.delayedCall(0,e);else return this}return this===e?this:No(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-la);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof ac?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return ga(e)?this.removeLabel(e):H(e)?this.killTweensOf(e):(xo(this,e),e===this._recent&&(this._recent=this._last),Co(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ao(ks.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=Uo(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=ac.delayedCall(0,t||Ha,n);return r.data=`isPause`,this._hasPause=1,No(this,r,Uo(this,e))},n.removePause=function(e){var t=this._first;for(e=Uo(this,e);t;)t._start===e&&t.data===`isPause`&&So(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)Xs!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=Qo(e),i=this._first,a=_a(t),o;i;)i instanceof ac?so(i._targets,r)&&(a?(!Xs||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=Uo(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=ac.to(n,po({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||V,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&Bo(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,po({startAt:{time:Uo(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),ms(this,Uo(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),ms(this,Uo(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+V)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);for(var r=this._first,i=this.labels,a;r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Co(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Co(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=la,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,No(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=o/n._ts,n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;Bo(n,n===U&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(U._ts&&(lo(U,ko(e,U)),Ya=ks.frame),ks.frame>=Qa){Qa+=aa.autoSleep||120;var t=U._first;if((!t||!t._ts)&&aa.autoSleep&&ks._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||ks.sleep()}}},t}(Ws);po(Gs.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ks=function(e,t,n,r,i,a,o){var s=new yc(this._pt,e,t,0,1,pc,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=ds(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(Oa)||[];u=Oa.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?oo(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=Oa.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(ka.test(r)||g)&&(s.e=0),this._pt=s,s},qs=function(e,t,n,r,i,a,o,s,c,l){H(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?H(u)?c?e[t.indexOf(`set`)||!H(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=H(u)?c?cc:sc:oc,p;if(ga(r)&&(~r.indexOf(`random(`)&&(r=ds(r)),r.charAt(1)===`=`&&(p=oo(d,r)+(qo(d)||0),(p||p===0)&&(r=p))),!l||d!==r||Zs)return!isNaN(d*r)&&r!==``?(p=new yc(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?fc:dc,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&za(t,r),Ks.call(this,e,t,d,r,f,s||aa.stringFilter,c))},Js=function(e,t,n,r,i){if(H(e)&&(e=nc(e,i,t,n,r)),!ya(e)||e.style&&e.nodeType||wa(e)||Ca(e))return ga(e)?nc(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=nc(e[o],i,t,n,r);return a},Ys=function(e,t,n,r,i,a){var o,s,c,l;if(Xa[e]&&(o=new Xa[e]).init(i,o.rawVars?t[e]:Js(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new yc(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==_s))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},Xs,Zs,Qs=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!sa,b=t.timeline,x,S,C,w,T,E,D,O,k,A,j,M,N;if(b&&(!f||!a)&&(a=`none`),t._ease=Rs(a,oa.ease),t._yEase=d?Is(Rs(d===!0?a:d,oa.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!b&&!!i.runBackwards,!b||f&&!i.stagger){if(O=g[0]?no(g[0]).harness:0,M=O&&i[O.prop],x=_o(i,Ka),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?Wa:Ua),h._lazy=0),o){if(So(t._startAt=ac.set(g,po({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&ba(c),startAt:null,delay:0,onUpdate:l&&function(){return hs(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ca||!s&&!p)&&t._startAt.revert(Wa),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),C=po({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&ba(c),immediateRender:s,stagger:0,parent:_},x),M&&(C[O.prop]=M),So(t._startAt=ac.set(g,C)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ca?t._startAt.revert(Wa):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,V,V);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&ba(c)||c&&!m,S=0;S<g.length;S++){if(T=g[S],D=T._gsap||to(g)[S]._gsap,t._ptLookup[S]=A={},Ja[D.id]&&qa.length&&co(),j=v===g?S:v.indexOf(T),O&&(k=new O).init(T,M||x,t,j,v)!==!1&&(t._pt=w=new yc(t._pt,T,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(e){A[e]=w}),k.priority&&(E=1)),!O||M)for(C in x)Xa[C]&&(k=Ys(C,x,t,j,T,v))?k.priority&&(E=1):A[C]=w=qs.call(t,T,C,`get`,x[C],j,v,0,i.stringFilter);t._op&&t._op[S]&&t.kill(T,t._op[S]),y&&t._pt&&(Xs=t,U.killTweensOf(T,A,t.globalTime(n)),N=!t.parent,Xs=0),t._pt&&c&&(Ja[D.id]=1)}E&&vc(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!N,f&&n<=0&&b.render(la,!0,!0)},$s=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return Zs=1,e.vars[t]=`+=0`,Qs(e,o),Zs=0,s?Ba(t+` not eligible for reset`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=W(n)+qo(u.e)),u.b&&(u.b=l.s+qo(u.b))},ec=function(e,t){var n=e[0]?no(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=ho({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},tc=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(wa(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},nc=function(e,t,n,r,i){return H(e)?e.call(t,n,r,i):ga(e)&&~e.indexOf(`random(`)?ds(e):e},rc=eo+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert`,ic={};io(rc+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return ic[e]=1});var ac=function(e){ia(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:vo(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=o.yoyoEase,g=n.parent||U,_=(wa(t)||Ca(t)?_a(t[0]):`length`in n)?[t]:Qo(t),v,y,b,x,S,C,w,T;if(a._targets=_.length?to(_):Ba(`GSAP target `+t+` not found. https://gsap.com`,!aa.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||Sa(s)||Sa(c)){if(n=a.vars,v=a.timeline=new Gs({data:`nested`,defaults:p||{},targets:g&&g.data===`nested`?g.vars.targets:_}),v.kill(),v.parent=v._dp=ra(a),v._start=0,u||Sa(s)||Sa(c)){if(x=_.length,w=u&&ts(u),ya(u))for(S in u)~rc.indexOf(S)&&(T||={},T[S]=u[S]);for(y=0;y<x;y++)b=_o(n,ic),b.stagger=0,h&&(b.yoyoEase=h),T&&ho(b,T),C=_[y],b.duration=+nc(s,ra(a),y,C,_),b.delay=(+nc(c,ra(a),y,C,_)||0)-a._delay,!u&&x===1&&b.delay&&(a._delay=c=b.delay,a._start+=c,b.delay=0),v.to(C,b,w?w(y,C,_):0),v._ease=K.none;v.duration()?s=c=0:a.timeline=0}else if(f){vo(po(v.vars.defaults,{ease:`none`})),v._ease=Rs(f.ease||n.ease||`none`);var E=0,D,O,k;if(wa(f))f.forEach(function(e){return v.to(_,e,`>`)}),v.duration();else{for(S in b={},f)S===`ease`||S===`easeEach`||tc(S,f[S],b,f.easeEach);for(S in b)for(D=b[S].sort(function(e,t){return e.t-t.t}),E=0,y=0;y<D.length;y++)O=D[y],k={ease:O.e,duration:(O.t-(y?D[y-1].t:0))/100*s},k[S]=O.v,v.to(_,k,E),E+=k.duration;v.duration()<s&&v.to({},{duration:s-v.duration()})}}s||a.duration(s=v.duration())}else a.timeline=0;return d===!0&&!sa&&(Xs=ra(a),U.killTweensOf(_),Xs=0),No(g,ra(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===ao(g._time)&&ba(l)&&Eo(ra(a))&&g.data!==`nested`)&&(a._tTime=-V,a.render(Math.max(0,-c)||0)),m&&Po(ra(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-V&&!o?i:e<V?0:e,c,l,u,d,f,p,m,h,g;if(!a)Ro(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=ao(s%d),s===i?(u=this._repeat,c=a):(u=~~(s/d),u&&u===ao(s/d)&&(c=a,u--),c>a&&(c=a)),p=this._yoyo&&u&1,p&&(g=this._yEase,c=a-c),f=Oo(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&(h&&this._yEase&&Ls(h,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==d&&this._initted&&(this._lock=n=1,this.render(ao(d*u),!0).invalidate()._lock=0))}if(!this._initted){if(Fo(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(g||this._ease)(c/a),this._from&&(this.ratio=m=1-m),c&&!r&&!t&&!u&&(hs(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&To(this,e,t,n),hs(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&hs(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&To(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&So(this,1),!t&&(!o||r)&&(s||r||p)&&(hs(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Os||ks.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||Qs(this,a),o=this._ease(a/this._dur),$s(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(jo(this,0),this.parent||bo(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?gs(this):this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,Xs&&Xs.vars.overwrite!==!0)._first||gs(this),this.parent&&n!==this.timeline.totalDuration()&&Bo(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?Qo(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&yo(r,i))return t===`all`&&(this._pt=0),gs(this);for(s=this._op=this._op||[],t!==`all`&&(ga(t)&&(d={},io(t,function(e){return d[e]=1}),t=d),t=ec(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&xo(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&gs(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return Wo(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return Wo(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return U.killTweensOf(e,t,n)},t}(Ws);po(ac.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),io(`staggerTo,staggerFrom,staggerFromTo`,function(e){ac[e]=function(){var t=new Gs,n=Yo.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var oc=function(e,t,n){return e[t]=n},sc=function(e,t,n){return e[t](n)},cc=function(e,t,n,r){return e[t](r.fp,n)},lc=function(e,t,n){return e.setAttribute(t,n)},uc=function(e,t){return H(e[t])?sc:va(e[t])&&e.setAttribute?lc:oc},dc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fc=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},pc=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},mc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},hc=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},gc=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?xo(this,t,`_pt`):t.dep||(n=1),t=r;return!n},_c=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},vc=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},yc=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||dc,this.d=o||this,this.set=s||oc,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=_c,this.m=e,this.mt=n,this.tween=t},e}();io(eo+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger`,function(e){return Ka[e]=1}),Fa.TweenMax=Fa.TweenLite=ac,Fa.TimelineLite=Fa.TimelineMax=Gs,U=new Gs({sortChildren:!1,defaults:oa,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),aa.stringFilter=Ds;var bc=[],xc={},Sc=[],Cc=0,wc=0,Tc=function(e){return(xc[e]||Sc).map(function(e){return e()})},Ec=function(){var e=Date.now(),t=[];e-Cc>2&&(Tc(`matchMediaInit`),bc.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=Ma.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Tc(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Cc=e,Tc(`matchMedia`))},Dc=function(){function e(e,t){this.selector=t&&$o(t),this.data=[],this._r=[],this.isReverted=!1,this.id=wc++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){H(e)&&(n=t,t=e,e=H);var r=this,i=function(){var e=B,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=$o(n)),B=r,a=t.apply(r,arguments),H(a)&&r._r.push(a),B=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===H?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=B;B=null,e(this),B=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof ac&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof Gs?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof ac)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=bc.length;r--;)bc[r].id===this.id&&bc.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Oc=function(){function e(e){this.contexts=[],this.scope=e,B&&B.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){ya(e)||(e={matches:e});var r=new Dc(0,n||this.scope),i=r.conditions={},a,o,s;for(o in B&&!r.selector&&(r.selector=B.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=Ma.matchMedia(e[o]),a&&(bc.indexOf(r)<0&&bc.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Ec):a.addEventListener(`change`,Ec)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),kc={registerPlugin:function(){[...arguments].forEach(function(e){return ys(e)})},timeline:function(e){return new Gs(e)},getTweensOf:function(e,t){return U.getTweensOf(e,t)},getProperty:function(e,t,n,r){ga(e)&&(e=Qo(e)[0]);var i=no(e||{}).get,a=n?fo:uo;return n===`native`&&(n=``),e&&(t?a((Xa[t]&&Xa[t].get||i)(e,t,n,r)):function(t,n,r){return a((Xa[t]&&Xa[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=Qo(e),e.length>1){var r=e.map(function(e){return Nc.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=Xa[t],o=no(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;_s._pt=0,r.init(e,n?t+n:t,_s,0,[e]),r.render(1,r),_s._pt&&mc(1,_s)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Nc.to(e,ho((r={},r[t]=`+=0.1`,r.paused=!0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return U.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Rs(e.ease,oa.ease)),go(oa,e||{})},config:function(e){return go(aa,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!Xa[e]&&!Fa[e]&&Ba(t+` effect requires `+e+` plugin.`)}),Za[t]=function(e,t,r){return n(Qo(e),po(t||{},i),r)},a&&(Gs.prototype[t]=function(e,n,r){return this.add(Za[t](e,ya(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){K[e]=Rs(t)},parseEase:function(e,t){return arguments.length?Rs(e,t):K},getById:function(e){return U.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gs(e),r,i;for(n.smoothChildTiming=ba(e.smoothChildTiming),U.remove(n),n._dp=0,n._time=n._tTime=U._time,r=U._first;r;)i=r._next,(t||!(!r._dur&&r instanceof ac&&r.vars.onComplete===r._targets[0]))&&No(n,r,r._start-r._delay),r=i;return No(U,n,0),n},context:function(e,t){return e?new Dc(e,t):B},matchMedia:function(e){return new Oc(e)},matchMediaRefresh:function(){return bc.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Ec()},addEventListener:function(e,t){var n=xc[e]||(xc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=xc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:ls,wrapYoyo:us,distribute:ts,random:is,snap:rs,normalize:ss,getUnit:qo,clamp:Jo,splitColor:Ss,toArray:Qo,selector:$o,mapRange:fs,pipe:as,unitize:os,interpolate:ps,shuffle:es},install:Ra,effects:Za,ticker:ks,updateRoot:Gs.updateRoot,plugins:Xa,globalTimeline:U,core:{PropTween:yc,globals:Va,Tween:ac,Timeline:Gs,Animation:Ws,getCache:no,_removeLinkedListItem:xo,reverting:function(){return ca},context:function(e){return e&&B&&(B.data.push(e),e._ctx=B),B},suppressOverwrites:function(e){return sa=e}}};io(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return kc[e]=ac[e]}),ks.add(Gs.updateRoot),_s=kc.to({},{duration:0});var Ac=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},jc=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Ac(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Mc=function(e,t){return{name:e,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(ga(n)&&(r={},io(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}jc(e,n)}}}},Nc=kc.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)ca?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Mc(`roundProps`,ns),Mc(`modifiers`),Mc(`snap`,rs))||kc;ac.version=Gs.version=Nc.version=`3.12.5`,La=1,xa()&&As(),K.Power0,K.Power1,K.Power2,K.Power3,K.Power4,K.Linear,K.Quad,K.Cubic,K.Quart,K.Quint,K.Strong,K.Elastic,K.Back,K.SteppedEase,K.Bounce,K.Sine,K.Expo,K.Circ;var Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc=function(){return typeof window<`u`},Hc={},Uc=180/Math.PI,Wc=Math.PI/180,Gc=Math.atan2,Kc=1e8,qc=/([A-Z])/g,Jc=/(left|right|width|margin|padding|x)/i,Yc=/[\s,\(]\S/,Xc={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},Zc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Qc=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$c=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},el=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},tl=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},nl=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},rl=function(e,t,n){return e.style[t]=n},il=function(e,t,n){return e.style.setProperty(t,n)},al=function(e,t,n){return e._gsap[t]=n},ol=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},sl=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},cl=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},q=`transform`,ll=q+`Origin`,ul=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in Hc&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=Xc[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=kl(i,e)}):this.tfm[t]=o.x?o[t]:kl(i,t),t===ll&&(this.tfm.zOrigin=o.zOrigin);else return Xc.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(q)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(ll,n,``)),t=q}(a||n)&&this.props.push(t,n,a[t])},dl=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},fl=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(qc,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=Bc(),(!i||!i.isStart)&&!n[q]&&(dl(n),r.zOrigin&&n[ll]&&(n[ll]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},pl=function(e,t){var n={target:e,props:[],revert:fl,save:ul};return e._gsap||Nc.core.getCache(e),t&&t.split(`,`).forEach(function(e){return n.save(e)}),n},ml,hl=function(e,t){var n=Fc.createElementNS?Fc.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Fc.createElement(e);return n&&n.style?n:Fc.createElement(e)},gl=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(qc,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,vl(n)||n,1)||``},_l=`O,Moz,ms,Ms,Webkit`.split(`,`),vl=function(e,t,n){var r=(t||Rc).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(_l[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?_l[i]:``)+e},yl=function(){Vc()&&window.document&&(Pc=window,Fc=Pc.document,Ic=Fc.documentElement,Rc=hl(`div`)||{style:{}},hl(`div`),q=vl(q),ll=q+`Origin`,Rc.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,ml=!!vl(`perspective`),Bc=Nc.core.reverting,Lc=1)},bl=function e(t){var n=hl(`svg`,this.ownerSVGElement&&this.ownerSVGElement.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=this.parentNode,i=this.nextSibling,a=this.style.cssText,o;if(Ic.appendChild(n),n.appendChild(this),this.style.display=`block`,t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=e}catch{}else this._gsapBBox&&(o=this._gsapBBox());return r&&(i?r.insertBefore(this,i):r.appendChild(this)),Ic.removeChild(n),this.style.cssText=a,o},xl=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Sl=function(e){var t;try{t=e.getBBox()}catch{t=bl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===bl||(t=bl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+xl(e,[`x`,`cx`,`x1`])||0,y:+xl(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Cl=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Sl(e))},wl=function(e,t){if(t){var n=e.style,r;t in Hc&&t!==ll&&(t=q),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(qc,`-$1`).toLowerCase())):n.removeAttribute(t)}},Tl=function(e,t,n,r,i,a){var o=new yc(e._pt,t,n,0,1,a?nl:tl);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},El={deg:1,rad:1,turn:1},Dl={grid:1,flex:1},Ol=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=Rc.style,c=Jc.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||El[i]||El[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Cl(t),(p||o===`%`)&&(Hc[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],W(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===Fc||!h.appendChild)&&(h=Fc.body),g=h._gsap,g&&p&&g.width&&c&&g.time===ks.time&&!g.uncache)return W(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:wl(t,n)}else(p||o===`%`)&&!Dl[gl(h,`display`)]&&(s.position=gl(t,`position`)),h===t&&(s.position=`static`),h.appendChild(Rc),m=Rc[u],h.removeChild(Rc),s.position=`absolute`;return c&&p&&(g=no(h),g.time=ks.time,g.width=h[u]),W(f?m*a/d:m&&a?d/m*a:0)},kl=function(e,t,n,r){var i;return Lc||yl(),t in Xc&&t!==`transform`&&(t=Xc[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),Hc[t]&&t!==`transform`?(i=Vl(e,r),i=t===`transformOrigin`?i.svg?i.origin:Hl(gl(e,ll))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=Pl[t]&&Pl[t](e,t,n)||gl(e,t)||ro(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Ol(e,t,i,n)+n:i},Al=function(e,t,n,r){if(!n||n===`none`){var i=vl(t,e,1),a=i&&gl(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=gl(e,`borderTopColor`))}var o=new yc(this._pt,e.style,t,0,1,pc),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r===`auto`&&(m=e.style[t],e.style[t]=r,r=gl(e,t)||r,m?e.style[t]=m:wl(e,t)),l=[n,r],Ds(l),n=l[0],r=l[1],d=n.match(Da)||[],b=r.match(Da)||[],b.length){for(;u=Da.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=oo(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=Da.lastIndex-v.length,v||(v=v||aa.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=Ol(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?nl:tl;return ka.test(r)&&(o.e=0),this._pt=o,o},jl={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},Ml=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=jl[n]||n,t[1]=jl[r]||r,t.join(` `)},Nl=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],Hc[o]&&(s=1,o=o===`transformOrigin`?ll:q),wl(n,o);s&&(wl(n,q),a&&(a.svg&&n.removeAttribute(`transform`),Vl(n,1),a.uncache=1,dl(r)))}},Pl={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new yc(e._pt,t,n,0,0,Nl);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},Fl=[1,0,0,1,0,0],Il={},Ll=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},Rl=function(e){var t=gl(e,q);return Ll(t)?Fl:t.substr(7).match(Ea).map(W)},zl=function(e,t){var n=e._gsap||no(e),r=e.style,i=Rl(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?Fl:i):(i===Fl&&!e.offsetParent&&e!==Ic&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Ic.appendChild(e)),i=Rl(e),s?r.display=s:wl(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ic.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},Bl=function(e,t,n,r,i,a){var o=e._gsap,s=i||zl(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==Fl&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Sl(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[ll]=`0px 0px`,a&&(Tl(a,o,`xOrigin`,c,y),Tl(a,o,`yOrigin`,l,b),Tl(a,o,`xOffset`,u,o.xOffset),Tl(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},Vl=function(e,t){var n=e._gsap||new Us(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=gl(e,ll)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,ee,te,ne,re,ie,ae,oe;return n.svg=!!(e.getCTM&&Cl(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[q]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[q]===`none`?``:s[q])),r.scale=r.rotate=r.translate=`none`),S=zl(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+`px `+(n.yOrigin-N.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),Bl(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==Fl&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?Gc(D,E)*Uc:0,_=O||k?Gc(O,k)*Uc+m:0,_&&(p*=Math.abs(Math.cos(_*Wc))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(oe=S[6],ie=S[7],te=S[8],ne=S[9],re=S[10],ae=S[11],l=S[12],u=S[13],d=S[14],C=Gc(oe,re),h=C*Uc,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+te*T,N=j*w+ne*T,ee=oe*w+re*T,te=A*-T+te*w,ne=j*-T+ne*w,re=oe*-T+re*w,ae=ie*-T+ae*w,A=M,j=N,oe=ee),C=Gc(-O,re),g=C*Uc,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-te*T,N=D*w-ne*T,ee=O*w-re*T,ae=k*T+ae*w,E=M,D=N,O=ee),C=Gc(D,E),m=C*Uc,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,N=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=N),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=W(Math.sqrt(E*E+D*D+O*O)),p=W(Math.sqrt(j*j+oe*oe)),C=Gc(A,j),_=Math.abs(C)>2e-4?C*Uc:0,y=ae?1/(ae<0?-ae:ae):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!Ll(gl(e,q)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=W(f),n.scaleY=W(p),n.rotation=W(m)+o,n.rotationX=W(h)+o,n.rotationY=W(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[ll]=Hl(c)),n.xOffset=n.yOffset=0,n.force3D=aa.force3D,n.renderTransform=n.svg?Yl:ml?Jl:Wl,n.uncache=0,n},Hl=function(e){return(e=e.split(` `))[0]+` `+e[1]},Ul=function(e,t,n){var r=qo(t);return W(parseFloat(t)+parseFloat(Ol(e,`x`,n+`px`,r)))+r},Wl=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,Jl(e,t)},Gl=`0deg`,Kl=`0px`,ql=`) `,Jl=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==Gl||l!==Gl)){var x=parseFloat(l)*Wc,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*Wc,w=Math.cos(x),a=Ul(_,a,S*w*-v),o=Ul(_,o,-Math.sin(x)*-v),s=Ul(_,s,C*w*-v+v)}h!==Kl&&(y+=`perspective(`+h+ql),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==Kl||o!==Kl||s!==Kl)&&(y+=s!==Kl||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+ql),c!==Gl&&(y+=`rotate(`+c+ql),l!==Gl&&(y+=`rotateY(`+l+ql),u!==Gl&&(y+=`rotateX(`+u+ql),(d!==Gl||f!==Gl)&&(y+=`skew(`+d+`, `+f+ql),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+ql),_.style[q]=y||`translate(0, 0)`},Yl=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=Wc,c*=Wc,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=Wc,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=W(b),x=W(x),S=W(S),C=W(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Ol(f,`x`,a,`px`),y=Ol(f,`y`,o,`px`)),(p||m||h||g)&&(v=W(v+p-(p*b+m*S)+h),y=W(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=W(v+r/100*w.width),y=W(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[q]=w)},Xl=function(e,t,n,r,i){var a=360,o=ga(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?Uc:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*Kc)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*Kc)%a-~~(s/a)*a)),e._pt=u=new yc(e._pt,t,n,r,s,Qc),u.e=c,u.u=`deg`,e._props.push(n),u},Zl=function(e,t){for(var n in t)e[n]=t[n];return e},Ql=function(e,t,n){var r=Zl({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[q]=t,o=Vl(n,1),wl(n,q),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[q],a[q]=t,o=Vl(n,1),a[q]=c),Hc)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=qo(c),p=qo(l),u=f===p?parseFloat(c):Ol(n,s,c,p),d=parseFloat(l),e._pt=new yc(e._pt,o,s,u,d-u,Zc),e._pt.u=p||0,e._props.push(s));Zl(o,r)};io(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});Pl[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return kl(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var $l={name:`css`,register:yl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;for(m in Lc||yl(),this.styles=this.styles||pl(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(Xa[m]&&Ys(m,t,n,r,e,i)))){if(f=typeof l,p=Pl[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=ds(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Ts.lastIndex=0,Ts.test(c)||(h=qo(c),g=qo(l)),g?h!==g&&(c=Ol(e,m,c,g)+g):h&&(l+=h),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],ga(c)&&~c.indexOf(`random(`)&&(c=ds(c)),qo(c+``)||c===`auto`||(c+=aa.units[m]||qo(kl(e,m))||``),(c+``).charAt(1)===`=`&&(c=kl(e,m))):c=kl(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in Xc&&(m===`autoAlpha`&&(d===1&&kl(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),Tl(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=Xc[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in Hc,v){if(this.styles.save(m),y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Vl(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new yc(this._pt,o,q,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new yc(this._pt,b,`scaleY`,b.scaleY,(_?oo(b.scaleY,_+u):u)-b.scaleY||0,Zc),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(ll,0,o[ll]),l=Ml(l),b.svg?Bl(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&Tl(this,b,`zOrigin`,b.zOrigin,g),Tl(this,o,m,Hl(c),Hl(l)));continue}else if(m===`svgOrigin`){Bl(e,l,1,x,0,this);continue}else if(m in Il){Xl(this,b,m,d,_?oo(d,_+l):l);continue}else if(m===`smoothOrigin`){Tl(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){Ql(this,l,e);continue}}else m in o||(m=vl(m)||m);if(v||(u||u===0)&&(d||d===0)&&!Yc.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=qo(l)||(m in aa.units?aa.units[m]:h),h!==g&&(d=Ol(e,m,c,g)),this._pt=new yc(this._pt,v?b:o,m,d,(_?oo(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?el:Zc),this._pt.u=g||0,h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=$c);else if(m in o)Al.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){za(m,l);continue}v||(m in o?C.push(m,0,o[m]):C.push(m,1,c||e[m])),a.push(m)}}S&&vc(this)},render:function(e,t){if(t.tween._time||!Bc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:kl,aliases:Xc,getSetter:function(e,t,n){var r=Xc[t];return r&&r.indexOf(`,`)<0&&(t=r),t in Hc&&t!==ll&&(e._gsap.x||kl(e,`x`))?n&&zc===n?t===`scale`?ol:al:(zc=n||{})&&(t===`scale`?sl:cl):e.style&&!va(e.style[t])?rl:~t.indexOf(`-`)?il:uc(e,t)},core:{_removeProperty:wl,_getMatrix:zl}};Nc.utils.checkPrefix=vl,Nc.core.getStyleSaver=pl,(function(e,t,n,r){var i=io(e+`,`+t+`,`+n,function(e){Hc[e]=1});io(t,function(e){aa.units[e]=`deg`,Il[e]=1}),Xc[i[13]]=e+`,`+t,io(r,function(e){var t=e.split(`:`);Xc[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),io(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){aa.units[e]=`px`}),Nc.registerPlugin($l);var J=Nc.registerPlugin($l)||Nc;J.core.Tween;var eu=v({default:()=>tu});function tu(e,{printing:t}){let n=new Date(1996,7,11),r=new Date,i=r.getFullYear()-n.getFullYear();(r.getMonth()<7||r.getMonth()===7&&r.getDate()<11)&&i--,e.querySelector(`.hi-ans`).textContent=i;let a=e.querySelector(`.hi-stamp`),o=e.querySelector(`.hi-retenir`),s=0;return{step(e){!t&&e>s&&(e>=1&&s<1&&J.fromTo(o,{scale:.6,rotation:-20},{scale:1,rotation:-4,duration:.7,ease:`back.out(1.6)`}),e>=2&&s<2&&J.fromTo(a,{scale:2.6,rotation:-30},{scale:1,rotation:-18,duration:.45,ease:`power4.in`})),s=e}}}var nu=v({default:()=>cu}),ru=[[`ETERNALBLUE`,`is a SMBv2 exploit for Windows 7 SP1 (MS17-010)`],[`ETERNALROMANCE`,`is a SMB1 exploit over TCP port 445 which targets XP, 2003, Vista, 7, Windows 8, 2008, 2008 R2, and gives SYSTEM privileges (MS17-010)`],[`ETERNALCHAMPION`,`is a SMBv1 exploit`],[`ETERNALSYNERGY`,`is a SMBv3 remote code execution flaw for Windows 8 and Server 2012 SP0 (MS17-010)`],[`EMERALDTHREAD`,`is a SMB exploit for Windows XP and Server 2003 (MS10-061)`],[`EDUCATEDSCHOLAR`,`is a SMB exploit (MS09-050)`],[`ERRATICGOPHER`,`is a SMBv1 exploit targeting Windows XP and Server 2003`],[`ECLIPSEDWING`,`is an RCE exploit for the Server service in Windows Server 2008 and later (MS08-067)`],[`ESTEEMAUDIT`,`is an RDP exploit and backdoor for Windows Server 2003`],[`ESKIMOROLL`,`is a Kerberos exploit targeting 2000, 2003, 2008 and 2008 R2 domain controllers`],[`EXPLODINGCAN`,`is an IIS 6.0 exploit that creates a remote backdoor`],[`ENGLISHMANSDENTIST`,`sets Outlook Exchange WebAccess rules to trigger executable code on the client's side to send an email to other users`],[`EASYBEE`,`appears to be an MDaemon email server vulnerability`],[`EASYFUN`,`EasyFun 2.2.0 Exploit for WDaemon / IIS MDaemon/WorldClient pre 9.5.6`],[`EASYPI`,`is an IBM Lotus Notes exploit that gets detected as Stuxnet`],[`EWOKFRENZY`,`is an exploit for IBM Lotus Domino 6.5.4 & 7.0.2`],[`EMPHASISMINE`,`is a remote IMAP exploit for IBM Lotus Domino 6.6.4 to 8.5.2`],[`EPICHERO`,`0-day exploit (RCE) for Avaya Call Server`],[`ETRE`,`is an exploit for IMail 8.10 to 8.22`],[`ETCETERABLUE`,`is an exploit for IMail 7.04 to 8.05`],[`EARLYSHOVEL`,`RedHat 7.0 - 7.1 Sendmail 8.11.x exploit`],[`EBBISLAND (EBBSHAVE)`,`root RCE via RPC XDR overflow in Solaris 6, 7, 8, 9 & 10 (possibly newer) both SPARC and x86`],[`ECHOWRECKER`,`remote Samba 3.0.x Linux exploit`],[`FUZZBUNCH`,`exploit framework, the NSA's equivalent of Metasploit`],[`DOUBLEPULSAR`,`kernel-mode SMB backdoor implant, installed by the ETERNAL exploits`],[`DANDERSPRITZ`,`post-exploitation framework`]],iu=`msf6 auxiliary(scanner/smb/smb_ms17_010) > `,au=[[`msf6 > `,!1],[`use auxiliary/scanner/smb/smb_ms17_010
`,!0],[iu,!1],[`set RHOSTS 192.168.1.177
`,!0],[`RHOSTS => 192.168.1.177
`,!1],[iu,!1],[`run
`,!0],[`
`,!1],[`[+] 192.168.1.177:445 - Host is likely VULNERABLE to MS17-010! - Windows 7 Professional 7601 Service Pack 1 x64 (64-bit)
`,!1],[`[*] 192.168.1.177:445 - Scanned 1 of 1 hosts (100% complete)
`,!1],[`[*] Auxiliary module execution completed
`,!1],[iu,!1]],ou=e=>e.replace(/[&<>]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`})[e]),su=e=>ou(e).replace(/msf6/g,`<u class="tm-msf">msf6</u>`).replace(/auxiliary\((scanner\/smb\/smb_ms17_010)\)/g,`auxiliary(<u class="tm-mod">$1</u>)`).replace(/^\[\+\](.*)$/gm,`<u class="tm-ok">[+]$1</u>`).replace(/^\[\*\]/gm,`<u class="tm-info">[*]</u>`);function cu(e,{printing:t}){let n=e.querySelector(`.gh-list`),r=e.querySelector(`.tm-out`),i=([e,t])=>`<li><b>${e}</b> ${ou(t)}</li>`;n.innerHTML=ru.map(i).join(``)+ru.map(i).join(``);let a=au.map(([e])=>e).join(``),o,s=(e,t)=>{r.innerHTML=su(e)+(t?`<span class="tm-cur">▋</span>`:``)},c=()=>{clearTimeout(o),o=void 0},l=()=>{c();let e=0,t=0,n=``,r=()=>{if(e>=au.length)return s(n,!0);let[i,a]=au[e];a?(n+=i[t++],s(n,!0),t>=i.length?(e++,t=0,o=setTimeout(r,380)):o=setTimeout(r,38)):(n+=i,e++,s(n,!0),o=setTimeout(r,i.startsWith(`[`)?260:120))};o=setTimeout(r,500)};return t?(e.classList.add(`ns-still`),s(a,!1)):s(``,!0),{enter(){e.classList.remove(`ns-still`),l()},leave(){c(),e.classList.add(`ns-still`)},final(){c(),e.classList.add(`ns-still`),s(a,!1)}}}var lu=v({default:()=>uu});function uu(e,{printing:t}){let n=[...e.querySelectorAll(`.po-card`)];e.querySelectorAll(`.po-a button`).forEach(e=>e.addEventListener(`click`,t=>{t.stopPropagation();let n=!e.classList.contains(`on`);e.parentElement.querySelectorAll(`button`).forEach(e=>e.classList.remove(`on`)),e.classList.toggle(`on`,n)}));let r=0;return{step(e){!t&&e>r&&n.slice(r,e).forEach(e=>J.fromTo(e,{y:30,scale:.94},{y:0,scale:1,duration:.5,ease:`back.out(1.7)`})),r=e}}}var du=v({default:()=>fu});function fu(e){let t=[...e.querySelectorAll(`.bt-props li`)],n=t.map(e=>{let t=e.textContent;e.textContent=``;let n=document.createElement(`span`);n.className=`bt-pill`,n.textContent=t;let r=document.createElement(`span`);return r.className=`bt-chk`,r.textContent=`✓`,e.append(n,r),r}),r=t.map(e=>e.classList.contains(`bt-g`)),i=[...e.querySelectorAll(`.bt-s2, .bt-g`)],a=0,o=(t,a)=>{e.classList.toggle(`s2`,t>=2),J.set(i,{opacity:+(t>=2)}),n.forEach((e,n)=>{let i=r[n]?t>=2:t>=1,o=e.classList.contains(`on`);e.classList.toggle(`on`,i),i&&!o&&a&&J.fromTo(e,{scale:.2,rotation:-40},{scale:1,rotation:0,duration:.6,ease:`back.out(2.4)`,delay:(r[n]?n-6:n)*.14})}),a&&t===2&&J.fromTo(e.querySelector(`.bt-s2`),{strokeDasharray:700,strokeDashoffset:700},{strokeDashoffset:0,duration:.9,ease:`power2.out`})};return{step(e){o(e,e>a),a=e},final(){o(2,!1)}}}var pu=new TextEncoder,mu=e=>typeof e==`string`?pu.encode(e):e instanceof Uint8Array?e:new Uint8Array(e),hu=e=>Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``),gu=e=>Array.from(e,e=>e.toString(2).padStart(8,`0`)).join(``),_u=e=>{let t=0;for(let n of e)if(n===0)t+=8;else return t+Math.clz32(n)-24;return t},vu=(e,t)=>{let n=0;for(let r=0;r<e.length;r++){let i=e[r]^t[r];for(;i;)n+=i&1,i>>>=1}return n};function yu(e){let t=e.length,n=(t+8>>6)+1<<6,r=new Uint8Array(n);r.set(e),r[t]=128;let i=new DataView(r.buffer);return i.setUint32(n-8,Math.floor(t*8/2**32)),i.setUint32(n-4,t*8>>>0),i}var bu=(e,t)=>e<<t|e>>>32-t,xu=(e,t)=>e>>>t|e<<32-t;function Su(e){let t=yu(mu(e)),n=[1732584193,4023233417,2562383102,271733878,3285377520],r=new Int32Array(80);for(let e=0;e<t.byteLength;e+=64){for(let n=0;n<16;n++)r[n]=t.getInt32(e+n*4);for(let e=16;e<80;e++)r[e]=bu(r[e-3]^r[e-8]^r[e-14]^r[e-16],1);let[i,a,o,s,c]=n;for(let e=0;e<80;e++){let t=e<20?(a&o|~a&s)+1518500249:e<40?(a^o^s)+1859775393:e<60?(a&o|a&s|o&s)+2400959708:(a^o^s)+3395469782,n=bu(i,5)+t+c+r[e]|0;c=s,s=o,o=bu(a,30),a=i,i=n}n[0]=n[0]+i|0,n[1]=n[1]+a|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+c|0}let i=new DataView(new ArrayBuffer(20));return n.forEach((e,t)=>i.setInt32(t*4,e)),new Uint8Array(i.buffer)}var Cu=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function wu(e){let t=yu(mu(e)),n=new Int32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),r=new Int32Array(64);for(let e=0;e<t.byteLength;e+=64){for(let n=0;n<16;n++)r[n]=t.getInt32(e+n*4);for(let e=16;e<64;e++){let t=xu(r[e-15],7)^xu(r[e-15],18)^r[e-15]>>>3,n=xu(r[e-2],17)^xu(r[e-2],19)^r[e-2]>>>10;r[e]=r[e-16]+t+r[e-7]+n|0}let[i,a,o,s,c,l,u,d]=n;for(let e=0;e<64;e++){let t=d+(xu(c,6)^xu(c,11)^xu(c,25))+(c&l^~c&u)+Cu[e]+r[e]|0,n=(xu(i,2)^xu(i,13)^xu(i,22))+(i&a^i&o^a&o)|0;d=u,u=l,l=c,c=s+t|0,s=o,o=a,a=i,i=t+n|0}[i,a,o,s,c,l,u,d].forEach((e,t)=>n[t]=n[t]+e|0)}let i=new DataView(new ArrayBuffer(32));return n.forEach((e,t)=>i.setInt32(t*4,e)),new Uint8Array(i.buffer)}function Tu(e,t,n){let r=mu(t);r.length>64&&(r=e(r));let i=new Uint8Array(64).fill(54),a=new Uint8Array(64).fill(92);r.forEach((e,t)=>{i[t]^=e,a[t]^=e});let o=mu(n),s=new Uint8Array(64+o.length);s.set(i),s.set(o,64);let c=e(s),l=new Uint8Array(64+c.length);return l.set(a),l.set(c,64),e(l)}function Eu(e){let t=new Uint8Array(8);return new DataView(t.buffer).setUint32(0,Math.floor(e/2**32)),new DataView(t.buffer).setUint32(4,e>>>0),t}function Du(e,t,n=6){let r=Tu(Su,e,Eu(t)),i=r[r.length-1]&15,a=r.slice(i,i+4),o=(a[0]&127)<<24|a[1]<<16|a[2]<<8|a[3];return{mac:r,offset:i,slice:a,bin:o,code:String(o%10**n).padStart(n,`0`)}}function Ou(e,t=Date.now()/1e3,{step:n=30,digits:r=6}={}){let i=Math.floor(t/n);return{T:i,remaining:n-t%n,...Du(e,i,r)}}var ku=`ABCDEFGHIJKLMNOPQRSTUVWXYZ234567`;function Au(e){let t=0,n=0,r=``;for(let i of mu(e))for(n=n<<8|i,t+=8;t>=5;)r+=ku[n>>>t-5&31],t-=5;return t>0&&(r+=ku[n<<5-t&31]),r}var ju=`0123456789abcdef`;function Mu(e,t,n=650){if(!n)return e.textContent=t,()=>{};let r=performance.now(),i=0,a=o=>{let s=Math.min(1,(o-r)/n),c=Math.floor(s*t.length),l=t.slice(0,c);for(let e=c;e<t.length;e++)l+=/[0-9a-f]/.test(t[e])?ju[Math.random()*16|0]:t[e];e.textContent=l,s<1&&(i=requestAnimationFrame(a))};return i=requestAnimationFrame(a),()=>cancelAnimationFrame(i)}var Nu=v({default:()=>Lu}),Pu=e=>btoa(String.fromCharCode(...new Uint8Array(e))),Fu=(e,t,n)=>Array.from({length:n},(n,r)=>e.slice(r*t,(r+1)*t)).join(`
`)+`…`,Iu=`http://www.w3.org/2000/svg`;function Lu(e,{printing:t}){let n=e.querySelector(`.ct-stage`),r=e.querySelector(`.ct-wires`),i=t=>e.querySelector(t),a=e=>{let t=0,r=0,i=e.offsetWidth,a=e.offsetHeight;for(;e&&e!==n;)t+=e.offsetLeft,r+=e.offsetTop,e=e.offsetParent;return{x:t,y:r,w:i,h:a,r:t+i,b:r+a,cx:t+i/2,cy:r+a/2}},o=(e,t,n)=>Object.assign(e.style,{left:t+`px`,top:n+`px`}),s=(e,t,n,i)=>{let a=document.createElementNS(Iu,`path`);a.setAttribute(`d`,e),a.setAttribute(`class`,`ct-w `+n),a.dataset.s=t,i&&a.setAttribute(`marker-end`,`url(#ct-ah-${i})`),r.appendChild(a)},c=(e,t,n,r,i=14)=>{let a=Math.sign(n-e),o=Math.sign(r-t);return`M${e} ${t} H${n-a*i} Q${n} ${t} ${n} ${t+o*i} V${r}`},l=!1,u=()=>{if(l||!n.offsetWidth)return;l=!0;let e=a(i(`.ct-card`)),t=a(i(`.ct-id`)),r=a(i(`.ct-pk`)),u=a(i(`.ct-sig`)),d=i(`.ct-sha`),f=i(`.ct-hashbox`),p=i(`.ct-rsa`),m=i(`.ct-rsacap`),h=i(`.ct-sha .prim-box`),g=i(`.ct-rsa .prim-box`),_=e.r+16,v=t.y+6,y=r.b-6,b=(v+y)/2;s(`M${_} ${v} q16 0 16 16 V${b-16} q0 16 16 16 q-16 0 -16 16 V${y-16} q0 16 -16 16`,3,`sha brace`);let x=_+32+46+f.offsetWidth/2,S=h.offsetWidth,C=h.offsetHeight;o(d,x-S/2,b-C/2),s(`M${_+32+6} ${b} H${x-S/2-8}`,3,`sha`,`sha`);let w=b+C/2+34;o(f,x-f.offsetWidth/2,w),s(`M${x} ${b+C/2+6} V${w-6}`,3,`sha`,`sha`);let T=g.offsetWidth,E=g.offsetHeight,D=Math.max(u.cy-E/2,w+f.offsetHeight+32),O=D+E/2;o(p,x-T/2,D),s(`M${x} ${w+f.offsetHeight+6} V${D-8}`,4,`rsa`,`rsa`),O>u.y+12&&O<u.b-12?s(`M${x-T/2-8} ${O} H${e.r+8}`,4,`rsa`,`rsa`):s(c(x-T/2-8,O,e.r+40,u.cy)+` H${e.r+8}`,4,`rsa`,`rsa`);let k=i(`.ct-ac`),A=a(i(`.ct-ac .prim-ico`));k.style.top=k.offsetTop+(O-A.cy)+`px`;let j=a(i(`.ct-ac .prim-ico`));s(`M${j.x-10} ${O} H${x+T/2+52}`,4,`rsa dash`,`rsa`),o(m,x-T/2,D+E+30);let M=a(i(`.ct-owner .prim-ico`)),N=a(i(`.ct-check .ct-meet`));s(`M${M.cx} ${a(i(`.ct-owner`)).b+8} V${N.y-10}`,4,`dash`,`mut`),s(`M${M.cx} ${a(i(`.ct-check`)).b+8} V${j.y-10}`,4,`dash`,`mut`)},d=()=>{let e=i(`.ct-owner .ct-kpub`),t=i(`.ct-pk .ct-kpub`),r=a(e),o=a(t),s=e.cloneNode(!0);Object.assign(s.style,{position:`absolute`,left:r.x+`px`,top:r.y+`px`,width:r.w+`px`,height:r.h+`px`,margin:0,zIndex:5,opacity:1,transform:`none`}),n.appendChild(s),J.set(t,{opacity:0}),J.timeline({onComplete:()=>s.remove()}).to(s,{x:o.x-r.x,y:o.y-r.y,width:o.w,height:o.h,duration:.9,ease:`power2.inOut`}).to(s,{rotation:-360,duration:.9,ease:`power2.inOut`},0).set(t,{opacity:1})},f=()=>[...e.querySelectorAll(`[data-s]`)],p=[...e.querySelectorAll(`.ct-steps li`)],m=e.querySelector(`.ct-card`),h=t=>e.querySelector(`#`+t),g=h(`ct-ident`).textContent.trim(),_={name:`RSASSA-PKCS1-v1_5`,modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:`SHA-256`},v=(async()=>{let e=await crypto.subtle.generateKey(_,!0,[`sign`,`verify`]),t=await crypto.subtle.generateKey(_,!0,[`sign`,`verify`]),n=await crypto.subtle.exportKey(`jwk`,e.publicKey),r=new TextEncoder().encode(g+`
`+n.n),i=await crypto.subtle.sign(_,t.privateKey,r);return{pk:Fu(n.n,18,3),hash:Fu(hu(wu(r)),10,4).slice(0,-1),sig:Fu(Pu(i),18,3)}})(),y=e=>void v.then(t=>{let n=(t,n,r)=>{let i=h(t);i.dataset.v!==n&&(i.dataset.v=n,e&&b>=r?Mu(i,n,700):i.textContent=n)};n(`ct-pk`,t.pk,2),n(`ct-hash`,t.hash,3),n(`ct-sig`,t.sig,4)}),b=0,x=(n,r)=>{u();for(let e of f()){let t=Number(e.dataset.s)<=n,i=e.classList.contains(`ct-in`);if(e.classList.toggle(`ct-in`,t),e.tagName===`path`){let n=e.getTotalLength?.()||400;t&&!i&&r?J.fromTo(e,{strokeDasharray:n,strokeDashoffset:n,opacity:1},{strokeDashoffset:0,duration:.7,ease:`power2.out`,onComplete:()=>J.set(e,{clearProps:`strokeDasharray,strokeDashoffset`})}):J.set(e,{opacity:+!!t})}else t&&!i&&r?J.fromTo(e,{opacity:0,y:14,scale:.96},{opacity:1,y:0,scale:1,duration:.55,ease:`back.out(1.6)`}):J.set(e,{opacity:+!!t,y:0,scale:1})}if(p.forEach(e=>e.classList.toggle(`on`,Number(e.dataset.on)<=Math.max(n,0)||n>=5)),m.classList.toggle(`done`,n>=5),e.classList.toggle(`hashed`,n>=3),e.classList.toggle(`signed`,n>=4),r&&n===2&&!t&&d(),r&&n===5){let t=e.querySelector(`.ct-cert`);J.fromTo(t,{scale:.3,rotation:-20},{scale:1,rotation:0,duration:.8,ease:`elastic.out(1, 0.5)`})}};return{enter(){},step(e){let t=e>b;b=e,x(e,t),y(t)},final(){b=5,x(5,!1),y(!1)},printing:t}}var Ru=v({default:()=>Vu}),zu=e=>btoa(String.fromCharCode(...new Uint8Array(e))),Bu=(e,t,n)=>Array.from({length:n},(n,r)=>e.slice(r*t,(r+1)*t)).join(`
`);function Vu(e,{printing:t}){let n=[...e.querySelectorAll(`[data-s]`)],r=t=>e.querySelector(`#`+t),i=[...r(`cv-addr`).children].map(e=>e.textContent.trim()).join(`
`),a={name:`RSASSA-PKCS1-v1_5`,modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:`SHA-256`},o=(async()=>{let e=new TextEncoder().encode(i),t=await crypto.subtle.generateKey(a,!1,[`sign`,`verify`]),n=await crypto.subtle.sign(a,t.privateKey,e),r=await crypto.subtle.verify(a,t.publicKey,n,e);return{hash:Bu(hu(wu(e)),10,4)+`…`,sig:Bu(zu(n),11,4)+`…`,ok:r}})(),s=0,c={"cv-hash":[`hash`,1],"cv-sig":[`sig`,2],"cv-sig2":[`sig`,3],"cv-h1":[`hash`,3],"cv-h2":[`hash`,4]},l=e=>void o.then(t=>{for(let[n,[i,a]]of Object.entries(c)){let o=r(n);o.dataset.v!==t[i]&&(o.dataset.v=t[i],e&&s===a?Mu(o,t[i],700):o.textContent=t[i])}r(`cv-ok`).textContent=t.ok?`✓ signature vérifiée : document authentique et intègre`:`✗ signature invalide`,r(`cv-ok`).classList.toggle(`bad`,!t.ok)}),u=(e,t)=>{for(let r of n){let n=Number(r.dataset.s)<=e,i=r.classList.contains(`cv-in`);if(r.classList.toggle(`cv-in`,n),r.tagName===`path`){let e=r.getTotalLength?.()||300;n&&!i&&t?J.fromTo(r,{opacity:1,strokeDasharray:e,strokeDashoffset:e},{strokeDashoffset:0,duration:.6,ease:`power2.out`,onComplete:()=>J.set(r,{clearProps:`strokeDasharray,strokeDashoffset`})}):J.set(r,{opacity:+!!n})}else n&&!i&&t?J.fromTo(r,{opacity:0,y:12},{opacity:1,y:0,duration:.5,ease:`power3.out`}):J.set(r,{opacity:+!!n,y:0})}};return{step(e){let t=e>s;s=e,u(e,t),l(t)},final(){s=4,u(4,!1),l(!1)},printing:t}}var Hu=v({default:()=>Wu}),Uu=[``,`dh`,`rsa`,`aes`,`sha`];function Wu(e){let t=0,n=(t,n)=>{if(e.dataset.hl=Uu[t]||``,n&&Uu[t]){let n=e.querySelector(`.tl-seg[data-k="${Uu[t]}"]`),r=e.querySelector(`.tl-p[data-k="${Uu[t]}"]`);J.fromTo(n,{scale:1},{scale:1.12,duration:.16,yoyo:!0,repeat:1,ease:`power2.out`}),J.fromTo(r,{y:-10},{y:0,duration:.5,ease:`back.out(2)`})}};return{step(e){n(e,e>t),t=e},final(){e.dataset.hl=`dh rsa aes sha`}}}var Gu=v({default:()=>Ju}),Ku=19,qu=100;function Ju(e){let t=t=>e.querySelector(`#`+t),n=0,r=0,i=0,a=[],o=()=>{let e=new Set,t=!1;for(let n=0;n<Ku;n++){let n=hu(Su(crypto.getRandomValues(new Uint8Array(142)))),r=n.slice(0,2);e.has(r)&&(t=!0),e.add(r),a.push(`${n}   ${r}`)}a=a.slice(-11),r++,t&&i++},s=()=>{t(`co-lines`).textContent=a.join(`
`),t(`co-j`).textContent=r,t(`co-k`).textContent=i,e.classList.toggle(`co-done`,r>=qu)},c=()=>clearInterval(n),l=()=>{c(),r=i=0,a=[],s()},u=()=>{l(),n=setInterval(()=>{o(),s(),r>=qu&&c()},55)};return{step(e){e>=2&&r===0&&u(),e<2&&l()},leave:c,final(){for(l();r<qu;)o();s()}}}var Yu=v({default:()=>Xu});function Xu(e){let t=e.querySelector(`#hd-hv`),n=hu(wu(e.dataset.texte||`Introduction à la cryptographie moderne`));return t.textContent=`${n.slice(0,32)}\n${n.slice(32)}`,{}}var Zu=v({default:()=>ed}),Qu=6e5,$u=new Intl.NumberFormat(`fr-FR`);function ed(e){let t=t=>e.querySelector(`#`+t),n=t(`mp-pwd`).textContent,r=hu(Su(n));t(`mp-h`).textContent=r,t(`mp-hit`).textContent=r;let i=0,a=0,o=!1,s=async e=>{let t=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(n),`PBKDF2`,!1,[`deriveBits`]);return new Uint8Array(await crypto.subtle.deriveBits({name:`PBKDF2`,hash:`SHA-256`,salt:e,iterations:Qu},t,256))},c=async e=>{let n=++i;o=!1;let r=crypto.getRandomValues(new Uint8Array(16));t(`mp-salt`).textContent=hu(r),t(`mp-res`).textContent=`…`,t(`mp-cost`).textContent=`…`;let c=performance.now(),l=s(r),u=()=>{if(n!==i)return;let e=Math.min(1,(performance.now()-c)/1600);t(`mp-n`).textContent=$u.format(Math.round(Qu*(o?1:Math.min(e,.98)))),(!o||e<1)&&(a=requestAnimationFrame(u))};e&&(a=requestAnimationFrame(u));let d=await l,f=performance.now()-c;if(n!==i)return;o=!0;let p=()=>{t(`mp-n`).textContent=$u.format(Qu),Mu(t(`mp-res`),hu(d),e?600:0),t(`mp-cost`).innerHTML=`<b>${$u.format(Math.round(f))} ms</b> par essai sur cette machine : chaque essai coûte 2 × ${$u.format(Qu)} SHA-256 au lieu d'un, l'attaquant est ralenti d'un facteur <b>≈ 10⁶</b>.`};e?setTimeout(p,Math.max(0,1600-f)):p()};return{step(e){e>=2&&!o&&i===0&&c(!0),e<2&&(i=0,o=!1,cancelAnimationFrame(a))},leave(){cancelAnimationFrame(a)},final(){c(!1)}}}var td=v({default:()=>id}),nd=16,rd=new Intl.NumberFormat(`fr-FR`);function id(e){let t=t=>e.querySelector(`#`+t),n=t(`pw-bits`),r=[];for(let e=0;e<8;e++){let e=document.createElement(`div`);for(let t=0;t<32;t++)r.push(e.appendChild(document.createElement(`span`)));n.appendChild(e)}let i=0,a=0,o=0,s=0,c=!1,l=null,u=(e,n)=>{let i=gu(n),o=_u(n);for(let e=0;e<256;e++)r[e].textContent=i[e],r[e].className=e<o?`z`:``;t(`pw-n`).textContent=e,t(`pw-hex`).firstChild.textContent=hu(n),t(`pw-tries`).textContent=rd.format(e+1),a=Math.max(a,o),t(`pw-best`).textContent=`${a} bit${a>1?`s`:``}`},d=()=>{clearInterval(o),cancelAnimationFrame(s),c=!1},f=()=>{d(),i=0,a=0,l=null,e.classList.remove(`pw-done`),u(0,wu(`Guess #0`))},p=()=>{d(),o=setInterval(()=>{i=(i+1)%10,u(i,wu(`Guess #${i}`))},700)},m=(t,n)=>{d(),l=t,u(t,n),e.classList.add(`pw-done`)},h=()=>{d(),c=!0;let e=performance.now(),t=()=>{let n=Math.min(1,((performance.now()-e)/3e3)**2)*106392+30,r;for(;i<n;)if(i++,r=wu(`Guess #${i}`),_u(r)>=nd)return m(i,r);r&&u(i,r),s=requestAnimationFrame(t)};s=requestAnimationFrame(t)};return f(),{enter(){l===null&&!c&&p()},leave:d,step(e){e>=1&&l===null&&!c&&h(),e===0&&(f(),p())},final(){let e=106392;m(e,wu(`Guess #${e}`))}}}var ad=v({default:()=>od});function od(e){let t=e.dataset.texte;e.querySelector(`#hu-in`).textContent=t;let n=e.querySelector(`#hu-hv`);return n.firstChild.textContent=hu(Su(t)),{}}var sd=v({default:()=>cd});function cd(e){let t=e.querySelector(`#sc-hv`);return t.firstChild.textContent=hu(Su(e.querySelector(`.sc-in`).textContent.trim())),{}}var ld=v({default:()=>pd}),ud=e=>String(e).padStart(2,`0`),dd=e=>`${ud(e.getDate())}/${ud(e.getMonth()+1)}/${String(e.getFullYear()).slice(2)}-${ud(e.getHours())}:${ud(e.getMinutes())}`,fd=(e,t,n)=>{e.innerHTML=`<b>${t.slice(0,n)}</b><span class="dim">${t.slice(n)}</span>`};function pd(e){let t=t=>e.querySelector(`#`+t),n=e.querySelector(`.to-sec`).textContent.trim(),r=t(`to-h1`),i=t(`to-h2`),a=document.createElement(`span`),o=document.createElement(`span`);for(let[e,t]of[[r,a],[i,o]])Array.from(e.childNodes).filter(e=>e.nodeType===3).forEach(e=>e.remove()),e.prepend(t);fd(a,hu(Su(n)),4),t(`to-b32`).textContent=Au(n).replace(/(.{4})/g,`$1 `).trim();let s=Array.from({length:20},()=>t(`to-mac`).appendChild(document.createElement(`span`))),c=0,l=``,u=-1,d=(r=!0)=>{let i=new Date,a=dd(i);if(a!==l){l=a,e.querySelectorAll(`.to-now`).forEach(e=>e.textContent=` ${a}`);let t=hu(Su(`${n} ${a}`));r?(Mu(o,t,600),setTimeout(()=>fd(o,t,6),650)):fd(o,t,6)}let c=Ou(n,i.getTime()/1e3);if(t(`to-sec`).textContent=Math.ceil(c.remaining),t(`to-ring`).style.strokeDashoffset=30-c.remaining,e.classList.toggle(`to-hurry`,c.remaining<6),c.T!==u){u=c.T,t(`to-T`).textContent=c.T,c.mac.forEach((e,t)=>{s[t].textContent=e.toString(16).padStart(2,`0`),s[t].className=t===19?`last`:t>=c.offset&&t<c.offset+4?`pick`:``}),s[19].dataset.off=`offset = ${c.offset}`,t(`to-bin`).textContent=c.bin.toLocaleString(`fr-FR`);let e=`${c.code.slice(0,3)} ${c.code.slice(3)}`;for(let n of[`to-otp`,`to-otp2`])Mu(t(n),e,r?500:0)}};return{enter(){d(!1),clearInterval(c),c=setInterval(d,250)},leave(){clearInterval(c)},final(){d(!1)}}}var md=v({default:()=>gd}),hd=e=>e.replace(/\s+/g,` `).trim();function gd(e,{printing:t}){let n=t=>e.querySelector(`.hv[data-h="${t}"]`),r=e.querySelector(`#ta-txt`),i=hd(r.textContent),a=[...e.querySelector(`#ta-civ`).children].map(e=>e.textContent).join(`
`),o={txt:Su(i),civ:Su(a)},s=Su(`l`+i.slice(1)),c=async e=>Su(await(await fetch(e.src)).arrayBuffer()),l=Promise.all([c(e.querySelector(`.ta-photo`)),c(e.querySelector(`.ta-face`)),c(e.querySelector(`.ta-finger`))]).then(([e,t,n])=>{Object.assign(o,{photo:e,face:t,finger:n}),o.id=Su(new Uint8Array([...o.civ,...t,...n]))}),u=new Set,d=(e,t)=>{Mu(n(e).firstChild,hu(o[e]),t)},f=[[],[`txt`],[`photo`],[`civ`,`face`,`finger`],[`id`],[]],p=0,m=(t,i)=>{l.then(()=>{for(let e=1;e<=4;e++)for(let n of f[e])e<=t&&!u.has(n)&&(u.add(n),d(n,i?700:0)),e>t&&u.delete(n);let a=t>=5;r.classList.toggle(`ta-mod`,a),r.firstChild.textContent=(a?`l`:`L`)+r.firstChild.textContent.slice(1);let c=n(`txt`).firstChild;a!==e.classList.contains(`ta-aval-on`)&&t>=1&&(Mu(c,hu(a?s:o.txt),i?700:0),e.querySelector(`#ta-diff`).textContent=vu(o.txt,s)),e.classList.toggle(`ta-aval-on`,a)})};return r.firstChild.textContent=r.firstChild.textContent.replace(/^\s+/,``),{step(e){m(e,e>p),p=e},final(){m(4,!1),e.querySelector(`#ta-diff`).textContent=vu(o.txt,s)},printing:t}}var _d=(e,t)=>{let n=0;for(let r=0;r<8;r++){t&1&&(n^=e);let r=e&128;e=e<<1&255,r&&(e^=27),t>>=1}return n},vd=(()=>{let e=new Uint8Array(256);for(let t=0;t<256;t++){let n=0;if(t)for(n=1;_d(t,n)!==1;n++);let r=n;for(let e=1;e<=4;e++)r^=(n<<e|n>>8-e)&255;e[t]=r^99}return e})(),yd=e=>e.map(e=>vd[e]),bd=e=>e.map((t,n)=>e[n%4+4*(((n>>2)+n%4)%4)]),xd=e=>{let t=new Uint8Array(16);for(let n=0;n<4;n++){let[r,i,a,o]=e.slice(4*n,4*n+4);t[4*n]=_d(r,2)^_d(i,3)^a^o,t[4*n+1]=r^_d(i,2)^_d(a,3)^o,t[4*n+2]=r^i^_d(a,2)^_d(o,3),t[4*n+3]=_d(r,3)^i^a^_d(o,2)}return t},Sd=(e,t)=>e.map((e,n)=>e^t[n]);function Cd(e){let t=[...e],n=1;for(let e=16;e<176;e+=4){let r=t.slice(e-4,e);e%16==0&&(r=[vd[r[1]]^n,vd[r[2]],vd[r[3]],vd[r[0]]],n=_d(n,2));for(let n=0;n<4;n++)t.push(t[e-16+n]^r[n])}return Array.from({length:11},(e,n)=>Uint8Array.from(t.slice(16*n,16*n+16)))}function wd(e,t){let n=Cd(t),r=[],i=Uint8Array.from(e);r.push({round:0,step:`input`,state:i}),i=Sd(i,n[0]),r.push({round:0,step:`addRoundKey`,state:i});for(let e=1;e<=10;e++)i=yd(i),r.push({round:e,step:`subBytes`,state:i}),i=bd(i),r.push({round:e,step:`shiftRows`,state:i}),e<10&&(i=xd(i),r.push({round:e,step:`mixColumns`,state:i})),i=Sd(i,n[e]),r.push({round:e,step:`addRoundKey`,state:i});return r}var Td=e=>Uint8Array.from(e.match(/../g),e=>parseInt(e,16)),Ed=v({default:()=>Md}),Dd=Td(`3243f6a8885a308d313198a2e0370734`),Od=Td(`2b7e151628aed2a6abf7158809cf4f3c`),kd=128,Ad=e=>e.toString(16).padStart(2,`0`),jd=e=>hu(e).match(/.{8}/g).map((e,t)=>t===1?e+`
`:e+` `).join(``).trimEnd();function Md(e,{printing:t}){let n=wd(Dd,Od),r=Uint8Array.from(Dd);r[0]^=1;let i=wd(r,Od),a=n.at(-1).state,o=i.at(-1).state,s=(e,t)=>n.findIndex(n=>n.round===e&&n.step===t),c=[0,s(0,`addRoundKey`),s(1,`subBytes`),s(1,`shiftRows`),s(1,`mixColumns`),n.length-1],l=[null,`addRoundKey`,`subBytes`,`shiftRows`,`mixColumns`,null,null],u=e.querySelector(`.ac-grid`),d=e=>({x:(e>>2)*kd,y:e%4*kd}),f=Array.from({length:16},(e,t)=>{let n=document.createElement(`span`);return n.className=`ac-cell`,u.appendChild(n),J.set(n,d(t)),n}),p=e=>f.forEach((t,n)=>t.textContent=Ad(e[n])),m=()=>{let e=[...u.children];e.forEach(e=>J.killTweensOf(e)),f=e,f.forEach((e,t)=>{J.set(e,{...d(t),opacity:1,rotationX:0,scale:1}),e.className=`ac-cell`})},h=[...e.querySelectorAll(`.ac-op`)],g=e.querySelector(`.ac-loop`),_=[...e.querySelectorAll(`.ac-panel`)],v=e.querySelector(`.ac-round`),y=e.querySelector(`.ac-step`),b=t=>e.querySelector(t);b(`.ac-pt`).textContent=jd(Dd),b(`.ac-k`).textContent=jd(Od),b(`.ac-ct`).textContent=jd(a),b(`.ac-x1`).textContent=`${Ad(Dd[0])} ⊕ ${Ad(Od[0])} = ${Ad(n[c[1]].state[0])}`;let x=n[c[1]].state[0];b(`.ac-s1`).textContent=`S(${Ad(x)}) = ${Ad(vd[x])}`;let S=n[c[3]].state,C=n[c[4]].state;b(`.ac-m1`).textContent=`${Ad(C[0])} = 2·${Ad(S[0])} ⊕ 3·${Ad(S[1])} ⊕ ${Ad(S[2])} ⊕ ${Ad(S[3])}`;let w=(e,t)=>jd(t).split(``).map((t,n)=>t!==jd(e)[n]&&t!==` `&&t!==`
`?`<mark>${t}</mark>`:t).join(``);b(`.ac-pt2`).innerHTML=w(Dd,r),b(`.ac-c1`).textContent=jd(a),b(`.ac-c2`).innerHTML=w(a,o),b(`.ac-nb`).textContent=vu(a,o);let T=b(`.ac-sbox`);T.innerHTML=Array.from({length:256},(e,t)=>`<i title="${Ad(t)} → ${Ad(vd[t])}"></i>`).join(``);let E=[...T.children],D=(e,t)=>{E.forEach((n,r)=>{n.classList.toggle(`ac-row`,t&&r>>4==e>>4),n.classList.toggle(`ac-col`,t&&(r&15)==(e&15)),n.classList.toggle(`ac-hit`,t&&r===e)})},O=e=>{h.forEach(t=>t.classList.toggle(`on`,t.dataset.op===l[e])),g.classList.toggle(`on`,e===5),_.forEach(t=>t.classList.toggle(`on`,Number(t.dataset.p)===e));let t=e>=5?n.at(-1):n[c[e]];v.textContent=e===0?`Clair`:e>=5?e===6?`Chiffré′`:`Chiffré`:`Tour ${t.round}`,y.textContent=e===0||e>=5?``:t.step,D(x,e===2)},k=e=>{A?.kill(),m(),p(e===6?o:n[c[Math.min(e,5)]].state),e===6&&f.forEach((e,t)=>e.classList.toggle(`ac-chg`,o[t]!==a[t])),e===5&&f.forEach(e=>e.classList.add(`ac-done`)),O(e)},A,j=0,M=(e,t,n=.05)=>{let r=J.timeline();return f.forEach((i,a)=>{let o=a*n;r.to(i,{rotationX:90,duration:.16,ease:`power1.in`},o),r.add(()=>{i.textContent=Ad(e[a]),t&&i.classList.add(t)},o+.16),r.to(i,{rotationX:0,duration:.22,ease:`back.out(2)`},o+.16)}),t&&r.add(()=>f.forEach(e=>e.classList.remove(t)),`+=0.5`),r},N=()=>{let e=J.timeline(),t=Array.from({length:16});return f.forEach((n,r)=>{let i=r%4,a=r>>2,o=(a-i+4)%4;if(t[i+4*o]=n,!i)return;let s=(i-1)*1.7,c=i*kd;e.add(()=>n.classList.add(`ac-moving`),s),o<a?e.to(n,{x:o*kd,duration:1,ease:`power2.inOut`},s+.35):e.to(n,{keyframes:[{y:c-74,scale:1.12,zIndex:5,duration:.35,ease:`power2.out`},{x:o*kd,duration:1,ease:`power2.inOut`},{y:c,scale:1,duration:.35,ease:`bounce.out`}]},s),e.add(()=>n.classList.remove(`ac-moving`),s+1.8),e.set(n,{zIndex:``},s+1.8)}),e.add(()=>f=t),e},ee=e=>{let t=J.timeline();for(let n=0;n<4;n++){let r=f.slice(4*n,4*n+4),i=n*.55;t.add(()=>r.forEach(e=>e.classList.add(`ac-mixing`)),i),r.forEach((r,a)=>{t.to(r,{scale:1.08,duration:.15,yoyo:!0,repeat:1},i+.1),t.add(()=>r.textContent=Ad(e[4*n+a]),i+.25)}),t.add(()=>r.forEach(e=>e.classList.remove(`ac-mixing`)),i+.55)}return t},te=(e,t,n)=>{let r=J.timeline();for(let n=t;n<e.length;n++){let i=(n-t)*.08;r.add(()=>{p(e[n].state),v.textContent=`Tour ${e[n].round}`,y.textContent=e[n].step,f.forEach(e=>e.classList.toggle(`ac-flash`,n%2==0))},i)}return r.add(()=>{f.forEach(e=>e.classList.remove(`ac-flash`)),n()}),r},ne=e=>{A?.progress(1).kill(),O(e),e===1?A=M(n[c[1]].state,`ac-keyed`):e===2?A=M(n[c[2]].state,`ac-subst`,.06):e===3?A=N():e===4?A=ee(n[c[4]].state):e===5?(v.textContent=`Tour 1`,A=te(n,c[4]+1,()=>{O(5),f.forEach(e=>e.classList.add(`ac-done`)),J.fromTo(f,{scale:.85},{scale:1,duration:.5,ease:`back.out(3)`,stagger:.02})})):e===6&&(f.forEach(e=>e.classList.remove(`ac-done`)),A=te(i,0,()=>{O(6),f.forEach((e,t)=>e.classList.toggle(`ac-chg`,o[t]!==a[t]))}))};return k(0),{enter(){J.fromTo(f,{opacity:0,scale:.6},{opacity:1,scale:1,duration:.5,ease:`back.out(2)`,stagger:{each:.03,from:`random`}})},step(e){e===j+1&&!t?ne(e):k(e),j=e},leave(){A?.progress(1)},final(){k(6)}}}var Nd=v({default:()=>Bd,permutation:()=>zd,substitue:()=>Rd}),Pd=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`,Fd=`EKMFLGDQVZNTOWYHXUSPAIBRCJ`,Id=[`JE SUIS`,`PAS LA`],Ld=[`#f4b6b2`,`#f6e3a1`,`#a9d3f5`,`#b7e4c7`,`#d9c4f0`],Rd=e=>e.split(``).map(e=>Fd[Pd.indexOf(e)]??e).join(``),zd=e=>{let t=[],n=0;for(let r of e){let e=r.length,i=r.split(``).reverse().join(``),a=[],o=0;for(let t=0;t<e;t++)a[t]=i[t]===` `?-1:o++;for(let i=0;i<e;i++)r[i]!==` `&&t.push(n+a[e-1-i]);n+=o}return t};function Bd(e,{printing:t}){let n=e.querySelector(`.cd-alpha`);n.innerHTML=Pd.split(``).map(e=>`<span class="cd-p">${e}</span>`).join(``)+Fd.split(``).map(e=>`<span class="cd-c">${e}</span>`).join(``);let r=document.createElement(`span`);r.className=`cd-col`,n.appendChild(r);let i=e.querySelector(`.cd-disque`),a=e.querySelector(`.cd-in`).dataset.text,o=Rd(a),s=e.querySelector(`.cd-in`);s.innerHTML=a.split(``).map(e=>`<span class="cd-l">${e}</span>`).join(``);let c=e.querySelector(`.cd-out`);c.innerHTML=o.split(``).map(e=>`<span class="cd-l">${e}</span>`).join(``);let l=[...s.children],u=[...c.children],d=e.querySelector(`.cd-tiles`),f=e.querySelector(`.cd-src`),p=e.querySelector(`.cd-dst`),m=(e,t)=>{let n=[];return t.forEach((t,r)=>{r&&e.insertAdjacentHTML(`beforeend`,`<span class="cd-gap cd-gap2"></span>`);for(let r of t)e.insertAdjacentHTML(`beforeend`,r===` `?`<span class="cd-gap"></span>`:`<span class="cd-slot"></span>`),r!==` `&&n.push(e.lastElementChild)}),n},h=m(f,Id),g=m(p,Id.map(e=>e.split(``).reverse().join(``))),_=Id.join(``).replaceAll(` `,``),v=zd(Id),y=_.split(``).map((e,t)=>{let n=document.createElement(`span`);return n.className=`cd-tile`,n.textContent=e,n.style.setProperty(`--t`,Ld[t%Ld.length]),d.appendChild(n),n}),b=e=>e.offsetLeft+e.parentElement.offsetLeft,x=e=>y.forEach((t,n)=>J.set(t,{x:b(e?g[v[n]]:h[n]),y:0})),S=_.split(``).map((e,t)=>{let n=document.createElement(`span`);return n.className=`cd-tile`,n.textContent=e,n.style.setProperty(`--t`,Ld[t%Ld.length]),n.classList.add(`cd-ghost`),d.insertBefore(n,d.firstChild),n}),C=0,w,T=e=>{J.set(u,{opacity:+!!e,y:0}),J.set(l,{clearProps:`color,scale`}),J.set(r,{opacity:0})},E=()=>{let e=J.timeline();return a.split(``).forEach((t,a)=>{let o=Pd.indexOf(t),s=a*.85;e.to(r,{x:o*n.children[0].offsetWidth,opacity:1,duration:.35,ease:`power2.inOut`},s),e.to(i,{rotation:`+=${360/26*3}`,duration:.6,ease:`back.out(1.6)`},s),e.fromTo(l[a],{scale:1},{scale:1.25,duration:.2,yoyo:!0,repeat:1,ease:`power2.out`},s),e.fromTo(u[a],{opacity:0,y:-18,scale:.6},{opacity:1,y:0,scale:1,duration:.45,ease:`back.out(2)`},s+.3)}),e.to(r,{opacity:0,duration:.3},`>0.3`),e},D=()=>{let e=J.timeline();return y.forEach((t,n)=>{let r=b(g[v[n]]);e.to(t,{keyframes:[{y:-64,duration:.3,ease:`power2.out`},{x:r,duration:.55,ease:`power2.inOut`},{y:0,duration:.3,ease:`bounce.out`}]},n*.12)}),e},O=(e,t)=>{w?.progress(1).kill(),S.forEach((e,t)=>J.set(e,{x:b(h[t])})),e>=1&&t&&C<1?w=E():T(e>=1),e>=2&&t&&C<2?(x(!1),w=D()):x(e>=2)};return{enter(){J.to(i,{rotation:`+=360`,duration:1.6,ease:`power2.inOut`})},step(e){O(e,e>C),C=e},final(){O(2,!1)},printing:t}}var Vd=v({default:()=>nf,encipher:()=>Zd,route:()=>Xd,stepRotors:()=>qd}),Hd=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`,Ud=[{name:`I`,wiring:`EKMFLGDQVZNTOWYHXUSPAIBRCJ`,notch:`Q`},{name:`II`,wiring:`AJDKSIRUXBLHWTMCQGZNPYFVOE`,notch:`E`},{name:`III`,wiring:`BDFHJLCPRTXVZNYEIWGAKMUSQO`,notch:`V`}],Wd=`YRUHQSLDPXNGOKMIEBFZCWVJAT`,Gd=[12,2,10],Kd=`QMJIDO MZWZJFJR`,qd=([e,t,n])=>{let r=Hd[t]===Ud[1].notch,i=Hd[n]===Ud[2].notch;return[(e+ +!!r)%26,(t+(r||i?1:0))%26,(n+1)%26]},Jd=(e,t,n)=>(Hd.indexOf(Ud[e].wiring[(n+t)%26])-t+26)%26,Yd=(e,t,n)=>(Ud[e].wiring.indexOf(Hd[(n+t)%26])-t+26)%26,Xd=(e,t)=>{let n=Hd.indexOf(t),r=Jd(2,e[2],n),i=Jd(1,e[1],r),a=Jd(0,e[0],i),o=Hd.indexOf(Wd[a]),s=Yd(0,e[0],o),c=Yd(1,e[1],s),l=Yd(2,e[2],c);return{i:n,j1:r,j2:i,j3:a,k3:o,k2:s,k1:c,k0:l,out:Hd[l]}},Zd=(e,t)=>{let n=[...e],r=``;for(let e of t)Hd.includes(e)?(n=qd(n),r+=Xd(n,e).out):r+=e;return r},Qd=23,$d=26,ef={ref:23,l:[100,256,412],r:[152,308,464],io:541},tf=e=>e*Qd+Qd/2;function nf(e,{printing:t}){let n=t=>e.querySelector(t),r=`http://www.w3.org/2000/svg`,i=n(`.ep-svg`);i.setAttribute(`viewBox`,`0 0 564 598`);let a=Array.from({length:$d},(e,t)=>{let n=Hd.indexOf(Wd[t]);return Hd[Math.min(t,n)]});n(`.ep-ref`).innerHTML=a.map(e=>`<span>${e}</span>`).join(``),e.querySelectorAll(`.ep-link`).forEach(e=>e.innerHTML=`<span>⇔</span>`.repeat($d)),n(`.ep-io`).innerHTML=Hd.split(``).map(e=>`<span>${e}</span>`).join(``);let o=[0,1,2].map(t=>{let n=e.querySelector(`.ep-s${t} .ep-tape`);return n.innerHTML=Array.from({length:52},(e,n)=>{let r=Hd[n%$d],i=Ud[t].wiring[n%$d];return`<div class="ep-row${r===Ud[t].notch?` ep-notch`:``}"><span>${r}</span><span>${i}</span></div>`}).join(``),n}),s=[0,1,2].map(e=>n(`.ep-w${e}`)),c=[0,0,0],l=e=>{c=[...e],o.forEach((t,n)=>J.set(t,{y:-e[n]*Qd})),s.forEach((t,n)=>t.textContent=Hd[e[n]])},u=(e,t,n,r,i=0)=>{t.forEach((t,a)=>{if(t===c[a])return;let l=t<c[a]&&c[a]-t>13?t+$d:t;e.to(o[a],{y:-l*Qd,duration:r,ease:`power2.inOut`,onComplete:()=>J.set(o[a],{y:-t*Qd})},n+a*i),e.add(()=>s[a].textContent=Hd[t],n+a*i+r)}),c=[...t]},d=()=>i.innerHTML=``,f=(e,t)=>{let n=document.createElementNS(r,`polyline`);return n.setAttribute(`points`,e.map(([e,t])=>`${e},${t}`).join(` `)),n.setAttribute(`class`,t),i.appendChild(n),n},p=(e,t,n)=>{let a=document.createElementNS(r,`circle`);return a.setAttribute(`cx`,e),a.setAttribute(`cy`,t),a.setAttribute(`r`,10.5),a.setAttribute(`class`,n),i.appendChild(a),a},m=(e,t,n,r=1)=>{d();let i=[[ef.io,tf(e.i)],[ef.r[2],tf(e.i)],[ef.l[2],tf(e.j1)],[ef.r[1],tf(e.j1)],[ef.l[1],tf(e.j2)],[ef.r[0],tf(e.j2)],[ef.l[0],tf(e.j3)],[ef.ref,tf(e.j3)]],a=[[ef.ref,tf(e.j3)],[ef.ref,tf(e.k3)]],o=[[ef.ref,tf(e.k3)],[ef.l[0],tf(e.k3)],[ef.r[0],tf(e.k2)],[ef.l[1],tf(e.k2)],[ef.r[1],tf(e.k1)],[ef.l[2],tf(e.k1)],[ef.r[2],tf(e.k0)],[ef.io,tf(e.k0)]],s=[[i,`ep-go`],[a,`ep-x`],[o,`ep-ret`]],c=n;for(let[e,n]of s){let i=f(e,n),a=i.getTotalLength();i.style.strokeDasharray=`${a}`,i.style.strokeDashoffset=t?`${a}`:`0`;let o=e.slice(n===`ep-go`?0:1).map(([e,t])=>p(e,t,n));if(!t)continue;let s=a/1e3*r;J.set(o,{opacity:0,scale:.4,transformOrigin:`50% 50%`}),t.to(i,{strokeDashoffset:0,duration:s,ease:`none`},c);let l=0;o.forEach((i,o)=>{o?l+=Math.hypot(e[o][0]-e[o-1][0],e[o][1]-e[o-1][1]):n!==`ep-go`&&(l+=Math.hypot(e[1][0]-e[0][0],e[1][1]-e[0][1])),t.to(i,{opacity:1,scale:1,duration:.18*r,ease:`back.out(3)`},c+l/a*s)}),c+=s}return c},h=n(`.ep-in`),g=n(`.ep-out`),_=[...e.querySelectorAll(`.ep-card`)],v=n(`.ep-key`),y=e=>{let t=e>=3&&e<6?3:e===6?4:e;_.forEach(e=>e.classList.toggle(`on`,Number(e.dataset.s)===t)),v.classList.toggle(`on`,e>=1)},b=(e,t)=>{let n=[...e];for(let e=0;e<t;e++)n=qd(n);return n},x=Array.from({length:4},(e,t)=>b(Gd,t+1)),S=x.map(e=>Xd(e,`E`)),C=e=>Array(e).fill(`E`).join(` `),w=e=>S.slice(0,e).map(e=>e.out).join(` `),T=Zd(Gd,Kd),E=b(Gd,Kd.replace(/ /g,``).length),D,O=0,k=e=>{if(D?.kill(),d(),y(e),e===0)l([0,0,0]),h.textContent=g.textContent=``;else if(e===1)l(Gd),h.textContent=g.textContent=``;else if(e>=2&&e<6){let t=e-1;l(x[t-1]),m(S[t-1]),h.textContent=C(t),g.textContent=w(t)}else l(E),h.textContent=Kd,g.textContent=T},A=e=>{if(D?.progress(1).kill(),y(e),D=J.timeline(),e===1)d(),u(D,Gd,.1,1.4,.25);else if(e>=2&&e<6){let t=e-1,n=x[t-1],r=S[t-1];d(),D.add(()=>{h.textContent=C(t)},0),u(D,n,.1,.5);let i=m(r,D,.75,1);D.add(()=>{g.textContent=w(t)},i),D.fromTo(g,{scale:1.2},{scale:1,duration:.4,ease:`back.out(3)`},i)}else if(e===6){d(),D.add(()=>{h.textContent=g.textContent=``},0),u(D,Gd,0,.8);let e=1,t=[...Gd],n=``,r=``;for(let i of Kd){n+=i;let a=n;if(i===` `){r+=` `;let t=r;D.add(()=>{h.textContent=a,g.textContent=t},e),e+=.25;continue}t=qd(t);let o=Xd(t,i);D.add(()=>h.textContent=a,e),u(D,t,e,.2),D.add(()=>m(o),e+.22),r+=o.out;let s=r;D.add(()=>g.textContent=s,e+.35),e+=.62}D.add(()=>d(),e+.2)}};return k(0),{step(e){e===O+1&&!t?A(e):k(e),O=e},leave(){D?.progress(1).kill()},final(){k(6)}}}var rf=v({default:()=>sf,otp:()=>of}),af=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`,of=(e,t)=>e.split(``).map((e,n)=>{let r=af.indexOf(e),i=t[n],a=r+i;return{c:e,p:r,k:i,kc:af[i],s:a,m:a%26,x:af[a%26]}});function sf(e,{printing:t}){let n=e.querySelector(`.op-calc`),r=of(n.dataset.clair,n.dataset.masque.split(` `).map(Number)),i=(e,t,n)=>`<tr class="${e}"><th>${t}</th>${r.map((e,t)=>`<td data-i="${t}">${n(e)}</td>`).join(``)}</tr>`,a=n.querySelector(`.op-tab`);a.innerHTML=i(`op-l`,`Clair :`,e=>e.c)+i(`op-n`,``,e=>e.p)+i(`op-kl`,`+ Masque :`,e=>e.kc)+i(`op-n`,``,e=>e.k)+i(`op-sep op-s`,`Somme :`,e=>e.s)+i(`op-m`,`mod 26 :`,e=>e.m)+i(`op-sep op-c`,`Chiffré :`,e=>e.x),a.querySelectorAll(`.op-m td`).forEach((e,t)=>e.classList.toggle(`op-wrap`,r[t].s>25));let o=e=>[...a.querySelectorAll(`.op-s td[data-i="${e}"], .op-m td[data-i="${e}"], .op-c td[data-i="${e}"]`)],s=r.flatMap((e,t)=>o(t)),c=document.createElement(`span`);c.className=`op-hl`,n.appendChild(c);let l=0,u,d=e=>{let t=n.offsetWidth/n.getBoundingClientRect().width||1,r=n.getBoundingClientRect(),i=e.getBoundingClientRect(),o=a.getBoundingClientRect();return{left:(i.left-r.left)*t-4,top:(o.top-r.top)*t-4,width:i.width*t+8,height:o.height*t+8}},f=()=>{u?.kill(),u=J.timeline(),r.forEach((e,t)=>{let n=a.querySelector(`.op-l td[data-i="${t}"]`),r=.2+t*.95,i=d(n);t===0?u.fromTo(c,{...i,opacity:0,scale:1.15},{opacity:1,scale:1,duration:.3},0):u.to(c,{left:i.left,duration:.3,ease:`power2.inOut`},r-.3),o(t).forEach((e,t)=>u.fromTo(e,{opacity:0,y:-10},{opacity:1,y:0,duration:.25,ease:`power2.out`},r+.1+t*.2))}),u.to(c,{opacity:0,duration:.4},`>0.4`)},p=e=>{u?.kill(),J.set(s,{opacity:+!!e,y:0}),J.set(c,{opacity:0})};return t||p(!1),{step(e){e>=1&&l<1?f():p(e>=1),l=e},final(){p(!0)}}}var cf=v({ALPHA:()=>lf,chiffre:()=>uf,default:()=>pf}),lf=`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 `,uf=(e,t)=>e.split(``).map((e,n)=>lf[(lf.indexOf(e)+lf.indexOf(t[n]))%37]).join(``),df=e=>e,ff=(e,t,n)=>{let r=performance.now(),i=a=>{let o=Math.min(1,(a-r)/n),s=Math.floor(o*t.length),c=t.slice(0,s);for(let e=s;e<t.length;e++)c+=df(lf[Math.random()*37|0]);e.textContent=c,o<1&&requestAnimationFrame(i)};requestAnimationFrame(i)};function pf(e,{printing:t}){e.querySelector(`.ox-grid`).innerHTML=lf.split(``).map(e=>`<span>${e===` `?`␣`:e}</span>`).join(``)+lf.split(``).map((e,t)=>`<i>${t}</i>`).join(``);let n=[...e.querySelectorAll(`.ox-card`)].map(e=>{let{clair:t,masque:n}=e.dataset,r=uf(t,n);return e.insertAdjacentHTML(`beforeend`,`<div class="ox-line"><b>Clair</b><code>${df(t)}</code></div><div class="ox-line"><b>Masque</b><code>${n}</code></div><div class="ox-line ox-c"><b>Chiffré</b><code></code></div>`),{el:e.querySelector(`.ox-c code`),value:df(r)}}),r=0,i=(e,t)=>n.forEach((n,i)=>{i<e?t&&i>=r?ff(n.el,n.value,900):n.el.textContent=n.value:n.el.textContent=``});return{step(e){i(e,e>r),r=e},final(){i(3,!1)},printing:t}}var mf=v({default:()=>hf});function hf(e,{printing:t}){let n=[...e.querySelectorAll(`.st-row`)].map(e=>({row:e,lab:e.querySelector(`.st-lab`),box:e.querySelector(`.st-box`),com:e.querySelector(`.st-com`),badges:[...e.querySelectorAll(`.st-b`)]})),r=e.querySelector(`.st-sep`),i=n.flatMap(e=>[e.lab,e.box,e.com,...e.badges]),a=e=>J.set([e.lab,e.box,e.com,...e.badges],{opacity:0}),o=e=>{J.set([e.lab,e.box,e.com,...e.badges],{opacity:1,x:0,y:0,scale:1}),e.box.style.clipPath=``},s=[],c=(e,t,n=0)=>{let i=J.timeline({delay:n});s.push(i),i.fromTo(e.lab,{opacity:0,x:-60},{opacity:1,x:0,duration:.6,ease:`power3.out`},0);let a={p:100};return i.set(e.box,{opacity:1,clipPath:`inset(0 100% 0 0)`},0),i.to(a,{p:0,duration:.7,ease:`power2.inOut`,onUpdate:()=>e.box.style.clipPath=`inset(0 ${a.p}% 0 0)`,onComplete:()=>e.box.style.clipPath=``},.2),i.fromTo(e.com,{opacity:0,y:12},{opacity:1,y:0,duration:.5,ease:`power2.out`},.7),e.badges.forEach((e,t)=>i.fromTo(e,{opacity:0,y:-26,scale:.6},{opacity:1,y:0,scale:1,duration:.6,ease:`back.out(2)`},.9+t*.16)),t===2&&i.fromTo(r,{scaleX:0,transformOrigin:`0 50%`},{scaleX:1,duration:.8,ease:`power2.inOut`},0),i};return t||((e,t)=>{n.forEach((t,n)=>{n<e?o(t):a(t)}),J.set(r,{scaleX:0})})(0,!1),{enter(){s.forEach(e=>e.kill()),s=[],n.forEach(a),J.set(r,{scaleX:0}),n.forEach((e,t)=>c(e,t,.15+t*.55))},leave(){s.forEach(e=>e.progress(1).kill()),s=[]},final(){J.set(i,{clearProps:`opacity,transform`}),n.forEach(e=>e.box.style.clipPath=``),J.set(r,{clearProps:`transform`})}}}var gf=v({default:()=>_f});function _f(e){let t=[...e.querySelectorAll(`.cq-col`)],n=[...e.querySelectorAll(`.cq-ne`)],r=[...e.querySelectorAll(`.cq-tab tbody tr`)],i=[...t,...n,...r],a;return{enter(){a?.kill(),J.set(i,{clearProps:`transform,opacity`}),a=J.timeline(),t.forEach((e,t)=>{a.from(e,{opacity:0,y:30,duration:.6,ease:`power3.out`},.15+t*.6),n[t]&&a.from(n[t],{opacity:0,scale:2.4,duration:.45,ease:`back.out(2.5)`},.55+t*.6)}),a.from(r,{opacity:0,x:20,duration:.4,ease:`power2.out`,stagger:.08},1.7)},leave(){a?.progress(1)},final(){a?.kill(),J.set(i,{clearProps:`transform,opacity`})}}}var vf=v({default:()=>yf});function yf(e){let t=[...e.querySelectorAll(`.ob-item`)],n=[...e.querySelectorAll(`.ob-prims .prim`)],r=e.querySelector(`.ob-photo`),i=e.querySelector(`.ob-auth`),a,o=[...t,...n,r,i];return{enter(){a?.kill(),J.set(o,{clearProps:`transform,opacity`}),a=J.timeline(),a.from(r,{opacity:0,x:40,duration:.8,ease:`power3.out`},0),t.forEach((e,t)=>a.from(e,{opacity:0,y:24,duration:.6,ease:`power3.out`},.25+t*.45)),a.from(n,{opacity:0,y:-18,scale:.7,duration:.5,ease:`back.out(2)`,stagger:.08},.55),a.from(i,{opacity:0,x:-20,duration:.6,ease:`power3.out`},1.9)},leave(){a?.progress(1)},final(){a?.kill(),J.set(o,{clearProps:`transform,opacity`})}}}var bf=v({default:()=>xf});function xf(e,{printing:t}){let n=e.querySelector(`.se-q1`),r=e.querySelector(`.se-mid`),i=e.querySelector(`.se-arrow line`),a=e.querySelector(`.se-arrow polygon`),o=e.querySelector(`.se-q2 blockquote`),s=e.querySelector(`.se-key`),c=e.querySelector(`.se-dots`),l=e.querySelector(`.se-rest`),u=Math.hypot(340,370);i.style.strokeDasharray=`${u}`;let d,f,p=0,m=(e,t)=>{f?.kill(),t?(f=J.timeline(),f.to(c,{opacity:0,duration:.25}),f.fromTo(l,{opacity:0,x:-16},{opacity:1,x:0,duration:.5,ease:`power3.out`}),f.fromTo(r,{opacity:0},{opacity:1,duration:.5}),f.set(i,{opacity:1}),f.fromTo(i,{strokeDashoffset:u},{strokeDashoffset:0,duration:.9,ease:`power2.inOut`}),f.fromTo(a,{opacity:0},{opacity:1,duration:.15},`-=0.1`),f.fromTo(o,{opacity:0,y:20},{opacity:1,y:0,duration:.5,ease:`power3.out`},`-=0.05`),f.fromTo(s,{opacity:0,scale:.2,rotation:-200},{opacity:1,scale:1,rotation:0,duration:.9,ease:`back.out(1.7)`},`-=0.25`)):(J.set(i,{strokeDashoffset:e?0:u,opacity:+!!e}),J.set(a,{opacity:+!!e}),J.set([r,o,s,l],{opacity:+!!e,clearProps:e?`transform`:``}),J.set(c,{opacity:+!e}))};return{enter(){d?.kill(),J.set(n,{clearProps:`transform,opacity`}),d=J.timeline(),d.from(n,{opacity:0,y:20,duration:.7,ease:`power3.out`},.1)},step(e){m(e>=1,e>p&&!t),p=e},final(){d?.kill(),J.set(n,{clearProps:`transform,opacity`}),m(!0,!1)}}}var Sf=v({default:()=>Cf});function Cf(e){let t=[...e.querySelectorAll(`.st-p`)],n;return{enter(){n?.kill(),J.set(t,{clearProps:`transform,opacity`}),n=J.from(t,{opacity:0,y:40,duration:.7,ease:`power3.out`,stagger:.09,delay:.15})},leave(){n?.progress(1)},final(){n?.kill(),J.set(t,{clearProps:`transform,opacity`})}}}var wf=v({default:()=>Tf});function Tf(e){let t=[...e.querySelectorAll(`.vf-row`)],n,r=t.flatMap(e=>[e.querySelector(`.vf-txt`),...e.querySelectorAll(`img`)]);return{enter(){n?.kill(),J.set(r,{clearProps:`transform,opacity`}),n=J.timeline(),t.forEach((e,t)=>{let r=.2+t*.55;n.from(e.querySelector(`.vf-txt`),{opacity:0,x:-30,duration:.6,ease:`power3.out`},r),n.from(e.querySelectorAll(`img`),{opacity:0,scale:.3,y:14,duration:.55,ease:`back.out(2.2)`,stagger:.06},r+.2)})},leave(){n?.progress(1)},final(){n?.kill(),J.set(r,{clearProps:`transform,opacity`})}}}var Ef=v({default:()=>Df});function Df(e,{printing:t}){let n=[...e.querySelectorAll(`.vd-it`)],r=[...e.querySelectorAll(`.vd-a`)],i=e.querySelector(`.vd-arrows`),a=e=>{let t=i.getBoundingClientRect(),r=n[e].getBoundingClientRect(),a=t.height?i.offsetHeight/t.height:1;return Math.max(0,(r.bottom-t.top)*a-30)},o=e=>r.forEach((t,n)=>J.fromTo(t,{height:e?0:a(n),opacity:+!e},{height:a(n),opacity:1,duration:e?.7:0,delay:e?.3+n*.35:0,ease:`power2.out`,overwrite:!0}));return{enter(){o(!t)},final(){o(!1)}}}var Of=v({default:()=>Mf}),kf=`Hello, World!`,Af=e=>btoa(String.fromCharCode(...e)),jf=e=>[...e].map(e=>e.toString(16).padStart(2,`0`)).join(``);function Mf(e,{printing:t}){let n=new TextEncoder().encode(kf);e.querySelector(`.co-b64`).textContent=Af(n);let r=e.querySelector(`.co-key`),i=e.querySelector(`.co-ct`),a=async e=>{let t=crypto.getRandomValues(new Uint8Array(16)),a=crypto.getRandomValues(new Uint8Array(12)),o=await crypto.subtle.importKey(`raw`,t,`AES-GCM`,!1,[`encrypt`]),s=new Uint8Array(await crypto.subtle.encrypt({name:`AES-GCM`,iv:a},o,n));r.textContent=jf(t),e?Mu(i,Af(s),600):i.textContent=Af(s)};return a(!1).catch(()=>i.textContent=`(WebCrypto indisponible)`),{enter(){t||a(!0).catch(()=>{})}}}var Nf=v({default:()=>Lf}),Pf=`F96D E8C2 27A2 59C8 7EE1 DA2A ED57 C93F E5DA 36ED 4EC8 7EF2 C63A AE5B 9A7E FFD6 73BE 4ACF 7BE8 923C AB1E CE7A F2DC F7AE 29A3 DA44 F235 A24C 963F F0DF 3CA3 599A 70E5 DA36 BF1E CE77 F8DC 34BE 129A 6CF4 D126 BF5B 9A7C FEDF 3EB8 50D3 7CF0 C63A A250 9A76 FF92 27A5 5B9A 6FE3 D720 8E3B 41F7 C2D9 0A6E 5D18 B7F4 E09C 3A51 96D2`.split(` `),Ff=new Set([6,18,26,38,46]),If=8;function Lf(e,{printing:t}){let n=e.querySelector(`.cm-hex`),r=e.querySelector(`.cm-tag`),i=Pf.map((e,r)=>{let i=document.createElement(`span`);return i.className=`cm-g`,i.textContent=t?e.toLowerCase():`····`,n.append(i,document.createTextNode(r%If===7?`
`:` `)),i}),a=i.filter((e,t)=>Ff.has(t)),o=[],s=[],c,l=()=>{o.forEach(e=>e()),s.forEach(clearTimeout),c?.kill(),o=[],s=[]},u=()=>{l(),i.forEach((e,t)=>e.textContent=Pf[t].toLowerCase()),a.forEach(e=>e.classList.add(`hot`)),J.set([r,...a],{clearProps:`transform,opacity`})};return{enter(){if(t)return u();l(),a.forEach(e=>e.classList.remove(`hot`)),J.set(r,{opacity:0}),i.forEach((e,t)=>{e.textContent=`····`,s.push(setTimeout(()=>o.push(Mu(e,Pf[t].toLowerCase(),500+Math.random()*500)),t*22))}),c=J.timeline({delay:2.3}),c.add(()=>a.forEach(e=>e.classList.add(`hot`)),0),c.fromTo(a,{scale:1.6},{scale:1,duration:.5,ease:`back.out(2)`,stagger:.12,immediateRender:!1},0),c.fromTo(r,{opacity:0,y:-60,rotation:-12},{opacity:1,y:0,rotation:-4,duration:.7,ease:`bounce.out`,immediateRender:!1},.8)},leave(){l(),i.forEach(e=>e.textContent=`····`),a.forEach(e=>e.classList.remove(`hot`)),J.set(r,{opacity:0})},final:u}}var Rf=v({default:()=>qf}),zf=`F96D E8C2 27A2 59C8 7EE1 DA2A ED57 C93F E5DA 36ED 4EC8 7EF2 C63A AE5B 9A7E FFD6 73BE 4ACF 7BE8 923C AB1E CE7A F2DC F7AE 29A3 DA44 F235 A24C 963F F0DF 3CA3 599A 70E5 DA36 BF1E CE77 F8DC 34BE 129A 6CF4 D126 BF5B 9A7C FEDF 3EB8 50D3 7CF0 C63A A250 9A76 FF92 27A5 5B9A 6FE3 D720 8E3B`.split(` `),Bf=new Set([6,18,26,38,46]),Vf=14,Hf=`Bonjour`,Uf=new TextEncoder,Wf=e=>e.toString(16).padStart(2,`0`),Gf=e=>e.toString(2).padStart(8,`0`),Kf=e=>parseInt(e,16).toString(2).padStart(4,`0`);function qf(e,{printing:t}){let n=e.querySelector(`.oc-hex`),r=zf.map((e,t)=>{let r=document.createElement(`span`);return r.className=`oc-g`+(Bf.has(t)?` hot`:``),r.textContent=e,n.append(r,document.createTextNode(t%8==7?`
`:` `)),r})[Vf],i=e.querySelector(`.oc-loupe`),a=[...e.querySelectorAll(`.oc-rays line`)],o=e.querySelector(`.oc-zoom`),s=[...e.querySelectorAll(`.oc-nib`)],c=e.querySelector(`.oc-braces`),l=e.querySelector(`.oc-utf`),u=e.querySelector(`.oc-band`);for(let t of e.querySelectorAll(`.oc-utf-r`)){let e=[...Uf.encode(t.dataset.c)];t.innerHTML=`<span class="c"></span><span>${e.map(Wf).join(` `)}</span><span class="n">${e.length} octets</span>`,t.firstChild.textContent=t.dataset.c}let d=[...Uf.encode(Hf)].map((e,t)=>{let n=(e,t)=>{let n=document.createElement(`span`);return n.className=`oc-cell `+e,n.textContent=t,u.appendChild(n),n};return{chr:n(`chr`,Hf[t]),hx:n(`hx`,Wf(e)),bn:n(`bin`,Gf(e)),b:e}}),f=()=>{let e=n.offsetLeft+r.offsetLeft+r.offsetWidth/2,t=n.offsetTop+r.offsetTop+r.offsetHeight/2;J.set(i,{left:e,top:t});let s=o.offsetLeft-20,c=o.offsetTop;a[0].setAttribute(`x1`,e+50),a[0].setAttribute(`y1`,t-20),a[0].setAttribute(`x2`,s),a[0].setAttribute(`y2`,c+10),a[1].setAttribute(`x1`,e+50),a[1].setAttribute(`y1`,t+20),a[1].setAttribute(`x2`,s),a[1].setAttribute(`y2`,c+150)},p=0,m=[],h=(e,t)=>{let n=+!!t;f(),r.classList.toggle(`target`,e>=1),J.to(i,{opacity:+(e>=1),scale:e>=1?1:1.6,duration:.5*n,ease:`back.out(1.6)`}),J.to(a,{opacity:+(e>=1),duration:.4*n,delay:e>=1?.3*n:0}),J.to(o,{opacity:+(e>=1),x:e>=1?0:-30,duration:.5*n,delay:e>=1?.35*n:0}),s.forEach((n,r)=>{let i=n.dataset.h,a=e>=2?Kf(i):i;n.textContent!==a&&(n.classList.toggle(`bits`,e>=2),t&&e>=2?J.delayedCall(r*.18,()=>{n.textContent=a,J.fromTo(n,{rotationX:90},{rotationX:0,duration:.35,ease:`power2.out`})}):n.textContent=a)}),J.to(c,{opacity:+(e>=2),duration:.4*n,delay:e>=2?.8*n:0}),J.to(u,{opacity:+(e>=3),y:e>=3?0:20,duration:.45*n}),d.forEach((r,i)=>{J.to(r.chr,{opacity:+(e>=3),y:e>=3?0:-14,duration:.3*n,delay:e>=3?i*.07*n:0}),J.set([r.hx,r.bn],{opacity:+(e>=4)}),t&&e>=4&&p<4?(r.hx.textContent=`··`,r.bn.textContent=``,J.delayedCall(i*.12,()=>m.push(Mu(r.hx,Wf(r.b),450))),J.delayedCall(1.1+i*.12,()=>{r.bn.textContent=Gf(r.b),J.fromTo(r.bn,{opacity:0,y:-10},{opacity:1,y:0,duration:.3})})):e>=4&&(r.hx.textContent=Wf(r.b),r.bn.textContent=Gf(r.b))}),J.to(l,{opacity:+(e>=5),scale:e>=5?1:.9,duration:.45*n,ease:`back.out(1.6)`}),p=e};return{enter(){m.forEach(e=>e()),m=[],p=0,h(0,!1)},step(e){h(e,!t&&e>p)},final(){h(5,!1)}}}var Jf=e=>e[Math.random()*e.length|0],Yf={name:`scrambleText`,init(e,t){this.t=e,this.from=e.textContent??``,this.to=t.text,this.chars=t.chars||`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,this.tweenLength=t.tweenLength!==!1},render(e,t){if(e<=0)return void(t.t.textContent=t.from);if(e>=1)return void(t.t.textContent=t.to);let n=t.tweenLength?Math.round(t.from.length+(t.to.length-t.from.length)*e):t.to.length,r=Math.floor(t.to.length*e),i=t.to.slice(0,Math.min(r,n));for(let e=i.length;e<n;e++)i+=t.to[e]===` `?` `:Jf(t.chars);t.t.textContent=i}},Xf=!1,Zf=()=>{Xf||=(J.registerPlugin(Yf),!0)},Qf={"binary-circle-check":{width:640,height:512,primary:[`M496 512C575.529 512 640 447.529 640 368 640 288.471 575.529 224 496 224 416.471 224 352 288.471 352 368 352 447.529 416.471 512 496 512ZM563.3 347.3 491.3 419.3C485.1 425.5 474.9 425.5 468.7 419.3L428.7 379.3C422.5 373.1 422.5 362.9 428.7 356.7 434.9 350.5 445.1 350.5 451.3 356.7L480 385.4 540.7 324.7C546.9 318.5 557.1 318.5 563.3 324.7 569.5 330.9 569.5 341.1 563.3 347.3Z`],secondary:[`M336 32 336 160 352 160C369.7 160 384 174.3 384 192 384 209.7 369.7 224 352 224L304 224 256 224C238.3 224 224 209.7 224 192 224 174.3 238.3 160 256 160L272 160 272 76.4 266.1 78.4C249.3 84 231.2 74.9 225.6 58.2 220 41.5 229.1 23.3 245.8 17.7L293.8 1.7C303.6-1.6 314.4 0 322.7 6 331 12 336 21.7 336 32ZM112 320 112 448 128 448C145.7 448 160 462.3 160 480 160 497.7 145.7 512 128 512L80 512 32 512C14.3 512 0 497.7 0 480 0 462.3 14.3 448 32 448L48 448 48 364.4 42.1 366.4C25.3 372 7.2 362.9 1.6 346.2-4 329.5 5.1 311.3 21.8 305.7L69.8 289.7C79.6 286.4 90.3 288.1 98.6 294.1 106.9 300.1 111.9 309.8 111.9 320.1ZM0 64C0 28.7 28.7 0 64 0L128 0C163.3 0 192 28.7 192 64L192 160C192 195.3 163.3 224 128 224L64 224C28.7 224 0 195.3 0 160L0 64ZM128 64 64 64 64 160 128 160 128 64ZM256 288 320 288C326.2 288 332.2 288.9 337.9 290.5 326.7 313.4 320.3 339.1 320 366.2L320 352 256 352 256 448 320 448 320 448 339.2 448C347 463.3 357 477.3 368.7 489.5 357 503.3 339.5 512 320 512L256 512C220.7 512 192 483.3 192 448L192 352C192 316.7 220.7 288 256 288ZM320 384 320 369.8C320 374.6 320.3 379.3 320.7 384L320 384Z`]},fingerprint:{width:512,height:512,primary:[`M48 256C48 141.1 141.1 48 256 48 319.1 48 375.6 76.1 413.8 120.5 422.4 130.6 437.6 131.7 447.6 123.1 457.6 114.5 458.8 99.3 450.2 89.3 403.3 34.6 333.7 0 256 0 114.6 0 0 114.6 0 256L0 296C0 309.3 10.7 320 24 320 37.3 320 48 309.3 48 296L48 256ZM506.5 203.1C503.8 190.1 491 181.8 478.1 184.6 465.2 187.4 456.8 200.1 459.6 213 462.5 226.9 464.1 241.3 464.1 256.1L464.1 296.1C464.1 309.4 474.8 320.1 488.1 320.1 501.4 320.1 512.1 309.4 512.1 296.1L512.1 256C512.1 237.9 510.2 220.2 506.6 203.1ZM352 256C352 203 309 160 256 160 203 160 160 203 160 256L160 280.9C160 316.8 155.4 352.4 146.2 387 142.4 401.3 152.9 416 167.7 416 177.2 416 185.6 409.8 188.1 400.6 198.6 361.6 204 321.4 204 280.9L204 256C204 227.3 227.3 204 256 204 284.7 204 308 227.3 308 256L308 280.9C308 317.2 304.5 353.3 297.6 388.8 294.9 402.7 305.3 416 319.4 416 329.6 416 338.4 409 340.4 399 348.1 360.2 352 320.7 352 280.9L352 256Z`],secondary:[`M256 80C353.2 80 432 158.8 432 256L432 280.9C432 308.6 430.3 336.2 427 363.6 425.6 375.3 415.5 383.9 403.7 383.9 389 383.9 377.8 370.7 379.5 356.1 382.5 331.2 383.9 306 383.9 280.8L383.9 256C383.9 185.3 326.6 128 255.9 128 244.3 128 233.1 129.5 222.5 132.4 211.9 135.3 200.2 132.8 193.1 124.5 182.7 112.4 186.2 93.6 201.4 88.6 218.6 83 237 80 256 80ZM150.7 148.7C158.9 158.3 158.2 172.5 150.9 182.9 136.5 203.6 128 228.8 128 256L128 280.9C128 309.8 124.7 338.6 118.3 366.7 115.9 377 106.6 384 96.1 384 80.2 384 68.8 368.4 72.2 352.9 77.4 329.3 80 305.2 80 281L80 256C80 215.4 93.7 178 116.8 148.3 125.3 137.3 141.6 138.1 150.7 148.7ZM280 256 280 280.9C280 346.7 267.9 411.9 244.3 473.3L238.4 488.6C233.6 501 219.8 507.1 207.4 502.4 195 497.7 188.9 483.8 193.6 471.4L199.5 456.1C221 400.2 232 340.8 232 280.9L232 256C232 242.7 242.7 232 256 232 269.3 232 280 242.7 280 256Z`]},key:{width:512,height:512,primary:[`M160 176C160 78.8 238.8 0 336 0 433.2 0 512 78.8 512 176 512 273.2 433.2 352 336 352 317.3 352 299.2 349.1 282.3 343.7L168.3 229.7C162.9 212.8 160 194.7 160 176L160 176ZM376 96C353.9 96 336 113.9 336 136 336 158.1 353.9 176 376 176 398.1 176 416 158.1 416 136 416 113.9 398.1 96 376 96Z`],secondary:[`M168.3 229.7 282.3 343.7C282.3 343.7 282.3 343.7 282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384L192 384 192 424C192 437.3 181.3 448 168 448L128 448 128 488C128 501.3 117.3 512 104 512L24 512C10.75 512 0 501.3 0 488L0 408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C168.3 229.7 168.3 229.7 168.3 229.7L168.3 229.7Z`]},shuffle:{width:883347,height:600959,primary:[`M871628.0 467521.0L750380.0 590118.0C727188.0 613295.0 687548.0 596849.0 687548.0 564060.0L687548.0 491893.0L589430.0 491893.0C574010.0 491893.0 559448.0 484612.0 550204.0 472257.0L270597.0 99483.0L147968.0 99483.0C120852.0 99483.0 98917.0 77563.0 98917.0 50431.0C98917.0 23300.0 120852.0 1380.0 147968.0 1380.0L295122.0 1380.0C310543.0 1380.0 325105.0 8661.0 334348.0 21016.0L613956.0 393791.0L687487.0 393791.0L687487.0 318834.0C687487.0 286046.0 727142.0 269645.0 748954.0 292821.0L871567.0 415419.0C887264.0 431192.0 887264.0 454492.0 871628.0 467521.0Z`],secondary:[`M612641.0 98102.0L735270.0 98102.0C762386.0 98102.0 784321.0 76167.0 784321.0 49051.0C784321.0 21935.0 762386.0 0.0 735270.0 0.0L588116.0 0.0C572695.0 0.0 558133.0 7281.0 548890.0 19636.0L440962.0 163555.0L502276.0 245256.0L612641.0 98102.0ZM11610.0 467520.0L132858.0 590118.0C156050.0 613294.0 195690.0 596848.0 195690.0 564059.0L195690.0 490513.0L293808.0 490513.0C309228.0 490513.0 323790.0 483232.0 333034.0 470877.0L440962.0 326957.0L381027.0 245256.0L269282.0 392410.0L195751.0 392410.0L195751.0 318787.0C195751.0 286000.0 156096.0 269598.0 134284.0 292775.0L13035.0 415372.0C-4179.0 429812.0 -4026.0 453111.0 11610.0 467520.0Z`]},"user-tie-hair-long":{width:448,height:512,primary:[`M70.63 272C58.13 272 48 261.9 48 249.4 48 243.4 50.38 237.6 54.63 233.4L58.51 229.5C82.51 205.5 96 172.9 96 138.1L96 128C96 57.31 153.3 0 224 0 294.6 0 351.8 57.1 352 127.6L352 128.4 352 128.6 352 138.1C352 172.9 365.5 205.5 389.5 229.5L393.4 233.4C397.6 237.6 400 243.4 400 249.4 400 261.9 389.9 272 377.4 272L70.63 272ZM128 112 128 160C128 213 170.1 256 224 256 277 256 320 213 320 160L320 96 312 96C289.2 96 269.2 84.09 257.9 66.16 240.1 93.66 210.6 112 176 112L128 112ZM209.1 359.2 176 304 272 304 238.9 359.2 272.2 483.1 311.7 321.9C388.9 333.9 448 400.7 448 481.3 448 498.2 434.2 512 417.3 512L30.72 512C13.75 512 0 498.2 0 481.3 0 400.7 59.09 333.9 136.3 321.9L175.8 483.1 209.1 359.2Z`],secondary:[`M312 96 320 96 320 160C320 213 277 256 224 256 170.1 256 128 213 128 160L128 112 176 112C210.6 112 240.1 93.66 257.9 66.16 269.2 84.1 289.2 96 312 96L312 96Z`]},"user-tie-hair":{width:448,height:512,primary:[`M97.66 107.4C107.5 46.48 160.3 0 224 0 283.6 0 333.8 40.79 347.1 96L312 96C289.2 96 269.2 84.09 257.9 66.16 240.1 93.66 210.6 112 176 112L120 112C112.1 112 104.5 110.3 97.66 107.4L97.66 107.4ZM209.1 359.2 176 304 272 304 238.9 359.2 272.2 483.1 311.7 321.9C388.9 333.9 448 400.7 448 481.3 448 498.2 434.2 512 417.3 512L30.72 512C13.75 512 0 498.2 0 481.3 0 400.7 59.09 333.9 136.3 321.9L175.8 483.1 209.1 359.2Z`],secondary:[`M257.9 66.16C269.2 84.1 289.2 96 312 96L347.1 96C350.6 106.2 352 116.1 352 128 352 198.7 294.7 256 224 256 153.3 256 96 198.7 96 128 96 120.1 96.57 114.1 97.65 107.4 104.5 110.4 112.1 112 120 112L176 112C210.6 112 240.1 93.66 257.9 66.16L257.9 66.16Z`]}},$f=1920,ep=1792,Y=e=>e/60,X={bg:`var(--cp-bg, #F6F7F9)`,dot:`var(--cp-dot, rgba(15, 23, 42, 0.07))`,card:`var(--cp-card, #FFFFFF)`,cardBorder:`var(--cp-card-border, #E7EAEE)`,rail:`var(--cp-rail, #E3E6EB)`,ink:`var(--cp-ink, #0F172A)`,inkSoft:`var(--cp-ink-soft, #334155)`,muted:`var(--cp-muted, #8A94A3)`,faint:`var(--cp-faint, #C3C9D2)`,hashBox:`var(--cp-hash-box, #F3F5F8)`},tp={badge:`'Helvetica Neue', Helvetica, Inter, Arial, sans-serif`,sans:`var(--sans, Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif)`,mono:`var(--mono, 'JetBrains Mono', 'SF Mono', Menlo, monospace)`},np={w:63.976,h:28.668,radius:.16667,stroke:3},rp=[45.79,20.09,29.745,29.745],ip={aes:{label:`AES`,color:`#000000`,fontPt:20,icon:`key`,iconColor:`#7F7F7F`,iconBox:rp,ink:`var(--cp-ink, #111827)`},rsaPub:{label:`RSA`,color:`#B22600`,fontPt:20,icon:`key`,iconColor:`#92D050`,iconBox:rp,ink:`#B22600`},rsaPriv:{label:`RSA`,color:`#B22600`,fontPt:20,icon:`key`,iconColor:`#C00000`,iconBox:rp,ink:`#B22600`},sha:{label:`SHA`,color:`#0070C0`,fontPt:20,icon:`fingerprint`,iconColor:`#0070C0`,iconBox:[56.379,22.207,27.656,27.656],ink:`#0070C0`},dh:{label:`DH`,color:`#7030A0`,fontPt:20,icon:`shuffle`,iconColor:`#7030A0`,iconBox:[54.659,23.526,30.835,20.977],ink:`#7030A0`},prng:{label:`PRNG`,color:`#FF9900`,fontPt:16,icon:`binary-circle-check`,iconColor:`#FF9900`,iconBox:[60.199,22.153,34.321,27.457],ink:`#C26F00`}},ap={alice:{icon:`user-tie-hair-long`,color:`#941100`},bob:{icon:`user-tie-hair`,color:`#FF9900`}},op=.4,sp=`ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789@#$%&*+=?`,cp=`0123456789abcdef`,lp=`power3.inOut`,up=`power3.in`,Z=(e,t,n,r)=>{let i=document.createElement(e);return t&&(i.className=t),typeof n==`string`?i.setAttribute(`style`,n):n&&Object.assign(i.style,n),r!==void 0&&(i.innerHTML=r),i},dp=`http://www.w3.org/2000/svg`,fp=(e,t)=>{let n=document.createElementNS(dp,e);for(let[e,r]of Object.entries(t))r!==void 0&&(typeof r==`string`&&r.startsWith(`var(`)?n.style.setProperty(e,r):n.setAttribute(e,String(r)));return n},pp=(e,t,n)=>{let r=Qf[e];if(!r)throw Error(`Icône inconnue : ${e}`);let i=n*r.width/r.height,a=fp(`svg`,{viewBox:`0 0 ${r.width} ${r.height}`,width:i,height:n,"aria-hidden":`true`});a.style.overflow=`visible`,a.style.display=`block`;let o=fp(`g`,{fill:t});o.style.opacity=String(op),r.secondary.forEach(e=>o.appendChild(fp(`path`,{d:e})));let s=fp(`g`,{fill:t});return r.primary.forEach(e=>s.appendChild(fp(`path`,{d:e}))),a.append(o,s),{svg:a,sec:o}},mp=(e,t,n=100,r=64)=>{let i=r/np.h,a=np.w*i,o=np.radius*np.h*i,s=np.stroke*i,[c,l,u,d]=e.iconBox.map(e=>e*i),f=Z(`div`,`cp-badge`,{left:`${t-a/2}px`,top:`${n-r/2}px`,width:`${a}px`,height:`${r}px`}),p=Z(`div`,`cp-ring`,{inset:`${-s/2-2}px`,borderRadius:`${o+s/2+2}px`,border:`2px solid ${e.color}`}),m=Z(`div`,``,{position:`absolute`,left:`${c}px`,top:`${l}px`,width:`${u}px`,height:`${d}px`}),{svg:h,sec:g}=pp(e.icon,e.iconColor,d);m.appendChild(h);let _=Z(`div`,`cp-face`,{inset:`${-s/2}px`,border:`${s}px solid #FFFFFF`,borderRadius:`${o+s/2}px`,background:e.color,boxShadow:`0 ${1.575*i}px ${3.15*i}px rgba(0,0,0,.38)`,fontSize:`${e.fontPt*i}px`});return _.textContent=e.label,f.append(p,m,_),{el:f,ring:p,sec:g,w:a}},hp=(e,t=`plain`,n=X.ink,r={})=>{let i=Z(`div`,`cp-tok`);i.style.opacity=`0`;let a=Z(`div`,`cp-chip`);a.dataset.kind=t,a.style.setProperty(`--c`,n),r.minWidth&&(a.style.minWidth=`${r.minWidth}px`),a.textContent=e,i.appendChild(a);let o;return r.caption&&(o=Z(`div`,`cp-caption`),o.textContent=r.caption,i.appendChild(o)),{el:i,chip:a,caption:o}},gp=(e,t,n,r={})=>{let i=Z(`div`,`cp-bracket${r.small?` cp-small`:``}`,{left:`${e-t/2}px`,width:`${t}px`});r.top!==void 0&&(i.style.top=`${r.top}px`);let a=fp(`svg`,{width:t,height:12});a.appendChild(fp(`path`,{d:`M1 0 V4 Q1 6 3 6 H${t/2-6} Q${t/2} 6 ${t/2} 11 Q${t/2} 6 ${t/2+6} 6 H${t-3} Q${t-1} 6 ${t-1} 4 V0`,fill:`none`,stroke:X.faint,"stroke-width":1.5,"stroke-linecap":`round`}));let o=Z(`div`,`cp-blabel`),s=n.map((e,t)=>{let n=Z(`span`,``,t===0?{}:{position:`absolute`,left:`0`,right:`0`,top:`0`,opacity:`0`});return n.textContent=e,o.appendChild(n),n});return i.append(a,o),{el:i,labels:s}},_p=e=>{let t=Z(`div`,`cp-trail`);return t.dataset.color=e,t},vp=(e,t,n)=>{let r=Z(`div`,`cp-hint`,{left:`${e-120}px`,color:n});return r.textContent=t,r},yp=(e,t,n,r,i)=>{let a=Z(`div`,`cp-person`,{left:`${e-60}px`}),o=Z(`div`,``,{display:`flex`,justifyContent:`center`}),{svg:s,sec:c}=pp(n,r,72);o.appendChild(s);let l=Z(`div`,`cp-pname`,void 0,`${t} <span class="cp-pnote">· ${i}</span>`);return a.append(o,l),{el:a,icon:o,sec:c}},bp=(e,t,n,r=[150,ep-150])=>{let i=Z(`div`,`cp-lane`);i.setAttribute(`aria-label`,e);let a=Z(`div`,`cp-label`);if(a.append(Z(`span`,`cp-dot`,{background:t}),Object.assign(Z(`span`),{textContent:e})),n){let e=typeof n==`string`?Object.assign(Z(`span`,`cp-sub`),{textContent:n}):n;a.append(e)}let o=fp(`svg`,{class:`cp-rail`,width:ep,height:188});return o.append(fp(`line`,{x1:r[0],x2:r[1],y1:100,y2:100,stroke:X.rail,"stroke-width":1.5,"stroke-dasharray":`2 7`,"stroke-linecap":`round`}),fp(`circle`,{cx:r[0],cy:100,r:3,fill:X.faint}),fp(`circle`,{cx:r[1],cy:100,r:3,fill:X.faint})),i.append(a,o),i},xp=(e,t)=>{let n=Z(`span`,`cp-sub`,{display:`inline-block`,width:`220px`,height:`13px`}),r=Z(`span`,``,{position:`absolute`,left:`0`,top:`0`});r.textContent=e;let i=Z(`span`,``,{position:`absolute`,left:`0`,top:`0`,opacity:`0`});return i.textContent=t,n.append(r,i),{el:n,a:r,b:i}},Sp={immediateRender:!1},Cp=Y(16),wp={opacity:1,scale:1,filter:`blur(0px)`},Tp={opacity:0,scale:.82,filter:`blur(5px)`},Ep=(e,t,n,r,i={})=>e.set(t.el,{x:r,...wp,...i},n),Dp=(e,t,n,r,i,a,o={})=>{let s=Y(n),c=Y(r-n),l=o.ease??(o.emerge?`expo.out`:`power3.inOut`);return e.fromTo(t.el,{x:i},{x:a,duration:c,ease:l,...Sp},s),o.emerge?e.fromTo(t.el,Tp,{...wp,duration:Cp,ease:`power3.out`,...Sp},s):e.set(t.el,wp,s),o.absorb&&e.fromTo(t.el,wp,{...Tp,duration:Cp,ease:up,...Sp},s+c-Cp),e},Op=(e,t,n,r,i,a)=>{let o=i===`in`?{opacity:0,scale:.94,filter:`blur(4px)`}:wp,s=i===`in`?wp:{opacity:0,scale:.94,filter:`blur(4px)`};return a!==void 0&&e.set(t.el,{x:a},Y(n)),e.fromTo(t.el,o,{...s,duration:Y(r-n),ease:i===`in`?`power3.out`:up,...Sp},Y(n))},kp=(e,t,n)=>{let r=Y(n);return e.fromTo(t.el,{scale:1},{scale:1.045,duration:.13,ease:`power2.out`,yoyo:!0,repeat:1,...Sp},r),e.set(t.ring,{opacity:.34,scale:1},r),e.to(t.ring,{opacity:0,scale:1.18,duration:.65,ease:`power2.out`},r),e.fromTo(t.sec,{opacity:op},{opacity:.78,duration:.16,ease:`sine.inOut`,yoyo:!0,repeat:1,...Sp},r),e},Ap=(e,t,n,r,i,a=sp,o)=>(o&&e.set(t.chip,{attr:{"data-kind":o}},Y(n)),e.to(t.chip,{duration:Y(r-n),ease:`none`,scrambleText:{text:i,chars:a,revealDelay:0,speed:.9,tweenLength:!0}},Y(n))),jp=(e,t,n,r,i)=>(e.set(t.chip,{textContent:r,...i?{attr:{"data-kind":i}}:{}},n),e),Mp=(e,t,n,r,i,a,o=0)=>{let s=t.dataset.color??`#334155`;return e.set(t,{opacity:.55},Y(i)),e.to(t,{opacity:0,duration:Y(a-i),ease:`power1.in`,onUpdate(){let e=J.getProperty(n.el,`x`)+o,i=Math.min(r,e);t.style.left=`${i}px`,t.style.width=`${Math.abs(e-r)}px`,t.style.background=`linear-gradient(${e>r?`to right`:`to left`}, transparent, ${s})`}},Y(i))},Np=(e,t,n,r,i)=>(e.to(t,{opacity:0,duration:Y(i-r),ease:`sine.inOut`},Y(r)),e.to(n,{opacity:1,duration:Y(i-r),ease:`sine.inOut`},Y(r)),e),Pp=e=>J.timeline({repeat:-1,defaults:{overwrite:!1}}).set({},{},Y(e)),Fp=()=>{let e=ip.aes,t=1236,n=bp(`Chiffrement symétrique`,e.ink),r=hp(`Hello !`),i=_p(X.inkSoft),a=mp(e,896);n.append(gp(560,210,[`M`]).el,gp(t,230,[`C`]).el,i,r.el,a.el);let o=Pp(480);return jp(o,r,0,`Hello !`,`plain`),Ep(o,r,0,560),Dp(o,r,40,110,560,896,{absorb:!0}),kp(o,a,104),Dp(o,r,118,200,896,t,{emerge:!0}),Ap(o,r,118,176,`h7f9ABU`,void 0,`cipher`),Mp(o,i,r,966,118,230),Dp(o,r,262,332,t,896,{absorb:!0}),kp(o,a,326),Dp(o,r,340,422,896,560,{emerge:!0}),Ap(o,r,340,398,`Hello !`,void 0,`plain`),Mp(o,i,r,826,340,450),r.chip.style.setProperty(`--c`,e.ink),{el:n,tl:o,poster:Y(230)}},Ip=()=>{let e=ip.rsaPub,t=ip.rsaPriv,n=1300,r=1620,i=xp(`· chiffrement`,`· signature`),a=bp(`Chiffrement asymétrique`,e.color,i.el),o=hp(`le secret`,`plain`,e.ink),s=_p(e.color),c=mp(e,620),l=mp(t,n),u=gp(960,240,[`C`,`S`]);a.append(gp(300,200,[`M`]).el,u.el,gp(r,200,[`M`]).el,vp(620,`clé publique`,e.iconColor),vp(n,`clé privée`,t.iconColor),s,o.el,c.el,l.el);let d=Pp(960),f=(e,t,n,r,i,a,c,l,u,f)=>{let p=Math.sign(i-t);jp(d,o,Y(e),`le secret`,`plain`),d.set(o.chip,{"--c":u},Y(e)),Ep(d,o,Y(e),t),Dp(d,o,e+40,e+110,t,n,{absorb:!0}),kp(d,a,e+104),Dp(d,o,e+118,e+200,n,960,{emerge:!0}),Ap(d,o,e+118,e+176,l,void 0,`cipher`),s.dataset.color=u,Mp(d,s,o,n+p*70,e+118,e+230),Dp(d,o,e+240,e+310,960,r,{absorb:!0}),kp(d,c,e+306),Dp(d,o,e+318,e+400,r,i,{emerge:!0}),Ap(d,o,e+318,e+380,`le secret`,void 0,`plain`),s.dataset.color=f,Mp(d,s,o,r+p*70,e+318,e+420)},p=`var(--cp-rsa-pub, #4E9A1E)`,m=t.ink;return f(0,300,620,n,r,c,l,`h&9p23oM`,p,m),f(480,r,n,620,300,l,c,`v14up@Re`,m,p),Np(d,i.a,i.b,450,480),Np(d,u.labels[0],u.labels[1],450,480),Np(d,i.b,i.a,930,960),Np(d,u.labels[1],u.labels[0],930,960),{el:a,tl:d,poster:Y(220)}},Lp=()=>{let e=ip.sha,t=1236,n=`56e3fbcc30d97dba881ea271ba0b4239281b766e`,r=bp(`Fonctions de hachage`,e.color,`· SHA-1 · 160 bits`),i=hp(`Hello !`),a=hp(n,`hash`,e.ink,{minWidth:600}),o=_p(e.color),s=mp(e,720),c=gp(t,600,[`H(M)`]);c.el.style.opacity=`0.35`,r.append(gp(380,210,[`M`]).el,c.el,o,i.el,a.el,s.el);let l=Pp(480);return Ep(l,i,0,380),l.set(a.el,{opacity:0},0),jp(l,a,0,``.padEnd(40,`0`)),Dp(l,i,40,110,380,720,{absorb:!0}),kp(l,s,104),Dp(l,a,118,210,960,t,{emerge:!0}),l.to(a.chip,{duration:Y(116),ease:`none`,scrambleText:{text:n,chars:cp,revealDelay:0,speed:1}},Y(124)),Mp(l,o,a,790,118,260,-300),l.to(c.el,{opacity:1,duration:Y(40)},Y(150)),Op(l,a,400,440,`out`),l.to(c.el,{opacity:.35,duration:Y(40)},Y(400)),Op(l,i,440,480,`in`,380),{el:r,tl:l,poster:Y(300)}},Rp=()=>{let e=ip.dh,t=1322,n=bp(`Établissement de clé`,e.color,`· Diffie-Hellman · p = 47, g = 26`,[260,1532]),r=yp(190,`Alice`,ap.alice.icon,ap.alice.color,`a = 7`),i=yp(1602,`Bob`,ap.bob.icon,ap.bob.color,`b = 41`),a=hp(`26, 47, 10`,`number`,X.ink,{caption:`g, p, A`}),o=hp(`30`,`number`,X.ink,{caption:`B`,minWidth:72}),s=hp(`44`,`secret`,e.color,{minWidth:84}),c=hp(`44`,`secret`,e.color,{minWidth:84}),l=gp(470,200,[`secret`],{top:140}),u=gp(t,200,[`secret`],{top:140});l.el.style.opacity=`0`,u.el.style.opacity=`0`;let d=mp(e,896);n.append(r.el,i.el,l.el,u.el,a.el,o.el,s.el,c.el,d.el);let f=Pp(480);Ep(f,a,0,470),f.set([o.el,s.el,c.el],{opacity:0},0),Dp(f,a,30,150,470,t,{ease:lp}),kp(f,d,82),Op(f,a,150,190,`out`),Op(f,o,170,200,`in`,t),Dp(f,o,200,320,t,470,{ease:lp}),kp(f,d,252),Op(f,o,320,352,`out`);let p=(e,t,n,r,i)=>{f.set(e.el,{x:n},Y(r)),f.fromTo(e.el,{opacity:0,scale:.7,filter:`blur(0px)`},{opacity:1,scale:1,duration:.55,ease:`back.out(2.2)`,immediateRender:!1},Y(r)),f.to(t.el,{opacity:1,duration:.4},Y(r)),f.fromTo(i.icon,{scale:1},{scale:1.07,duration:.18,yoyo:!0,repeat:1,ease:`power2.out`,immediateRender:!1},Y(r)),f.fromTo(i.sec,{opacity:.4},{opacity:.8,duration:.2,yoyo:!0,repeat:1,immediateRender:!1},Y(r)),f.to([e.el,t.el],{opacity:0,duration:Y(22),ease:`power2.in`},Y(430))};return p(s,l,470,352,r),p(c,u,t,362,i),Op(f,a,450,480,`in`,470),{el:n,tl:f,poster:Y(400)}},zp=e=>{let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}},Bp={aes:Fp,rsa:Ip,sha:Lp,dh:Rp,prng:()=>{let e=ip.prng,t=`91690410bec9`,n=1050,r=zp(parseInt(t.slice(0,8),16)^parseInt(t.slice(8),16)),i=Array.from({length:24},()=>String(Math.floor(r()*1e4)).padStart(4,`0`)),a=bp(`Générateurs d'aléa`,e.color,`· déterministe : même graine, même suite`),o=hp(t,`number`,X.inkSoft);o.el.style.opacity=`1`,J.set(o.el,{x:420});let s=Z(`div`,`cp-pulse-dot`,{background:e.color,boxShadow:`0 0 12px 2px ${e.color}`}),c=mp(e,800),l=Z(`div`,``,{position:`absolute`,left:`1660px`,top:`88px`,font:`400 20px ${tp.mono}`,color:X.faint});l.textContent=`…`;let u=Array.from({length:6},()=>hp(`0000`,`number`,X.ink));a.append(gp(420,250,[`graine`],{small:!0}).el,gp(1330,600,[`aléa`],{small:!0}).el,o.el,s,...u.map(e=>e.el),l,c.el);let d=0,f=e=>e===0?n:n+124*e,p=(e,t)=>Math.max(0,Math.min(1,(1680-e)/160))*(t===0?1:.55),m=()=>{let e=u[d%6];e.chip.textContent=i[d%i.length],e.chip.style.color=X.ink,J.fromTo(e.el,{x:870,opacity:0,scale:.82,filter:`blur(4px)`},{x:n,opacity:1,scale:1,filter:`blur(0px)`,duration:Y(26),ease:`expo.out`,overwrite:!0});for(let e=1;e<6;e++){let t=u[(d-e+600)%6];if(d-e<0)continue;let n=f(e);t.chip.style.color=X.muted,J.to(t.el,{x:n,opacity:p(n,e),scale:.9,filter:`blur(0px)`,duration:Y(26),ease:`expo.out`,overwrite:!0})}d++},h=J.timeline({repeat:-1});h.fromTo(s,{x:550,opacity:0},{x:730,duration:Y(26),ease:lp,immediateRender:!1},Y(8)),h.to(s,{opacity:1,duration:Y(13),ease:`sine.out`,yoyo:!0,repeat:1},Y(8)),kp(h,c,34),h.call(m,void 0,Y(34)),h.set({},{},Y(40));for(let e=0;e<5;e++)m();return{el:a,tl:h,poster:0,stop:()=>u.forEach(e=>J.killTweensOf(e.el))}}},Vp=`
.cp-root{position:relative;width:100%;overflow:hidden;contain:layout paint;}
.cp-root.cp-bg{background-color:${X.bg};background-image:radial-gradient(${X.dot} 1.2px,transparent 1.3px);background-size:28px 28px;background-position:14px 14px;}
.cp-stage{position:absolute;left:0;top:0;width:${$f}px;transform-origin:0 0;}
.cp-lane{position:absolute;left:${($f-ep)/2}px;width:${ep}px;height:188px;background:${X.card};border-radius:22px;border:1px solid ${X.cardBorder};box-shadow:0 1px 2px rgba(15,23,42,.04),0 12px 32px -18px rgba(15,23,42,.18);overflow:hidden;}
.cp-label{position:absolute;left:28px;top:20px;display:flex;align-items:center;gap:10px;font:400 13px/1 ${tp.mono};letter-spacing:.14em;text-transform:uppercase;color:${X.muted};white-space:nowrap;}
.cp-label .cp-dot{width:7px;height:7px;border-radius:4px;}
.cp-label .cp-sub{color:${X.inkSoft};position:relative;}
.cp-rail{position:absolute;inset:0;pointer-events:none;}
.cp-bracket{position:absolute;top:136px;}
.cp-bracket svg{display:block;overflow:visible;}
.cp-bracket .cp-blabel{position:relative;text-align:center;margin-top:3px;font:300 24px/1 ${tp.sans};color:${X.muted};}
.cp-bracket.cp-small .cp-blabel{font:300 15px/1 ${tp.mono};letter-spacing:.08em;}
.cp-tok{position:absolute;left:0;top:100px;width:0;height:0;will-change:transform,opacity,filter;}
.cp-chip{position:absolute;left:0;top:0;transform:translate(-50%,-50%);white-space:pre;display:flex;align-items:center;justify-content:center;height:52px;padding:0 22px;border-radius:26px;font:500 29px/1 ${tp.sans};letter-spacing:-.005em;color:${X.ink};font-variant-numeric:tabular-nums;background:${X.card};border:1px solid ${X.cardBorder};box-shadow:0 1px 2px rgba(15,23,42,.06);}
.cp-chip[data-kind=cipher]{font:500 27px/1 ${tp.mono};letter-spacing:.02em;color:var(--c);background:color-mix(in srgb,var(--c) 6%,${X.card});border-color:color-mix(in srgb,var(--c) 28%,${X.card});box-shadow:none;}
.cp-chip[data-kind=number]{font:500 27px/1 ${tp.mono};letter-spacing:.02em;}
.cp-chip[data-kind=hash]{height:46px;padding:0 20px;border-radius:8px;font:500 22px/1 ${tp.mono};letter-spacing:.02em;color:var(--c);background:${X.hashBox};border:1.5px dashed color-mix(in srgb,var(--c) 45%,${X.card});box-shadow:none;}
.cp-chip[data-kind=secret]{font:600 27px/1 ${tp.mono};color:var(--c);background:color-mix(in srgb,var(--c) 9%,${X.card});border:1.5px solid color-mix(in srgb,var(--c) 45%,${X.card});box-shadow:0 6px 18px color-mix(in srgb,var(--c) 18%,transparent);}
.cp-caption{position:absolute;left:-100px;width:200px;top:36px;text-align:center;font:400 15px/1 ${tp.mono};letter-spacing:.08em;color:${X.muted};}
.cp-trail{position:absolute;top:98.5px;height:3px;border-radius:2px;opacity:0;width:0;}
.cp-badge{position:absolute;will-change:transform;}
.cp-badge .cp-ring{position:absolute;opacity:0;pointer-events:none;}
.cp-badge .cp-face{position:absolute;box-sizing:border-box;display:flex;align-items:center;justify-content:center;color:#fff;font-family:${tp.badge};font-weight:400;line-height:1;}
.cp-hint{position:absolute;top:150px;width:160px;text-align:center;font:400 13px/1 ${tp.mono};letter-spacing:.06em;}
.cp-person{position:absolute;top:54px;width:120px;text-align:center;}
.cp-person .cp-pname{margin-top:8px;font:400 13px/1 ${tp.mono};letter-spacing:.1em;color:${X.muted};text-transform:uppercase;}
.cp-person .cp-pnote{color:${X.faint};text-transform:none;}
.cp-pulse-dot{position:absolute;top:95px;left:0;width:10px;height:10px;margin-left:-5px;border-radius:5px;opacity:0;}
@media (prefers-reduced-motion: reduce){.cp-tok,.cp-badge{will-change:auto;}}
`,Hp=!1,Up=()=>{if(Hp||typeof document>`u`)return;let e=document.createElement(`style`);e.dataset.cryptoPrimitives=``,e.textContent=Vp,document.head.appendChild(e),Hp=!0};Zf();var Wp=[`aes`,`rsa`,`sha`,`dh`,`prng`];function Gp(e,t={}){Up();let n=(t.lanes?.length?t.lanes:Wp).filter(e=>e in Bp),r=92+n.length*188+(n.length-1)*12,i=Z(`div`,`cp-root${t.background===!1?``:` cp-bg`}`,{aspectRatio:`${$f} / ${r}`});i.setAttribute(`role`,`img`),i.setAttribute(`aria-label`,`Animation des primitives cryptographiques : AES, RSA, SHA, Diffie-Hellman, PRNG`);let a=Z(`div`,`cp-stage`,{height:`${r}px`});i.appendChild(a),e.replaceChildren(i);let o=n.map((e,t)=>{let n=Bp[e]();return n.el.style.top=`${46+t*200}px`,a.appendChild(n.el),n}),s=()=>{a.style.transform=`scale(${i.clientWidth/$f})`};s();let c=new ResizeObserver(s);c.observe(i);let l=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches,u=!l,d=!0,f=()=>o.forEach(e=>u&&d?e.tl.play():e.tl.pause());l&&o.forEach(e=>e.tl.pause(e.poster));let p;return t.pauseOffscreen!==!1&&typeof IntersectionObserver<`u`&&(p=new IntersectionObserver(([e])=>{d=e.isIntersecting,f()}),p.observe(i)),{play(){u=!0,f()},pause(){u=!1,f()},poster(){u=!1,o.forEach(e=>e.tl.pause(e.poster))},seek(e){u=!1,o.forEach(t=>t.tl.pause(e%t.tl.duration()))},destroy(){p?.disconnect(),c.disconnect(),o.forEach(e=>{e.tl.kill(),e.stop?.()}),i.remove()}}}var Kp=v({default:()=>qp});function qp(e,{printing:t}){let n=e.querySelector(`.cpa-host`),r,i=()=>r??=Gp(n,{background:!1,pauseOffscreen:!1});return{enter(){i().play()},leave(){r?.pause()},final(){i().poster()},printing:t}}var Jp=v({default:()=>Yp});function Yp(e,{printing:t}){let n=[...e.querySelectorAll(`.p5-row`)].map(e=>{let t=e.querySelector(`.prim-box`),n=e.querySelector(`.prim-f`),r=document.createElement(`span`);r.className=`p5-shine`,n.appendChild(r);let i=document.createElement(`span`);return i.className=`p5-ring`,i.style.setProperty(`--ring`,n.style.background),t.insertBefore(i,n),[...e.querySelector(`.p5-fam .in`).childNodes].filter(e=>e.nodeType===3).forEach(e=>e.remove()),{row:e,face:n,shine:r,ring:i,icons:[...e.querySelectorAll(`.prim-i`)],fam:[...e.querySelectorAll(`.p5-fam .in > span`)],acr:e.querySelector(`.p5-acr`)}}),r=e.querySelector(`.pl-head`),i=n.flatMap(e=>e.fam),a=n.map(e=>e.acr),o,s=0,c=(e,t,n,r)=>e.fromTo(t.shine,{left:`-60%`},{left:`140%`,duration:r,ease:`power2.inOut`},n),l=(e,t,n,r)=>{e.fromTo(t.face,{scale:1},{scale:1.08,duration:.14,ease:`power2.out`,yoyo:!0,repeat:1},n),e.fromTo(t.ring,{opacity:.7,scale:1},{opacity:0,scale:1.35,duration:.8,ease:`power2.out`},n),c(e,t,n,.7);for(let i of r?[r]:t.icons)e.fromTo(i,{rotation:0},{keyframes:[{rotation:-14,duration:.09},{rotation:9,duration:.09},{rotation:0,duration:.18}]},n+.05)},u=()=>J.set([r,...n.flatMap(e=>[e.face,e.shine,e.ring,...e.icons])],{clearProps:`transform,opacity`}),d=()=>{o?.kill(),u(),J.set(i,{opacity:1,x:0,clipPath:`inset(0 0% 0 0)`}),J.set(a,{opacity:1,x:0})},f=()=>{J.set(i,{opacity:0,x:40,clipPath:`inset(0 0 0 100%)`}),J.set(a,{opacity:0,x:-24})},p=()=>{o?.kill(),u(),o=J.timeline(),o.from(r,{opacity:0,y:18,duration:.6,ease:`power3.out`},0),n.forEach((e,t)=>{let n=.25+t*.13;o.from(e.face,{opacity:0,y:-70,scale:.55,rotation:-7,duration:.75,ease:`back.out(1.9)`},n),e.icons.forEach((e,t)=>o.from(e,{opacity:0,scale:0,rotation:-120,duration:.9,ease:`elastic.out(1, 0.55)`},n+.42+t*.16)),o.fromTo(e.ring,{opacity:.6,scale:1},{opacity:0,scale:1.3,duration:.7,ease:`power2.out`},n+.4)}),n.forEach((e,t)=>c(o,e,1.35+t*.08,.6))},m=e=>{let t=n[e-1],r=J.timeline();t.fam.forEach((e,n)=>{let i=n*.42;r.fromTo(e,{opacity:0,x:40,clipPath:`inset(0 0 0 100%)`},{opacity:1,x:0,clipPath:`inset(0 0% 0 0)`,duration:.6,ease:`power3.out`},i),l(r,t,i,t.fam.length>1?t.icons[n]:void 0)})},h=()=>J.fromTo(a,{opacity:0,x:-24},{opacity:1,x:0,duration:.55,ease:`power3.out`,stagger:.09}),g=(e,t)=>{n.forEach((n,r)=>{r+1<=e?t&&r+1>s?m(r+1):J.set(n.fam,{opacity:1,x:0,clipPath:`inset(0 0% 0 0)`}):J.to(n.fam,{opacity:0,x:40,duration:t?0:.25,overwrite:!0})}),e>=6?t&&s<6?h():J.set(a,{opacity:1,x:0}):J.to(a,{opacity:0,x:-24,duration:.25,overwrite:!0})};return t||f(),{enter(){s=0,f(),p()},step(e){g(e,e>s),s=e},final(){d()}}}var Xp=Object.assign({"../slides/affaires/historique/slide.js":eu,"../slides/affaires/outils-nsa/slide.js":nu,"../slides/affaires/poncifs/slide.js":lu,"../slides/assemblage/bitcoin/slide.js":du,"../slides/assemblage/certificat/slide.js":Nu,"../slides/assemblage/cev/slide.js":Ru,"../slides/assemblage/tls/slide.js":Hu,"../slides/hachage/collisions/slide.js":Gu,"../slides/hachage/definition/slide.js":Yu,"../slides/hachage/mots-de-passe/slide.js":Zu,"../slides/hachage/preuve-de-travail/slide.js":td,"../slides/hachage/sens-unique/slide.js":ad,"../slides/hachage/sha1-code/slide.js":sd,"../slides/hachage/totp/slide.js":ld,"../slides/hachage/tout-se-hache/slide.js":md,"../slides/histoire/aes-confusion-diffusion/slide.js":Ed,"../slides/histoire/confusion-diffusion/slide.js":Nd,"../slides/histoire/enigma-papier/slide.js":Vd,"../slides/histoire/masque-jetable/slide.js":rf,"../slides/histoire/masque-jetable-exemples/slide.js":cf,"../slides/histoire/story/slide.js":mf,"../slides/intro/cpq/slide.js":gf,"../slides/intro/objectifs/slide.js":vf,"../slides/intro/secret/slide.js":bf,"../slides/intro/stelau/slide.js":Sf,"../slides/intro/voila-fini/slide.js":wf,"../slides/intro/vraies-difficultes/slide.js":Ef,"../slides/notions/codage/slide.js":Of,"../slides/notions/crypto-moderne/slide.js":Nf,"../slides/notions/octets/slide.js":Rf,"../slides/primitives/animation/slide.js":Kp,"../slides/primitives/cinq/slide.js":Jp});function Zp(e,t,{printing:n=!1}={}){let r=new Map;for(let t of e.querySelectorAll(`section[data-slide]`)){let e=Xp[`../slides/${t.dataset.slide}/slide.js`];if(typeof e?.default==`function`)try{r.set(t,e.default(t,{printing:n})||{})}catch(e){console.error(`Planche ${t.dataset.slide} :`,e)}}let i=(e,t,...n)=>{let i=e&&r.get(e);if(typeof i?.[t]==`function`)try{i[t](...n)}catch(n){console.error(`Planche ${e.dataset.slide} (${t}) :`,n)}},a=e=>e.querySelectorAll(`.fragment.visible`).length;if(t.on(`ready`,e=>{if(n)for(let e of r.keys())i(e,`final`);else i(e.currentSlide,`enter`),i(e.currentSlide,`step`,a(e.currentSlide))}),n)return;t.on(`slidechanged`,e=>{i(e.previousSlide,`leave`),i(e.currentSlide,`enter`),i(e.currentSlide,`step`,a(e.currentSlide))});let o=e=>{let t=e.fragment?.closest(`section[data-slide]`);i(t,`step`,a(t))};t.on(`fragmentshown`,o),t.on(`fragmenthidden`,o)}window.Reveal=F;var Qp=Object.assign({"../slides/affaires/equation-group/slide.html":y,"../slides/affaires/historique/slide.html":b,"../slides/affaires/metadata/slide.html":x,"../slides/affaires/outils-nsa/slide.html":S,"../slides/affaires/poncifs/slide.html":C,"../slides/affaires/wannacry/slide.html":w,"../slides/assemblage/bitcoin/slide.html":T,"../slides/assemblage/bitcoin-signature/slide.html":E,"../slides/assemblage/certificat/slide.html":D,"../slides/assemblage/cev/slide.html":O,"../slides/assemblage/ex-machina/slide.html":k,"../slides/assemblage/passeport/slide.html":A,"../slides/assemblage/passeport-simple/slide.html":j,"../slides/assemblage/tls/slide.html":M,"../slides/assemblage/tls-schemas/slide.html":N,"../slides/authentification/trois-preuves/slide.html":ee,"../slides/cours/couverture-elsi/slide.html":te,"../slides/hachage/anniversaires/slide.html":ne,"../slides/hachage/attaques/slide.html":re,"../slides/hachage/bitcoin/slide.html":ie,"../slides/hachage/collisions/slide.html":ae,"../slides/hachage/definition/slide.html":oe,"../slides/hachage/hmac/slide.html":se,"../slides/hachage/hmac-limites/slide.html":ce,"../slides/hachage/mots-de-passe/slide.html":le,"../slides/hachage/preuve-de-travail/slide.html":ue,"../slides/hachage/rainbow-tables/slide.html":de,"../slides/hachage/rappel-sens-unique/slide.html":fe,"../slides/hachage/sens-unique/slide.html":pe,"../slides/hachage/sha1-code/slide.html":me,"../slides/hachage/totp/slide.html":he,"../slides/hachage/totp-construction/slide.html":ge,"../slides/hachage/tout-se-hache/slide.html":_e,"../slides/hachage/trois-resistances/slide.html":ve,"../slides/histoire/aes-confusion-diffusion/slide.html":ye,"../slides/histoire/confusion-diffusion/slide.html":be,"../slides/histoire/enigma/slide.html":xe,"../slides/histoire/enigma-papier/slide.html":Se,"../slides/histoire/figaro/slide.html":Ce,"../slides/histoire/kerckhoffs/slide.html":we,"../slides/histoire/masque-jetable/slide.html":Te,"../slides/histoire/masque-jetable-exemples/slide.html":Ee,"../slides/histoire/paper-enigma/slide.html":De,"../slides/histoire/story/slide.html":Oe,"../slides/histoire/story-dates/slide.html":ke,"../slides/histoire/vocabulaire/slide.html":Ae,"../slides/intro/cheat-sheet/slide.html":je,"../slides/intro/cpq/slide.html":Me,"../slides/intro/films/slide.html":Ne,"../slides/intro/objectifs/slide.html":Pe,"../slides/intro/secret/slide.html":Fe,"../slides/intro/stage/slide.html":Ie,"../slides/intro/stelau/slide.html":Le,"../slides/intro/voila-fini/slide.html":Re,"../slides/intro/vraies-difficultes/slide.html":ze,"../slides/notions/codage/slide.html":Be,"../slides/notions/crypto-moderne/slide.html":Ve,"../slides/notions/octets/slide.html":He,"../slides/primitives/animation/slide.html":Ue,"../slides/primitives/cinq/slide.html":We,"../slides/tp/ateliers/slide.html":Ge}),$p=Object.assign({"../slides/affaires/equation-group/bc-genpkt.webp":Ke,"../slides/affaires/equation-group/kaspersky.webp":qe,"../slides/affaires/equation-group/masque.webp":Je,"../slides/affaires/equation-group/pixpocket.webp":Ye,"../slides/affaires/historique/code.webp":Xe,"../slides/affaires/historique/elias.webp":Ze,"../slides/affaires/historique/phrack.webp":Qe,"../slides/affaires/metadata/figure.webp":$e,"../slides/affaires/metadata/video.webp":et,"../slides/affaires/wannacry/hopital.webp":tt,"../slides/assemblage/bitcoin/ava-code.webp":nt,"../slides/assemblage/bitcoin/bitcoin.svg":rt,"../slides/assemblage/bitcoin-signature/blocs-merkle.webp":it,"../slides/assemblage/bitcoin-signature/satoshi.webp":at,"../slides/assemblage/cev/2d-doc.webp":ot,"../slides/assemblage/cev/attestation.webp":st,"../slides/assemblage/cev/doc.webp":ct,"../slides/assemblage/cev/titres.webp":lt,"../slides/assemblage/ex-machina/ava.webp":ut,"../slides/assemblage/ex-machina/ex-machina.webp":dt,"../slides/assemblage/passeport/filigrane.svg":ft,"../slides/assemblage/passeport/nfc.svg":pt,"../slides/assemblage/passeport/officier.svg":mt,"../slides/assemblage/passeport/passeport.svg":ht,"../slides/assemblage/passeport/puce-violette.svg":gt,"../slides/assemblage/passeport/puce.svg":_t,"../slides/assemblage/passeport/signature.svg":vt,"../slides/assemblage/passeport-simple/filigrane.svg":yt,"../slides/assemblage/passeport-simple/nfc.svg":bt,"../slides/assemblage/passeport-simple/officier.svg":xt,"../slides/assemblage/passeport-simple/passeport.svg":St,"../slides/assemblage/passeport-simple/puce-violette.svg":Ct,"../slides/assemblage/passeport-simple/puce.svg":wt,"../slides/assemblage/passeport-simple/signature.svg":Tt,"../slides/assemblage/tls/https.webp":Et,"../slides/assemblage/tls-schemas/tls-dhe.webp":Dt,"../slides/assemblage/tls-schemas/tls-rsa.webp":Ot,"../slides/cours/couverture-elsi/colombe.webp":kt,"../slides/cours/couverture-elsi/juge.webp":At,"../slides/cours/couverture-elsi/signature.webp":jt,"../slides/hachage/anniversaires/courbes.webp":Mt,"../slides/hachage/anniversaires/formule.webp":Nt,"../slides/hachage/anniversaires/table.webp":Pt,"../slides/hachage/bitcoin/bitcoin.webp":Ft,"../slides/hachage/bitcoin/blockchain.webp":It,"../slides/hachage/collisions/np-approx.webp":Lt,"../slides/hachage/collisions/pn-exact.webp":Rt,"../slides/hachage/collisions/script.webp":zt,"../slides/hachage/collisions/sortie.webp":Bt,"../slides/hachage/definition/anssi-r3.webp":Vt,"../slides/hachage/hmac/hmac-formule.webp":Ht,"../slides/hachage/hmac/hmac-octets.webp":Ut,"../slides/hachage/hmac/hmac-pads.webp":Wt,"../slides/hachage/hmac/hmac-schema.webp":Gt,"../slides/hachage/mots-de-passe/pbkdf.webp":Kt,"../slides/hachage/mots-de-passe/zip.webp":qt,"../slides/hachage/rainbow-tables/chaines.webp":Jt,"../slides/hachage/rainbow-tables/formule-sel.webp":Yt,"../slides/hachage/sens-unique/sha1-blockcipher.webp":Xt,"../slides/hachage/sens-unique/sha1-compress.webp":Zt,"../slides/hachage/sens-unique/sha1-expand.webp":Qt,"../slides/hachage/sens-unique/sha1-f.webp":$t,"../slides/hachage/sens-unique/sha1-tour.webp":en,"../slides/hachage/sha1-code/go-putuint32.webp":tn,"../slides/hachage/sha1-code/sha1-blockcipher.webp":nn,"../slides/hachage/sha1-code/sha1-compress.webp":rn,"../slides/hachage/sha1-code/sha1-expand.webp":an,"../slides/hachage/sha1-code/sha1-f.webp":on,"../slides/hachage/sha1-code/sha1-tour.webp":sn,"../slides/hachage/totp/sms.webp":cn,"../slides/hachage/totp-construction/rfc4226.webp":ln,"../slides/hachage/totp-construction/totp-schema.webp":un,"../slides/hachage/tout-se-hache/empreinte-digitale.webp":dn,"../slides/hachage/tout-se-hache/photo.webp":fn,"../slides/hachage/tout-se-hache/portrait.webp":pn,"../slides/hachage/trois-resistances/rho.webp":mn,"../slides/histoire/confusion-diffusion/disque.webp":hn,"../slides/histoire/enigma/bd-couverture.webp":gn,"../slides/histoire/enigma/bd-planche.webp":_n,"../slides/histoire/enigma/bd-vichy.webp":vn,"../slides/histoire/enigma/paper-enigma.webp":yn,"../slides/histoire/figaro/imitation.webp":bn,"../slides/histoire/kerckhoffs/chiffre.webp":xn,"../slides/histoire/masque-jetable/telephone.webp":Sn,"../slides/histoire/paper-enigma/enigma.webp":Cn,"../slides/histoire/paper-enigma/paper-enigma.webp":wn,"../slides/histoire/story-dates/diffie-hellman.webp":Tn,"../slides/histoire/story-dates/rsa.webp":En,"../slides/histoire/vocabulaire/onditchiffrer.webp":Dn,"../slides/intro/cpq/calcul.webp":On,"../slides/intro/cpq/crypto-quantique.webp":kn,"../slides/intro/films/films.webp":An,"../slides/intro/objectifs/tableau.webp":jn,"../slides/intro/stage/equipe.webp":Mn,"../slides/intro/stage/france-identite.webp":Nn,"../slides/intro/stage/p47.webp":Pn,"../slides/intro/stage/p48.webp":Fn,"../slides/intro/stage/p49.webp":In,"../slides/intro/stage/p50.webp":Ln,"../slides/intro/stage/p51.webp":Rn,"../slides/intro/stage/p52.webp":zn,"../slides/intro/stage/p53.webp":Bn,"../slides/intro/stelau/benoit.webp":Vn,"../slides/intro/stelau/hector.webp":Hn,"../slides/intro/stelau/julien.webp":Un,"../slides/intro/stelau/kilian.webp":Wn,"../slides/intro/stelau/loic.webp":Gn,"../slides/intro/stelau/lucas.webp":Kn,"../slides/intro/stelau/nicolas.webp":qn,"../slides/intro/stelau/paul.webp":Jn,"../slides/intro/stelau/quentin.webp":Yn,"../slides/intro/stelau/stelau.webp":Xn,"../slides/intro/voila-fini/alice.svg":Zn,"../slides/intro/voila-fini/angle.svg":Qn,"../slides/intro/voila-fini/astronaute.svg":$n,"../slides/intro/voila-fini/bezier.svg":er,"../slides/intro/voila-fini/bob.svg":tr,"../slides/intro/voila-fini/branche.svg":nr,"../slides/intro/voila-fini/calques.svg":rr,"../slides/intro/voila-fini/casque.svg":ir,"../slides/intro/voila-fini/chef.svg":ar,"../slides/intro/voila-fini/equerre.svg":or,"../slides/intro/voila-fini/espion.svg":sr,"../slides/intro/voila-fini/etudiante.svg":cr,"../slides/intro/voila-fini/fichier-binaire.svg":lr,"../slides/intro/voila-fini/fusion.svg":ur,"../slides/intro/voila-fini/medecin.svg":dr,"../slides/intro/voila-fini/robot.svg":fr,"../slides/intro/voila-fini/terminal.svg":pr,"../slides/intro/vraies-difficultes/v56.webp":mr,"../slides/intro/vraies-difficultes/v57.webp":hr,"../slides/intro/vraies-difficultes/v58.webp":gr,"../slides/intro/vraies-difficultes/v59.webp":_r,"../slides/intro/vraies-difficultes/v60.webp":vr,"../slides/notions/codage/stegano.webp":yr,"../slides/tp/ateliers/fiches.webp":br,"../slides/tp/ateliers/puzzle.webp":xr}),em=Object.assign({"../decks/epita-srs-2026-27.json":u}),tm=Object.assign({"../media/ouverture.webp":Sr}),nm=new URLSearchParams(location.search),Q=em[`../decks/${nm.get(`deck`)||`epita-srs-2026-27`}.json`]||Object.values(em)[0],rm=/print-pdf/.test(location.search),im=Number(nm.get(`seance`))||void 0,am=nm.get(`only`),{seances:om,parties:sm,aliases:cm,preambule:lm}=m(Q,{seance:im});document.title=Q.title+(im?` · séance ${im}`:``),rm?t(`light`):n(),a();var um=document.querySelector(`.reveal .slides`),$=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),dm=`<div class="foot"></div>`,fm=(e,t)=>e.querySelectorAll(`.foot`).forEach(e=>{e.innerHTML=`<span>${l(Q.footer?.left,Q,t)}</span><span>${l(Q.footer?.right,Q,t)} <span class="pg"></span></span>`}),pm=e=>(um.insertAdjacentHTML(`beforeend`,`<section>${e}</section>`),um.lastElementChild),mm=[`ecole`,`annee`,`code`,`cours`,`intervenant`],hm=e=>{let t=Qp[`../slides/${e}/slide.html`];return t?t.replace(RegExp(`\\{(${mm.join(`|`)})\\}`,`g`),(e,t)=>$(Q[t]??``)).replace(/(src|data-src|data-background-image)="\.\/([^"]+)"/g,(t,n,r)=>{let i=$p[`../slides/${e}/${r}`];return i||console.warn(`Image introuvable dans slides/${e} :`,r),i?`${n}="${i}"`:t}):null},gm=e=>`
  <li class="som-seance${h(e)?` alerte`:``}">
    <div class="som-n"><span>Séance ${e.n}</span>${e.date?`<span class="som-quand">${$(p(e.date))} · ${$(s(e))}${e.salle?` · ${$(e.salle)}`:``}</span>`:``}</div>
    <ol>${sm.filter(t=>t.seance===e.n).map(e=>`<li${e.alerte?` class="alerte"`:``}><a href="#/${e.id}"><span class="som-num">${$(e.n)}</span>
          <span class="som-t">${$(e.titre)}${e.sousTitre?`<small>${$(e.sousTitre)}</small>`:``}</span></a></li>`).join(``)}</ol>
  </li>`,_m=Q.ouverture&&tm[`../media/${Q.ouverture}`];Q.ouverture&&!_m&&console.warn(`Image d'ouverture introuvable :`,Q.ouverture);var vm=`${Q.ecole} ${String(Q.annee||``).slice(0,4)}`.trim(),ym=()=>{let e=om.filter(e=>e.date);return e.length?`
  <section id="calendrier" class="calendrier">
    <div class="wrap">
      <div class="eyebrow">Calendrier · ${$(Q.code||``)} · ${$(Q.annee||``)}</div>
      <h2>${e.length} séances${Q.duree?` ${$(Q.duree.replace(/^Séances\s+/i,``))}`:``}</h2>
      <ol class="cal">${e.map(e=>`
      <li class="cal-l${h(e)?` alerte`:``}">
        <span class="cal-n">${e.n}</span>
        <span class="cal-quand"><b>${$(p(e.date,!0))}</b>${$(s(e))}</span>
        <span class="cal-titre"><b>${$(vm)} - ${$(c(e))}</b>${(e.parties||[]).filter(e=>e.alerte).map(e=>`<em>${$(e.titre)}${e.sousTitre?` · ${$(e.sousTitre)}`:``}</em>`).join(``)}</span>
        <span class="cal-salle">${$(e.salle||``)}</span>
      </li>`).join(``)}</ol>
      ${dm}
    </div>
  </section>`:``},bm=()=>`<section id="couverture" class="cover">
    <div class="wrap">
      <div class="eyebrow">${$(Q.ecole)} · ${$(Q.annee)}</div>
      <h1>${$(Q.cours)}</h1>
      <p class="cover-sub">${im?`Séance ${im}`:$(Q.duree||``)}</p>
      <p class="cover-who">${$(Q.intervenant||``)}<span>Stelau · iDAKTO</span></p>
      ${dm}
    </div>
  </section>`,xm=e=>`
  <section class="missing"><div class="wrap">
    <div class="eyebrow">Planche introuvable</div><h2 class="mono">${$(e)}</h2>
    <p>Aucun fichier <span class="mono">slides/${$(e)}/slide.html</span>.</p>${dm}
  </div></section>`,Sm={"@ouverture":()=>_m?`<section id="ouverture" class="ouverture" data-background-image="${_m}"
        data-background-size="cover" data-background-color="#000"
        data-state="ouverture-on"></section>`:``,"@couverture":bm,"@sommaire":()=>`
  <section id="sommaire" class="sommaire">
    <div class="wrap">
      <div class="eyebrow">Sommaire</div>
      <h2>${$(Q.cours)}</h2>
      <ol class="som-grid${om.length===1?` one`:``}">${om.map(gm).join(``)}</ol>
      ${dm}
    </div>
  </section>`,"@calendrier":ym},Cm=pm(``);for(let e of lm){if(f(e.id)){Sm[e.id]?Cm.insertAdjacentHTML(`beforeend`,Sm[e.id]()):console.warn(`Planche générée inconnue :`,e.id);continue}let t=hm(e.id);t||console.warn(`Planche introuvable :`,e.id),Cm.insertAdjacentHTML(`beforeend`,t||xm(e.id)),Cm.lastElementChild.dataset.slide=e.id}Cm.querySelectorAll(`:scope > section`).forEach(e=>fm(e,null)),Cm.children.length||Cm.remove();for(let e of sm){let t=sm.filter(t=>t.seance===e.seance),n=pm(`
    <section id="${e.id}" class="partie" data-partie="${$(e.n)}">
      <div class="wrap">
        <div class="eyebrow">Séance ${e.seance}</div>
        <div class="partie-n">${$(e.n)}</div>
        <h1>${$(e.titre)}</h1>
        ${e.sousTitre?`<p class="partie-sub">${$(e.sousTitre)}</p>`:``}
        ${t.length>1?`<ol class="partie-fil">${t.map(t=>`<li class="${t===e?`on`:``}"><span>${$(t.n)}</span> ${$(t.titre)}</li>`).join(``)}</ol>`:``}
        ${dm}
      </div>
    </section>`);for(let t of e.slides){let r=hm(t.id);r||console.warn(`Planche introuvable :`,t.id),n.insertAdjacentHTML(`beforeend`,r||xm(t.id));let i=n.lastElementChild;i.dataset.slide=t.id,i.dataset.partie=e.n}n.querySelectorAll(`:scope > section`).forEach(t=>fm(t,e))}var wm=[...um.querySelectorAll(`:scope > section > section`)];wm.forEach((e,t)=>{e.querySelectorAll(`.pg`).forEach(e=>e.textContent=`· ${t+1} / ${wm.length}`)});var Tm={};for(let e of um.querySelectorAll(`section[data-slide]`)){if(e.id)continue;let t=d(e.dataset.slide);Tm[t]=(Tm[t]||0)+1,e.id=Tm[t]>1?`${t}-${Tm[t]}`:t,cm[e.id]??=e.id;let n=e.id.slice(e.id.indexOf(`-`)+1);n in cm?cm[n]!==e.id&&Tm[t]===1&&(cm[n]=null):cm[n]=e.id}if(am){let e=nm.get(`partie`),t=[...um.querySelectorAll(`section[data-slide]`)].filter(e=>e.dataset.slide===am),n=am.startsWith(`@`)?document.getElementById(am.slice(1)):t.find(t=>!e||t.dataset.partie===e)||t[0],r=document.createElement(`section`);n?r.appendChild(n):r.innerHTML=xm(am),um.replaceChildren(r),document.documentElement.classList.add(`thumb`)}g(um),ea();var Em={auto:`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" class="fill"/></svg>`,light:`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/></svg>`,dark:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>`},Dm;function Om(e){let t=ta(`fonttoast`);t||(t=na(`div`,`fonttoast`,null,document.body),t.id=`fonttoast`),t.textContent=e,t.style.opacity=1,clearTimeout(Dm),Dm=setTimeout(()=>t.style.opacity=0,2e3)}if(!rm&&!am){let t=na(`button`,`tool`,null,na(`div`,`tools`,null,document.body));t.type=`button`,t.id=`btn-theme`;let n=()=>{let e=r();t.innerHTML=Em[e],t.title=`Thème : `+o[e],t.setAttribute(`aria-label`,t.title)};n(),t.addEventListener(`click`,()=>{i(),n(),ea(),Om(`Thème `+o[r()])}),e(ea)}var km=e=>e&&e.classList&&e.classList.contains(`jump-to-slide-input`);window.addEventListener(`input`,e=>{if(!km(e.target))return;let t=cm[e.target.value.trim().toLowerCase()];t&&(e.target.value=t)},!0),window.addEventListener(`focusin`,e=>{km(e.target)&&(e.target.placeholder=`Aller à : 2.1 · s4 · 42 · totp · mot`)},!0);var Am=[`ArrowDown`,`ArrowRight`,`PageDown`,` `],jm=[`ArrowUp`,`ArrowLeft`,`PageUp`],Mm=!1,Nm=[],Pm=(e,t)=>{if(!Mm)return;let n=[t.metaKey&&`⌘`,t.ctrlKey&&`Ctrl`,t.altKey&&`Alt`,t.shiftKey&&`Maj`].filter(Boolean).join(`+`);Nm.unshift(`${e}  ${n?n+`+`:``}${t.key}  ·  ${t.code}  ·  ${t.keyCode}${t.repeat?`  (répétition)`:``}`),Nm.length=Math.min(Nm.length,6),ta(`keydbg`).innerHTML=Nm.map((e,t)=>`<div style="opacity:${1-t*.14}">${e.replace(/</g,`&lt;`)}</div>`).join(``)},Fm=e=>{e.preventDefault(),e.stopPropagation()};window.addEventListener(`keyup`,e=>Pm(`↑`,e),!0);var Im=e=>{let t=[...um.querySelectorAll(`:scope > section`)],n=e=>t[e].querySelectorAll(`:scope > section`).length||1,{h:r,v:i}=F.getIndices();i+=e,i>=n(r)?[r,i]=[r+1,0]:i<0&&r>0&&([r,i]=[r-1,n(r-1)-1]),r<t.length&&i>=0&&F.slide(r,i,-1)};window.addEventListener(`keydown`,e=>{if(am||(Pm(`↓`,e),e.target.closest&&e.target.closest(`input, textarea, select, [contenteditable]`)))return;let t=!e.metaKey&&!e.ctrlKey&&!e.altKey;e.key===`F5`?e.preventDefault():e.key===`Backspace`&&t?(Fm(e),history.back()):F.isOverview()?e.key===`ArrowDown`||e.key===`PageDown`||e.key===` `?(Fm(e),Im(1)):e.key===`ArrowUp`||e.key===`PageUp`?(Fm(e),Im(-1)):(e.key===`Enter`||e.key===`Tab`)&&(Fm(e),F.toggleOverview(!1)):e.key===`Tab`||e.key===`Enter`?(Fm(e),e.repeat||F.toggleOverview(!0)):(e.key===`ArrowRight`||e.key===`ArrowLeft`)&&t&&e.shiftKey?(Fm(e),e.key===`ArrowRight`?F.right():F.left(),F.slide(F.getIndices().h,0)):(e.key===`ArrowDown`||e.key===`ArrowUp`)&&t&&e.shiftKey?(Fm(e),Im(e.key===`ArrowDown`?1:-1)):Am.includes(e.key)&&t&&!e.shiftKey?(Fm(e),F.next()):jm.includes(e.key)&&t&&!e.shiftKey&&(Fm(e),F.prev())},!0),Zp(um,F,{printing:rm||!!am});var Lm=am?{margin:0,hash:!1,history:!1,progress:!1,keyboard:!1,overview:!1,touch:!1,transition:`none`}:{};am&&F.on(`ready`,()=>F.slide(0,0,999)),F.initialize({width:1600,height:900,margin:.03,center:!1,hash:!0,history:!0,controls:!1,progress:!0,slideNumber:`c/t`,showSlideNumber:`speaker`,transition:`fade`,backgroundTransition:`none`,pdfSeparateFragments:!1,plugins:am?[]:[Xi],keyboard:{68:()=>{Mm=!Mm,Nm.length=0,ta(`keydbg`).style.display=Mm?`block`:`none`,ta(`keydbg`).textContent=`Témoin actif : appuyez sur chaque bouton du clicker (D pour fermer)`}},...Lm});