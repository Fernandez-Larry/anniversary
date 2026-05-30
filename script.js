/* ══════════════════════════════════════════════════════════════
   ANNIVERSARY WEBSITE — script.js
   Vanilla JS — no frameworks
══════════════════════════════════════════════════════════════ */

'use strict';

/* ─── ✏️  EDIT THESE TO PERSONALISE ─────────────────────────── */

// Anniversary start date (YYYY, MM-1, DD) — month is 0-indexed
const ANNIVERSARY_DATE = new Date(2024, 5, 1); // e.g. June 1, 2024

// Photo captions (edit freely)
const CAPTIONS = [
  "The day it all started 💫",
  "Our first adventure together 🗺️",
  "Laughing till it hurt 😂❤️",
  "That rainy afternoon 🌧️",
  "Our favourite spot 🌸",
  "Silly faces, serious love 🤪",
  "Sunset chasing ☀️",
  "Cozy days in ☕",
  "Best road trip ever 🚗",
  "Dancing like no one's watching 💃🕺",
  "The look that says everything 👀❤️",
  "365 days and counting 🥂",
];

// Reasons + expanded detail (edit freely)
const REASONS = [
  { short: "Your smile ❤️",      detail: "The way you smile lights up every room — and every corner of my heart." },
  { short: "Your laugh ❤️",      detail: "I would do anything to hear you laugh. It's my favourite sound in the world." },
  { short: "Your kindness ❤️",   detail: "You see the best in everyone. It makes me want to be better too." },
  { short: "Your support ❤️",    detail: "You believed in me when I didn't believe in myself. That means everything." },
  { short: "Your hugs ❤️",       detail: "Home is wherever you're holding me." },
  { short: "Your patience ❤️",   detail: "You wait for me, understand me, and never rush me. I'm so grateful." },
  { short: "The memories ❤️",    detail: "Every single moment with you is one I never want to forget." },
  { short: "Your honesty ❤️",    detail: "You tell me the truth with so much love. I trust you completely." },
  { short: "Your weirdness ❤️",  detail: "You match my chaos perfectly. Two weirdos, one perfect pair." },
  { short: "Your strength ❤️",   detail: "Watching you face challenges inspires me every single day." },
  { short: "Your heart ❤️",      detail: "You love deeply and fiercely. I'm so lucky to be loved by you." },
  { short: "Being yours ❤️",     detail: "Knowing I get to call you mine is the greatest gift." },
];

// Timeline events (edit freely)
const TIMELINE = [
  { month: "Month 1",   icon: "🌱", desc: "The beginning — nervous smiles, slow conversations, and a feeling I couldn't quite name yet." },
  { month: "Month 2",   icon: "☕", desc: "Long coffee dates that stretched into evening. We never ran out of things to say." },
  { month: "Month 3",   icon: "🌸", desc: "Our first little adventure together. I knew then that I wanted more of this." },
  { month: "Month 4",   icon: "🎶", desc: "Sharing playlists, discovering our songs. Music suddenly meant more." },
  { month: "Month 5",   icon: "🌧️", desc: "A rainy day indoors. We laughed, cooked badly, and didn't mind one bit." },
  { month: "Month 6",   icon: "🌅", desc: "Halfway through the year, and I was already so deeply happy with you." },
  { month: "Month 7",   icon: "🚗", desc: "Our road trip. Windows down, music loud, zero plan. Perfect." },
  { month: "Month 8",   icon: "🎉", desc: "We celebrated together for the first time. You made it unforgettable." },
  { month: "Month 9",   icon: "🌙", desc: "Late-night talks about everything and nothing. Those are my favourites." },
  { month: "Month 10",  icon: "🤗", desc: "The hard days got easier because you were beside me. Always." },
  { month: "Month 11",  icon: "✨", desc: "I caught myself thinking — I want this forever." },
  { month: "Month 12",  icon: "🥂", desc: "A full year. A full heart. Here's to everything that comes next." },
];

// Love letter (edit freely — each string = one line)
const LETTER_LINES = [
  "My love,",
  "",
  "A year ago I couldn't have imagined how much my life would change.",
  "Then you happened — quietly, completely, and all at once.",
  "",
  "You've made the ordinary extraordinary.",
  "The small moments feel like gifts because you're in them.",
  "",
  "Thank you for your patience, your laughter,",
  "your honesty, and your heart.",
  "Thank you for choosing me, over and over.",
  "",
  "This is just the beginning of our story,",
  "and I can't wait to write every page with you.",
  "",
  "Forever yours ❤️",
];

/* ─── END OF EDITABLE SECTION ────────────────────────────────── */




/* ══════════════════════════════════════════════════════════════
   LOADING
══════════════════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => {
    const ls = document.getElementById('loading-screen');
    ls.classList.add('fade-out');
    setTimeout(() => ls.remove(), 900);

    initWelcome();
    initFallingHearts();
    initCursorTrail();
    initMusicBtn();
  }, 1200);
});

/* ══════════════════════════════════════════════════════════════
   CURSOR TRAIL
══════════════════════════════════════════════════════════════ */
function initCursorTrail() {
  const container = document.getElementById('cursor-trail');
  document.addEventListener('mousemove', e => {
    const h = document.createElement('span');
    h.className = 'cursor-heart';
    h.textContent = '❤';
    h.style.left = e.clientX + 'px';
    h.style.top  = e.clientY + 'px';
    container.appendChild(h);
    setTimeout(() => h.remove(), 800);
  });
}

/* ══════════════════════════════════════════════════════════════
   FALLING HEARTS
══════════════════════════════════════════════════════════════ */
function initFallingHearts() {
  const container = document.getElementById('falling-hearts');
  const emojis = ['❤️','💕','💖','💗','🌸'];
  setInterval(() => {
    const h = document.createElement('span');
    h.className = 'falling-heart';
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = (Math.random() * 0.8 + 0.6) + 'rem';
    h.style.animationDuration = (Math.random() * 6 + 5) + 's';
    h.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(h);
    setTimeout(() => h.remove(), 12000);
  }, 800);
}

/* ══════════════════════════════════════════════════════════════
   MUSIC BUTTON
══════════════════════════════════════════════════════════════ */
function initMusicBtn() {
  const btn   = document.getElementById('music-btn');
  const audio = document.getElementById('bg-music');
  let playing = false;
  btn.addEventListener('click', () => {
    if (!playing) {
      audio.play().catch(() => {}); // may fail without user gesture first
      btn.textContent = '🔇';
    } else {
      audio.pause();
      btn.textContent = '🎵';
    }
    playing = !playing;
  });
}

/* ══════════════════════════════════════════════════════════════
   PAGE 1 — WELCOME SCREEN
══════════════════════════════════════════════════════════════ */

// Floating hearts & particles on canvas
function initWelcome() {
  const canvas = document.getElementById('welcome-canvas');
  const ctx    = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = Array.from({ length: 60 }, () => createParticle());

  function createParticle() {
    return {
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      vy:    -(Math.random() * 0.6 + 0.2),
      vx:    (Math.random() - 0.5) * 0.3,
      size:  Math.random() * 16 + 8,
      alpha: Math.random() * 0.4 + 0.1,
    };
  }

  function drawHeart(ctx, x, y, size, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = `hsl(${330 + Math.random() * 20}, 70%, 65%)`;
    ctx.font = size + 'px serif';
    ctx.fillText('♥', x, y);
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background gradient
    const g = ctx.createRadialGradient(
      canvas.width/2, canvas.height/2, 0,
      canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height)
    );
    g.addColorStop(0, '#1a0610');
    g.addColorStop(1, '#0d0608');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      drawHeart(ctx, p.x, p.y, p.size, p.alpha);
      p.y  += p.vy;
      p.x  += p.vx;
      p.alpha += (Math.random() - 0.5) * 0.005;
      p.alpha  = Math.max(0.05, Math.min(0.55, p.alpha));
      if (p.y < -20) { Object.assign(p, createParticle(), { y: canvas.height + 20 }); }
    });

    requestAnimationFrame(animate);
  }
  animate();

  // Position NO button initially
  positionNoBtn();
}

/* ─── NO BUTTON EVASION ──────────────────────────────────────── */
let noAttempts = 0;
const noMessages = [
  "Are you sure? 🥺",
  "Really sure? 😭",
  "Think again 😏",
  "The answer is obvious ❤️",
  "You know you want to click YES 😌",
  "Come on… 🥺",
  "Nope! 😈",
  "Nice try 👀",
];
const btnNo  = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const noMsg  = document.getElementById('no-msg');

let noScale  = 1;
let yesScale = 1;

function positionNoBtn() {
  if (!btnNo) return;
  const margin = 60;
  const vw = window.innerWidth  - margin;
  const vh = window.innerHeight - margin;
  btnNo.style.left = Math.random() * (vw - 100) + margin/2 + 'px';
  btnNo.style.top  = Math.random() * (vh - 50)  + margin/2 + 'px';
}

function evadeNo(e) {
  e.preventDefault();
  noAttempts++;

  positionNoBtn();

  // Shrink NO, grow YES
  noScale  = Math.max(0.3, noScale  - 0.08);
  yesScale = Math.min(2.0, yesScale + 0.06);
  btnNo.style.fontSize  = noScale  * 1  + 'rem';
  btnYes.style.fontSize = yesScale * 1  + 'rem';
  btnYes.style.padding  = `${0.75 * yesScale}rem ${2 * yesScale}rem`;

  // Show message
  const msg = noMessages[Math.min(noAttempts - 1, noMessages.length - 1)];
  noMsg.textContent = msg;
  noMsg.style.animation = 'none';
  requestAnimationFrame(() => { noMsg.style.animation = ''; });

  // Hide NO after enough attempts
  if (noAttempts >= 8) {
    btnNo.style.display = 'none';
    noMsg.textContent = "The answer is YES 💖";
  }
}

/* ─── YES! ───────────────────────────────────────────────────── */
function handleYes() {
  const fw = document.getElementById('fireworks-canvas');
  fw.classList.add('active');
  launchFireworks(fw);
  spawnConfetti();

  setTimeout(() => {
    document.getElementById('page-welcome').classList.remove('active');
    document.getElementById('page-welcome').classList.add('out');
    document.getElementById('page-tunnel').classList.add('active');
    startTunnel();
  }, 2800);
}

/* ─── FIREWORKS ──────────────────────────────────────────────── */
function launchFireworks(canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const bursts = [];

  function createBurst(x, y) {
    const count = 60;
    const particles = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: `hsl(${Math.random() * 60 + 330}, 80%, 60%)`,
        size: Math.random() * 4 + 2,
      });
    }
    bursts.push(particles);
  }

  // Spawn several bursts
  const positions = [
    [0.2, 0.3],[0.5, 0.2],[0.8, 0.3],
    [0.3, 0.5],[0.7, 0.5],[0.5, 0.7],
  ];
  positions.forEach(([xr, yr], i) => {
    setTimeout(() => createBurst(canvas.width * xr, canvas.height * yr), i * 200);
  });

  let frame = 0;
  function animate() {
    ctx.fillStyle = 'rgba(0,0,0,0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    bursts.forEach(particles => {
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        p.vy += 0.08;
        p.alpha -= 0.018;
        if (p.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    });

    frame++;
    if (frame < 150) requestAnimationFrame(animate);
  }
  animate();
}

/* ─── CONFETTI ───────────────────────────────────────────────── */
function spawnConfetti() {
  const colors = ['#c2446a','#d4a853','#f0cc80','#e8738a','#fff','#ff9fb2'];
  for (let i = 0; i < 120; i++) {
    const c = document.createElement('div');
    c.className = 'confetti-piece';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.top  = '-10px';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
    c.style.animationDelay    = Math.random() * 1.5 + 's';
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

/* ══════════════════════════════════════════════════════════════
   PAGE 2 — MEMORY TUNNEL TYPEWRITER
══════════════════════════════════════════════════════════════ */
const TUNNEL_LINES = [
  "One year.",
  "Countless laughs.",
  "Countless memories.",
  "And my favourite part was spending it with you.",
];

function startTunnel() {
  const container = document.getElementById('typewriter-text');
  container.innerHTML = '';

  let lineIdx = 0;
  let charIdx = 0;
  let currentSpan = null;
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';

  function typeLine() {
    if (lineIdx >= TUNNEL_LINES.length) {
      // Done — transition to gallery
      setTimeout(showMainSite, 1500);
      return;
    }

    if (charIdx === 0) {
      currentSpan = document.createElement('span');
      currentSpan.className = 'typewriter-line';
      container.appendChild(currentSpan);
    }

    const line = TUNNEL_LINES[lineIdx];

    if (charIdx < line.length) {
      currentSpan.textContent = line.slice(0, charIdx + 1);
      container.appendChild(cursor);
      charIdx++;
      setTimeout(typeLine, 55 + Math.random() * 40);
    } else {
      charIdx = 0;
      lineIdx++;
      setTimeout(typeLine, 900);
    }
  }

  typeLine();
}

/* ══════════════════════════════════════════════════════════════
   SHOW MAIN SITE
══════════════════════════════════════════════════════════════ */
function showMainSite() {
  document.getElementById('page-tunnel').classList.remove('active');
  document.getElementById('page-tunnel').classList.add('out');

  const site = document.getElementById('main-site');
  site.classList.remove('hidden');

  buildGallery();
  buildTimeline();
  buildReasons();
  buildLetter();
  buildFinalHearts();
  startCounter();
  initStars();
  initScrollObserver();
}

/* ══════════════════════════════════════════════════════════════
   PAGE 3 — GALLERY
══════════════════════════════════════════════════════════════ */
function buildGallery() {
  const grid = document.getElementById('gallery-grid');
  const rotations = [-4,-2,-3,3,2,4,-1,1,-3,2,-2,3];

  for (let i = 0; i < 12; i++) {
    const rot = rotations[i];
    const card = document.createElement('div');
    card.className = 'polaroid';
    card.style.setProperty('--rotate', `rotate(${rot}deg)`);
    card.style.transform = `rotate(${rot}deg)`;

    const img = document.createElement('img');
    img.src  = `images/photo${i + 1}.jpg`;
    img.alt  = CAPTIONS[i];
    img.loading = 'lazy';
    // Fallback placeholder
    img.onerror = function() {
      this.src = `https://picsum.photos/seed/${i + 10}/400/300`;
    };

    const cap = document.createElement('p');
    cap.className = 'polaroid-caption';
    cap.textContent = CAPTIONS[i];

    card.appendChild(img);
    card.appendChild(cap);

    // Hover hearts
    card.addEventListener('mouseenter', () => spawnPhotoHearts(card));
    // Click = lightbox
    card.addEventListener('click', () => openLightbox(img.src, CAPTIONS[i]));

    grid.appendChild(card);
  }
}

function spawnPhotoHearts(card) {
  for (let i = 0; i < 6; i++) {
    const h = document.createElement('span');
    h.className = 'photo-heart';
    h.textContent = '❤️';
    const angle = (i / 6) * Math.PI * 2;
    h.style.setProperty('--tx', `${Math.cos(angle) * 50}px`);
    h.style.setProperty('--ty', `${Math.sin(angle) * 50 - 20}px`);
    h.style.left = '50%'; h.style.top = '50%';
    h.style.animationDelay = i * 0.08 + 's';
    card.appendChild(h);
    setTimeout(() => h.remove(), 900);
  }
}

function openLightbox(src, caption) {
  const lb   = document.getElementById('lightbox');
  const img  = document.getElementById('lightbox-img');
  const cap  = document.getElementById('lightbox-caption');
  img.src    = src;
  cap.textContent = caption;
  lb.classList.remove('hidden');
  requestAnimationFrame(() => lb.classList.add('visible'));
}

function closeLightbox(e) {
  if (e && e.target !== document.getElementById('lightbox') && !e.target.classList.contains('lightbox-close')) return;
  const lb = document.getElementById('lightbox');
  lb.classList.remove('visible');
  setTimeout(() => lb.classList.add('hidden'), 400);
}

/* ══════════════════════════════════════════════════════════════
   PAGE 4 — TIMELINE
══════════════════════════════════════════════════════════════ */
function buildTimeline() {
  const tl = document.getElementById('timeline');
  TIMELINE.forEach(item => {
    const card = document.createElement('div');
    card.className = 'timeline-card';
    card.innerHTML = `
      <div class="timeline-icon">${item.icon}</div>
      <div class="timeline-month">${item.month}</div>
      <div class="timeline-desc">${item.desc}</div>
    `;
    tl.appendChild(card);
  });
}

/* ══════════════════════════════════════════════════════════════
   PAGE 5 — REASONS
══════════════════════════════════════════════════════════════ */
function buildReasons() {
  const grid = document.getElementById('reasons-grid');
  REASONS.forEach(r => {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.innerHTML = `
      <span class="reason-short">${r.short}</span>
      <div class="reason-detail">${r.detail}</div>
    `;
    card.addEventListener('click', () => toggleReason(card));
    grid.appendChild(card);
  });
}

function toggleReason(card) {
  const wasExpanded = card.classList.contains('expanded');
  document.querySelectorAll('.reason-card.expanded').forEach(c => c.classList.remove('expanded'));
  if (!wasExpanded) {
    card.classList.add('expanded');
    spawnSparkles(card);
  }
}

function spawnSparkles(card) {
  const icons = ['✨','⭐','💫','🌟'];
  for (let i = 0; i < 8; i++) {
    const s = document.createElement('span');
    s.className = 'sparkle';
    s.textContent = icons[Math.floor(Math.random() * icons.length)];
    const angle = (i / 8) * Math.PI * 2;
    s.style.setProperty('--sx', `${Math.cos(angle) * 60}px`);
    s.style.setProperty('--sy', `${Math.sin(angle) * 40}px`);
    s.style.left = Math.random() * 80 + 10 + '%';
    s.style.top  = Math.random() * 80 + 10 + '%';
    s.style.animationDelay = i * 0.06 + 's';
    card.appendChild(s);
    setTimeout(() => s.remove(), 900);
  }
}

/* ══════════════════════════════════════════════════════════════
   PAGE 6 — LETTER
══════════════════════════════════════════════════════════════ */
function buildLetter() {
  const linesEl = document.getElementById('letter-lines');
  LETTER_LINES.forEach((line, i) => {
    const p = document.createElement('p');
    p.className = 'letter-line';
    p.textContent = line || '\u00A0'; // non-breaking space for blank lines
    p.style.animationDelay = '0s'; // triggered when envelope opens
    p.style.animationPlayState = 'paused';
    linesEl.appendChild(p);
  });
}

let envelopeOpened = false;

function openEnvelope() {
  if (envelopeOpened) return;
  envelopeOpened = true;

  const envelope = document.getElementById('envelope');
  const letter   = document.getElementById('letter');

  envelope.classList.add('open');

  setTimeout(() => {
    envelope.style.display = 'none';
    letter.classList.remove('hidden');

    const lines = document.querySelectorAll('.letter-line');
    lines.forEach((l, i) => {
      l.style.animationDelay = i * 0.18 + 's';
      l.style.animationPlayState = 'running';
    });
  }, 700);
}

/* ══════════════════════════════════════════════════════════════
   PAGE 7 — COUNTER
══════════════════════════════════════════════════════════════ */
function startCounter() {
  function update() {
    const now   = new Date();
    const diff  = now - ANNIVERSARY_DATE;

    const secs  = Math.floor(diff / 1000);
    const mins  = Math.floor(secs  / 60);
    const hours = Math.floor(mins  / 60);
    const days  = Math.floor(hours / 24);

    document.getElementById('c-days').textContent  = String(days).padStart(3,'0');
    document.getElementById('c-hours').textContent = String(hours % 24).padStart(2,'0');
    document.getElementById('c-mins').textContent  = String(mins  % 60).padStart(2,'0');
    document.getElementById('c-secs').textContent  = String(secs  % 60).padStart(2,'0');
  }
  update();
  setInterval(update, 1000);
}

/* ══════════════════════════════════════════════════════════════
   PAGE 8 — STARS & FLOATING HEARTS
══════════════════════════════════════════════════════════════ */
function initStars() {
  const canvas = document.getElementById('stars-canvas');
  const ctx    = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();

  const stars = Array.from({ length: 200 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    alpha: Math.random(),
    speed: Math.random() * 0.008 + 0.002,
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.alpha += s.speed;
      if (s.alpha > 1 || s.alpha < 0) s.speed *= -1;
      ctx.save();
      ctx.globalAlpha = s.alpha;
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

function buildFinalHearts() {
  const container = document.getElementById('final-hearts');
  const emojis = ['❤️','💕','💖','💗','🌸'];
  setInterval(() => {
    const h = document.createElement('span');
    h.className = 'float-heart';
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.left = Math.random() * 90 + 5 + '%';
    h.style.bottom = '0';
    h.style.animationDuration = (Math.random() * 3 + 4) + 's';
    h.style.animationDelay   = Math.random() * 2 + 's';
    container.appendChild(h);
    setTimeout(() => h.remove(), 8000);
  }, 600);
}

/* ══════════════════════════════════════════════════════════════
   SCROLL OBSERVER (timeline cards)
══════════════════════════════════════════════════════════════ */
function initScrollObserver() {
  const options = { threshold: 0.15 };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll('.timeline-card').forEach(card => observer.observe(card));
}

/* ══════════════════════════════════════════════════════════════
   REPLAY
══════════════════════════════════════════════════════════════ */
function replayStory() {
  location.reload();
}