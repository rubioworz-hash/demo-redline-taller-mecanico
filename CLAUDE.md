# REDLINE Taller Mecánico — Contexto del proyecto

Demo de landing page para un taller mecánico automotriz (RubioWorz, agencia web). Sitio estático de una sola página, sin backend ni build tooling, tema oscuro industrial con acento naranja-rojo.

## Stack
HTML5 semántico + CSS con custom properties + JavaScript vanilla ES6+ (IIFE clásico, sin ES Modules — no requiere servidor para `import`, aunque igual se sirve con `python3 -m http.server` para evitar restricciones de `file://` en fuentes/CDN).

## Estructura
```
index.html   # estructura + contenido
styles.css   # design tokens (:root) + reset + layout + componentes, mobile-first
script.js    # menú hamburguesa, scroll suave con offset de navbar, sombra de header, validación de formulario + envío a WhatsApp
```

## Convenciones
- Construido en 4 fases explícitas aprobadas por el cliente (HTML → CSS → JS → limpieza/optimización), no con el flujo Fase 0 de otros proyectos RubioWorz de esta sesión.
- Mobile-first real: la base de `styles.css` es el layout de celular; `@media (min-width: ...)` solo agrega mejoras progresivas.
- Paleta oscura: `--accent-primary` (naranja-rojo) funciona como TEXTO sobre fondos oscuros (~5.8:1 AA); como FONDO de botón/badge requiere `--text-dark`, nunca `--text-main` (cae a ~3:1). Ver comentario en `styles.css`.
- El botón flotante de WhatsApp (`.fab-whatsapp`) y el formulario de contacto abren `wa.me` con mensaje pre-armado — no hay backend real.
- FontAwesome cargado como 3 hojas separadas (`fontawesome.min.css` + `solid.min.css` + `brands.min.css`) en vez de `all.min.css`, porque el sitio solo usa íconos `fa-solid` y `fa-brands`.

## Integridad de datos (regla estricta — igual que el resto de la serie RubioWorz)
- **Servicios y catálogo**: contenido real de copywriting, sin precios inventados (no se pidieron).
- **Estadísticas "Sobre nosotros"** (años de experiencia, vehículos atendidos, técnicos): `[PENDIENTE]`, no inventadas.
- **Teléfono/WhatsApp real**: NO se inventó. Placeholder no funcional (`50400000000`), comentado `[PENDIENTE]` en HTML y JS.
- **Dirección, horario, correo**: literalmente `[PENDIENTE: Confirmar ...]` en el HTML.
- **Mapa**: bloque placeholder, no iframe con ubicación específica.
- **Galería "Trabajos realizados"**: placeholders de ícono, marcados `[DATOS DE EJEMPLO]` — pendiente de fotos reales de reparaciones de REDLINE.
- **Testimonios**: contenido de ejemplo con disclaimer de sección.

## Estándar de Entregas (regla obligatoria de la agencia)
- Todo proyecto finalizado queda **publicado en GitHub Pages inmediatamente después del QA**, sin esperar confirmación adicional para ese paso puntual.
- Al terminar cada entrega, reportar: (1) URL pública HTTPS de GitHub Pages, (2) instrucciones del servidor local (`python3 -m http.server`, puerto siguiente libre si el default ya está ocupado por otro proyecto de la agencia).
- Servidor local corriendo en segundo plano apenas se termine de construir o editar el proyecto.

## Restricciones
- No usar frameworks/librerías pesadas (Bootstrap, Tailwind CDN, jQuery, Swiper).
- Nombre de carpeta con prefijo `demo-` — es contenido de demostración para prospectos, no un negocio real operando.
