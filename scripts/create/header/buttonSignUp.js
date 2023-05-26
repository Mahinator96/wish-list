import { submitForm } from "../../func/submitForm.js";
import createElement from "../../helper/createElement.js";
import renderModal from "../../render/renderModal.js";

// Кнопка регистрации
const buttonSignUp = createElement("button", {
  className: "btn nav__btn",
  textContent: "Зарегистрироваться",
});

buttonSignUp.addEventListener("click", () => { /* При клике */
	renderModal({ /* Рендер модального окна */
		title: 'Регистрация',
		description: 'Введите ваши данные для регистрации на сервисе WishList',
		btnSubmit: 'Зарегестрироваться',
		submitHandler: submitForm,  /* При отправке данных срабатывает функция запроса на сервер*/

		
	})
	console.log('buttonSignUp');
})

export default buttonSignUp;
