function getEmail () {
	var sEmail = localStorage.getItem("email");
	if(sEmail !== null) return sEmail;
	return null;
}

export {getEmail};

