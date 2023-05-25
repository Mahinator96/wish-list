/**
 * Создаёт новый элемет с тегами
 * 
 * @param {string} tagName Имя тега
 * @param {*} attribute Аттрибуты тега
 * @returns  Элемент с объектом тегов
 */
const createElement = (tagName, attribute) => {
	const elem = document.createElement(tagName);
	Object.assign(elem, attribute);

	return elem;
}

export default createElement;