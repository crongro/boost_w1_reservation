function setStarRating() {
	document.querySelector(".rating").addEventListener("click", ({target:t}) => {

		const starRank = document.querySelector(".star_rank")

		if(! (t.tagName === "INPUT")) {
			return;
		}

		let prev = t.previousElementSibling;
		let next = t.nextElementSibling;

		//previous
		while(true) { 
			if(prev === null ) break;
			if( (prev.tagName === 'INPUT') ) {
				prev.classList.add("checked");
			}
			prev  = prev.previousElementSibling;
		}

		//next
		while(true) { 
			if(next === null ) break;
			if( (next.tagName === 'INPUT') ) {
				next.classList.remove("checked");
				next.checked = false;
			}
			next  = next.nextElementSibling;
		}

		//set value
		starRank.innerText = t.value;
		starRank.classList.remove("gray_star");

	});
}

function valideImage(image) {
	const result = ([ 'image/jpeg',
									 'image/pjpeg',
									 'image/png',
									 'image/jpg' ].indexOf(image.type) > -1);
	return result;
}

function changeImageFile() {
	const elImage = document.querySelector("#reviewImageFileOpenInput");
	elImage.addEventListener("change", (evt) => {
		const image = evt.target.files[0];
		if(!valideImage(image)) { 
			console.warn("invalide image file type");
			return;
		}
		document.querySelector(".item_preview_thumbs li.item").style.display = 'inline-block';
		const elImage = document.querySelector(".item_preview_thumbs img");
		elImage.src = window.URL.createObjectURL(image);
	});
}

function deleteThumnailImage() {
	const elDelete = document.querySelector(".item_preview_thumbs .anchor"); 
	elDelete.addEventListener("click", (evt) => {
		evt.preventDefault();
		evt.target.closest("li.item").style.display = "none";
	});
}

function writeText() {
	const elWriteInfo = document.querySelector(".review_write_info");
	const elTextArea = document.querySelector(".review_textarea");

	elWriteInfo.addEventListener("click", (evt) => {
    elWriteInfo.style.display = "none";
    elTextArea.focus();
	}, false);

	elTextArea.addEventListener("keyup", ({target:t}) => {
		const countView = document.querySelector(".guide_review span");
		var wordLen = t.value.length;
		t.value = t.value.substring(0, 400);
		countView.innerText = wordLen;
	});
}


function checkValues() {
	const star = document.querySelector(".star_rank").innerText;
	if(star === "0")  {
		alert("별점을 입력하세요");
		return;
	}

	const text = document.querySelector(".review_textarea").value;
	if(text.length < 5) { 
		alert("5자이상 리뷰를 남겨주세요");
		return;
	}

	return true;
}

function validateForm() {
	const btn = document.querySelector(".bk_btn");
	btn.addEventListener("click", (evt) => {
		if(checkValues()) console.log("submit ok");
	});
}


function registerEvents() {
	setStarRating();
	changeImageFile();
	deleteThumnailImage();
	writeText();
	validateForm();
}

document.addEventListener("DOMContentLoaded", (evt) => {
	registerEvents();
});