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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__(0);

var _ = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TicketReservation = function () {
	function TicketReservation() {
		_classCallCheck(this, TicketReservation);

		this.matchedClassNameList = ["ico_minus3", "ico_plus3"];
		this.DATA = {
			disabled: 'disabled'
		};
	}

	_createClass(TicketReservation, [{
		key: "run",
		value: function run() {
			this.setData();
			this.regCountBtn();
		}
	}, {
		key: "setData",
		value: function setData() {
			var id = _.getIdFromUrl();

			var titleImg = _.$('.visual_img img');
			var titles = [_.$(".top_title .title"), _.$(".preview_txt_tit")];
			var place = _.$('.dsc');

			titleImg.src = "http://211.249.62.123/productImages/" + id;

			_.getData("http://211.249.62.123/api/products/" + id, function (_ref) {
				var product = _ref.product;

				titles.forEach(function (ele) {
					return ele.innerHTML = product.description;
				});
				place.innerHTML = place.innerHTML.replace(/([^:]+\s*:\s*)[^<]+/, "$1" + product.placeName);
			});
		}
	}, {
		key: "regCountBtn",
		value: function regCountBtn() {
			var _this = this;

			var elTicketBody = document.querySelector(".ticket_body");
			var elAgreementBtn = document.querySelector(".section_booking_agreement");
			var name = document.querySelector("#name");
			var tel = document.querySelector("#tel");
			var agreeChk = document.querySelector("#chk3");

			elTicketBody.addEventListener("click", function (e) {
				e.preventDefault();
				var target = e.target;
				if (!_this._isCountBtn(target)) return;
				var btnType = target.classList.contains(_this.matchedClassNameList[0]) ? "-" : "+";
				_this._resetCountValue(btnType, target);
				_this.confirmInputCompletion();
			});

			elAgreementBtn.addEventListener("click", function (e) {
				var target = e.target;
				var btn_agreement = target.closest(".btn_agreement");
				if (!btn_agreement) return;

				e.preventDefault();

				var elText = btn_agreement.querySelector(".btn_text");
				var elUpDown = btn_agreement.querySelector(".fn");
				var elAgreement = target.closest(".agreement");

				elAgreement.classList.toggle("open");
				elUpDown.classList.toggle("fn-down2");
				elUpDown.classList.toggle("fn-up2");

				if (elAgreement.classList.contains("open")) elText.innerText = "접기";else elText.innerText = "보기";
			});

			name.addEventListener("change", function (e) {
				_this.confirmInputCompletion();
			});
			tel.addEventListener("change", function (e) {
				if (!/^\d[\d-]{8,}\d$/.test(e.target.value)) {
					document.querySelector(".warning_msg").style.visibility = 'visible';
					setTimeout(function () {
						document.querySelector(".warning_msg").style.visibility = 'hidden';
					}, 1200);
				}
				_this.confirmInputCompletion();
			});
			agreeChk.addEventListener("change", function (e) {
				return _this.confirmInputCompletion();
			});
		}
	}, {
		key: "_isCountBtn",
		value: function _isCountBtn(target) {
			return this.matchedClassNameList.some(function (className) {
				return target.classList.contains(className);
			});
		}
	}, {
		key: "_resetCountValue",
		value: function _resetCountValue(btnType, target) {
			var elCountValue = target.parentElement.querySelector(".count_control_input");
			var countValue = +elCountValue.value;
			if (btnType === "+") {
				countValue++;
			} else {
				if (countValue === 0) {
					this.addClass(elCountValue, this.DATA.disabled);
					return countValue;;
				}
				countValue--;
			}

			this.setCountValue(elCountValue, countValue).removeClass(elCountValue, this.DATA.disabled).updatePartialPrice(target, countValue).updateTotalCount();
		}
	}, {
		key: "setCountValue",
		value: function setCountValue(elCountValue, countValue) {
			elCountValue.value = countValue;
			return this;
		}
	}, {
		key: "addClass",
		value: function addClass(elCountValue, nextClass) {
			var elMinus = elCountValue.previousElementSibling;
			[elCountValue, elMinus].forEach(function (el) {
				el.classList.add(nextClass);
			});
			return this;
		}
	}, {
		key: "removeClass",
		value: function removeClass(elCountValue, nextClass) {
			var elMinus = elCountValue.previousElementSibling;
			[elCountValue, elMinus].forEach(function (el) {
				el.classList.remove(nextClass);
			});
			return this;
		}
	}, {
		key: "updatePartialPrice",
		value: function updatePartialPrice(target, countValue) {
			//const elPrice = target.
			var elPrice = target.closest(".count_control").querySelector(".total_price");
			var price = +target.closest(".qty").querySelector(".price").innerText.replace(/\,/, "");
			var totalPrice = price * countValue;
			var priceGubun = (totalPrice + "").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
			elPrice.innerText = priceGubun;
			return this;
		}
	}, {
		key: "updateTotalCount",
		value: function updateTotalCount() {
			var elTC = document.querySelector("#totalCount");
			var countList = document.querySelectorAll(".count_control_input");
			var totalCount = [].reduce.call(countList, function (prev, next) {
				return prev + +next.value;
			}, 0);
			elTC.innerText = totalCount;
		}
	}, {
		key: "confirmInputCompletion",
		value: function confirmInputCompletion() {
			var bk_btn_wrap = document.querySelector(".bk_btn_wrap");
			var bok = true;

			var count = +document.querySelector("#totalCount").innerText;
			if (count < 1) bok = false;

			var name = document.querySelector("#name");
			if (name.value.length < 1) bok = false;

			var tel = document.querySelector("#tel");
			if (tel.value.length < 1) bok = false;

			var bAgreeChk = document.querySelector("#chk3").checked;
			if (!bAgreeChk) bok = false;

			if (bok) bk_btn_wrap.classList.remove("disable");else bk_btn_wrap.classList.add("disable");
		}
	}]);

	return TicketReservation;
}(); //end of class

document.addEventListener("DOMContentLoaded", function (evt) {
	var tr = new TicketReservation();
	tr.run();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODUxYmMwYTQ3ZWJjOWU5ZWUwYzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzZXJ2ZS5qcyJdLCJuYW1lcyI6WyJnZXRFbWFpbCIsInNFbWFpbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCIkIiwicXVlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRJZEZyb21VcmwiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNsaWNlIiwiZ2V0RGF0YSIsImFwaSIsImZuIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2FsbCIsImNhdGNoIiwiZXgiLCJjb25zb2xlIiwibG9nIiwiXyIsIlRpY2tldFJlc2VydmF0aW9uIiwibWF0Y2hlZENsYXNzTmFtZUxpc3QiLCJEQVRBIiwiZGlzYWJsZWQiLCJzZXREYXRhIiwicmVnQ291bnRCdG4iLCJpZCIsInRpdGxlSW1nIiwidGl0bGVzIiwicGxhY2UiLCJzcmMiLCJwcm9kdWN0IiwiZm9yRWFjaCIsImVsZSIsImlubmVySFRNTCIsImRlc2NyaXB0aW9uIiwicmVwbGFjZSIsInBsYWNlTmFtZSIsImVsVGlja2V0Qm9keSIsImVsQWdyZWVtZW50QnRuIiwibmFtZSIsInRlbCIsImFncmVlQ2hrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIl9pc0NvdW50QnRuIiwiYnRuVHlwZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiX3Jlc2V0Q291bnRWYWx1ZSIsImNvbmZpcm1JbnB1dENvbXBsZXRpb24iLCJidG5fYWdyZWVtZW50IiwiY2xvc2VzdCIsImVsVGV4dCIsImVsVXBEb3duIiwiZWxBZ3JlZW1lbnQiLCJ0b2dnbGUiLCJpbm5lclRleHQiLCJ0ZXN0IiwidmFsdWUiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJzZXRUaW1lb3V0Iiwic29tZSIsImNsYXNzTmFtZSIsImVsQ291bnRWYWx1ZSIsInBhcmVudEVsZW1lbnQiLCJjb3VudFZhbHVlIiwiYWRkQ2xhc3MiLCJzZXRDb3VudFZhbHVlIiwicmVtb3ZlQ2xhc3MiLCJ1cGRhdGVQYXJ0aWFsUHJpY2UiLCJ1cGRhdGVUb3RhbENvdW50IiwibmV4dENsYXNzIiwiZWxNaW51cyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJlbCIsImFkZCIsInJlbW92ZSIsImVsUHJpY2UiLCJwcmljZSIsInRvdGFsUHJpY2UiLCJwcmljZUd1YnVuIiwiZWxUQyIsImNvdW50TGlzdCIsInRvdGFsQ291bnQiLCJyZWR1Y2UiLCJwcmV2IiwibmV4dCIsImJrX2J0bl93cmFwIiwiYm9rIiwiY291bnQiLCJsZW5ndGgiLCJiQWdyZWVDaGsiLCJjaGVja2VkIiwidHIiLCJydW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3REEsU0FBU0EsUUFBVCxHQUFxQjtBQUNwQixLQUFJQyxTQUFTQyxhQUFhQyxPQUFiLENBQXFCLE9BQXJCLENBQWI7QUFDQSxLQUFHRixXQUFXLElBQWQsRUFBb0IsT0FBT0EsTUFBUDtBQUNwQixRQUFPLElBQVA7QUFDQTs7QUFFRCxTQUFTRyxDQUFULENBQVdDLEtBQVgsRUFBa0I7QUFDakIs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QUNwRCxLQUFNc0QsS0FBSyxJQUFJN0UsaUJBQUosRUFBWDtBQUNBNkUsSUFBR0MsR0FBSDtBQUNBLENBSEQsRSIsImZpbGUiOiJyZXNlcnZlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg1MWJjMGE0N2ViYzllOWVlMGM5IiwiZnVuY3Rpb24gZ2V0RW1haWwgKCkge1xuXHR2YXIgc0VtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcblx0aWYoc0VtYWlsICE9PSBudWxsKSByZXR1cm4gc0VtYWlsO1xuXHRyZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gJChxdWVyeSkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XG59XG5cbmZ1bmN0aW9uICQkKHF1ZXJ5KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcbn1cblxuZnVuY3Rpb24gZ2V0SWRGcm9tVXJsKCkge1xuXHRyZXR1cm4gbG9jYXRpb24uc2VhcmNoLnNsaWNlKDQpIHx8IDE7XG59XG5cbmZ1bmN0aW9uIGdldERhdGEoYXBpLCBmbikge1xuXHRmZXRjaChhcGkpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpXG5cdFx0fSkudGhlbigoanNvbikgPT4ge1xuXHRcdFx0Zm4uY2FsbCh0aGlzLCBqc29uKTtcblx0XHR9KS5jYXRjaCgoZXgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdH0pXG59XG5cbmV4cG9ydCB7Z2V0RGF0YSwgZ2V0RW1haWwsIGdldElkRnJvbVVybCwgJCwgJCR9O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICcuL2NvbW1vbi5qcyc7XG5cbmNsYXNzIFRpY2tldFJlc2VydmF0aW9uIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5tYXRjaGVkQ2xhc3NOYW1lTGlzdCA9IFtcImljb19taW51czNcIixcImljb19wbHVzM1wiXTtcblx0XHR0aGlzLkRBVEEgPSB7XG5cdFx0XHRkaXNhYmxlZCA6ICdkaXNhYmxlZCdcblx0XHR9XG5cdH1cblxuXHRydW4oKSB7XG5cdFx0dGhpcy5zZXREYXRhKCk7XG5cdFx0dGhpcy5yZWdDb3VudEJ0bigpO1xuXHR9XG5cblx0c2V0RGF0YSgpIHtcblx0XHRjb25zdCBpZCA9IF8uZ2V0SWRGcm9tVXJsKCk7XG5cblx0XHRjb25zdCB0aXRsZUltZyA9IF8uJCgnLnZpc3VhbF9pbWcgaW1nJyk7XG5cdFx0Y29uc3QgdGl0bGVzID0gW18uJChcIi50b3BfdGl0bGUgLnRpdGxlXCIpLCBfLiQoXCIucHJldmlld190eHRfdGl0XCIpXTtcblx0XHRjb25zdCBwbGFjZSA9IF8uJCgnLmRzYycpO1xuXG5cdFx0dGl0bGVJbWcuc3JjID0gYGh0dHA6Ly8yMTEuMjQ5LjYyLjEyMy9wcm9kdWN0SW1hZ2VzLyR7aWR9YDtcblxuXHRcdF8uZ2V0RGF0YShgaHR0cDovLzIxMS4yNDkuNjIuMTIzL2FwaS9wcm9kdWN0cy8ke2lkfWAsICh7IHByb2R1Y3QgfSkgPT4ge1xuXHRcdFx0dGl0bGVzLmZvckVhY2goIChlbGUpID0+IGVsZS5pbm5lckhUTUwgPSBwcm9kdWN0LmRlc2NyaXB0aW9uKTtcblx0XHRcdHBsYWNlLmlubmVySFRNTCA9IHBsYWNlLmlubmVySFRNTC5yZXBsYWNlKC8oW146XStcXHMqOlxccyopW148XSsvLCBcIiQxXCIgKyAgcHJvZHVjdC5wbGFjZU5hbWUpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVnQ291bnRCdG4oKSB7XG5cdFx0Y29uc3QgZWxUaWNrZXRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aWNrZXRfYm9keVwiKTtcblx0XHRjb25zdCBlbEFncmVlbWVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbl9ib29raW5nX2FncmVlbWVudFwiKTtcblx0XHRjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xuXHRcdGNvbnN0IHRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVsXCIpO1xuXHRcdGNvbnN0IGFncmVlQ2hrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGszXCIpO1xuXG5cdFx0ZWxUaWNrZXRCb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cdFx0XHRpZighdGhpcy5faXNDb3VudEJ0bih0YXJnZXQpKSByZXR1cm47XG5cdFx0XHRjb25zdCBidG5UeXBlID0gKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYXRjaGVkQ2xhc3NOYW1lTGlzdFswXSkpID8gXCItXCIgOiBcIitcIjtcblx0XHRcdHRoaXMuX3Jlc2V0Q291bnRWYWx1ZShidG5UeXBlLCB0YXJnZXQpO1xuXHRcdFx0dGhpcy5jb25maXJtSW5wdXRDb21wbGV0aW9uKCk7XG5cdFx0fSk7XG5cblx0XHRlbEFncmVlbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuXHRcdFx0Y29uc3QgYnRuX2FncmVlbWVudCA9IHRhcmdldC5jbG9zZXN0KFwiLmJ0bl9hZ3JlZW1lbnRcIik7XG5cdFx0XHRpZighYnRuX2FncmVlbWVudCkgcmV0dXJuO1xuXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGNvbnN0IGVsVGV4dCA9IGJ0bl9hZ3JlZW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fdGV4dFwiKTtcblx0XHRcdGNvbnN0IGVsVXBEb3duID0gYnRuX2FncmVlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZuXCIpO1xuXHRcdFx0Y29uc3QgZWxBZ3JlZW1lbnQgPSB0YXJnZXQuY2xvc2VzdChcIi5hZ3JlZW1lbnRcIik7XG5cblx0XHRcdGVsQWdyZWVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXHRcdFx0ZWxVcERvd24uY2xhc3NMaXN0LnRvZ2dsZShcImZuLWRvd24yXCIpO1xuXHRcdFx0ZWxVcERvd24uY2xhc3NMaXN0LnRvZ2dsZShcImZuLXVwMlwiKTtcblxuXHRcdFx0aWYoZWxBZ3JlZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkgZWxUZXh0LmlubmVyVGV4dCA9IFwi7KCR6riwXCI7XG5cdFx0XHRlbHNlIGVsVGV4dC5pbm5lclRleHQgPSBcIuuztOq4sFwiO1xuXG5cdFx0fSk7XG5cblx0XHRuYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+ICB7IHRoaXMuY29uZmlybUlucHV0Q29tcGxldGlvbigpfSk7XG5cdFx0dGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+ICB7IFxuXHRcdFx0aWYoISgvXlxcZFtcXGQtXXs4LH1cXGQkLykudGVzdChlLnRhcmdldC52YWx1ZSkpIHsgXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2FybmluZ19tc2dcIikuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53YXJuaW5nX21zZ1wiKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cdFx0XHRcdH0sIDEyMDApO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jb25maXJtSW5wdXRDb21wbGV0aW9uKCk7XG5cdFx0fSk7XG5cdFx0YWdyZWVDaGsuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4gdGhpcy5jb25maXJtSW5wdXRDb21wbGV0aW9uKCkpO1xuXHR9XG5cblx0X2lzQ291bnRCdG4odGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHRoaXMubWF0Y2hlZENsYXNzTmFtZUxpc3Quc29tZSggKGNsYXNzTmFtZSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcblx0XHR9KTtcblx0fVxuXG5cdF9yZXNldENvdW50VmFsdWUoYnRuVHlwZSwgdGFyZ2V0KSB7XG5cdFx0Y29uc3QgZWxDb3VudFZhbHVlID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudF9jb250cm9sX2lucHV0XCIpO1xuXHRcdGxldCBjb3VudFZhbHVlID0gK2VsQ291bnRWYWx1ZS52YWx1ZTtcblx0XHRpZihidG5UeXBlID09PSBcIitcIikgeyBcblx0XHRcdGNvdW50VmFsdWUrKztcblx0XHR9IGVsc2UgeyBcblx0XHRcdGlmKGNvdW50VmFsdWUgPT09IDApICB7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3MoZWxDb3VudFZhbHVlLCB0aGlzLkRBVEEuZGlzYWJsZWQpO1xuXHRcdFx0XHRyZXR1cm4gY291bnRWYWx1ZTs7XG5cdFx0XHR9XG5cdFx0XHRjb3VudFZhbHVlLS07XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRDb3VudFZhbHVlKGVsQ291bnRWYWx1ZSwgY291bnRWYWx1ZSlcblx0XHRcdCAgLnJlbW92ZUNsYXNzKGVsQ291bnRWYWx1ZSwgdGhpcy5EQVRBLmRpc2FibGVkKVxuXHRcdFx0ICAudXBkYXRlUGFydGlhbFByaWNlKHRhcmdldCwgY291bnRWYWx1ZSlcblx0XHRcdCAgLnVwZGF0ZVRvdGFsQ291bnQoKTtcblx0fVxuXG5cdHNldENvdW50VmFsdWUoZWxDb3VudFZhbHVlLCBjb3VudFZhbHVlKSB7XG5cdFx0ZWxDb3VudFZhbHVlLnZhbHVlID0gY291bnRWYWx1ZTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGFkZENsYXNzKGVsQ291bnRWYWx1ZSwgbmV4dENsYXNzKSB7XG5cdFx0Y29uc3QgZWxNaW51cyA9ZWxDb3VudFZhbHVlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7IFxuXHRcdFtlbENvdW50VmFsdWUsIGVsTWludXNdLmZvckVhY2goIGVsID0+IHtcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQobmV4dENsYXNzKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJlbW92ZUNsYXNzKGVsQ291bnRWYWx1ZSwgbmV4dENsYXNzKSB7XG5cdFx0Y29uc3QgZWxNaW51cyA9ZWxDb3VudFZhbHVlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7IFxuXHRcdFtlbENvdW50VmFsdWUsIGVsTWludXNdLmZvckVhY2goIGVsID0+IHtcblx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUobmV4dENsYXNzKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHVwZGF0ZVBhcnRpYWxQcmljZSh0YXJnZXQsIGNvdW50VmFsdWUpIHtcblx0XHQvL2NvbnN0IGVsUHJpY2UgPSB0YXJnZXQuXG5cdFx0Y29uc3QgZWxQcmljZSA9IHRhcmdldC5jbG9zZXN0KFwiLmNvdW50X2NvbnRyb2xcIikucXVlcnlTZWxlY3RvcihcIi50b3RhbF9wcmljZVwiKTtcblx0XHRjb25zdCBwcmljZSA9ICsodGFyZ2V0LmNsb3Nlc3QoXCIucXR5XCIpLnF1ZXJ5U2VsZWN0b3IoXCIucHJpY2VcIikuaW5uZXJUZXh0LnJlcGxhY2UoL1xcLC8sXCJcIikpO1xuXHRcdGNvbnN0IHRvdGFsUHJpY2UgPSBwcmljZSAqIGNvdW50VmFsdWU7XG5cdFx0Y29uc3QgcHJpY2VHdWJ1biA9ICh0b3RhbFByaWNlK1wiXCIpLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKD8hXFxkKSkvZywgXCIkMSxcIik7XG5cdFx0ZWxQcmljZS5pbm5lclRleHQgPSBwcmljZUd1YnVuO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dXBkYXRlVG90YWxDb3VudCgpIHtcblx0XHRjb25zdCBlbFRDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3RhbENvdW50XCIpO1xuXHRcdGNvbnN0IGNvdW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY291bnRfY29udHJvbF9pbnB1dFwiKTtcblx0XHRjb25zdCB0b3RhbENvdW50ID0gW10ucmVkdWNlLmNhbGwoY291bnRMaXN0LCAocHJldiwgbmV4dCkgPT4ge1xuXHRcdFx0cmV0dXJuIHByZXYrICsobmV4dC52YWx1ZSk7XG5cdFx0fSwgMCk7XG5cdFx0ZWxUQy5pbm5lclRleHQgPSB0b3RhbENvdW50O1xuXHR9XG5cblx0Y29uZmlybUlucHV0Q29tcGxldGlvbigpIHtcblx0XHRjb25zdCBia19idG5fd3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmtfYnRuX3dyYXBcIik7XG5cdFx0bGV0IGJvayA9IHRydWU7XG5cblx0XHRjb25zdCBjb3VudCA9ICsoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3RhbENvdW50XCIpLmlubmVyVGV4dCk7XG5cdFx0aWYoY291bnQgPCAxKSBib2sgPSBmYWxzZTtcblxuXHRcdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7XG5cdFx0aWYobmFtZS52YWx1ZS5sZW5ndGggPCAxKSBib2sgPSBmYWxzZTtcblxuXHRcdGNvbnN0IHRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVsXCIpO1xuXHRcdGlmKHRlbC52YWx1ZS5sZW5ndGggPCAxKSBib2sgPSBmYWxzZTtcblxuXHRcdGNvbnN0IGJBZ3JlZUNoayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hrM1wiKS5jaGVja2VkO1xuXHRcdGlmKCFiQWdyZWVDaGspIGJvayA9IGZhbHNlO1xuXG5cdFx0aWYoYm9rKSBia19idG5fd3JhcC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZVwiKTtcblx0XHRlbHNlIGJrX2J0bl93cmFwLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xuXG5cdH1cblxufSAvL2VuZCBvZiBjbGFzc1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBldnQgPT4ge1xuXHRjb25zdCB0ciA9IG5ldyBUaWNrZXRSZXNlcnZhdGlvbigpO1xuXHR0ci5ydW4oKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Jlc2VydmUuanMiXSwic291cmNlUm9vdCI6IiJ9