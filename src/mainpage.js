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
    'bSettingScreenHeight': true,
    'bMouseEventSupport' : true
  });

	oMyswipe.registerUserMethod({
		'FN_BEFORE_SWIPE': function(n){},
		'FN_AFTER_SWIPE': function(n){},
		'FN_COMPONENT_DID_LOAD' : function(){}
	});

	oMyswipe.onPlugins([
	{
		'name'      : 'SwipeStepMoverPlugin',
		'option'    : {
			'prevButton' : document.querySelector(".btn_pre_e"),
			'nextButton' : document.querySelector(".btn_nxt_e"),
			'nDuration': 200
		},
		'userMethod' : {},
		'obj' : Swipe.SwipeStepMoverPlugin
	}]);

	!(function movePanel() {
		setTimeout(function(){
			oMyswipe.runAutoAnimation("toRight");
			movePanel();
		}, 2000);
	})();
}

class TabMenu {
	constructor(el, itemKinds) {
		this.init(el);
		this.itemKinds = itemKinds;
		this.htmlObj = {};
	}

	init(el) {
		el.addEventListener("click", ({target}) => {
			if(target.nodeName === "UL") return;
			const listItem = target.closest(".item");
			const listIdx = listItem.dataset.category;
			this.insertItemList(Number(listIdx));
		});
	}

	insertItem(itemData, currentIndex) {
		const tpl = document.querySelector("#itemList").innerHTML;
		const htmls = this.getHTMLStr(itemData, tpl, currentIndex);
		this.insertHTML(htmls, currentIndex);
		this.htmlObj[currentIndex] = htmls; //cache
	}

	getHTMLStr(itemData, tpl, currentIndex) {
		const htmls = itemData.map(({name, saveFileName, placeName, description}) => {
			name = name.replace(/.*(\d{2})/, this.itemKinds[currentIndex-1] + "$1");
			return eval('`' + tpl + '`');
		});
		return htmls;
	}

	insertHTML(htmls, currentIndex) {
		const elULs = document.querySelectorAll(".lst_event_box");
		elULs[0].innerHTML = htmls[currentIndex] + htmls[currentIndex+1];
		elULs[1].innerHTML = htmls[currentIndex+2] + htmls[currentIndex+3];
	}

	insertItemList(currentIndex) {
		if(this.htmlObj[currentIndex] === undefined) this.getData(currentIndex, this.insertItem);
		else this.insertHTML(this.htmlObj[currentIndex], currentIndex);
	}

	getData(currentIndex, fnCallback) {
		fetch('/resources/mock/main_products.json')
		.then((response) => {
			return response.json()
		}).then((json) => {
			fnCallback.call(this, json, currentIndex);
		}).catch( (ex) => {
			console.log('parsing failed', ex)
		})
	}
}

function getItemKinds() {
	const testList = document.querySelectorAll(".event_tab_lst li a span");
	const itemKinds = Array.from(testList).map((v)=> {
  	return v.innerText;
	});
	return itemKinds;
}


function init() {
	initSwipeModule();
	const itemKinds = getItemKinds();
	const elTabMenu = document.querySelector(".event_tab_lst");
	(new TabMenu(elTabMenu, itemKinds));
}

document.addEventListener("DOMContentLoaded", evt => {
	init();
});


