const list = document.querySelectorAll('.item')
console.log(`Number of categories: ${list.length}`);

list.forEach(el => {
console.log(`Category ${el.children[0].textContent}`);
console.log(`Elements ${el.children[1].childElementCount}`);
})


