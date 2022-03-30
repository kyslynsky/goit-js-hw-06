// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті,
//     зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//     якщо неправильна кількість - червоним.

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputLoseFocus);

function onInputLoseFocus(event) {
  const inputedText = event.currentTarget.value;

  if (inputedText.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }

  // console.log(inputedText.length === Number(inputEl.dataset.length));
}
