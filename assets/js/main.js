(() => {
  const button = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!button || !nav) return;

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      button.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });
})();
