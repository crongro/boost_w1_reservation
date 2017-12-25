import * as common from './common.js';

var sEmail = localStorage.getItem("email");
if(sEmail !== null) location.href="./myreservation.html"


function checkEmailValue() {
	document.querySelector(".login_btn").addEventListener("click", function(e) {
		e.preventDefault();
		const reg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
		const email = document.querySelector("#resrv_id").value;
		if(reg.test(email)) {
			localStorage.setItem('email', email);
			document.getElementById("form1").submit();
		}else {
			alert("올바른 이메일 형식이 아닙니다");
		}
	});
}


document.addEventListener("DOMContentLoaded", (evt) => {
	checkEmailValue();
});




