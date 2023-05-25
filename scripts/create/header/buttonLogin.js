import createElement from "../../helper/createElement.js";

// Кнопка входа в аккаунт
const buttonLogin = createElement('button', {
	className: 'btn nav__btn',
	textContent: 'Войти',
});

buttonLogin.addEventListener('click', () => {
	console.log('buttonLogin');
})

export default buttonLogin;