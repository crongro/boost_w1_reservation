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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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

exports.getEmail = getEmail;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

function _defaults(obj, defaults) {
  var keys = Object.getOwnPropertyNames(defaults);for (var i = 0; i < keys.length; i++) {
    var key = keys[i];var value = Object.getOwnPropertyDescriptor(defaults, key);if (value && value.configurable && obj[key] === undefined) {
      Object.defineProperty(obj, key, value);
    }
  }return obj;
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var _cu = {
  getFnName: function getFnName(fn) {
    if (typeof fn !== "function") return;
    var sName = fn.name ? fn.name : fn.toString().match(/function\s+([^(\(|\s)]+)/)[1];
    return sName;
  },
  setTranslate3dX: function setTranslate3dX(ele, nValue) {
    var sTF = this.getCSSName('transform');
    ele.style[sTF] = 'translate3d(' + nValue + 'px, 0, 0)';
  },
  setTranslate3dXPercent: function setTranslate3dXPercent(ele, nValue) {
    var sTF = this.getCSSName('transform');
    ele.style[sTF] = 'translate3d(' + nValue + '%, 0, 0)';
  },
  getWidth: function getWidth(ele) {
    var nWidth = 0;

    if (ele.getBoundingClientRect().width) {
      nWidth = ele.getBoundingClientRect().width;
    } else {
      nWidth = ele.offsetWidth;
    }
    return nWidth;
  },
  getCSSName: function getCSSName(sName) {
    if (typeof this.htCacheData === "undefined") this.htCacheData = {};

    if (this.htCacheData[sName]) return this.htCacheData[sName];

    var _htNameSet = {
      'transition': ['webkitTransition', 'transition'],
      'transform': ['webkitTransform', 'transform']
    };

    var aNameList = _htNameSet[sName];

    if (!this.isExist(aNameList)) return null;

    for (var i = 0, len = aNameList.length; i < len; i++) {
      if (typeof document.body.style[aNameList[i]] === 'string') {
        this.htCacheData[sName] = aNameList[i];
        return this.htCacheData[sName];
      }
    }
  },
  getChildOrder: function getChildOrder(elChild) {
    var elParent = elChild.parentNode;
    var nIndex = Array.prototype.indexOf.call(elParent.children, elChild);
    return nIndex;
  },
  getTranslate3dX: function getTranslate3dX(ele) {
    var sTF = this.getCSSName("transform");
    var sPreCss = ele.style[sTF];
    var nPreX = 0;

    if (sPreCss.indexOf("%") === -1) {
      nPreX = +sPreCss.replace(/translate3d\((-*\d+(?:\.\d+)*)(px)*\,.+\)/g, "$1");
    } else {
      nPreX = +sPreCss.replace(/translate3d\((-*\d+(?:\.\d+)*)(%)*\,.+\)/g, "$1");
      nPreX = nPreX / 100 * this.getWidth(ele.firstElementChild);
    }

    return nPreX;
  },
  getTranslate3dXPercent: function getTranslate3dXPercent(ele) {
    var sTF = this.getCSSName("transform");
    var sPreCss = ele.style[sTF];
    var nPreX = +sPreCss.replace(/translate3d\((-*\d+(?:\.\d+)*)(%)*\,.+\)/g, "$1");
    return nPreX;
  },
  getCSSTransitionEnd: function getCSSTransitionEnd() {
    var sTS = this.getCSSName('transition');
    var sTSE = sTS === "webkitTransition" ? "webkitTransitionEnd" : "transitionend";
    return sTSE;
  },
  setDynamicHeight: function setDynamicHeight(nNextNumber, target, bCircular) {
    if (bCircular) {
      nNextNumber++;
    }
    var elCurrent = target.children[nNextNumber];
    var nHeight = parseInt(getComputedStyle(elCurrent).height);
    target.style.height = nHeight + "px";
  },
  setCSS: function setCSS(el, style, value) {
    el.style[style] = value;
  },
  showLayer: function showLayer(el) {
    el.style.display = "block";
  },
  closeLayer: function closeLayer(el) {
    el.style.display = "none";
  },

  //check null or undefined
  isExist: function isExist(data) {
    return data != null;
  },
  isArray: function isArray(_a) {
    if (!Array.isArray) {
      return Object.prototype.toString.call(_a) === '[object Array]';
    }
    return Array.isArray(_a);
  },
  isFunction: function isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
  }
};
/*
* The MIT License (MIT)
* Copyright (c) 2016 SK PLANET. All Rights Reserved. *
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions: *
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software. *
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE. */

/*!
* \CommonComonent.js v0.2.1
* \core component source for Components UI .
* \copyright Copyright (c) 2016, SK PLANET. All Rights Reserved. 
* \license This project is released under the MIT License.
* \contributor Jisu Youn (jisu.youn@gmail.com)
* \warning dont'use this source in other library source.
*/

var CommonComponent = function () {
  function CommonComponent(elTarget, htOption) {
    _classCallCheck(this, CommonComponent);

    this.htOption = htOption;
    this.htCacheData = {};
    this.elTarget = elTarget;
    this.init(htOption);
  }

  CommonComponent.prototype.init = function init(htOption) {
    this.setInitValue();
    this.setOption(htOption, this._htDefaultOption, this.option);
    this.initValue();
    this.registerEvents();
  };

  CommonComponent.prototype.setInitValue = function setInitValue() {
    var DEFAULT_CORE_EVENT = ['FN_COMPONENT_DID_LOAD'];
    var _d = this.COMPONENT_CONFIG();
    this.bMainComponent = !!_d.PLUGINS;
    this._htDefaultOption = _d.DEFAULT_OPTION;
    this.aMyPluginName = _d.PLUGINS;
    this.htDefaultFn = this.getDefaultCallbackList(DEFAULT_CORE_EVENT.concat(_d.DEFAULT_COMPONENT_EVENT));

    if (this.bMainComponent) {
      this.htDefaultPluginFn = this.getDefaultCallbackList(DEFAULT_CORE_EVENT.concat(_d.DEFAULT_PLUGIN_EVENT));
    }
    this.htUserFn = {};
    this.htPluginFn = {};
    this.option = {};
  };

  //TODO. move to super Class.


  CommonComponent.prototype.registerUserMethod = function registerUserMethod(htFn) {
    this.setOption(htFn, this.htDefaultFn, this.htUserFn);
  };

  CommonComponent.prototype.registerPluginMethod = function registerPluginMethod(htFn) {
    this.appendPluginMethod(htFn, this.htDefaultPluginFn, this.htPluginFn);
  };

  CommonComponent.prototype.onPlugins = function onPlugins(aPluginList) {
    this.initPlugins(this.aMyPluginName, aPluginList, this.elTarget);
    this.componentDidLoaded();
  };

  CommonComponent.prototype.setOption = function setOption(htValue, htDefaultValue, htStorage) {
    var _this = this;

    Object.keys(htDefaultValue).forEach(function (v) {
      if (typeof htValue[v] === "undefined") {
        htStorage[v] = htDefaultValue[v];
      } else {
        if (Object.prototype.toString.call(htValue[v]) !== "[object Object]") {
          htStorage[v] = htValue[v];
          return;
        }
        htStorage[v] = {};
        _this.setOption.call(_this, htValue[v], htDefaultValue[v], htStorage[v]);
      }
    });
  };

  CommonComponent.prototype.appendPluginMethod = function appendPluginMethod(htValue, htDefaultValue, htStorage) {
    Object.keys(htDefaultValue).forEach(function (v) {
      if (!Array.isArray(htStorage[v])) htStorage[v] = [];
      if (typeof htValue[v] === "undefined") {
        htStorage[v].push(htDefaultValue[v]);
      } else {
        htStorage[v].push(htValue[v]);
        return;
      }
    });
  };

  CommonComponent.prototype.getDefaultCallbackList = function getDefaultCallbackList(aFn) {
    var htFn = {};
    aFn.forEach(function (v) {
      htFn[v] = function () {};
    });
    return htFn;
  };

  CommonComponent.prototype.initPlugins = function initPlugins(aMyPluginName, aPluginList, elTarget) {
    var _this2 = this;

    var oParent = this;
    aPluginList.forEach(function (v) {
      var sName = v.name;
      var obj = v.obj;
      if (aMyPluginName.indexOf(sName) < 0) return;
      //let oPlugin = new window[v.name](elTarget, v.option);
      var oPlugin = new obj(elTarget, v.option);
      oPlugin.registerUserMethod(v.userMethod);
      _this2._injectParentObject(oParent, oPlugin);
    });
  };

  CommonComponent.prototype.componentDidLoaded = function componentDidLoaded() {
    this.runCustomFn('USER', 'FN_COMPONENT_DID_LOAD');
    this.runCustomFn('PLUGIN', 'FN_COMPONENT_DID_LOAD');
  };

  CommonComponent.prototype.runCustomFn = function runCustomFn(type, eventname) {
    var args = [].slice.call(arguments, 2);
    var returnValue = void 0;

    switch (type) {
      case "USER":
        {
          if (_typeof(this.htUserFn) === "object" && typeof this.htUserFn[eventname] === "function") {
            var _htUserFn;

            returnValue = (_htUserFn = this.htUserFn)[eventname].apply(_htUserFn, _toConsumableArray(args));
          }
          break;
        }
      case "PLUGIN":
        {
          if (_typeof(this.htPluginFn) === "object" && _typeof(this.htPluginFn[eventname]) === "object") {
            this.htPluginFn[eventname].forEach(function (fn) {
              fn.apply(undefined, _toConsumableArray(args));
            });
          }
          break;
        }
      default:
        {}
    }
    return returnValue;
  };

  CommonComponent.prototype._injectParentObject = function _injectParentObject(oParent, oChild) {
    oChild.dockingPluginMethod(oParent);
  };

  return CommonComponent;
}();

/*
* The MIT License (MIT)
* Copyright (c) 2016 SK PLANET. All Rights Reserved. *
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions: *
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software. *
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE. */

/*!
* \SwipeNavigationPlugin.js v0.1
* \copyright Copyright (c) 2016, SK PLANET. All Rights Reserved. 
* \license This project is released under the MIT License.
* \contributor nigayoun (nigayoun@gmail.com)
* \warning dont'use this source in other library source.
*/

var SwipeNavigationPlugin = function (_CommonComponent) {
  _inherits(SwipeNavigationPlugin, _CommonComponent);

  SwipeNavigationPlugin.prototype.COMPONENT_CONFIG = function COMPONENT_CONFIG() {
    return {
      SELECTOR: {},
      DEFAULT_COMPONENT_EVENT: [],
      DEFAULT_OPTION: {
        'usage': false,
        'elNaviWrap': null, //own element(#iScrollArea)
        'seletedClassName': 'selected-swipe-li',
        'nDuration': 200,
        'bMouseEventSupport': false
      }
    };
  };

  function SwipeNavigationPlugin(elTarget, htOption) {
    _classCallCheck(this, SwipeNavigationPlugin);

    return _possibleConstructorReturn(this, _CommonComponent.call(this, elTarget, htOption));
  }

  SwipeNavigationPlugin.prototype.initValue = function initValue() {
    this.elPluginTarget;
    this.elNaviWrap = this.option.elNaviWrap;
    this.oParentInstance = null;
  };

  SwipeNavigationPlugin.prototype.registerEvents = function registerEvents() {
    this.moveSwipeArea();
  };

  SwipeNavigationPlugin.prototype.moveSwipeArea = function moveSwipeArea() {
    var lis = this.option.elNaviWrap.querySelectorAll("li");

    var that = this;
    for (var i = 0; i < lis.length; i++) {
      lis[i].addEventListener("touchend", function (ev) {
        that.moveparentSwipePanel(this);
      });
    }

    if (this.option.bMouseEventSupport) {
      for (var _i = 0; _i < lis.length; _i++) {
        lis[_i].addEventListener("click", function (ev) {
          that.moveparentSwipePanel(this);
        });
      }
    }
  };

  SwipeNavigationPlugin.prototype.moveparentSwipePanel = function moveparentSwipePanel(elTarget) {
    var nWidth = this.oParentInstance.nSwipeWidth;
    var nChildOrder = _cu.getChildOrder(elTarget);

    var nDiff = this.oParentInstance.getCurrentViewNumber() - nChildOrder;
    var nMoveValue = nDiff * nWidth;

    var nNextNumber = nChildOrder;

    //for no animation, nDuration set zero.
    this.oParentInstance.runSwipeAction(this.option.nDuration, nNextNumber);

    this.highlightSelectedLI(nChildOrder);
  };

  SwipeNavigationPlugin.prototype.highlightSelectedLI = function highlightSelectedLI(nSelectedCount) {
    nSelectedCount++;
    //remove legacy class
    var _li = this.option.elNaviWrap.querySelector("." + this.option.seletedClassName);
    var _curClassName = _li.className;
    _li.className = _li.className.replace(_curClassName, "");

    //add new class
    this.option.elNaviWrap.querySelector("li:nth-child(" + nSelectedCount + ")").className += " " + this.option.seletedClassName;
  };

  SwipeNavigationPlugin.prototype.dockingPluginMethod = function dockingPluginMethod(oParent) {
    oParent.registerPluginMethod({
      'FN_BEFORE_SWIPE': this.highlightSelectedLI.bind(this),
      'FN_AFTER_SWIPE': function FN_AFTER_SWIPE() {}
    });
    this.oParentInstance = oParent;
  };

  return SwipeNavigationPlugin;
}(CommonComponent);

/*
* The MIT License (MIT)
* Copyright (c) 2016 SK PLANET. All Rights Reserved. *
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions: *
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software. *
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE. */

/*!
* \SwipeStepMoverPlugin.js v0.1
* \copyright Copyright (c) 2016, SK PLANET. All Rights Reserved. 
* \license This project is released under the MIT License.
* \contributor nigayoun (nigayoun@gmail.com)
* \warning dont'use this source in other library source.
*/

var SwipeStepMoverPlugin = function (_CommonComponent2) {
  _inherits(SwipeStepMoverPlugin, _CommonComponent2);

  SwipeStepMoverPlugin.prototype.COMPONENT_CONFIG = function COMPONENT_CONFIG() {
    return {
      SELECTOR: {},
      DEFAULT_COMPONENT_EVENT: [],
      DEFAULT_OPTION: {
        'prevButton': null,
        'nextButton': null,
        'nDuration': 200
      }
    };
  };

  function SwipeStepMoverPlugin(elTarget, htOption) {
    _classCallCheck(this, SwipeStepMoverPlugin);

    return _possibleConstructorReturn(this, _CommonComponent2.call(this, elTarget, htOption));
  }

  SwipeStepMoverPlugin.prototype.initValue = function initValue() {
    this.elPluginTarget;
    this.elPrevBtn = this.option.prevButton;
    this.elNextBtn = this.option.nextButton;
    this.oParentInstance = null;
  };

  SwipeStepMoverPlugin.prototype.registerEvents = function registerEvents() {
    var _this3 = this;

    this.elPrevBtn.addEventListener("click", function (evt) {
      _this3.handlerClickButton(evt, "toLeft");
    });
    this.elNextBtn.addEventListener("click", function (evt) {
      _this3.handlerClickButton(evt, "toRight");
    });
  };

  SwipeStepMoverPlugin.prototype.handlerClickButton = function handlerClickButton(evt, sDirection) {
    if (this.oParentInstance.bAnimationing) return;
    var nCur = this.oParentInstance.getCurrentViewNumber();
    var bCircular = this.oParentInstance.option.bCircular;

    if (!bCircular) {
      if (nCur === 0 && sDirection === "toLeft") return;
      if (nCur === this.oParentInstance.nSwipeElementCount - 1 && sDirection === "toRight") return;
    }

    var nWidth = this.oParentInstance.nSwipeWidth;

    if (sDirection === "toRight") {
      nWidth *= -1;
      nCur++;
    } else {
      nCur--;
    }

    if (bCircular) nCur = this.oParentInstance.reAdjustNextNumberForCircular(nCur);

    //for no animation, nDuration set zero.
    this.oParentInstance.runSwipeAction(this.option.nDuration, nCur, nWidth);
  };

  SwipeStepMoverPlugin.prototype.setDisplayOfButton = function setDisplayOfButton(nCurrentPanel) {
    var nMaxPanel = this.oParentInstance.nSwipeElementCount - 1;
    if (nCurrentPanel === nMaxPanel) {
      this.elPrevBtn.style.display = "block";
      this.elNextBtn.style.display = "none";
    } else if (nCurrentPanel === 0) {
      this.elPrevBtn.style.display = "none";
      this.elNextBtn.style.display = "block";
    } else {
      this.elPrevBtn.style.display = "block";
      this.elNextBtn.style.display = "block";
    }
  };

  SwipeStepMoverPlugin.prototype.dockingPluginMethod = function dockingPluginMethod(oParent) {
    if (!oParent.option.bCircular) {
      oParent.registerPluginMethod({
        'FN_COMPONENT_DID_LOAD': this.setDisplayOfButton.bind(this, 0),
        'FN_AFTER_SWIPE': this.setDisplayOfButton.bind(this)
      });
    }
    this.oParentInstance = oParent;
  };

  return SwipeStepMoverPlugin;
}(CommonComponent);

/*
* The MIT License (MIT)
* Copyright (c) 2016 SK PLANET. All Rights Reserved. *
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions: *
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software. *
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE. */

/*!
* \swipe_es6.js v0.1
* \copyright Copyright (c) 2016, SK PLANET. All Rights Reserved. 
* \license This project is released under the MIT License.
* \contributor nigayoun (nigayoun@gmail.com)
* \warning dont'use this source in other library source.
*/

var SweetSwipe = function (_CommonComponent3) {
  _inherits(SweetSwipe, _CommonComponent3);

  SweetSwipe.prototype.COMPONENT_CONFIG = function COMPONENT_CONFIG() {
    return {
      PLUGINS: ['SwipeNavigationPlugin', 'SwipeStepMoverPlugin'],
      SELECTOR: {
        //inputFieldWrap: '.input-wrap', 
      },
      DEFAULT_COMPONENT_EVENT: ['FN_BEFORE_SWIPE', 'FN_AFTER_SWIPE'],
      DEFAULT_PLUGIN_EVENT: ['FN_BEFORE_SWIPE', 'FN_AFTER_SWIPE'],
      DEFAULT_OPTION: {
        'bCircular': false,
        'nDuration': 100,
        'nBackWidth': 60,
        'nSideWidth': 0,
        'nDecisionSlope': 0.8,
        'nForcedSwipeTime': 0,
        'bSettingScreenHeight': false,
        'bMouseEventSupport': false,
        'bTouchEventSupport': true
      }
    };
  };

  function SweetSwipe(elTarget, htOption) {
    _classCallCheck(this, SweetSwipe);

    return _possibleConstructorReturn(this, _CommonComponent3.call(this, elTarget, htOption));
  }

  SweetSwipe.prototype.initValue = function initValue(htOption) {
    //set height of viewArea
    //this.setDynamicHeight(1);
    //if(this.option.bSettingScreenHeight) this.elTarget.style.height = window.innerHeight + "px";
    if (this.option.bSettingScreenHeight) _cu.setDynamicHeight(0, this.elTarget, this.option.bCircular);

    //swipe container width
    this.nSwipeWidth = _cu.getWidth(this.elTarget.firstElementChild); //case. position : static(float)

    //swipe element count 
    this.nSwipeElementCount = this.elTarget.childElementCount;

    var bCircular = this.option.bCircular;
    this.nMaxSwipeRange = bCircular ? this.nSwipeWidth : 0;
    this.nMinSwipeRange = bCircular ? this.nSwipeElementCount - 2 : this.nSwipeElementCount - 1;
    this.nMinSwipeRange *= -this.nSwipeWidth;

    this.nMaxValue = this.nMaxSwipeRange + this.option.nSideWidth;
    this.nMinValue = this.nMinSwipeRange - this.option.nSideWidth;

    this.bAnimationing = false;
    this.nNextNumber = 0;

    //TODO. 옵션으로 받아서 필요한 경우만 resize 이벤트 모니터링하도록 기능추가.
    this.recalculateWidth();
  };

  SweetSwipe.prototype.registerEvents = function registerEvents() {
    var _this4 = this;

    if (this.option.bTouchEventSupport) {
      this.elTarget.addEventListener("touchstart", function (evt) {
        _this4.handlerTouchStart(evt);
      });
      this.elTarget.addEventListener("touchmove", function (evt) {
        _this4.handlerTouchMove(evt);
      });
      this.elTarget.addEventListener("touchend", function (evt) {
        _this4.handlerTouchEnd(evt);
      });
    }

    if (this.option.bMouseEventSupport) {
      this.elTarget.addEventListener("mousedown", function (evt) {
        _this4.handlerTouchStart(evt);
      });
      this.elTarget.addEventListener("mousemove", function (evt) {
        _this4.handlerTouchMove(evt);
      });
      this.elTarget.addEventListener("mouseup", function (evt) {
        _this4.handlerTouchEnd(evt);
      });
    }

    this.registerTransitionEnd();
  };

  /* Event Hanlder */

  SweetSwipe.prototype.handlerTouchStart = function handlerTouchStart(evt) {
    evt.stopPropagation();
    if (this.bAnimationing) return;

    this.bSwipe = true;
    this.bFirstTouchMove = true;
    var bMouseEvent = evt.type.substr(0, 5) === "mouse";

    var pageX = void 0,
        pageY = void 0;

    if (bMouseEvent) {
      pageX = evt.pageX;
      pageY = evt.pageY;
    } else {
      pageX = evt.changedTouches[0].pageX;
      pageY = evt.changedTouches[0].pageY;
    }

    this.nStartPosX = Math.floor(pageX);
    this.nStartPosY = Math.floor(pageY);

    this.nStartTranslateX = _cu.getTranslate3dX(this.elTarget);
    //this.nStartTranslateX = _cu.getTranslate3dXPercent(this.elTarget) / 100 * _cu.getWidth(this.elTarget.firstElementChild);

    this.nTouchStartTime = Date.now();
  };

  SweetSwipe.prototype.handlerTouchMove = function handlerTouchMove(evt) {
    evt.stopPropagation();
    if (this.bAnimationing) return;
    if (!this.bSwipe) return;

    var bMouseEvent = evt.type.substr(0, 5) === "mouse";

    var htCurrentEvt = bMouseEvent ? evt : evt.changedTouches[0];

    this.nMovePosX = Math.floor(htCurrentEvt.pageX);
    this.nMovePosY = Math.floor(htCurrentEvt.pageY);

    //detect angle 
    if (this.bFirstTouchMove) {
      var nAngleDiff = Math.abs(this.nMovePosY - this.nStartPosY) / Math.abs(this.nMovePosX - this.nStartPosX);
      this.bSwipe = !!(nAngleDiff <= this.option.nDecisionSlope);
      if (this.bSwipe === false) return;
      this.nPreMoveX = this.nStartPosX;
    }

    evt.preventDefault();

    var nMoveDiff = this.nMovePosX - this.nPreMoveX;
    var nPreviousX = 0;

    nPreviousX = _cu.getTranslate3dX(this.elTarget);

    this.dragArea(nPreviousX, nMoveDiff);

    this.nPreMoveX = this.nMovePosX;
    this.nPreMoveY = this.nMovePosX;

    this.bFirstTouchMove = false;
  };

  SweetSwipe.prototype.handlerTouchEnd = function handlerTouchEnd(evt) {
    evt.stopPropagation();
    if (this.bAnimationing) return;

    if (!this.bSwipe) {
      this.bOutRangeRight = false;
      this.bOutRangeLeft = false;
      return;
    }

    var nWidthForAnimation = 0;
    var nTouchEndTime = Date.now();
    var nDiffTouchTime = nTouchEndTime - this.nTouchStartTime;

    var nLastTranslateX = _cu.getTranslate3dX(this.elTarget);
    var nDiffTranslateX = nLastTranslateX - this.nStartTranslateX;

    if (nDiffTranslateX === 0) return;

    var bSwipeWidth = false;
    var bSwipeTime = false;
    var bSwipeGo = false;
    var sDirection = "";

    bSwipeWidth = Math.abs(nDiffTranslateX) > this.option.nBackWidth;
    if (nDiffTouchTime < this.option.nForcedSwipeTime) bSwipeTime = true;
    //decide direction.
    if (this.bOutRangeLeft || this.bOutRangeRight || !(bSwipeWidth || bSwipeTime)) {
      sDirection = nDiffTranslateX > 0 ? "left" : "right";
      nWidthForAnimation = Math.abs(nDiffTranslateX);
    } else {
      bSwipeGo = true;
      sDirection = nDiffTranslateX > 0 ? "right" : "left";
      nWidthForAnimation = this.nSwipeWidth - Math.abs(nDiffTranslateX);
    }

    this.nNextNumber = this._getNextViewNumber(this.nStartTranslateX, sDirection, bSwipeGo);
    this.nNextNumber = Math.round(this.nNextNumber);

    if (this.option.bCircular) {
      this.nNextNumber = this.reAdjustNextNumberForCircular(this.nNextNumber);
    }

    if (sDirection === 'left') nWidthForAnimation = -nWidthForAnimation;

    this.runSwipeAction(this.option.nDuration, this.nNextNumber, nWidthForAnimation);

    //TODO. make reset method 
    this.bOutRangeRight = false;
    this.bOutRangeLeft = false;
    this.bSwipe = false;
  };

  SweetSwipe.prototype.reAdjustNextNumberForCircular = function reAdjustNextNumberForCircular(nNextNumber) {
    if (nNextNumber === -1) {
      nNextNumber = this.nSwipeElementCount - 3;
    } else if (nNextNumber === this.nSwipeElementCount - 2) {
      nNextNumber = 0;
    } else {}
    return nNextNumber;
  };

  SweetSwipe.prototype.runSwipeAction = function runSwipeAction(nDuration, nNextNumber, nWidthForAnimation) {
    if (typeof nWidthForAnimation === "undefined") {
      var nWidth = this.nSwipeWidth;
      var nDiff = this.getCurrentViewNumber() - nNextNumber;
      nWidthForAnimation = nDiff * nWidth;
    }
    this.setNextNumber(nNextNumber);
    _CommonComponent3.prototype.runCustomFn.call(this, 'USER', 'FN_BEFORE_SWIPE', nNextNumber);
    _CommonComponent3.prototype.runCustomFn.call(this, 'PLUGIN', 'FN_BEFORE_SWIPE', nNextNumber);
    this.runTransition(this.elTarget, nWidthForAnimation, nDuration / 1000); //to second.
  };

  SweetSwipe.prototype._restoreTransformXPercent = function _restoreTransformXPercent(nPanelIndex) {
    var nPanelCount = this.nSwipeElementCount - 3;
    var nPanelWidth = this.nSwipeWidth;
    var nMoveValue = nPanelCount * nPanelWidth; //refs : clonedNode is 2.

    if (nPanelIndex === 0 || nPanelIndex > nPanelCount) {
      _cu.setTranslate3dXPercent(this.elTarget, 0);
    }
  };

  SweetSwipe.prototype.registerTransitionEnd = function registerTransitionEnd() {
    var _this5 = this;

    var sTSE = _cu.getCSSTransitionEnd();

    this.elTarget.addEventListener(sTSE, function (ev) {
      var sTS = _cu.getCSSName('transition');
      _this5.elTarget.style[sTS] = "none";

      _cu.setTranslate3dXPercent(_this5.elTarget, _this5.nNextNumber * -100);

      if (_this5.option.bCircular) {
        _this5._restoreTransformXPercent(_this5.nNextNumber);
      }

      _CommonComponent3.prototype.runCustomFn.call(_this5, 'USER', 'FN_AFTER_SWIPE', _this5.nNextNumber);
      _CommonComponent3.prototype.runCustomFn.call(_this5, 'PLUGIN', 'FN_AFTER_SWIPE', _this5.nNextNumber);

      if (_this5.option.bSettingScreenHeight) _cu.setDynamicHeight(_this5.nNextNumber, _this5.elTarget, _this5.option.bCircular);

      _this5.nNextNumber = 0;

      _this5.bAnimationing = false;
    });
  };

  SweetSwipe.prototype.setNextNumber = function setNextNumber(nNextNumber) {
    this.nNextNumber = nNextNumber;
  };

  SweetSwipe.prototype.getCurrentViewNumber = function getCurrentViewNumber() {
    var nIndex = Math.abs(_cu.getTranslate3dX(this.elTarget)) / this.nSwipeWidth;
    return Math.round(nIndex);
  };

  SweetSwipe.prototype._getNextViewNumber = function _getNextViewNumber(nPos, sDirection, bSwipeGo) {
    var nIndex = Math.round(-(nPos / this.nSwipeWidth));
    if (!bSwipeGo) return nIndex;
    return sDirection === "left" ? ++nIndex : --nIndex;
  };

  SweetSwipe.prototype.dragArea = function dragArea(nPreX, nMoveDiff) {
    this.bOutRangeRight = false;
    this.bOutRangeLeft = false;

    //check valid swipe range. 

    //when go to left on left-side.
    if (nPreX >= this.nMaxSwipeRange) this.bOutRangeLeft = true;

    //when go to right on right-side.
    if (nPreX <= this.nMinSwipeRange) this.bOutRangeRight = true;

    var nNewValue = nPreX + nMoveDiff;

    if (nNewValue > this.nMaxValue) nNewValue = this.nMaxValue;
    if (nNewValue < this.nMinValue) nNewValue = this.nMinValue;

    _cu.setTranslate3dX(this.elTarget, nNewValue);
  };

  SweetSwipe.prototype.runTransition = function runTransition(elTarget, nDistance, nDuration) {
    this.bAnimationing = true;

    var nPreviousTranslateX = _cu.getTranslate3dX(elTarget);

    var sTS = _cu.getCSSName('transition');
    var sTF = _cu.getCSSName('transform');
    var sValue = "";

    if (sTF === "webkitTransform") sValue = "-webkit-transform";else if (sTF === "transform") sValue = "transform";else {}

    elTarget.style[sTS] = sValue + " " + nDuration + "s";
    elTarget.style[sTF] = 'translate3d(' + (nPreviousTranslateX + nDistance) + 'px, 0, 0)';
  };

  SweetSwipe.prototype.runAutoAnimation = function runAutoAnimation(sDirection) {
    if (this.bAnimationing) return;
    var nCur = this.getCurrentViewNumber();
    var nWidth = this.nSwipeWidth;

    if (sDirection === "toRight") {
      nWidth *= -1;
      nCur++;
    } else {
      nCur--;
    }

    nCur = this.reAdjustNextNumberForCircular(nCur);

    this.runSwipeAction(this.option.nDuration, nCur, nWidth);
  };

  SweetSwipe.prototype.recalculateWidth = function recalculateWidth() {
    var resizerunner = false;

    window.addEventListener("resize", function () {
      var _this6 = this;

      if (resizerunner) return;
      resizerunner = true;

      setTimeout(function () {
        _this6.nSwipeWidth = _cu.getWidth(_this6.elTarget.firstElementChild);
        resizerunner = false;
      }, 100);
    }.bind(this), false);
  };

  return SweetSwipe;
}(CommonComponent);

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = {
  SweetSwipe: SweetSwipe,
  SwipeNavigationPlugin: SwipeNavigationPlugin,
  SwipeStepMoverPlugin: SwipeStepMoverPlugin
};
//# sourceMappingURL=swipe_merge_es5.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _swipe_merge_es = __webpack_require__(1);

var Swipe = _interopRequireWildcard(_swipe_merge_es);

var _common = __webpack_require__(0);

var common = _interopRequireWildcard(_common);

__webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function initSwipeModule() {
	var elSwapWrap = document.querySelector(".visual_img");
	var oMyswipe = new Swipe.SweetSwipe(elSwapWrap, {
		'bCircular': true,
		'nDuration': 300, //default 100
		'nBackWidth': 60, //default 60
		'nSideWidth': 20, //default 0
		'nDecisionSlope': 0.8, //default 0.8
		'nForcedSwipeTime': 100, //default 0
		'bSettingScreenHeight': false,
		'bMouseEventSupport': true
	});

	oMyswipe.registerUserMethod({
		'FN_BEFORE_SWIPE': function FN_BEFORE_SWIPE(n) {},
		'FN_AFTER_SWIPE': function FN_AFTER_SWIPE(n) {
			var elNum = document.querySelector(".figure_pagination .num:nth-child(1)");
			elNum.innerText = n + 1;
		},
		'FN_COMPONENT_DID_LOAD': function FN_COMPONENT_DID_LOAD() {}
	});

	oMyswipe.onPlugins([{
		'name': 'SwipeStepMoverPlugin',
		'option': {
			'prevButton': document.querySelector(".btn_prev"),
			'nextButton': document.querySelector(".btn_nxt"),
			'nDuration': 100
		},
		'userMethod': {},
		'obj': Swipe.SwipeStepMoverPlugin
	}]);
}

/* layer open - close */

function toggleDetailInfo() {
	var elMores = document.querySelectorAll(".bk_more");
	var elStore_details = document.querySelector(".store_details");

	Array.prototype.forEach.call(elMores, function (element, index) {
		element.addEventListener("click", function (_ref) {
			var currentTarget = _ref.currentTarget;


			if (currentTarget.classList.contains("_open")) currentTarget.nextElementSibling.style.display = "block";else currentTarget.previousElementSibling.style.display = "block";

			elStore_details.classList.toggle("close3");
			currentTarget.style.display = "none";
		}, false);
	});
}

function regReserveLink() {
	var el = document.querySelector(".bk_btn");
	el.addEventListener("click", function (evt) {
		location.href = "./reserve.html";
	}, false);
}

function initTabToggle() {
	var ul = document.querySelector(".info_tab_lst");
	var detail_area_wrap = document.querySelector(".detail_area_wrap");
	var detail_location = document.querySelector(".detail_location");

	ul.addEventListener("click", function (evt) {
		evt.preventDefault();
		var li = evt.target.closest('li');

		if (li.classList.contains("_path")) {
			detail_area_wrap.classList.add("hide");
			detail_location.classList.remove("hide");
			li.previousElementSibling.firstElementChild.classList.remove("active");
		} else {
			detail_area_wrap.classList.remove("hide");
			detail_location.classList.add("hide");
			li.nextElementSibling.firstElementChild.classList.remove("active");
		}

		li.firstElementChild.classList.add("active");
	});
}

function checkLoginFromStorage() {
	var email = common.getEmail();
	var elViewReservation = document.querySelector(".viewReservation");
	if (email !== null) elViewReservation.innerText = email;
}

document.addEventListener("DOMContentLoaded", function (evt) {
	initSwipeModule();
	toggleDetailInfo();
	regReserveLink();
	initTabToggle();
	checkLoginFromStorage();
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGUxMTM0Yjc5Y2JjNGFlYWU3MmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N3aXBlX21lcmdlX2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwuanMiXSwibmFtZXMiOlsiZ2V0RW1haWwiLCJzRW1haWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJBcnJheSIsImlzQXJyYXkiLCJpIiwiYXJyMiIsImxlbmd0aCIsImZyb20iLCJfZGVmYXVsdHMiLCJkZWZhdWx0cyIsImtleXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwia2V5IiwidmFsdWUiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ1bmRlZmluZWQiLCJkZWZpbmVQcm9wZXJ0eSIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsImNhbGwiLCJSZWZlcmVuY2VFcnJvciIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsIlR5cGVFcnJvciIsImNyZWF0ZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsInNldFByb3RvdHlwZU9mIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9jdSIsImdldEZuTmFtZSIsImZuIiwic05hbWUiLCJuYW1lIiwidG9TdHJpbmciLCJtYXRjaCIsInNldFRyYW5zbGF0ZTNkWCIsImVsZSIsIm5WYWx1ZSIsInNURiIsImdldENTU05hbWUiLCJzdHlsZSIsInNldFRyYW5zbGF0ZTNkWFBlcmNlbnQiLCJnZXRXaWR0aCIsIm5XaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJodENhY2hlRGF0YSIsIl9odE5hbWVTZXQiLCJhTmFtZUxpc3QiLCJpc0V4aXN0IiwibGVuIiwiZG9jdW1lbnQiLCJib2R5IiwiZ2V0Q2hpbGRPcmRlciIsImVsQ2hpbGQiLCJlbFBhcmVudCIsInBhcmVudE5vZGUiLCJuSW5kZXgiLCJpbmRleE9mIiwiY2hpbGRyZW4iLCJnZXRUcmFuc2xhdGUzZFgiLCJzUHJlQ3NzIiwiblByZVgiLCJyZXBsYWNlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJnZXRUcmFuc2xhdGUzZFhQZXJjZW50IiwiZ2V0Q1NTVHJhbnNpdGlvbkVuZCIsInNUUyIsInNUU0UiLCJzZXREeW5hbWljSGVpZ2h0Iiwibk5leHROdW1iZXIiLCJ0YXJnZXQiLCJiQ2lyY3VsYXIiLCJlbEN1cnJlbnQiLCJuSGVpZ2h0IiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiaGVpZ2h0Iiwic2V0Q1NTIiwiZWwiLCJzaG93TGF5ZXIiLCJkaXNwbGF5IiwiY2xvc2VMYXllciIsImRhdGEiLCJfYSIsImlzRnVuY3Rpb24iLCJDb21tb25Db21wb25lbnQiLCJlbFRhcmdldCIsImh0T3B0aW9uIiwiaW5pdCIsInNldEluaXRWYWx1ZSIsInNldE9wdGlvbiIsIl9odERlZmF1bHRPcHRpb24iLCJvcHRpb24iLCJpbml0VmFsdWUiLCJyZWdpc3RlckV2ZW50cyIsIkRFRkFVTFRfQ09SRV9FVkVOVCIsIl9kIiwiQ09NUE9ORU5UX0NPTkZJRyIsImJNYWluQ29tcG9uZW50IiwiUExVR0lOUyIsIkRFRkFVTFRfT1BUSU9OIiwiYU15UGx1Z2luTmFtZSIsImh0RGVmYXVsdEZuIiwiZ2V0RGVmYXVsdENhbGxiYWNrTGlzdCIsImNvbmNhdCIsIkRFRkFVTFRfQ09NUE9ORU5UX0VWRU5UIiwiaHREZWZhdWx0UGx1Z2luRm4iLCJERUZBVUxUX1BMVUdJTl9FVkVOVCIsImh0VXNlckZuIiwiaHRQbHVnaW5GbiIsInJlZ2lzdGVyVXNlck1ldGhvZCIsImh0Rm4iLCJyZWdpc3RlclBsdWdpbk1ldGhvZCIsImFwcGVuZFBsdWdpbk1ldGhvZCIsIm9uUGx1Z2lucyIsImFQbHVnaW5MaXN0IiwiaW5pdFBsdWdpbnMiLCJjb21wb25lbnREaWRMb2FkZWQiLCJodFZhbHVlIiwiaHREZWZhdWx0VmFsdWUiLCJodFN0b3JhZ2UiLCJfdGhpcyIsImZvckVhY2giLCJ2IiwicHVzaCIsImFGbiIsIl90aGlzMiIsIm9QYXJlbnQiLCJvUGx1Z2luIiwidXNlck1ldGhvZCIsIl9pbmplY3RQYXJlbnRPYmplY3QiLCJydW5DdXN0b21GbiIsInR5cGUiLCJldmVudG5hbWUiLCJhcmdzIiwic2xpY2UiLCJhcmd1bWVudHMiLCJyZXR1cm5WYWx1ZSIsIl9odFVzZXJGbiIsImFwcGx5Iiwib0NoaWxkIiwiZG9ja2luZ1BsdWdpbk1ldGhvZCIsIlN3aXBlTmF2aWdhdGlvblBsdWdpbiIsIl9Db21tb25Db21wb25lbnQiLCJTRUxFQ1RPUiIsImVsUGx1Z2luVGFyZ2V0IiwiZWxOYXZpV3JhcCIsIm9QYXJlbnRJbnN0YW5jZSIsIm1vdmVTd2lwZUFyZWEiLCJsaXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGhhdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsIm1vdmVwYXJlbnRTd2lwZVBhbmVsIiwiYk1vdXNlRXZlbnRTdXBwb3J0IiwiX2kiLCJuU3dpcGVXaWR0aCIsIm5DaGlsZE9yZGVyIiwibkRpZmYiLCJnZXRDdXJyZW50Vmlld051bWJlciIsIm5Nb3ZlVmFsdWUiLCJydW5Td2lwZUFjdGlvbiIsIm5EdXJhdGlvbiIsImhpZ2hsaWdodFNlbGVjdGVkTEkiLCJuU2VsZWN0ZWRDb3VudCIsIl9saSIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxldGVkQ2xhc3NOYW1lIiwiX2N1ckNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImJpbmQiLCJGTl9BRlRFUl9TV0lQRSIsIlN3aXBlU3RlcE1vdmVyUGx1Z2luIiwiX0NvbW1vbkNvbXBvbmVudDIiLCJlbFByZXZCdG4iLCJwcmV2QnV0dG9uIiwiZWxOZXh0QnRuIiwibmV4dEJ1dHRvbiIsIl90aGlzMyIsImV2dCIsImhhbmRsZXJDbGlja0J1dHRvbiIsInNEaXJlY3Rpb24iLCJiQW5pbWF0aW9uaW5nIiwibkN1ciIsIm5Td2lwZUVsZW1lbnRDb3VudCIsInJlQWRqdXN0TmV4dE51bWJlckZvckNpcmN1bGFyIiwic2V0RGlzcGxheU9mQnV0dG9uIiwibkN1cnJlbnRQYW5lbCIsIm5NYXhQYW5lbCIsIlN3ZWV0U3dpcGUiLCJfQ29tbW9uQ29tcG9uZW50MyIsImJTZXR0aW5nU2NyZWVuSGVpZ2h0IiwiY2hpbGRFbGVtZW50Q291bnQiLCJuTWF4U3dpcGVSYW5nZSIsIm5NaW5Td2lwZVJhbmdlIiwibk1heFZhbHVlIiwiblNpZGVXaWR0aCIsIm5NaW5WYWx1ZSIsInJlY2FsY3VsYXRlV2lkdGgiLCJfdGhpczQiLCJiVG91Y2hFdmVudFN1cHBvcnQiLCJoYW5kbGVyVG91Y2hTdGFydCIsImhhbmRsZXJUb3VjaE1vdmUiLCJoYW5kbGVyVG91Y2hFbmQiLCJyZWdpc3RlclRyYW5zaXRpb25FbmQiLCJzdG9wUHJvcGFnYXRpb24iLCJiU3dpcGUiLCJiRmlyc3RUb3VjaE1vdmUiLCJiTW91c2VFdmVudCIsInN1YnN0ciIsInBhZ2VYIiwicGFnZVkiLCJjaGFuZ2VkVG91Y2hlcyIsIm5TdGFydFBvc1giLCJNYXRoIiwiZmxvb3IiLCJuU3RhcnRQb3NZIiwiblN0YXJ0VHJhbnNsYXRlWCIsIm5Ub3VjaFN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJodEN1cnJlbnRFdnQiLCJuTW92ZVBvc1giLCJuTW92ZVBvc1kiLCJuQW5nbGVEaWZmIiwiYWJzIiwibkRlY2lzaW9uU2xvcGUiLCJuUHJlTW92ZVgiLCJwcmV2ZW50RGVmYXVsdCIsIm5Nb3ZlRGlmZiIsIm5QcmV2aW91c1giLCJkcmFnQXJlYSIsIm5QcmVNb3ZlWSIsImJPdXRSYW5nZVJpZ2h0IiwiYk91dFJhbmdlTGVmdCIsIm5XaWR0aEZvckFuaW1hdGlvbiIsIm5Ub3VjaEVuZFRpbWUiLCJuRGlmZlRvdWNoVGltZSIsIm5MYXN0VHJhbnNsYXRlWCIsIm5EaWZmVHJhbnNsYXRlWCIsImJTd2lwZVdpZHRoIiwiYlN3aXBlVGltZSIsImJTd2lwZUdvIiwibkJhY2tXaWR0aCIsIm5Gb3JjZWRTd2lwZVRpbWUiLCJfZ2V0TmV4dFZpZXdOdW1iZXIiLCJyb3VuZCIsInNldE5leHROdW1iZXIiLCJydW5UcmFuc2l0aW9uIiwiX3Jlc3RvcmVUcmFuc2Zvcm1YUGVyY2VudCIsIm5QYW5lbEluZGV4IiwiblBhbmVsQ291bnQiLCJuUGFuZWxXaWR0aCIsIl90aGlzNSIsIm5Qb3MiLCJuTmV3VmFsdWUiLCJuRGlzdGFuY2UiLCJuUHJldmlvdXNUcmFuc2xhdGVYIiwic1ZhbHVlIiwicnVuQXV0b0FuaW1hdGlvbiIsInJlc2l6ZXJ1bm5lciIsIndpbmRvdyIsIl90aGlzNiIsInNldFRpbWVvdXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiU3dpcGUiLCJjb21tb24iLCJpbml0U3dpcGVNb2R1bGUiLCJlbFN3YXBXcmFwIiwib015c3dpcGUiLCJuIiwiZWxOdW0iLCJpbm5lclRleHQiLCJ0b2dnbGVEZXRhaWxJbmZvIiwiZWxNb3JlcyIsImVsU3RvcmVfZGV0YWlscyIsImVsZW1lbnQiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm5leHRFbGVtZW50U2libGluZyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJ0b2dnbGUiLCJyZWdSZXNlcnZlTGluayIsImxvY2F0aW9uIiwiaHJlZiIsImluaXRUYWJUb2dnbGUiLCJ1bCIsImRldGFpbF9hcmVhX3dyYXAiLCJkZXRhaWxfbG9jYXRpb24iLCJsaSIsImNsb3Nlc3QiLCJhZGQiLCJyZW1vdmUiLCJjaGVja0xvZ2luRnJvbVN0b3JhZ2UiLCJlbWFpbCIsImVsVmlld1Jlc2VydmF0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QixrQkFBdkIsQ0FBM0I7QUFDQSxLQUFHbUksVUFBVSxJQUFiLEVBQW1CQyxrQkFBa0J6QixTQUFsQixHQUE4QndCLEtBQTlCO0FBQ25COztBQUVEeFAsU0FBU3NHLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxlQUFPO0FBQ3BEcUg7QUFDQU07QUFDQVc7QUFDQUc7QUFDQVE7QUFDQSxDQU5ELEUiLCJmaWxlIjoiZGV0YWlsLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGRlMTEzNGI3OWNiYzRhZWFlNzJjIiwiZnVuY3Rpb24gZ2V0RW1haWwgKCkge1xuXHR2YXIgc0VtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcblx0aWYoc0VtYWlsICE9PSBudWxsKSByZXR1cm4gc0VtYWlsO1xuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IHtnZXRFbWFpbH07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24uanMiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcbiAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07dmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTtpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfXJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9cmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yoc3VwZXJDbGFzcykpKTtcbiAgfXN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7aWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG52YXIgX2N1ID0ge1xuICBnZXRGbk5hbWU6IGZ1bmN0aW9uIGdldEZuTmFtZShmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuICAgIHZhciBzTmFtZSA9IGZuLm5hbWUgPyBmbi5uYW1lIDogZm4udG9TdHJpbmcoKS5tYXRjaCgvZnVuY3Rpb25cXHMrKFteKFxcKHxcXHMpXSspLylbMV07XG4gICAgcmV0dXJuIHNOYW1lO1xuICB9LFxuICBzZXRUcmFuc2xhdGUzZFg6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZTNkWChlbGUsIG5WYWx1ZSkge1xuICAgIHZhciBzVEYgPSB0aGlzLmdldENTU05hbWUoJ3RyYW5zZm9ybScpO1xuICAgIGVsZS5zdHlsZVtzVEZdID0gJ3RyYW5zbGF0ZTNkKCcgKyBuVmFsdWUgKyAncHgsIDAsIDApJztcbiAgfSxcbiAgc2V0VHJhbnNsYXRlM2RYUGVyY2VudDogZnVuY3Rpb24gc2V0VHJhbnNsYXRlM2RYUGVyY2VudChlbGUsIG5WYWx1ZSkge1xuICAgIHZhciBzVEYgPSB0aGlzLmdldENTU05hbWUoJ3RyYW5zZm9ybScpO1xuICAgIGVsZS5zdHlsZVtzVEZdID0gJ3RyYW5zbGF0ZTNkKCcgKyBuVmFsdWUgKyAnJSwgMCwgMCknO1xuICB9LFxuICBnZXRXaWR0aDogZnVuY3Rpb24gZ2V0V2lkdGgoZWxlKSB7XG4gICAgdmFyIG5XaWR0aCA9IDA7XG5cbiAgICBpZiAoZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSB7XG4gICAgICBuV2lkdGggPSBlbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5XaWR0aCA9IGVsZS5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIG5XaWR0aDtcbiAgfSxcbiAgZ2V0Q1NTTmFtZTogZnVuY3Rpb24gZ2V0Q1NTTmFtZShzTmFtZSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5odENhY2hlRGF0YSA9PT0gXCJ1bmRlZmluZWRcIikgdGhpcy5odENhY2hlRGF0YSA9IHt9O1xuXG4gICAgaWYgKHRoaXMuaHRDYWNoZURhdGFbc05hbWVdKSByZXR1cm4gdGhpcy5odENhY2hlRGF0YVtzTmFtZV07XG5cbiAgICB2YXIgX2h0TmFtZVNldCA9IHtcbiAgICAgICd0cmFuc2l0aW9uJzogWyd3ZWJraXRUcmFuc2l0aW9uJywgJ3RyYW5zaXRpb24nXSxcbiAgICAgICd0cmFuc2Zvcm0nOiBbJ3dlYmtpdFRyYW5zZm9ybScsICd0cmFuc2Zvcm0nXVxuICAgIH07XG5cbiAgICB2YXIgYU5hbWVMaXN0ID0gX2h0TmFtZVNldFtzTmFtZV07XG5cbiAgICBpZiAoIXRoaXMuaXNFeGlzdChhTmFtZUxpc3QpKSByZXR1cm4gbnVsbDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhTmFtZUxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVthTmFtZUxpc3RbaV1dID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmh0Q2FjaGVEYXRhW3NOYW1lXSA9IGFOYW1lTGlzdFtpXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRDYWNoZURhdGFbc05hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0Q2hpbGRPcmRlcjogZnVuY3Rpb24gZ2V0Q2hpbGRPcmRlcihlbENoaWxkKSB7XG4gICAgdmFyIGVsUGFyZW50ID0gZWxDaGlsZC5wYXJlbnROb2RlO1xuICAgIHZhciBuSW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGVsUGFyZW50LmNoaWxkcmVuLCBlbENoaWxkKTtcbiAgICByZXR1cm4gbkluZGV4O1xuICB9LFxuICBnZXRUcmFuc2xhdGUzZFg6IGZ1bmN0aW9uIGdldFRyYW5zbGF0ZTNkWChlbGUpIHtcbiAgICB2YXIgc1RGID0gdGhpcy5nZXRDU1NOYW1lKFwidHJhbnNmb3JtXCIpO1xuICAgIHZhciBzUHJlQ3NzID0gZWxlLnN0eWxlW3NURl07XG4gICAgdmFyIG5QcmVYID0gMDtcblxuICAgIGlmIChzUHJlQ3NzLmluZGV4T2YoXCIlXCIpID09PSAtMSkge1xuICAgICAgblByZVggPSArc1ByZUNzcy5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKCgtKlxcZCsoPzpcXC5cXGQrKSopKHB4KSpcXCwuK1xcKS9nLCBcIiQxXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuUHJlWCA9ICtzUHJlQ3NzLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoKC0qXFxkKyg/OlxcLlxcZCspKikoJSkqXFwsLitcXCkvZywgXCIkMVwiKTtcbiAgICAgIG5QcmVYID0gblByZVggLyAxMDAgKiB0aGlzLmdldFdpZHRoKGVsZS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5QcmVYO1xuICB9LFxuICBnZXRUcmFuc2xhdGUzZFhQZXJjZW50OiBmdW5jdGlvbiBnZXRUcmFuc2xhdGUzZFhQZXJjZW50KGVsZSkge1xuICAgIHZhciBzVEYgPSB0aGlzLmdldENTU05hbWUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgdmFyIHNQcmVDc3MgPSBlbGUuc3R5bGVbc1RGXTtcbiAgICB2YXIgblByZVggPSArc1ByZUNzcy5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKCgtKlxcZCsoPzpcXC5cXGQrKSopKCUpKlxcLC4rXFwpL2csIFwiJDFcIik7XG4gICAgcmV0dXJuIG5QcmVYO1xuICB9LFxuICBnZXRDU1NUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiBnZXRDU1NUcmFuc2l0aW9uRW5kKCkge1xuICAgIHZhciBzVFMgPSB0aGlzLmdldENTU05hbWUoJ3RyYW5zaXRpb24nKTtcbiAgICB2YXIgc1RTRSA9IHNUUyA9PT0gXCJ3ZWJraXRUcmFuc2l0aW9uXCIgPyBcIndlYmtpdFRyYW5zaXRpb25FbmRcIiA6IFwidHJhbnNpdGlvbmVuZFwiO1xuICAgIHJldHVybiBzVFNFO1xuICB9LFxuICBzZXREeW5hbWljSGVpZ2h0OiBmdW5jdGlvbiBzZXREeW5hbWljSGVpZ2h0KG5OZXh0TnVtYmVyLCB0YXJnZXQsIGJDaXJjdWxhcikge1xuICAgIGlmIChiQ2lyY3VsYXIpIHtcbiAgICAgIG5OZXh0TnVtYmVyKys7XG4gICAgfVxuICAgIHZhciBlbEN1cnJlbnQgPSB0YXJnZXQuY2hpbGRyZW5bbk5leHROdW1iZXJdO1xuICAgIHZhciBuSGVpZ2h0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShlbEN1cnJlbnQpLmhlaWdodCk7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IG5IZWlnaHQgKyBcInB4XCI7XG4gIH0sXG4gIHNldENTUzogZnVuY3Rpb24gc2V0Q1NTKGVsLCBzdHlsZSwgdmFsdWUpIHtcbiAgICBlbC5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcbiAgfSxcbiAgc2hvd0xheWVyOiBmdW5jdGlvbiBzaG93TGF5ZXIoZWwpIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9LFxuICBjbG9zZUxheWVyOiBmdW5jdGlvbiBjbG9zZUxheWVyKGVsKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9LFxuXG5cbiAgLy9jaGVjayBudWxsIG9yIHVuZGVmaW5lZFxuICBpc0V4aXN0OiBmdW5jdGlvbiBpc0V4aXN0KGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YSAhPSBudWxsO1xuICB9LFxuICBpc0FycmF5OiBmdW5jdGlvbiBpc0FycmF5KF9hKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF9hKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoX2EpO1xuICB9LFxuICBpc0Z1bmN0aW9uOiBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cbn07XG4vKlxuKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiogQ29weXJpZ2h0IChjKSAyMDE2IFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gKlxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOiAqXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4qIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLiAqXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiogVEhFIFNPRlRXQVJFLiAqL1xuXG4vKiFcbiogXFxDb21tb25Db21vbmVudC5qcyB2MC4yLjFcbiogXFxjb3JlIGNvbXBvbmVudCBzb3VyY2UgZm9yIENvbXBvbmVudHMgVUkgLlxuKiBcXGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gXG4qIFxcbGljZW5zZSBUaGlzIHByb2plY3QgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKiBcXGNvbnRyaWJ1dG9yIEppc3UgWW91biAoamlzdS55b3VuQGdtYWlsLmNvbSlcbiogXFx3YXJuaW5nIGRvbnQndXNlIHRoaXMgc291cmNlIGluIG90aGVyIGxpYnJhcnkgc291cmNlLlxuKi9cblxudmFyIENvbW1vbkNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29tbW9uQ29tcG9uZW50KGVsVGFyZ2V0LCBodE9wdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21tb25Db21wb25lbnQpO1xuXG4gICAgdGhpcy5odE9wdGlvbiA9IGh0T3B0aW9uO1xuICAgIHRoaXMuaHRDYWNoZURhdGEgPSB7fTtcbiAgICB0aGlzLmVsVGFyZ2V0ID0gZWxUYXJnZXQ7XG4gICAgdGhpcy5pbml0KGh0T3B0aW9uKTtcbiAgfVxuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIGluaXQoaHRPcHRpb24pIHtcbiAgICB0aGlzLnNldEluaXRWYWx1ZSgpO1xuICAgIHRoaXMuc2V0T3B0aW9uKGh0T3B0aW9uLCB0aGlzLl9odERlZmF1bHRPcHRpb24sIHRoaXMub3B0aW9uKTtcbiAgICB0aGlzLmluaXRWYWx1ZSgpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLnNldEluaXRWYWx1ZSA9IGZ1bmN0aW9uIHNldEluaXRWYWx1ZSgpIHtcbiAgICB2YXIgREVGQVVMVF9DT1JFX0VWRU5UID0gWydGTl9DT01QT05FTlRfRElEX0xPQUQnXTtcbiAgICB2YXIgX2QgPSB0aGlzLkNPTVBPTkVOVF9DT05GSUcoKTtcbiAgICB0aGlzLmJNYWluQ29tcG9uZW50ID0gISFfZC5QTFVHSU5TO1xuICAgIHRoaXMuX2h0RGVmYXVsdE9wdGlvbiA9IF9kLkRFRkFVTFRfT1BUSU9OO1xuICAgIHRoaXMuYU15UGx1Z2luTmFtZSA9IF9kLlBMVUdJTlM7XG4gICAgdGhpcy5odERlZmF1bHRGbiA9IHRoaXMuZ2V0RGVmYXVsdENhbGxiYWNrTGlzdChERUZBVUxUX0NPUkVfRVZFTlQuY29uY2F0KF9kLkRFRkFVTFRfQ09NUE9ORU5UX0VWRU5UKSk7XG5cbiAgICBpZiAodGhpcy5iTWFpbkNvbXBvbmVudCkge1xuICAgICAgdGhpcy5odERlZmF1bHRQbHVnaW5GbiA9IHRoaXMuZ2V0RGVmYXVsdENhbGxiYWNrTGlzdChERUZBVUxUX0NPUkVfRVZFTlQuY29uY2F0KF9kLkRFRkFVTFRfUExVR0lOX0VWRU5UKSk7XG4gICAgfVxuICAgIHRoaXMuaHRVc2VyRm4gPSB7fTtcbiAgICB0aGlzLmh0UGx1Z2luRm4gPSB7fTtcbiAgICB0aGlzLm9wdGlvbiA9IHt9O1xuICB9O1xuXG4gIC8vVE9ETy4gbW92ZSB0byBzdXBlciBDbGFzcy5cblxuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUucmVnaXN0ZXJVc2VyTWV0aG9kID0gZnVuY3Rpb24gcmVnaXN0ZXJVc2VyTWV0aG9kKGh0Rm4pIHtcbiAgICB0aGlzLnNldE9wdGlvbihodEZuLCB0aGlzLmh0RGVmYXVsdEZuLCB0aGlzLmh0VXNlckZuKTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLnJlZ2lzdGVyUGx1Z2luTWV0aG9kID0gZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW5NZXRob2QoaHRGbikge1xuICAgIHRoaXMuYXBwZW5kUGx1Z2luTWV0aG9kKGh0Rm4sIHRoaXMuaHREZWZhdWx0UGx1Z2luRm4sIHRoaXMuaHRQbHVnaW5Gbik7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5vblBsdWdpbnMgPSBmdW5jdGlvbiBvblBsdWdpbnMoYVBsdWdpbkxpc3QpIHtcbiAgICB0aGlzLmluaXRQbHVnaW5zKHRoaXMuYU15UGx1Z2luTmFtZSwgYVBsdWdpbkxpc3QsIHRoaXMuZWxUYXJnZXQpO1xuICAgIHRoaXMuY29tcG9uZW50RGlkTG9hZGVkKCk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5zZXRPcHRpb24gPSBmdW5jdGlvbiBzZXRPcHRpb24oaHRWYWx1ZSwgaHREZWZhdWx0VmFsdWUsIGh0U3RvcmFnZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBPYmplY3Qua2V5cyhodERlZmF1bHRWYWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgaWYgKHR5cGVvZiBodFZhbHVlW3ZdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGh0U3RvcmFnZVt2XSA9IGh0RGVmYXVsdFZhbHVlW3ZdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChodFZhbHVlW3ZdKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICAgIGh0U3RvcmFnZVt2XSA9IGh0VmFsdWVbdl07XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGh0U3RvcmFnZVt2XSA9IHt9O1xuICAgICAgICBfdGhpcy5zZXRPcHRpb24uY2FsbChfdGhpcywgaHRWYWx1ZVt2XSwgaHREZWZhdWx0VmFsdWVbdl0sIGh0U3RvcmFnZVt2XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5hcHBlbmRQbHVnaW5NZXRob2QgPSBmdW5jdGlvbiBhcHBlbmRQbHVnaW5NZXRob2QoaHRWYWx1ZSwgaHREZWZhdWx0VmFsdWUsIGh0U3RvcmFnZSkge1xuICAgIE9iamVjdC5rZXlzKGh0RGVmYXVsdFZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaHRTdG9yYWdlW3ZdKSkgaHRTdG9yYWdlW3ZdID0gW107XG4gICAgICBpZiAodHlwZW9mIGh0VmFsdWVbdl0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaHRTdG9yYWdlW3ZdLnB1c2goaHREZWZhdWx0VmFsdWVbdl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHRTdG9yYWdlW3ZdLnB1c2goaHRWYWx1ZVt2XSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLmdldERlZmF1bHRDYWxsYmFja0xpc3QgPSBmdW5jdGlvbiBnZXREZWZhdWx0Q2FsbGJhY2tMaXN0KGFGbikge1xuICAgIHZhciBodEZuID0ge307XG4gICAgYUZuLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIGh0Rm5bdl0gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9KTtcbiAgICByZXR1cm4gaHRGbjtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLmluaXRQbHVnaW5zID0gZnVuY3Rpb24gaW5pdFBsdWdpbnMoYU15UGx1Z2luTmFtZSwgYVBsdWdpbkxpc3QsIGVsVGFyZ2V0KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgb1BhcmVudCA9IHRoaXM7XG4gICAgYVBsdWdpbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgdmFyIHNOYW1lID0gdi5uYW1lO1xuICAgICAgdmFyIG9iaiA9IHYub2JqO1xuICAgICAgaWYgKGFNeVBsdWdpbk5hbWUuaW5kZXhPZihzTmFtZSkgPCAwKSByZXR1cm47XG4gICAgICAvL2xldCBvUGx1Z2luID0gbmV3IHdpbmRvd1t2Lm5hbWVdKGVsVGFyZ2V0LCB2Lm9wdGlvbik7XG4gICAgICB2YXIgb1BsdWdpbiA9IG5ldyBvYmooZWxUYXJnZXQsIHYub3B0aW9uKTtcbiAgICAgIG9QbHVnaW4ucmVnaXN0ZXJVc2VyTWV0aG9kKHYudXNlck1ldGhvZCk7XG4gICAgICBfdGhpczIuX2luamVjdFBhcmVudE9iamVjdChvUGFyZW50LCBvUGx1Z2luKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWRlZCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZExvYWRlZCgpIHtcbiAgICB0aGlzLnJ1bkN1c3RvbUZuKCdVU0VSJywgJ0ZOX0NPTVBPTkVOVF9ESURfTE9BRCcpO1xuICAgIHRoaXMucnVuQ3VzdG9tRm4oJ1BMVUdJTicsICdGTl9DT01QT05FTlRfRElEX0xPQUQnKTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLnJ1bkN1c3RvbUZuID0gZnVuY3Rpb24gcnVuQ3VzdG9tRm4odHlwZSwgZXZlbnRuYW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIHJldHVyblZhbHVlID0gdm9pZCAwO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwiVVNFUlwiOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKF90eXBlb2YodGhpcy5odFVzZXJGbikgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHRoaXMuaHRVc2VyRm5bZXZlbnRuYW1lXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgX2h0VXNlckZuO1xuXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IChfaHRVc2VyRm4gPSB0aGlzLmh0VXNlckZuKVtldmVudG5hbWVdLmFwcGx5KF9odFVzZXJGbiwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgXCJQTFVHSU5cIjpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChfdHlwZW9mKHRoaXMuaHRQbHVnaW5GbikgPT09IFwib2JqZWN0XCIgJiYgX3R5cGVvZih0aGlzLmh0UGx1Z2luRm5bZXZlbnRuYW1lXSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuaHRQbHVnaW5GbltldmVudG5hbWVdLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgIGZuLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge31cbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuX2luamVjdFBhcmVudE9iamVjdCA9IGZ1bmN0aW9uIF9pbmplY3RQYXJlbnRPYmplY3Qob1BhcmVudCwgb0NoaWxkKSB7XG4gICAgb0NoaWxkLmRvY2tpbmdQbHVnaW5NZXRob2Qob1BhcmVudCk7XG4gIH07XG5cbiAgcmV0dXJuIENvbW1vbkNvbXBvbmVudDtcbn0oKTtcblxuLypcbiogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4qIENvcHlyaWdodCAoYykgMjAxNiBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuICpcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczogKlxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4gKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4qIFRIRSBTT0ZUV0FSRS4gKi9cblxuLyohXG4qIFxcU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLmpzIHYwLjFcbiogXFxjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIFxuKiBcXGxpY2Vuc2UgVGhpcyBwcm9qZWN0IGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiogXFxjb250cmlidXRvciBuaWdheW91biAobmlnYXlvdW5AZ21haWwuY29tKVxuKiBcXHdhcm5pbmcgZG9udCd1c2UgdGhpcyBzb3VyY2UgaW4gb3RoZXIgbGlicmFyeSBzb3VyY2UuXG4qL1xuXG52YXIgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luID0gZnVuY3Rpb24gKF9Db21tb25Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN3aXBlTmF2aWdhdGlvblBsdWdpbiwgX0NvbW1vbkNvbXBvbmVudCk7XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5DT01QT05FTlRfQ09ORklHID0gZnVuY3Rpb24gQ09NUE9ORU5UX0NPTkZJRygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgU0VMRUNUT1I6IHt9LFxuICAgICAgREVGQVVMVF9DT01QT05FTlRfRVZFTlQ6IFtdLFxuICAgICAgREVGQVVMVF9PUFRJT046IHtcbiAgICAgICAgJ3VzYWdlJzogZmFsc2UsXG4gICAgICAgICdlbE5hdmlXcmFwJzogbnVsbCwgLy9vd24gZWxlbWVudCgjaVNjcm9sbEFyZWEpXG4gICAgICAgICdzZWxldGVkQ2xhc3NOYW1lJzogJ3NlbGVjdGVkLXN3aXBlLWxpJyxcbiAgICAgICAgJ25EdXJhdGlvbic6IDIwMCxcbiAgICAgICAgJ2JNb3VzZUV2ZW50U3VwcG9ydCc6IGZhbHNlXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBTd2lwZU5hdmlnYXRpb25QbHVnaW4oZWxUYXJnZXQsIGh0T3B0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN3aXBlTmF2aWdhdGlvblBsdWdpbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbW1vbkNvbXBvbmVudC5jYWxsKHRoaXMsIGVsVGFyZ2V0LCBodE9wdGlvbikpO1xuICB9XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5pbml0VmFsdWUgPSBmdW5jdGlvbiBpbml0VmFsdWUoKSB7XG4gICAgdGhpcy5lbFBsdWdpblRhcmdldDtcbiAgICB0aGlzLmVsTmF2aVdyYXAgPSB0aGlzLm9wdGlvbi5lbE5hdmlXcmFwO1xuICAgIHRoaXMub1BhcmVudEluc3RhbmNlID0gbnVsbDtcbiAgfTtcblxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW4ucHJvdG90eXBlLnJlZ2lzdGVyRXZlbnRzID0gZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgdGhpcy5tb3ZlU3dpcGVBcmVhKCk7XG4gIH07XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5tb3ZlU3dpcGVBcmVhID0gZnVuY3Rpb24gbW92ZVN3aXBlQXJlYSgpIHtcbiAgICB2YXIgbGlzID0gdGhpcy5vcHRpb24uZWxOYXZpV3JhcC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XG5cbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc1tpXS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHRoYXQubW92ZXBhcmVudFN3aXBlUGFuZWwodGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb24uYk1vdXNlRXZlbnRTdXBwb3J0KSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBsaXNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICB0aGF0Lm1vdmVwYXJlbnRTd2lwZVBhbmVsKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5tb3ZlcGFyZW50U3dpcGVQYW5lbCA9IGZ1bmN0aW9uIG1vdmVwYXJlbnRTd2lwZVBhbmVsKGVsVGFyZ2V0KSB7XG4gICAgdmFyIG5XaWR0aCA9IHRoaXMub1BhcmVudEluc3RhbmNlLm5Td2lwZVdpZHRoO1xuICAgIHZhciBuQ2hpbGRPcmRlciA9IF9jdS5nZXRDaGlsZE9yZGVyKGVsVGFyZ2V0KTtcblxuICAgIHZhciBuRGlmZiA9IHRoaXMub1BhcmVudEluc3RhbmNlLmdldEN1cnJlbnRWaWV3TnVtYmVyKCkgLSBuQ2hpbGRPcmRlcjtcbiAgICB2YXIgbk1vdmVWYWx1ZSA9IG5EaWZmICogbldpZHRoO1xuXG4gICAgdmFyIG5OZXh0TnVtYmVyID0gbkNoaWxkT3JkZXI7XG5cbiAgICAvL2ZvciBubyBhbmltYXRpb24sIG5EdXJhdGlvbiBzZXQgemVyby5cbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZS5ydW5Td2lwZUFjdGlvbih0aGlzLm9wdGlvbi5uRHVyYXRpb24sIG5OZXh0TnVtYmVyKTtcblxuICAgIHRoaXMuaGlnaGxpZ2h0U2VsZWN0ZWRMSShuQ2hpbGRPcmRlcik7XG4gIH07XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5oaWdobGlnaHRTZWxlY3RlZExJID0gZnVuY3Rpb24gaGlnaGxpZ2h0U2VsZWN0ZWRMSShuU2VsZWN0ZWRDb3VudCkge1xuICAgIG5TZWxlY3RlZENvdW50Kys7XG4gICAgLy9yZW1vdmUgbGVnYWN5IGNsYXNzXG4gICAgdmFyIF9saSA9IHRoaXMub3B0aW9uLmVsTmF2aVdyYXAucXVlcnlTZWxlY3RvcihcIi5cIiArIHRoaXMub3B0aW9uLnNlbGV0ZWRDbGFzc05hbWUpO1xuICAgIHZhciBfY3VyQ2xhc3NOYW1lID0gX2xpLmNsYXNzTmFtZTtcbiAgICBfbGkuY2xhc3NOYW1lID0gX2xpLmNsYXNzTmFtZS5yZXBsYWNlKF9jdXJDbGFzc05hbWUsIFwiXCIpO1xuXG4gICAgLy9hZGQgbmV3IGNsYXNzXG4gICAgdGhpcy5vcHRpb24uZWxOYXZpV3JhcC5xdWVyeVNlbGVjdG9yKFwibGk6bnRoLWNoaWxkKFwiICsgblNlbGVjdGVkQ291bnQgKyBcIilcIikuY2xhc3NOYW1lICs9IFwiIFwiICsgdGhpcy5vcHRpb24uc2VsZXRlZENsYXNzTmFtZTtcbiAgfTtcblxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW4ucHJvdG90eXBlLmRvY2tpbmdQbHVnaW5NZXRob2QgPSBmdW5jdGlvbiBkb2NraW5nUGx1Z2luTWV0aG9kKG9QYXJlbnQpIHtcbiAgICBvUGFyZW50LnJlZ2lzdGVyUGx1Z2luTWV0aG9kKHtcbiAgICAgICdGTl9CRUZPUkVfU1dJUEUnOiB0aGlzLmhpZ2hsaWdodFNlbGVjdGVkTEkuYmluZCh0aGlzKSxcbiAgICAgICdGTl9BRlRFUl9TV0lQRSc6IGZ1bmN0aW9uIEZOX0FGVEVSX1NXSVBFKCkge31cbiAgICB9KTtcbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZSA9IG9QYXJlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIFN3aXBlTmF2aWdhdGlvblBsdWdpbjtcbn0oQ29tbW9uQ29tcG9uZW50KTtcblxuLypcbiogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4qIENvcHlyaWdodCAoYykgMjAxNiBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuICpcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczogKlxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4gKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4qIFRIRSBTT0ZUV0FSRS4gKi9cblxuLyohXG4qIFxcU3dpcGVTdGVwTW92ZXJQbHVnaW4uanMgdjAuMVxuKiBcXGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gXG4qIFxcbGljZW5zZSBUaGlzIHByb2plY3QgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKiBcXGNvbnRyaWJ1dG9yIG5pZ2F5b3VuIChuaWdheW91bkBnbWFpbC5jb20pXG4qIFxcd2FybmluZyBkb250J3VzZSB0aGlzIHNvdXJjZSBpbiBvdGhlciBsaWJyYXJ5IHNvdXJjZS5cbiovXG5cbnZhciBTd2lwZVN0ZXBNb3ZlclBsdWdpbiA9IGZ1bmN0aW9uIChfQ29tbW9uQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoU3dpcGVTdGVwTW92ZXJQbHVnaW4sIF9Db21tb25Db21wb25lbnQyKTtcblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUuQ09NUE9ORU5UX0NPTkZJRyA9IGZ1bmN0aW9uIENPTVBPTkVOVF9DT05GSUcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNFTEVDVE9SOiB7fSxcbiAgICAgIERFRkFVTFRfQ09NUE9ORU5UX0VWRU5UOiBbXSxcbiAgICAgIERFRkFVTFRfT1BUSU9OOiB7XG4gICAgICAgICdwcmV2QnV0dG9uJzogbnVsbCxcbiAgICAgICAgJ25leHRCdXR0b24nOiBudWxsLFxuICAgICAgICAnbkR1cmF0aW9uJzogMjAwXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBTd2lwZVN0ZXBNb3ZlclBsdWdpbihlbFRhcmdldCwgaHRPcHRpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3dpcGVTdGVwTW92ZXJQbHVnaW4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21tb25Db21wb25lbnQyLmNhbGwodGhpcywgZWxUYXJnZXQsIGh0T3B0aW9uKSk7XG4gIH1cblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUuaW5pdFZhbHVlID0gZnVuY3Rpb24gaW5pdFZhbHVlKCkge1xuICAgIHRoaXMuZWxQbHVnaW5UYXJnZXQ7XG4gICAgdGhpcy5lbFByZXZCdG4gPSB0aGlzLm9wdGlvbi5wcmV2QnV0dG9uO1xuICAgIHRoaXMuZWxOZXh0QnRuID0gdGhpcy5vcHRpb24ubmV4dEJ1dHRvbjtcbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZSA9IG51bGw7XG4gIH07XG5cbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW4ucHJvdG90eXBlLnJlZ2lzdGVyRXZlbnRzID0gZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLmVsUHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgX3RoaXMzLmhhbmRsZXJDbGlja0J1dHRvbihldnQsIFwidG9MZWZ0XCIpO1xuICAgIH0pO1xuICAgIHRoaXMuZWxOZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBfdGhpczMuaGFuZGxlckNsaWNrQnV0dG9uKGV2dCwgXCJ0b1JpZ2h0XCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIFN3aXBlU3RlcE1vdmVyUGx1Z2luLnByb3RvdHlwZS5oYW5kbGVyQ2xpY2tCdXR0b24gPSBmdW5jdGlvbiBoYW5kbGVyQ2xpY2tCdXR0b24oZXZ0LCBzRGlyZWN0aW9uKSB7XG4gICAgaWYgKHRoaXMub1BhcmVudEluc3RhbmNlLmJBbmltYXRpb25pbmcpIHJldHVybjtcbiAgICB2YXIgbkN1ciA9IHRoaXMub1BhcmVudEluc3RhbmNlLmdldEN1cnJlbnRWaWV3TnVtYmVyKCk7XG4gICAgdmFyIGJDaXJjdWxhciA9IHRoaXMub1BhcmVudEluc3RhbmNlLm9wdGlvbi5iQ2lyY3VsYXI7XG5cbiAgICBpZiAoIWJDaXJjdWxhcikge1xuICAgICAgaWYgKG5DdXIgPT09IDAgJiYgc0RpcmVjdGlvbiA9PT0gXCJ0b0xlZnRcIikgcmV0dXJuO1xuICAgICAgaWYgKG5DdXIgPT09IHRoaXMub1BhcmVudEluc3RhbmNlLm5Td2lwZUVsZW1lbnRDb3VudCAtIDEgJiYgc0RpcmVjdGlvbiA9PT0gXCJ0b1JpZ2h0XCIpIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbldpZHRoID0gdGhpcy5vUGFyZW50SW5zdGFuY2UublN3aXBlV2lkdGg7XG5cbiAgICBpZiAoc0RpcmVjdGlvbiA9PT0gXCJ0b1JpZ2h0XCIpIHtcbiAgICAgIG5XaWR0aCAqPSAtMTtcbiAgICAgIG5DdXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgbkN1ci0tO1xuICAgIH1cblxuICAgIGlmIChiQ2lyY3VsYXIpIG5DdXIgPSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5yZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhcihuQ3VyKTtcblxuICAgIC8vZm9yIG5vIGFuaW1hdGlvbiwgbkR1cmF0aW9uIHNldCB6ZXJvLlxuICAgIHRoaXMub1BhcmVudEluc3RhbmNlLnJ1blN3aXBlQWN0aW9uKHRoaXMub3B0aW9uLm5EdXJhdGlvbiwgbkN1ciwgbldpZHRoKTtcbiAgfTtcblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUuc2V0RGlzcGxheU9mQnV0dG9uID0gZnVuY3Rpb24gc2V0RGlzcGxheU9mQnV0dG9uKG5DdXJyZW50UGFuZWwpIHtcbiAgICB2YXIgbk1heFBhbmVsID0gdGhpcy5vUGFyZW50SW5zdGFuY2UublN3aXBlRWxlbWVudENvdW50IC0gMTtcbiAgICBpZiAobkN1cnJlbnRQYW5lbCA9PT0gbk1heFBhbmVsKSB7XG4gICAgICB0aGlzLmVsUHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgdGhpcy5lbE5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSBpZiAobkN1cnJlbnRQYW5lbCA9PT0gMCkge1xuICAgICAgdGhpcy5lbFByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdGhpcy5lbE5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbFByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHRoaXMuZWxOZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICB9O1xuXG4gIFN3aXBlU3RlcE1vdmVyUGx1Z2luLnByb3RvdHlwZS5kb2NraW5nUGx1Z2luTWV0aG9kID0gZnVuY3Rpb24gZG9ja2luZ1BsdWdpbk1ldGhvZChvUGFyZW50KSB7XG4gICAgaWYgKCFvUGFyZW50Lm9wdGlvbi5iQ2lyY3VsYXIpIHtcbiAgICAgIG9QYXJlbnQucmVnaXN0ZXJQbHVnaW5NZXRob2Qoe1xuICAgICAgICAnRk5fQ09NUE9ORU5UX0RJRF9MT0FEJzogdGhpcy5zZXREaXNwbGF5T2ZCdXR0b24uYmluZCh0aGlzLCAwKSxcbiAgICAgICAgJ0ZOX0FGVEVSX1NXSVBFJzogdGhpcy5zZXREaXNwbGF5T2ZCdXR0b24uYmluZCh0aGlzKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMub1BhcmVudEluc3RhbmNlID0gb1BhcmVudDtcbiAgfTtcblxuICByZXR1cm4gU3dpcGVTdGVwTW92ZXJQbHVnaW47XG59KENvbW1vbkNvbXBvbmVudCk7XG5cbi8qXG4qIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuKiBDb3B5cmlnaHQgKGMpIDIwMTYgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiAqXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6ICpcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuICpcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuKiBUSEUgU09GVFdBUkUuICovXG5cbi8qIVxuKiBcXHN3aXBlX2VzNi5qcyB2MC4xXG4qIFxcY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiBcbiogXFxsaWNlbnNlIFRoaXMgcHJvamVjdCBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4qIFxcY29udHJpYnV0b3IgbmlnYXlvdW4gKG5pZ2F5b3VuQGdtYWlsLmNvbSlcbiogXFx3YXJuaW5nIGRvbnQndXNlIHRoaXMgc291cmNlIGluIG90aGVyIGxpYnJhcnkgc291cmNlLlxuKi9cblxudmFyIFN3ZWV0U3dpcGUgPSBmdW5jdGlvbiAoX0NvbW1vbkNvbXBvbmVudDMpIHtcbiAgX2luaGVyaXRzKFN3ZWV0U3dpcGUsIF9Db21tb25Db21wb25lbnQzKTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5DT01QT05FTlRfQ09ORklHID0gZnVuY3Rpb24gQ09NUE9ORU5UX0NPTkZJRygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgUExVR0lOUzogWydTd2lwZU5hdmlnYXRpb25QbHVnaW4nLCAnU3dpcGVTdGVwTW92ZXJQbHVnaW4nXSxcbiAgICAgIFNFTEVDVE9SOiB7XG4gICAgICAgIC8vaW5wdXRGaWVsZFdyYXA6ICcuaW5wdXQtd3JhcCcsIFxuICAgICAgfSxcbiAgICAgIERFRkFVTFRfQ09NUE9ORU5UX0VWRU5UOiBbJ0ZOX0JFRk9SRV9TV0lQRScsICdGTl9BRlRFUl9TV0lQRSddLFxuICAgICAgREVGQVVMVF9QTFVHSU5fRVZFTlQ6IFsnRk5fQkVGT1JFX1NXSVBFJywgJ0ZOX0FGVEVSX1NXSVBFJ10sXG4gICAgICBERUZBVUxUX09QVElPTjoge1xuICAgICAgICAnYkNpcmN1bGFyJzogZmFsc2UsXG4gICAgICAgICduRHVyYXRpb24nOiAxMDAsXG4gICAgICAgICduQmFja1dpZHRoJzogNjAsXG4gICAgICAgICduU2lkZVdpZHRoJzogMCxcbiAgICAgICAgJ25EZWNpc2lvblNsb3BlJzogMC44LFxuICAgICAgICAnbkZvcmNlZFN3aXBlVGltZSc6IDAsXG4gICAgICAgICdiU2V0dGluZ1NjcmVlbkhlaWdodCc6IGZhbHNlLFxuICAgICAgICAnYk1vdXNlRXZlbnRTdXBwb3J0JzogZmFsc2UsXG4gICAgICAgICdiVG91Y2hFdmVudFN1cHBvcnQnOiB0cnVlXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBTd2VldFN3aXBlKGVsVGFyZ2V0LCBodE9wdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTd2VldFN3aXBlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tbW9uQ29tcG9uZW50My5jYWxsKHRoaXMsIGVsVGFyZ2V0LCBodE9wdGlvbikpO1xuICB9XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuaW5pdFZhbHVlID0gZnVuY3Rpb24gaW5pdFZhbHVlKGh0T3B0aW9uKSB7XG4gICAgLy9zZXQgaGVpZ2h0IG9mIHZpZXdBcmVhXG4gICAgLy90aGlzLnNldER5bmFtaWNIZWlnaHQoMSk7XG4gICAgLy9pZih0aGlzLm9wdGlvbi5iU2V0dGluZ1NjcmVlbkhlaWdodCkgdGhpcy5lbFRhcmdldC5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgaWYgKHRoaXMub3B0aW9uLmJTZXR0aW5nU2NyZWVuSGVpZ2h0KSBfY3Uuc2V0RHluYW1pY0hlaWdodCgwLCB0aGlzLmVsVGFyZ2V0LCB0aGlzLm9wdGlvbi5iQ2lyY3VsYXIpO1xuXG4gICAgLy9zd2lwZSBjb250YWluZXIgd2lkdGhcbiAgICB0aGlzLm5Td2lwZVdpZHRoID0gX2N1LmdldFdpZHRoKHRoaXMuZWxUYXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQpOyAvL2Nhc2UuIHBvc2l0aW9uIDogc3RhdGljKGZsb2F0KVxuXG4gICAgLy9zd2lwZSBlbGVtZW50IGNvdW50IFxuICAgIHRoaXMublN3aXBlRWxlbWVudENvdW50ID0gdGhpcy5lbFRhcmdldC5jaGlsZEVsZW1lbnRDb3VudDtcblxuICAgIHZhciBiQ2lyY3VsYXIgPSB0aGlzLm9wdGlvbi5iQ2lyY3VsYXI7XG4gICAgdGhpcy5uTWF4U3dpcGVSYW5nZSA9IGJDaXJjdWxhciA/IHRoaXMublN3aXBlV2lkdGggOiAwO1xuICAgIHRoaXMubk1pblN3aXBlUmFuZ2UgPSBiQ2lyY3VsYXIgPyB0aGlzLm5Td2lwZUVsZW1lbnRDb3VudCAtIDIgOiB0aGlzLm5Td2lwZUVsZW1lbnRDb3VudCAtIDE7XG4gICAgdGhpcy5uTWluU3dpcGVSYW5nZSAqPSAtdGhpcy5uU3dpcGVXaWR0aDtcblxuICAgIHRoaXMubk1heFZhbHVlID0gdGhpcy5uTWF4U3dpcGVSYW5nZSArIHRoaXMub3B0aW9uLm5TaWRlV2lkdGg7XG4gICAgdGhpcy5uTWluVmFsdWUgPSB0aGlzLm5NaW5Td2lwZVJhbmdlIC0gdGhpcy5vcHRpb24ublNpZGVXaWR0aDtcblxuICAgIHRoaXMuYkFuaW1hdGlvbmluZyA9IGZhbHNlO1xuICAgIHRoaXMubk5leHROdW1iZXIgPSAwO1xuXG4gICAgLy9UT0RPLiDsmLXshZjsnLzroZwg67Cb7JWE7IScIO2VhOyalO2VnCDqsr3smrDrp4wgcmVzaXplIOydtOuypO2KuCDrqqjri4jthLDrp4HtlZjrj4TroZ0g6riw64ql7LaU6rCALlxuICAgIHRoaXMucmVjYWxjdWxhdGVXaWR0aCgpO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnJlZ2lzdGVyRXZlbnRzID0gZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5vcHRpb24uYlRvdWNoRXZlbnRTdXBwb3J0KSB7XG4gICAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXM0LmhhbmRsZXJUb3VjaFN0YXJ0KGV2dCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIF90aGlzNC5oYW5kbGVyVG91Y2hNb3ZlKGV2dCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXM0LmhhbmRsZXJUb3VjaEVuZChldnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9uLmJNb3VzZUV2ZW50U3VwcG9ydCkge1xuICAgICAgdGhpcy5lbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXM0LmhhbmRsZXJUb3VjaFN0YXJ0KGV2dCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIF90aGlzNC5oYW5kbGVyVG91Y2hNb3ZlKGV2dCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBfdGhpczQuaGFuZGxlclRvdWNoRW5kKGV2dCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZ2lzdGVyVHJhbnNpdGlvbkVuZCgpO1xuICB9O1xuXG4gIC8qIEV2ZW50IEhhbmxkZXIgKi9cblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5oYW5kbGVyVG91Y2hTdGFydCA9IGZ1bmN0aW9uIGhhbmRsZXJUb3VjaFN0YXJ0KGV2dCkge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5iQW5pbWF0aW9uaW5nKSByZXR1cm47XG5cbiAgICB0aGlzLmJTd2lwZSA9IHRydWU7XG4gICAgdGhpcy5iRmlyc3RUb3VjaE1vdmUgPSB0cnVlO1xuICAgIHZhciBiTW91c2VFdmVudCA9IGV2dC50eXBlLnN1YnN0cigwLCA1KSA9PT0gXCJtb3VzZVwiO1xuXG4gICAgdmFyIHBhZ2VYID0gdm9pZCAwLFxuICAgICAgICBwYWdlWSA9IHZvaWQgMDtcblxuICAgIGlmIChiTW91c2VFdmVudCkge1xuICAgICAgcGFnZVggPSBldnQucGFnZVg7XG4gICAgICBwYWdlWSA9IGV2dC5wYWdlWTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFnZVggPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICBwYWdlWSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICB9XG5cbiAgICB0aGlzLm5TdGFydFBvc1ggPSBNYXRoLmZsb29yKHBhZ2VYKTtcbiAgICB0aGlzLm5TdGFydFBvc1kgPSBNYXRoLmZsb29yKHBhZ2VZKTtcblxuICAgIHRoaXMublN0YXJ0VHJhbnNsYXRlWCA9IF9jdS5nZXRUcmFuc2xhdGUzZFgodGhpcy5lbFRhcmdldCk7XG4gICAgLy90aGlzLm5TdGFydFRyYW5zbGF0ZVggPSBfY3UuZ2V0VHJhbnNsYXRlM2RYUGVyY2VudCh0aGlzLmVsVGFyZ2V0KSAvIDEwMCAqIF9jdS5nZXRXaWR0aCh0aGlzLmVsVGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkKTtcblxuICAgIHRoaXMublRvdWNoU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5oYW5kbGVyVG91Y2hNb3ZlID0gZnVuY3Rpb24gaGFuZGxlclRvdWNoTW92ZShldnQpIHtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuYkFuaW1hdGlvbmluZykgcmV0dXJuO1xuICAgIGlmICghdGhpcy5iU3dpcGUpIHJldHVybjtcblxuICAgIHZhciBiTW91c2VFdmVudCA9IGV2dC50eXBlLnN1YnN0cigwLCA1KSA9PT0gXCJtb3VzZVwiO1xuXG4gICAgdmFyIGh0Q3VycmVudEV2dCA9IGJNb3VzZUV2ZW50ID8gZXZ0IDogZXZ0LmNoYW5nZWRUb3VjaGVzWzBdO1xuXG4gICAgdGhpcy5uTW92ZVBvc1ggPSBNYXRoLmZsb29yKGh0Q3VycmVudEV2dC5wYWdlWCk7XG4gICAgdGhpcy5uTW92ZVBvc1kgPSBNYXRoLmZsb29yKGh0Q3VycmVudEV2dC5wYWdlWSk7XG5cbiAgICAvL2RldGVjdCBhbmdsZSBcbiAgICBpZiAodGhpcy5iRmlyc3RUb3VjaE1vdmUpIHtcbiAgICAgIHZhciBuQW5nbGVEaWZmID0gTWF0aC5hYnModGhpcy5uTW92ZVBvc1kgLSB0aGlzLm5TdGFydFBvc1kpIC8gTWF0aC5hYnModGhpcy5uTW92ZVBvc1ggLSB0aGlzLm5TdGFydFBvc1gpO1xuICAgICAgdGhpcy5iU3dpcGUgPSAhIShuQW5nbGVEaWZmIDw9IHRoaXMub3B0aW9uLm5EZWNpc2lvblNsb3BlKTtcbiAgICAgIGlmICh0aGlzLmJTd2lwZSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICAgIHRoaXMublByZU1vdmVYID0gdGhpcy5uU3RhcnRQb3NYO1xuICAgIH1cblxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIG5Nb3ZlRGlmZiA9IHRoaXMubk1vdmVQb3NYIC0gdGhpcy5uUHJlTW92ZVg7XG4gICAgdmFyIG5QcmV2aW91c1ggPSAwO1xuXG4gICAgblByZXZpb3VzWCA9IF9jdS5nZXRUcmFuc2xhdGUzZFgodGhpcy5lbFRhcmdldCk7XG5cbiAgICB0aGlzLmRyYWdBcmVhKG5QcmV2aW91c1gsIG5Nb3ZlRGlmZik7XG5cbiAgICB0aGlzLm5QcmVNb3ZlWCA9IHRoaXMubk1vdmVQb3NYO1xuICAgIHRoaXMublByZU1vdmVZID0gdGhpcy5uTW92ZVBvc1g7XG5cbiAgICB0aGlzLmJGaXJzdFRvdWNoTW92ZSA9IGZhbHNlO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLmhhbmRsZXJUb3VjaEVuZCA9IGZ1bmN0aW9uIGhhbmRsZXJUb3VjaEVuZChldnQpIHtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuYkFuaW1hdGlvbmluZykgcmV0dXJuO1xuXG4gICAgaWYgKCF0aGlzLmJTd2lwZSkge1xuICAgICAgdGhpcy5iT3V0UmFuZ2VSaWdodCA9IGZhbHNlO1xuICAgICAgdGhpcy5iT3V0UmFuZ2VMZWZ0ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5XaWR0aEZvckFuaW1hdGlvbiA9IDA7XG4gICAgdmFyIG5Ub3VjaEVuZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBuRGlmZlRvdWNoVGltZSA9IG5Ub3VjaEVuZFRpbWUgLSB0aGlzLm5Ub3VjaFN0YXJ0VGltZTtcblxuICAgIHZhciBuTGFzdFRyYW5zbGF0ZVggPSBfY3UuZ2V0VHJhbnNsYXRlM2RYKHRoaXMuZWxUYXJnZXQpO1xuICAgIHZhciBuRGlmZlRyYW5zbGF0ZVggPSBuTGFzdFRyYW5zbGF0ZVggLSB0aGlzLm5TdGFydFRyYW5zbGF0ZVg7XG5cbiAgICBpZiAobkRpZmZUcmFuc2xhdGVYID09PSAwKSByZXR1cm47XG5cbiAgICB2YXIgYlN3aXBlV2lkdGggPSBmYWxzZTtcbiAgICB2YXIgYlN3aXBlVGltZSA9IGZhbHNlO1xuICAgIHZhciBiU3dpcGVHbyA9IGZhbHNlO1xuICAgIHZhciBzRGlyZWN0aW9uID0gXCJcIjtcblxuICAgIGJTd2lwZVdpZHRoID0gTWF0aC5hYnMobkRpZmZUcmFuc2xhdGVYKSA+IHRoaXMub3B0aW9uLm5CYWNrV2lkdGg7XG4gICAgaWYgKG5EaWZmVG91Y2hUaW1lIDwgdGhpcy5vcHRpb24ubkZvcmNlZFN3aXBlVGltZSkgYlN3aXBlVGltZSA9IHRydWU7XG4gICAgLy9kZWNpZGUgZGlyZWN0aW9uLlxuICAgIGlmICh0aGlzLmJPdXRSYW5nZUxlZnQgfHwgdGhpcy5iT3V0UmFuZ2VSaWdodCB8fCAhKGJTd2lwZVdpZHRoIHx8IGJTd2lwZVRpbWUpKSB7XG4gICAgICBzRGlyZWN0aW9uID0gbkRpZmZUcmFuc2xhdGVYID4gMCA/IFwibGVmdFwiIDogXCJyaWdodFwiO1xuICAgICAgbldpZHRoRm9yQW5pbWF0aW9uID0gTWF0aC5hYnMobkRpZmZUcmFuc2xhdGVYKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYlN3aXBlR28gPSB0cnVlO1xuICAgICAgc0RpcmVjdGlvbiA9IG5EaWZmVHJhbnNsYXRlWCA+IDAgPyBcInJpZ2h0XCIgOiBcImxlZnRcIjtcbiAgICAgIG5XaWR0aEZvckFuaW1hdGlvbiA9IHRoaXMublN3aXBlV2lkdGggLSBNYXRoLmFicyhuRGlmZlRyYW5zbGF0ZVgpO1xuICAgIH1cblxuICAgIHRoaXMubk5leHROdW1iZXIgPSB0aGlzLl9nZXROZXh0Vmlld051bWJlcih0aGlzLm5TdGFydFRyYW5zbGF0ZVgsIHNEaXJlY3Rpb24sIGJTd2lwZUdvKTtcbiAgICB0aGlzLm5OZXh0TnVtYmVyID0gTWF0aC5yb3VuZCh0aGlzLm5OZXh0TnVtYmVyKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbi5iQ2lyY3VsYXIpIHtcbiAgICAgIHRoaXMubk5leHROdW1iZXIgPSB0aGlzLnJlQWRqdXN0TmV4dE51bWJlckZvckNpcmN1bGFyKHRoaXMubk5leHROdW1iZXIpO1xuICAgIH1cblxuICAgIGlmIChzRGlyZWN0aW9uID09PSAnbGVmdCcpIG5XaWR0aEZvckFuaW1hdGlvbiA9IC1uV2lkdGhGb3JBbmltYXRpb247XG5cbiAgICB0aGlzLnJ1blN3aXBlQWN0aW9uKHRoaXMub3B0aW9uLm5EdXJhdGlvbiwgdGhpcy5uTmV4dE51bWJlciwgbldpZHRoRm9yQW5pbWF0aW9uKTtcblxuICAgIC8vVE9ETy4gbWFrZSByZXNldCBtZXRob2QgXG4gICAgdGhpcy5iT3V0UmFuZ2VSaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuYk91dFJhbmdlTGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuYlN3aXBlID0gZmFsc2U7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucmVBZGp1c3ROZXh0TnVtYmVyRm9yQ2lyY3VsYXIgPSBmdW5jdGlvbiByZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhcihuTmV4dE51bWJlcikge1xuICAgIGlmIChuTmV4dE51bWJlciA9PT0gLTEpIHtcbiAgICAgIG5OZXh0TnVtYmVyID0gdGhpcy5uU3dpcGVFbGVtZW50Q291bnQgLSAzO1xuICAgIH0gZWxzZSBpZiAobk5leHROdW1iZXIgPT09IHRoaXMublN3aXBlRWxlbWVudENvdW50IC0gMikge1xuICAgICAgbk5leHROdW1iZXIgPSAwO1xuICAgIH0gZWxzZSB7fVxuICAgIHJldHVybiBuTmV4dE51bWJlcjtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5ydW5Td2lwZUFjdGlvbiA9IGZ1bmN0aW9uIHJ1blN3aXBlQWN0aW9uKG5EdXJhdGlvbiwgbk5leHROdW1iZXIsIG5XaWR0aEZvckFuaW1hdGlvbikge1xuICAgIGlmICh0eXBlb2YgbldpZHRoRm9yQW5pbWF0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB2YXIgbldpZHRoID0gdGhpcy5uU3dpcGVXaWR0aDtcbiAgICAgIHZhciBuRGlmZiA9IHRoaXMuZ2V0Q3VycmVudFZpZXdOdW1iZXIoKSAtIG5OZXh0TnVtYmVyO1xuICAgICAgbldpZHRoRm9yQW5pbWF0aW9uID0gbkRpZmYgKiBuV2lkdGg7XG4gICAgfVxuICAgIHRoaXMuc2V0TmV4dE51bWJlcihuTmV4dE51bWJlcik7XG4gICAgX0NvbW1vbkNvbXBvbmVudDMucHJvdG90eXBlLnJ1bkN1c3RvbUZuLmNhbGwodGhpcywgJ1VTRVInLCAnRk5fQkVGT1JFX1NXSVBFJywgbk5leHROdW1iZXIpO1xuICAgIF9Db21tb25Db21wb25lbnQzLnByb3RvdHlwZS5ydW5DdXN0b21Gbi5jYWxsKHRoaXMsICdQTFVHSU4nLCAnRk5fQkVGT1JFX1NXSVBFJywgbk5leHROdW1iZXIpO1xuICAgIHRoaXMucnVuVHJhbnNpdGlvbih0aGlzLmVsVGFyZ2V0LCBuV2lkdGhGb3JBbmltYXRpb24sIG5EdXJhdGlvbiAvIDEwMDApOyAvL3RvIHNlY29uZC5cbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5fcmVzdG9yZVRyYW5zZm9ybVhQZXJjZW50ID0gZnVuY3Rpb24gX3Jlc3RvcmVUcmFuc2Zvcm1YUGVyY2VudChuUGFuZWxJbmRleCkge1xuICAgIHZhciBuUGFuZWxDb3VudCA9IHRoaXMublN3aXBlRWxlbWVudENvdW50IC0gMztcbiAgICB2YXIgblBhbmVsV2lkdGggPSB0aGlzLm5Td2lwZVdpZHRoO1xuICAgIHZhciBuTW92ZVZhbHVlID0gblBhbmVsQ291bnQgKiBuUGFuZWxXaWR0aDsgLy9yZWZzIDogY2xvbmVkTm9kZSBpcyAyLlxuXG4gICAgaWYgKG5QYW5lbEluZGV4ID09PSAwIHx8IG5QYW5lbEluZGV4ID4gblBhbmVsQ291bnQpIHtcbiAgICAgIF9jdS5zZXRUcmFuc2xhdGUzZFhQZXJjZW50KHRoaXMuZWxUYXJnZXQsIDApO1xuICAgIH1cbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5yZWdpc3RlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25FbmQoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgc1RTRSA9IF9jdS5nZXRDU1NUcmFuc2l0aW9uRW5kKCk7XG5cbiAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoc1RTRSwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICB2YXIgc1RTID0gX2N1LmdldENTU05hbWUoJ3RyYW5zaXRpb24nKTtcbiAgICAgIF90aGlzNS5lbFRhcmdldC5zdHlsZVtzVFNdID0gXCJub25lXCI7XG5cbiAgICAgIF9jdS5zZXRUcmFuc2xhdGUzZFhQZXJjZW50KF90aGlzNS5lbFRhcmdldCwgX3RoaXM1Lm5OZXh0TnVtYmVyICogLTEwMCk7XG5cbiAgICAgIGlmIChfdGhpczUub3B0aW9uLmJDaXJjdWxhcikge1xuICAgICAgICBfdGhpczUuX3Jlc3RvcmVUcmFuc2Zvcm1YUGVyY2VudChfdGhpczUubk5leHROdW1iZXIpO1xuICAgICAgfVxuXG4gICAgICBfQ29tbW9uQ29tcG9uZW50My5wcm90b3R5cGUucnVuQ3VzdG9tRm4uY2FsbChfdGhpczUsICdVU0VSJywgJ0ZOX0FGVEVSX1NXSVBFJywgX3RoaXM1Lm5OZXh0TnVtYmVyKTtcbiAgICAgIF9Db21tb25Db21wb25lbnQzLnByb3RvdHlwZS5ydW5DdXN0b21Gbi5jYWxsKF90aGlzNSwgJ1BMVUdJTicsICdGTl9BRlRFUl9TV0lQRScsIF90aGlzNS5uTmV4dE51bWJlcik7XG5cbiAgICAgIGlmIChfdGhpczUub3B0aW9uLmJTZXR0aW5nU2NyZWVuSGVpZ2h0KSBfY3Uuc2V0RHluYW1pY0hlaWdodChfdGhpczUubk5leHROdW1iZXIsIF90aGlzNS5lbFRhcmdldCwgX3RoaXM1Lm9wdGlvbi5iQ2lyY3VsYXIpO1xuXG4gICAgICBfdGhpczUubk5leHROdW1iZXIgPSAwO1xuXG4gICAgICBfdGhpczUuYkFuaW1hdGlvbmluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnNldE5leHROdW1iZXIgPSBmdW5jdGlvbiBzZXROZXh0TnVtYmVyKG5OZXh0TnVtYmVyKSB7XG4gICAgdGhpcy5uTmV4dE51bWJlciA9IG5OZXh0TnVtYmVyO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLmdldEN1cnJlbnRWaWV3TnVtYmVyID0gZnVuY3Rpb24gZ2V0Q3VycmVudFZpZXdOdW1iZXIoKSB7XG4gICAgdmFyIG5JbmRleCA9IE1hdGguYWJzKF9jdS5nZXRUcmFuc2xhdGUzZFgodGhpcy5lbFRhcmdldCkpIC8gdGhpcy5uU3dpcGVXaWR0aDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuSW5kZXgpO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLl9nZXROZXh0Vmlld051bWJlciA9IGZ1bmN0aW9uIF9nZXROZXh0Vmlld051bWJlcihuUG9zLCBzRGlyZWN0aW9uLCBiU3dpcGVHbykge1xuICAgIHZhciBuSW5kZXggPSBNYXRoLnJvdW5kKC0oblBvcyAvIHRoaXMublN3aXBlV2lkdGgpKTtcbiAgICBpZiAoIWJTd2lwZUdvKSByZXR1cm4gbkluZGV4O1xuICAgIHJldHVybiBzRGlyZWN0aW9uID09PSBcImxlZnRcIiA/ICsrbkluZGV4IDogLS1uSW5kZXg7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuZHJhZ0FyZWEgPSBmdW5jdGlvbiBkcmFnQXJlYShuUHJlWCwgbk1vdmVEaWZmKSB7XG4gICAgdGhpcy5iT3V0UmFuZ2VSaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuYk91dFJhbmdlTGVmdCA9IGZhbHNlO1xuXG4gICAgLy9jaGVjayB2YWxpZCBzd2lwZSByYW5nZS4gXG5cbiAgICAvL3doZW4gZ28gdG8gbGVmdCBvbiBsZWZ0LXNpZGUuXG4gICAgaWYgKG5QcmVYID49IHRoaXMubk1heFN3aXBlUmFuZ2UpIHRoaXMuYk91dFJhbmdlTGVmdCA9IHRydWU7XG5cbiAgICAvL3doZW4gZ28gdG8gcmlnaHQgb24gcmlnaHQtc2lkZS5cbiAgICBpZiAoblByZVggPD0gdGhpcy5uTWluU3dpcGVSYW5nZSkgdGhpcy5iT3V0UmFuZ2VSaWdodCA9IHRydWU7XG5cbiAgICB2YXIgbk5ld1ZhbHVlID0gblByZVggKyBuTW92ZURpZmY7XG5cbiAgICBpZiAobk5ld1ZhbHVlID4gdGhpcy5uTWF4VmFsdWUpIG5OZXdWYWx1ZSA9IHRoaXMubk1heFZhbHVlO1xuICAgIGlmIChuTmV3VmFsdWUgPCB0aGlzLm5NaW5WYWx1ZSkgbk5ld1ZhbHVlID0gdGhpcy5uTWluVmFsdWU7XG5cbiAgICBfY3Uuc2V0VHJhbnNsYXRlM2RYKHRoaXMuZWxUYXJnZXQsIG5OZXdWYWx1ZSk7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucnVuVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIHJ1blRyYW5zaXRpb24oZWxUYXJnZXQsIG5EaXN0YW5jZSwgbkR1cmF0aW9uKSB7XG4gICAgdGhpcy5iQW5pbWF0aW9uaW5nID0gdHJ1ZTtcblxuICAgIHZhciBuUHJldmlvdXNUcmFuc2xhdGVYID0gX2N1LmdldFRyYW5zbGF0ZTNkWChlbFRhcmdldCk7XG5cbiAgICB2YXIgc1RTID0gX2N1LmdldENTU05hbWUoJ3RyYW5zaXRpb24nKTtcbiAgICB2YXIgc1RGID0gX2N1LmdldENTU05hbWUoJ3RyYW5zZm9ybScpO1xuICAgIHZhciBzVmFsdWUgPSBcIlwiO1xuXG4gICAgaWYgKHNURiA9PT0gXCJ3ZWJraXRUcmFuc2Zvcm1cIikgc1ZhbHVlID0gXCItd2Via2l0LXRyYW5zZm9ybVwiO2Vsc2UgaWYgKHNURiA9PT0gXCJ0cmFuc2Zvcm1cIikgc1ZhbHVlID0gXCJ0cmFuc2Zvcm1cIjtlbHNlIHt9XG5cbiAgICBlbFRhcmdldC5zdHlsZVtzVFNdID0gc1ZhbHVlICsgXCIgXCIgKyBuRHVyYXRpb24gKyBcInNcIjtcbiAgICBlbFRhcmdldC5zdHlsZVtzVEZdID0gJ3RyYW5zbGF0ZTNkKCcgKyAoblByZXZpb3VzVHJhbnNsYXRlWCArIG5EaXN0YW5jZSkgKyAncHgsIDAsIDApJztcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5ydW5BdXRvQW5pbWF0aW9uID0gZnVuY3Rpb24gcnVuQXV0b0FuaW1hdGlvbihzRGlyZWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuYkFuaW1hdGlvbmluZykgcmV0dXJuO1xuICAgIHZhciBuQ3VyID0gdGhpcy5nZXRDdXJyZW50Vmlld051bWJlcigpO1xuICAgIHZhciBuV2lkdGggPSB0aGlzLm5Td2lwZVdpZHRoO1xuXG4gICAgaWYgKHNEaXJlY3Rpb24gPT09IFwidG9SaWdodFwiKSB7XG4gICAgICBuV2lkdGggKj0gLTE7XG4gICAgICBuQ3VyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5DdXItLTtcbiAgICB9XG5cbiAgICBuQ3VyID0gdGhpcy5yZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhcihuQ3VyKTtcblxuICAgIHRoaXMucnVuU3dpcGVBY3Rpb24odGhpcy5vcHRpb24ubkR1cmF0aW9uLCBuQ3VyLCBuV2lkdGgpO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnJlY2FsY3VsYXRlV2lkdGggPSBmdW5jdGlvbiByZWNhbGN1bGF0ZVdpZHRoKCkge1xuICAgIHZhciByZXNpemVydW5uZXIgPSBmYWxzZTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICBpZiAocmVzaXplcnVubmVyKSByZXR1cm47XG4gICAgICByZXNpemVydW5uZXIgPSB0cnVlO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM2Lm5Td2lwZVdpZHRoID0gX2N1LmdldFdpZHRoKF90aGlzNi5lbFRhcmdldC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIHJlc2l6ZXJ1bm5lciA9IGZhbHNlO1xuICAgICAgfSwgMTAwKTtcbiAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gU3dlZXRTd2lwZTtcbn0oQ29tbW9uQ29tcG9uZW50KTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIG1vZHVsZS5leHBvcnRzID0ge1xuICBTd2VldFN3aXBlOiBTd2VldFN3aXBlLFxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW46IFN3aXBlTmF2aWdhdGlvblBsdWdpbixcbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW46IFN3aXBlU3RlcE1vdmVyUGx1Z2luXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpcGVfbWVyZ2VfZXM1LmpzLm1hcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9zd2lwZV9tZXJnZV9lczUuanMiLCIoZnVuY3Rpb24oc2VsZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfVxuXG4gIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gICAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gICAgXVxuXG4gICAgdmFyIGlzRGF0YVZpZXcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICAgIH1cblxuICAgIHZhciBpc0FycmF5QnVmZmVyVmlldyA9IEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSsnLCcrdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KVxuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpXG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICBib2R5LnRyaW0oKS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgcmF3SGVhZGVycy5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy5zdGF0dXMgPSAnc3RhdHVzJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXMgOiAyMDBcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfVxuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2VcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gICAgfSlcbiAgfVxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiaW1wb3J0ICogYXMgU3dpcGUgZnJvbSAnLi9saWIvc3dpcGVfbWVyZ2VfZXM1LmpzJztcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICcuL2NvbW1vbi5qcyc7XG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XG5cblxuZnVuY3Rpb24gaW5pdFN3aXBlTW9kdWxlKCkge1xuXHRjb25zdCBlbFN3YXBXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXN1YWxfaW1nXCIpO1xuXHRjb25zdCBvTXlzd2lwZSA9IG5ldyBTd2lwZS5Td2VldFN3aXBlKCBlbFN3YXBXcmFwLCB7XG5cdFx0J2JDaXJjdWxhcicgOiB0cnVlLFxuICAgICduRHVyYXRpb24nIDogMzAwLCAgLy9kZWZhdWx0IDEwMFxuICAgICduQmFja1dpZHRoJyA6IDYwLCAgLy9kZWZhdWx0IDYwXG4gICAgJ25TaWRlV2lkdGgnIDogMjAsICAvL2RlZmF1bHQgMFxuICAgICduRGVjaXNpb25TbG9wZScgOiAwLjgsIC8vZGVmYXVsdCAwLjhcbiAgICAnbkZvcmNlZFN3aXBlVGltZScgOiAxMDAsIC8vZGVmYXVsdCAwXG4gICAgJ2JTZXR0aW5nU2NyZWVuSGVpZ2h0JzogZmFsc2UsXG4gICAgJ2JNb3VzZUV2ZW50U3VwcG9ydCcgOiB0cnVlXG4gIH0pO1xuXG5cdG9NeXN3aXBlLnJlZ2lzdGVyVXNlck1ldGhvZCh7XG5cdFx0J0ZOX0JFRk9SRV9TV0lQRSc6IGZ1bmN0aW9uKG4pe30sXG5cdFx0J0ZOX0FGVEVSX1NXSVBFJzogZnVuY3Rpb24obikge1xuXHRcdFx0Y29uc3QgZWxOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZV9wYWdpbmF0aW9uIC5udW06bnRoLWNoaWxkKDEpXCIpO1xuXHRcdFx0ZWxOdW0uaW5uZXJUZXh0ID0gbisxO1xuXHRcdH0sXG5cdFx0J0ZOX0NPTVBPTkVOVF9ESURfTE9BRCcgOiBmdW5jdGlvbigpe31cblx0fSk7XG5cblx0b015c3dpcGUub25QbHVnaW5zKFtcblx0e1xuXHRcdCduYW1lJyAgICAgIDogJ1N3aXBlU3RlcE1vdmVyUGx1Z2luJyxcblx0XHQnb3B0aW9uJyAgICA6IHtcblx0XHRcdCdwcmV2QnV0dG9uJyA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX3ByZXZcIiksXG5cdFx0XHQnbmV4dEJ1dHRvbicgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9ueHRcIiksXG5cdFx0XHQnbkR1cmF0aW9uJzogMTAwXG5cdFx0fSxcblx0XHQndXNlck1ldGhvZCcgOiB7fSxcblx0XHQnb2JqJyA6IFN3aXBlLlN3aXBlU3RlcE1vdmVyUGx1Z2luXG5cdH1dKTtcblxufVxuXG4vKiBsYXllciBvcGVuIC0gY2xvc2UgKi9cblxuZnVuY3Rpb24gdG9nZ2xlRGV0YWlsSW5mbygpIHtcblx0Y29uc3QgZWxNb3JlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmtfbW9yZVwiKTtcblx0Y29uc3QgZWxTdG9yZV9kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yZV9kZXRhaWxzXCIpO1xuXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxNb3JlcywgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoe2N1cnJlbnRUYXJnZXR9KSA9PiB7XG5cblx0XHRcdGlmKCBjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIl9vcGVuXCIpKSBjdXJyZW50VGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0ZWxzZSBjdXJyZW50VGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXHRcdFx0ZWxTdG9yZV9kZXRhaWxzLmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZTNcIik7XG5cdFx0XHRjdXJyZW50VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuXHRcdH0sZmFsc2UpXG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlZ1Jlc2VydmVMaW5rKCkge1xuXHRjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmtfYnRuXCIpO1xuXHRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuXHRcdGxvY2F0aW9uLmhyZWYgPSBcIi4vcmVzZXJ2ZS5odG1sXCI7XG5cdH0sIGZhbHNlKTtcbn1cblxuXG5mdW5jdGlvbiBpbml0VGFiVG9nZ2xlKCkge1xuXHRjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb190YWJfbHN0XCIpO1xuXHRjb25zdCBkZXRhaWxfYXJlYV93cmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxfYXJlYV93cmFwXCIpO1xuXHRjb25zdCBkZXRhaWxfbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbF9sb2NhdGlvblwiKTtcblxuXHR1bC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuXHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGxpID0gZXZ0LnRhcmdldC5jbG9zZXN0KCdsaScpO1xuXG5cdFx0aWYobGkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX3BhdGhcIikpIHtcblx0XHRcdGRldGFpbF9hcmVhX3dyYXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cdFx0XHRkZXRhaWxfbG9jYXRpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG5cdFx0XHRsaS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRldGFpbF9hcmVhX3dyYXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG5cdFx0XHRkZXRhaWxfbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cdFx0XHRsaS5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHR9XG5cblx0XHRsaS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHR9KVxufVxuXG5mdW5jdGlvbiBjaGVja0xvZ2luRnJvbVN0b3JhZ2UoKSB7XG5cdGNvbnN0IGVtYWlsID0gY29tbW9uLmdldEVtYWlsKCk7XG5cdGNvbnN0IGVsVmlld1Jlc2VydmF0aW9uICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlld1Jlc2VydmF0aW9uXCIpO1xuXHRpZihlbWFpbCAhPT0gbnVsbCkgZWxWaWV3UmVzZXJ2YXRpb24uaW5uZXJUZXh0ID0gZW1haWw7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGV2dCA9PiB7XG5cdGluaXRTd2lwZU1vZHVsZSgpO1xuXHR0b2dnbGVEZXRhaWxJbmZvKCk7XG5cdHJlZ1Jlc2VydmVMaW5rKCk7XG5cdGluaXRUYWJUb2dnbGUoKTtcblx0Y2hlY2tMb2dpbkZyb21TdG9yYWdlKCk7XG59KTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGV0YWlsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==