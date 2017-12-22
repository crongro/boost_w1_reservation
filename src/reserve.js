

class TicketReservation {
	constructor() {
		this.matchedClassNameList = ["ico_minus3","ico_plus3"];
		this.DATA = {
			disabled : 'disabled'
		}
	}

	run() {
		this.regCountBtn();
	}

	regCountBtn() {
		const elTicketBody = document.querySelector(".ticket_body");
		const elAgreementBtn = document.querySelector(".section_booking_agreement");
		const name = document.querySelector("#name");
		const tel = document.querySelector("#tel");
		const agreeChk = document.querySelector("#chk3");

		elTicketBody.addEventListener("click", (e) => {
			e.preventDefault();
			const target = e.target;
			if(!this._isCountBtn(target)) return;
			const btnType = (target.classList.contains(this.matchedClassNameList[0])) ? "-" : "+";
			this._resetCountValue(btnType, target);
			this.confirmInputCompletion();
		});

		elAgreementBtn.addEventListener("click", (e) => {
			const target = e.target;
			const btn_agreement = target.closest(".btn_agreement");
			if(!btn_agreement) return;

			e.preventDefault();

			const elText = btn_agreement.querySelector(".btn_text");
			const elUpDown = btn_agreement.querySelector(".fn");
			const elAgreement = target.closest(".agreement");

			elAgreement.classList.toggle("open");
			elUpDown.classList.toggle("fn-down2");
			elUpDown.classList.toggle("fn-up2");

			if(elAgreement.classList.contains("open")) elText.innerText = "접기";
			else elText.innerText = "보기";

		});

		name.addEventListener("change", (e) =>  { this.confirmInputCompletion()});
		tel.addEventListener("change", (e) =>  { 
			if(!(/^\d[\d-]{8,}\d$/).test(e.target.value)) { 
				document.querySelector(".warning_msg").style.visibility = 'visible';
				setTimeout(() => {
					document.querySelector(".warning_msg").style.visibility = 'hidden';
				}, 1200);
			}
			this.confirmInputCompletion();
		});
		agreeChk.addEventListener("change", (e) => this.confirmInputCompletion());
	}

	_isCountBtn(target) {
		return this.matchedClassNameList.some( (className) => {
			return target.classList.contains(className);
		});
	}

	_resetCountValue(btnType, target) {
		const elCountValue = target.parentElement.querySelector(".count_control_input");
		let countValue = +elCountValue.value;
		if(btnType === "+") { 
			countValue++;
		} else { 
			if(countValue === 0)  {
				this.addClass(elCountValue, this.DATA.disabled);
				return countValue;;
			}
			countValue--;
		}

		this.setCountValue(elCountValue, countValue)
			  .removeClass(elCountValue, this.DATA.disabled)
			  .updatePartialPrice(target, countValue)
			  .updateTotalCount();
	}

	setCountValue(elCountValue, countValue) {
		elCountValue.value = countValue;
		return this;
	}

	addClass(elCountValue, nextClass) {
		const elMinus =elCountValue.previousElementSibling; 
		[elCountValue, elMinus].forEach( el => {
			el.classList.add(nextClass);
		});
		return this;
	}

	removeClass(elCountValue, nextClass) {
		const elMinus =elCountValue.previousElementSibling; 
		[elCountValue, elMinus].forEach( el => {
			el.classList.remove(nextClass);
		});
		return this;
	}

	updatePartialPrice(target, countValue) {
		//const elPrice = target.
		const elPrice = target.closest(".count_control").querySelector(".total_price");
		const price = +(target.closest(".qty").querySelector(".price").innerText.replace(/\,/,""));
		const totalPrice = price * countValue;
		const priceGubun = (totalPrice+"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		elPrice.innerText = priceGubun;
		return this;
	}

	updateTotalCount() {
		const elTC = document.querySelector("#totalCount");
		const countList = document.querySelectorAll(".count_control_input");
		const totalCount = [].reduce.call(countList, (prev, next) => {
			return prev+ +(next.value);
		}, 0);
		elTC.innerText = totalCount;
	}

	confirmInputCompletion() {
		const bk_btn_wrap = document.querySelector(".bk_btn_wrap");
		let bok = true;

		const count = +(document.querySelector("#totalCount").innerText);
		if(count < 1) bok = false;

		const name = document.querySelector("#name");
		if(name.value.length < 1) bok = false;

		const tel = document.querySelector("#tel");
		if(tel.value.length < 1) bok = false;

		const bAgreeChk = document.querySelector("#chk3").checked;
		if(!bAgreeChk) bok = false;

		if(bok) bk_btn_wrap.classList.remove("disable");
		else bk_btn_wrap.classList.add("disable");

	}

} //end of class

document.addEventListener("DOMContentLoaded", evt => {
	const tr = new TicketReservation();
	tr.run();
});
