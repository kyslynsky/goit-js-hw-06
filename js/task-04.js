// Створи змінну counterValue,
//     в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок,
//     всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const step = 1;

const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");

const decrement = () => {
  counterValue -= step;
};

const increment = () => {
  counterValue += step;
};

decrementBtn.addEventListener("click", function () {
  decrement();
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", function () {
  increment();
  valueEl.textContent = counterValue;
});
