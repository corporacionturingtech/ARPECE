(() => {
  const WA = '593962122527';

  // Menú móvil
  const burger = document.querySelector('.burger');
  const nav = document.getElementById('nav');
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', e => {
    if (e.target.closest('a')) { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
  });

  // Hero
  const slides = [...document.querySelectorAll('.slide')];
  const dots = document.querySelector('.dots');
  let cur = 0, timer;
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', 'Diapositiva ' + (i + 1));
    b.addEventListener('click', () => { go(i); start(); });
    dots.appendChild(b);
  });
  function go(i) {
    cur = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === cur));
    [...dots.children].forEach((d, k) => d.classList.toggle('is-on', k === cur));
  }
  function start() {
    clearInterval(timer);
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => go(cur + 1), 6000);
  }
  go(0); start();

  // Cinta de obras (se duplica para el bucle continuo)
  const alts = {
    16: 'Estación total sobre trípode en terreno', 17: 'Estación total sobre trípode con vista al valle',
    18: 'Estación total en un terreno con pasto', 19: 'Controlador Trimble con coordenadas de levantamiento',
    20: 'Antena GPS topográfica junto a una vivienda'
  };
  const track = document.getElementById('ribbon');
  const imgs = Array.from({ length: 25 }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    return `<img src="assets/photos/obra-${n}.jpg" alt="${alts[i + 1] || 'Obra de ARPECE en ejecución'}" loading="lazy" height="340">`;
  }).join('');
  track.innerHTML = imgs + imgs;

  // Aparición al scroll
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.card,.mini,.about>*,.contact>*').forEach(el => { el.classList.add('reveal'); io.observe(el); });

  // Formulario -> WhatsApp
  document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target, d = Object.fromEntries(new FormData(f));
    let ok = true;
    ['nombre', 'tel'].forEach(k => {
      const bad = !String(d[k] || '').trim();
      f.elements[k].classList.toggle('is-bad', bad);
      if (bad) ok = false;
    });
    if (!ok) return;
    const text = `Hola ARPECE, soy ${d.nombre.trim()}. Me interesa: ${d.serv}.` +
      (d.msg.trim() ? ` ${d.msg.trim()}` : '') + ` Mi teléfono: ${d.tel.trim()}.`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });

  document.getElementById('y').textContent = new Date().getFullYear();
})();
