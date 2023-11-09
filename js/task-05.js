const res = document.getElementById('name-output')
const inp = document.getElementById('name-input')

inp.addEventListener('input', (e) => {
 e.target.value.length < 1 ?
  res.textContent = 'Anonymous'
  :
  res.textContent = e.target.value
})