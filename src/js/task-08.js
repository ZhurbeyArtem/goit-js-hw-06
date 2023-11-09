const form = document.querySelector('.login-form')
form.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.querySelector('input[name="email"]').value
  const password = document.querySelector('input[name="password"]').value
  if (email.length < 1 || password.length < 1) return alert('Всі поля повинні бути заповнені')
  console.log({
    email,
    password
  })
  form.reset()
})
