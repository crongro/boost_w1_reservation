import * as Swipe from './swipe_merge_es5_vanilla.js';


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

function initTabModule() {
    const itemKinds = _getItemKinds();
    const elTabMenu = document.querySelector(".event_tab_lst");
    const elMoreBtn = document.querySelector(".btn");
    let tabMenuObj = null;

    //tab 컴포넌트 동작
    function initTabComponent() {
        return import(/* webpackChunkName: "swipeObj" */ '../../../src/main_Tabmenu.js').then(tabObj => {
            return tabObj.default;
        })
    }

    //TabMenu regist event 
    elTabMenu.addEventListener("click", ({target}) => {
        if(target.nodeName === "UL") return;
        const listItem = target.closest(".item");
        const listIdx = listItem.dataset.category;
        const a = listItem.querySelector(".anchor");

        elTabMenu.querySelector(".active").classList.remove("active");
        a.classList.add("active");

        initTabComponent().then((tabClass) => {
            tabMenuObj = tabMenuObj || new tabClass(elTabMenu, itemKinds);
            tabMenuObj.run(Number(listIdx), false);
            //more button 보여줄지 결정
            tabMenuObj.decideBtnVisible();
        });

    });

    //MoreBtn regist event
    elMoreBtn.addEventListener("click", (evt) => {
        const currentIndex = document.querySelector(".event_tab_lst .active").parentElement.dataset.category;

        initTabComponent().then((tabClass) => {
            tabMenuObj = tabMenuObj || new tabClass(elTabMenu, itemKinds);
            tabMenuObj.run(Number(currentIndex), true);
        });
    },false);

    function _getItemKinds() {
        const testList = document.querySelectorAll(".event_tab_lst li a span");
        const itemKinds = Array.from(testList).map((v)=> {
            return v.innerText;
        });
        return itemKinds;
    }
}

document.addEventListener("DOMContentLoaded", evt => {
    initSwipeModule();
    initTabModule();
});