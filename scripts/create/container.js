import createElement from "../helper/createElement.js"

// Создание .container
/**
 * Добавить класс который является обёрткой для секции
 * 
 * @param {string} addClass Дополнительный класс который является обёрткой для секции
 * @returns 
 */
const container = (addClass) => createElement('div', {
	className: `container ${addClass}`,
})

export default container;