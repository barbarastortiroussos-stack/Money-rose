// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const aberto = navLinks.classList.toggle('aberto');
    menuToggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('aberto');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Revelar seções ao rolar a página
const alvosRevelar = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && alvosRevelar.length) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });
  alvosRevelar.forEach(el => observador.observe(el));
} else {
  alvosRevelar.forEach(el => el.classList.add('visivel'));
}
