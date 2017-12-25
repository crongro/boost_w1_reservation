import * as common from './common.js';

(function(){
	const email = common.getEmail();
	const elViewReservation  = document.querySelector(".viewReservation");
	if(email === null) location.href = "./bookinglogin.html";
})();

function checkLoginFromStorage() {
	const email = common.getEmail();
	const elViewReservation  = document.querySelector(".viewReservation");
	if(email !== null) elViewReservation.innerText = email;
}

function cancelReservation() {
	 const elConfirmCard = document.querySelector("li.confirmed");
	 const elCancelWrap = document.querySelector("li.cancel");

	 elConfirmCard.addEventListener("click", ({target : t}) => {
	 	if(t.className === "btn" || (t.tagName ==="SPAN" && t.parentElement.className === "btn")) {
	 		const result = window.confirm('취소하시겠습니까?');
	 		const elCurrentArticle = t.closest("article");
	 		elCancelWrap.appendChild(elCurrentArticle);
	 		elCurrentArticle.querySelector(".booking_cancel").style.display = 'none';

	 		const elSS = document.querySelector(".summary_board li.item:nth-child(2) .figure");
	 		elSS.innerText = +elSS.innerText - 1;

	 		const elBack = document.querySelector(".summary_board li.item:nth-child(4) .figure");
	 		elBack.innerText = +elBack.innerText + 1;
	 	}
	 });
}

document.addEventListener("DOMContentLoaded", (evt) => {
	checkLoginFromStorage();
	cancelReservation();
});


