let counterValue = 0;
const count = document.getElementById('value')
const btnInc = document.querySelector('button[data-action="increment"]')
const btnDec = document.querySelector('button[data-action="decrement"]')

const inc = () => {
  counterValue++
  count.textContent = counterValue
}

const dec = () => {
  counterValue--
  count.textContent = counterValue
}

btnInc.addEventListener('click', inc)
btnDec.addEventListener('click', dec)