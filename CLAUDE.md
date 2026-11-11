# CLAUDE.md

Sitio web de **ARPECE**, constructora de Sangolquí (Valle de los Chillos, Ecuador). Referencia de estructura y enfoque comercial: https://kuuconstrucciones.com/ (no copiar textos, imágenes ni marca).

## Datos de la empresa (fuente: cliente)
- Dominio: `arpece.com.ec` (hosting en la nube de TuringTech, primer año sin costo). Correo: `proyectos@arpece.com.ec` (Microsoft 365).
- Horario: lunes a sábado, 7:00–18:00 (igual que Google Maps).
- WhatsApp: 096 212 2527 (`wa.me/593962122527`; enlace de mensaje del cliente: `https://wa.me/message/VZOIP73RYRZDF1`).
- Llamadas: 099 876 4825.
- Dirección: Quito y Montúfar, Sangolquí (oficina). En el sitio va como enlace a Maps: `https://maps.app.goo.gl/pGfe6GymzEua669h6`. No usar la dirección del manual de marca (Santa Cecilia y Huancavilca): el cliente la corrigió.
- Redes: Facebook (`share/1CoWmhoZ7F`), Instagram `_arpece`, LinkedIn `company/arpece`.
- Cifras de la franja (solo 2, según la reunión del 10/11/2026): "Brindando soluciones / desde 2020" y "+46 proyectos / ejecutados" (sin mencionar el Valle). En "Quiénes somos" las cifras van a la derecha: "Brindando soluciones desde 2020", "Proyectos ejecutados +46".
- Pagos: tarjetas con Datafast y pagos con Deuna; solo se mencionan una vez, en el pie, con insignias en escala de grises (Deuna, Datafast, Visa, Mastercard, Amex, Diners).
- Precios (USD, "desde", según lo dicho por el cliente en la reunión del 10/11/2026, que prevalece sobre su documento de observaciones): obra gris hormigón armado 230/m², estructura metálica 260/m²; terminada Standard 390, Comfort 460, Premium 590 /m²; cerramiento 90/ml, pérgola 80/m², cubierta teja española 70/m². El 230 también aparece en el hero ("Construye tu casa") y en las meta descripciones.
- Misión: vincular a las personas al sueño de habitar un lugar propio. Visión: ser líder en la transformación constructiva y gestión del territorio.

Nunca inventar cifras, proyectos, testimonios ni precios. Cualquier dato nuevo debe venir del cliente.

## Stack
HTML, CSS y JS estáticos, sin build ni dependencias (esta máquina no tiene Node). Fuentes de Google Fonts (Barlow y Barlow Condensed).

```
index.html     página única (hero, cifras, servicios, nosotros, trabajo, contacto)
styles.css     tokens en :root (paleta ink/paper/accent amarillo), responsive a 900 y 720 px
script.js      hero con diapositivas, cinta de fotos, menú móvil, formulario → WhatsApp
assets/logo/   horizontal/vertical, versión dark y light (PNG transparente)
assets/photos/ obra-NN.jpg (01..28, sin 02, 05, 06, 10, 15, 19, 25: retiradas a pedido) y render-01..10.jpg (1600 px máx.)
assets/partners/ logos de proveedores (originales, a color)
img/, Renders/, Renders.zip  material original del cliente (HEIC, PNG, ZIP, .ai, manual de marca). No publicar.
*.docx, *.vtt  documento de observaciones y transcripciones de reuniones. No publicar.
.claude/launch.json   servidor de preview: python -m http.server 8080
```

## Convenciones
- Idioma del sitio: español de Ecuador. Código y archivos en inglés.
- Mobile-first; probar a 375, 768 y escritorio.
- Contacto y precios se escriben en `index.html`; si se repiten, cambiarlos en todos los sitios (WhatsApp también está en `script.js`, constante `WA`).
- Las fotos nuevas: convertir HEIC a JPG (Python con `pillow` y `pillow-heif`), máx. 1600 px, calidad ~82, y añadir `alt` en `script.js` si no es una foto genérica de obra.
- Accesibilidad: contraste AA, `alt`, foco visible, `prefers-reduced-motion` respetado.
- Un CTA primario por sección (WhatsApp). El formulario no tiene backend: arma un mensaje y abre WhatsApp.
- Íconos monocromos (sprite SVG al inicio de `index.html`); el botón flotante de WhatsApp va en gris oscuro, no en verde. Los logos de proveedores sí van a color.
- La cinta de `script.js` (`gallery`) no debe repetir las fotos del hero ni la de "Quiénes somos".

## Pendiente / por confirmar con el cliente
- Paleta y tipografía aprobadas por el cliente en la reunión del 10/11/2026. El manual pide Neusharp y Nexa (de pago); se mantiene Barlow hasta tener los archivos web. El amarillo `#f2b705` no está en el manual pero no se objetó.
- Proveedores: hay más marcas sin tachar en las hojas escaneadas del documento (Acesco, Adelca, Holcim, Sika, UCEM, etc.); faltan sus logos en buena resolución. El de Wavin es pequeño (39 px de alto).
- Byron puede enviar más fotos de obra y renders; evitar repetirlas en portada y cinta.
- Tercera y última reunión de ajustes; entregar con dominio y correo configurados.
- Confirmar con el cliente: el documento de observaciones pedía cerramiento 80, pérgola 70, teja 60 y una cifra "Alcance hacia las 4 regiones del Ecuador"; en la reunión dijo otra cosa y se aplicó lo de la reunión.

## Preview
`mcp preview_start` con la config "web", o `python -m http.server 8080` en esta carpeta.
