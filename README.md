# REDLINE Taller Mecánico — Demo RubioWorz

Sitio de demostración para un taller mecánico automotriz. Estático, sin backend, sin build tooling.

## Cómo verlo localmente

```bash
python3 -m http.server 8000
```

Abrir `http://localhost:8000` en el navegador.

## Checklist antes de publicar como sitio real de un cliente

- [ ] Reemplazar el número de WhatsApp de ejemplo (`50400000000`) por el número real, en `index.html` (3 enlaces) y en `script.js` (`WHATSAPP_NUMBER`).
- [ ] Reemplazar todos los campos `[PENDIENTE: ...]` (dirección, teléfono, horario, correo, redes sociales, mapa) con datos reales.
- [ ] Confirmar o quitar las estadísticas de ejemplo en "Sobre nosotros" (años de experiencia, vehículos atendidos, técnicos certificados).
- [ ] Reemplazar los 6 placeholders de la galería por fotos reales de trabajos/reparaciones.
- [ ] Reemplazar los testimonios de ejemplo por reseñas reales de clientes (o quitar la sección).
- [ ] Conectar el formulario de contacto a un canal real si se prefiere, además del envío a WhatsApp.
