const list = document.querySelectorAll('.item')
const result = [];
const test = list.forEach(el => {
  result.push({
    "Category": el.children[0].textContent,
    "Elements": el.children[1].childElementCount
  })
})

console.log(`Number of categories: ${list.length}`);
console.log(result);

