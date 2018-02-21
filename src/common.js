function getEmail () {
	var sEmail = localStorage.getItem("email");
	if(sEmail !== null) return sEmail;
	return null;
}

function $(query) {
	return document.querySelector(query);
}

function $$(query) {
	return document.querySelectorAll(query);
}

function getIdFromUrl() {
	return location.search.slice(4) || 1;
}

function getData(api, fn) {
	fetch(api)
		.then((response) => {
			return response.json()
		}).then((json) => {
			fn.call(this, json);
		}).catch((ex) => {
			console.log('parsing failed', ex)
		})
}

export {getData, getEmail, getIdFromUrl, $, $$};

