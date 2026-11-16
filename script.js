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

  // Cinta de renders y obras (se duplica para el bucle continuo).
  // No repetir aquí las fotos del hero (render-07, obra-12, obra-13, obra-28, obra-03) ni la de "Quiénes somos" (obra-17).
  // Alterna siempre render y obra (mismo número de cada uno para que el bucle no junte dos iguales).
  const renders = [
    ['render-02', 'Render de fachada frontal de vivienda de tres pisos'], ['render-01', 'Render de cocina, comedor y sala'],
    ['render-04', 'Render de dormitorio con ventanal'], ['render-08', 'Render de cocina con ventana al jardín'],
    ['render-03', 'Render de fachada frontal desde la vía'], ['render-13', 'Render de planta general amoblada de una vivienda'],
    ['render-05', 'Render de dormitorio master con closet'],
    ['render-09', 'Render de comedor y cocina con isla'], ['render-11', 'Render de fachada con vista lateral'],
    ['render-06', 'Render de dormitorio con closet y baño'], ['render-10', 'Render de sala y comedor con chimenea'],
    ['render-12', 'Render de sala, comedor y cocina abiertos']
  ];
  const works = [
    ['obra-32', 'Obreros fundiendo una losa alivianada con bomba de hormigón'], ['obra-18', 'Estación total en un terreno con pasto'],
    ['obra-29', 'Mampostería de bloque en una vivienda en construcción'], ['obra-08'],
    ['obra-27', 'Equipo realizando un estudio de suelos en un terreno'], ['obra-31', 'Losa con bloques y armadura lista para fundir'],
    ['obra-26', 'Vivienda en obra gris con escalera exterior'], ['obra-22'],
    ['obra-20', 'Antena GPS topográfica junto a una vivienda'], ['obra-33', 'Losa recién fundida en una obra'],
    ['obra-09', 'Losa y columnas con vista al valle'], ['obra-30', 'Armadura de vigas sobre el encofrado de una losa']
  ];
  if (renders.length !== works.length) console.warn('La cinta debe tener el mismo número de renders y obras');
  const gallery = renders.flatMap((r, i) => [r, works[i]]).filter(Boolean);
  const track = document.getElementById('ribbon');
  const imgs = gallery.map(([f, alt]) =>
    `<img src="assets/photos/${f}.jpg" alt="${alt || 'Obra de ARPECE en ejecución'}" loading="lazy" height="340">`).join('');
  track.innerHTML = imgs + imgs;

  // Cinta de proveedores (logos originales)
  const partners = [
    ['novopan', 'Novopan'], ['novacero', 'Novacero'], ['selvalegre', 'Cemento Selvalegre'], ['conservelco', 'Conservelco'],
    ['intaco', 'Intaco'], ['ecuaceramica', 'Ecuacerámica'], ['sherwin-williams', 'Sherwin-Williams'], ['wavin', 'Wavin'],
    ['fv', 'FV Área Andina'], ['electrocables', 'Electrocables'], ['graiman', 'Graiman'], ['veto', 'Veto'], ['schneider', 'Schneider Electric'], ['holcim', 'Holcim']
  ];
  const logos = partners.map(([f, name]) =>
    `<span class="logo-tile"><img src="assets/partners/${f}.png" alt="${name}" loading="lazy" height="56"></span>`).join('');
  document.getElementById('partners').innerHTML = logos + logos;

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
