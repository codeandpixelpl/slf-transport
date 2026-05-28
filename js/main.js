/* ============================================================
   SLF TRANSPORT — main.js
   FAQ accordion · Mobile nav · Scrolled header
   ============================================================ */

(() => {

  // ---- Fleet tabs ----
  const fleetTabs = document.querySelectorAll('[data-fleet-tab]');
  const fleetPanels = document.querySelectorAll('[data-fleet-panel]');
  fleetTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.fleetTab;
      fleetTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      fleetPanels.forEach((p) => {
        const active = p.dataset.fleetPanel === target;
        p.classList.toggle('is-active', active);
        p.hidden = !active;
      });
    });
  });

  // ---- FAQ accordion ----
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq__q');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      // Close all
      faqItems.forEach((other) => {
        other.classList.remove('is-open');
        const otherBtn = other.querySelector('.faq__q');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });
      // Open clicked (toggle)
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ---- Hamburger / mobile nav ----
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    // Close on link click
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('is-open')) {
          nav.classList.remove('is-open');
          hamburger.classList.remove('is-open');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // ---- Form submit (wycena + kontakt) ----
  // Prototyp: walidacja przeglądarki + redirect do dziekujemy.html.
  // Docelowo (WordPress) — POST na office@slftransport.eu.
  document.querySelectorAll('form.form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      window.location.href = 'dziekujemy.html';
    });
  });

  // ---- Header scrolled state ----
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

})();
