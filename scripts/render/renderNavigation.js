// Переменные DOM
import { nav } from "../var.js";

// Созданные элементы
import buttonSignUp from "../create/header/buttonSignUp.js";
import buttonLogin from "../create/header/buttonLogin.js"
import createBurger from "../create/header/burger.js";

const renderNavigation = () => {
	nav.textContent = '';

	nav.append(buttonSignUp, buttonLogin);

	createBurger(nav, 'nav_active' ,'burger_active' )
}

export default renderNavigation;