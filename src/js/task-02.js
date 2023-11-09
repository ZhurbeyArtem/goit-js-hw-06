const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients')
const fragment = document.createDocumentFragment();
ingredients.forEach(el => {
  let item = document.createElement('li');
  item.className = 'item'
  item.textContent = el
 fragment.appendChild(item)
})
list.appendChild(fragment);