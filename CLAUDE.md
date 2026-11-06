# CLAUDE.md

Sitio web de **ARPECE**, constructora de Sangolquí (Valle de los Chillos, Ecuador). Referencia de estructura y enfoque comercial: https://kuuconstrucciones.com/ (no copiar textos, imágenes ni marca).

## Datos de la empresa (fuente: cliente)
- Horario: lunes a sábado, 6:30–17:30.
- WhatsApp: 096 212 2527 (`wa.me/593962122527`; enlace de mensaje del cliente: `https://wa.me/message/VZOIP73RYRZDF1`).
- Llamadas: 099 876 4825.
- Dirección: Santa Cecilia y Av. Huancavilca E6-166, Sangolquí, Ecuador (según manual de marca). Correo: peraltapbyron@outlook.com.
- Redes: Facebook (`share/1CoWmhoZ7F`), Instagram `arpece` (según manual @ARPECE), LinkedIn `company/arpece`.
- Desde 2020, 46 proyectos ejecutados en el Valle de los Chillos y alrededores. Se aceptan todas las tarjetas de crédito.
- Precios (USD, "desde"): obra gris hormigón armado 240/m², estructura metálica 270/m²; terminada Standard 390, Comfort 460, Premium 590 /m²; cerramiento 90/ml, pérgola 90/m², cubierta teja española 70/m².
- Misión: vincular a las personas al sueño de habitar un lugar propio. Visión: ser líder en la transformación constructiva y gestión del territorio.

Nunca inventar cifras, proyectos, testimonios ni precios. Cualquier dato nuevo debe venir del cliente.

## Stack
HTML, CSS y JS estáticos, sin build ni dependencias (esta máquina no tiene Node). Fuentes de Google Fonts (Barlow y Barlow Condensed).

```
index.html     página única (hero, cifras, servicios, nosotros, trabajo, contacto)
styles.css     tokens en :root (paleta ink/paper/accent amarillo), responsive a 900 y 720 px
script.js      hero con diapositivas, cinta de fotos, menú móvil, formulario → WhatsApp
assets/logo/   horizontal/vertical, versión dark y light (PNG transparente)
assets/photos/ obra-01..25.jpg (1600 px máx.)
img/           material original del cliente (HEIC, ZIP, .ai, manual de marca). No publicar.
.claude/launch.json   servidor de preview: python -m http.server 8080
```

## Convenciones
- Idioma del sitio: español de Ecuador. Código y archivos en inglés.
- Mobile-first; probar a 375, 768 y escritorio.
- Contacto y precios se escriben en `index.html`; si se repiten, cambiarlos en todos los sitios (WhatsApp también está en `script.js`, constante `WA`).
- Las fotos nuevas: convertir HEIC a JPG (Python con `pillow` y `pillow-heif`), máx. 1600 px, calidad ~82, y añadir `alt` en `script.js` si no es una foto genérica de obra.
- Accesibilidad: contraste AA, `alt`, foco visible, `prefers-reduced-motion` respetado.
- Un CTA primario por sección (WhatsApp). El formulario no tiene backend: arma un mensaje y abre WhatsApp.

## Pendiente / por confirmar con el cliente
- Manual de marca (`img/logo web/Manual de marca ARPECE.pdf`, 2026): paleta oficial negro `#333333` y blanco (el sitio ya usa `#333333`; el amarillo `#f2b705` de acento NO está en el manual, confirmar). Tipografías oficiales: Neusharp (títulos) y Nexa (texto), de pago y fuera de Google Fonts; se mantiene Barlow hasta tener licencia o archivos web.
- Aplicados desde el manual (confirmar con el cliente): dirección, correo y handle de Instagram `arpece` (antes `_arpece`; verificar que el enlace abra la cuenta correcta). Director: arq. Byron Peralta (no publicado).
- Renders y obras terminadas: las 25 fotos actuales son de obra en proceso y topografía.
- Testimonios, equipo y preguntas frecuentes (no entregados; no se incluyen).
- Dominio, hosting y correo de contacto.
- Mapa: se incrusta por texto de dirección; confirmar el pin exacto.

## Preview
`mcp preview_start` con la config "web", o `python -m http.server 8080` en esta carpeta.
