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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

exports.getEmail = getEmail;
exports.$ = $;
exports.$$ = $$;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _common = __webpack_require__(0);

var common = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var sEmail = localStorage.getItem("email");
if (sEmail !== null) location.href = "./myreservation.html";

function checkEmailValue() {
	document.querySelector(".login_btn").addEventListener("click", function (e) {
		e.preventDefault();
		var reg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
		var email = document.querySelector("#resrv_id").value;
		if (reg.test(email)) {
			localStorage.setItem('email', email);
			document.getElementById("form1").submit();
		} else {
			alert("올바른 이메일 형식이 아닙니다");
		}
	});
}

document.addEventListener("DOMContentLoaded", function (evt) {
	checkEmailValue();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGRlZWM5NGIwZmM0NGEyZTUyNzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9va2luZ2xvZ2luLmpzIl0sIm5hbWVzIjpbImdldEVtYWlsIiwic0VtYWlsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbW1vbiIsImxvY2F0aW9uIiwiaHJlZiIsImNoZWNrRW1haWxWYWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZWciLCJlbWFpbCIsInZhbHVlIiwidGVzdCIsInNldEl0ZW0iLCJnZXRFbGVtZW50QnlJZCIsInN1Ym1pdCIsImFsZXJ0IiwiZXZ0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLFNBQVNBLFFBQVQsR0FBcUI7QUFDcEIsS0FBSUMsU0FBU0MsYUFBYUMsT0FBYixDQUFxQixPQUFyQixDQUFiO0FBQ0EsS0FBR0YsV0FBVyxJQUFkLEVBQW9CLE9BQU9BLE1BQVA7QUFDcEIsUUFBTyxJQUFQO0FBQ0E7O0FBRUQsU0FBU0csQ0FBVCxDQUFXQyxLQUFYLEVBQWtCO0FBQ2pCLFFBQU9DLFNBQVNDLGFBQVQsQ0FBdUJGLEtBQXZCLENBQVA7QUFDQTs7QUFFRCxTQUFTRyxFQUFULENBQVlILEtBQVosRUFBbUI7QUFDbEIsUUFBT0MsU0FBU0csZ0JBQVQsQ0FBMEJKLEtBQTFCLENBQVA7QUFDQTs7UUFFT0wsUSxHQUFBQSxRO1FBQVVJLEMsR0FBQUEsQztRQUFHSSxFLEdBQUFBLEU7Ozs7Ozs7Ozs7QUNkckI7O0lBQVlFLE07Ozs7QUFFWixJQUFJVCxTQUFTQyxhQUFhQyxPQUFiLENBQXFCLE9BQXJCLENBQWI7QUFDQSxJQUFHRixXQUFXLElBQWQsRUFBb0JVLFNBQVNDLElBQVQsR0FBYyxzQkFBZDs7QUFHcEIsU0FBU0MsZUFBVCxHQUEyQjtBQUMxQlAsVUFBU0MsYUFBVCxDQUF1QixZQUF2QixFQUFxQ08sZ0JBQXJDLENBQXNELE9BQXRELEVBQStELFVBQVNDLENBQVQsRUFBWTtBQUMxRUEsSUFBRUMsY0FBRjtBQUNBLE1BQU1DLE1BQU0seUNBQVo7QUFDQSxNQUFNQyxRQUFRWixTQUFTQyxhQUFULENBQXVCLFdBQXZCLEVBQW9DWSxLQUFsRDtBQUNBLE1BQUdGLElBQUlHLElBQUosQ0FBU0YsS0FBVCxDQUFILEVBQW9CO0FBQ25CaEIsZ0JBQWFtQixPQUFiLENBQXFCLE9BQXJCLEVBQThCSCxLQUE5QjtBQUNBWixZQUFTZ0IsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsTUFBakM7QUFDQSxHQUhELE1BR007QUFDTEMsU0FBTSxrQkFBTjtBQUNBO0FBQ0QsRUFWRDtBQVdBOztBQUdEbEIsU0FBU1EsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQUNXLEdBQUQsRUFBUztBQUN0RFo7QUFDQSxDQUZELEUiLCJmaWxlIjoiYm9va2luZ2xvZ2luLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBkZWVjOTRiMGZjNDRhMmU1Mjc3IiwiZnVuY3Rpb24gZ2V0RW1haWwgKCkge1xuXHR2YXIgc0VtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcblx0aWYoc0VtYWlsICE9PSBudWxsKSByZXR1cm4gc0VtYWlsO1xuXHRyZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gJChxdWVyeSkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XG59XG5cbmZ1bmN0aW9uICQkKHF1ZXJ5KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcbn1cblxuZXhwb3J0IHtnZXRFbWFpbCwgJCwgJCR9O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uLmpzIiwiaW1wb3J0ICogYXMgY29tbW9uIGZyb20gJy4vY29tbW9uLmpzJztcblxudmFyIHNFbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XG5pZihzRW1haWwgIT09IG51bGwpIGxvY2F0aW9uLmhyZWY9XCIuL215cmVzZXJ2YXRpb24uaHRtbFwiXG5cblxuZnVuY3Rpb24gY2hlY2tFbWFpbFZhbHVlKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luX2J0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCByZWcgPSAvW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDN9JC87XG5cdFx0Y29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3J2X2lkXCIpLnZhbHVlO1xuXHRcdGlmKHJlZy50ZXN0KGVtYWlsKSkge1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgZW1haWwpO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtMVwiKS5zdWJtaXQoKTtcblx0XHR9ZWxzZSB7XG5cdFx0XHRhbGVydChcIuyYrOuwlOuluCDsnbTrqZTsnbwg7ZiV7Iud7J20IOyVhOuLmeuLiOuLpFwiKTtcblx0XHR9XG5cdH0pO1xufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldnQpID0+IHtcblx0Y2hlY2tFbWFpbFZhbHVlKCk7XG59KTtcblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jvb2tpbmdsb2dpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=