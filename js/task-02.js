const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
const arr = ingredients.map(el => {
  let item = document.createElement('li');
  item.className = 'item'
  item.textContent = el
return item
})
list.append(...arr);