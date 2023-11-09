const form = document.querySelector('.login-form')
form.addEventListener('submit', e => {
  e.preventDefault();
  const {
    elements: { email, password }
  } = e.currentTarget;
  if (email.value.length < 1 || password.value.length < 1) return alert('Всі поля повинні бути заповнені')
  console.log("Email: " + email.value);
  console.log("Password: " + password.value);
  form.reset()
})
