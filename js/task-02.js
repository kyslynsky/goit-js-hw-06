// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.
//   Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const makeIngredientsItems = (ingredients) => {
  return ingredients.map((ingredient, index) => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = ingredients[index];
    listItemEl.classList.add("item");

    return listItemEl;
  });
};

const ingredientsItemEl = makeIngredientsItems(ingredients);

ingredientsListEl.append(...ingredientsItemEl);
