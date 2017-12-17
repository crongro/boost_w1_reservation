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


document.addEventListener("DOMContentLoaded", evt => {
	initSwipeModule();
});


