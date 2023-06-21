const categoriesList = document.querySelector('ul#categories');
console.dir(categoriesList);

const categoryItems = categoriesList.querySelectorAll('li.item');
console.dir(categoryItems);

console.log('Number of categories:', categoryItems.length);

categoryItems.forEach((item) => {
    const categoryTitle = item.querySelector('h2').textContent;

    const elements = item.querySelectorAll('li');

    console.log('Category:', categoryTitle);
  console.log('Elements:', elements.length);
});
