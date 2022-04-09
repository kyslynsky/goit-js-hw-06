// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  clearBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", createBoxes);

let defaultSideSize = 30;
let step = 10;

function createBoxes(amount) {
  amount = refs.inputEl.valueAsNumber;

  const elArr = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${defaultSideSize + step}px`;
    boxEl.style.height = `${defaultSideSize + step}px`;
    step += 10;
    elArr.push(boxEl);
  }

  if (amount > 100) {
    alert("Enter valid quantity");
  } else {
    refs.boxes.append(...elArr);
  }
}

refs.clearBtn.addEventListener("click", handlerDestroy);

function handlerDestroy() {
  refs.boxes.innerHTML = "";
  refs.inputEl.value = "";

  step = 10;
}
