import { API_URL } from "../var.js";

/**
 * отправляет данные из формы 
 */
const submitForm = async (event) => {
	const formData = new FormData(event.target); /* Создаётся FormData */
	const credentials = { /* Объект в котором хранятся данные из FormData */
		login: formData.get('login'), 
		password: formData.get('password'),
	};

	try {
		const response = await fetch(`${API_URL}/register`, { /* Запрос на сервер */
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(credentials)
		}); 

		if (response.ok) { /* Если запрос верный */
			const data = await response.json(); /* Получить данные из сервера */
			console.log(data);
		} else { 
			console.log(await response.json());
			throw new Error('Invalid credentials'); /* Иначе создать ошибку */
		}
	} catch (error) {}
}

export { submitForm };