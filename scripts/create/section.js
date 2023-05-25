import createElement from "../helper/createElement.js"

/**
 * Создание секции с классом
 * 
 * @param {string} className класс 
 * @returns секцию с классом
 */
const section = (className) => createElement('section', {className: className});
// function section(class) {
// 	return createElement('section', {className: class});
// }


export default section;