const inp = document.getElementById('font-size-control')
const text = document.getElementById('text')

inp.addEventListener('input', e => {
  text.style.fontSize = `${e.target.value}px`
})