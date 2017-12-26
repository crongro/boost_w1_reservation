/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function setStarRating() {
	document.querySelector(".rating").addEventListener("click", function (_ref) {
		var t = _ref.target;


		var starRank = document.querySelector(".star_rank");

		if (!(t.tagName === "INPUT")) {
			return;
		}

		var prev = t.previousElementSibling;
		var next = t.nextElementSibling;

		//previous
		while (true) {
			if (prev === null) break;
			if (prev.tagName === 'INPUT') {
				prev.classList.add("checked");
			}
			prev = prev.previousElementSibling;
		}

		//next
		while (true) {
			if (next === null) break;
			if (next.tagName === 'INPUT') {
				next.classList.remove("checked");
				next.checked = false;
			}
			next = next.nextElementSibling;
		}

		//set value
		starRank.innerText = t.value;
		starRank.classList.remove("gray_star");
	});
}

function valideImage(image) {
	var result = ['image/jpeg', 'image/pjpeg', 'image/png', 'image/jpg'].indexOf(image.type) > -1;
	return result;
}

function changeImageFile() {
	var elImage = document.querySelector("#reviewImageFileOpenInput");
	elImage.addEventListener("change", function (evt) {
		var image = evt.target.files[0];
		if (!valideImage(image)) {
			console.warn("invalide image file type");
			return;
		}
		document.querySelector(".item_preview_thumbs li.item").style.display = 'inline-block';
		var elImage = document.querySelector(".item_preview_thumbs img");
		elImage.src = window.URL.createObjectURL(image);
	});
}

function deleteThumnailImage() {
	var elDelete = document.querySelector(".item_preview_thumbs .anchor");
	elDelete.addEventListener("click", function (evt) {
		evt.preventDefault();
		evt.target.closest("li.item").style.display = "none";
	});
}

function writeText() {
	var elWriteInfo = document.querySelector(".review_write_info");
	var elTextArea = document.querySelector(".review_textarea");

	elWriteInfo.addEventListener("click", function (evt) {
		elWriteInfo.style.display = "none";
		elTextArea.focus();
	}, false);
}

function registerEvents() {
	setStarRating();
	changeImageFile();
	deleteThumnailImage();
	writeText();
}

document.addEventListener("DOMContentLoaded", function (evt) {
	registerEvents();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTJkZDc5OWM4YTk4YzEyZjJkMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jldmlld1dyaXRlLmpzIl0sIm5hbWVzIjpbInNldFN0YXJSYXRpbmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwidCIsInRhcmdldCIsInN0YXJSYW5rIiwidGFnTmFtZSIsInByZXYiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNoZWNrZWQiLCJpbm5lclRleHQiLCJ2YWx1ZSIsInZhbGlkZUltYWdlIiwiaW1hZ2UiLCJyZXN1bHQiLCJpbmRleE9mIiwidHlwZSIsImNoYW5nZUltYWdlRmlsZSIsImVsSW1hZ2UiLCJldnQiLCJmaWxlcyIsImNvbnNvbGUiLCJ3YXJuIiwic3R5bGUiLCJkaXNwbGF5Iiwic3JjIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZGVsZXRlVGh1bW5haWxJbWFnZSIsImVsRGVsZXRlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZXN0Iiwid3JpdGVUZXh0IiwiZWxXcml0ZUluZm8iLCJlbFRleHRBcmVhIiwiZm9jdXMiLCJyZWdpc3RlckV2ZW50cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztB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LGFBQVlyQyxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFDc0IsR0FBRCxFQUFTO0FBQzVDZSxjQUFZWCxLQUFaLENBQWtCQyxPQUFsQixHQUE0QixNQUE1QjtBQUNBVyxhQUFXQyxLQUFYO0FBQ0YsRUFIRCxFQUdHLEtBSEg7QUFLQTs7QUFFRCxTQUFTQyxjQUFULEdBQTBCO0FBQ3pCM0M7QUFDQXVCO0FBQ0FZO0FBQ0FJO0FBQ0E7O0FBRUR0QyxTQUFTRSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBQ3NCLEdBQUQsRUFBUztBQUN0RGtCO0FBQ0EsQ0FGRCxFIiwiZmlsZSI6InJldmlld1dyaXRlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEyZGQ3OTljOGE5OGMxMmYyZDFlIiwiZnVuY3Rpb24gc2V0U3RhclJhdGluZygpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYXRpbmdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICh7dGFyZ2V0OnR9KSA9PiB7XG5cblx0XHRjb25zdCBzdGFyUmFuayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Rhcl9yYW5rXCIpXG5cblx0XHRpZighICh0LnRhZ05hbWUgPT09IFwiSU5QVVRcIikpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgcHJldiA9IHQucHJldmlvdXNFbGVtZW50U2libGluZztcblx0XHRsZXQgbmV4dCA9IHQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG5cdFx0Ly9wcmV2aW91c1xuXHRcdHdoaWxlKHRydWUpIHsgXG5cdFx0XHRpZihwcmV2ID09PSBudWxsICkgYnJlYWs7XG5cdFx0XHRpZiggKHByZXYudGFnTmFtZSA9PT0gJ0lOUFVUJykgKSB7XG5cdFx0XHRcdHByZXYuY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG5cdFx0XHR9XG5cdFx0XHRwcmV2ICA9IHByZXYucHJldmlvdXNFbGVtZW50U2libGluZztcblx0XHR9XG5cblx0XHQvL25leHRcblx0XHR3aGlsZSh0cnVlKSB7IFxuXHRcdFx0aWYobmV4dCA9PT0gbnVsbCApIGJyZWFrO1xuXHRcdFx0aWYoIChuZXh0LnRhZ05hbWUgPT09ICdJTlBVVCcpICkge1xuXHRcdFx0XHRuZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja2VkXCIpO1xuXHRcdFx0XHRuZXh0LmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdG5leHQgID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0fVxuXG5cdFx0Ly9zZXQgdmFsdWVcblx0XHRzdGFyUmFuay5pbm5lclRleHQgPSB0LnZhbHVlO1xuXHRcdHN0YXJSYW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJncmF5X3N0YXJcIik7XG5cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkZUltYWdlKGltYWdlKSB7XG5cdGNvbnN0IHJlc3VsdCA9IChbICdpbWFnZS9qcGVnJyxcblx0XHRcdFx0XHRcdFx0XHRcdCAnaW1hZ2UvcGpwZWcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICdpbWFnZS9wbmcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICdpbWFnZS9qcGcnIF0uaW5kZXhPZihpbWFnZS50eXBlKSA+IC0xKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2hhbmdlSW1hZ2VGaWxlKCkge1xuXHRjb25zdCBlbEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXZpZXdJbWFnZUZpbGVPcGVuSW5wdXRcIik7XG5cdGVsSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZ0KSA9PiB7XG5cdFx0Y29uc3QgaW1hZ2UgPSBldnQudGFyZ2V0LmZpbGVzWzBdO1xuXHRcdGlmKCF2YWxpZGVJbWFnZShpbWFnZSkpIHsgXG5cdFx0XHRjb25zb2xlLndhcm4oXCJpbnZhbGlkZSBpbWFnZSBmaWxlIHR5cGVcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbV9wcmV2aWV3X3RodW1icyBsaS5pdGVtXCIpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblx0XHRjb25zdCBlbEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtX3ByZXZpZXdfdGh1bWJzIGltZ1wiKTtcblx0XHRlbEltYWdlLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGltYWdlKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRodW1uYWlsSW1hZ2UoKSB7XG5cdGNvbnN0IGVsRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtX3ByZXZpZXdfdGh1bWJzIC5hbmNob3JcIik7IFxuXHRlbERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuXHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2dC50YXJnZXQuY2xvc2VzdChcImxpLml0ZW1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gd3JpdGVUZXh0KCkge1xuXHRjb25zdCBlbFdyaXRlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV2aWV3X3dyaXRlX2luZm9cIik7XG5cdGNvbnN0IGVsVGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldmlld190ZXh0YXJlYVwiKTtcblxuXHRlbFdyaXRlSW5mby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgIGVsV3JpdGVJbmZvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlbFRleHRBcmVhLmZvY3VzKCk7XG5cdH0sIGZhbHNlKTtcblxufVxuXG5mdW5jdGlvbiByZWdpc3RlckV2ZW50cygpIHtcblx0c2V0U3RhclJhdGluZygpO1xuXHRjaGFuZ2VJbWFnZUZpbGUoKTtcblx0ZGVsZXRlVGh1bW5haWxJbWFnZSgpO1xuXHR3cml0ZVRleHQoKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGV2dCkgPT4ge1xuXHRyZWdpc3RlckV2ZW50cygpO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Jldmlld1dyaXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==