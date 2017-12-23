import * as common from './common.js';

function checkLogin() {
	const email = common.getEmail();
	const elViewReservation  = document.querySelector(".viewReservation");
	if(email === null) location.href = "./bookinglogin.html";
}

function checkLoginFromStorage() {
	const email = common.getEmail();
	const elViewReservation  = document.querySelector(".viewReservation");
	if(email !== null) elViewReservation.innerText = email;
}

checkLogin();

document.addEventListener("DOMContentLoaded", (evt) => {
	checkLoginFromStorage();
});


