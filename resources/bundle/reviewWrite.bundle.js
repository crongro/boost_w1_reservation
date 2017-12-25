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

function registerEvents() {
	setStarRating();
	changeImageFile();
	deleteThumnailImage();
}

document.addEventListener("DOMContentLoaded", function (evt) {
	registerEvents();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWRiMmZiOGYzYjVlZTk2MWZlZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jldmlld1dyaXRlLmpzIl0sIm5hbWVzIjpbInNldFN0YXJSYXRpbmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwidCIsInRhcmdldCIsInN0YXJSYW5rIiwidGFnTmFtZSIsInByZXYiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNoZWNrZWQiLCJpbm5lclRleHQiLCJ2YWx1ZSIsInZhbGlkZUltYWdlIiwiaW1hZ2UiLCJyZXN1bHQiLCJpbmRleE9mIiwidHlwZSIsImNoYW5nZUltYWdlRmlsZSIsImVsSW1hZ2UiLCJldnQiLCJmaWxlcyIsImNvbnNvbGUiLCJ3YXJuIiwic3R5bGUiLCJkaXNwbGF5Iiwic3JjIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZGVsZXRlVGh1bW5haWxJbWFnZSIsImVsRGVsZXRlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZXN0IiwicmVnaXN0ZXJFdmVudHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7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IFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWRiMmZiOGYzYjVlZTk2MWZlZWIiLCJmdW5jdGlvbiBzZXRTdGFyUmF0aW5nKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhdGluZ1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKHt0YXJnZXQ6dH0pID0+IHtcblxuXHRcdGNvbnN0IHN0YXJSYW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFyX3JhbmtcIilcblxuXHRcdGlmKCEgKHQudGFnTmFtZSA9PT0gXCJJTlBVVFwiKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBwcmV2ID0gdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXHRcdGxldCBuZXh0ID0gdC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cblx0XHQvL3ByZXZpb3VzXG5cdFx0d2hpbGUodHJ1ZSkgeyBcblx0XHRcdGlmKHByZXYgPT09IG51bGwgKSBicmVhaztcblx0XHRcdGlmKCAocHJldi50YWdOYW1lID09PSAnSU5QVVQnKSApIHtcblx0XHRcdFx0cHJldi5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcblx0XHRcdH1cblx0XHRcdHByZXYgID0gcHJldi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXHRcdH1cblxuXHRcdC8vbmV4dFxuXHRcdHdoaWxlKHRydWUpIHsgXG5cdFx0XHRpZihuZXh0ID09PSBudWxsICkgYnJlYWs7XG5cdFx0XHRpZiggKG5leHQudGFnTmFtZSA9PT0gJ0lOUFVUJykgKSB7XG5cdFx0XHRcdG5leHQuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRcIik7XG5cdFx0XHRcdG5leHQuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0bmV4dCAgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcblx0XHR9XG5cblx0XHQvL3NldCB2YWx1ZVxuXHRcdHN0YXJSYW5rLmlubmVyVGV4dCA9IHQudmFsdWU7XG5cdFx0c3RhclJhbmsuY2xhc3NMaXN0LnJlbW92ZShcImdyYXlfc3RhclwiKTtcblxuXHR9KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRlSW1hZ2UoaW1hZ2UpIHtcblx0Y29uc3QgcmVzdWx0ID0gKFsgJ2ltYWdlL2pwZWcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICdpbWFnZS9wanBlZycsXG5cdFx0XHRcdFx0XHRcdFx0XHQgJ2ltYWdlL3BuZycsXG5cdFx0XHRcdFx0XHRcdFx0XHQgJ2ltYWdlL2pwZycgXS5pbmRleE9mKGltYWdlLnR5cGUpID4gLTEpO1xuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VJbWFnZUZpbGUoKSB7XG5cdGNvbnN0IGVsSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jldmlld0ltYWdlRmlsZU9wZW5JbnB1dFwiKTtcblx0ZWxJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldnQpID0+IHtcblx0XHRjb25zdCBpbWFnZSA9IGV2dC50YXJnZXQuZmlsZXNbMF07XG5cdFx0aWYoIXZhbGlkZUltYWdlKGltYWdlKSkgeyBcblx0XHRcdGNvbnNvbGUud2FybihcImludmFsaWRlIGltYWdlIGZpbGUgdHlwZVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtX3ByZXZpZXdfdGh1bWJzIGxpLml0ZW1cIikuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuXHRcdGNvbnN0IGVsSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW1fcHJldmlld190aHVtYnMgaW1nXCIpO1xuXHRcdGVsSW1hZ2Uuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoaW1hZ2UpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGh1bW5haWxJbWFnZSgpIHtcblx0Y29uc3QgZWxEZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW1fcHJldmlld190aHVtYnMgLmFuY2hvclwiKTsgXG5cdGVsRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG5cdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZ0LnRhcmdldC5jbG9zZXN0KFwibGkuaXRlbVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH0pO1xuXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKCkge1xuXHRzZXRTdGFyUmF0aW5nKCk7XG5cdGNoYW5nZUltYWdlRmlsZSgpO1xuXHRkZWxldGVUaHVtbmFpbEltYWdlKCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldnQpID0+IHtcblx0cmVnaXN0ZXJFdmVudHMoKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZXZpZXdXcml0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=