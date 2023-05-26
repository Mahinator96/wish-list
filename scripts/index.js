/* Элементы DOM */


/* Функции */
import handleHomePage from "./func/handleHomePage.js";
import { router } from "./helper/router.js";

/* Переменные */
let isMainPage = true; /* Для проверки на главную страницу */

/* Создание маршрутизатора Director */
// export const router = Router();


/* Инициализация приложения */
const init = () => {

	// router.on('/', handleHomePage); /* Путь к домашней странице */
	// router.on('/editwish/newwish', handleEditPageRoute); /* Путь к домашней странице */
	// router.on('/editwish/:id', handleEditPageRoute); /* Путь к домашней странице */
	// router.on('/editprofile/:login', handleEditProfileRoute); /* Путь к домашней странице */
	// router.on('/user/:login', handleUserRoute); /* Путь к домашней странице */

	router.init(); /* Инициализация роутера */

	if (isMainPage) { /* Если это главная страница (изначально true) */
		isMainPage = false; /* Поменять на false */
		router.setRoute('/'); /* Выводим главную */

	}
}

init()