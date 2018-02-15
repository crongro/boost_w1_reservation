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

export {getEmail, $, $$};

