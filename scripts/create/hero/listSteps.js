import createElement from "../../helper/createElement.js";

/* Создание и наполнение списка ol.steps.hero__steps */
const listSteps = createElement('ol', {
	className: 'steps hero__steps',
})

// Массив содержимого элементов li.steps__item
const itemTextSteps = [
	'Cоздайте список&nbsp;желаний',
	'Поделитесь ссылкой&nbsp;с&nbsp;друзьями',
	'Получите желанный подарок'
]

// Наполнение ol.steps.hero__steps элементами li.seps__item
itemTextSteps.forEach(text => {
	const itemStep = createElement('li', {
		className: 'steps__item',
		innerHTML: text,
	});

	listSteps.append(itemStep)
})

export default listSteps;