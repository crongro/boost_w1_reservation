
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

function registerEvents() {
	changeImageFile();
	deleteThumnailImage();
}

document.addEventListener("DOMContentLoaded", (evt) => {
	registerEvents();
});