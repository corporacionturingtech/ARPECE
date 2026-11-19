# CLAUDE.md

Sitio web de **ARPECE**, constructora de Sangolquí (Valle de los Chillos, Ecuador). Referencia de estructura y enfoque comercial: https://kuuconstrucciones.com/ (no copiar textos, imágenes ni marca).

## Datos de la empresa (fuente: cliente)
- Dominio: `arpece.com.ec` (hosting en la nube de TuringTech, primer año sin costo). Correo: `proyectos@arpece.com.ec` (Microsoft 365).
- Horario: lunes a sábado, 7:00–18:00 (igual que Google Maps).
- WhatsApp: 096 212 2527 (`wa.me/593962122527`; enlace de mensaje del cliente: `https://wa.me/message/VZOIP73RYRZDF1`).
- Llamadas: 099 876 4825.
- Dirección: Quito y García Moreno, Sangolquí (oficina; antes figuraba "Quito y Montúfar", corregido por el cliente el 19/11/2026 según su documentación de permisos; el enlace de Maps no cambia). En el sitio va como enlace a Maps: `https://maps.app.goo.gl/Di24rEkrdVPR2DYb6`. No usar la dirección del manual de marca (Santa Cecilia y Huancavilca): el cliente la corrigió.
- Redes: Facebook (`share/1CoWmhoZ7F`), Instagram `_arpece`, LinkedIn `company/arpece`.
- Cifras de la franja: "Brindando soluciones / desde 2020", "+50 proyectos / ejecutados" (antes +46; actualizado por el cliente en 11/2026) (sin mencionar el Valle) y "Alcance hacia / las 4 regiones del Ecuador" (la bandera de Ecuador va al final de la barra superior, junto a WhatsApp y llamadas). En "Quiénes somos" las cifras van a la derecha: "Brindando soluciones desde 2020", "Proyectos ejecutados +50".
- Pagos: tarjetas con Datafast y pagos con Deuna; solo se mencionan una vez, en el pie (una sola línea: logo, "Aceptamos" + insignias, copyright), con insignias en escala de grises (Deuna, Datafast, Visa, Mastercard, Amex, Diners).
- Precios (USD, "desde"; obras menores actualizadas por el cliente en 11/2026): obra gris hormigón armado 230/m², estructura metálica 260/m²; terminada Standard 390, Comfort 460, Premium 590 /m²; cerramiento 80/ml, pérgola 70/m², cubierta teja española 60/m². El 230 también aparece en el hero ("Construye tu casa") y en las meta descripciones.
- Misión: vincular a las personas al sueño de habitar un lugar propio. Visión: ser líder en la transformación constructiva y gestión del territorio.

Nunca inventar cifras, proyectos, testimonios ni precios. Cualquier dato nuevo debe venir del cliente.

## Stack
HTML, CSS y JS estáticos, sin build ni dependencias (esta máquina no tiene Node). Fuentes de Google Fonts (Barlow y Barlow Condensed).

```
index.html     página única (hero, cifras, servicios, nosotros, trabajo, contacto)
styles.css     tokens en :root (paleta ink/paper/accent amarillo), responsive a 900 y 720 px
script.js      hero con diapositivas, cinta de fotos, menú móvil, formulario → WhatsApp
assets/logo/   horizontal/vertical, versión dark y light (PNG transparente)
assets/photos/ obra-NN.jpg (03..33, sin 05, 06, 10, 15, 19, 25: retiradas a pedido; 01 y 02 también) y render-01..13.jpg. Hero y "Quiénes somos": 1600 px; las de la cinta: 1280 px, calidad 80
assets/partners/ logos de proveedores (originales, a color)
img/, Renders/, OneDrive_*/ y sus .zip  material original del cliente (HEIC, PNG, ZIP, .ai, manual de marca). No publicar.
*.docx, *.vtt  documento de observaciones y transcripciones de reuniones. No publicar.
CNAME          dominio (GitHub Pages con Jekyll: las carpetas que empiezan por `_` no se publican)
_seo/          robots.txt y sitemap.xml listos pero SIN publicar (el SEO se cobra aparte)
.claude/launch.json   servidor de preview: python -m http.server 8080
```

## Convenciones
- Idioma del sitio: español de Ecuador. Código y archivos en inglés.
- Mobile-first; probar a 375, 768 y escritorio.
- Contacto y precios se escriben en `index.html`; si se repiten, cambiarlos en todos los sitios (WhatsApp también está en `script.js`, constante `WA`).
- Las fotos nuevas: convertir HEIC a JPG (Python con `pillow` y `pillow-heif`), máx. 1280 px para la cinta (1600 px si van al hero), calidad 80, progresivo, y añadir `alt` en `script.js` si no es una foto genérica de obra.
- CSS y JS se enlazan con `?v=AAAAMMDD`: cambiar la fecha en `index.html` en cada publicación con cambios de estilo o script, para que los navegadores no muestren la versión vieja.
- Hero: el texto de cada diapositiva se apoya sobre los botones (`.slide` con `justify-content:flex-end` y `padding-bottom` reservado); probar también laptops bajas (1366×640) para que no se crucen.
- Accesibilidad: contraste AA, `alt`, foco visible, `prefers-reduced-motion` respetado.
- Un CTA primario por sección (WhatsApp). El formulario no tiene backend: arma un mensaje y abre WhatsApp.
- Íconos monocromos (sprite SVG al inicio de `index.html`); el botón flotante de WhatsApp va en gris oscuro, no en verde. Los logos de proveedores sí van a color.
- La cinta de `script.js` alterna siempre un render y una foto real (`renders` y `works` deben tener el mismo número) y no debe repetir las fotos del hero ni la de "Quiénes somos".

## Pendiente / por confirmar con el cliente
- Paleta y tipografía aprobadas por el cliente en la reunión del 10/11/2026. El manual pide Neusharp y Nexa (de pago); se mantiene Barlow hasta tener los archivos web. El amarillo `#f2b705` no está en el manual pero no se objetó.
- Proveedores: Holcim, Plastigama y Rival Tubos agregados (logos enviados en 11/2026). Hay más marcas sin tachar en las hojas escaneadas del documento (Acesco, Adelca, Sika, UCEM, etc.); faltan sus logos en buena resolución. El de Wavin es pequeño (39 px de alto).
- Byron puede enviar más fotos de obra y renders; evitar repetirlas en portada y cinta.
- Tercera y última reunión de ajustes; entregar con dominio y correo configurados.
- SEO: servicio aparte (propuesta completa enviada, incluye Google Analytics, 420 USD), aún no aprobado. Mientras tanto la página lleva `<meta name="robots" content="noindex, nofollow">` para que no esté indexada. Al aprobarlo: quitar esa meta, mover `_seo/robots.txt` y `_seo/sitemap.xml` a la raíz (actualizar `lastmod`), descomentar el bloque SEO del `<head>` de `index.html`, dar de alta el dominio en Google Search Console, enviar el sitemap y enlazar la web desde la ficha de Google Maps. Google la había indexado sola antes del noindex (17/11/2026); tarda unos días en retirarla.

## Preview
`mcp preview_start` con la config "web", o `python -m http.server 8080` en esta carpeta.
