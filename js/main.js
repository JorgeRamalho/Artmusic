/**
 * ArtMusic — Interatividade
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEffects();
  initForms();
  initRevealAnimations();
});

/* ---- Navigation ---- */
function initNavigation() {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---- Scroll reveal ---- */
function initRevealAnimations() {
  const elements = document.querySelectorAll(
    '.category-card, .product-card, .era-card, .ambassador-card, .section-header, .form, .cadastro-info'
  );

  elements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ---- Header scroll effects ---- */
function initScrollEffects() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ---- Form validation ---- */
function initForms() {
  setupForm('form-surpresa', validateSurpresaForm);
  setupForm('form-cadastro', validateCadastroForm);

  const phoneInput = document.getElementById('cad-telefone');
  if (phoneInput) {
    phoneInput.addEventListener('input', formatPhone);
  }
}

function setupForm(formId, validator) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors(form);

    const isValid = validator(form);
    if (isValid) {
      const successEl = form.querySelector('.form-success');
      if (successEl) {
        successEl.hidden = false;
        form.reset();
        successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  });

  form.querySelectorAll('input, select').forEach(field => {
    field.addEventListener('blur', () => {
      validateField(field, form, validator);
    });
  });
}

function clearErrors(form) {
  form.querySelectorAll('.form-group').forEach(group => {
    group.classList.remove('invalid');
    const error = group.querySelector('.form-error');
    if (error) error.textContent = '';
  });
  form.querySelectorAll('.form-success').forEach(el => {
    el.hidden = true;
  });
}

function setError(group, message) {
  group.classList.add('invalid');
  const error = group.querySelector('.form-error');
  if (error) error.textContent = message;
}

function validateSurpresaForm(form) {
  let valid = true;

  const nome = form.querySelector('#surpresa-nome');
  if (!nome.value.trim() || nome.value.trim().length < 3) {
    setError(nome.closest('.form-group'), 'Informe seu nome completo.');
    valid = false;
  }

  const email = form.querySelector('#surpresa-email');
  if (!isValidEmail(email.value)) {
    setError(email.closest('.form-group'), 'Informe um e-mail válido.');
    valid = false;
  }

  const estilo = form.querySelector('#surpresa-estilo');
  if (!estilo.value) {
    setError(estilo.closest('.form-group'), 'Selecione um estilo musical.');
    valid = false;
  }

  const plano = form.querySelector('#surpresa-plano');
  if (!plano.value) {
    setError(plano.closest('.form-group'), 'Selecione um plano.');
    valid = false;
  }

  const termos = form.querySelector('#surpresa-termos');
  if (!termos.checked) {
    setError(termos.closest('.form-group'), 'Você precisa aceitar os termos.');
    valid = false;
  }

  return valid;
}

function validateCadastroForm(form) {
  let valid = true;

  const nome = form.querySelector('#cad-nome');
  if (!nome.value.trim()) {
    setError(nome.closest('.form-group'), 'Informe seu nome.');
    valid = false;
  }

  const sobrenome = form.querySelector('#cad-sobrenome');
  if (!sobrenome.value.trim()) {
    setError(sobrenome.closest('.form-group'), 'Informe seu sobrenome.');
    valid = false;
  }

  const email = form.querySelector('#cad-email');
  if (!isValidEmail(email.value)) {
    setError(email.closest('.form-group'), 'Informe um e-mail válido.');
    valid = false;
  }

  const telefone = form.querySelector('#cad-telefone');
  if (!isValidPhone(telefone.value)) {
    setError(telefone.closest('.form-group'), 'Informe um telefone válido.');
    valid = false;
  }

  const nascimento = form.querySelector('#cad-nascimento');
  if (!nascimento.value) {
    setError(nascimento.closest('.form-group'), 'Informe sua data de nascimento.');
    valid = false;
  } else if (!isValidAge(nascimento.value)) {
    setError(nascimento.closest('.form-group'), 'Você precisa ter pelo menos 16 anos.');
    valid = false;
  }

  const instrumento = form.querySelector('#cad-instrumento');
  if (!instrumento.value) {
    setError(instrumento.closest('.form-group'), 'Selecione seu instrumento principal.');
    valid = false;
  }

  const senha = form.querySelector('#cad-senha');
  if (senha.value.length < 8) {
    setError(senha.closest('.form-group'), 'A senha deve ter no mínimo 8 caracteres.');
    valid = false;
  }

  const confirma = form.querySelector('#cad-confirma');
  if (confirma.value !== senha.value) {
    setError(confirma.closest('.form-group'), 'As senhas não coincidem.');
    valid = false;
  }

  const termos = form.querySelector('#cad-termos');
  if (!termos.checked) {
    setError(termos.closest('.form-group'), 'Você precisa aceitar os termos.');
    valid = false;
  }

  return valid;
}

function validateField(field, form, validator) {
  const group = field.closest('.form-group');
  group.classList.remove('invalid');
  const error = group.querySelector('.form-error');
  if (error) error.textContent = '';

  if (field.hasAttribute('required') && !field.value.trim() && field.type !== 'checkbox') {
    return;
  }

  if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
    setError(group, 'E-mail inválido.');
  }

  if (field.id === 'cad-confirma') {
    const senha = form.querySelector('#cad-senha');
    if (field.value && field.value !== senha.value) {
      setError(group, 'As senhas não coincidem.');
    }
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 11;
}

function isValidAge(dateStr) {
  const birth = new Date(dateStr);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age >= 16;
}

function formatPhone(e) {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 6) {
    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
  } else if (value.length > 2) {
    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  } else if (value.length > 0) {
    value = `(${value}`;
  }

  e.target.value = value;
}
