(function () {
  'use strict';

  // [PENDIENTE: Confirmar número de WhatsApp real] — mismo placeholder no
  // funcional usado en los enlaces estáticos del HTML.
  var WHATSAPP_NUMBER = '50400000000';

  /* ============ Header: sombra al hacer scroll ============ */
  var navbar = document.getElementById('navbar');
  function onScroll() {
    navbar.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ============ Menú hamburguesa (móvil) ============ */
  var hamburger = document.getElementById('hamburger');
  var navMenu = document.getElementById('navMenu');

  function closeMenu() {
    navMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  function toggleMenu() {
    var isOpen = navMenu.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  }
  hamburger.addEventListener('click', toggleMenu);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) closeMenu();
  });

  /* ============ Enlaces del menú: cerrar + scroll suave con offset ============
     El navbar es sticky, así que un scroll nativo dejaría el título de cada
     sección tapado detrás del header. Se calcula la posición real restando
     la altura del navbar antes de desplazar. */
  var navLinks = document.querySelectorAll('.navbar__nav a[href^="#"]');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      var navHeight = navbar.getBoundingClientRect().height;
      var targetTop = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  /* ============ Validación básica del formulario de contacto ============ */
  var form = document.getElementById('contactForm');
  if (form) {
    var fieldDefs = [
      { id: 'fieldName', validate: function (v) { return v.trim().length >= 2; }, message: 'Escribe tu nombre completo.' },
      { id: 'fieldPhone', validate: function (v) { return /^[0-9+\s()-]{8,}$/.test(v.trim()); }, message: 'Escribe un teléfono válido (mínimo 8 dígitos).' },
      { id: 'fieldVehicle', validate: function (v) { return v.trim().length >= 2; }, message: 'Indica marca, modelo y año del vehículo.' },
      { id: 'fieldMessage', validate: function (v) { return v.trim().length >= 5; }, message: 'Cuéntanos brevemente qué le pasa al vehículo.' },
    ];

    function setFieldError(id, message) {
      var input = document.getElementById(id);
      var errorEl = form.querySelector('[data-error-for="' + id + '"]');
      input.classList.toggle('is-invalid', Boolean(message));
      if (errorEl) errorEl.textContent = message || '';
    }

    fieldDefs.forEach(function (def) {
      document.getElementById(def.id).addEventListener('input', function () {
        setFieldError(def.id, '');
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var firstInvalid = null;
      fieldDefs.forEach(function (def) {
        var input = document.getElementById(def.id);
        var ok = def.validate(input.value);
        setFieldError(def.id, ok ? '' : def.message);
        if (!ok && !firstInvalid) firstInvalid = input;
      });
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      var name = document.getElementById('fieldName').value.trim();
      var phone = document.getElementById('fieldPhone').value.trim();
      var vehicle = document.getElementById('fieldVehicle').value.trim();
      var message = document.getElementById('fieldMessage').value.trim();

      var lines = [
        'Hola REDLINE, quisiera agendar una cita:',
        'Nombre: ' + name,
        'Teléfono: ' + phone,
        'Vehículo: ' + vehicle,
        'Detalle: ' + message,
      ];
      var text = encodeURIComponent(lines.join('\n'));
      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + text, '_blank', 'noopener');
      form.reset();
    });
  }
})();
