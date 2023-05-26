/* Элементы DOM */
import { app } from "../var.js";

import renderNavigation from "../render/renderNavigation.js";
import createHero from "../create/hero/createHero.js";


/* Вызывает функции, которые будут рендерить */
const handleHomePage = () => {
  app.textContent = ""; /* Очистка */

	renderNavigation(); /* Добавление навигации */
	
	app.append(createHero()); /* Добавление section.hero */
};

export default handleHomePage;
