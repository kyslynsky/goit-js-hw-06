// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
// по кліку на button.change - color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const colorNameEl = document.querySelector(".color");

btnEl.addEventListener("click", onBtnClick);

function onBtnClick() {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorNameEl.textContent = body.style.backgroundColor;
}
