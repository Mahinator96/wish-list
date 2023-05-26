import handleHomePage from "../func/handleHomePage.js";

const router = Router();

const handleEditPageRoute = (id) => {};
const handleEditProfileRoute = (login) => {};
const handleUserRoute = (login) => {};

router.on('/', handleHomePage); /* Путь к домашней странице */
router.on('/editwish/newwish', handleEditPageRoute); /* Путь к домашней странице */
router.on('/editwish/:id', handleEditPageRoute); /* Путь к домашней странице */
router.on('/editprofile/:login', handleEditProfileRoute); /* Путь к домашней странице */
router.on('/user/:login', handleUserRoute); /* Путь к домашней странице */

export {router, handleEditPageRoute, handleEditProfileRoute, handleUserRoute}
