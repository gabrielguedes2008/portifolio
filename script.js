// Adicione os links reais aqui quando estiverem disponíveis.
const portfolioLinks = {
  projects: { vertice: null, averon: null, bravo: null, psicoc: null, cema: null, orvia: null },
  socials: { linkedin: null, facebook: null, instagram: null },
};

const dialog = document.querySelector('.link-dialog');
const dialogTitle = dialog.querySelector('h2');
const dialogText = dialog.querySelector('p');

function openDestination(url, social = false) {
  if (url) {
    const destination = new URL(url);
    if (destination.protocol === 'https:' || destination.protocol === 'http:') {
      window.open(destination.href, '_blank', 'noopener,noreferrer');
      return;
    }
  }
  dialogTitle.textContent = 'Link disponível em breve';
  dialogText.textContent = social
    ? 'O endereço desta rede social será adicionado em breve.'
    : 'O endereço deste projeto será adicionado em breve.';
  dialog.showModal();
}

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => openDestination(portfolioLinks.projects[button.dataset.project]));
});
document.querySelectorAll('[data-social]').forEach(button => {
  button.addEventListener('click', () => openDestination(portfolioLinks.socials[button.dataset.social], true));
});
dialog.querySelectorAll('button').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
} });

// Reveal each element once, while preserving the content without JavaScript.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver;
const revealElements = document.querySelectorAll(
  '.hero-heading, .hero-description, .tools > *, .section-title, .project, ' +
  '.skill-card, .skills-contact, .reasons > div, .about-image, ' +
  '.contact > h2, .contact-button, .footer-bottom'
);

if (!motionPreference.matches && 'IntersectionObserver' in window) {
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

  revealElements.forEach(element => {
    if (element.matches('.project, .skill-card')) {
      const index = Array.from(element.parentElement.children).indexOf(element);
      element.style.setProperty('--reveal-delay', `${(index % 2) * 100}ms`);
    }
    element.classList.add('reveal');
    revealObserver.observe(element);
  });
}

document.addEventListener('focusin', event => {
  const element = event.target.closest('.reveal');
  if (element) {
    element.classList.add('is-visible');
    revealObserver?.unobserve(element);
  }
});

// Smooth anchor navigation with a gentle start and finish.
let scrollFrame;
function cancelSmoothScroll() {
  cancelAnimationFrame(scrollFrame);
  document.documentElement.style.removeProperty('scroll-behavior');
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    cancelSmoothScroll();

    const start = window.scrollY;
    const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
    const maximum = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const end = Math.min(maximum, Math.max(0, start + target.getBoundingClientRect().top - margin));
    const distance = end - start;
    history.pushState(null, '', link.hash);
    const focusTarget = () => {
      const hadTabindex = target.hasAttribute('tabindex');
      if (!hadTabindex) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      if (!hadTabindex) target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    };

    document.documentElement.style.scrollBehavior = 'auto';
    if (motionPreference.matches || Math.abs(distance) < 1) {
      window.scrollTo(0, end);
      cancelSmoothScroll();
      focusTarget();
      return;
    }

    const duration = Math.min(1400, Math.max(700, Math.abs(distance) * 0.4));
    const started = performance.now();
    function animate(now) {
      const progress = Math.min(1, (now - started) / duration);
      const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
      window.scrollTo(0, start + distance * eased);
      if (progress < 1) scrollFrame = requestAnimationFrame(animate);
      else { cancelSmoothScroll(); focusTarget(); }
    }
    scrollFrame = requestAnimationFrame(animate);
  });
});

window.addEventListener('wheel', cancelSmoothScroll, { passive: true });
window.addEventListener('touchstart', cancelSmoothScroll, { passive: true });
window.addEventListener('keydown', event => {
  if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) cancelSmoothScroll();
});
motionPreference.addEventListener('change', event => {
  if (event.matches) {
    cancelSmoothScroll();
    revealObserver?.disconnect();
    revealElements.forEach(element => element.classList.add('is-visible'));
  }
});

// Lightweight decorative embers, independent of the original background image.
const particleLayer = document.querySelector('.hero-particles');
if (particleLayer) {
  const hero = particleLayer.closest('.hero');
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < 38; index += 1) {
    const particle = document.createElement('span');
    particle.className = 'hero-particle';
    const duration = 18 + Math.random() * 20;
    const properties = {
      '--particle-x': `${Math.random() * 100}%`,
      '--particle-size': `${1.5 + Math.random() * 2.5}px`,
      '--particle-duration': `${duration}s`,
      '--particle-delay': `${-Math.random() * duration}s`,
      '--particle-drift': `${(Math.random() - 0.5) * 150}px`,
      '--particle-opacity': `${0.2 + Math.random() * 0.4}`,
    };
    Object.entries(properties).forEach(([name, value]) => particle.style.setProperty(name, value));
    fragment.append(particle);
  }
  particleLayer.append(fragment);

  const updateTravel = () => particleLayer.style.setProperty('--particle-travel', `${hero.clientHeight + 80}px`);
  updateTravel();
  if ('ResizeObserver' in window) new ResizeObserver(updateTravel).observe(hero);
  else window.addEventListener('resize', updateTravel, { passive: true });

  let heroIsVisible = true;
  const updateParticlePlayback = () => {
    particleLayer.classList.toggle('is-paused', document.hidden || !heroIsVisible);
  };
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      heroIsVisible = entries[0].isIntersecting;
      updateParticlePlayback();
    }).observe(hero);
  }
  document.addEventListener('visibilitychange', updateParticlePlayback);
  updateParticlePlayback();
}
