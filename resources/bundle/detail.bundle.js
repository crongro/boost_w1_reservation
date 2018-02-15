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

function getIdFromUrl() {
	return location.search.slice(1);
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

function setInitialContents() {
	var id = getIdFromUrl();

	//Title image
	var imgs = document.querySelectorAll(".visual_img li > img");
	imgs.forEach(function (img) {
		return img.src = 'http://211.249.62.123/productImages/' + id + '?type=ma';
	});

	var titleTexts = document.querySelectorAll(".visual_txt_tit");
	var description = document.querySelector(".dsc");

	getData('http://211.249.62.123/api/products/' + id, function (result) {
		titleTexts.forEach(function (ele) {
			return ele.innerText = result.product.description;
		});
		description.innerHTML = result.product.content;
	});
}

document.addEventListener("DOMContentLoaded", function (evt) {
	initSwipeModule();
	toggleDetailInfo();
	regReserveLink();
	initTabToggle();
	checkLoginFromStorage();
	setInitialContents();
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWE3NjIyM2Q4OTBjNWY0MDkzOTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N3aXBlX21lcmdlX2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwuanMiXSwibmFtZXMiOlsiZ2V0RW1haWwiLCJzRW1haWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJBcnJheSIsImlzQXJyYXkiLCJpIiwiYXJyMiIsImxlbmd0aCIsImZyb20iLCJfZGVmYXVsdHMiLCJkZWZhdWx0cyIsImtleXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwia2V5IiwidmFsdWUiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ1bmRlZmluZWQiLCJkZWZpbmVQcm9wZXJ0eSIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsImNhbGwiLCJSZWZlcmVuY2VFcnJvciIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsIlR5cGVFcnJvciIsImNyZWF0ZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsInNldFByb3RvdHlwZU9mIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9jdSIsImdldEZuTmFtZSIsImZuIiwic05hbWUiLCJuYW1lIiwidG9TdHJpbmciLCJtYXRjaCIsInNldFRyYW5zbGF0ZTNkWCIsImVsZSIsIm5WYWx1ZSIsInNURiIsImdldENTU05hbWUiLCJzdHlsZSIsInNldFRyYW5zbGF0ZTNkWFBlcmNlbnQiLCJnZXRXaWR0aCIsIm5XaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJodENhY2hlRGF0YSIsIl9odE5hbWVTZXQiLCJhTmFtZUxpc3QiLCJpc0V4aXN0IiwibGVuIiwiZG9jdW1lbnQiLCJib2R5IiwiZ2V0Q2hpbGRPcmRlciIsImVsQ2hpbGQiLCJlbFBhcmVudCIsInBhcmVudE5vZGUiLCJuSW5kZXgiLCJpbmRleE9mIiwiY2hpbGRyZW4iLCJnZXRUcmFuc2xhdGUzZFgiLCJzUHJlQ3NzIiwiblByZVgiLCJyZXBsYWNlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJnZXRUcmFuc2xhdGUzZFhQZXJjZW50IiwiZ2V0Q1NTVHJhbnNpdGlvbkVuZCIsInNUUyIsInNUU0UiLCJzZXREeW5hbWljSGVpZ2h0Iiwibk5leHROdW1iZXIiLCJ0YXJnZXQiLCJiQ2lyY3VsYXIiLCJlbEN1cnJlbnQiLCJuSGVpZ2h0IiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiaGVpZ2h0Iiwic2V0Q1NTIiwiZWwiLCJzaG93TGF5ZXIiLCJkaXNwbGF5IiwiY2xvc2VMYXllciIsImRhdGEiLCJfYSIsImlzRnVuY3Rpb24iLCJDb21tb25Db21wb25lbnQiLCJlbFRhcmdldCIsImh0T3B0aW9uIiwiaW5pdCIsInNldEluaXRWYWx1ZSIsInNldE9wdGlvbiIsIl9odERlZmF1bHRPcHRpb24iLCJvcHRpb24iLCJpbml0VmFsdWUiLCJyZWdpc3RlckV2ZW50cyIsIkRFRkFVTFRfQ09SRV9FVkVOVCIsIl9kIiwiQ09NUE9ORU5UX0NPTkZJRyIsImJNYWluQ29tcG9uZW50IiwiUExVR0lOUyIsIkRFRkFVTFRfT1BUSU9OIiwiYU15UGx1Z2luTmFtZSIsImh0RGVmYXVsdEZuIiwiZ2V0RGVmYXVsdENhbGxiYWNrTGlzdCIsImNvbmNhdCIsIkRFRkFVTFRfQ09NUE9ORU5UX0VWRU5UIiwiaHREZWZhdWx0UGx1Z2luRm4iLCJERUZBVUxUX1BMVUdJTl9FVkVOVCIsImh0VXNlckZuIiwiaHRQbHVnaW5GbiIsInJlZ2lzdGVyVXNlck1ldGhvZCIsImh0Rm4iLCJyZWdpc3RlclBsdWdpbk1ldGhvZCIsImFwcGVuZFBsdWdpbk1ldGhvZCIsIm9uUGx1Z2lucyIsImFQbHVnaW5MaXN0IiwiaW5pdFBsdWdpbnMiLCJjb21wb25lbnREaWRMb2FkZWQiLCJodFZhbHVlIiwiaHREZWZhdWx0VmFsdWUiLCJodFN0b3JhZ2UiLCJfdGhpcyIsImZvckVhY2giLCJ2IiwicHVzaCIsImFGbiIsIl90aGlzMiIsIm9QYXJlbnQiLCJvUGx1Z2luIiwidXNlck1ldGhvZCIsIl9pbmplY3RQYXJlbnRPYmplY3QiLCJydW5DdXN0b21GbiIsInR5cGUiLCJldmVudG5hbWUiLCJhcmdzIiwic2xpY2UiLCJhcmd1bWVudHMiLCJyZXR1cm5WYWx1ZSIsIl9odFVzZXJGbiIsImFwcGx5Iiwib0NoaWxkIiwiZG9ja2luZ1BsdWdpbk1ldGhvZCIsIlN3aXBlTmF2aWdhdGlvblBsdWdpbiIsIl9Db21tb25Db21wb25lbnQiLCJTRUxFQ1RPUiIsImVsUGx1Z2luVGFyZ2V0IiwiZWxOYXZpV3JhcCIsIm9QYXJlbnRJbnN0YW5jZSIsIm1vdmVTd2lwZUFyZWEiLCJsaXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGhhdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsIm1vdmVwYXJlbnRTd2lwZVBhbmVsIiwiYk1vdXNlRXZlbnRTdXBwb3J0IiwiX2kiLCJuU3dpcGVXaWR0aCIsIm5DaGlsZE9yZGVyIiwibkRpZmYiLCJnZXRDdXJyZW50Vmlld051bWJlciIsIm5Nb3ZlVmFsdWUiLCJydW5Td2lwZUFjdGlvbiIsIm5EdXJhdGlvbiIsImhpZ2hsaWdodFNlbGVjdGVkTEkiLCJuU2VsZWN0ZWRDb3VudCIsIl9saSIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxldGVkQ2xhc3NOYW1lIiwiX2N1ckNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImJpbmQiLCJGTl9BRlRFUl9TV0lQRSIsIlN3aXBlU3RlcE1vdmVyUGx1Z2luIiwiX0NvbW1vbkNvbXBvbmVudDIiLCJlbFByZXZCdG4iLCJwcmV2QnV0dG9uIiwiZWxOZXh0QnRuIiwibmV4dEJ1dHRvbiIsIl90aGlzMyIsImV2dCIsImhhbmRsZXJDbGlja0J1dHRvbiIsInNEaXJlY3Rpb24iLCJiQW5pbWF0aW9uaW5nIiwibkN1ciIsIm5Td2lwZUVsZW1lbnRDb3VudCIsInJlQWRqdXN0TmV4dE51bWJlckZvckNpcmN1bGFyIiwic2V0RGlzcGxheU9mQnV0dG9uIiwibkN1cnJlbnRQYW5lbCIsIm5NYXhQYW5lbCIsIlN3ZWV0U3dpcGUiLCJfQ29tbW9uQ29tcG9uZW50MyIsImJTZXR0aW5nU2NyZWVuSGVpZ2h0IiwiY2hpbGRFbGVtZW50Q291bnQiLCJuTWF4U3dpcGVSYW5nZSIsIm5NaW5Td2lwZVJhbmdlIiwibk1heFZhbHVlIiwiblNpZGVXaWR0aCIsIm5NaW5WYWx1ZSIsInJlY2FsY3VsYXRlV2lkdGgiLCJfdGhpczQiLCJiVG91Y2hFdmVudFN1cHBvcnQiLCJoYW5kbGVyVG91Y2hTdGFydCIsImhhbmRsZXJUb3VjaE1vdmUiLCJoYW5kbGVyVG91Y2hFbmQiLCJyZWdpc3RlclRyYW5zaXRpb25FbmQiLCJzdG9wUHJvcGFnYXRpb24iLCJiU3dpcGUiLCJiRmlyc3RUb3VjaE1vdmUiLCJiTW91c2VFdmVudCIsInN1YnN0ciIsInBhZ2VYIiwicGFnZVkiLCJjaGFuZ2VkVG91Y2hlcyIsIm5TdGFydFBvc1giLCJNYXRoIiwiZmxvb3IiLCJuU3RhcnRQb3NZIiwiblN0YXJ0VHJhbnNsYXRlWCIsIm5Ub3VjaFN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJodEN1cnJlbnRFdnQiLCJuTW92ZVBvc1giLCJuTW92ZVBvc1kiLCJuQW5nbGVEaWZmIiwiYWJzIiwibkRlY2lzaW9uU2xvcGUiLCJuUHJlTW92ZVgiLCJwcmV2ZW50RGVmYXVsdCIsIm5Nb3ZlRGlmZiIsIm5QcmV2aW91c1giLCJkcmFnQXJlYSIsIm5QcmVNb3ZlWSIsImJPdXRSYW5nZVJpZ2h0IiwiYk91dFJhbmdlTGVmdCIsIm5XaWR0aEZvckFuaW1hdGlvbiIsIm5Ub3VjaEVuZFRpbWUiLCJuRGlmZlRvdWNoVGltZSIsIm5MYXN0VHJhbnNsYXRlWCIsIm5EaWZmVHJhbnNsYXRlWCIsImJTd2lwZVdpZHRoIiwiYlN3aXBlVGltZSIsImJTd2lwZUdvIiwibkJhY2tXaWR0aCIsIm5Gb3JjZWRTd2lwZVRpbWUiLCJfZ2V0TmV4dFZpZXdOdW1iZXIiLCJyb3VuZCIsInNldE5leHROdW1iZXIiLCJydW5UcmFuc2l0aW9uIiwiX3Jlc3RvcmVUcmFuc2Zvcm1YUGVyY2VudCIsIm5QYW5lbEluZGV4IiwiblBhbmVsQ291bnQiLCJuUGFuZWxXaWR0aCIsIl90aGlzNSIsIm5Qb3MiLCJuTmV3VmFsdWUiLCJuRGlzdGFuY2UiLCJuUHJldmlvdXNUcmFuc2xhdGVYIiwic1ZhbHVlIiwicnVuQXV0b0FuaW1hdGlvbiIsInJlc2l6ZXJ1bm5lciIsIndpbmRvdyIsIl90aGlzNiIsInNldFRpbWVvdXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiU3dpcGUiLCJjb21tb24iLCJpbml0U3dpcGVNb2R1bGUiLCJlbFN3YXBXcmFwIiwib015c3dpcGUiLCJuIiwiZWxOdW0iLCJpbm5lclRleHQiLCJ0b2dnbGVEZXRhaWxJbmZvIiwiZWxNb3JlcyIsImVsU3RvcmVfZGV0YWlscyIsImVsZW1lbnQiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm5leHRFbGVtZW50U2libGluZyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJ0b2dnbGUiLCJyZWdSZXNlcnZlTGluayIsImxvY2F0aW9uIiwiaHJlZiIsImluaXRUYWJUb2dnbGUiLCJ1bCIsImRldGFpbF9hcmVhX3dyYXAiLCJkZXRhaWxfbG9jYXRpb24iLCJsaSIsImNsb3Nlc3QiLCJhZGQiLCJyZW1vdmUiLCJjaGVja0xvZ2luRnJvbVN0b3JhZ2UiLCJlbWFpbCIsImVsVmlld1Jlc2VydmF0aW9uIiwiZ2V0SWRGcm9tVXJsIiwic2VhcmNoIiwiZ2V0RGF0YSIsImFwaSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNhdGNoIiwiZXgiLCJjb25zb2xlIiwibG9nIiwic2V0SW5pdGlhbENvbnRlbnRzIiwiaWQiLCJpbWdzIiwiaW1nIiwic3JjIiwidGl0bGVUZXh0cyIsImRlc2NyaXB0aW9uIiwicmVzdWx0IiwicHJvZHVjdCIsImlubmVySFRNTCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQSxTQUFTQSxRQUFULEdBQXFCO0FBQ3BCLEtBQUlDLFNBQVNDLGFBQWFDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBYjtBQUNBLEtBQUdGLFdBQVcsSUFBZCxFQUFvQixPQUFPQSxNQUFQO0FBQ3BCLFFBQU8sSUFBUDtBQUNBOztRQUVPRCxRLEdBQUFBLFE7Ozs7Ozs7QUNOUjs7OztBQUVBLElBQUlJLFVBQVUsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUFnQyxTQUFPQSxPQUFPQyxRQUFkLE1BQTJCLFFBQTNELEdBQXNFLFVBQVVDLEdBQVYsRUFBZTtBQUFFLGdCQUFjQSxHQUFkLDBDQUFjQSxHQUFkO0FBQW9CLENBQTNHLEdBQThHLFVBQVVBLEdBQVYsRUFBZTtBQUFFLFNBQU9BLE9BQU8sT0FBT0YsTUFBUCxLQUFrQixVQUF6QixJQUF1Q0UsSUFBSUMsV0FBSixLQUFvQkgsTUFBM0QsSUFBcUVFLFFBQVFGLE9BQU9JLFNBQXBGLEdBQWdHLFFBQWhHLFVBQWtIRixHQUFsSCwwQ0FBa0hBLEdBQWxILENBQVA7QUFBK0gsQ0FBNVE7O0FBRUEsU0FBU0csa0JBQVQsQ0FBNEJDLEdBQTVCLEVBQWlDO0FBQUUsTUFBSUMsTUFBTUMsT0FBTixDQUFjRixHQUFkLENBQUosRUFBd0I7QUFBRSxTQUFLLElBQUlHLElBQUksQ0FBUixFQUFXQyxPQUFPSCxNQUFNRCxJQUFJSyxNQUFWLENBQXZCLEVBQTBDRixJQUFJSCxJQUFJSyxNQUFsRCxFQUEwREYsR0FBMUQsRUFBK0Q7QUFBRUMsV0FBS0QsQ0FBTCxJQUFVSCxJQUFJRyxDQUFKLENBQVY7QUFBbUIsS0FBQyxPQUFPQyxJQUFQO0FBQWMsR0FBN0gsTUFBbUk7QUFBRSxXQUFPSCxNQUFNSyxJQUFOLENBQVdOLEdBQVgsQ0FBUDtBQUF5QjtBQUFFOztBQUVuTSxTQUFTTyxTQUFULENBQW1CWCxHQUFuQixFQUF3QlksUUFBeEIsRUFBa0M7QUFDaEMsTUFBSUMsT0FBT0MsT0FBT0MsbUJBQVAsQ0FBMkJILFFBQTNCLENBQVgsQ0FBZ0QsS0FBSyxJQUFJTCxJQUFJLENBQWIsRUFBZ0JBLElBQUlNLEtBQUtKLE1BQXpCLEVBQWlDRixHQUFqQyxFQUFzQztBQUNwRixRQUFJUyxNQUFNSCxLQUFLTixDQUFMLENBQVYsQ0FBa0IsSUFBSVUsUUFBUUgsT0FBT0ksd0JBQVAsQ0FBZ0NOLFFBQWhDLEVBQTBDSSxHQUExQyxDQUFaLENBQTJELElBQUlDLFNBQVNBLE1BQU1FLFlBQWYsSUFBK0JuQixJQUFJZ0IsR0FBSixNQUFhSSxTQUFoRCxFQUEyRDtBQUN0SU4sYUFBT08sY0FBUCxDQUFzQnJCLEdBQXRCLEVBQTJCZ0IsR0FBM0IsRUFBZ0NDLEtBQWhDO0FBQ0Q7QUFDRixVQUFPakIsR0FBUDtBQUNGOztBQUVELFNBQVNzQiwwQkFBVCxDQUFvQ0MsSUFBcEMsRUFBMENDLElBQTFDLEVBQWdEO0FBQzlDLE1BQUksQ0FBQ0QsSUFBTCxFQUFXO0FBQ1QsVUFBTSxJQUFJRSxjQUFKLENBQW1CLDJEQUFuQixDQUFOO0FBQ0QsVUFBT0QsU0FBUyxDQUFDLE9BQU9BLElBQVAsS0FBZ0IsV0FBaEIsR0FBOEIsV0FBOUIsR0FBNEMzQixRQUFRMkIsSUFBUixDQUE3QyxNQUFnRSxRQUFoRSxJQUE0RSxPQUFPQSxJQUFQLEtBQWdCLFVBQXJHLElBQW1IQSxJQUFuSCxHQUEwSEQsSUFBakk7QUFDRjs7QUFFRCxTQUFTRyxTQUFULENBQW1CQyxRQUFuQixFQUE2QkMsVUFBN0IsRUFBeUM7QUFDdkMsTUFBSSxPQUFPQSxVQUFQLEtBQXNCLFVBQXRCLElBQW9DQSxlQUFlLElBQXZELEVBQTZEO0FBQzNELFVBQU0sSUFBSUMsU0FBSixDQUFjLDhEQUE4RCxPQUFPRCxVQUFQLEtBQXNCLFdBQXRCLEdBQW9DLFdBQXBDLEdBQWtEL0IsUUFBUStCLFVBQVIsQ0FBaEgsQ0FBZCxDQUFOO0FBQ0QsWUFBUzFCLFNBQVQsR0FBcUJZLE9BQU9nQixNQUFQLENBQWNGLGNBQWNBLFdBQVcxQixTQUF2QyxFQUFrRCxFQUFFRCxhQUFhLEVBQUVnQixPQUFPVSxRQUFULEVBQW1CSSxZQUFZLEtBQS9CLEVBQXNDQyxVQUFVLElBQWhELEVBQXNEYixjQUFjLElBQXBFLEVBQWYsRUFBbEQsQ0FBckIsQ0FBb0ssSUFBSVMsVUFBSixFQUFnQmQsT0FBT21CLGNBQVAsR0FBd0JuQixPQUFPbUIsY0FBUCxDQUFzQk4sUUFBdEIsRUFBZ0NDLFVBQWhDLENBQXhCLEdBQXNFakIsVUFBVWdCLFFBQVYsRUFBb0JDLFVBQXBCLENBQXRFO0FBQ3RMOztBQUVELFNBQVNNLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DQyxXQUFuQyxFQUFnRDtBQUM5QyxNQUFJLEVBQUVELG9CQUFvQkMsV0FBdEIsQ0FBSixFQUF3QztBQUN0QyxVQUFNLElBQUlQLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQ0Q7QUFDRjs7QUFFRCxJQUFJUSxNQUFNO0FBQ1JDLGFBQVcsU0FBU0EsU0FBVCxDQUFtQkMsRUFBbkIsRUFBdUI7QUFDaEMsUUFBSSxPQUFPQSxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDOUIsUUFBSUMsUUFBUUQsR0FBR0UsSUFBSCxHQUFVRixHQUFHRSxJQUFiLEdBQW9CRixHQUFHRyxRQUFILEdBQWNDLEtBQWQsQ0FBb0IsMEJBQXBCLEVBQWdELENBQWhELENBQWhDO0FBQ0EsV0FBT0gsS0FBUDtBQUNELEdBTE87QUFNUkksbUJBQWlCLFNBQVNBLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCQyxNQUE5QixFQUFzQztBQUNyRCxRQUFJQyxNQUFNLEtBQUtDLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBVjtBQUNBSCxRQUFJSSxLQUFKLENBQVVGLEdBQVYsSUFBaUIsaUJBQWlCRCxNQUFqQixHQUEwQixXQUEzQztBQUNELEdBVE87QUFVUkksMEJBQXdCLFNBQVNBLHNCQUFULENBQWdDTCxHQUFoQyxFQUFxQ0MsTUFBckMsRUFBNkM7QUFDbkUsUUFBSUMsTUFBTSxLQUFLQyxVQUFMLENBQWdCLFdBQWhCLENBQVY7QUFDQUgsUUFBSUksS0FBSixDQUFVRixHQUFWLElBQWlCLGlCQUFpQkQsTUFBakIsR0FBMEIsVUFBM0M7QUFDRCxHQWJPO0FBY1JLLFlBQVUsU0FBU0EsUUFBVCxDQUFrQk4sR0FBbEIsRUFBdUI7QUFDL0IsUUFBSU8sU0FBUyxDQUFiOztBQUVBLFFBQUlQLElBQUlRLHFCQUFKLEdBQTRCQyxLQUFoQyxFQUF1QztBQUNyQ0YsZUFBU1AsSUFBSVEscUJBQUosR0FBNEJDLEtBQXJDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xGLGVBQVNQLElBQUlVLFdBQWI7QUFDRDtBQUNELFdBQU9ILE1BQVA7QUFDRCxHQXZCTztBQXdCUkosY0FBWSxTQUFTQSxVQUFULENBQW9CUixLQUFwQixFQUEyQjtBQUNyQyxRQUFJLE9BQU8sS0FBS2dCLFdBQVosS0FBNEIsV0FBaEMsRUFBNkMsS0FBS0EsV0FBTCxHQUFtQixFQUFuQjs7QUFFN0MsUUFBSSxLQUFLQSxXQUFMLENBQWlCaEIsS0FBakIsQ0FBSixFQUE2QixPQUFPLEtBQUtnQixXQUFMLENBQWlCaEIsS0FBakIsQ0FBUDs7QUFFN0IsUUFBSWlCLGFBQWE7QUFDZixvQkFBYyxDQUFDLGtCQUFELEVBQXFCLFlBQXJCLENBREM7QUFFZixtQkFBYSxDQUFDLGlCQUFELEVBQW9CLFdBQXBCO0FBRkUsS0FBakI7O0FBS0EsUUFBSUMsWUFBWUQsV0FBV2pCLEtBQVgsQ0FBaEI7O0FBRUEsUUFBSSxDQUFDLEtBQUttQixPQUFMLENBQWFELFNBQWIsQ0FBTCxFQUE4QixPQUFPLElBQVA7O0FBRTlCLFNBQUssSUFBSW5ELElBQUksQ0FBUixFQUFXcUQsTUFBTUYsVUFBVWpELE1BQWhDLEVBQXdDRixJQUFJcUQsR0FBNUMsRUFBaURyRCxHQUFqRCxFQUFzRDtBQUNwRCxVQUFJLE9BQU9zRCxTQUFTQyxJQUFULENBQWNiLEtBQWQsQ0FBb0JTLFVBQVVuRCxDQUFWLENBQXBCLENBQVAsS0FBNkMsUUFBakQsRUFBMkQ7QUFDekQsYUFBS2lELFdBQUwsQ0FBaUJoQixLQUFqQixJQUEwQmtCLFVBQVVuRCxDQUFWLENBQTFCO0FBQ0EsZUFBTyxLQUFLaUQsV0FBTCxDQUFpQmhCLEtBQWpCLENBQVA7QUFDRDtBQUNGO0FBQ0YsR0E1Q087QUE2Q1J1QixpQkFBZSxTQUFTQSxhQUFULENBQXVCQyxPQUF2QixFQUFnQztBQUM3QyxRQUFJQyxXQUFXRCxRQUFRRSxVQUF2QjtBQUNBLFFBQUlDLFNBQVM5RCxNQUFNSCxTQUFOLENBQWdCa0UsT0FBaEIsQ0FBd0I1QyxJQUF4QixDQUE2QnlDLFNBQVNJLFFBQXRDLEVBQWdETCxPQUFoRCxDQUFiO0FBQ0EsV0FBT0csTUFBUDtBQUNELEdBakRPO0FBa0RSRyxtQkFBaUIsU0FBU0EsZUFBVCxDQUF5QnpCLEdBQXpCLEVBQThCO0FBQzdDLFFBQUlFLE1BQU0sS0FBS0MsVUFBTCxDQUFnQixXQUFoQixDQUFWO0FBQ0EsUUFBSXVCLFVBQVUxQixJQUFJSSxLQUFKLENBQVVGLEdBQVYsQ0FBZDtBQUNBLFFBQUl5QixRQUFRLENBQVo7O0FBRUEsUUFBSUQsUUFBUUgsT0FBUixDQUFnQixHQUFoQixNQUF5QixDQUFDLENBQTlCLEVBQWlDO0FBQy9CSSxjQUFRLENBQUNELFFBQVFFLE9BQVIsQ0FBZ0IsNENBQWhCLEVBQThELElBQTlELENBQVQ7QUFDRCxLQUZELE1BRU87QUFDTEQsY0FBUSxDQUFDRCxRQUFRRSxPQUFSLENBQWdCLDJDQUFoQixFQUE2RCxJQUE3RCxDQUFUO0FBQ0FELGNBQVFBLFFBQVEsR0FBUixHQUFjLEtBQUtyQixRQUFMLENBQWNOLElBQUk2QixpQkFBbEIsQ0FBdEI7QUFDRDs7QUFFRCxXQUFPRixLQUFQO0FBQ0QsR0EvRE87QUFnRVJHLDBCQUF3QixTQUFTQSxzQkFBVCxDQUFnQzlCLEdBQWhDLEVBQXFDO0FBQzNELFFBQUlFLE1BQU0sS0FBS0MsVUFBTCxDQUFnQixXQUFoQixDQUFWO0FBQ0EsUUFBSXVCLFVBQVUxQixJQUFJSSxLQUFKLENBQVVGLEdBQVYsQ0FBZDtBQUNBLFFBQUl5QixRQUFRLENBQUNELFFBQVFFLE9BQVIsQ0FBZ0IsMkNBQWhCLEVBQTZELElBQTdELENBQWI7QUFDQSxXQUFPRCxLQUFQO0FBQ0QsR0FyRU87QUFzRVJJLHVCQUFxQixTQUFTQSxtQkFBVCxHQUErQjtBQUNsRCxRQUFJQyxNQUFNLEtBQUs3QixVQUFMLENBQWdCLFlBQWhCLENBQVY7QUFDQSxRQUFJOEIsT0FBT0QsUUFBUSxrQkFBUixHQUE2QixxQkFBN0IsR0FBcUQsZUFBaEU7QUFDQSxXQUFPQyxJQUFQO0FBQ0QsR0ExRU87QUEyRVJDLG9CQUFrQixTQUFTQSxnQkFBVCxDQUEwQkMsV0FBMUIsRUFBdUNDLE1BQXZDLEVBQStDQyxTQUEvQyxFQUEwRDtBQUMxRSxRQUFJQSxTQUFKLEVBQWU7QUFDYkY7QUFDRDtBQUNELFFBQUlHLFlBQVlGLE9BQU9aLFFBQVAsQ0FBZ0JXLFdBQWhCLENBQWhCO0FBQ0EsUUFBSUksVUFBVUMsU0FBU0MsaUJBQWlCSCxTQUFqQixFQUE0QkksTUFBckMsQ0FBZDtBQUNBTixXQUFPaEMsS0FBUCxDQUFhc0MsTUFBYixHQUFzQkgsVUFBVSxJQUFoQztBQUNELEdBbEZPO0FBbUZSSSxVQUFRLFNBQVNBLE1BQVQsQ0FBZ0JDLEVBQWhCLEVBQW9CeEMsS0FBcEIsRUFBMkJoQyxLQUEzQixFQUFrQztBQUN4Q3dFLE9BQUd4QyxLQUFILENBQVNBLEtBQVQsSUFBa0JoQyxLQUFsQjtBQUNELEdBckZPO0FBc0ZSeUUsYUFBVyxTQUFTQSxTQUFULENBQW1CRCxFQUFuQixFQUF1QjtBQUNoQ0EsT0FBR3hDLEtBQUgsQ0FBUzBDLE9BQVQsR0FBbUIsT0FBbkI7QUFDRCxHQXhGTztBQXlGUkMsY0FBWSxTQUFTQSxVQUFULENBQW9CSCxFQUFwQixFQUF3QjtBQUNsQ0EsT0FBR3hDLEtBQUgsQ0FBUzBDLE9BQVQsR0FBbUIsTUFBbkI7QUFDRCxHQTNGTzs7QUE4RlI7QUFDQWhDLFdBQVMsU0FBU0EsT0FBVCxDQUFpQmtDLElBQWpCLEVBQXVCO0FBQzlCLFdBQU9BLFFBQVEsSUFBZjtBQUNELEdBakdPO0FBa0dSdkYsV0FBUyxTQUFTQSxPQUFULENBQWlCd0YsRUFBakIsRUFBcUI7QUFDNUIsUUFBSSxDQUFDekYsTUFBTUMsT0FBWCxFQUFvQjtBQUNsQixhQUFPUSxPQUFPWixTQUFQLENBQWlCd0MsUUFBakIsQ0FBMEJsQixJQUExQixDQUErQnNFLEVBQS9CLE1BQXVDLGdCQUE5QztBQUNEO0FBQ0QsV0FBT3pGLE1BQU1DLE9BQU4sQ0FBY3dGLEVBQWQsQ0FBUDtBQUNELEdBdkdPO0FBd0dSQyxjQUFZLFNBQVNBLFVBQVQsQ0FBb0J4RCxFQUFwQixFQUF3QjtBQUNsQyxXQUFPekIsT0FBT1osU0FBUCxDQUFpQndDLFFBQWpCLENBQTBCbEIsSUFBMUIsQ0FBK0JlLEVBQS9CLE1BQXVDLG1CQUE5QztBQUNEO0FBMUdPLENBQVY7QUE0R0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7OztBQVNBLElBQUl5RCxrQkFBa0IsWUFBWTtBQUNoQyxXQUFTQSxlQUFULENBQXlCQyxRQUF6QixFQUFtQ0MsUUFBbkMsRUFBNkM7QUFDM0NoRSxvQkFBZ0IsSUFBaEIsRUFBc0I4RCxlQUF0Qjs7QUFFQSxTQUFLRSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUsxQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsU0FBS3lDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0UsSUFBTCxDQUFVRCxRQUFWO0FBQ0Q7O0FBRURGLGtCQUFnQjlGLFNBQWhCLENBQTBCaUcsSUFBMUIsR0FBaUMsU0FBU0EsSUFBVCxDQUFjRCxRQUFkLEVBQXdCO0FBQ3ZELFNBQUtFLFlBQUw7QUFDQSxTQUFLQyxTQUFMLENBQWVILFFBQWYsRUFBeUIsS0FBS0ksZ0JBQTlCLEVBQWdELEtBQUtDLE1BQXJEO0FBQ0EsU0FBS0MsU0FBTDtBQUNBLFNBQUtDLGNBQUw7QUFDRCxHQUxEOztBQU9BVCxrQkFBZ0I5RixTQUFoQixDQUEwQmtHLFlBQTFCLEdBQXlDLFNBQVNBLFlBQVQsR0FBd0I7QUFDL0QsUUFBSU0scUJBQXFCLENBQUMsdUJBQUQsQ0FBekI7QUFDQSxRQUFJQyxLQUFLLEtBQUtDLGdCQUFMLEVBQVQ7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLENBQUMsQ0FBQ0YsR0FBR0csT0FBM0I7QUFDQSxTQUFLUixnQkFBTCxHQUF3QkssR0FBR0ksY0FBM0I7QUFDQSxTQUFLQyxhQUFMLEdBQXFCTCxHQUFHRyxPQUF4QjtBQUNBLFNBQUtHLFdBQUwsR0FBbUIsS0FBS0Msc0JBQUwsQ0FBNEJSLG1CQUFtQlMsTUFBbkIsQ0FBMEJSLEdBQUdTLHVCQUE3QixDQUE1QixDQUFuQjs7QUFFQSxRQUFJLEtBQUtQLGNBQVQsRUFBeUI7QUFDdkIsV0FBS1EsaUJBQUwsR0FBeUIsS0FBS0gsc0JBQUwsQ0FBNEJSLG1CQUFtQlMsTUFBbkIsQ0FBMEJSLEdBQUdXLG9CQUE3QixDQUE1QixDQUF6QjtBQUNEO0FBQ0QsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLakIsTUFBTCxHQUFjLEVBQWQ7QUFDRCxHQWREOztBQWdCQTs7O0FBR0FQLGtCQUFnQjlGLFNBQWhCLENBQTBCdUgsa0JBQTFCLEdBQStDLFNBQVNBLGtCQUFULENBQTRCQyxJQUE1QixFQUFrQztBQUMvRSxTQUFLckIsU0FBTCxDQUFlcUIsSUFBZixFQUFxQixLQUFLVCxXQUExQixFQUF1QyxLQUFLTSxRQUE1QztBQUNELEdBRkQ7O0FBSUF2QixrQkFBZ0I5RixTQUFoQixDQUEwQnlILG9CQUExQixHQUFpRCxTQUFTQSxvQkFBVCxDQUE4QkQsSUFBOUIsRUFBb0M7QUFDbkYsU0FBS0Usa0JBQUwsQ0FBd0JGLElBQXhCLEVBQThCLEtBQUtMLGlCQUFuQyxFQUFzRCxLQUFLRyxVQUEzRDtBQUNELEdBRkQ7O0FBSUF4QixrQkFBZ0I5RixTQUFoQixDQUEwQjJILFNBQTFCLEdBQXNDLFNBQVNBLFNBQVQsQ0FBbUJDLFdBQW5CLEVBQWdDO0FBQ3BFLFNBQUtDLFdBQUwsQ0FBaUIsS0FBS2YsYUFBdEIsRUFBcUNjLFdBQXJDLEVBQWtELEtBQUs3QixRQUF2RDtBQUNBLFNBQUsrQixrQkFBTDtBQUNELEdBSEQ7O0FBS0FoQyxrQkFBZ0I5RixTQUFoQixDQUEwQm1HLFNBQTFCLEdBQXNDLFNBQVNBLFNBQVQsQ0FBbUI0QixPQUFuQixFQUE0QkMsY0FBNUIsRUFBNENDLFNBQTVDLEVBQXVEO0FBQzNGLFFBQUlDLFFBQVEsSUFBWjs7QUFFQXRILFdBQU9ELElBQVAsQ0FBWXFILGNBQVosRUFBNEJHLE9BQTVCLENBQW9DLFVBQVVDLENBQVYsRUFBYTtBQUMvQyxVQUFJLE9BQU9MLFFBQVFLLENBQVIsQ0FBUCxLQUFzQixXQUExQixFQUF1QztBQUNyQ0gsa0JBQVVHLENBQVYsSUFBZUosZUFBZUksQ0FBZixDQUFmO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSXhILE9BQU9aLFNBQVAsQ0FBaUJ3QyxRQUFqQixDQUEwQmxCLElBQTFCLENBQStCeUcsUUFBUUssQ0FBUixDQUEvQixNQUErQyxpQkFBbkQsRUFBc0U7QUFDcEVILG9CQUFVRyxDQUFWLElBQWVMLFFBQVFLLENBQVIsQ0FBZjtBQUNBO0FBQ0Q7QUFDREgsa0JBQVVHLENBQVYsSUFBZSxFQUFmO0FBQ0FGLGNBQU0vQixTQUFOLENBQWdCN0UsSUFBaEIsQ0FBcUI0RyxLQUFyQixFQUE0QkgsUUFBUUssQ0FBUixDQUE1QixFQUF3Q0osZUFBZUksQ0FBZixDQUF4QyxFQUEyREgsVUFBVUcsQ0FBVixDQUEzRDtBQUNEO0FBQ0YsS0FYRDtBQVlELEdBZkQ7O0FBaUJBdEMsa0JBQWdCOUYsU0FBaEIsQ0FBMEIwSCxrQkFBMUIsR0FBK0MsU0FBU0Esa0JBQVQsQ0FBNEJLLE9BQTVCLEVBQXFDQyxjQUFyQyxFQUFxREMsU0FBckQsRUFBZ0U7QUFDN0dySCxXQUFPRCxJQUFQLENBQVlxSCxjQUFaLEVBQTRCRyxPQUE1QixDQUFvQyxVQUFVQyxDQUFWLEVBQWE7QUFDL0MsVUFBSSxDQUFDakksTUFBTUMsT0FBTixDQUFjNkgsVUFBVUcsQ0FBVixDQUFkLENBQUwsRUFBa0NILFVBQVVHLENBQVYsSUFBZSxFQUFmO0FBQ2xDLFVBQUksT0FBT0wsUUFBUUssQ0FBUixDQUFQLEtBQXNCLFdBQTFCLEVBQXVDO0FBQ3JDSCxrQkFBVUcsQ0FBVixFQUFhQyxJQUFiLENBQWtCTCxlQUFlSSxDQUFmLENBQWxCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xILGtCQUFVRyxDQUFWLEVBQWFDLElBQWIsQ0FBa0JOLFFBQVFLLENBQVIsQ0FBbEI7QUFDQTtBQUNEO0FBQ0YsS0FSRDtBQVNELEdBVkQ7O0FBWUF0QyxrQkFBZ0I5RixTQUFoQixDQUEwQmdILHNCQUExQixHQUFtRCxTQUFTQSxzQkFBVCxDQUFnQ3NCLEdBQWhDLEVBQXFDO0FBQ3RGLFFBQUlkLE9BQU8sRUFBWDtBQUNBYyxRQUFJSCxPQUFKLENBQVksVUFBVUMsQ0FBVixFQUFhO0FBQ3ZCWixXQUFLWSxDQUFMLElBQVUsWUFBWSxDQUFFLENBQXhCO0FBQ0QsS0FGRDtBQUdBLFdBQU9aLElBQVA7QUFDRCxHQU5EOztBQVFBMUIsa0JBQWdCOUYsU0FBaEIsQ0FBMEI2SCxXQUExQixHQUF3QyxTQUFTQSxXQUFULENBQXFCZixhQUFyQixFQUFvQ2MsV0FBcEMsRUFBaUQ3QixRQUFqRCxFQUEyRDtBQUNqRyxRQUFJd0MsU0FBUyxJQUFiOztBQUVBLFFBQUlDLFVBQVUsSUFBZDtBQUNBWixnQkFBWU8sT0FBWixDQUFvQixVQUFVQyxDQUFWLEVBQWE7QUFDL0IsVUFBSTlGLFFBQVE4RixFQUFFN0YsSUFBZDtBQUNBLFVBQUl6QyxNQUFNc0ksRUFBRXRJLEdBQVo7QUFDQSxVQUFJZ0gsY0FBYzVDLE9BQWQsQ0FBc0I1QixLQUF0QixJQUErQixDQUFuQyxFQUFzQztBQUN0QztBQUNBLFVBQUltRyxVQUFVLElBQUkzSSxHQUFKLENBQVFpRyxRQUFSLEVBQWtCcUMsRUFBRS9CLE1BQXBCLENBQWQ7QUFDQW9DLGNBQVFsQixrQkFBUixDQUEyQmEsRUFBRU0sVUFBN0I7QUFDQUgsYUFBT0ksbUJBQVAsQ0FBMkJILE9BQTNCLEVBQW9DQyxPQUFwQztBQUNELEtBUkQ7QUFTRCxHQWJEOztBQWVBM0Msa0JBQWdCOUYsU0FBaEIsQ0FBMEI4SCxrQkFBMUIsR0FBK0MsU0FBU0Esa0JBQVQsR0FBOEI7QUFDM0UsU0FBS2MsV0FBTCxDQUFpQixNQUFqQixFQUF5Qix1QkFBekI7QUFDQSxTQUFLQSxXQUFMLENBQWlCLFFBQWpCLEVBQTJCLHVCQUEzQjtBQUNELEdBSEQ7O0FBS0E5QyxrQkFBZ0I5RixTQUFoQixDQUEwQjRJLFdBQTFCLEdBQXdDLFNBQVNBLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCQyxTQUEzQixFQUFzQztBQUM1RSxRQUFJQyxPQUFPLEdBQUdDLEtBQUgsQ0FBUzFILElBQVQsQ0FBYzJILFNBQWQsRUFBeUIsQ0FBekIsQ0FBWDtBQUNBLFFBQUlDLGNBQWMsS0FBSyxDQUF2Qjs7QUFFQSxZQUFRTCxJQUFSO0FBQ0UsV0FBSyxNQUFMO0FBQ0U7QUFDRSxjQUFJbEosUUFBUSxLQUFLMEgsUUFBYixNQUEyQixRQUEzQixJQUF1QyxPQUFPLEtBQUtBLFFBQUwsQ0FBY3lCLFNBQWQsQ0FBUCxLQUFvQyxVQUEvRSxFQUEyRjtBQUN6RixnQkFBSUssU0FBSjs7QUFFQUQsMEJBQWMsQ0FBQ0MsWUFBWSxLQUFLOUIsUUFBbEIsRUFBNEJ5QixTQUE1QixFQUF1Q00sS0FBdkMsQ0FBNkNELFNBQTdDLEVBQXdEbEosbUJBQW1COEksSUFBbkIsQ0FBeEQsQ0FBZDtBQUNEO0FBQ0Q7QUFDRDtBQUNILFdBQUssUUFBTDtBQUNFO0FBQ0UsY0FBSXBKLFFBQVEsS0FBSzJILFVBQWIsTUFBNkIsUUFBN0IsSUFBeUMzSCxRQUFRLEtBQUsySCxVQUFMLENBQWdCd0IsU0FBaEIsQ0FBUixNQUF3QyxRQUFyRixFQUErRjtBQUM3RixpQkFBS3hCLFVBQUwsQ0FBZ0J3QixTQUFoQixFQUEyQlgsT0FBM0IsQ0FBbUMsVUFBVTlGLEVBQVYsRUFBYztBQUMvQ0EsaUJBQUcrRyxLQUFILENBQVNsSSxTQUFULEVBQW9CakIsbUJBQW1COEksSUFBbkIsQ0FBcEI7QUFDRCxhQUZEO0FBR0Q7QUFDRDtBQUNEO0FBQ0g7QUFDRSxTQUFFO0FBcEJOO0FBc0JBLFdBQU9HLFdBQVA7QUFDRCxHQTNCRDs7QUE2QkFwRCxrQkFBZ0I5RixTQUFoQixDQUEwQjJJLG1CQUExQixHQUFnRCxTQUFTQSxtQkFBVCxDQUE2QkgsT0FBN0IsRUFBc0NhLE1BQXRDLEVBQThDO0FBQzVGQSxXQUFPQyxtQkFBUCxDQUEyQmQsT0FBM0I7QUFDRCxHQUZEOztBQUlBLFNBQU8xQyxlQUFQO0FBQ0QsQ0E1SXFCLEVBQXRCOztBQThJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7Ozs7Ozs7QUFRQSxJQUFJeUQsd0JBQXdCLFVBQVVDLGdCQUFWLEVBQTRCO0FBQ3REaEksWUFBVStILHFCQUFWLEVBQWlDQyxnQkFBakM7O0FBRUFELHdCQUFzQnZKLFNBQXRCLENBQWdDMEcsZ0JBQWhDLEdBQW1ELFNBQVNBLGdCQUFULEdBQTRCO0FBQzdFLFdBQU87QUFDTCtDLGdCQUFVLEVBREw7QUFFTHZDLCtCQUF5QixFQUZwQjtBQUdMTCxzQkFBZ0I7QUFDZCxpQkFBUyxLQURLO0FBRWQsc0JBQWMsSUFGQSxFQUVNO0FBQ3BCLDRCQUFvQixtQkFITjtBQUlkLHFCQUFhLEdBSkM7QUFLZCw4QkFBc0I7QUFMUjtBQUhYLEtBQVA7QUFXRCxHQVpEOztBQWNBLFdBQVMwQyxxQkFBVCxDQUErQnhELFFBQS9CLEVBQXlDQyxRQUF6QyxFQUFtRDtBQUNqRGhFLG9CQUFnQixJQUFoQixFQUFzQnVILHFCQUF0Qjs7QUFFQSxXQUFPbkksMkJBQTJCLElBQTNCLEVBQWlDb0ksaUJBQWlCbEksSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJ5RSxRQUE1QixFQUFzQ0MsUUFBdEMsQ0FBakMsQ0FBUDtBQUNEOztBQUVEdUQsd0JBQXNCdkosU0FBdEIsQ0FBZ0NzRyxTQUFoQyxHQUE0QyxTQUFTQSxTQUFULEdBQXFCO0FBQy9ELFNBQUtvRCxjQUFMO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFLdEQsTUFBTCxDQUFZc0QsVUFBOUI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLElBQXZCO0FBQ0QsR0FKRDs7QUFNQUwsd0JBQXNCdkosU0FBdEIsQ0FBZ0N1RyxjQUFoQyxHQUFpRCxTQUFTQSxjQUFULEdBQTBCO0FBQ3pFLFNBQUtzRCxhQUFMO0FBQ0QsR0FGRDs7QUFJQU4sd0JBQXNCdkosU0FBdEIsQ0FBZ0M2SixhQUFoQyxHQUFnRCxTQUFTQSxhQUFULEdBQXlCO0FBQ3ZFLFFBQUlDLE1BQU0sS0FBS3pELE1BQUwsQ0FBWXNELFVBQVosQ0FBdUJJLGdCQUF2QixDQUF3QyxJQUF4QyxDQUFWOztBQUVBLFFBQUlDLE9BQU8sSUFBWDtBQUNBLFNBQUssSUFBSTNKLElBQUksQ0FBYixFQUFnQkEsSUFBSXlKLElBQUl2SixNQUF4QixFQUFnQ0YsR0FBaEMsRUFBcUM7QUFDbkN5SixVQUFJekosQ0FBSixFQUFPNEosZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsVUFBVUMsRUFBVixFQUFjO0FBQ2hERixhQUFLRyxvQkFBTCxDQUEwQixJQUExQjtBQUNELE9BRkQ7QUFHRDs7QUFFRCxRQUFJLEtBQUs5RCxNQUFMLENBQVkrRCxrQkFBaEIsRUFBb0M7QUFDbEMsV0FBSyxJQUFJQyxLQUFLLENBQWQsRUFBaUJBLEtBQUtQLElBQUl2SixNQUExQixFQUFrQzhKLElBQWxDLEVBQXdDO0FBQ3RDUCxZQUFJTyxFQUFKLEVBQVFKLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQVVDLEVBQVYsRUFBYztBQUM5Q0YsZUFBS0csb0JBQUwsQ0FBMEIsSUFBMUI7QUFDRCxTQUZEO0FBR0Q7QUFDRjtBQUNGLEdBakJEOztBQW1CQVosd0JBQXNCdkosU0FBdEIsQ0FBZ0NtSyxvQkFBaEMsR0FBdUQsU0FBU0Esb0JBQVQsQ0FBOEJwRSxRQUE5QixFQUF3QztBQUM3RixRQUFJN0MsU0FBUyxLQUFLMEcsZUFBTCxDQUFxQlUsV0FBbEM7QUFDQSxRQUFJQyxjQUFjcEksSUFBSTBCLGFBQUosQ0FBa0JrQyxRQUFsQixDQUFsQjs7QUFFQSxRQUFJeUUsUUFBUSxLQUFLWixlQUFMLENBQXFCYSxvQkFBckIsS0FBOENGLFdBQTFEO0FBQ0EsUUFBSUcsYUFBYUYsUUFBUXRILE1BQXpCOztBQUVBLFFBQUk0QixjQUFjeUYsV0FBbEI7O0FBRUE7QUFDQSxTQUFLWCxlQUFMLENBQXFCZSxjQUFyQixDQUFvQyxLQUFLdEUsTUFBTCxDQUFZdUUsU0FBaEQsRUFBMkQ5RixXQUEzRDs7QUFFQSxTQUFLK0YsbUJBQUwsQ0FBeUJOLFdBQXpCO0FBQ0QsR0FiRDs7QUFlQWhCLHdCQUFzQnZKLFNBQXRCLENBQWdDNkssbUJBQWhDLEdBQXNELFNBQVNBLG1CQUFULENBQTZCQyxjQUE3QixFQUE2QztBQUNqR0E7QUFDQTtBQUNBLFFBQUlDLE1BQU0sS0FBSzFFLE1BQUwsQ0FBWXNELFVBQVosQ0FBdUJxQixhQUF2QixDQUFxQyxNQUFNLEtBQUszRSxNQUFMLENBQVk0RSxnQkFBdkQsQ0FBVjtBQUNBLFFBQUlDLGdCQUFnQkgsSUFBSUksU0FBeEI7QUFDQUosUUFBSUksU0FBSixHQUFnQkosSUFBSUksU0FBSixDQUFjNUcsT0FBZCxDQUFzQjJHLGFBQXRCLEVBQXFDLEVBQXJDLENBQWhCOztBQUVBO0FBQ0EsU0FBSzdFLE1BQUwsQ0FBWXNELFVBQVosQ0FBdUJxQixhQUF2QixDQUFxQyxrQkFBa0JGLGNBQWxCLEdBQW1DLEdBQXhFLEVBQTZFSyxTQUE3RSxJQUEwRixNQUFNLEtBQUs5RSxNQUFMLENBQVk0RSxnQkFBNUc7QUFDRCxHQVREOztBQVdBMUIsd0JBQXNCdkosU0FBdEIsQ0FBZ0NzSixtQkFBaEMsR0FBc0QsU0FBU0EsbUJBQVQsQ0FBNkJkLE9BQTdCLEVBQXNDO0FBQzFGQSxZQUFRZixvQkFBUixDQUE2QjtBQUMzQix5QkFBbUIsS0FBS29ELG1CQUFMLENBQXlCTyxJQUF6QixDQUE4QixJQUE5QixDQURRO0FBRTNCLHdCQUFrQixTQUFTQyxjQUFULEdBQTBCLENBQUU7QUFGbkIsS0FBN0I7QUFJQSxTQUFLekIsZUFBTCxHQUF1QnBCLE9BQXZCO0FBQ0QsR0FORDs7QUFRQSxTQUFPZSxxQkFBUDtBQUNELENBdkYyQixDQXVGMUJ6RCxlQXZGMEIsQ0FBNUI7O0FBeUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOzs7Ozs7OztBQVFBLElBQUl3Rix1QkFBdUIsVUFBVUMsaUJBQVYsRUFBNkI7QUFDdEQvSixZQUFVOEosb0JBQVYsRUFBZ0NDLGlCQUFoQzs7QUFFQUQsdUJBQXFCdEwsU0FBckIsQ0FBK0IwRyxnQkFBL0IsR0FBa0QsU0FBU0EsZ0JBQVQsR0FBNEI7QUFDNUUsV0FBTztBQUNMK0MsZ0JBQVUsRUFETDtBQUVMdkMsK0JBQXlCLEVBRnBCO0FBR0xMLHNCQUFnQjtBQUNkLHNCQUFjLElBREE7QUFFZCxzQkFBYyxJQUZBO0FBR2QscUJBQWE7QUFIQztBQUhYLEtBQVA7QUFTRCxHQVZEOztBQVlBLFdBQVN5RSxvQkFBVCxDQUE4QnZGLFFBQTlCLEVBQXdDQyxRQUF4QyxFQUFrRDtBQUNoRGhFLG9CQUFnQixJQUFoQixFQUFzQnNKLG9CQUF0Qjs7QUFFQSxXQUFPbEssMkJBQTJCLElBQTNCLEVBQWlDbUssa0JBQWtCakssSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkJ5RSxRQUE3QixFQUF1Q0MsUUFBdkMsQ0FBakMsQ0FBUDtBQUNEOztBQUVEc0YsdUJBQXFCdEwsU0FBckIsQ0FBK0JzRyxTQUEvQixHQUEyQyxTQUFTQSxTQUFULEdBQXFCO0FBQzlELFNBQUtvRCxjQUFMO0FBQ0EsU0FBSzhCLFNBQUwsR0FBaUIsS0FBS25GLE1BQUwsQ0FBWW9GLFVBQTdCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLckYsTUFBTCxDQUFZc0YsVUFBN0I7QUFDQSxTQUFLL0IsZUFBTCxHQUF1QixJQUF2QjtBQUNELEdBTEQ7O0FBT0EwQix1QkFBcUJ0TCxTQUFyQixDQUErQnVHLGNBQS9CLEdBQWdELFNBQVNBLGNBQVQsR0FBMEI7QUFDeEUsUUFBSXFGLFNBQVMsSUFBYjs7QUFFQSxTQUFLSixTQUFMLENBQWV2QixnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxVQUFVNEIsR0FBVixFQUFlO0FBQ3RERCxhQUFPRSxrQkFBUCxDQUEwQkQsR0FBMUIsRUFBK0IsUUFBL0I7QUFDRCxLQUZEO0FBR0EsU0FBS0gsU0FBTCxDQUFlekIsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBVTRCLEdBQVYsRUFBZTtBQUN0REQsYUFBT0Usa0JBQVAsQ0FBMEJELEdBQTFCLEVBQStCLFNBQS9CO0FBQ0QsS0FGRDtBQUdELEdBVEQ7O0FBV0FQLHVCQUFxQnRMLFNBQXJCLENBQStCOEwsa0JBQS9CLEdBQW9ELFNBQVNBLGtCQUFULENBQTRCRCxHQUE1QixFQUFpQ0UsVUFBakMsRUFBNkM7QUFDL0YsUUFBSSxLQUFLbkMsZUFBTCxDQUFxQm9DLGFBQXpCLEVBQXdDO0FBQ3hDLFFBQUlDLE9BQU8sS0FBS3JDLGVBQUwsQ0FBcUJhLG9CQUFyQixFQUFYO0FBQ0EsUUFBSXpGLFlBQVksS0FBSzRFLGVBQUwsQ0FBcUJ2RCxNQUFyQixDQUE0QnJCLFNBQTVDOztBQUVBLFFBQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUNkLFVBQUlpSCxTQUFTLENBQVQsSUFBY0YsZUFBZSxRQUFqQyxFQUEyQztBQUMzQyxVQUFJRSxTQUFTLEtBQUtyQyxlQUFMLENBQXFCc0Msa0JBQXJCLEdBQTBDLENBQW5ELElBQXdESCxlQUFlLFNBQTNFLEVBQXNGO0FBQ3ZGOztBQUVELFFBQUk3SSxTQUFTLEtBQUswRyxlQUFMLENBQXFCVSxXQUFsQzs7QUFFQSxRQUFJeUIsZUFBZSxTQUFuQixFQUE4QjtBQUM1QjdJLGdCQUFVLENBQUMsQ0FBWDtBQUNBK0k7QUFDRCxLQUhELE1BR087QUFDTEE7QUFDRDs7QUFFRCxRQUFJakgsU0FBSixFQUFlaUgsT0FBTyxLQUFLckMsZUFBTCxDQUFxQnVDLDZCQUFyQixDQUFtREYsSUFBbkQsQ0FBUDs7QUFFZjtBQUNBLFNBQUtyQyxlQUFMLENBQXFCZSxjQUFyQixDQUFvQyxLQUFLdEUsTUFBTCxDQUFZdUUsU0FBaEQsRUFBMkRxQixJQUEzRCxFQUFpRS9JLE1BQWpFO0FBQ0QsR0F2QkQ7O0FBeUJBb0ksdUJBQXFCdEwsU0FBckIsQ0FBK0JvTSxrQkFBL0IsR0FBb0QsU0FBU0Esa0JBQVQsQ0FBNEJDLGFBQTVCLEVBQTJDO0FBQzdGLFFBQUlDLFlBQVksS0FBSzFDLGVBQUwsQ0FBcUJzQyxrQkFBckIsR0FBMEMsQ0FBMUQ7QUFDQSxRQUFJRyxrQkFBa0JDLFNBQXRCLEVBQWlDO0FBQy9CLFdBQUtkLFNBQUwsQ0FBZXpJLEtBQWYsQ0FBcUIwQyxPQUFyQixHQUErQixPQUEvQjtBQUNBLFdBQUtpRyxTQUFMLENBQWUzSSxLQUFmLENBQXFCMEMsT0FBckIsR0FBK0IsTUFBL0I7QUFDRCxLQUhELE1BR08sSUFBSTRHLGtCQUFrQixDQUF0QixFQUF5QjtBQUM5QixXQUFLYixTQUFMLENBQWV6SSxLQUFmLENBQXFCMEMsT0FBckIsR0FBK0IsTUFBL0I7QUFDQSxXQUFLaUcsU0FBTCxDQUFlM0ksS0FBZixDQUFxQjBDLE9BQXJCLEdBQStCLE9BQS9CO0FBQ0QsS0FITSxNQUdBO0FBQ0wsV0FBSytGLFNBQUwsQ0FBZXpJLEtBQWYsQ0FBcUIwQyxPQUFyQixHQUErQixPQUEvQjtBQUNBLFdBQUtpRyxTQUFMLENBQWUzSSxLQUFmLENBQXFCMEMsT0FBckIsR0FBK0IsT0FBL0I7QUFDRDtBQUNGLEdBWkQ7O0FBY0E2Rix1QkFBcUJ0TCxTQUFyQixDQUErQnNKLG1CQUEvQixHQUFxRCxTQUFTQSxtQkFBVCxDQUE2QmQsT0FBN0IsRUFBc0M7QUFDekYsUUFBSSxDQUFDQSxRQUFRbkMsTUFBUixDQUFlckIsU0FBcEIsRUFBK0I7QUFDN0J3RCxjQUFRZixvQkFBUixDQUE2QjtBQUMzQixpQ0FBeUIsS0FBSzJFLGtCQUFMLENBQXdCaEIsSUFBeEIsQ0FBNkIsSUFBN0IsRUFBbUMsQ0FBbkMsQ0FERTtBQUUzQiwwQkFBa0IsS0FBS2dCLGtCQUFMLENBQXdCaEIsSUFBeEIsQ0FBNkIsSUFBN0I7QUFGUyxPQUE3QjtBQUlEO0FBQ0QsU0FBS3hCLGVBQUwsR0FBdUJwQixPQUF2QjtBQUNELEdBUkQ7O0FBVUEsU0FBTzhDLG9CQUFQO0FBQ0QsQ0F6RjBCLENBeUZ6QnhGLGVBekZ5QixDQUEzQjs7QUEyRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7O0FBUUEsSUFBSXlHLGFBQWEsVUFBVUMsaUJBQVYsRUFBNkI7QUFDNUNoTCxZQUFVK0ssVUFBVixFQUFzQkMsaUJBQXRCOztBQUVBRCxhQUFXdk0sU0FBWCxDQUFxQjBHLGdCQUFyQixHQUF3QyxTQUFTQSxnQkFBVCxHQUE0QjtBQUNsRSxXQUFPO0FBQ0xFLGVBQVMsQ0FBQyx1QkFBRCxFQUEwQixzQkFBMUIsQ0FESjtBQUVMNkMsZ0JBQVU7QUFDUjtBQURRLE9BRkw7QUFLTHZDLCtCQUF5QixDQUFDLGlCQUFELEVBQW9CLGdCQUFwQixDQUxwQjtBQU1MRSw0QkFBc0IsQ0FBQyxpQkFBRCxFQUFvQixnQkFBcEIsQ0FOakI7QUFPTFAsc0JBQWdCO0FBQ2QscUJBQWEsS0FEQztBQUVkLHFCQUFhLEdBRkM7QUFHZCxzQkFBYyxFQUhBO0FBSWQsc0JBQWMsQ0FKQTtBQUtkLDBCQUFrQixHQUxKO0FBTWQsNEJBQW9CLENBTk47QUFPZCxnQ0FBd0IsS0FQVjtBQVFkLDhCQUFzQixLQVJSO0FBU2QsOEJBQXNCO0FBVFI7QUFQWCxLQUFQO0FBbUJELEdBcEJEOztBQXNCQSxXQUFTMEYsVUFBVCxDQUFvQnhHLFFBQXBCLEVBQThCQyxRQUE5QixFQUF3QztBQUN0Q2hFLG9CQUFnQixJQUFoQixFQUFzQnVLLFVBQXRCOztBQUVBLFdBQU9uTCwyQkFBMkIsSUFBM0IsRUFBaUNvTCxrQkFBa0JsTCxJQUFsQixDQUF1QixJQUF2QixFQUE2QnlFLFFBQTdCLEVBQXVDQyxRQUF2QyxDQUFqQyxDQUFQO0FBQ0Q7O0FBRUR1RyxhQUFXdk0sU0FBWCxDQUFxQnNHLFNBQXJCLEdBQWlDLFNBQVNBLFNBQVQsQ0FBbUJOLFFBQW5CLEVBQTZCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLFFBQUksS0FBS0ssTUFBTCxDQUFZb0csb0JBQWhCLEVBQXNDdEssSUFBSTBDLGdCQUFKLENBQXFCLENBQXJCLEVBQXdCLEtBQUtrQixRQUE3QixFQUF1QyxLQUFLTSxNQUFMLENBQVlyQixTQUFuRDs7QUFFdEM7QUFDQSxTQUFLc0YsV0FBTCxHQUFtQm5JLElBQUljLFFBQUosQ0FBYSxLQUFLOEMsUUFBTCxDQUFjdkIsaUJBQTNCLENBQW5CLENBUDRELENBT007O0FBRWxFO0FBQ0EsU0FBSzBILGtCQUFMLEdBQTBCLEtBQUtuRyxRQUFMLENBQWMyRyxpQkFBeEM7O0FBRUEsUUFBSTFILFlBQVksS0FBS3FCLE1BQUwsQ0FBWXJCLFNBQTVCO0FBQ0EsU0FBSzJILGNBQUwsR0FBc0IzSCxZQUFZLEtBQUtzRixXQUFqQixHQUErQixDQUFyRDtBQUNBLFNBQUtzQyxjQUFMLEdBQXNCNUgsWUFBWSxLQUFLa0gsa0JBQUwsR0FBMEIsQ0FBdEMsR0FBMEMsS0FBS0Esa0JBQUwsR0FBMEIsQ0FBMUY7QUFDQSxTQUFLVSxjQUFMLElBQXVCLENBQUMsS0FBS3RDLFdBQTdCOztBQUVBLFNBQUt1QyxTQUFMLEdBQWlCLEtBQUtGLGNBQUwsR0FBc0IsS0FBS3RHLE1BQUwsQ0FBWXlHLFVBQW5EO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLSCxjQUFMLEdBQXNCLEtBQUt2RyxNQUFMLENBQVl5RyxVQUFuRDs7QUFFQSxTQUFLZCxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsU0FBS2xILFdBQUwsR0FBbUIsQ0FBbkI7O0FBRUE7QUFDQSxTQUFLa0ksZ0JBQUw7QUFDRCxHQXpCRDs7QUEyQkFULGFBQVd2TSxTQUFYLENBQXFCdUcsY0FBckIsR0FBc0MsU0FBU0EsY0FBVCxHQUEwQjtBQUM5RCxRQUFJMEcsU0FBUyxJQUFiOztBQUVBLFFBQUksS0FBSzVHLE1BQUwsQ0FBWTZHLGtCQUFoQixFQUFvQztBQUNsQyxXQUFLbkgsUUFBTCxDQUFja0UsZ0JBQWQsQ0FBK0IsWUFBL0IsRUFBNkMsVUFBVTRCLEdBQVYsRUFBZTtBQUMxRG9CLGVBQU9FLGlCQUFQLENBQXlCdEIsR0FBekI7QUFDRCxPQUZEO0FBR0EsV0FBSzlGLFFBQUwsQ0FBY2tFLGdCQUFkLENBQStCLFdBQS9CLEVBQTRDLFVBQVU0QixHQUFWLEVBQWU7QUFDekRvQixlQUFPRyxnQkFBUCxDQUF3QnZCLEdBQXhCO0FBQ0QsT0FGRDtBQUdBLFdBQUs5RixRQUFMLENBQWNrRSxnQkFBZCxDQUErQixVQUEvQixFQUEyQyxVQUFVNEIsR0FBVixFQUFlO0FBQ3hEb0IsZUFBT0ksZUFBUCxDQUF1QnhCLEdBQXZCO0FBQ0QsT0FGRDtBQUdEOztBQUVELFFBQUksS0FBS3hGLE1BQUwsQ0FBWStELGtCQUFoQixFQUFvQztBQUNsQyxXQUFLckUsUUFBTCxDQUFja0UsZ0JBQWQsQ0FBK0IsV0FBL0IsRUFBNEMsVUFBVTRCLEdBQVYsRUFBZTtBQUN6RG9CLGVBQU9FLGlCQUFQLENBQXlCdEIsR0FBekI7QUFDRCxPQUZEO0FBR0EsV0FBSzlGLFFBQUwsQ0FBY2tFLGdCQUFkLENBQStCLFdBQS9CLEVBQTRDLFVBQVU0QixHQUFWLEVBQWU7QUFDekRvQixlQUFPRyxnQkFBUCxDQUF3QnZCLEdBQXhCO0FBQ0QsT0FGRDtBQUdBLFdBQUs5RixRQUFMLENBQWNrRSxnQkFBZCxDQUErQixTQUEvQixFQUEwQyxVQUFVNEIsR0FBVixFQUFlO0FBQ3ZEb0IsZUFBT0ksZUFBUCxDQUF1QnhCLEdBQXZCO0FBQ0QsT0FGRDtBQUdEOztBQUVELFNBQUt5QixxQkFBTDtBQUNELEdBNUJEOztBQThCQTs7QUFFQWYsYUFBV3ZNLFNBQVgsQ0FBcUJtTixpQkFBckIsR0FBeUMsU0FBU0EsaUJBQVQsQ0FBMkJ0QixHQUEzQixFQUFnQztBQUN2RUEsUUFBSTBCLGVBQUo7QUFDQSxRQUFJLEtBQUt2QixhQUFULEVBQXdCOztBQUV4QixTQUFLd0IsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLElBQXZCO0FBQ0EsUUFBSUMsY0FBYzdCLElBQUloRCxJQUFKLENBQVM4RSxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLE1BQTBCLE9BQTVDOztBQUVBLFFBQUlDLFFBQVEsS0FBSyxDQUFqQjtBQUFBLFFBQ0lDLFFBQVEsS0FBSyxDQURqQjs7QUFHQSxRQUFJSCxXQUFKLEVBQWlCO0FBQ2ZFLGNBQVEvQixJQUFJK0IsS0FBWjtBQUNBQyxjQUFRaEMsSUFBSWdDLEtBQVo7QUFDRCxLQUhELE1BR087QUFDTEQsY0FBUS9CLElBQUlpQyxjQUFKLENBQW1CLENBQW5CLEVBQXNCRixLQUE5QjtBQUNBQyxjQUFRaEMsSUFBSWlDLGNBQUosQ0FBbUIsQ0FBbkIsRUFBc0JELEtBQTlCO0FBQ0Q7O0FBRUQsU0FBS0UsVUFBTCxHQUFrQkMsS0FBS0MsS0FBTCxDQUFXTCxLQUFYLENBQWxCO0FBQ0EsU0FBS00sVUFBTCxHQUFrQkYsS0FBS0MsS0FBTCxDQUFXSixLQUFYLENBQWxCOztBQUVBLFNBQUtNLGdCQUFMLEdBQXdCaE0sSUFBSWlDLGVBQUosQ0FBb0IsS0FBSzJCLFFBQXpCLENBQXhCO0FBQ0E7O0FBRUEsU0FBS3FJLGVBQUwsR0FBdUJDLEtBQUtDLEdBQUwsRUFBdkI7QUFDRCxHQTFCRDs7QUE0QkEvQixhQUFXdk0sU0FBWCxDQUFxQm9OLGdCQUFyQixHQUF3QyxTQUFTQSxnQkFBVCxDQUEwQnZCLEdBQTFCLEVBQStCO0FBQ3JFQSxRQUFJMEIsZUFBSjtBQUNBLFFBQUksS0FBS3ZCLGFBQVQsRUFBd0I7QUFDeEIsUUFBSSxDQUFDLEtBQUt3QixNQUFWLEVBQWtCOztBQUVsQixRQUFJRSxjQUFjN0IsSUFBSWhELElBQUosQ0FBUzhFLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsTUFBMEIsT0FBNUM7O0FBRUEsUUFBSVksZUFBZWIsY0FBYzdCLEdBQWQsR0FBb0JBLElBQUlpQyxjQUFKLENBQW1CLENBQW5CLENBQXZDOztBQUVBLFNBQUtVLFNBQUwsR0FBaUJSLEtBQUtDLEtBQUwsQ0FBV00sYUFBYVgsS0FBeEIsQ0FBakI7QUFDQSxTQUFLYSxTQUFMLEdBQWlCVCxLQUFLQyxLQUFMLENBQVdNLGFBQWFWLEtBQXhCLENBQWpCOztBQUVBO0FBQ0EsUUFBSSxLQUFLSixlQUFULEVBQTBCO0FBQ3hCLFVBQUlpQixhQUFhVixLQUFLVyxHQUFMLENBQVMsS0FBS0YsU0FBTCxHQUFpQixLQUFLUCxVQUEvQixJQUE2Q0YsS0FBS1csR0FBTCxDQUFTLEtBQUtILFNBQUwsR0FBaUIsS0FBS1QsVUFBL0IsQ0FBOUQ7QUFDQSxXQUFLUCxNQUFMLEdBQWMsQ0FBQyxFQUFFa0IsY0FBYyxLQUFLckksTUFBTCxDQUFZdUksY0FBNUIsQ0FBZjtBQUNBLFVBQUksS0FBS3BCLE1BQUwsS0FBZ0IsS0FBcEIsRUFBMkI7QUFDM0IsV0FBS3FCLFNBQUwsR0FBaUIsS0FBS2QsVUFBdEI7QUFDRDs7QUFFRGxDLFFBQUlpRCxjQUFKOztBQUVBLFFBQUlDLFlBQVksS0FBS1AsU0FBTCxHQUFpQixLQUFLSyxTQUF0QztBQUNBLFFBQUlHLGFBQWEsQ0FBakI7O0FBRUFBLGlCQUFhN00sSUFBSWlDLGVBQUosQ0FBb0IsS0FBSzJCLFFBQXpCLENBQWI7O0FBRUEsU0FBS2tKLFFBQUwsQ0FBY0QsVUFBZCxFQUEwQkQsU0FBMUI7O0FBRUEsU0FBS0YsU0FBTCxHQUFpQixLQUFLTCxTQUF0QjtBQUNBLFNBQUtVLFNBQUwsR0FBaUIsS0FBS1YsU0FBdEI7O0FBRUEsU0FBS2YsZUFBTCxHQUF1QixLQUF2QjtBQUNELEdBakNEOztBQW1DQWxCLGFBQVd2TSxTQUFYLENBQXFCcU4sZUFBckIsR0FBdUMsU0FBU0EsZUFBVCxDQUF5QnhCLEdBQXpCLEVBQThCO0FBQ25FQSxRQUFJMEIsZUFBSjtBQUNBLFFBQUksS0FBS3ZCLGFBQVQsRUFBd0I7O0FBRXhCLFFBQUksQ0FBQyxLQUFLd0IsTUFBVixFQUFrQjtBQUNoQixXQUFLMkIsY0FBTCxHQUFzQixLQUF0QjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsS0FBckI7QUFDQTtBQUNEOztBQUVELFFBQUlDLHFCQUFxQixDQUF6QjtBQUNBLFFBQUlDLGdCQUFnQmpCLEtBQUtDLEdBQUwsRUFBcEI7QUFDQSxRQUFJaUIsaUJBQWlCRCxnQkFBZ0IsS0FBS2xCLGVBQTFDOztBQUVBLFFBQUlvQixrQkFBa0JyTixJQUFJaUMsZUFBSixDQUFvQixLQUFLMkIsUUFBekIsQ0FBdEI7QUFDQSxRQUFJMEosa0JBQWtCRCxrQkFBa0IsS0FBS3JCLGdCQUE3Qzs7QUFFQSxRQUFJc0Isb0JBQW9CLENBQXhCLEVBQTJCOztBQUUzQixRQUFJQyxjQUFjLEtBQWxCO0FBQ0EsUUFBSUMsYUFBYSxLQUFqQjtBQUNBLFFBQUlDLFdBQVcsS0FBZjtBQUNBLFFBQUk3RCxhQUFhLEVBQWpCOztBQUVBMkQsa0JBQWMxQixLQUFLVyxHQUFMLENBQVNjLGVBQVQsSUFBNEIsS0FBS3BKLE1BQUwsQ0FBWXdKLFVBQXREO0FBQ0EsUUFBSU4saUJBQWlCLEtBQUtsSixNQUFMLENBQVl5SixnQkFBakMsRUFBbURILGFBQWEsSUFBYjtBQUNuRDtBQUNBLFFBQUksS0FBS1AsYUFBTCxJQUFzQixLQUFLRCxjQUEzQixJQUE2QyxFQUFFTyxlQUFlQyxVQUFqQixDQUFqRCxFQUErRTtBQUM3RTVELG1CQUFhMEQsa0JBQWtCLENBQWxCLEdBQXNCLE1BQXRCLEdBQStCLE9BQTVDO0FBQ0FKLDJCQUFxQnJCLEtBQUtXLEdBQUwsQ0FBU2MsZUFBVCxDQUFyQjtBQUNELEtBSEQsTUFHTztBQUNMRyxpQkFBVyxJQUFYO0FBQ0E3RCxtQkFBYTBELGtCQUFrQixDQUFsQixHQUFzQixPQUF0QixHQUFnQyxNQUE3QztBQUNBSiwyQkFBcUIsS0FBSy9FLFdBQUwsR0FBbUIwRCxLQUFLVyxHQUFMLENBQVNjLGVBQVQsQ0FBeEM7QUFDRDs7QUFFRCxTQUFLM0ssV0FBTCxHQUFtQixLQUFLaUwsa0JBQUwsQ0FBd0IsS0FBSzVCLGdCQUE3QixFQUErQ3BDLFVBQS9DLEVBQTJENkQsUUFBM0QsQ0FBbkI7QUFDQSxTQUFLOUssV0FBTCxHQUFtQmtKLEtBQUtnQyxLQUFMLENBQVcsS0FBS2xMLFdBQWhCLENBQW5COztBQUVBLFFBQUksS0FBS3VCLE1BQUwsQ0FBWXJCLFNBQWhCLEVBQTJCO0FBQ3pCLFdBQUtGLFdBQUwsR0FBbUIsS0FBS3FILDZCQUFMLENBQW1DLEtBQUtySCxXQUF4QyxDQUFuQjtBQUNEOztBQUVELFFBQUlpSCxlQUFlLE1BQW5CLEVBQTJCc0QscUJBQXFCLENBQUNBLGtCQUF0Qjs7QUFFM0IsU0FBSzFFLGNBQUwsQ0FBb0IsS0FBS3RFLE1BQUwsQ0FBWXVFLFNBQWhDLEVBQTJDLEtBQUs5RixXQUFoRCxFQUE2RHVLLGtCQUE3RDs7QUFFQTtBQUNBLFNBQUtGLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsU0FBSzVCLE1BQUwsR0FBYyxLQUFkO0FBQ0QsR0FuREQ7O0FBcURBakIsYUFBV3ZNLFNBQVgsQ0FBcUJtTSw2QkFBckIsR0FBcUQsU0FBU0EsNkJBQVQsQ0FBdUNySCxXQUF2QyxFQUFvRDtBQUN2RyxRQUFJQSxnQkFBZ0IsQ0FBQyxDQUFyQixFQUF3QjtBQUN0QkEsb0JBQWMsS0FBS29ILGtCQUFMLEdBQTBCLENBQXhDO0FBQ0QsS0FGRCxNQUVPLElBQUlwSCxnQkFBZ0IsS0FBS29ILGtCQUFMLEdBQTBCLENBQTlDLEVBQWlEO0FBQ3REcEgsb0JBQWMsQ0FBZDtBQUNELEtBRk0sTUFFQSxDQUFFO0FBQ1QsV0FBT0EsV0FBUDtBQUNELEdBUEQ7O0FBU0F5SCxhQUFXdk0sU0FBWCxDQUFxQjJLLGNBQXJCLEdBQXNDLFNBQVNBLGNBQVQsQ0FBd0JDLFNBQXhCLEVBQW1DOUYsV0FBbkMsRUFBZ0R1SyxrQkFBaEQsRUFBb0U7QUFDeEcsUUFBSSxPQUFPQSxrQkFBUCxLQUE4QixXQUFsQyxFQUErQztBQUM3QyxVQUFJbk0sU0FBUyxLQUFLb0gsV0FBbEI7QUFDQSxVQUFJRSxRQUFRLEtBQUtDLG9CQUFMLEtBQThCM0YsV0FBMUM7QUFDQXVLLDJCQUFxQjdFLFFBQVF0SCxNQUE3QjtBQUNEO0FBQ0QsU0FBSytNLGFBQUwsQ0FBbUJuTCxXQUFuQjtBQUNBMEgsc0JBQWtCeE0sU0FBbEIsQ0FBNEI0SSxXQUE1QixDQUF3Q3RILElBQXhDLENBQTZDLElBQTdDLEVBQW1ELE1BQW5ELEVBQTJELGlCQUEzRCxFQUE4RXdELFdBQTlFO0FBQ0EwSCxzQkFBa0J4TSxTQUFsQixDQUE0QjRJLFdBQTVCLENBQXdDdEgsSUFBeEMsQ0FBNkMsSUFBN0MsRUFBbUQsUUFBbkQsRUFBNkQsaUJBQTdELEVBQWdGd0QsV0FBaEY7QUFDQSxTQUFLb0wsYUFBTCxDQUFtQixLQUFLbkssUUFBeEIsRUFBa0NzSixrQkFBbEMsRUFBc0R6RSxZQUFZLElBQWxFLEVBVHdHLENBUy9CO0FBQzFFLEdBVkQ7O0FBWUEyQixhQUFXdk0sU0FBWCxDQUFxQm1RLHlCQUFyQixHQUFpRCxTQUFTQSx5QkFBVCxDQUFtQ0MsV0FBbkMsRUFBZ0Q7QUFDL0YsUUFBSUMsY0FBYyxLQUFLbkUsa0JBQUwsR0FBMEIsQ0FBNUM7QUFDQSxRQUFJb0UsY0FBYyxLQUFLaEcsV0FBdkI7QUFDQSxRQUFJSSxhQUFhMkYsY0FBY0MsV0FBL0IsQ0FIK0YsQ0FHbkQ7O0FBRTVDLFFBQUlGLGdCQUFnQixDQUFoQixJQUFxQkEsY0FBY0MsV0FBdkMsRUFBb0Q7QUFDbERsTyxVQUFJYSxzQkFBSixDQUEyQixLQUFLK0MsUUFBaEMsRUFBMEMsQ0FBMUM7QUFDRDtBQUNGLEdBUkQ7O0FBVUF3RyxhQUFXdk0sU0FBWCxDQUFxQnNOLHFCQUFyQixHQUE2QyxTQUFTQSxxQkFBVCxHQUFpQztBQUM1RSxRQUFJaUQsU0FBUyxJQUFiOztBQUVBLFFBQUkzTCxPQUFPekMsSUFBSXVDLG1CQUFKLEVBQVg7O0FBRUEsU0FBS3FCLFFBQUwsQ0FBY2tFLGdCQUFkLENBQStCckYsSUFBL0IsRUFBcUMsVUFBVXNGLEVBQVYsRUFBYztBQUNqRCxVQUFJdkYsTUFBTXhDLElBQUlXLFVBQUosQ0FBZSxZQUFmLENBQVY7QUFDQXlOLGFBQU94SyxRQUFQLENBQWdCaEQsS0FBaEIsQ0FBc0I0QixHQUF0QixJQUE2QixNQUE3Qjs7QUFFQXhDLFVBQUlhLHNCQUFKLENBQTJCdU4sT0FBT3hLLFFBQWxDLEVBQTRDd0ssT0FBT3pMLFdBQVAsR0FBcUIsQ0FBQyxHQUFsRTs7QUFFQSxVQUFJeUwsT0FBT2xLLE1BQVAsQ0FBY3JCLFNBQWxCLEVBQTZCO0FBQzNCdUwsZUFBT0oseUJBQVAsQ0FBaUNJLE9BQU96TCxXQUF4QztBQUNEOztBQUVEMEgsd0JBQWtCeE0sU0FBbEIsQ0FBNEI0SSxXQUE1QixDQUF3Q3RILElBQXhDLENBQTZDaVAsTUFBN0MsRUFBcUQsTUFBckQsRUFBNkQsZ0JBQTdELEVBQStFQSxPQUFPekwsV0FBdEY7QUFDQTBILHdCQUFrQnhNLFNBQWxCLENBQTRCNEksV0FBNUIsQ0FBd0N0SCxJQUF4QyxDQUE2Q2lQLE1BQTdDLEVBQXFELFFBQXJELEVBQStELGdCQUEvRCxFQUFpRkEsT0FBT3pMLFdBQXhGOztBQUVBLFVBQUl5TCxPQUFPbEssTUFBUCxDQUFjb0csb0JBQWxCLEVBQXdDdEssSUFBSTBDLGdCQUFKLENBQXFCMEwsT0FBT3pMLFdBQTVCLEVBQXlDeUwsT0FBT3hLLFFBQWhELEVBQTBEd0ssT0FBT2xLLE1BQVAsQ0FBY3JCLFNBQXhFOztBQUV4Q3VMLGFBQU96TCxXQUFQLEdBQXFCLENBQXJCOztBQUVBeUwsYUFBT3ZFLGFBQVAsR0FBdUIsS0FBdkI7QUFDRCxLQWxCRDtBQW1CRCxHQXhCRDs7QUEwQkFPLGFBQVd2TSxTQUFYLENBQXFCaVEsYUFBckIsR0FBcUMsU0FBU0EsYUFBVCxDQUF1Qm5MLFdBQXZCLEVBQW9DO0FBQ3ZFLFNBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0QsR0FGRDs7QUFJQXlILGFBQVd2TSxTQUFYLENBQXFCeUssb0JBQXJCLEdBQTRDLFNBQVNBLG9CQUFULEdBQWdDO0FBQzFFLFFBQUl4RyxTQUFTK0osS0FBS1csR0FBTCxDQUFTeE0sSUFBSWlDLGVBQUosQ0FBb0IsS0FBSzJCLFFBQXpCLENBQVQsSUFBK0MsS0FBS3VFLFdBQWpFO0FBQ0EsV0FBTzBELEtBQUtnQyxLQUFMLENBQVcvTCxNQUFYLENBQVA7QUFDRCxHQUhEOztBQUtBc0ksYUFBV3ZNLFNBQVgsQ0FBcUIrUCxrQkFBckIsR0FBMEMsU0FBU0Esa0JBQVQsQ0FBNEJTLElBQTVCLEVBQWtDekUsVUFBbEMsRUFBOEM2RCxRQUE5QyxFQUF3RDtBQUNoRyxRQUFJM0wsU0FBUytKLEtBQUtnQyxLQUFMLENBQVcsRUFBRVEsT0FBTyxLQUFLbEcsV0FBZCxDQUFYLENBQWI7QUFDQSxRQUFJLENBQUNzRixRQUFMLEVBQWUsT0FBTzNMLE1BQVA7QUFDZixXQUFPOEgsZUFBZSxNQUFmLEdBQXdCLEVBQUU5SCxNQUExQixHQUFtQyxFQUFFQSxNQUE1QztBQUNELEdBSkQ7O0FBTUFzSSxhQUFXdk0sU0FBWCxDQUFxQmlQLFFBQXJCLEdBQWdDLFNBQVNBLFFBQVQsQ0FBa0IzSyxLQUFsQixFQUF5QnlLLFNBQXpCLEVBQW9DO0FBQ2xFLFNBQUtJLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEtBQXJCOztBQUVBOztBQUVBO0FBQ0EsUUFBSTlLLFNBQVMsS0FBS3FJLGNBQWxCLEVBQWtDLEtBQUt5QyxhQUFMLEdBQXFCLElBQXJCOztBQUVsQztBQUNBLFFBQUk5SyxTQUFTLEtBQUtzSSxjQUFsQixFQUFrQyxLQUFLdUMsY0FBTCxHQUFzQixJQUF0Qjs7QUFFbEMsUUFBSXNCLFlBQVluTSxRQUFReUssU0FBeEI7O0FBRUEsUUFBSTBCLFlBQVksS0FBSzVELFNBQXJCLEVBQWdDNEQsWUFBWSxLQUFLNUQsU0FBakI7QUFDaEMsUUFBSTRELFlBQVksS0FBSzFELFNBQXJCLEVBQWdDMEQsWUFBWSxLQUFLMUQsU0FBakI7O0FBRWhDNUssUUFBSU8sZUFBSixDQUFvQixLQUFLcUQsUUFBekIsRUFBbUMwSyxTQUFuQztBQUNELEdBbEJEOztBQW9CQWxFLGFBQVd2TSxTQUFYLENBQXFCa1EsYUFBckIsR0FBcUMsU0FBU0EsYUFBVCxDQUF1Qm5LLFFBQXZCLEVBQWlDMkssU0FBakMsRUFBNEM5RixTQUE1QyxFQUF1RDtBQUMxRixTQUFLb0IsYUFBTCxHQUFxQixJQUFyQjs7QUFFQSxRQUFJMkUsc0JBQXNCeE8sSUFBSWlDLGVBQUosQ0FBb0IyQixRQUFwQixDQUExQjs7QUFFQSxRQUFJcEIsTUFBTXhDLElBQUlXLFVBQUosQ0FBZSxZQUFmLENBQVY7QUFDQSxRQUFJRCxNQUFNVixJQUFJVyxVQUFKLENBQWUsV0FBZixDQUFWO0FBQ0EsUUFBSThOLFNBQVMsRUFBYjs7QUFFQSxRQUFJL04sUUFBUSxpQkFBWixFQUErQitOLFNBQVMsbUJBQVQsQ0FBL0IsS0FBaUUsSUFBSS9OLFFBQVEsV0FBWixFQUF5QitOLFNBQVMsV0FBVCxDQUF6QixLQUFtRCxDQUFFOztBQUV0SDdLLGFBQVNoRCxLQUFULENBQWU0QixHQUFmLElBQXNCaU0sU0FBUyxHQUFULEdBQWVoRyxTQUFmLEdBQTJCLEdBQWpEO0FBQ0E3RSxhQUFTaEQsS0FBVCxDQUFlRixHQUFmLElBQXNCLGtCQUFrQjhOLHNCQUFzQkQsU0FBeEMsSUFBcUQsV0FBM0U7QUFDRCxHQWJEOztBQWVBbkUsYUFBV3ZNLFNBQVgsQ0FBcUI2USxnQkFBckIsR0FBd0MsU0FBU0EsZ0JBQVQsQ0FBMEI5RSxVQUExQixFQUFzQztBQUM1RSxRQUFJLEtBQUtDLGFBQVQsRUFBd0I7QUFDeEIsUUFBSUMsT0FBTyxLQUFLeEIsb0JBQUwsRUFBWDtBQUNBLFFBQUl2SCxTQUFTLEtBQUtvSCxXQUFsQjs7QUFFQSxRQUFJeUIsZUFBZSxTQUFuQixFQUE4QjtBQUM1QjdJLGdCQUFVLENBQUMsQ0FBWDtBQUNBK0k7QUFDRCxLQUhELE1BR087QUFDTEE7QUFDRDs7QUFFREEsV0FBTyxLQUFLRSw2QkFBTCxDQUFtQ0YsSUFBbkMsQ0FBUDs7QUFFQSxTQUFLdEIsY0FBTCxDQUFvQixLQUFLdEUsTUFBTCxDQUFZdUUsU0FBaEMsRUFBMkNxQixJQUEzQyxFQUFpRC9JLE1BQWpEO0FBQ0QsR0FmRDs7QUFpQkFxSixhQUFXdk0sU0FBWCxDQUFxQmdOLGdCQUFyQixHQUF3QyxTQUFTQSxnQkFBVCxHQUE0QjtBQUNsRSxRQUFJOEQsZUFBZSxLQUFuQjs7QUFFQUMsV0FBTzlHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVk7QUFDNUMsVUFBSStHLFNBQVMsSUFBYjs7QUFFQSxVQUFJRixZQUFKLEVBQWtCO0FBQ2xCQSxxQkFBZSxJQUFmOztBQUVBRyxpQkFBVyxZQUFZO0FBQ3JCRCxlQUFPMUcsV0FBUCxHQUFxQm5JLElBQUljLFFBQUosQ0FBYStOLE9BQU9qTCxRQUFQLENBQWdCdkIsaUJBQTdCLENBQXJCO0FBQ0FzTSx1QkFBZSxLQUFmO0FBQ0QsT0FIRCxFQUdHLEdBSEg7QUFJRCxLQVZpQyxDQVVoQzFGLElBVmdDLENBVTNCLElBVjJCLENBQWxDLEVBVWMsS0FWZDtBQVdELEdBZEQ7O0FBZ0JBLFNBQU9tQixVQUFQO0FBQ0QsQ0EzVmdCLENBMlZmekcsZUEzVmUsQ0FBakI7O0FBNlZBLElBQUksT0FBT29MLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBT0EsT0FBT0MsT0FBZCxLQUEwQixXQUEvRCxFQUE0RUQsT0FBT0MsT0FBUCxHQUFpQjtBQUMzRjVFLGNBQVlBLFVBRCtFO0FBRTNGaEQseUJBQXVCQSxxQkFGb0U7QUFHM0YrQix3QkFBc0JBO0FBSHFFLENBQWpCO0FBSzVFLDJDOzs7Ozs7QUM3NUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsbUJBQW1CO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxvQkFBb0I7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLDRCQUE0QjtBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHVCQUF1QjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtB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QkFBVCxDQUEwQixpQkFBMUIsQ0FBbkI7QUFDQSxLQUFNd0ssY0FBYzVRLFNBQVNxSCxhQUFULENBQXVCLE1BQXZCLENBQXBCOztBQUVBdUksaURBQThDVyxFQUE5QyxFQUFvRCxVQUFDTSxNQUFELEVBQVk7QUFDL0RGLGFBQVduTSxPQUFYLENBQW9CLFVBQUN4RixHQUFEO0FBQUEsVUFBU0EsSUFBSWdQLFNBQUosR0FBZ0I2QyxPQUFPQyxPQUFQLENBQWVGLFdBQXhDO0FBQUEsR0FBcEI7QUFDQUEsY0FBWUcsU0FBWixHQUF5QkYsT0FBT0MsT0FBUCxDQUFlRSxPQUF4QztBQUNBLEVBSEQ7QUFJQTs7QUFFRGhSLFNBQVNzRyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsZUFBTztBQUNwRHFIO0FBQ0FNO0FBQ0FXO0FBQ0FHO0FBQ0FRO0FBQ0FlO0FBQ0EsQ0FQRCxFIiwiZmlsZSI6ImRldGFpbC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYTc2MjIzZDg5MGM1ZjQwOTM5MCIsImZ1bmN0aW9uIGdldEVtYWlsICgpIHtcblx0dmFyIHNFbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XG5cdGlmKHNFbWFpbCAhPT0gbnVsbCkgcmV0dXJuIHNFbWFpbDtcblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCB7Z2V0RW1haWx9O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpO2ZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO3ZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7aWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1yZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfXJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHN1cGVyQ2xhc3MpKSk7XG4gIH1zdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pO2lmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxudmFyIF9jdSA9IHtcbiAgZ2V0Rm5OYW1lOiBmdW5jdGlvbiBnZXRGbk5hbWUoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybjtcbiAgICB2YXIgc05hbWUgPSBmbi5uYW1lID8gZm4ubmFtZSA6IGZuLnRvU3RyaW5nKCkubWF0Y2goL2Z1bmN0aW9uXFxzKyhbXihcXCh8XFxzKV0rKS8pWzFdO1xuICAgIHJldHVybiBzTmFtZTtcbiAgfSxcbiAgc2V0VHJhbnNsYXRlM2RYOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUzZFgoZWxlLCBuVmFsdWUpIHtcbiAgICB2YXIgc1RGID0gdGhpcy5nZXRDU1NOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgICBlbGUuc3R5bGVbc1RGXSA9ICd0cmFuc2xhdGUzZCgnICsgblZhbHVlICsgJ3B4LCAwLCAwKSc7XG4gIH0sXG4gIHNldFRyYW5zbGF0ZTNkWFBlcmNlbnQ6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZTNkWFBlcmNlbnQoZWxlLCBuVmFsdWUpIHtcbiAgICB2YXIgc1RGID0gdGhpcy5nZXRDU1NOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgICBlbGUuc3R5bGVbc1RGXSA9ICd0cmFuc2xhdGUzZCgnICsgblZhbHVlICsgJyUsIDAsIDApJztcbiAgfSxcbiAgZ2V0V2lkdGg6IGZ1bmN0aW9uIGdldFdpZHRoKGVsZSkge1xuICAgIHZhciBuV2lkdGggPSAwO1xuXG4gICAgaWYgKGVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCkge1xuICAgICAgbldpZHRoID0gZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICBuV2lkdGggPSBlbGUub2Zmc2V0V2lkdGg7XG4gICAgfVxuICAgIHJldHVybiBuV2lkdGg7XG4gIH0sXG4gIGdldENTU05hbWU6IGZ1bmN0aW9uIGdldENTU05hbWUoc05hbWUpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuaHRDYWNoZURhdGEgPT09IFwidW5kZWZpbmVkXCIpIHRoaXMuaHRDYWNoZURhdGEgPSB7fTtcblxuICAgIGlmICh0aGlzLmh0Q2FjaGVEYXRhW3NOYW1lXSkgcmV0dXJuIHRoaXMuaHRDYWNoZURhdGFbc05hbWVdO1xuXG4gICAgdmFyIF9odE5hbWVTZXQgPSB7XG4gICAgICAndHJhbnNpdGlvbic6IFsnd2Via2l0VHJhbnNpdGlvbicsICd0cmFuc2l0aW9uJ10sXG4gICAgICAndHJhbnNmb3JtJzogWyd3ZWJraXRUcmFuc2Zvcm0nLCAndHJhbnNmb3JtJ11cbiAgICB9O1xuXG4gICAgdmFyIGFOYW1lTGlzdCA9IF9odE5hbWVTZXRbc05hbWVdO1xuXG4gICAgaWYgKCF0aGlzLmlzRXhpc3QoYU5hbWVMaXN0KSkgcmV0dXJuIG51bGw7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYU5hbWVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbYU5hbWVMaXN0W2ldXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5odENhY2hlRGF0YVtzTmFtZV0gPSBhTmFtZUxpc3RbaV07XG4gICAgICAgIHJldHVybiB0aGlzLmh0Q2FjaGVEYXRhW3NOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldENoaWxkT3JkZXI6IGZ1bmN0aW9uIGdldENoaWxkT3JkZXIoZWxDaGlsZCkge1xuICAgIHZhciBlbFBhcmVudCA9IGVsQ2hpbGQucGFyZW50Tm9kZTtcbiAgICB2YXIgbkluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChlbFBhcmVudC5jaGlsZHJlbiwgZWxDaGlsZCk7XG4gICAgcmV0dXJuIG5JbmRleDtcbiAgfSxcbiAgZ2V0VHJhbnNsYXRlM2RYOiBmdW5jdGlvbiBnZXRUcmFuc2xhdGUzZFgoZWxlKSB7XG4gICAgdmFyIHNURiA9IHRoaXMuZ2V0Q1NTTmFtZShcInRyYW5zZm9ybVwiKTtcbiAgICB2YXIgc1ByZUNzcyA9IGVsZS5zdHlsZVtzVEZdO1xuICAgIHZhciBuUHJlWCA9IDA7XG5cbiAgICBpZiAoc1ByZUNzcy5pbmRleE9mKFwiJVwiKSA9PT0gLTEpIHtcbiAgICAgIG5QcmVYID0gK3NQcmVDc3MucmVwbGFjZSgvdHJhbnNsYXRlM2RcXCgoLSpcXGQrKD86XFwuXFxkKykqKShweCkqXFwsLitcXCkvZywgXCIkMVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgblByZVggPSArc1ByZUNzcy5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKCgtKlxcZCsoPzpcXC5cXGQrKSopKCUpKlxcLC4rXFwpL2csIFwiJDFcIik7XG4gICAgICBuUHJlWCA9IG5QcmVYIC8gMTAwICogdGhpcy5nZXRXaWR0aChlbGUuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiBuUHJlWDtcbiAgfSxcbiAgZ2V0VHJhbnNsYXRlM2RYUGVyY2VudDogZnVuY3Rpb24gZ2V0VHJhbnNsYXRlM2RYUGVyY2VudChlbGUpIHtcbiAgICB2YXIgc1RGID0gdGhpcy5nZXRDU1NOYW1lKFwidHJhbnNmb3JtXCIpO1xuICAgIHZhciBzUHJlQ3NzID0gZWxlLnN0eWxlW3NURl07XG4gICAgdmFyIG5QcmVYID0gK3NQcmVDc3MucmVwbGFjZSgvdHJhbnNsYXRlM2RcXCgoLSpcXGQrKD86XFwuXFxkKykqKSglKSpcXCwuK1xcKS9nLCBcIiQxXCIpO1xuICAgIHJldHVybiBuUHJlWDtcbiAgfSxcbiAgZ2V0Q1NTVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gZ2V0Q1NTVHJhbnNpdGlvbkVuZCgpIHtcbiAgICB2YXIgc1RTID0gdGhpcy5nZXRDU1NOYW1lKCd0cmFuc2l0aW9uJyk7XG4gICAgdmFyIHNUU0UgPSBzVFMgPT09IFwid2Via2l0VHJhbnNpdGlvblwiID8gXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIgOiBcInRyYW5zaXRpb25lbmRcIjtcbiAgICByZXR1cm4gc1RTRTtcbiAgfSxcbiAgc2V0RHluYW1pY0hlaWdodDogZnVuY3Rpb24gc2V0RHluYW1pY0hlaWdodChuTmV4dE51bWJlciwgdGFyZ2V0LCBiQ2lyY3VsYXIpIHtcbiAgICBpZiAoYkNpcmN1bGFyKSB7XG4gICAgICBuTmV4dE51bWJlcisrO1xuICAgIH1cbiAgICB2YXIgZWxDdXJyZW50ID0gdGFyZ2V0LmNoaWxkcmVuW25OZXh0TnVtYmVyXTtcbiAgICB2YXIgbkhlaWdodCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZWxDdXJyZW50KS5oZWlnaHQpO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBuSGVpZ2h0ICsgXCJweFwiO1xuICB9LFxuICBzZXRDU1M6IGZ1bmN0aW9uIHNldENTUyhlbCwgc3R5bGUsIHZhbHVlKSB7XG4gICAgZWwuc3R5bGVbc3R5bGVdID0gdmFsdWU7XG4gIH0sXG4gIHNob3dMYXllcjogZnVuY3Rpb24gc2hvd0xheWVyKGVsKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfSxcbiAgY2xvc2VMYXllcjogZnVuY3Rpb24gY2xvc2VMYXllcihlbCkge1xuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSxcblxuXG4gIC8vY2hlY2sgbnVsbCBvciB1bmRlZmluZWRcbiAgaXNFeGlzdDogZnVuY3Rpb24gaXNFeGlzdChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEgIT0gbnVsbDtcbiAgfSxcbiAgaXNBcnJheTogZnVuY3Rpb24gaXNBcnJheShfYSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfYSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KF9hKTtcbiAgfSxcbiAgaXNGdW5jdGlvbjogZnVuY3Rpb24gaXNGdW5jdGlvbihmbikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG59O1xuLypcbiogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4qIENvcHlyaWdodCAoYykgMjAxNiBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuICpcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczogKlxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4gKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4qIFRIRSBTT0ZUV0FSRS4gKi9cblxuLyohXG4qIFxcQ29tbW9uQ29tb25lbnQuanMgdjAuMi4xXG4qIFxcY29yZSBjb21wb25lbnQgc291cmNlIGZvciBDb21wb25lbnRzIFVJIC5cbiogXFxjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIFxuKiBcXGxpY2Vuc2UgVGhpcyBwcm9qZWN0IGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiogXFxjb250cmlidXRvciBKaXN1IFlvdW4gKGppc3UueW91bkBnbWFpbC5jb20pXG4qIFxcd2FybmluZyBkb250J3VzZSB0aGlzIHNvdXJjZSBpbiBvdGhlciBsaWJyYXJ5IHNvdXJjZS5cbiovXG5cbnZhciBDb21tb25Db21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbW1vbkNvbXBvbmVudChlbFRhcmdldCwgaHRPcHRpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tbW9uQ29tcG9uZW50KTtcblxuICAgIHRoaXMuaHRPcHRpb24gPSBodE9wdGlvbjtcbiAgICB0aGlzLmh0Q2FjaGVEYXRhID0ge307XG4gICAgdGhpcy5lbFRhcmdldCA9IGVsVGFyZ2V0O1xuICAgIHRoaXMuaW5pdChodE9wdGlvbik7XG4gIH1cblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBpbml0KGh0T3B0aW9uKSB7XG4gICAgdGhpcy5zZXRJbml0VmFsdWUoKTtcbiAgICB0aGlzLnNldE9wdGlvbihodE9wdGlvbiwgdGhpcy5faHREZWZhdWx0T3B0aW9uLCB0aGlzLm9wdGlvbik7XG4gICAgdGhpcy5pbml0VmFsdWUoKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5zZXRJbml0VmFsdWUgPSBmdW5jdGlvbiBzZXRJbml0VmFsdWUoKSB7XG4gICAgdmFyIERFRkFVTFRfQ09SRV9FVkVOVCA9IFsnRk5fQ09NUE9ORU5UX0RJRF9MT0FEJ107XG4gICAgdmFyIF9kID0gdGhpcy5DT01QT05FTlRfQ09ORklHKCk7XG4gICAgdGhpcy5iTWFpbkNvbXBvbmVudCA9ICEhX2QuUExVR0lOUztcbiAgICB0aGlzLl9odERlZmF1bHRPcHRpb24gPSBfZC5ERUZBVUxUX09QVElPTjtcbiAgICB0aGlzLmFNeVBsdWdpbk5hbWUgPSBfZC5QTFVHSU5TO1xuICAgIHRoaXMuaHREZWZhdWx0Rm4gPSB0aGlzLmdldERlZmF1bHRDYWxsYmFja0xpc3QoREVGQVVMVF9DT1JFX0VWRU5ULmNvbmNhdChfZC5ERUZBVUxUX0NPTVBPTkVOVF9FVkVOVCkpO1xuXG4gICAgaWYgKHRoaXMuYk1haW5Db21wb25lbnQpIHtcbiAgICAgIHRoaXMuaHREZWZhdWx0UGx1Z2luRm4gPSB0aGlzLmdldERlZmF1bHRDYWxsYmFja0xpc3QoREVGQVVMVF9DT1JFX0VWRU5ULmNvbmNhdChfZC5ERUZBVUxUX1BMVUdJTl9FVkVOVCkpO1xuICAgIH1cbiAgICB0aGlzLmh0VXNlckZuID0ge307XG4gICAgdGhpcy5odFBsdWdpbkZuID0ge307XG4gICAgdGhpcy5vcHRpb24gPSB7fTtcbiAgfTtcblxuICAvL1RPRE8uIG1vdmUgdG8gc3VwZXIgQ2xhc3MuXG5cblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLnJlZ2lzdGVyVXNlck1ldGhvZCA9IGZ1bmN0aW9uIHJlZ2lzdGVyVXNlck1ldGhvZChodEZuKSB7XG4gICAgdGhpcy5zZXRPcHRpb24oaHRGbiwgdGhpcy5odERlZmF1bHRGbiwgdGhpcy5odFVzZXJGbik7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5yZWdpc3RlclBsdWdpbk1ldGhvZCA9IGZ1bmN0aW9uIHJlZ2lzdGVyUGx1Z2luTWV0aG9kKGh0Rm4pIHtcbiAgICB0aGlzLmFwcGVuZFBsdWdpbk1ldGhvZChodEZuLCB0aGlzLmh0RGVmYXVsdFBsdWdpbkZuLCB0aGlzLmh0UGx1Z2luRm4pO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUub25QbHVnaW5zID0gZnVuY3Rpb24gb25QbHVnaW5zKGFQbHVnaW5MaXN0KSB7XG4gICAgdGhpcy5pbml0UGx1Z2lucyh0aGlzLmFNeVBsdWdpbk5hbWUsIGFQbHVnaW5MaXN0LCB0aGlzLmVsVGFyZ2V0KTtcbiAgICB0aGlzLmNvbXBvbmVudERpZExvYWRlZCgpO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0T3B0aW9uID0gZnVuY3Rpb24gc2V0T3B0aW9uKGh0VmFsdWUsIGh0RGVmYXVsdFZhbHVlLCBodFN0b3JhZ2UpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgT2JqZWN0LmtleXMoaHREZWZhdWx0VmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIGlmICh0eXBlb2YgaHRWYWx1ZVt2XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBodFN0b3JhZ2Vbdl0gPSBodERlZmF1bHRWYWx1ZVt2XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaHRWYWx1ZVt2XSkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICAgICAgICBodFN0b3JhZ2Vbdl0gPSBodFZhbHVlW3ZdO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBodFN0b3JhZ2Vbdl0gPSB7fTtcbiAgICAgICAgX3RoaXMuc2V0T3B0aW9uLmNhbGwoX3RoaXMsIGh0VmFsdWVbdl0sIGh0RGVmYXVsdFZhbHVlW3ZdLCBodFN0b3JhZ2Vbdl0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuYXBwZW5kUGx1Z2luTWV0aG9kID0gZnVuY3Rpb24gYXBwZW5kUGx1Z2luTWV0aG9kKGh0VmFsdWUsIGh0RGVmYXVsdFZhbHVlLCBodFN0b3JhZ2UpIHtcbiAgICBPYmplY3Qua2V5cyhodERlZmF1bHRWYWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGh0U3RvcmFnZVt2XSkpIGh0U3RvcmFnZVt2XSA9IFtdO1xuICAgICAgaWYgKHR5cGVvZiBodFZhbHVlW3ZdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGh0U3RvcmFnZVt2XS5wdXNoKGh0RGVmYXVsdFZhbHVlW3ZdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh0U3RvcmFnZVt2XS5wdXNoKGh0VmFsdWVbdl0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5nZXREZWZhdWx0Q2FsbGJhY2tMaXN0ID0gZnVuY3Rpb24gZ2V0RGVmYXVsdENhbGxiYWNrTGlzdChhRm4pIHtcbiAgICB2YXIgaHRGbiA9IHt9O1xuICAgIGFGbi5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICBodEZuW3ZdID0gZnVuY3Rpb24gKCkge307XG4gICAgfSk7XG4gICAgcmV0dXJuIGh0Rm47XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5pbml0UGx1Z2lucyA9IGZ1bmN0aW9uIGluaXRQbHVnaW5zKGFNeVBsdWdpbk5hbWUsIGFQbHVnaW5MaXN0LCBlbFRhcmdldCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIG9QYXJlbnQgPSB0aGlzO1xuICAgIGFQbHVnaW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIHZhciBzTmFtZSA9IHYubmFtZTtcbiAgICAgIHZhciBvYmogPSB2Lm9iajtcbiAgICAgIGlmIChhTXlQbHVnaW5OYW1lLmluZGV4T2Yoc05hbWUpIDwgMCkgcmV0dXJuO1xuICAgICAgLy9sZXQgb1BsdWdpbiA9IG5ldyB3aW5kb3dbdi5uYW1lXShlbFRhcmdldCwgdi5vcHRpb24pO1xuICAgICAgdmFyIG9QbHVnaW4gPSBuZXcgb2JqKGVsVGFyZ2V0LCB2Lm9wdGlvbik7XG4gICAgICBvUGx1Z2luLnJlZ2lzdGVyVXNlck1ldGhvZCh2LnVzZXJNZXRob2QpO1xuICAgICAgX3RoaXMyLl9pbmplY3RQYXJlbnRPYmplY3Qob1BhcmVudCwgb1BsdWdpbik7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnREaWRMb2FkZWQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRMb2FkZWQoKSB7XG4gICAgdGhpcy5ydW5DdXN0b21GbignVVNFUicsICdGTl9DT01QT05FTlRfRElEX0xPQUQnKTtcbiAgICB0aGlzLnJ1bkN1c3RvbUZuKCdQTFVHSU4nLCAnRk5fQ09NUE9ORU5UX0RJRF9MT0FEJyk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5ydW5DdXN0b21GbiA9IGZ1bmN0aW9uIHJ1bkN1c3RvbUZuKHR5cGUsIGV2ZW50bmFtZSkge1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciByZXR1cm5WYWx1ZSA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcIlVTRVJcIjpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChfdHlwZW9mKHRoaXMuaHRVc2VyRm4pID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB0aGlzLmh0VXNlckZuW2V2ZW50bmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIF9odFVzZXJGbjtcblxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAoX2h0VXNlckZuID0gdGhpcy5odFVzZXJGbilbZXZlbnRuYW1lXS5hcHBseShfaHRVc2VyRm4sIF90b0NvbnN1bWFibGVBcnJheShhcmdzKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBjYXNlIFwiUExVR0lOXCI6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoX3R5cGVvZih0aGlzLmh0UGx1Z2luRm4pID09PSBcIm9iamVjdFwiICYmIF90eXBlb2YodGhpcy5odFBsdWdpbkZuW2V2ZW50bmFtZV0pID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB0aGlzLmh0UGx1Z2luRm5bZXZlbnRuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICBmbi5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShhcmdzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHt9XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLl9pbmplY3RQYXJlbnRPYmplY3QgPSBmdW5jdGlvbiBfaW5qZWN0UGFyZW50T2JqZWN0KG9QYXJlbnQsIG9DaGlsZCkge1xuICAgIG9DaGlsZC5kb2NraW5nUGx1Z2luTWV0aG9kKG9QYXJlbnQpO1xuICB9O1xuXG4gIHJldHVybiBDb21tb25Db21wb25lbnQ7XG59KCk7XG5cbi8qXG4qIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuKiBDb3B5cmlnaHQgKGMpIDIwMTYgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiAqXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6ICpcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuICpcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuKiBUSEUgU09GVFdBUkUuICovXG5cbi8qIVxuKiBcXFN3aXBlTmF2aWdhdGlvblBsdWdpbi5qcyB2MC4xXG4qIFxcY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiBcbiogXFxsaWNlbnNlIFRoaXMgcHJvamVjdCBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4qIFxcY29udHJpYnV0b3IgbmlnYXlvdW4gKG5pZ2F5b3VuQGdtYWlsLmNvbSlcbiogXFx3YXJuaW5nIGRvbnQndXNlIHRoaXMgc291cmNlIGluIG90aGVyIGxpYnJhcnkgc291cmNlLlxuKi9cblxudmFyIFN3aXBlTmF2aWdhdGlvblBsdWdpbiA9IGZ1bmN0aW9uIChfQ29tbW9uQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTd2lwZU5hdmlnYXRpb25QbHVnaW4sIF9Db21tb25Db21wb25lbnQpO1xuXG4gIFN3aXBlTmF2aWdhdGlvblBsdWdpbi5wcm90b3R5cGUuQ09NUE9ORU5UX0NPTkZJRyA9IGZ1bmN0aW9uIENPTVBPTkVOVF9DT05GSUcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNFTEVDVE9SOiB7fSxcbiAgICAgIERFRkFVTFRfQ09NUE9ORU5UX0VWRU5UOiBbXSxcbiAgICAgIERFRkFVTFRfT1BUSU9OOiB7XG4gICAgICAgICd1c2FnZSc6IGZhbHNlLFxuICAgICAgICAnZWxOYXZpV3JhcCc6IG51bGwsIC8vb3duIGVsZW1lbnQoI2lTY3JvbGxBcmVhKVxuICAgICAgICAnc2VsZXRlZENsYXNzTmFtZSc6ICdzZWxlY3RlZC1zd2lwZS1saScsXG4gICAgICAgICduRHVyYXRpb24nOiAyMDAsXG4gICAgICAgICdiTW91c2VFdmVudFN1cHBvcnQnOiBmYWxzZVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gU3dpcGVOYXZpZ2F0aW9uUGx1Z2luKGVsVGFyZ2V0LCBodE9wdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTd2lwZU5hdmlnYXRpb25QbHVnaW4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21tb25Db21wb25lbnQuY2FsbCh0aGlzLCBlbFRhcmdldCwgaHRPcHRpb24pKTtcbiAgfVxuXG4gIFN3aXBlTmF2aWdhdGlvblBsdWdpbi5wcm90b3R5cGUuaW5pdFZhbHVlID0gZnVuY3Rpb24gaW5pdFZhbHVlKCkge1xuICAgIHRoaXMuZWxQbHVnaW5UYXJnZXQ7XG4gICAgdGhpcy5lbE5hdmlXcmFwID0gdGhpcy5vcHRpb24uZWxOYXZpV3JhcDtcbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZSA9IG51bGw7XG4gIH07XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5yZWdpc3RlckV2ZW50cyA9IGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHRoaXMubW92ZVN3aXBlQXJlYSgpO1xuICB9O1xuXG4gIFN3aXBlTmF2aWdhdGlvblBsdWdpbi5wcm90b3R5cGUubW92ZVN3aXBlQXJlYSA9IGZ1bmN0aW9uIG1vdmVTd2lwZUFyZWEoKSB7XG4gICAgdmFyIGxpcyA9IHRoaXMub3B0aW9uLmVsTmF2aVdyYXAucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xuXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICB0aGF0Lm1vdmVwYXJlbnRTd2lwZVBhbmVsKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9uLmJNb3VzZUV2ZW50U3VwcG9ydCkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgbGlzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgdGhhdC5tb3ZlcGFyZW50U3dpcGVQYW5lbCh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFN3aXBlTmF2aWdhdGlvblBsdWdpbi5wcm90b3R5cGUubW92ZXBhcmVudFN3aXBlUGFuZWwgPSBmdW5jdGlvbiBtb3ZlcGFyZW50U3dpcGVQYW5lbChlbFRhcmdldCkge1xuICAgIHZhciBuV2lkdGggPSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5uU3dpcGVXaWR0aDtcbiAgICB2YXIgbkNoaWxkT3JkZXIgPSBfY3UuZ2V0Q2hpbGRPcmRlcihlbFRhcmdldCk7XG5cbiAgICB2YXIgbkRpZmYgPSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5nZXRDdXJyZW50Vmlld051bWJlcigpIC0gbkNoaWxkT3JkZXI7XG4gICAgdmFyIG5Nb3ZlVmFsdWUgPSBuRGlmZiAqIG5XaWR0aDtcblxuICAgIHZhciBuTmV4dE51bWJlciA9IG5DaGlsZE9yZGVyO1xuXG4gICAgLy9mb3Igbm8gYW5pbWF0aW9uLCBuRHVyYXRpb24gc2V0IHplcm8uXG4gICAgdGhpcy5vUGFyZW50SW5zdGFuY2UucnVuU3dpcGVBY3Rpb24odGhpcy5vcHRpb24ubkR1cmF0aW9uLCBuTmV4dE51bWJlcik7XG5cbiAgICB0aGlzLmhpZ2hsaWdodFNlbGVjdGVkTEkobkNoaWxkT3JkZXIpO1xuICB9O1xuXG4gIFN3aXBlTmF2aWdhdGlvblBsdWdpbi5wcm90b3R5cGUuaGlnaGxpZ2h0U2VsZWN0ZWRMSSA9IGZ1bmN0aW9uIGhpZ2hsaWdodFNlbGVjdGVkTEkoblNlbGVjdGVkQ291bnQpIHtcbiAgICBuU2VsZWN0ZWRDb3VudCsrO1xuICAgIC8vcmVtb3ZlIGxlZ2FjeSBjbGFzc1xuICAgIHZhciBfbGkgPSB0aGlzLm9wdGlvbi5lbE5hdmlXcmFwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyB0aGlzLm9wdGlvbi5zZWxldGVkQ2xhc3NOYW1lKTtcbiAgICB2YXIgX2N1ckNsYXNzTmFtZSA9IF9saS5jbGFzc05hbWU7XG4gICAgX2xpLmNsYXNzTmFtZSA9IF9saS5jbGFzc05hbWUucmVwbGFjZShfY3VyQ2xhc3NOYW1lLCBcIlwiKTtcblxuICAgIC8vYWRkIG5ldyBjbGFzc1xuICAgIHRoaXMub3B0aW9uLmVsTmF2aVdyYXAucXVlcnlTZWxlY3RvcihcImxpOm50aC1jaGlsZChcIiArIG5TZWxlY3RlZENvdW50ICsgXCIpXCIpLmNsYXNzTmFtZSArPSBcIiBcIiArIHRoaXMub3B0aW9uLnNlbGV0ZWRDbGFzc05hbWU7XG4gIH07XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5kb2NraW5nUGx1Z2luTWV0aG9kID0gZnVuY3Rpb24gZG9ja2luZ1BsdWdpbk1ldGhvZChvUGFyZW50KSB7XG4gICAgb1BhcmVudC5yZWdpc3RlclBsdWdpbk1ldGhvZCh7XG4gICAgICAnRk5fQkVGT1JFX1NXSVBFJzogdGhpcy5oaWdobGlnaHRTZWxlY3RlZExJLmJpbmQodGhpcyksXG4gICAgICAnRk5fQUZURVJfU1dJUEUnOiBmdW5jdGlvbiBGTl9BRlRFUl9TV0lQRSgpIHt9XG4gICAgfSk7XG4gICAgdGhpcy5vUGFyZW50SW5zdGFuY2UgPSBvUGFyZW50O1xuICB9O1xuXG4gIHJldHVybiBTd2lwZU5hdmlnYXRpb25QbHVnaW47XG59KENvbW1vbkNvbXBvbmVudCk7XG5cbi8qXG4qIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuKiBDb3B5cmlnaHQgKGMpIDIwMTYgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiAqXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6ICpcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuICpcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuKiBUSEUgU09GVFdBUkUuICovXG5cbi8qIVxuKiBcXFN3aXBlU3RlcE1vdmVyUGx1Z2luLmpzIHYwLjFcbiogXFxjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIFxuKiBcXGxpY2Vuc2UgVGhpcyBwcm9qZWN0IGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiogXFxjb250cmlidXRvciBuaWdheW91biAobmlnYXlvdW5AZ21haWwuY29tKVxuKiBcXHdhcm5pbmcgZG9udCd1c2UgdGhpcyBzb3VyY2UgaW4gb3RoZXIgbGlicmFyeSBzb3VyY2UuXG4qL1xuXG52YXIgU3dpcGVTdGVwTW92ZXJQbHVnaW4gPSBmdW5jdGlvbiAoX0NvbW1vbkNvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKFN3aXBlU3RlcE1vdmVyUGx1Z2luLCBfQ29tbW9uQ29tcG9uZW50Mik7XG5cbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW4ucHJvdG90eXBlLkNPTVBPTkVOVF9DT05GSUcgPSBmdW5jdGlvbiBDT01QT05FTlRfQ09ORklHKCkge1xuICAgIHJldHVybiB7XG4gICAgICBTRUxFQ1RPUjoge30sXG4gICAgICBERUZBVUxUX0NPTVBPTkVOVF9FVkVOVDogW10sXG4gICAgICBERUZBVUxUX09QVElPTjoge1xuICAgICAgICAncHJldkJ1dHRvbic6IG51bGwsXG4gICAgICAgICduZXh0QnV0dG9uJzogbnVsbCxcbiAgICAgICAgJ25EdXJhdGlvbic6IDIwMFxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gU3dpcGVTdGVwTW92ZXJQbHVnaW4oZWxUYXJnZXQsIGh0T3B0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN3aXBlU3RlcE1vdmVyUGx1Z2luKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tbW9uQ29tcG9uZW50Mi5jYWxsKHRoaXMsIGVsVGFyZ2V0LCBodE9wdGlvbikpO1xuICB9XG5cbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW4ucHJvdG90eXBlLmluaXRWYWx1ZSA9IGZ1bmN0aW9uIGluaXRWYWx1ZSgpIHtcbiAgICB0aGlzLmVsUGx1Z2luVGFyZ2V0O1xuICAgIHRoaXMuZWxQcmV2QnRuID0gdGhpcy5vcHRpb24ucHJldkJ1dHRvbjtcbiAgICB0aGlzLmVsTmV4dEJ0biA9IHRoaXMub3B0aW9uLm5leHRCdXR0b247XG4gICAgdGhpcy5vUGFyZW50SW5zdGFuY2UgPSBudWxsO1xuICB9O1xuXG4gIFN3aXBlU3RlcE1vdmVyUGx1Z2luLnByb3RvdHlwZS5yZWdpc3RlckV2ZW50cyA9IGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5lbFByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIF90aGlzMy5oYW5kbGVyQ2xpY2tCdXR0b24oZXZ0LCBcInRvTGVmdFwiKTtcbiAgICB9KTtcbiAgICB0aGlzLmVsTmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgX3RoaXMzLmhhbmRsZXJDbGlja0J1dHRvbihldnQsIFwidG9SaWdodFwiKTtcbiAgICB9KTtcbiAgfTtcblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUuaGFuZGxlckNsaWNrQnV0dG9uID0gZnVuY3Rpb24gaGFuZGxlckNsaWNrQnV0dG9uKGV2dCwgc0RpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLm9QYXJlbnRJbnN0YW5jZS5iQW5pbWF0aW9uaW5nKSByZXR1cm47XG4gICAgdmFyIG5DdXIgPSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5nZXRDdXJyZW50Vmlld051bWJlcigpO1xuICAgIHZhciBiQ2lyY3VsYXIgPSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5vcHRpb24uYkNpcmN1bGFyO1xuXG4gICAgaWYgKCFiQ2lyY3VsYXIpIHtcbiAgICAgIGlmIChuQ3VyID09PSAwICYmIHNEaXJlY3Rpb24gPT09IFwidG9MZWZ0XCIpIHJldHVybjtcbiAgICAgIGlmIChuQ3VyID09PSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5uU3dpcGVFbGVtZW50Q291bnQgLSAxICYmIHNEaXJlY3Rpb24gPT09IFwidG9SaWdodFwiKSByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5XaWR0aCA9IHRoaXMub1BhcmVudEluc3RhbmNlLm5Td2lwZVdpZHRoO1xuXG4gICAgaWYgKHNEaXJlY3Rpb24gPT09IFwidG9SaWdodFwiKSB7XG4gICAgICBuV2lkdGggKj0gLTE7XG4gICAgICBuQ3VyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5DdXItLTtcbiAgICB9XG5cbiAgICBpZiAoYkNpcmN1bGFyKSBuQ3VyID0gdGhpcy5vUGFyZW50SW5zdGFuY2UucmVBZGp1c3ROZXh0TnVtYmVyRm9yQ2lyY3VsYXIobkN1cik7XG5cbiAgICAvL2ZvciBubyBhbmltYXRpb24sIG5EdXJhdGlvbiBzZXQgemVyby5cbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZS5ydW5Td2lwZUFjdGlvbih0aGlzLm9wdGlvbi5uRHVyYXRpb24sIG5DdXIsIG5XaWR0aCk7XG4gIH07XG5cbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW4ucHJvdG90eXBlLnNldERpc3BsYXlPZkJ1dHRvbiA9IGZ1bmN0aW9uIHNldERpc3BsYXlPZkJ1dHRvbihuQ3VycmVudFBhbmVsKSB7XG4gICAgdmFyIG5NYXhQYW5lbCA9IHRoaXMub1BhcmVudEluc3RhbmNlLm5Td2lwZUVsZW1lbnRDb3VudCAtIDE7XG4gICAgaWYgKG5DdXJyZW50UGFuZWwgPT09IG5NYXhQYW5lbCkge1xuICAgICAgdGhpcy5lbFByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHRoaXMuZWxOZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2UgaWYgKG5DdXJyZW50UGFuZWwgPT09IDApIHtcbiAgICAgIHRoaXMuZWxQcmV2QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHRoaXMuZWxOZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxQcmV2QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB0aGlzLmVsTmV4dEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgfTtcblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUuZG9ja2luZ1BsdWdpbk1ldGhvZCA9IGZ1bmN0aW9uIGRvY2tpbmdQbHVnaW5NZXRob2Qob1BhcmVudCkge1xuICAgIGlmICghb1BhcmVudC5vcHRpb24uYkNpcmN1bGFyKSB7XG4gICAgICBvUGFyZW50LnJlZ2lzdGVyUGx1Z2luTWV0aG9kKHtcbiAgICAgICAgJ0ZOX0NPTVBPTkVOVF9ESURfTE9BRCc6IHRoaXMuc2V0RGlzcGxheU9mQnV0dG9uLmJpbmQodGhpcywgMCksXG4gICAgICAgICdGTl9BRlRFUl9TV0lQRSc6IHRoaXMuc2V0RGlzcGxheU9mQnV0dG9uLmJpbmQodGhpcylcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZSA9IG9QYXJlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIFN3aXBlU3RlcE1vdmVyUGx1Z2luO1xufShDb21tb25Db21wb25lbnQpO1xuXG4vKlxuKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiogQ29weXJpZ2h0IChjKSAyMDE2IFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gKlxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOiAqXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4qIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLiAqXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiogVEhFIFNPRlRXQVJFLiAqL1xuXG4vKiFcbiogXFxzd2lwZV9lczYuanMgdjAuMVxuKiBcXGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gXG4qIFxcbGljZW5zZSBUaGlzIHByb2plY3QgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKiBcXGNvbnRyaWJ1dG9yIG5pZ2F5b3VuIChuaWdheW91bkBnbWFpbC5jb20pXG4qIFxcd2FybmluZyBkb250J3VzZSB0aGlzIHNvdXJjZSBpbiBvdGhlciBsaWJyYXJ5IHNvdXJjZS5cbiovXG5cbnZhciBTd2VldFN3aXBlID0gZnVuY3Rpb24gKF9Db21tb25Db21wb25lbnQzKSB7XG4gIF9pbmhlcml0cyhTd2VldFN3aXBlLCBfQ29tbW9uQ29tcG9uZW50Myk7XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuQ09NUE9ORU5UX0NPTkZJRyA9IGZ1bmN0aW9uIENPTVBPTkVOVF9DT05GSUcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFBMVUdJTlM6IFsnU3dpcGVOYXZpZ2F0aW9uUGx1Z2luJywgJ1N3aXBlU3RlcE1vdmVyUGx1Z2luJ10sXG4gICAgICBTRUxFQ1RPUjoge1xuICAgICAgICAvL2lucHV0RmllbGRXcmFwOiAnLmlucHV0LXdyYXAnLCBcbiAgICAgIH0sXG4gICAgICBERUZBVUxUX0NPTVBPTkVOVF9FVkVOVDogWydGTl9CRUZPUkVfU1dJUEUnLCAnRk5fQUZURVJfU1dJUEUnXSxcbiAgICAgIERFRkFVTFRfUExVR0lOX0VWRU5UOiBbJ0ZOX0JFRk9SRV9TV0lQRScsICdGTl9BRlRFUl9TV0lQRSddLFxuICAgICAgREVGQVVMVF9PUFRJT046IHtcbiAgICAgICAgJ2JDaXJjdWxhcic6IGZhbHNlLFxuICAgICAgICAnbkR1cmF0aW9uJzogMTAwLFxuICAgICAgICAnbkJhY2tXaWR0aCc6IDYwLFxuICAgICAgICAnblNpZGVXaWR0aCc6IDAsXG4gICAgICAgICduRGVjaXNpb25TbG9wZSc6IDAuOCxcbiAgICAgICAgJ25Gb3JjZWRTd2lwZVRpbWUnOiAwLFxuICAgICAgICAnYlNldHRpbmdTY3JlZW5IZWlnaHQnOiBmYWxzZSxcbiAgICAgICAgJ2JNb3VzZUV2ZW50U3VwcG9ydCc6IGZhbHNlLFxuICAgICAgICAnYlRvdWNoRXZlbnRTdXBwb3J0JzogdHJ1ZVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gU3dlZXRTd2lwZShlbFRhcmdldCwgaHRPcHRpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3dlZXRTd2lwZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbW1vbkNvbXBvbmVudDMuY2FsbCh0aGlzLCBlbFRhcmdldCwgaHRPcHRpb24pKTtcbiAgfVxuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLmluaXRWYWx1ZSA9IGZ1bmN0aW9uIGluaXRWYWx1ZShodE9wdGlvbikge1xuICAgIC8vc2V0IGhlaWdodCBvZiB2aWV3QXJlYVxuICAgIC8vdGhpcy5zZXREeW5hbWljSGVpZ2h0KDEpO1xuICAgIC8vaWYodGhpcy5vcHRpb24uYlNldHRpbmdTY3JlZW5IZWlnaHQpIHRoaXMuZWxUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgIGlmICh0aGlzLm9wdGlvbi5iU2V0dGluZ1NjcmVlbkhlaWdodCkgX2N1LnNldER5bmFtaWNIZWlnaHQoMCwgdGhpcy5lbFRhcmdldCwgdGhpcy5vcHRpb24uYkNpcmN1bGFyKTtcblxuICAgIC8vc3dpcGUgY29udGFpbmVyIHdpZHRoXG4gICAgdGhpcy5uU3dpcGVXaWR0aCA9IF9jdS5nZXRXaWR0aCh0aGlzLmVsVGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkKTsgLy9jYXNlLiBwb3NpdGlvbiA6IHN0YXRpYyhmbG9hdClcblxuICAgIC8vc3dpcGUgZWxlbWVudCBjb3VudCBcbiAgICB0aGlzLm5Td2lwZUVsZW1lbnRDb3VudCA9IHRoaXMuZWxUYXJnZXQuY2hpbGRFbGVtZW50Q291bnQ7XG5cbiAgICB2YXIgYkNpcmN1bGFyID0gdGhpcy5vcHRpb24uYkNpcmN1bGFyO1xuICAgIHRoaXMubk1heFN3aXBlUmFuZ2UgPSBiQ2lyY3VsYXIgPyB0aGlzLm5Td2lwZVdpZHRoIDogMDtcbiAgICB0aGlzLm5NaW5Td2lwZVJhbmdlID0gYkNpcmN1bGFyID8gdGhpcy5uU3dpcGVFbGVtZW50Q291bnQgLSAyIDogdGhpcy5uU3dpcGVFbGVtZW50Q291bnQgLSAxO1xuICAgIHRoaXMubk1pblN3aXBlUmFuZ2UgKj0gLXRoaXMublN3aXBlV2lkdGg7XG5cbiAgICB0aGlzLm5NYXhWYWx1ZSA9IHRoaXMubk1heFN3aXBlUmFuZ2UgKyB0aGlzLm9wdGlvbi5uU2lkZVdpZHRoO1xuICAgIHRoaXMubk1pblZhbHVlID0gdGhpcy5uTWluU3dpcGVSYW5nZSAtIHRoaXMub3B0aW9uLm5TaWRlV2lkdGg7XG5cbiAgICB0aGlzLmJBbmltYXRpb25pbmcgPSBmYWxzZTtcbiAgICB0aGlzLm5OZXh0TnVtYmVyID0gMDtcblxuICAgIC8vVE9ETy4g7Ji17IWY7Jy866GcIOuwm+yVhOyEnCDtlYTsmpTtlZwg6rK97Jqw66eMIHJlc2l6ZSDsnbTrsqTtirgg66qo64uI7YSw66eB7ZWY64+E66GdIOq4sOuKpey2lOqwgC5cbiAgICB0aGlzLnJlY2FsY3VsYXRlV2lkdGgoKTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5yZWdpc3RlckV2ZW50cyA9IGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMub3B0aW9uLmJUb3VjaEV2ZW50U3VwcG9ydCkge1xuICAgICAgdGhpcy5lbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIF90aGlzNC5oYW5kbGVyVG91Y2hTdGFydChldnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBfdGhpczQuaGFuZGxlclRvdWNoTW92ZShldnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIF90aGlzNC5oYW5kbGVyVG91Y2hFbmQoZXZ0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbi5iTW91c2VFdmVudFN1cHBvcnQpIHtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIF90aGlzNC5oYW5kbGVyVG91Y2hTdGFydChldnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBfdGhpczQuaGFuZGxlclRvdWNoTW92ZShldnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXM0LmhhbmRsZXJUb3VjaEVuZChldnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb25FbmQoKTtcbiAgfTtcblxuICAvKiBFdmVudCBIYW5sZGVyICovXG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuaGFuZGxlclRvdWNoU3RhcnQgPSBmdW5jdGlvbiBoYW5kbGVyVG91Y2hTdGFydChldnQpIHtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuYkFuaW1hdGlvbmluZykgcmV0dXJuO1xuXG4gICAgdGhpcy5iU3dpcGUgPSB0cnVlO1xuICAgIHRoaXMuYkZpcnN0VG91Y2hNb3ZlID0gdHJ1ZTtcbiAgICB2YXIgYk1vdXNlRXZlbnQgPSBldnQudHlwZS5zdWJzdHIoMCwgNSkgPT09IFwibW91c2VcIjtcblxuICAgIHZhciBwYWdlWCA9IHZvaWQgMCxcbiAgICAgICAgcGFnZVkgPSB2b2lkIDA7XG5cbiAgICBpZiAoYk1vdXNlRXZlbnQpIHtcbiAgICAgIHBhZ2VYID0gZXZ0LnBhZ2VYO1xuICAgICAgcGFnZVkgPSBldnQucGFnZVk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhZ2VYID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgcGFnZVkgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgfVxuXG4gICAgdGhpcy5uU3RhcnRQb3NYID0gTWF0aC5mbG9vcihwYWdlWCk7XG4gICAgdGhpcy5uU3RhcnRQb3NZID0gTWF0aC5mbG9vcihwYWdlWSk7XG5cbiAgICB0aGlzLm5TdGFydFRyYW5zbGF0ZVggPSBfY3UuZ2V0VHJhbnNsYXRlM2RYKHRoaXMuZWxUYXJnZXQpO1xuICAgIC8vdGhpcy5uU3RhcnRUcmFuc2xhdGVYID0gX2N1LmdldFRyYW5zbGF0ZTNkWFBlcmNlbnQodGhpcy5lbFRhcmdldCkgLyAxMDAgKiBfY3UuZ2V0V2lkdGgodGhpcy5lbFRhcmdldC5maXJzdEVsZW1lbnRDaGlsZCk7XG5cbiAgICB0aGlzLm5Ub3VjaFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuaGFuZGxlclRvdWNoTW92ZSA9IGZ1bmN0aW9uIGhhbmRsZXJUb3VjaE1vdmUoZXZ0KSB7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmJBbmltYXRpb25pbmcpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuYlN3aXBlKSByZXR1cm47XG5cbiAgICB2YXIgYk1vdXNlRXZlbnQgPSBldnQudHlwZS5zdWJzdHIoMCwgNSkgPT09IFwibW91c2VcIjtcblxuICAgIHZhciBodEN1cnJlbnRFdnQgPSBiTW91c2VFdmVudCA/IGV2dCA6IGV2dC5jaGFuZ2VkVG91Y2hlc1swXTtcblxuICAgIHRoaXMubk1vdmVQb3NYID0gTWF0aC5mbG9vcihodEN1cnJlbnRFdnQucGFnZVgpO1xuICAgIHRoaXMubk1vdmVQb3NZID0gTWF0aC5mbG9vcihodEN1cnJlbnRFdnQucGFnZVkpO1xuXG4gICAgLy9kZXRlY3QgYW5nbGUgXG4gICAgaWYgKHRoaXMuYkZpcnN0VG91Y2hNb3ZlKSB7XG4gICAgICB2YXIgbkFuZ2xlRGlmZiA9IE1hdGguYWJzKHRoaXMubk1vdmVQb3NZIC0gdGhpcy5uU3RhcnRQb3NZKSAvIE1hdGguYWJzKHRoaXMubk1vdmVQb3NYIC0gdGhpcy5uU3RhcnRQb3NYKTtcbiAgICAgIHRoaXMuYlN3aXBlID0gISEobkFuZ2xlRGlmZiA8PSB0aGlzLm9wdGlvbi5uRGVjaXNpb25TbG9wZSk7XG4gICAgICBpZiAodGhpcy5iU3dpcGUgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICB0aGlzLm5QcmVNb3ZlWCA9IHRoaXMublN0YXJ0UG9zWDtcbiAgICB9XG5cbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBuTW92ZURpZmYgPSB0aGlzLm5Nb3ZlUG9zWCAtIHRoaXMublByZU1vdmVYO1xuICAgIHZhciBuUHJldmlvdXNYID0gMDtcblxuICAgIG5QcmV2aW91c1ggPSBfY3UuZ2V0VHJhbnNsYXRlM2RYKHRoaXMuZWxUYXJnZXQpO1xuXG4gICAgdGhpcy5kcmFnQXJlYShuUHJldmlvdXNYLCBuTW92ZURpZmYpO1xuXG4gICAgdGhpcy5uUHJlTW92ZVggPSB0aGlzLm5Nb3ZlUG9zWDtcbiAgICB0aGlzLm5QcmVNb3ZlWSA9IHRoaXMubk1vdmVQb3NYO1xuXG4gICAgdGhpcy5iRmlyc3RUb3VjaE1vdmUgPSBmYWxzZTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5oYW5kbGVyVG91Y2hFbmQgPSBmdW5jdGlvbiBoYW5kbGVyVG91Y2hFbmQoZXZ0KSB7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmJBbmltYXRpb25pbmcpIHJldHVybjtcblxuICAgIGlmICghdGhpcy5iU3dpcGUpIHtcbiAgICAgIHRoaXMuYk91dFJhbmdlUmlnaHQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYk91dFJhbmdlTGVmdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuV2lkdGhGb3JBbmltYXRpb24gPSAwO1xuICAgIHZhciBuVG91Y2hFbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbkRpZmZUb3VjaFRpbWUgPSBuVG91Y2hFbmRUaW1lIC0gdGhpcy5uVG91Y2hTdGFydFRpbWU7XG5cbiAgICB2YXIgbkxhc3RUcmFuc2xhdGVYID0gX2N1LmdldFRyYW5zbGF0ZTNkWCh0aGlzLmVsVGFyZ2V0KTtcbiAgICB2YXIgbkRpZmZUcmFuc2xhdGVYID0gbkxhc3RUcmFuc2xhdGVYIC0gdGhpcy5uU3RhcnRUcmFuc2xhdGVYO1xuXG4gICAgaWYgKG5EaWZmVHJhbnNsYXRlWCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgdmFyIGJTd2lwZVdpZHRoID0gZmFsc2U7XG4gICAgdmFyIGJTd2lwZVRpbWUgPSBmYWxzZTtcbiAgICB2YXIgYlN3aXBlR28gPSBmYWxzZTtcbiAgICB2YXIgc0RpcmVjdGlvbiA9IFwiXCI7XG5cbiAgICBiU3dpcGVXaWR0aCA9IE1hdGguYWJzKG5EaWZmVHJhbnNsYXRlWCkgPiB0aGlzLm9wdGlvbi5uQmFja1dpZHRoO1xuICAgIGlmIChuRGlmZlRvdWNoVGltZSA8IHRoaXMub3B0aW9uLm5Gb3JjZWRTd2lwZVRpbWUpIGJTd2lwZVRpbWUgPSB0cnVlO1xuICAgIC8vZGVjaWRlIGRpcmVjdGlvbi5cbiAgICBpZiAodGhpcy5iT3V0UmFuZ2VMZWZ0IHx8IHRoaXMuYk91dFJhbmdlUmlnaHQgfHwgIShiU3dpcGVXaWR0aCB8fCBiU3dpcGVUaW1lKSkge1xuICAgICAgc0RpcmVjdGlvbiA9IG5EaWZmVHJhbnNsYXRlWCA+IDAgPyBcImxlZnRcIiA6IFwicmlnaHRcIjtcbiAgICAgIG5XaWR0aEZvckFuaW1hdGlvbiA9IE1hdGguYWJzKG5EaWZmVHJhbnNsYXRlWCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJTd2lwZUdvID0gdHJ1ZTtcbiAgICAgIHNEaXJlY3Rpb24gPSBuRGlmZlRyYW5zbGF0ZVggPiAwID8gXCJyaWdodFwiIDogXCJsZWZ0XCI7XG4gICAgICBuV2lkdGhGb3JBbmltYXRpb24gPSB0aGlzLm5Td2lwZVdpZHRoIC0gTWF0aC5hYnMobkRpZmZUcmFuc2xhdGVYKTtcbiAgICB9XG5cbiAgICB0aGlzLm5OZXh0TnVtYmVyID0gdGhpcy5fZ2V0TmV4dFZpZXdOdW1iZXIodGhpcy5uU3RhcnRUcmFuc2xhdGVYLCBzRGlyZWN0aW9uLCBiU3dpcGVHbyk7XG4gICAgdGhpcy5uTmV4dE51bWJlciA9IE1hdGgucm91bmQodGhpcy5uTmV4dE51bWJlcik7XG5cbiAgICBpZiAodGhpcy5vcHRpb24uYkNpcmN1bGFyKSB7XG4gICAgICB0aGlzLm5OZXh0TnVtYmVyID0gdGhpcy5yZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhcih0aGlzLm5OZXh0TnVtYmVyKTtcbiAgICB9XG5cbiAgICBpZiAoc0RpcmVjdGlvbiA9PT0gJ2xlZnQnKSBuV2lkdGhGb3JBbmltYXRpb24gPSAtbldpZHRoRm9yQW5pbWF0aW9uO1xuXG4gICAgdGhpcy5ydW5Td2lwZUFjdGlvbih0aGlzLm9wdGlvbi5uRHVyYXRpb24sIHRoaXMubk5leHROdW1iZXIsIG5XaWR0aEZvckFuaW1hdGlvbik7XG5cbiAgICAvL1RPRE8uIG1ha2UgcmVzZXQgbWV0aG9kIFxuICAgIHRoaXMuYk91dFJhbmdlUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmJPdXRSYW5nZUxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLmJTd2lwZSA9IGZhbHNlO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnJlQWRqdXN0TmV4dE51bWJlckZvckNpcmN1bGFyID0gZnVuY3Rpb24gcmVBZGp1c3ROZXh0TnVtYmVyRm9yQ2lyY3VsYXIobk5leHROdW1iZXIpIHtcbiAgICBpZiAobk5leHROdW1iZXIgPT09IC0xKSB7XG4gICAgICBuTmV4dE51bWJlciA9IHRoaXMublN3aXBlRWxlbWVudENvdW50IC0gMztcbiAgICB9IGVsc2UgaWYgKG5OZXh0TnVtYmVyID09PSB0aGlzLm5Td2lwZUVsZW1lbnRDb3VudCAtIDIpIHtcbiAgICAgIG5OZXh0TnVtYmVyID0gMDtcbiAgICB9IGVsc2Uge31cbiAgICByZXR1cm4gbk5leHROdW1iZXI7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucnVuU3dpcGVBY3Rpb24gPSBmdW5jdGlvbiBydW5Td2lwZUFjdGlvbihuRHVyYXRpb24sIG5OZXh0TnVtYmVyLCBuV2lkdGhGb3JBbmltYXRpb24pIHtcbiAgICBpZiAodHlwZW9mIG5XaWR0aEZvckFuaW1hdGlvbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdmFyIG5XaWR0aCA9IHRoaXMublN3aXBlV2lkdGg7XG4gICAgICB2YXIgbkRpZmYgPSB0aGlzLmdldEN1cnJlbnRWaWV3TnVtYmVyKCkgLSBuTmV4dE51bWJlcjtcbiAgICAgIG5XaWR0aEZvckFuaW1hdGlvbiA9IG5EaWZmICogbldpZHRoO1xuICAgIH1cbiAgICB0aGlzLnNldE5leHROdW1iZXIobk5leHROdW1iZXIpO1xuICAgIF9Db21tb25Db21wb25lbnQzLnByb3RvdHlwZS5ydW5DdXN0b21Gbi5jYWxsKHRoaXMsICdVU0VSJywgJ0ZOX0JFRk9SRV9TV0lQRScsIG5OZXh0TnVtYmVyKTtcbiAgICBfQ29tbW9uQ29tcG9uZW50My5wcm90b3R5cGUucnVuQ3VzdG9tRm4uY2FsbCh0aGlzLCAnUExVR0lOJywgJ0ZOX0JFRk9SRV9TV0lQRScsIG5OZXh0TnVtYmVyKTtcbiAgICB0aGlzLnJ1blRyYW5zaXRpb24odGhpcy5lbFRhcmdldCwgbldpZHRoRm9yQW5pbWF0aW9uLCBuRHVyYXRpb24gLyAxMDAwKTsgLy90byBzZWNvbmQuXG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuX3Jlc3RvcmVUcmFuc2Zvcm1YUGVyY2VudCA9IGZ1bmN0aW9uIF9yZXN0b3JlVHJhbnNmb3JtWFBlcmNlbnQoblBhbmVsSW5kZXgpIHtcbiAgICB2YXIgblBhbmVsQ291bnQgPSB0aGlzLm5Td2lwZUVsZW1lbnRDb3VudCAtIDM7XG4gICAgdmFyIG5QYW5lbFdpZHRoID0gdGhpcy5uU3dpcGVXaWR0aDtcbiAgICB2YXIgbk1vdmVWYWx1ZSA9IG5QYW5lbENvdW50ICogblBhbmVsV2lkdGg7IC8vcmVmcyA6IGNsb25lZE5vZGUgaXMgMi5cblxuICAgIGlmIChuUGFuZWxJbmRleCA9PT0gMCB8fCBuUGFuZWxJbmRleCA+IG5QYW5lbENvdW50KSB7XG4gICAgICBfY3Uuc2V0VHJhbnNsYXRlM2RYUGVyY2VudCh0aGlzLmVsVGFyZ2V0LCAwKTtcbiAgICB9XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucmVnaXN0ZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uRW5kKCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIHNUU0UgPSBfY3UuZ2V0Q1NTVHJhbnNpdGlvbkVuZCgpO1xuXG4gICAgdGhpcy5lbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKHNUU0UsIGZ1bmN0aW9uIChldikge1xuICAgICAgdmFyIHNUUyA9IF9jdS5nZXRDU1NOYW1lKCd0cmFuc2l0aW9uJyk7XG4gICAgICBfdGhpczUuZWxUYXJnZXQuc3R5bGVbc1RTXSA9IFwibm9uZVwiO1xuXG4gICAgICBfY3Uuc2V0VHJhbnNsYXRlM2RYUGVyY2VudChfdGhpczUuZWxUYXJnZXQsIF90aGlzNS5uTmV4dE51bWJlciAqIC0xMDApO1xuXG4gICAgICBpZiAoX3RoaXM1Lm9wdGlvbi5iQ2lyY3VsYXIpIHtcbiAgICAgICAgX3RoaXM1Ll9yZXN0b3JlVHJhbnNmb3JtWFBlcmNlbnQoX3RoaXM1Lm5OZXh0TnVtYmVyKTtcbiAgICAgIH1cblxuICAgICAgX0NvbW1vbkNvbXBvbmVudDMucHJvdG90eXBlLnJ1bkN1c3RvbUZuLmNhbGwoX3RoaXM1LCAnVVNFUicsICdGTl9BRlRFUl9TV0lQRScsIF90aGlzNS5uTmV4dE51bWJlcik7XG4gICAgICBfQ29tbW9uQ29tcG9uZW50My5wcm90b3R5cGUucnVuQ3VzdG9tRm4uY2FsbChfdGhpczUsICdQTFVHSU4nLCAnRk5fQUZURVJfU1dJUEUnLCBfdGhpczUubk5leHROdW1iZXIpO1xuXG4gICAgICBpZiAoX3RoaXM1Lm9wdGlvbi5iU2V0dGluZ1NjcmVlbkhlaWdodCkgX2N1LnNldER5bmFtaWNIZWlnaHQoX3RoaXM1Lm5OZXh0TnVtYmVyLCBfdGhpczUuZWxUYXJnZXQsIF90aGlzNS5vcHRpb24uYkNpcmN1bGFyKTtcblxuICAgICAgX3RoaXM1Lm5OZXh0TnVtYmVyID0gMDtcblxuICAgICAgX3RoaXM1LmJBbmltYXRpb25pbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5zZXROZXh0TnVtYmVyID0gZnVuY3Rpb24gc2V0TmV4dE51bWJlcihuTmV4dE51bWJlcikge1xuICAgIHRoaXMubk5leHROdW1iZXIgPSBuTmV4dE51bWJlcjtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5nZXRDdXJyZW50Vmlld051bWJlciA9IGZ1bmN0aW9uIGdldEN1cnJlbnRWaWV3TnVtYmVyKCkge1xuICAgIHZhciBuSW5kZXggPSBNYXRoLmFicyhfY3UuZ2V0VHJhbnNsYXRlM2RYKHRoaXMuZWxUYXJnZXQpKSAvIHRoaXMublN3aXBlV2lkdGg7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobkluZGV4KTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5fZ2V0TmV4dFZpZXdOdW1iZXIgPSBmdW5jdGlvbiBfZ2V0TmV4dFZpZXdOdW1iZXIoblBvcywgc0RpcmVjdGlvbiwgYlN3aXBlR28pIHtcbiAgICB2YXIgbkluZGV4ID0gTWF0aC5yb3VuZCgtKG5Qb3MgLyB0aGlzLm5Td2lwZVdpZHRoKSk7XG4gICAgaWYgKCFiU3dpcGVHbykgcmV0dXJuIG5JbmRleDtcbiAgICByZXR1cm4gc0RpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgPyArK25JbmRleCA6IC0tbkluZGV4O1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLmRyYWdBcmVhID0gZnVuY3Rpb24gZHJhZ0FyZWEoblByZVgsIG5Nb3ZlRGlmZikge1xuICAgIHRoaXMuYk91dFJhbmdlUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmJPdXRSYW5nZUxlZnQgPSBmYWxzZTtcblxuICAgIC8vY2hlY2sgdmFsaWQgc3dpcGUgcmFuZ2UuIFxuXG4gICAgLy93aGVuIGdvIHRvIGxlZnQgb24gbGVmdC1zaWRlLlxuICAgIGlmIChuUHJlWCA+PSB0aGlzLm5NYXhTd2lwZVJhbmdlKSB0aGlzLmJPdXRSYW5nZUxlZnQgPSB0cnVlO1xuXG4gICAgLy93aGVuIGdvIHRvIHJpZ2h0IG9uIHJpZ2h0LXNpZGUuXG4gICAgaWYgKG5QcmVYIDw9IHRoaXMubk1pblN3aXBlUmFuZ2UpIHRoaXMuYk91dFJhbmdlUmlnaHQgPSB0cnVlO1xuXG4gICAgdmFyIG5OZXdWYWx1ZSA9IG5QcmVYICsgbk1vdmVEaWZmO1xuXG4gICAgaWYgKG5OZXdWYWx1ZSA+IHRoaXMubk1heFZhbHVlKSBuTmV3VmFsdWUgPSB0aGlzLm5NYXhWYWx1ZTtcbiAgICBpZiAobk5ld1ZhbHVlIDwgdGhpcy5uTWluVmFsdWUpIG5OZXdWYWx1ZSA9IHRoaXMubk1pblZhbHVlO1xuXG4gICAgX2N1LnNldFRyYW5zbGF0ZTNkWCh0aGlzLmVsVGFyZ2V0LCBuTmV3VmFsdWUpO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnJ1blRyYW5zaXRpb24gPSBmdW5jdGlvbiBydW5UcmFuc2l0aW9uKGVsVGFyZ2V0LCBuRGlzdGFuY2UsIG5EdXJhdGlvbikge1xuICAgIHRoaXMuYkFuaW1hdGlvbmluZyA9IHRydWU7XG5cbiAgICB2YXIgblByZXZpb3VzVHJhbnNsYXRlWCA9IF9jdS5nZXRUcmFuc2xhdGUzZFgoZWxUYXJnZXQpO1xuXG4gICAgdmFyIHNUUyA9IF9jdS5nZXRDU1NOYW1lKCd0cmFuc2l0aW9uJyk7XG4gICAgdmFyIHNURiA9IF9jdS5nZXRDU1NOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgICB2YXIgc1ZhbHVlID0gXCJcIjtcblxuICAgIGlmIChzVEYgPT09IFwid2Via2l0VHJhbnNmb3JtXCIpIHNWYWx1ZSA9IFwiLXdlYmtpdC10cmFuc2Zvcm1cIjtlbHNlIGlmIChzVEYgPT09IFwidHJhbnNmb3JtXCIpIHNWYWx1ZSA9IFwidHJhbnNmb3JtXCI7ZWxzZSB7fVxuXG4gICAgZWxUYXJnZXQuc3R5bGVbc1RTXSA9IHNWYWx1ZSArIFwiIFwiICsgbkR1cmF0aW9uICsgXCJzXCI7XG4gICAgZWxUYXJnZXQuc3R5bGVbc1RGXSA9ICd0cmFuc2xhdGUzZCgnICsgKG5QcmV2aW91c1RyYW5zbGF0ZVggKyBuRGlzdGFuY2UpICsgJ3B4LCAwLCAwKSc7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucnVuQXV0b0FuaW1hdGlvbiA9IGZ1bmN0aW9uIHJ1bkF1dG9BbmltYXRpb24oc0RpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLmJBbmltYXRpb25pbmcpIHJldHVybjtcbiAgICB2YXIgbkN1ciA9IHRoaXMuZ2V0Q3VycmVudFZpZXdOdW1iZXIoKTtcbiAgICB2YXIgbldpZHRoID0gdGhpcy5uU3dpcGVXaWR0aDtcblxuICAgIGlmIChzRGlyZWN0aW9uID09PSBcInRvUmlnaHRcIikge1xuICAgICAgbldpZHRoICo9IC0xO1xuICAgICAgbkN1cisrO1xuICAgIH0gZWxzZSB7XG4gICAgICBuQ3VyLS07XG4gICAgfVxuXG4gICAgbkN1ciA9IHRoaXMucmVBZGp1c3ROZXh0TnVtYmVyRm9yQ2lyY3VsYXIobkN1cik7XG5cbiAgICB0aGlzLnJ1blN3aXBlQWN0aW9uKHRoaXMub3B0aW9uLm5EdXJhdGlvbiwgbkN1ciwgbldpZHRoKTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5yZWNhbGN1bGF0ZVdpZHRoID0gZnVuY3Rpb24gcmVjYWxjdWxhdGVXaWR0aCgpIHtcbiAgICB2YXIgcmVzaXplcnVubmVyID0gZmFsc2U7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgaWYgKHJlc2l6ZXJ1bm5lcikgcmV0dXJuO1xuICAgICAgcmVzaXplcnVubmVyID0gdHJ1ZTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzNi5uU3dpcGVXaWR0aCA9IF9jdS5nZXRXaWR0aChfdGhpczYuZWxUYXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICByZXNpemVydW5uZXIgPSBmYWxzZTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIFN3ZWV0U3dpcGU7XG59KENvbW1vbkNvbXBvbmVudCk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgU3dlZXRTd2lwZTogU3dlZXRTd2lwZSxcbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luOiBTd2lwZU5hdmlnYXRpb25QbHVnaW4sXG4gIFN3aXBlU3RlcE1vdmVyUGx1Z2luOiBTd2lwZVN0ZXBNb3ZlclBsdWdpblxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN3aXBlX21lcmdlX2VzNS5qcy5tYXBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvc3dpcGVfbWVyZ2VfZXM1LmpzIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsImltcG9ydCAqIGFzIFN3aXBlIGZyb20gJy4vbGliL3N3aXBlX21lcmdlX2VzNS5qcyc7XG5pbXBvcnQgKiBhcyBjb21tb24gZnJvbSAnLi9jb21tb24uanMnO1xuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xuXG5cbmZ1bmN0aW9uIGluaXRTd2lwZU1vZHVsZSgpIHtcblx0Y29uc3QgZWxTd2FwV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlzdWFsX2ltZ1wiKTtcblx0Y29uc3Qgb015c3dpcGUgPSBuZXcgU3dpcGUuU3dlZXRTd2lwZSggZWxTd2FwV3JhcCwge1xuXHRcdCdiQ2lyY3VsYXInIDogdHJ1ZSxcbiAgICAnbkR1cmF0aW9uJyA6IDMwMCwgIC8vZGVmYXVsdCAxMDBcbiAgICAnbkJhY2tXaWR0aCcgOiA2MCwgIC8vZGVmYXVsdCA2MFxuICAgICduU2lkZVdpZHRoJyA6IDIwLCAgLy9kZWZhdWx0IDBcbiAgICAnbkRlY2lzaW9uU2xvcGUnIDogMC44LCAvL2RlZmF1bHQgMC44XG4gICAgJ25Gb3JjZWRTd2lwZVRpbWUnIDogMTAwLCAvL2RlZmF1bHQgMFxuICAgICdiU2V0dGluZ1NjcmVlbkhlaWdodCc6IGZhbHNlLFxuICAgICdiTW91c2VFdmVudFN1cHBvcnQnIDogdHJ1ZVxuICB9KTtcblxuXHRvTXlzd2lwZS5yZWdpc3RlclVzZXJNZXRob2Qoe1xuXHRcdCdGTl9CRUZPUkVfU1dJUEUnOiBmdW5jdGlvbihuKXt9LFxuXHRcdCdGTl9BRlRFUl9TV0lQRSc6IGZ1bmN0aW9uKG4pIHtcblx0XHRcdGNvbnN0IGVsTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfcGFnaW5hdGlvbiAubnVtOm50aC1jaGlsZCgxKVwiKTtcblx0XHRcdGVsTnVtLmlubmVyVGV4dCA9IG4rMTtcblx0XHR9LFxuXHRcdCdGTl9DT01QT05FTlRfRElEX0xPQUQnIDogZnVuY3Rpb24oKXt9XG5cdH0pO1xuXG5cdG9NeXN3aXBlLm9uUGx1Z2lucyhbXG5cdHtcblx0XHQnbmFtZScgICAgICA6ICdTd2lwZVN0ZXBNb3ZlclBsdWdpbicsXG5cdFx0J29wdGlvbicgICAgOiB7XG5cdFx0XHQncHJldkJ1dHRvbicgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9wcmV2XCIpLFxuXHRcdFx0J25leHRCdXR0b24nIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fbnh0XCIpLFxuXHRcdFx0J25EdXJhdGlvbic6IDEwMFxuXHRcdH0sXG5cdFx0J3VzZXJNZXRob2QnIDoge30sXG5cdFx0J29iaicgOiBTd2lwZS5Td2lwZVN0ZXBNb3ZlclBsdWdpblxuXHR9XSk7XG5cbn1cblxuLyogbGF5ZXIgb3BlbiAtIGNsb3NlICovXG5cbmZ1bmN0aW9uIHRvZ2dsZURldGFpbEluZm8oKSB7XG5cdGNvbnN0IGVsTW9yZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJrX21vcmVcIik7XG5cdGNvbnN0IGVsU3RvcmVfZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RvcmVfZGV0YWlsc1wiKTtcblxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsTW9yZXMsIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKHtjdXJyZW50VGFyZ2V0fSkgPT4ge1xuXG5cdFx0XHRpZiggY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJfb3BlblwiKSkgY3VycmVudFRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdGVsc2UgY3VycmVudFRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cblx0XHRcdGVsU3RvcmVfZGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvc2UzXCIpO1xuXHRcdFx0Y3VycmVudFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblx0XHR9LGZhbHNlKVxuXHR9KTtcbn1cblxuXG5mdW5jdGlvbiByZWdSZXNlcnZlTGluaygpIHtcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJrX2J0blwiKTtcblx0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcblx0XHRsb2NhdGlvbi5ocmVmID0gXCIuL3Jlc2VydmUuaHRtbFwiO1xuXHR9LCBmYWxzZSk7XG59XG5cblxuZnVuY3Rpb24gaW5pdFRhYlRvZ2dsZSgpIHtcblx0Y29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9fdGFiX2xzdFwiKTtcblx0Y29uc3QgZGV0YWlsX2FyZWFfd3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlsX2FyZWFfd3JhcFwiKTtcblx0Y29uc3QgZGV0YWlsX2xvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxfbG9jYXRpb25cIik7XG5cblx0dWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcblx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCBsaSA9IGV2dC50YXJnZXQuY2xvc2VzdCgnbGknKTtcblxuXHRcdGlmKGxpLmNsYXNzTGlzdC5jb250YWlucyhcIl9wYXRoXCIpKSB7XG5cdFx0XHRkZXRhaWxfYXJlYV93cmFwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXHRcdFx0ZGV0YWlsX2xvY2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXHRcdFx0bGkucHJldmlvdXNFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXRhaWxfYXJlYV93cmFwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXHRcdFx0ZGV0YWlsX2xvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXHRcdFx0bGkubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fVxuXG5cdFx0bGkuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0fSlcbn1cblxuZnVuY3Rpb24gY2hlY2tMb2dpbkZyb21TdG9yYWdlKCkge1xuXHRjb25zdCBlbWFpbCA9IGNvbW1vbi5nZXRFbWFpbCgpO1xuXHRjb25zdCBlbFZpZXdSZXNlcnZhdGlvbiAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZXdSZXNlcnZhdGlvblwiKTtcblx0aWYoZW1haWwgIT09IG51bGwpIGVsVmlld1Jlc2VydmF0aW9uLmlubmVyVGV4dCA9IGVtYWlsO1xufVxuXG5mdW5jdGlvbiBnZXRJZEZyb21VcmwoKSB7XG5cdHJldHVybiBsb2NhdGlvbi5zZWFyY2guc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGEoYXBpLCBmbikge1xuXHRmZXRjaChhcGkpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpXG5cdFx0fSkudGhlbigoanNvbikgPT4ge1xuXHRcdFx0Zm4uY2FsbCh0aGlzLCBqc29uKTtcblx0XHR9KS5jYXRjaCgoZXgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdH0pXG59XG5cbmZ1bmN0aW9uIHNldEluaXRpYWxDb250ZW50cygpIHtcblx0Y29uc3QgaWQgPSBnZXRJZEZyb21VcmwoKTtcblxuXHQvL1RpdGxlIGltYWdlXG5cdGNvbnN0IGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpc3VhbF9pbWcgbGkgPiBpbWdcIik7XG5cdGltZ3MuZm9yRWFjaCggKGltZykgPT4gaW1nLnNyYyA9IGBodHRwOi8vMjExLjI0OS42Mi4xMjMvcHJvZHVjdEltYWdlcy8ke2lkfT90eXBlPW1hYCApO1xuXG5cdGNvbnN0IHRpdGxlVGV4dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpc3VhbF90eHRfdGl0XCIpO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHNjXCIpO1xuXG5cdGdldERhdGEoYGh0dHA6Ly8yMTEuMjQ5LjYyLjEyMy9hcGkvcHJvZHVjdHMvJHtpZH1gLCAocmVzdWx0KSA9PiB7XG5cdFx0dGl0bGVUZXh0cy5mb3JFYWNoKCAoZWxlKSA9PiBlbGUuaW5uZXJUZXh0ID0gcmVzdWx0LnByb2R1Y3QuZGVzY3JpcHRpb24pO1xuXHRcdGRlc2NyaXB0aW9uLmlubmVySFRNTCA9ICByZXN1bHQucHJvZHVjdC5jb250ZW50O1xuXHR9KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZXZ0ID0+IHtcblx0aW5pdFN3aXBlTW9kdWxlKCk7XG5cdHRvZ2dsZURldGFpbEluZm8oKTtcblx0cmVnUmVzZXJ2ZUxpbmsoKTtcblx0aW5pdFRhYlRvZ2dsZSgpO1xuXHRjaGVja0xvZ2luRnJvbVN0b3JhZ2UoKTtcblx0c2V0SW5pdGlhbENvbnRlbnRzKCk7XG59KTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGV0YWlsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==