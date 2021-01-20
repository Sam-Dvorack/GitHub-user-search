let githubURL = 'https://api.github.com/search/users?q=';

// Fetch config.
const config = {
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json;charset=utf-8'
	}
};

async function svc(search) {
	let apiSearch = githubURL + search;

	try {
		// Attempt to execute the endpoint.
		const json = await serverAjax(apiSearch);
		return json.json();

	} catch (err) {
		alert(err.message);
	}
}

async function about(url) {

	try {
		// Attempt to execute the endpoint.
		const json = await serverAjax(url);
		return json.json();

	} catch (err) {
		alert(err.message);
	}
}

async function serverAjax(url) {

	try {

		// Attempt to execute the endpoint.
		const response = await fetch(url, { ...config });
		const json = await response;

		return json;

	} catch (err) {
		throw err;
	}
}

export default {
	svc,
	about
};