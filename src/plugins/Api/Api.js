const {send} = require('./req');

const base = process.env.NODE_ENV === 'development'
	? 'http://localhost:8080'
	: '/tune-api';

class Api {
	static async take(path, data = {}, method = 'POST') {
		const result = await send(`${base}/${path}`, JSON.stringify(data), method);

		if (result.statusCode < 200 || result.statusCode >= 300) {
			let err = new Error(`Error take ${path} code: ${result.statusCode} \n message :\n${result.message}`);
			err.isShow = true;

			throw err;
		}

		return result;
	}
}

export default Api;
