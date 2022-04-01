// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//     що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму,
//     збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
//     а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Це поле не може бути порожнім");
  }

  const inputData = {
    email: email.value,
    password: password.value,
  };
  console.log("inputData", inputData);

  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => {
  //     console.log(name, value);
  //   });

  event.currentTarget.reset();
}
