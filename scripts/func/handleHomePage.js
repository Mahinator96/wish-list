/* Элементы DOM */
import { app } from "../var.js";

import renderNavigation from "../create/renderNavigation.js";
import createHero from "../create/hero/createHero.js";

/* Вызывает функции, которые будут рендерить */
const handleHomePage = () => {
  app.textContent = "";

	renderNavigation();
	
	app.append(createHero());
};

export default handleHomePage;
