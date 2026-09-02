(() => {
  'use strict';
  const D = PORTFOLIO_DATA;
  const $  = (s, sc = document) => sc.querySelector(s);
  const $$ = (s, sc = document) => Array.from(sc.querySelectorAll(s));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (s) => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  document.getElementById('year').textContent = new Date().getFullYear();
  $$('[data-href="resume"]').forEach(n => n.href = D.meta.resumePdf);

  /* ------------------------------------------------------------------ */
  /* RENDER — content comes entirely from data.js                       */
  /* ------------------------------------------------------------------ */

  // hero role cycle + lede
  (() => {
    const roles = D.meta.roleCycle || [D.meta.role];
    const host = $('#role-swap');
    let i = 0;
    const paint = () => {
      host.innerHTML = `<span class="role-word is-current">${esc(roles[i])}</span>`;
    };
    paint();
    if (!reduceMotion) setInterval(() => { i = (i + 1) % roles.length; paint(); }, 2600);
    $('#hero-lede').textContent = D.meta.tagline;
  })();

  // about
  (() => {
    $('#about-lede').textContent = D.about.lead;
    $('#about-body').innerHTML = D.about.paragraphs.map(p => `<p>${esc(p)}</p>`).join('');
    $('#info-log').innerHTML = D.about.infoList.map(row =>
      `<li><span>${esc(row.label)}</span><span>${esc(row.value)}</span></li>`).join('');
  })();

  // experience timeline
  (() => {
    const host = $('#timeline');
    host.innerHTML = D.experience.map((job) => {
      const media = (job.images || []).map((img, idx) =>
        `<div class="t-thumb" data-lightbox-group="exp-${esc(job.title)}" data-idx="${idx}"><img src="${img.file}" alt="${esc(img.caption)}" loading="lazy"></div>`).join('');
      const cert = job.certificate
        ? `<div class="t-cert-link" data-lightbox-single="${job.certificate.file}" data-cap="${esc(job.certificate.caption)}">▸ view internship certificate</div>` : '';
      return `
      <article class="t-item">
        <div class="t-node" aria-hidden="true"></div>
        <div class="t-period">${esc(job.period)}<br><span style="color:var(--ink-faint)">${esc(job.location)}</span></div>
        <div>
          <h3 class="t-role">${esc(job.title)}</h3>
          <p class="t-org">${esc(job.org)}</p>
          <ul class="t-points">${job.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
          ${media ? `<div class="t-media">${media}</div>` : ''}
          ${cert}
        </div>
      </article>`;
    }).join('');

    // stash image sets for lightbox
    D.experience.forEach(job => {
      if (job.images) window.__lbSets = { ...(window.__lbSets || {}), [`exp-${job.title}`]: job.images };
    });
  })();

  // projects — schematic case files with typewriter terminal
  (() => {
    const host = $('#projects');
    host.innerHTML = D.projects.map((p, i) => `
      <article class="p-case">
        <div class="p-info">
          <p class="p-index">${String(i + 1).padStart(2, '0')} / ${String(D.projects.length).padStart(2, '0')}</p>
          <h3 class="p-title">${esc(p.title)}</h3>
          <div class="p-tags">${p.tags.map(t => `<span class="p-tag">${esc(t)}</span>`).join('')}</div>
          <p class="p-desc">${esc(p.description)}</p>
          ${p.metrics.length ? `<div class="p-metrics">${p.metrics.map(m => `<span class="p-metric">${esc(m)}</span>`).join('')}</div>` : ''}
        </div>
        <div class="terminal" data-lines='${JSON.stringify(p.terminal)}'>
          <div class="terminal-bar"><span></span><span></span><span></span></div>
          <div class="terminal-body"></div>
        </div>
      </article>`).join('');
  })();

  // skills board
  (() => {
    const host = $('#skills-board');
    host.innerHTML = Object.entries(D.skills).map(([group, list]) => `
      <div class="skill-group">
        <h3>${esc(group)}</h3>
        <div class="skill-chips">${list.map((s, i) => `<span class="chip" style="--i:${i}">${esc(s)}</span>`).join('')}</div>
      </div>`).join('');
  })();

  // patents + publications ledger
  (() => {
    const host = $('#ip-ledger');
    const patentRows = D.patents.map(p => `
      <div class="ledger-row">
        <span class="ledger-status ${p.status.toLowerCase()}">${esc(p.status)}</span>
        <div>
          <h3 class="ledger-title">${esc(p.title)}</h3>
          <p class="ledger-meta">${esc(p.idLabel)}</p>
          <p class="ledger-desc">${esc(p.description)}</p>
          ${p.certificate ? `<div class="t-cert-link" data-lightbox-single="${p.certificate.file}" data-cap="${esc(p.certificate.caption)}">▸ view certificate</div>` : ''}
        </div>
        <span class="ledger-date">${esc(p.date)}</span>
      </div>`).join('');
    const pubRows = D.publications.map(p => `
      <div class="ledger-row">
        <span class="ledger-status published">Published</span>
        <div>
          <h3 class="ledger-title">${esc(p.title)}</h3>
          <p class="ledger-desc">${esc(p.description)}</p>
          ${p.url ? `<a class="t-cert-link" href="${p.url}" target="_blank" rel="noopener">▸ read the paper</a>` : ''}
        </div>
        <span class="ledger-date">${esc(p.date)}</span>
      </div>`).join('');
    host.innerHTML = patentRows + pubRows;
  })();

  // education
  (() => {
    $('#edu-grid').innerHTML = D.education.map((e, i) => `
      <div class="edu-card" style="--i:${i}">
        <p class="edu-period">${esc(e.period)}</p>
        <h3 class="edu-degree">${esc(e.degree)}</h3>
        <p class="edu-school">${esc(e.school)}</p>
        <p class="edu-detail">${esc(e.detail)}</p>
      </div>`).join('');
  })();

  // certifications
  (() => {
    $('#cred-grid').innerHTML = D.certifications.map((c, i) => `
      <div class="cred-card" style="--i:${i}" ${c.url ? `data-link="${c.url}"` : `data-lightbox-single="${c.file}" data-cap="${esc(c.title)} — ${esc(c.issuer)}"`}>
        <div class="cred-thumb"><img src="${c.file}" alt="${esc(c.title)}" loading="lazy"></div>
        <p class="cred-name">${esc(c.title)}</p>
        <p class="cred-issuer">${esc(c.issuer)}</p>
      </div>`).join('');

    const now = new Date();
    const valid = D.textCredentials.filter(t => !t.expires || new Date(t.expires) > now);
    $('#text-cred-list').innerHTML = valid.map(t => `
      <div class="text-cred-row">
        <div>
          <a class="name" href="${t.url || '#'}" target="_blank" rel="noopener">${esc(t.title)}</a>
          <p class="issuer">${esc(t.issuer)}${t.note ? ' — ' + esc(t.note) : ''}</p>
        </div>
        <span class="issued">${esc(t.issued || '')}</span>
      </div>`).join('');

    $('#cred-toggle').addEventListener('click', (e) => {
      const list = $('#text-cred-list');
      const open = !list.hidden;
      list.hidden = open;
      e.target.textContent = open ? 'Show verified credentials without a screenshot ↓' : 'Hide verified credentials ↑';
    });
  })();

  // achievements + activities
  (() => {
    $('#ach-list').innerHTML = D.achievements.map(a => `
      <div class="ach-row">
        <span class="ach-year">${esc(a.year)}</span>
        <div>
          <p class="ach-title">${esc(a.title)}</p>
          <p class="ach-detail">${esc(a.detail)}</p>
        </div>
        ${a.images ? `<span class="ach-media-btn" data-lightbox-group="ach-${esc(a.title)}">▸ photos</span>` : '<span></span>'}
      </div>`).join('');
    D.achievements.forEach(a => {
      if (a.images) window.__lbSets = { ...(window.__lbSets || {}), [`ach-${a.title}`]: a.images };
    });

    $('#activities').innerHTML = D.activities.map((a, i) => `
      <div class="act-card" style="--i:${i}">
        <p class="period">${esc(a.period)}</p>
        <h4 class="title">${a.link ? `<a href="${a.link}" target="_blank" rel="noopener">${esc(a.title)}</a>` : esc(a.title)}</h4>
        <p class="org">${esc(a.org)}</p>
        <p class="desc">${esc(a.description)}</p>
      </div>`).join('');
  })();

  // contact links
  (() => {
    $('#contact-row').innerHTML = `
      <span class="contact-link email-copy" id="email-copy" data-email="${D.meta.email}">
        <span class="flag">copied ✓</span>${esc(D.meta.email)}
      </span>
      <a class="contact-link" href="${D.meta.social.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>
      <a class="contact-link" href="${D.meta.social.github}" target="_blank" rel="noopener">GitHub ↗</a>
      <a class="contact-link" data-href="resume" href="${D.meta.resumePdf}" download>Download résumé ↓</a>`;

    $('#email-copy').addEventListener('click', async function () {
      try { await navigator.clipboard.writeText(this.dataset.email); }
      catch (e) { /* clipboard blocked — still show the flag as feedback */ }
      this.classList.add('copied');
      setTimeout(() => this.classList.remove('copied'), 1600);
    });
  })();

  /* ------------------------------------------------------------------ */
  /* CUSTOM CURSOR — compass-mark dot/ring with a fading ink trail       */
  /* ------------------------------------------------------------------ */
  (() => {
    if (matchMedia('(hover: none), (pointer: coarse)').matches) return;
    const el = $('#cursor');
    const trail = $('#cursor-trail');
    const ctx = trail.getContext('2d');
    let w, h;
    const resize = () => { w = trail.width = innerWidth; h = trail.height = innerHeight; };
    resize(); addEventListener('resize', resize);

    let mx = -100, my = -100, points = [];
    document.documentElement.classList.add('cursor-ready');

    addEventListener('pointermove', (e) => {
      mx = e.clientX; my = e.clientY;
      el.style.transform = `translate(${mx}px, ${my}px)`;
      points.push({ x: mx, y: my, life: 1 });
      if (points.length > 24) points.shift();
      const hit = e.target.closest('a, button, .chip, .cred-card, .t-thumb, [data-lightbox-single], [data-lightbox-group]');
      el.classList.toggle('on-link', !!hit);
    }, { passive: true });

    const drawTrail = () => {
      ctx.clearRect(0, 0, w, h);
      if (!reduceMotion && points.length > 1) {
        ctx.beginPath();
        points.forEach((p, i) => { i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); });
        ctx.strokeStyle = 'rgba(164,98,42,.22)';
        ctx.lineWidth = 1;
        ctx.stroke();
        points = points.map(p => ({ ...p, life: p.life - .06 })).filter(p => p.life > 0);
      }
      requestAnimationFrame(drawTrail);
    };
    requestAnimationFrame(drawTrail);
  })();

  /* ------------------------------------------------------------------ */
  /* SCROLL PROGRESS + TRACE SPINE (the one signature animated element)  */
  /* ------------------------------------------------------------------ */
  (() => {
    const progress = $('#progress');
    const path = $('#spine-path');
    let len = 0;
    const measure = () => {
      len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
    };
    // build a path that runs the height of <main>, viewBox-relative
    const buildPath = () => {
      const main = $('#main');
      const h = main.offsetHeight;
      $('#spine svg').setAttribute('viewBox', `0 0 100 ${h}`);
      path.setAttribute('d', `M 6 0 L 6 ${h}`);
      measure();
    };
    buildPath();
    addEventListener('resize', () => buildPath());

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const p = scrollable > 0 ? Math.min(1, Math.max(0, scrollY / scrollable)) : 0;
      progress.style.width = `${p * 100}%`;
      const offset = len - len * p;
      path.style.strokeDashoffset = `${Math.max(0, offset)}`;

      // active nav link
      const sections = $$('main section[id]');
      let current = sections[0]?.id;
      for (const s of sections) {
        if (s.getBoundingClientRect().top < innerHeight * .4) current = s.id;
      }
      $$('.topnav a').forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${current}`));
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  /* ------------------------------------------------------------------ */
  /* REVEAL ENGINE — IntersectionObserver adds .is-in once, unobserves   */
  /* ------------------------------------------------------------------ */
  (() => {
    const targets = $$('.section-title, .about-lede, .about-body, .t-item, .p-case, .ledger-row, .ach-row, .chip, .cred-card, .edu-card, .act-card, .gh-repo');
    if (!('IntersectionObserver' in window) || reduceMotion) {
      targets.forEach(t => t.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: .18, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(t => io.observe(t));

    // late-mounted nodes (gh repos, cred toggle content) get observed too
    const mo = new MutationObserver(() => {
      $$('.gh-repo, .cred-card').forEach(t => { if (!t.classList.contains('is-in')) io.observe(t); });
    });
    mo.observe($('#gh-panel'), { childList: true });
  })();

  /* ------------------------------------------------------------------ */
  /* TERMINAL TYPEWRITER — plays once each terminal enters view          */
  /* ------------------------------------------------------------------ */
  (() => {
    const terms = $$('.terminal');
    const played = new WeakSet();
    const play = (term) => {
      if (played.has(term)) return;
      played.add(term);
      const lines = JSON.parse(term.dataset.lines || '[]');
      const body = $('.terminal-body', term);
      body.innerHTML = '';
      if (reduceMotion) { body.innerHTML = lines.map(l => `<div class="line" style="opacity:1">${esc(l)}</div>`).join(''); return; }
      let li = 0;
      const nextLine = () => {
        if (li >= lines.length) { body.insertAdjacentHTML('beforeend', '<span class="caret"></span>'); return; }
        const div = document.createElement('div');
        div.className = 'line';
        body.appendChild(div);
        const full = lines[li]; let ci = 0;
        const typeChar = () => {
          div.textContent = full.slice(0, ci + 1);
          div.classList.add('terminal-line-in');
          ci++;
          if (ci < full.length) setTimeout(typeChar, 14);
          else { li++; setTimeout(nextLine, 220); }
        };
        typeChar();
      };
      nextLine();
    };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) play(e.target); });
      }, { threshold: .5 });
      terms.forEach(t => io.observe(t));
    } else {
      terms.forEach(play);
    }
  })();

  /* ------------------------------------------------------------------ */
  /* 3D TILT — hero rig + name respond to pointer                        */
  /* ------------------------------------------------------------------ */
  (() => {
    if (reduceMotion || matchMedia('(hover: none)').matches) return;
    const stage = $('#rig-stage');
    const visual = $('.hero-visual');
    if (visual) {
      visual.addEventListener('pointermove', (e) => {
        const r = visual.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        stage.style.transform = `rotateX(${18 - py * 22}deg) rotateY(${-18 + px * 26}deg)`;
      });
      visual.addEventListener('pointerleave', () => { stage.style.transform = ''; });
    }

    const heroName = $('#hero-name');
    const heroCopy = $('.hero-copy');
    if (heroName && heroCopy) {
      heroCopy.addEventListener('pointermove', (e) => {
        const r = heroName.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        heroName.style.transform = `rotateX(${-py * 16}deg) rotateY(${px * 18}deg)`;
      });
      heroCopy.addEventListener('pointerleave', () => { heroName.style.transform = ''; });
    }
  })();

  /* ------------------------------------------------------------------ */
  /* LIGHTBOX — single images and grouped image sets                     */
  /* ------------------------------------------------------------------ */
  (() => {
    const lb = $('#lightbox'), img = $('#lightbox-img'), cap = $('#lightbox-cap');
    const prevBtn = $('#lightbox-prev'), nextBtn = $('#lightbox-next');
    let group = null, idx = 0;

    const showSingle = (file, caption) => {
      group = null;
      img.src = file; cap.textContent = caption || '';
      prevBtn.style.display = nextBtn.style.display = 'none';
      lb.classList.add('is-open');
    };
    const showGroup = (setKey, startIdx) => {
      const set = (window.__lbSets || {})[setKey];
      if (!set || !set.length) return;
      group = set; idx = startIdx || 0;
      render();
      prevBtn.style.display = nextBtn.style.display = set.length > 1 ? '' : 'none';
      lb.classList.add('is-open');
    };
    const render = () => {
      const item = group[idx];
      img.src = item.file; cap.textContent = item.caption || '';
    };
    const close = () => { lb.classList.remove('is-open'); img.src = ''; };

    document.addEventListener('click', (e) => {
      const single = e.target.closest('[data-lightbox-single]');
      const grp = e.target.closest('[data-lightbox-group]');
      const linkCard = e.target.closest('[data-link]');
      if (single) { showSingle(single.dataset.lightboxSingle, single.dataset.cap); }
      else if (grp) { showGroup(grp.dataset.lightboxGroup, +(grp.dataset.idx || 0)); }
      else if (linkCard) { window.open(linkCard.dataset.link, '_blank', 'noopener'); }
    });

    prevBtn.addEventListener('click', () => { if (!group) return; idx = (idx - 1 + group.length) % group.length; render(); });
    nextBtn.addEventListener('click', () => { if (!group) return; idx = (idx + 1) % group.length; render(); });
    $('#lightbox-close').addEventListener('click', close);
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn.click();
    });
  })();

  /* ------------------------------------------------------------------ */
  /* SIGNATURE PAD — canvas draw, clear, save-as-image                   */
  /* ------------------------------------------------------------------ */
  (() => {
    const canvas = $('#pad-canvas');
    const ctx = canvas.getContext('2d');
    const fit = () => {
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * devicePixelRatio;
      canvas.height = r.height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--copper').trim() || '#a4622a';
      ctx.lineWidth = 2; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    };
    fit();
    let drawing = false, last = null;
    const pos = (e) => {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    canvas.addEventListener('pointerdown', (e) => { drawing = true; last = pos(e); canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointermove', (e) => {
      if (!drawing) return;
      const p = pos(e);
      ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(p.x, p.y); ctx.stroke();
      last = p;
    });
    ['pointerup', 'pointerleave'].forEach(ev => canvas.addEventListener(ev, () => drawing = false));
    $('#pad-clear').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
    $('#pad-save').addEventListener('click', () => {
      const a = document.createElement('a');
      a.download = 'signature.png'; a.href = canvas.toDataURL('image/png'); a.click();
    });
  })();

  /* ------------------------------------------------------------------ */
  /* GITHUB LIVE FEED                                                     */
  /* ------------------------------------------------------------------ */
  (async () => {
    const panel = $('#gh-panel');
    const user = D.meta.githubUsername;
    try {
      const [profileRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${user}`),
        fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=5`),
      ]);
      if (!profileRes.ok || !reposRes.ok) throw new Error('rate limited');
      const profile = await profileRes.json();
      const repos = await reposRes.json();
      panel.innerHTML = `
        <div class="gh-stats">
          <div><b>${profile.public_repos ?? '—'}</b><span>public repos</span></div>
          <div><b>${profile.followers ?? '—'}</b><span>followers</span></div>
          <div><b>${profile.following ?? '—'}</b><span>following</span></div>
        </div>
        <div class="gh-repos">
          ${repos.map(r => `
            <a class="gh-repo" href="${r.html_url}" target="_blank" rel="noopener">
              <p class="name">${esc(r.name)}</p>
              <p class="desc">${esc(r.description || 'No description yet.')}</p>
            </a>`).join('')}
        </div>`;
    } catch (err) {
      panel.innerHTML = `<p class="gh-fallback">Live repo data is momentarily unavailable (GitHub's API is rate-limited). See the full profile at <a href="${D.meta.social.github}" target="_blank" rel="noopener">${D.meta.social.github}</a>.</p>`;
    }
  })();

  /* ------------------------------------------------------------------ */
  /* MOBILE NAV — hamburger reveals the section links below 780px        */
  /* ------------------------------------------------------------------ */
  (() => {
    const btn = $('#nav-toggle');
    const links = $('.nav-links');
    if (!btn || !links) return;
    btn.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      btn.textContent = open ? '✕' : '☰';
      btn.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('is-open'); btn.textContent = '☰'; btn.setAttribute('aria-expanded', 'false');
    }));
  })();

  /* re-assert resume hrefs in case anything above rendered its own link */
  $$('[data-href="resume"]').forEach(n => n.href = D.meta.resumePdf);
})();
