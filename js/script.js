// main.js — minimal, dependency-free
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- HERO: word-by-word reveal (controlled) ---------- */
  const wordNodes = Array.from(document.querySelectorAll('.hero-headline .word')).map(el => {
    return { el, text: (el.dataset.word || '').trim() };
  });

  // reveal words sequentially
  (async function revealWords() {
    for (let i = 0; i < wordNodes.length; i++) {
      await revealWord(wordNodes[i].el, wordNodes[i].text);
      // tiny pause between words to feel cinematic
      await pause(160);
    }
  })();

  function revealWord(node, text) {
    return new Promise(resolve => {
      if (!text) { resolve(); return; }
      node.style.opacity = '1';
      node.style.transform = 'translateY(0)';
      node.setAttribute('aria-hidden', 'false');
      node.innerHTML = ''; // clear
      let idx = 0;
      const charDelay = 36; // ~36ms per char, keeps reveal short
      const interval = setInterval(() => {
        // preserve spaces
        node.innerHTML += (text[idx] === ' ') ? '&nbsp;' : text[idx];
        idx++;
        if (idx >= text.length) {
          clearInterval(interval);
          // small settle
          setTimeout(resolve, 120);
        }
      }, charDelay);
    });
  }

  function pause(ms) { return new Promise(r => setTimeout(r, ms)); }

  /* ---------- MEGA MENU: hover + click accessibility ---------- */
  document.querySelectorAll('.nav-item.has-mega').forEach(item => {
    const btn = item.querySelector('.nav-link');
    const mega = item.querySelector('.mega');

    if (!btn || !mega) return;

    // mouse interactions
    item.addEventListener('mouseenter', () => openMega(btn, mega));
    item.addEventListener('mouseleave', () => closeMega(btn, mega));

    // touch / keyboard - toggle on click
    btn.addEventListener('click', (ev) => {
      ev.preventDefault();
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeMega(btn, mega); else openMega(btn, mega);
    });

    // close on blur (slight delay to allow clicking inside)
    btn.addEventListener('blur', () => setTimeout(() => {
      if (document.activeElement && !mega.contains(document.activeElement)) closeMega(btn, mega);
    }, 120));
  });

  function openMega(btn, mega) {
    btn.setAttribute('aria-expanded', 'true');
    mega.style.display = 'block';
    // force reflow for transition
    void mega.offsetWidth;
    mega.style.opacity = '1';
    mega.style.transform = 'translateY(0)';
    mega.setAttribute('aria-hidden', 'false');
  }

  function closeMega(btn, mega) {
    btn.setAttribute('aria-expanded', 'false');
    mega.style.opacity = '0';
    mega.style.transform = 'translateY(-6px)';
    mega.setAttribute('aria-hidden', 'true');
    // delay actual hide to allow transition
    setTimeout(() => {
      if (mega.getAttribute('aria-hidden') === 'true') mega.style.display = 'none';
    }, 200);
  }

  /* ---------- Accessibility: reduce animations if user prefers ---------- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.lines-group').forEach(g => g.style.animation = 'none');
    document.querySelectorAll('.hero-headline .word').forEach(w => {
      w.style.transition = 'none';
      w.style.opacity = '1';
      w.style.transform = 'translateY(0)';
    });
  }

  /* ---------- Performance safeguard: pause heavy animations on tab hidden ---------- */
  document.addEventListener('visibilitychange', () => {
    const lines = document.querySelectorAll('.lines-group');
    if (document.hidden) {
      lines.forEach(l => l.style.animationPlayState = 'paused');
    } else {
      lines.forEach(l => l.style.animationPlayState = 'running');
    }
  });

});
