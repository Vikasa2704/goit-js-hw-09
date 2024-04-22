import '../css/form.css';
import '../css/styles.css';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

// Перевіряємо локальне сховище при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
  const savedFormData = JSON.parse(localStorage.getItem(localStorageKey));

  // Якщо дані є в локальному сховищі, заповнюємо форму
  if (savedFormData) {
    form.elements.email.value = savedFormData.email || '';
    form.elements.message.value = savedFormData.message || '';
  }
});

// Записуємо дані в локальне сховище при введенні тексту у поля форми
form.addEventListener('input', () => {
  const formData = {
    email: form.elements.email.value.trim(), // Видаляємо зайві пробіли з початку і кінця
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

// Очищаємо сховище та поля форми при сабміті форми
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  // Перевіряємо, чи обидва поля заповнені
  if (email === '' || message === '') {
    alert('Будь ласка, заповніть обидва поля форми.');
    return;
  }

  // Виводимо об'єкт з даними у консоль
  console.log({ email, message });

  // Очищаємо локальне сховище
  localStorage.removeItem(localStorageKey);

  // Очищаємо поля форми
  form.reset();
});
