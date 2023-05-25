import createElement from "../../helper/createElement.js";

// Кнопка регистрации
const buttonSignUp = createElement("button", {
  className: "btn nav__btn",
  textContent: "Зарегистрироваться",
});

buttonSignUp.addEventListener("click", () => {
	console.log('buttonSignUp');
})

export default buttonSignUp;
