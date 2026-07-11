let emailjsLoaded = false;

async function loadEmailJS() {
  if (emailjsLoaded) return window.emailjs;

  emailjsLoaded = true;
  return window.emailjs;
}

async function getConfig() {
  try {
    const config = await import('./config.js');
    return config.emailjsConfig;
  } catch {
    return null;
  }
}

function validateForm(data) {
  const errors = {};

  if (!data.name.trim()) errors.name = 'El nombre es requerido';
  if (!data.email.trim()) errors.email = 'El email es requerido';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Email inválido';
  if (!data.subject.trim()) errors.subject = 'El asunto es requerido';
  if (!data.message.trim()) errors.message = 'El mensaje es requerido';

  return errors;
}

function showFieldError(field, message) {
  const errorEl = document.getElementById(`${field}-error`);
  const input = document.getElementById(field);
  if (errorEl) errorEl.textContent = message;
  if (input) input.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function clearErrors() {
  ['name', 'email', 'subject', 'message'].forEach((field) => {
    showFieldError(field, '');
  });
}

export function initContact() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([field, msg]) => showFieldError(field, msg));
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    const config = await getConfig();

    if (
      !config ||
      config.serviceId === 'YOUR_SERVICE_ID' ||
      config.publicKey === 'YOUR_PUBLIC_KEY'
    ) {
      feedback.textContent =
        'Formulario configurado. Añade tus credenciales en js/config.js';
      feedback.className = 'mt-4 text-sm text-gray-400';
      feedback.setAttribute('role', 'status');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      return;
    }

    try {
      const emailjs = await loadEmailJS();
      emailjs.init(config.publicKey);

      await emailjs.send(config.serviceId, config.templateId, {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });

      feedback.textContent = 'Mensaje enviado correctamente. ¡Gracias!';
      feedback.className = 'mt-4 text-sm text-white';
      feedback.setAttribute('role', 'status');
      form.reset();
    } catch {
      feedback.textContent =
        'Error al enviar. Intenta de nuevo o escríbeme directamente por email.';
      feedback.className = 'mt-4 text-sm text-gray-400';
      feedback.setAttribute('role', 'alert');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}
