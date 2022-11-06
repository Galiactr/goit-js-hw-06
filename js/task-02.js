const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');

let newList = [];

ingredients.forEach(element => {
  const listElement = document.createElement('li');
  listElement.classList.add('item');
  listElement.textContent = element;
  newList.push(listElement);
});

list.append(...newList);
