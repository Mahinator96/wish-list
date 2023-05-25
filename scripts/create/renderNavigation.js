// Переменные DOM
import { nav } from "../var.js";

// Созданные элементы
import buttonSignUp from "./header/buttonSignUp.js";
import buttonLogin from "./header/buttonLogin.js"

const renderNavigation = () => {
	nav.textContent = '';

	nav.append(buttonSignUp, buttonLogin);
}

export default renderNavigation;