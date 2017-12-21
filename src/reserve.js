

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
		elTicketBody.addEventListener("click", (e) => {
			e.preventDefault();
			const target = e.target;
			if(!this._isCountBtn(target)) return;
			const btnType = (target.classList.contains(this.matchedClassNameList[0])) ? "-" : "+";

			this._resetCountValue(btnType, target);
		});
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
			  .updatePartialPrice(target, countValue);
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
	}

} //end of class

document.addEventListener("DOMContentLoaded", evt => {
	const tr = new TicketReservation();
	tr.run();
});
