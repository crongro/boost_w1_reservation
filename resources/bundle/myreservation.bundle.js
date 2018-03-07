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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function getEmail() {
	var sEmail = localStorage.getItem("email");
	if (sEmail !== null) return sEmail;
	return null;
}

function $(query) {
	return document.querySelector(query);
}

function $$(query) {
	return document.querySelectorAll(query);
}

function getIdFromUrl() {
	return location.search.slice(4) || 1;
}

function getData(api, fn) {
	var _this = this;

	fetch(api).then(function (response) {
		return response.json();
	}).then(function (json) {
		fn.call(_this, json);
	}).catch(function (ex) {
		console.log('parsing failed', ex);
	});
}

exports.getData = getData;
exports.getEmail = getEmail;
exports.getIdFromUrl = getIdFromUrl;
exports.$ = $;
exports.$$ = $$;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _common = __webpack_require__(0);

var common = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(function () {
	var email = common.getEmail();
	var elViewReservation = document.querySelector(".viewReservation");
	if (email === null) location.href = "./bookinglogin.html";
})();

function checkLoginFromStorage() {
	var email = common.getEmail();
	var elViewReservation = document.querySelector(".viewReservation");
	if (email !== null) elViewReservation.innerText = email;
}

function cancelReservation() {
	var elConfirmCard = document.querySelector("li.confirmed");
	var elCancelWrap = document.querySelector("li.cancel");

	elConfirmCard.addEventListener("click", function (_ref) {
		var t = _ref.target;

		if (t.className === "btn" || t.tagName === "SPAN" && t.parentElement.className === "btn") {
			var result = window.confirm('취소하시겠습니까?');
			if (!result) return;
			var elCurrentArticle = t.closest("article");
			elCancelWrap.appendChild(elCurrentArticle);
			elCurrentArticle.querySelector(".booking_cancel").style.display = 'none';

			var elSS = document.querySelector(".summary_board li.item:nth-child(2) .figure");
			elSS.innerText = +elSS.innerText - 1;

			var elBack = document.querySelector(".summary_board li.item:nth-child(4) .figure");
			elBack.innerText = +elBack.innerText + 1;
		}
	});
}

document.addEventListener("DOMContentLoaded", function (evt) {
	checkLoginFromStorage();
	cancelReservation();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODUxYmMwYTQ3ZWJjOWU5ZWUwYzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXlyZXNlcnZhdGlvbi5qcyJdLCJuYW1lcyI6WyJnZXRFbWFpbCIsInNFbWFpbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCIkIiwicXVlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRJZEZyb21VcmwiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNsaWNlIiwiZ2V0RGF0YSIsImFwaSIsImZuIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2FsbCIsImNhdGNoIiwiZXgiLCJjb25zb2xlIiwibG9nIiwiY29tbW9uIiwiZW1haWwiLCJlbFZpZXdSZXNlcnZhdGlvbiIsImhyZWYiLCJjaGVja0xvZ2luRnJvbVN0b3JhZ2UiLCJpbm5lclRleHQiLCJjYW5jZWxSZXNlcnZhdGlvbiIsImVsQ29uZmlybUNhcmQiLCJlbENhbmNlbFdyYXAiLCJhZGRFdmVudExpc3RlbmVyIiwidCIsInRhcmdldCIsImNsYXNzTmFtZSIsInRhZ05hbWUiLCJwYXJlbnRFbGVtZW50IiwicmVzdWx0Iiwid2luZG93IiwiY29uZmlybSIsImVsQ3VycmVudEFydGljbGUiLCJjbG9zZXN0IiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImRpc3BsYXkiLCJlbFNTIiwiZWxCYWNrIiwiZXZ0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFD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O0FBRUEsT0FBTUMsT0FBTzNDLFNBQVNDLGFBQVQsQ0FBdUIsNkNBQXZCLENBQWI7QUFDQTBDLFFBQUtsQixTQUFMLEdBQWlCLENBQUNrQixLQUFLbEIsU0FBTixHQUFrQixDQUFuQzs7QUFFQSxPQUFNbUIsU0FBUzVDLFNBQVNDLGFBQVQsQ0FBdUIsNkNBQXZCLENBQWY7QUFDQTJDLFVBQU9uQixTQUFQLEdBQW1CLENBQUNtQixPQUFPbkIsU0FBUixHQUFvQixDQUF2QztBQUNBO0FBQ0QsRUFkRDtBQWVEOztBQUVEekIsU0FBUzZCLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxVQUFDZ0IsR0FBRCxFQUFTO0FBQ3REckI7QUFDQUU7QUFDQSxDQUhELEUiLCJmaWxlIjoibXlyZXNlcnZhdGlvbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NTFiYzBhNDdlYmM5ZTllZTBjOSIsImZ1bmN0aW9uIGdldEVtYWlsICgpIHtcblx0dmFyIHNFbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XG5cdGlmKHNFbWFpbCAhPT0gbnVsbCkgcmV0dXJuIHNFbWFpbDtcblx0cmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uICQocXVlcnkpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xufVxuXG5mdW5jdGlvbiAkJChxdWVyeSkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XG59XG5cbmZ1bmN0aW9uIGdldElkRnJvbVVybCgpIHtcblx0cmV0dXJuIGxvY2F0aW9uLnNlYXJjaC5zbGljZSg0KSB8fCAxO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhKGFwaSwgZm4pIHtcblx0ZmV0Y2goYXBpKVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdH0pLnRoZW4oKGpzb24pID0+IHtcblx0XHRcdGZuLmNhbGwodGhpcywganNvbik7XG5cdFx0fSkuY2F0Y2goKGV4KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHR9KVxufVxuXG5leHBvcnQge2dldERhdGEsIGdldEVtYWlsLCBnZXRJZEZyb21VcmwsICQsICQkfTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi5qcyIsImltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICcuL2NvbW1vbi5qcyc7XG5cbihmdW5jdGlvbigpe1xuXHRjb25zdCBlbWFpbCA9IGNvbW1vbi5nZXRFbWFpbCgpO1xuXHRjb25zdCBlbFZpZXdSZXNlcnZhdGlvbiAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZXdSZXNlcnZhdGlvblwiKTtcblx0aWYoZW1haWwgPT09IG51bGwpIGxvY2F0aW9uLmhyZWYgPSBcIi4vYm9va2luZ2xvZ2luLmh0bWxcIjtcbn0pKCk7XG5cbmZ1bmN0aW9uIGNoZWNrTG9naW5Gcm9tU3RvcmFnZSgpIHtcblx0Y29uc3QgZW1haWwgPSBjb21tb24uZ2V0RW1haWwoKTtcblx0Y29uc3QgZWxWaWV3UmVzZXJ2YXRpb24gID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWV3UmVzZXJ2YXRpb25cIik7XG5cdGlmKGVtYWlsICE9PSBudWxsKSBlbFZpZXdSZXNlcnZhdGlvbi5pbm5lclRleHQgPSBlbWFpbDtcbn1cblxuZnVuY3Rpb24gY2FuY2VsUmVzZXJ2YXRpb24oKSB7XG5cdCBjb25zdCBlbENvbmZpcm1DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpLmNvbmZpcm1lZFwiKTtcblx0IGNvbnN0IGVsQ2FuY2VsV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaS5jYW5jZWxcIik7XG5cblx0IGVsQ29uZmlybUNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICh7dGFyZ2V0IDogdH0pID0+IHtcblx0IFx0aWYodC5jbGFzc05hbWUgPT09IFwiYnRuXCIgfHwgKHQudGFnTmFtZSA9PT1cIlNQQU5cIiAmJiB0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSBcImJ0blwiKSkge1xuXHQgXHRcdGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jb25maXJtKCfst6jshoztlZjsi5zqsqDsirXri4jquYw/Jyk7XG5cdCBcdFx0aWYoIXJlc3VsdCkgcmV0dXJuO1xuXHQgXHRcdGNvbnN0IGVsQ3VycmVudEFydGljbGUgPSB0LmNsb3Nlc3QoXCJhcnRpY2xlXCIpO1xuXHQgXHRcdGVsQ2FuY2VsV3JhcC5hcHBlbmRDaGlsZChlbEN1cnJlbnRBcnRpY2xlKTtcblx0IFx0XHRlbEN1cnJlbnRBcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCIuYm9va2luZ19jYW5jZWxcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHQgXHRcdGNvbnN0IGVsU1MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bW1hcnlfYm9hcmQgbGkuaXRlbTpudGgtY2hpbGQoMikgLmZpZ3VyZVwiKTtcblx0IFx0XHRlbFNTLmlubmVyVGV4dCA9ICtlbFNTLmlubmVyVGV4dCAtIDE7XG5cblx0IFx0XHRjb25zdCBlbEJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bW1hcnlfYm9hcmQgbGkuaXRlbTpudGgtY2hpbGQoNCkgLmZpZ3VyZVwiKTtcblx0IFx0XHRlbEJhY2suaW5uZXJUZXh0ID0gK2VsQmFjay5pbm5lclRleHQgKyAxO1xuXHQgXHR9XG5cdCB9KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGV2dCkgPT4ge1xuXHRjaGVja0xvZ2luRnJvbVN0b3JhZ2UoKTtcblx0Y2FuY2VsUmVzZXJ2YXRpb24oKTtcbn0pO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9teXJlc2VydmF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==