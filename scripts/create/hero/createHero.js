// Переменные DOM
import { section, container} from "../../var.js"

import description from "./description.js";
import listSteps from "./listSteps.js";
// import listFullSteps from "./itemSteps.js";
import title from "./title.js";

// Создание section.hero
const createHero = () => {
	const heroSection = section('hero');
  const heroContainer = container('hero__container');

	heroSection.append(heroContainer);
	heroContainer.append(title, description, listSteps);

	return heroSection;
}

export default createHero;