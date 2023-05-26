/* Созданные элементы */
	import section from "./create/section.js";
	import container from "./create/container.js";

/* CONST */
	const API_URL = 'http://localhost:3000';

/* Элементы DOM */
	const app = document.querySelector('.app'); /* main.app */
	const nav = document.querySelector('.nav');	/* .header > .nav */



export { app, nav, section, container, API_URL};