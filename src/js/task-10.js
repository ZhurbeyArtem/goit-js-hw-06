function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnDest = document.querySelector('button[data-destroy]')
const btnCreate = document.querySelector('button[data-create]')
const box = document.getElementById('boxes')
const inp = document.querySelector('input[type="number"]')


btnDest.addEventListener('click', e => {
  box.innerHTML = ''
})

const createBoxes = (amount) => {
  let width = 30;
  let height = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    let item = document.createElement('div');
    item.style.width = `${width}px`
    item.style.height = `${height}px`
    item.style.backgroundColor = getRandomHexColor()
    fragment.appendChild(item)
    width += 10;
    height += 10;
  }
  box.appendChild(fragment);
}

btnCreate.addEventListener('click', () => createBoxes(inp.value))