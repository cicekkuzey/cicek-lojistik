(function () {
  'use strict';

  const form = document.getElementById('contactForm');
  if (!form) return;

  const success = document.getElementById('formSuccess');

  const rules = {
    name: v => v.trim().length >= 3 || 'Lütfen adınızı ve soyadınızı girin (en az 3 karakter).',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Geçerli bir e-posta adresi girin.',
    phone: v => /^[0-9+()\s-]{7,20}$/.test(v.trim()) || 'Geçerli bir telefon numarası girin.',
    subject: v => v !== '' || 'Lütfen bir konu seçin.',
    message: v => v.trim().length >= 10 || 'Mesajınız en az 10 karakter olmalıdır.'
  };

  function validateField(field) {
    const name = field.name;
    const rule = rules[name];
    if (!rule) return true;
    const result = rule(field.value);
    const wrap = field.closest('.form-field');
    const msg = wrap.querySelector('.error-msg');
    if (result === true) {
      wrap.classList.remove('error');
      return true;
    }
    wrap.classList.add('error');
    if (msg) msg.textContent = result;
    return false;
  }

  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.closest('.form-field').classList.contains('error')) {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('input, select, textarea').forEach(field => {
      if (!validateField(field)) valid = false;
    });
    if (!valid) return;

    form.style.display = 'none';
    success.classList.add('show');
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();
