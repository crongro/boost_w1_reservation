import * as Swipe from './lib/swipe_merge_es5.js';
import 'whatwg-fetch';


function initSwipeModule() {
	const elSwapWrap = document.querySelector(".visual_img");
	const oMyswipe = new Swipe.SweetSwipe( elSwapWrap, {
		'bCircular' : true,
    'nDuration' : 300,  //default 100
    'nBackWidth' : 60,  //default 60
    'nSideWidth' : 20,  //default 0
    'nDecisionSlope' : 0.8, //default 0.8
    'nForcedSwipeTime' : 100, //default 0
    'bSettingScreenHeight': false,
    'bMouseEventSupport' : true
  });

	oMyswipe.registerUserMethod({
		'FN_BEFORE_SWIPE': function(n){},
		'FN_AFTER_SWIPE': function(n) {
			const elNum = document.querySelector(".figure_pagination .num:nth-child(1)");
			elNum.innerText = n+1;
		},
		'FN_COMPONENT_DID_LOAD' : function(){}
	});

	oMyswipe.onPlugins([
	{
		'name'      : 'SwipeStepMoverPlugin',
		'option'    : {
			'prevButton' : document.querySelector(".btn_prev"),
			'nextButton' : document.querySelector(".btn_nxt"),
			'nDuration': 100
		},
		'userMethod' : {},
		'obj' : Swipe.SwipeStepMoverPlugin
	}]);

}

/* layer open - close */

function toggleDetailInfo() {
	const elMores = document.querySelectorAll(".bk_more");
	const elStore_details = document.querySelector(".store_details");

	Array.prototype.forEach.call(elMores, function(element, index) {
		element.addEventListener("click", ({currentTarget}) => {

			if( currentTarget.classList.contains("_open")) currentTarget.nextElementSibling.style.display = "block";
			else currentTarget.previousElementSibling.style.display = "block";

			elStore_details.classList.toggle("close3");
			currentTarget.style.display = "none";

		},false)
	});
}


function regReserveLink() {
	const el = document.querySelector(".bk_btn");
	el.addEventListener("click", (evt) => {
		location.href = "./reserve.html";
	}, false);
}


function initTabToggle() {
	const ul = document.querySelector(".info_tab_lst");
	const detail_area_wrap = document.querySelector(".detail_area_wrap");
	const detail_location = document.querySelector(".detail_location");

	ul.addEventListener("click", (evt) => {
		evt.preventDefault();
		const li = evt.target.closest('li');

		if(li.classList.contains("_path")) {
			detail_area_wrap.classList.add("hide");
			detail_location.classList.remove("hide");
			li.previousElementSibling.firstElementChild.classList.remove("active");
		} else {
			detail_area_wrap.classList.remove("hide");
			detail_location.classList.add("hide");
			li.nextElementSibling.firstElementChild.classList.remove("active");
		}

		li.firstElementChild.classList.add("active");
	})
}

document.addEventListener("DOMContentLoaded", evt => {
	initSwipeModule();
	toggleDetailInfo();
	regReserveLink();
	initTabToggle();
});


