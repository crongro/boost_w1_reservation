import * as Swipe from './lib/swipe_merge_es5.js';
import * as _ from './common.js';
import 'whatwg-fetch';


function initSwipeModule() {
	const elSwapWrap = _.$(".visual_img");
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
			const elNum = _.$(".figure_pagination .num:nth-child(1)");
			elNum.innerText = n+1;
		},
		'FN_COMPONENT_DID_LOAD' : function(){}
	});

	oMyswipe.onPlugins([
	{
		'name'      : 'SwipeStepMoverPlugin',
		'option'    : {
			'prevButton' : _.$(".btn_prev"),
			'nextButton' : _.$(".btn_nxt"),
			'nDuration': 100
		},
		'userMethod' : {},
		'obj' : Swipe.SwipeStepMoverPlugin
	}]);

}

/* layer open - close */

function toggleDetailInfo() {
	const elMores = _.$$(".bk_more");
	const elStore_details = _.$(".store_details");

	Array.prototype.forEach.call(elMores, function(element, index) {
		element.addEventListener("click", ({currentTarget}) => {

			if( currentTarget.classList.contains("_open")) currentTarget.nextElementSibling.style.display = "block";
			else currentTarget.previousElementSibling.style.display = "block";

			elStore_details.classList.toggle("close3");
			currentTarget.style.display = "none";

		},false)
	});
}


function regReserveLink(id) {
	const el = _.$(".bk_btn");
	el.addEventListener("click", (evt) => {
		location.href = `./reserve.html?id=${id}`;
	}, false);
}


function initTabToggle() {
	const ul = _.$(".info_tab_lst");
	const detail_area_wrap = _.$(".detail_area_wrap");
	const detail_location = _.$(".detail_location");

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

function checkLoginFromStorage() {
	const email = _.getEmail();
	const elViewReservation  = _.$(".viewReservation");
	if(email !== null) elViewReservation.innerText = email;
}



function setInitialContents() {
	const id = _.getIdFromUrl();

	//Title image
	const imgs = _.$$(".visual_img li > img");
	const titleTexts = _.$$(".visual_txt_tit");
	const description = _.$(".dsc");
	const detailDsc = _.$(".detail_info_lst .in_dsc");
	const map = _.$(".store_map");
	const storeName = _.$(".store_name");
	const storeInfo = _.$(".store_info");

	imgs.forEach( (img) => img.src = `http://211.249.62.123/productImages/${id}?type=ma` );
	map.src = `http://211.249.62.123/displayInfoImages/${id}`;

	_.getData(`http://211.249.62.123/api/products/${id}`, ({product}) => {
		titleTexts.forEach( (ele) => ele.innerText = product.description);
		description.innerHTML =  product.content;
		detailDsc.innerText = product.content;
		storeName.innerText = product.description;

		//store info
		storeInfo.innerHTML = `
		<div class="store_addr_wrap">
			<span class="fn fn-pin2"></span>
			<p class="store_addr store_addr_bold">${product.placeLot}</p>
			<p class="store_addr">
				<span class="addr_old">지번</span>
				<span class="addr_old_detail">${product.placeStreet}</span>
			</p>
			<p class="store_addr addr_detail">${product.placeName}</p>
		</div>
		<div class="lst_store_info_wrap">
			<ul class="lst_store_info">
				<li class="item"> <span class="item_lt"> <i class="fn fn-call2"></i> 
					<span class="sr_only">전화번호</span> </span> <span class="item_rt"> 
					<a href="tel:${product.tel}" class="store_tel">${product.tel}</a></span> 
				</li>
			</ul>
		</div>`
	});
}

document.addEventListener("DOMContentLoaded", evt => {
	initSwipeModule();
	toggleDetailInfo();
	regReserveLink(_.getIdFromUrl());
	initTabToggle();
	checkLoginFromStorage();
	setInitialContents();
});


